import {GetStaticPaths, GetStaticPathsResult, GetStaticProps} from "next";
import {getPrismicClient} from "../../services/prismic";
import {RichText} from "prismic-dom";
import Head from 'next/head';
import {Box, calc, Flex, Image, Text} from "@chakra-ui/react";
import {Sidebar} from "../../components/Sidebar";
import styles from "./post.module.scss";
import {theme} from "../../styles/theme";

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
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' mt='12'>
        <Sidebar/>
        <Box
          p='8'
          bg='gray.800'
          borderRadius={8}
          pb='4'
          mx='auto'
          maxWidth={800}
          maxH='85vh'
          mb='6'
          overflowY='scroll'
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.colors.gray[100],
              borderRadius: '24px',
            },
          }}
        >
          <Image src={post.image} alt="Segun Adebayo"/>
          <Text mt='4'>{post.updatedAt}</Text>
          <Text fontSize='lg' fontWeight='bold' my='2'>{post.title}</Text>
          <Box
            className={styles.post}
            mt='8'
            lineHeight='8'
            fontSize='md'
            dangerouslySetInnerHTML={{__html: JSON.stringify(post.content)}}
          />
        </Box>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params;

  const prismic = getPrismicClient();
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
