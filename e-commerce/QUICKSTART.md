# Frontend Quick Start

## Setup

```bash
npm install
cp .env.example .env
# Edit .env with your Supabase credentials and backend URL
npm run dev
```

## Environment

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_API_BASE=http://localhost:4000  # optional if backend on different port
```

## Pages

- `/` — Home
- `/shop` — Shop products (fetches from API)
- `/login` — Login
- `/signup` — Sign up
- `/cart` — Shopping cart with checkout
- `/categories`, `/deals`, `/contact` — Other pages

## Key Features

- **Auth** — Supabase auth via `supabaseClient.js`
- **Products** — Fetch from backend via `api.js::fetchProducts()`
- **Navbar** — Shows auth state, manages logout
- **Cart** — Places orders via `api.js::placeOrder()` (requires auth)

## Making API Calls

```javascript
import { fetchProducts, placeOrder } from '../lib/api'
import { supabase } from '../lib/supabaseClient'

// Fetch products
const products = await fetchProducts()

// Get current user
const { data } = await supabase.auth.getSession()
const user = data.session?.user

// Place order (must be authenticated)
await placeOrder({
  items: [{product_id: 1, quantity: 2, unit_price: 19.99}],
  total_price: 39.98
})
```

## Components

- **Navbar.jsx** — Navigation with auth UI
- **ProductListing.jsx** — Display products from API
- **Footer.jsx** — Footer
- **pages/auth/** — Login/Signup pages
- **pages/cart.jsx** — Cart and checkout

## Run Frontend

```bash
npm run dev    # Development (port 5173)
npm run build  # Build for production
npm run lint   # ESLint check
```

Frontend runs on `http://localhost:5173`

## Auth Flow

1. User signs up or logs in via frontend
2. Supabase client stores session locally
3. Protected endpoints get auth token from session
4. Token is included in Authorization header to backend
5. Backend verifies token and processes request

## Styling

- **Tailwind CSS** — Utility-first CSS framework
- **Lucide React** — Icon library
- Dark theme with amber accents
