import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>

        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
  );
}

/**
 * 静的ファイルジェネレート動的なコンテンツをビルド時に読み込み静的なファイルとする
 * fallbackは事前ビルドしたパス以外にアクセスした場合の挙動を制御する
 * @returns {Promise<{paths: *, fallback: boolean}>}
 */
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}