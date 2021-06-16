import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from "next";
import {getPrismicClient} from "../../services/prismic";
import {RichText} from "prismic-dom";
import Head from 'next/head';
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {Header} from "../../components/Header";
import {Sidebar} from "../../components/Sidebar";
import styles from "./post.module.scss";

type Post = {
  slug: string;
  title: string;
  updatedAt: Date;
  content: HTMLElement;
  image: string;
}

interface PostProps {
  post: Post;
}

export default function Post({post}: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | GymStation</title>
      </Head>
      <Flex direction="column" h='100vh'>
        <Header/>
        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
          <Sidebar/>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
            mx='auto'
            maxWidth={800}
            mb='6'
          >
            <Image src={post.image} alt="Segun Adebayo"/>
            <Text mt='4'>{post.updatedAt}</Text>
            <Text fontSize='lg' fontWeight='bold' my='2'>{post.title}</Text>
            <Box
              className={styles.post}
              mt='8'
              lineHeight='8'
              fontSize='md'
              dangerouslySetInnerHTML={{__html: post.content}}
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({req, params}) => {
  const {slug} = params;

  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID('post', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    image: response.data.image.url,
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {post},
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  return {
    paths: [
      {
        params: {
          slug: 'acorde-com-o-pe-direito'
        }
      },
      {
        params: {
          slug: 'no-crossfit-encontrei-uma-atividade-para-amar'
        }
      },
    ],
    fallback: 'blocking'
  }
}
