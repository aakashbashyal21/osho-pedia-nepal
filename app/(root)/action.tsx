"use server"
import { BlogArtwork } from '@/components/blog/blog';
import { BlogItem, ArticleDetail } from '@/types';
import { GraphQLClient } from 'graphql-request';
import Link from 'next/link';

// Ensure HYGRAPH_ENDPOINT is set or provide a default value
const endpoint = process.env.HYGRAPH_ENDPOINT as string;
const MAX_LIMIT = 8;

//8, 1
export const getBlogList = async (page: number) => {
  const limit = MAX_LIMIT; // Fixed limit

  const skip = (page - 1) * limit; // Calculate the number of items to skip
  console.log(skip);
  const query = `
  query BlogLists($limit: Int!, $skip: Int!) {
      blogLists( first: $limit, skip: $skip,orderBy: publishedAt_DESC) {
        image {
          url
        }
        urlSlug
        keywords
        title
        createdAt
      }
    }
  `;

  const client = new GraphQLClient(endpoint);
  console.log(query);
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
        keywords
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