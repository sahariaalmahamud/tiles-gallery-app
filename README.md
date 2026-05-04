# 🧱 Tiles Gallery

A modern tile gallery web application where users can explore, search, and view detailed information about different tiles.

## 🔗 Live URL
https://tiles-gallery-app-sand.vercel.app

## 🚀 Features
- Browse all tiles with search functionality
- Featured tiles section on homepage
- Detailed tile view page
- User authentication (Email & Google)
- User profile with update functionality
- Fully responsive design (Mobile, Tablet, Desktop)
- Protected routes for private pages

## 🛠 Tech Stack
- Next.js (App Router)
- MongoDB
- BetterAuth
- Tailwind CSS + DaisyUI / HeroUI

## 📦 NPM Packages
- better-auth
- axios / fetch
- react-fast-marquee
- swiper / animate.css (any one)

## 🔐 Environment Variables
Sensitive data like API keys and database URI are stored securely using `.env.local`.

## 🧭 Routes

### Public Routes
- `/`
- `/all-tiles`
- `/login`
- `/register`

### Private Routes
- `/tile/[id]`
- `/my-profile`

