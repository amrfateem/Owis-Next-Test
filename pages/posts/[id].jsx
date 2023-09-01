import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

const Post = ({ post }) => {
  const {
    data: author,
    isLoading: authorLoading,
    isError: authorError,
  } = useQuery(["author", post.userId], () => getAuthor(post.userId));

  const {
    data: comments,
    commentsLoading,
    commentsError,
  } = useQuery(["comments", post.id], () => getComments(post.id));

  console.log(author);

  return (
    <Container maxW="full" mt="8">
      <Heading as="h2" size="lg" mb="4">
        Post
      </Heading>
      <Box p="4" borderWidth="1px" borderRadius="lg">
        <Heading as="h1" size="xl" mb="4">
          {post.title}
        </Heading>
        <Text>{post.body}</Text>
        <Text fontSize="sm" color="gray.500" mt="4">
          Author:{" "}
          {authorLoading ? "Loading..." : authorError ? "Error" : author.name}
        </Text>
      </Box>
      <Box mt="8">
        <Heading as="h2" size="lg" mb="4">
          Comments
        </Heading>
        {commentsLoading ? (
          <p>Loading comments...</p>
        ) : commentsError ? (
          <p>Error loading comments</p>
        ) : Array.isArray(comments) ? (
          <SimpleGrid columns={1} spacing={4}>
            {comments.map((comment) => (
              <Box key={comment.id} p="4" borderWidth="1px" borderRadius="lg">
                <Text>{comment.body}</Text>
                <Text fontSize="sm" color="gray.500" mt="2">
                  Comment by: {comment.email}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <p>No comments available</p>
        )}
      </Box>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return {
    props: {
      post,
    },
  };
}

const getAuthor = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch author for user ID: ${userId}`);
  }
  const authorData = await response.json();
  return authorData.name;
};

const getComments = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch comments for post ID: ${postId}`);
  }
  return response.json();
};

export default Post;
