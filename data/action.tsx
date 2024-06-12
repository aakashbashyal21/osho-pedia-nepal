"use server"
import { BlogArtwork } from '@/components/Blogs/Blog';
import { BlogItem, ArticleDetail } from '@/types';
import { GraphQLClient } from 'graphql-request';

import Link from 'next/link';

// Ensure HYGRAPH_ENDPOINT is set or provide a default value
const endpoint = process.env.HYGRAPH_ENDPOINT as string;
const MAX_LIMIT = 8;// Define the type for the response
interface BlogListsResponse {
  blogLists: BlogItem[];
  _allBlogListsMeta: {
    count: number;
  };
}

export const getFeatureList = async () => {
  const limit = 4; // Fixed limit for recent articles
  const query = `
    query BlogLists($limit: Int!) {
      featuredArticle: blogLists(first: 1, orderBy: createdAt_DESC, where: { isFeatured: true }) {
        image {
          url
        }
        description
        urlSlug
        categories
        title
        createdAt
      }
      recentArticles: blogLists(first: $limit, orderBy: createdAt_DESC, where: { isFeatured: false }) {
        image {
          url
        }
        description
        urlSlug
        categories
        title
        createdAt
      }
    }
  `;

  const client = new GraphQLClient(endpoint);

  try {
    const data = await client.request<{ featuredArticle: BlogItem[], recentArticles: BlogItem[] }>(query, {
      limit
    });

    return {
      featuredArticle: data.featuredArticle[0], // Get the single featured article
      recentArticles: data.recentArticles // Get the top 3 most recently published articles
    };

  } catch (error) {
    throw new Error(`Error fetching blog list: ${error}`);
  }
};
//8, 1
export const getBlogList = async (page: number) => {
  const limit = MAX_LIMIT; // Fixed limit
  const skip = (page - 1) * limit + 4; // Skip the first 4 articles

  const query = `
    query BlogLists($limit: Int!, $skip: Int!) {
      blogLists(first: $limit, skip: $skip, orderBy: createdAt_DESC, where: { AND:
      [
        {categories_contains_none: [Meditation]}, 
        {isFeatured: false}
      ]}) {
        image {
          url
        }
        description
        urlSlug
        categories
        title
        createdAt
      }
    }
  `;

  const client = new GraphQLClient(endpoint);

  try {
    const data = await client.request<{ blogLists: BlogItem[] }>(query, {
      limit,
      skip,
    });

    return data.blogLists.map((blog: BlogItem, index: number) => (
      <Link key={blog.title} href={`/article/${blog.urlSlug}`} className="group">
        <div className="w-full">
          <BlogArtwork
            key={blog.title}
            blog={blog}
            className="w-full"
            aspectRatio="portrait"
            index={index}
          />
        </div>
      </Link>
    ));

  } catch (error) {
    throw new Error(`Error fetching blog list: ${error}`);
  }
};

export const getRecentMeditationListCard = async (page: number) => {

  const { blogs } = await getRecentMeditationList(page);

  return blogs.map((blog: BlogItem, index: number) => (
    <Link key={blog.title} href={`/article/${blog.urlSlug}`} className="group">
      <div className="w-full">
        <BlogArtwork
          key={blog.title}
          blog={blog}
          className="w-full"
          aspectRatio="portrait"
          index={index}
        />
      </div>
    </Link>
  ));


}

export const getRecentMeditationList = async (page: number) => {
  const limit = 10; // Fixed limit
  const skip = (page - 1) * limit;

  const query = `
    query BlogLists($limit: Int!, $skip: Int!) {
      blogLists(first: $limit, skip: $skip, orderBy: createdAt_DESC, where: { AND:
      [
        {categories_contains_some: [Meditation]}, 
        {isFeatured: false}
      ]}) {
        image {
          url
        }
        description
        urlSlug
        categories
        title
        createdAt
      }
      blogListsConnection(where: { AND: [{ categories_contains_some: [Meditation] }, { isFeatured: false }] }) {
        aggregate {
          count
        }
      }
    }
  `;

  const client = new GraphQLClient(endpoint);

  try {
    const data = await client.request<{ blogLists: BlogItem[], blogListsConnection: { aggregate: { count: number } } }>(query, {
      limit,
      skip,
    });

    return { blogs: data.blogLists, totalCount: data.blogListsConnection.aggregate.count };
  } catch (error) {
    throw new Error(`Error fetching blog list: ${error}`);
  }
};



export const getAllMeditationList = async () => {
  const limit = 10; // Page size
  let allBlogLists: BlogItem[] = [];
  let hasNextPage = true;
  let skip = 0; // Start from the first record

  const query = `
    query BlogLists($limit: Int!, $skip: Int!) {
      blogLists(first: $limit, skip: $skip, orderBy: createdAt_ASC where: { AND:
      [
        {categories_contains_some: [Meditation]}, 
        {isFeatured: false}
      ]}) {
        image {
          url
        }
        description
        urlSlug
        categories
        title
        createdAt
      }
    }
  `;

  const client = new GraphQLClient(endpoint);

  try {
    while (hasNextPage) {
      const data = await client.request<BlogListsResponse>(query, { limit, skip });
      const blogLists = data.blogLists;

      if (blogLists.length > 0) {
        allBlogLists = [...allBlogLists, ...blogLists];
        skip += limit;
      } else {
        // If there are no more blog lists, exit the loop
        hasNextPage = false;
      }
    }

    return allBlogLists;
  } catch (error) {
    throw new Error(`Error fetching blog list: ${error}`);
  }
};



export const getBlogBySlug = async (slug: string): Promise<ArticleDetail | null> => {
  const query = `
    query BlogBySlug($slug: String!) {
      blogLists(
        where: {urlSlug: $slug}
        first: 1
      ) {
        title
        categories
        createdAt
        description
        publishedBy {
          name
          picture
        }
        urlSlug
        image {
          url
        }
        content {
          html
        }
      }
    }`;

  const client = new GraphQLClient(endpoint);

  try {
    const data = await client.request<{ blogLists: ArticleDetail[] }>(
      query,
      {
        slug,
      }
    );

    if (data.blogLists.length > 0) {
      return data.blogLists[0];
    } else {
      return null;
    }

  } catch (error) {
    throw new Error(`Error fetching blog by slug: ${error}`);
  }
};

export const getAllBlogList = async () => {
  const limit = 10; // Page size
  let allBlogLists: BlogItem[] = [];
  let hasNextPage = true;
  let skip = 0; // Start from the first record

  const query = `
    query BlogLists($limit: Int!, $skip: Int!) {
      blogLists(first: $limit, skip: $skip, orderBy: publishedAt_DESC) {
        urlSlug,
        title,
        description
      }
    }
  `;
  const client = new GraphQLClient(endpoint);

  try {
    while (hasNextPage) {
      const data = await client.request<BlogListsResponse>(query, { limit, skip });
      const blogLists = data.blogLists;

      console.log(`Fetched ${blogLists.length} items with skip=${skip}`);

      if (blogLists.length > 0) {
        allBlogLists = [...allBlogLists, ...blogLists];
        skip += limit;
      } else {
        // If there are no more blog lists, exit the loop
        hasNextPage = false;
      }
    }

    return allBlogLists;
  } catch (error) {
    throw new Error(`Error fetching blog list: ${error}`);
  }
};