# Server Quick Start

## Setup

```bash
npm install
cp .env.example .env
# Edit .env with your Supabase credentials
npm run dev
```

## Environment

```
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
PORT=4000
```

## API Endpoints

| Method | Path | Auth? | Description |
|--------|------|-------|-------------|
| POST | /api/auth/signup | ❌ | (requires service role key in server) |
| POST | /api/auth/login | ❌ | Sign in, returns session |
| GET | /api/products | ❌ | List products (paginated) |
| GET | /api/products/:id | ❌ | Get product details |
| GET | /api/orders | ✅ | User's orders |
| POST | /api/orders | ✅ | Create order |

## Headers for Protected Endpoints

```
Authorization: Bearer <access_token_from_login>
Content-Type: application/json
```

## Database Tables (SQL)

See `db/schema.sql` for:
- `orders` — user_id, total_price, status, created_at
- `order_items` — order_id, product_id, quantity, unit_price
- `products` — name, price, description, image_url

## Controllers

- **authController.js** — User signup/login
- **productsController.js** — Product CRUD with pagination
- **ordersController.js** — Order CRUD with items, protected by auth

## Middlewares

- **auth.js** — Verifies JWT token from Authorization header
- **errorHandler.js** — Global error handler

## Running Server

```bash
npm run dev        # Development with nodemon
npm start          # Production
```

Server listens on `http://localhost:4000`
