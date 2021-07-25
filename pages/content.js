import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { jsData } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const data = data;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta
                property="og:image"
                content={post.featuredImage?.node?.sourceUrl}
              />
            </Head>
          </article>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts
    }
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true
  };
}
