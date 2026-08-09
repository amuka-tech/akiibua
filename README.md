# Akii-Bua Olympic Stadium Website

This is the official web application for the **Akii-Bua Olympic Stadium**. The platform provides fans and visitors with a comprehensive digital experience, including ticketing, arena information, museum tours, and matchday logistics.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Fonts:** Custom typography using Google Fonts (Outfit)

## Features

- **Matchday & Non-Matchday Info:** Detailed logistics for getting to the stadium, entry control, and parking.
- **Tours & Museum:** Information and booking for the AkiiBua Museum, VIP tours, and self-guided arena tours.
- **Store & Catering:** Discover the Megastore and premium stadium dining (e.g., DO & CO hospitality).
- **Event Venue:** Information for hosting private and corporate events at the stadium.
- **Responsive Design:** A premium, fully responsive interface featuring a cohesive deep blue branding palette (`#0D47AA`).

## Getting Started

First, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `.next` folder.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to check for code issues.

## Project Structure

- `/src/app`: Contains all the Next.js App Router pages (e.g., `/arena`, `/tours-museum`, `/contact`).
- `/src/components`: Reusable React components (e.g., Header, Footer, HeroSection, Cards).
- `/src/data`: Static data files for dynamic component rendering (e.g., maps, news articles, tours).

## Styling & Theme

The application uses Tailwind CSS heavily for styling. The core brand colors (blues, reds, and grayscale) are custom configured in `tailwind.config.ts` under the `arena` namespace (e.g., `bg-arena-primary`, `text-arena-navy`).
