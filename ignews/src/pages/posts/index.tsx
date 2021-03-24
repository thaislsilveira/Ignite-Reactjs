import Head from 'next/head'
import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'
import { GetStaticProps } from 'next';


export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time> 12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus inventore praesentium
              consequuntur autem ipsa quod dolore ex in, a mollitia voluptatum deserunt officiis veritatis doloribus
              sunt optio accusamus eveniet?
            </p>
          </a>
           <a href="#">
            <time> 12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus inventore praesentium
              consequuntur autem ipsa quod dolore ex in, a mollitia voluptatum deserunt officiis veritatis doloribus
              sunt optio accusamus eveniet?
            </p>
          </a>
           <a href="#">
            <time> 12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatibus inventore praesentium
              consequuntur autem ipsa quod dolore ex in, a mollitia voluptatum deserunt officiis veritatis doloribus
              sunt optio accusamus eveniet?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })

  console.log(response)

  return {
    props: {}
  }
}
