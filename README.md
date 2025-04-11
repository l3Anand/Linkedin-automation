# LinkedIn Content Automation

An AI-powered content automation platform for LinkedIn, built with Next.js, Groq Cloud API, and Serper API.

## Features

- 🤖 AI-driven content generation using Groq Cloud API
- 📊 Content performance analytics
- 📅 Post scheduling and automation
- 🔍 Competitor analysis and trending topics
- 📈 Google Sheets integration for data tracking
- 🔐 LinkedIn OAuth authentication

## Prerequisites

- Node.js 18.x or later
- LinkedIn Developer Account
- Groq Cloud API key
- Serper API key
- Google Cloud Project with Sheets API enabled

## Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd linkedin-automation
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables file:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
- Set up LinkedIn OAuth credentials
- Add your Groq Cloud API key
- Add your Serper API key
- Configure Google Sheets credentials

5. Run the development server:
```bash
npm run dev
```

## Configuration

### LinkedIn OAuth Setup

1. Create a LinkedIn Developer Application
2. Configure OAuth 2.0 settings
3. Add authorized redirect URIs
4. Copy Client ID and Secret to `.env.local`

### Google Sheets Setup

1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create service account credentials
4. Share your Google Sheet with the service account email
5. Add credentials to `.env.local`

## Usage

1. Log in with your LinkedIn account
2. Navigate to the content generator
3. Choose your content type and preferences
4. Generate AI-powered content
5. Schedule or post directly to LinkedIn
6. Track performance in the analytics dashboard

## Development

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 