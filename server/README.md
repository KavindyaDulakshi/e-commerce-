# E-commerce Backend (Express + Supabase)

This folder contains a minimal Express backend scaffold connected to Supabase.

Quick start

1. Copy `.env.example` to `.env` and fill in `SUPABASE_URL` and `SUPABASE_KEY`.

```bash
cd server
npm install
npm run dev
```

API endpoints

- `GET /api/products` — list products
- `GET /api/products/:id` — get product
- `POST /api/products` — create product
- `PUT /api/products/:id` — update product
- `DELETE /api/products/:id` — delete product
- `GET /api/orders` — list orders
- `POST /api/orders` — create order

Notes

- Tables `products` and `orders` should exist in your Supabase database.
- For production, restrict server-side keys and use service roles carefully.

Authentication & Supabase keys

- Set `SUPABASE_URL` and one of `SUPABASE_SERVICE_ROLE_KEY` (recommended) or `SUPABASE_KEY` in your `.env` file.
- The server will only allow server-side user creation (`/api/auth/signup`) if `SUPABASE_SERVICE_ROLE_KEY` is set.
- Protected endpoints (`/api/orders`) require an `Authorization: Bearer <access_token>` header. Acquire tokens by signing in on the frontend with the Supabase client.

Running and testing

- Start the server: `npm run dev` inside the `server` folder.
- Start the frontend and ensure `VITE_API_BASE` is set to the backend origin if different.
