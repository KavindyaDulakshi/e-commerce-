# E-Commerce Stack Architecture

## System Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     BROWSER (User)                              │
└───────────────────────────────┬─────────────────────────────────┘
                                │ HTTP/CORS
                ┌───────────────┴───────────────┐
                ▼                               ▼
        ┌──────────────────┐          ┌──────────────────┐
        │   React Frontend │          │   Supabase Auth  │
        │                  │          │   (client SDK)   │
        │  - Vite          │          │                  │
        │  - React Router  │◄────────►│  Session Token   │
        │  - Tailwind      │          │  (JWT)           │
        │  - Lucide Icons  │          │                  │
        └────────┬─────────┘          └──────────────────┘
                 │
                 │ API Requests
                 │ (GET /api/products, POST /api/orders, etc.)
                 │
        ┌────────▼─────────────────────────────────────────┐
        │                                                   │
        │      Express Backend (Node.js)                   │
        │      - CORS enabled                              │
        │      - Morgan logging                             │
        │      - JWT verification (requireAuth)             │
        │                                                   │
        │  Routes:                                          │
        │  ├─── /api/auth        (signup, login)            │
        │  ├─── /api/products    (list, get, CRUD)         │
        │  └─── /api/orders      (list, create - auth)     │
        │                                                   │
        │  Controllers:                                     │
        │  ├─── authController                             │
        │  ├─── productsController                         │
        │  └─── ordersController                           │
        │                                                   │
        │  Middlewares:                                     │
        │  ├─── errorHandler                               │
        │  └─── requireAuth                                │
        │                                                   │
        └────────┬────────────────────────────────────────┘
                 │
                 │ Supabase JS Client
                 │ (server-side auth, DB queries)
                 │
        ┌────────▼──────────────────────────────────────────┐
        │                                                    │
        │     SUPABASE (Backend as a Service)               │
        │                                                    │
        │  Authentication:                                  │
        │  ├─── Users table (auth.users)                    │
        │  └─── Sessions/JWT tokens                         │
        │                                                    │
        │  Database (PostgreSQL):                           │
        │  ├─── products                                    │
        │  │    ├── id, name, price, description            │
        │  │    └── image_url                               │
        │  │                                                │
        │  ├─── orders                                      │
        │  │    ├── id, user_id, total_price                │
        │  │    ├── status, created_at                      │
        │  │    └── (foreign key → users)                   │
        │  │                                                │
        │  └─── order_items                                 │
        │       ├── id, order_id, product_id                │
        │       ├── quantity, unit_price                    │
        │       └── (foreign key → orders)                  │
        │                                                    │
        └────────────────────────────────────────────────────┘
```

---

## Data Flow

### 1. User Signup/Login
```
Frontend (Signup page)
  ↓ fetch('/api/auth/signup', {email, password})
Backend (authController.signup)
  ↓ supabase.auth.admin.createUser()
Supabase Auth
  ↓ confirm user created
Frontend (redirect to login)
  ↓ fetch('/api/auth/login', {email, password})
Backend (authController.login)
  ↓ supabase.auth.signInWithPassword()
Backend returns: {session, user}
  ↓ supabase.auth.setSession()
Frontend stores session locally
```

### 2. View Products
```
Frontend (Shop page, on mount)
  ↓ fetchProducts() from api.js
  ↓ fetch('/api/products?limit=24&offset=0')
Backend (productsController.getProducts)
  ↓ supabase.from('products').select(...)
Supabase Database
  ↓ return product rows
Frontend renders ProductListing component
```

### 3. Place Order (Authenticated)
```
Frontend (Cart page, checkout button)
  ↓ handleCheckout()
  ↓ const session = await supabase.auth.getSession()
  ↓ fetch('/api/orders', {
     method: 'POST',
     headers: {Authorization: 'Bearer ' + token},
     body: {items, total_price}
   })
Backend (requireAuth middleware)
  ↓ verify token with supabase.auth.getUser(token)
Backend (ordersController.createOrder)
  ↓ supabase.from('orders').insert({user_id, total_price})
Supabase Database
  ↓ insert order, get order_id
Backend
  ↓ supabase.from('order_items').insert([...items])
Supabase Database
  ↓ insert items, return results
Backend returns: {order, items}
Frontend shows success message
```

---

## Dependencies

### Backend (Express)
```
express          4.18.2    // Web framework
@supabase/supabase-js  2.28.0  // Supabase client
cors             2.8.5     // CORS middleware
morgan           1.10.0    // HTTP logging
dotenv           16.0.3    // Environment variables
nodemon          2.0.22    // Dev: auto-reload

Total: ~7 packages
```

### Frontend (React)
```
react            19.2.5    // UI framework
react-dom        19.2.5    // React DOM
react-router-dom 7.14.2    // Routing
@supabase/supabase-js  2.28.0  // Supabase client
lucide-react     1.14.0    // Icons
tailwindcss      4.2.4     // Styling
vite             8.0.10    // Build tool

Total: ~7 dependencies + dev tools
```

---

## Deployment Considerations

### Frontend
- **Provider**: Vercel, Netlify, or GitHub Pages
- **Command**: `npm run build`
- **Output**: `dist/` directory
- **Env vars**: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_API_BASE

### Backend
- **Provider**: Railway, Render, Heroku, AWS EC2
- **Command**: `npm install && npm start`
- **Process**: Node.js
- **Env vars**: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, PORT

### Database
- **Current**: Supabase PostgreSQL (free tier available)
- **No migration needed**: Tables live in Supabase

### Domain & SSL
- Frontend: yourdomain.com → CDN → Vercel
- Backend: api.yourdomain.com → Railway/Render
- SSL: Auto-generated by hosting providers

---

## Performance Notes

✅ **Optimized**
- Product queries use explicit SELECT (not *)
- Pagination on product list (limit/offset)
- JWT tokens for stateless auth
- CORS: preflight caching

✈️ **Can Improve**
- Add Redis cache for products
- Implement rate limiting on auth
- Lazy load product images
- Minify frontend assets (Vite does this)

---

## Security Notes

🔒 **Implemented**
- Supabase JWTs for protected routes
- User can only see their own orders
- Service role key kept server-side
- CORS restricts cross-origin requests
- Passwords hashed by Supabase auth

🚨 **Remember**
- Never expose SUPABASE_SERVICE_ROLE_KEY to frontend
- Always validate user input on backend
- Use HTTPS in production
- Rotate keys regularly
- Monitor Supabase logs for anomalies
