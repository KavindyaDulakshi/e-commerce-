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
