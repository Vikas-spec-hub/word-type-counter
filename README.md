# Word Type Counter

## Backend Setup

### Steps to run project

Make sure the AWS SAM CLI is installed and configured with your AWS account.

1. Go to the `backend/word-counter` directory using the command:
   ```bash
   cd backend/word-counter
   ```

2. Install dependencies locally using:
   ```bash
   yarn install
   ```

3. Compile TypeScript code using:
   ```bash
   yarn build
   ```

4. Go to the `backend` directory where `template.yaml` is present.

5. Create a build for AWS SAM using:
   ```bash
   sam build
   ```

6. To run locally, use:
   ```bash
   sam local start-api
   ```

7. To deploy code to AWS, run:
   ```bash
   sam deploy
   ```

## Frontend Setup

### Overview

To get started with the frontend project:

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install all dependencies:
   ```bash
   yarn install
   ```

### Available Scripts

Here are the scripts you can run in your project:

- **Development**:
  - `yarn dev`: Starts the development server.

- **Build**:
  - `yarn build`: Builds the project for production.

- **Serving**:
  - `yarn preview`: Serves the production build locally.

- **Linting**:
  - `yarn lint`: Lints your TypeScript files.

- **Formatting**:
  - `yarn format`: Formats your code.

### Environment Variables

The frontend application relies on environment variables that should be set in a `.env` file. You can use the `example.env` file as a reference. Copy it to `.env` and set the appropriate values for your environment.

```plaintext
# Example .env file

# API base URL
VITE_API_URL=https://api.example.com
```

### Folder Structure

A brief explanation of the folder structure:

```plaintext
├── public/               # Public assets that are served as-is
├── src/                  # Source code for the application
│   ├── assets/           # Static assets like images, fonts, etc.
│   ├── components/       # Reusable components
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point for the application
├── index.html            # Main HTML file
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
└── .env                  # Contains all environment variables used in the app
```
