# E-Commerce Full Stack Project - Setup & Run Guide

## Project Structure

```
Project/
├── server/                    # Node.js Express backend
│   ├── src/
│   │   ├── index.js          # Entry point
│   │   ├── config/
│   │   │   └── supabase.js   # Supabase client config
│   │   ├── controllers/
│   │   │   ├── authController.js      # Auth (signup/login)
│   │   │   ├── productsController.js  # Product CRUD
│   │   │   └── ordersController.js    # Order management
│   │   ├── routes/           # Express routes
│   │   └── middlewares/      # Auth & error handling
│   ├── db/
│   │   └── schema.sql        # Supabase DDL for tables
│   ├── .env.example          # Environment template
│   └── package.json
│
├── e-commerce/               # React frontend (Vite + Tailwind)
│   ├── src/
│   │   ├── App.jsx           # Main component with routes
│   │   ├── main.jsx          # React entry point
│   │   ├── lib/
│   │   │   ├── supabaseClient.js  # Supabase client
│   │   │   └── api.js             # API helper functions
│   │   ├── pages/
│   │   │   ├── auth/         # Login/Signup pages
│   │   │   ├── cart.jsx      # Shopping cart with checkout
│   │   │   ├── home.jsx
│   │   │   ├── shop.jsx
│   │   │   └── ...
│   │   ├── component/        # Navbar, Footer, ProductListing
│   │   ├── data/             # Static data if needed
│   │   └── assets/
│   ├── .env.example          # Environment template
│   ├── vite.config.js
│   └── package.json
```

## Prerequisites

- Node.js 16+ and npm
- Supabase account with a project
- Modern browser with CORS support or CORS extension if testing locally

## Step 1: Supabase Setup

1. Go to [supabase.com](https://supabase.com) and sign in / create an account.
2. Create a new project (or use existing).
3. In Supabase dashboard:
   - Get your Project URL and Anon Key from Settings → API.
   - Get your Service Role Key from Settings → API (keep this secret!).
   - Copy the SQL from `server/db/schema.sql` and run it in the SQL Editor to create `orders` and `order_items` tables.

## Step 2: Backend Setup

```bash
cd server

# Copy environment template and fill in values
cp .env.example .env
```

Edit `server/.env`:
```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
PORT=4000
```

Install dependencies and start:
```bash
npm install
npm run dev
```

The server will start at `http://localhost:4000`.

**Available Endpoints:**
- `POST /api/auth/signup` — Create a new user (requires SUPABASE_SERVICE_ROLE_KEY)
- `POST /api/auth/login` — Sign in and get session token
- `GET /api/products` — List products (paginated: `?limit=24&offset=0`)
- `GET /api/products/:id` — Get product details
- `GET /api/orders` — Get user's orders (requires auth token)
- `POST /api/orders` — Create an order (requires auth token)

## Step 3: Frontend Setup

```bash
cd e-commerce

# Copy environment template and fill in values
cp .env.example .env
```

Edit `e-commerce/.env`:
```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Optional: If backend is on different port/host
# VITE_API_BASE=http://localhost:4000
```

Install dependencies and start:
```bash
npm install
npm run dev
```

The frontend will start at `http://localhost:5173` (Vite default).

## Step 4: Test the Full Flow

### 1. Sign Up
- Navigate to `http://localhost:5173/signup`
- Enter email and password
- Submit (server needs `SUPABASE_SERVICE_ROLE_KEY` to create users)

### 2. Sign In
- Navigate to `http://localhost:5173/login`
- Enter credentials
- Session is saved in Supabase client

### 3. View Products
- Home page or Shop page fetches from `/api/products`

### 4. Create Order
- Add items to cart (manually set in cart.jsx state for now)
- Click "Proceed to checkout"
- Requires authentication (redirects to login if not signed in)
- Order is created in Supabase database with user ID and items

## Key Features

✅ Full authentication with Supabase (signup/login/logout)
✅ Protected API endpoints (orders require auth token)
✅ Product listing with pagination
✅ Order placement with order items tracking
✅ Responsive UI with Tailwind CSS
✅ React hooks for state management
✅ API helper functions for easy integration
✅ Error handling for auth and API calls

## Troubleshooting

**Frontend shows "Failed to fetch products"**
- Check if server is running on port 4000
- Verify VITE_API_BASE is set correctly if using different port
- Check CORS is enabled on server

**Login/Signup fails with 501 error**
- Server doesn't have SUPABASE_SERVICE_ROLE_KEY
- Set it in `server/.env` to enable server-side user creation

**Order creation fails with 401**
- User is not authenticated
- Check browser console for auth errors
- Ensure Supabase session is set after login

**Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY**
- Check `e-commerce/.env` has the values
- Restart dev server after changing .env

## API Request Examples

### Signup (server-side)
```bash
curl -X POST http://localhost:4000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

### Get Products
```bash
curl http://localhost:4000/api/products?limit=10&offset=0
```

### Create Order (requires token)
```bash
curl -X POST http://localhost:4000/api/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "items": [{"product_id": 1, "quantity": 2, "unit_price": 29.99}],
    "total_price": 65.98
  }'
```

## Next Steps

- Add seed data to products table
- Implement shopping cart persistence (localStorage)
- Add quantity update in cart
- Wire up product detail pages
- Add payment integration (Stripe/Razorpay)
- Deploy to production (Vercel for frontend, Railway/Render for backend)
