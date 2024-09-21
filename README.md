# Currency Exchange Project

### Assignment Project: Display Rate Currency on Program Web Development + React Bootcamp IBM X Hacktiv8

A web application that fetches and displays real-time currency exchange rates using the [Currency Freaks API](https://currencyfreaks.com/) with **React**, **Vite**, **Axios**, and **Tailwind CSS**. The application allows users to view exchange rates for selected currencies.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

## Features

- Fetch real-time exchange rates for multiple currencies.
- Display buy, sell, and exchange rates.
- Responsive design using **Tailwind CSS**.
- Fetch data via **Axios** and display it using a combination of **React JSX**
- Easy configuration using `.env` file for API key and URL.

## Tech Stack

- **React** (JSX integration)
- **Tailwind CSS** for responsive design
- **Axios** for API requests
- **Vite** for fast and optimized builds

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/putrinabella/display-rate-currency.git
   cd display-rate-currency
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your environment variables:**

   Rename the `.env.example` to `.env`

   ```bash
   VITE_API_URL=https://api.currencyfreaks.com/latest
   VITE_API_KEY=your-api-key-here
   ```

   Replace `your-api-key-here` with your actual API key from Currency Freaks API.

4. **Install dependencies:**

   ```bash
   npm run dev
   ```

   This will start the development server, and you can view the project by navigating to http://localhost:5173.
