import { Link } from "@chakra-ui/next-js";

import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { useQuery, useQueryClient } from "react-query";

const Home = ({ posts }) => {
  const {
    data: authors,
    isLoading: authorsLoading,
    isError: authorsError,
  } = useQuery("authors", fetchAuthors);
  return (
    <Container maxW="-moz-fit-content" mt="8">
      <Heading as="h1" size="xl" mb="4">
        Blog Posts
      </Heading>
      <Link href="/create-post">
          <Button mb="4">Create Post</Button>
      </Link>
      {authorsLoading ? (
        <p>Loading authors...</p>
      ) : authorsError ? (
        <p>Error loading authors</p>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {posts.map((post) => {
            // Find the author by matching userId with authors' id
            const author = authors.find((author) => author.id === post.userId);

            return (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <Box
                  p="4"
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{ shadow: "md" }}
                  transition="all 0.2s"
                >
                  <Heading as="h2" size="md" mb="2">
                    {post.title}
                  </Heading>
                  <Text>{post.body}</Text>
                  <Text fontSize="sm" color="gray.500">
                    Author: {author ? author.name : "Unknown"}
                  </Text>
                </Box>
              </Link>
            );
          })}
        </SimpleGrid>
      )}
    </Container>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}

const fetchAuthors = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch authors");
  }
  return response.json();
};

export default Home;
