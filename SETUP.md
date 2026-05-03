# Equipo VB - Landing Page Setup

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory and add your Resend API key:
```
RESEND_API_KEY=your_actual_api_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Email Configuration

The budget form uses Resend to send emails. To enable this functionality:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add it to `.env.local`
4. Update the recipient email in `src/app/api/presupuesto/route.ts` (line 23)

## Deployment

Build for production:
```bash
npm run build
npm start
```

## Features

- Premium minimalist design (black, white, gray palette)
- Hero section with impact messaging
- Trust/confidence indicators
- Services organized by category
- Visual "How We Work" process
- Transparency & technology section
- Differential section with key phrase
- Budget form with validation
- Contact section with all locations
- WhatsApp integration
- Responsive design
- Smooth scrolling
