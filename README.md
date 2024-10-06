# Test User App

A modern and efficient trading chart application built with **Vite**, **React**, and **TypeScript**, following the **Feature-Sliced Design (FSD)** architecture pattern. The project uses **RTK Query** and **Redux** for state management and API interactions, with a responsive UI designed using **Tailwind CSS**. Development tools include **ESLint**, **Prettier**, and **pnpm** for package management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Scripts](#scripts)


## Features

- **CRUD USERS**: displaying list of users with edit, create functionalities, pagination, filtering and sorting
- **Responsive Design**: Fully responsive UI built with **Tailwind CSS**.
- **API Integration**: Fetch and manage data using **RTK Query**.
- **State Management**: Centralized state management with **Redux**.
- **Developer-friendly**: Set up with **ESLint**, **Prettier**, and **pnpm** for code quality and package management.

## Technologies Used

- **Vite**: Lightning-fast build tool for modern web applications.
- **React**: Popular library for building user interfaces.
- **TypeScript**: Superset of JavaScript, offering type safety.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **RTK Query**: Efficient data fetching and caching solution built on top of Redux Toolkit.
- **Redux**: Predictable state container for managing application state.
- **Feature-Sliced Design (FSD)**: A scalable architecture pattern focusing on splitting features by business logic and domains.
- **ESLint**: Linter for identifying and reporting on code patterns.
- **Prettier**: Opinionated code formatter.
- **pnpm**: Fast, disk-space efficient package manager.

## Project Structure

This project follows the **Feature-Sliced Design (FSD)** architecture to ensure scalability and maintainability. Below is a high-level overview of the directory structure:

```bash
├── src/
│   ├── app/           # Application-wide configuration (store, routes, etc.)
│   ├── entities/      # Domain-level business entities
│   ├── features/      # Functionality that solves specific business problems
│   ├── shared/        # Reusable components, hooks, and utilities, ui-kit
│   ├── widgets/       # Complex UI components made of multiple entities and features
│   └── pages/         # Pages or views that combine widgets and features
├── public/            # Static assets (images, fonts, etc.)
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── package.json       # Project metadata and scripts
└── vite.config.ts     # Vite configuration

## Installation

1. **Clone the repository**:

   ```bash
    git clone https://github.com/your-username/  trading-chart-app.git
   ```

2. **Navigate to the project directory and run the following commands**:
  ```bash
    cd trading-chart-app

    pnpm install

    pnpm dev
  ```

