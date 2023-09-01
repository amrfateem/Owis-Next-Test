import {
  Box,
  Container,
  Heading,
  Button,
  Input,
  Textarea,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { useState } from "react";

const CreatePost = () => {
  const initialValues = {
    title: "",
    author: "",
    content: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .max(100, "Title must be 100 characters or less"),
    author: Yup.string().required("Author is required"),
    content: Yup.string()
      .required("Content is required")
      .min(50, "Content must be at least 50 characters"),
  });

  const createPostMutation = async (postData) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    return response.json();
  };

  const { mutate, isLoading, isError } = useMutation(createPostMutation);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (values) => {
    try {
      await mutate(values);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Container maxW="xl" mt="8">
      <Heading as="h1" size="xl" mb="4">
        Create a New Post
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box mb="4">
            <label htmlFor="title">Title</label>
            <Field
              as={Input}
              type="text"
              id="title"
              name="title"
              placeholder="Enter the title"
            />
            <ErrorMessage name="title" component="div" color="red.500" />
          </Box>

          <Box mb="4">
            <label htmlFor="author">Author</label>
            <Field
              as={Input}
              type="text"
              id="author"
              name="author"
              placeholder="Enter the author's name"
            />
            <ErrorMessage name="author" component="div" color="red.500" />
          </Box>

          <Box mb="4">
            <label htmlFor="content">Content</label>
            <Field
              as={Textarea}
              id="content"
              name="content"
              placeholder="Enter the post content"
              size="sm"
            />
            <ErrorMessage name="content" component="div" color="red.500" />
          </Box>
          <Button type="submit" colorScheme="teal" isLoading={isLoading}>
            Submit
          </Button>
          {isSuccess && (
            <Alert status="success" mt="4">
              <AlertIcon />
              Post created successfully!
            </Alert>
          )}

          {isError && (
            <Alert status="error" mt="4">
              <AlertIcon />
              Failed to create post
            </Alert>
          )}
        </Form>
      </Formik>
    </Container>
  );
};

export default CreatePost;
