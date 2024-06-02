"use server"
import { BlogArtwork } from '@/components/blog/Blog';
import { BlogItem, ArticleDetail } from '@/types';
import { GraphQLClient } from 'graphql-request';

import Link from 'next/link';

// Ensure HYGRAPH_ENDPOINT is set or provide a default value
const endpoint = process.env.HYGRAPH_ENDPOINT as string;
const MAX_LIMIT = 8;

export const getFeatureList = async () => {
  const limit = 5; // Fixed limit for recent articles
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
  const skip = (page - 1) * limit + 5; // Skip the first 4 articles

  const query = `
    query BlogLists($limit: Int!, $skip: Int!) {
      blogLists(first: $limit, skip: $skip, orderBy: createdAt_DESC, where: { isFeatured: false }) {
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
  const limit = 100; // Fixed limit

  const query = `
  query BlogLists($limit: Int!) {
      blogLists( first: $limit,orderBy: publishedAt_DESC) {
        urlSlug
      }
    }
  `;
  const client = new GraphQLClient(endpoint);
  try {
    const data = await client.request<{ blogLists: BlogItem[] }>(query, {
      limit
    });

    return data.blogLists;

  } catch (error) {
    throw new Error(`Error fetching blog list: ${error}`);
  }
};