# Learning Management Platform

Welcome to the Learning Management Platform, a comprehensive system developed for educational institutions to manage courses, students, and resources efficiently.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [License](#license)

## Introduction

The Learning Management Platform is a Next.js application designed to streamline the management of courses, assignments, and student data. It provides a user-friendly interface for both students and administrators, facilitating an effective learning environment.

## Features

- **User Authentication:** Secure user authentication using JWT tokens with Clerk.
- **Course Management:** Create, update, and delete courses with ease.
- **Assignment Tracking:** Manage assignments, track submissions, and provide feedback.
- **User Dashboard:** A personalized dashboard for students and instructors.
- **Responsive Design:** Utilizes Tailwind CSS for a mobile-friendly and responsive layout.
- **Media Handling:** Mux integration for efficient video hosting and streaming.
- **Database:** MySQL database with Prisma ORM for data persistence.
- **Scalability:** Planetscale for managing and scaling the database.

## Technologies Used

- [Next.js 13](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShaderCanvas](https://github.com/solana-labs/shadcn)
- [MySQL](https://www.mysql.com/)
- [Prisma](https://www.prisma.io/)
- [Planetscale](https://planetscale.com/)
- [Mux](https://mux.com/)
- [Clerk](https://clerk.dev/)

## Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/your-username/learning-management-platform.git

2. Navigate to the project directory:
   
   ```bash
    cd learning-management-platform

3. Install dependencies:
   
   ```bash
   npm install

## Configuration

1. Set up a MySQL & Planetscale database and configure the connection in the .env file.
2. Obtain API keys for Mux and Planetscale and add them to the .env file.
3. Configure Clerk by adding your API key and other required information to the .env file.
4. Run Prisma migrations:
   
   ```bash
   npx prisma generate
   
   npx prisma db push

## Usage

1. Start the development server:
   
    ```bash
    npm run dev
3. Explore the Learning Management Platform and its features.

## License
This project is licensed under the MIT License.
