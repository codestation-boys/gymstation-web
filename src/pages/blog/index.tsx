import Head from "next/head";
import {Box, Flex, SimpleGrid, Image, Text} from "@chakra-ui/react";
import {Sidebar} from "../../components/Sidebar";
import {Header} from "../../components/Header";
import {GetStaticProps} from "next";
import {getPrismicClient} from "../../services/prismic";
import Prismic from "@prismicio/client";
import {RichText} from "prismic-dom";
import Link from 'next/link';


interface PostsProps {
  posts: Post[]
}

type Post = {
  slug: string,
  title: string,
  excerpt: string,
  updatedAt: Date,
  image: string
}

export default function Blog({posts}: PostsProps) {
  return (
    <>
      <Head>
        <title>Blog | GymStation</title>
      </Head>
      <Flex direction="column" h='100vh'>
        <Header/>
        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
          <Sidebar/>

          <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
            {posts.map(post => (
              <Link href={`/blog/${post.slug}`}>

                <Box
                  p='8'
                  bg='gray.800'
                  borderRadius={8}
                  pb='4'
                >
                  <Image src={post.image} alt="Segun Adebayo"/>
                  <Text mt='4'>{post.updatedAt}</Text>
                  <Text fontSize='lg' fontWeight='bold' my='2'>{post.title}</Text>
                  <Text>{post.excerpt}</Text>

                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
      Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content', 'post.image'],
      pageSize: 100,
    }
  );
  const posts = response.results.map(post => {

    return {
      slug: post.uid,
      image: post.data.image.url,
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    },
  }
}