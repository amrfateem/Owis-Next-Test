# Blog Post Web Application

A simple web application for creating and viewing blog posts. This project utilizes Next.js, Chakra UI, React Query, and fetches data from the JSONPlaceholder API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Design Decisions](#design-decisions)
- [Technologies](#technologies)

## Overview

The Blog Post Web Application allows users to view a list of blog posts, create new posts, and view individual posts with their respective authors. This project demonstrates the integration of Next.js for server-side rendering, Chakra UI for styling, React Query for data fetching, and dynamic routing.

## Features

- View a list of blog posts.
- Create new blog posts.
- View individual blog posts with their authors.
- Error handling and loading states for API requests.
- Integration with JSONPlaceholder API for data.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js Latest
- npm Latest

### Installation

1. Clone the repository:

git clone https://github.com/amrfateem/Owis-Next-Test

2. Navigate to the project directory:

cd Owis-Next-Test

3. Install dependencies:

npm i

4. Start the development server:

npm run dev

5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Usage

- Visit the homepage to view a list of blog posts.
- Click "Create Post" to create a new blog post.
- Click on a blog post title to view the full post and author information.

## Design Decisions

- **Next.js:** Next.js was chosen for server-side rendering to improve performance and SEO.
- **Chakra UI:** Chakra UI was used for styling due to its simplicity and flexibility.
- **React Query:** React Query was utilized for data fetching, providing error handling and loading states.

## Technologies

- [Next.js](https://nextjs.org/): A React framework for server-rendered applications.
- [Chakra UI](https://chakra-ui.com/): A simple component library for building React applications.
- [React Query](https://react-query.tanstack.com/): A library for managing, caching, and synchronizing server state in React applications.