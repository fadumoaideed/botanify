# Plant Care Management System

A NextJS application for managing your indoor plants with authentication and personalized plant care tracking.

## Overview

This project is built using NextJS and Emotion styled-components, providing a modern and responsive interface for plant enthusiasts to manage their indoor garden. The application uses Supabase for production authentication and database, while utilizing json-server for development purposes.

> **Note**: This project uses json-server to simulate a backend and is not secure nor production ready. This was a learning exercise to get a better understanding of JWT and authentication.

## Features

### Authentication

-  User registration with email and password
-  Secure authentication using Supabase Auth in production
-  Development mode using JSON server with JWT tokens
-  Protected routes for authenticated users

### Dashboard

-  Overview of your plant collection
-  Priority section for plants needing immediate attention
-  Status display for healthy plants
-  Calendar integration for care scheduling
-  Quick actions for adding new plants

### Plant Care Management

-  Dedicated plant care tracking interface
-  Detailed care instructions and guidelines
-  Customizable care schedules

### Reminders System

-  Automated notifications for:
   -  Watering schedules
   -  Fertilizing dates
   -  Repotting reminders
   -  Seasonal care adjustments

## Tech Stack

-  **Frontend**: NextJS, Emotion Styled Components
-  **Production Backend**: Supabase (Auth & Database)
-  **Development Backend**: json-server
-  **Styling**: Emotion (CSS-in-JS)

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Development Mode:

   ```bash
   # Start Next.js development server
   npm run dev

   # Start JSON servers (in a separate terminal)
   npm run dev:local
   ```

   This will run:

   -  Next.js on port 3000
   -  Users JSON server on port 3001
   -  Plants JSON server on port 3002

4. Production Mode:
   ```bash
   npm run dev
   ```
   This will use Supabase for authentication and data storage.
