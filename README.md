# Score ABA Website

A modern React + Vite website for Score ABA with contact and intake form functionality, featuring smooth animations and responsive design.

## Tech Stack

- **Frontend**: React 19, Vite, React Router
- **Backend**: Express.js, Node.js
- **Styling**: CSS with Framer Motion animations
- **Email**: Nodemailer with SMTP integration
- **Deployment**: Vercel-ready

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Gmail account with App Password (for email functionality)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd score-aba-website
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
touch .env
```

4. Add the following environment variables to your `.env` file:
```env
# Server Configuration
PORT=3001

# SMTP Email Configuration (Gmail)
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
MAIL_FROM_NAME=Score ABA
MAIL_FROM_EMAIL=your-email@gmail.com
MAIL_TO=recipient-email@gmail.com
```

### Setting up Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Generate a new app password for "Mail"
5. Use this 16-character password as `MAIL_PASS` in your `.env` file

## Running the Project

### Option 1: Run Both Frontend and Backend Together (Recommended)

```bash
npm run dev:full
```

This will start:
- Backend server on `http://localhost:3001`
- Frontend development server on `http://localhost:5173` (or next available port)

### Option 2: Run Services Separately

**Terminal 1 - Start Backend Server:**
```bash
npm run server
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```

### Option 3: Use the Start Script

```bash
node start-dev.js
```

## Available Scripts

- `npm run dev` - Start Vite development server (frontend only)
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run server` - Start the Express backend server only
- `npm run dev:full` - Start both frontend and backend concurrently

## Project Structure

```
score-aba-website/
├── api/                 # Vercel serverless functions
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   └── assets/          # Images and other assets
├── server.js            # Express backend server
├── vite.config.js       # Vite configuration
└── vercel.json          # Vercel deployment configuration
```

## API Endpoints

The backend server provides the following endpoints:

- `POST /api/contact` - Submit contact form
- `POST /api/intake` - Submit intake form
- `GET /api/health` - Health check endpoint

## Development Notes

- The frontend development server proxies `/api` requests to `http://localhost:3001` during development
- Hot Module Replacement (HMR) is enabled for fast development
- The backend server must be running for form submissions to work

## Building for Production

```bash
npm run build
```

The production build will be created in the `dist/` directory.

## Deployment

This project is configured for Vercel deployment. The `vercel.json` file includes:
- Serverless function configuration for API routes
- Route rewrites for API endpoints

To deploy:
1. Push your code to a Git repository
2. Import the project in Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy

## Troubleshooting

### Email not sending
- Verify your Gmail App Password is correct
- Check that 2-Step Verification is enabled
- Ensure all SMTP environment variables are set correctly

### Port already in use
- Change the `PORT` in your `.env` file
- Update the proxy target in `vite.config.js` if needed

### CORS errors
- Ensure the backend server is running on the correct port
- Check that the Vite proxy configuration matches your backend port
