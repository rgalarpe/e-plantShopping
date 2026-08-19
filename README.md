# Paradise Nursery – Shopping Cart Application

## Project Name
**e-plantShopping** (Paradise Nursery Online Plant Shop)

## Description
Paradise Nursery is a dynamic React shopping cart application built for
IBM's *Developing Front-End Apps with React* course final project. It lets
users browse houseplants organized by category, view each plant's thumbnail,
name, and price, add plants to a shopping cart, and manage cart items
(increase/decrease quantity, delete, and view running totals).

## Features
- **Landing page** with the Paradise Nursery name, tagline, background image,
  and a "Get Started" button that routes to the product listing.
- **About Us** section describing the company.
- **Navigation bar** present on every page (Home, Plants, Cart) with a live
  cart-item count badge.
- **Product listing page** with 18 plants grouped into 3 categories
  (Aromatic Plants, Medicinal Plants, Air-Purifying Plants), each with a
  thumbnail, name, and price, and an "Add to Cart" button that disables
  itself once the plant has been added.
- **Shopping cart page** showing each plant's thumbnail, unit price, quantity
  controls (+ / -), line-item total, a delete button, the overall cart total,
  a "Continue Shopping" link back to the product page, and a "Checkout"
  button that currently shows a "Coming Soon" message.

## Tech Stack
This project intentionally uses **only** the technologies covered in the
*Developing Front-End Apps with React* module:
- React (function components, JSX, component composition)
- React Hooks (`useState`)
- React Router (`react-router-dom`) for client-side navigation
- Redux Toolkit (`@reduxjs/toolkit`, `react-redux`) for cart state
  management (`createSlice`, `configureStore`, `useSelector`, `useDispatch`)
- Plain CSS for styling

## Project Structure
```
e-plantShopping/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/<your-username>/e-plantShopping.git
   cd e-plantShopping
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment
This app can be deployed with GitHub Pages, Netlify, Vercel, or any static
hosting provider that supports Create React App builds (`npm run build`).

## Author
Built as the final project for IBM's Full-Stack JavaScript Developer
Professional Certificate — *Developing Front-End Apps with React*.
