# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark/Light mode toggle
- Project showcase
- Blog section
- Contact form
- Chat widget with backend integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- Python 3.8+ (for backend)
- npm or yarn

### Installation

1. Install frontend dependencies:
```bash
npm install
```

2. Install backend dependencies:
```bash
cd backend
pip install flask flask-cors
```

### Running the Application

#### Option 1: Run Both Frontend and Backend

1. Start the backend server:
```bash
cd backend
python hello.py
```

2. In a new terminal, start the frontend:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

#### Option 2: Run Frontend Only (without backend)

```bash
npm run dev
```

The chat widget will show a red connection indicator if the backend is not running.

### Backend API

The backend server runs on `http://localhost:5001` and provides:

- `GET /sendMessage` - Check server status
- `POST /sendMessage` - Send a message and get response

### Project Structure

```
portfolio/
├── src/                    # Frontend source code
│   ├── app/               # Next.js app directory
│   ├── contents/          # Content data
│   └── types/             # TypeScript types
├── backend/               # Python Flask backend
│   └── hello.py          # Backend server
├── public/               # Static assets
└── package.json          # Frontend dependencies
```

## Technologies Used

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Python Flask, Flask-CORS
- **Icons**: React Icons
- **Deployment**: Vercel (frontend)

## Development

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5001`

## License

This project is open source and available under the [MIT License](LICENSE).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
