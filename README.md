# Plant Care Management System

A NextJS application for managing your indoor plants with authentication and personalized plant care tracking.

## Overview

This project is built using NextJS and Emotion styled-components, providing a modern and responsive interface for plant enthusiasts to manage their indoor garden. The application features JWT authentication for secure user access and a json-server backend for development purposes.

> **Note**: This project uses json-server to simulate a backend and is not secure nor production ready. This was a learning exercise to get a better understanding of JWT and authentication.

## Features

### Authentication
- User registration with email and password
- Secure password hashing using bcryptjs
- JWT-based authentication with 3-hour token expiration
- Protected routes for authenticated users

### Dashboard
- Overview of your plant collection
- Priority section for plants needing immediate attention
- Status display for healthy plants
- Calendar integration for care scheduling
- Quick actions for adding new plants

### Plant Care Management
- Dedicated plant care tracking interface
- Detailed care instructions and guidelines
- Customizable care schedules


### Reminders System
- Automated notifications for:
  - Watering schedules
  - Fertilizing dates
  - Repotting reminders
  - Seasonal care adjustments

## Tech Stack

- **Frontend**: NextJS, Emotion Styled Components
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcryptjs
- **Development Database**: json-server
- **Styling**: Emotion (CSS-in-JS)

## Getting Started

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
4. Run `npm run json-server` to start the json-server

