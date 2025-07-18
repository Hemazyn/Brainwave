# BrainWave - Digital Agency Website Template

![Project Status](https://img.shields.io/badge/status-active-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?logo=tailwind-css)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

BrainWave is a professional, fully responsive website template for digital agencies specializing in UI/UX design and Webflow development. Built with the latest technologies, including **Next.js 15 (App Router)** and **Tailwind CSS**, this project serves as a high-performance, visually stunning marketing site designed to attract and convert clients.



### ✨ Live Demo

[View the live project here](https://your-live-demo-url.com)

---

## Features

This project is packed with modern, interactive, and reusable components designed to create an engaging user experience.

-   **Pre-loader Animation**: A sleek loading screen that cycles through "Hello" in multiple languages.
-   **Responsive Header**: A fully responsive navigation bar with animated dropdown menus for services and industries.
-   **Dynamic Hero Section**: An animated hero headline that cycles through key value propositions.
-   **"Our Solutions" Section**: A clean, responsive grid showcasing services with elegant hover effects.
-   **"Success Stories" Showcase**: A beautiful, alternating layout to present case studies with key metrics.
-   **Interactive Testimonials Carousel**: A draggable slider featuring client testimonials, synced with clickable avatars for easy navigation.
-   **Auto-scrolling Logo Grid**: A continuous, "marquee" style carousel displaying logos of trusted clients.
-   **Call to Action (CTA)**: A visually striking CTA section with a background image to drive user engagement.
-   **Fully Responsive Design**: Meticulously crafted to look and function perfectly on all devices, from mobile phones to desktops.
-   **Data-Driven Content**: Most sections (testimonials, solutions, logos) are mapped from data arrays, making content updates simple and centralized.

## Tech Stack

This project is built with a modern, performance-oriented technology stack:

-   **Framework**: [Next.js 15](https://nextjs.org/) (with App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [React 19](https://react.dev/) (Client & Server Components)
-   **Carousels/Sliders**: [Keen Slider](https://keen-slider.io/)
-   **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.17.0 or later)
-   `npm`, `yarn`, or `pnpm`

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/brainwave.git
    cd brainwave
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables:**
    Create a `.env.local` file in the root of the project by copying the example file:
    ```bash
    cp .env.example .env.local
    ```
    *(While this project doesn't currently require environment variables, this is a best practice for future additions.)*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---


## 🔧 Customization

Most of the website's content can be easily customized by editing the data arrays in their respective component files.

-   **Header Links & Dropdowns**: Modify the arrays inside `components/Header.jsx`.
-   **Hero Headlines**: Change the `headlines` array in `components/AnimatedHero.jsx`.
-   **Solutions/Services**: Edit the `solutionsData` array in `components/Solutions.jsx`.
-   **Success Stories**: Update the `successStoriesData` array in `components/Success.jsx`.
-   **Testimonials**: Modify the `testimonialsData` array in `components/Testimonials.jsx`.
-   **Client Logos**: Add/remove logos from the `logos` array in `components/LogoGrid.jsx`.

---

## 部署 (Deployment)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.