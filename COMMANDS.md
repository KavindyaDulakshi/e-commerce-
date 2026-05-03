# Quick Commands Reference

## Development

### Start Backend
```bash
cd server
npm run dev
# Runs on http://localhost:4000 with auto-reload
```

### Start Frontend
```bash
cd e-commerce
npm run dev
# Runs on http://localhost:5173 with HMR
```

### Both Servers (2 terminals)
```bash
# Terminal 1
cd server && npm run dev

# Terminal 2
cd e-commerce && npm run dev
```

---

## Installation

### Install Backend Dependencies
```bash
cd server
npm install
```

### Install Frontend Dependencies
```bash
cd e-commerce
npm install
```

### Install All (from project root)
```bash
npm install --prefix server
npm install --prefix e-commerce
```

---

## Configuration

### Setup Backend .env
```bash
cd server
cp .env.example .env
# Then edit .env with your Supabase credentials
```

### Setup Frontend .env
```bash
cd e-commerce
cp .env.example .env
# Then edit .env with your Supabase credentials
```

### Verify Supabase Credentials
1. Get from https://app.supabase.com → Your Project → Settings → API
2. Copy Project URL
3. Copy Anon Key (frontend) and Service Role Key (backend)

---

## Production Build

### Build Frontend
```bash
cd e-commerce
npm run build
# Creates dist/ directory ready for deployment
```

### Preview Production Build Locally
```bash
cd e-commerce
npm run preview
# Runs on http://localhost:4173
```

### Build Backend (if needed)
```bash
# Backend runs as-is; no build step needed
# Just: npm install && npm start
```

---

## Testing & Debugging

### Run ESLint on Frontend
```bash
cd e-commerce
npm run lint
```

### Check Server Logs
```
# Terminal running server shows logs from Morgan HTTP logger
# Look for: GET /api/products, POST /api/orders, etc.
```

### Browser Developer Tools
- **Console**: Check for API errors and logs
- **Network**: See requests to /api/* endpoints
- **Application→Storage**: Check localStorage for Supabase session

### Test API Endpoints Locally

```bash
# Get all products
curl http://localhost:4000/api/products

# Get single product
curl http://localhost:4000/api/products/1

# Signup (requires SUPABASE_SERVICE_ROLE_KEY)
curl -X POST http://localhost:4000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!"}'

# Login
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!"}'

# Create order (requires token from login response)
curl -X POST http://localhost:4000/api/orders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN_HERE" \
  -d '{"items":[{"product_id":1,"quantity":2,"unit_price":29.99}],"total_price":59.98}'
```

---

## Database Management (Supabase)

### Access Database
1. Go to https://app.supabase.com → Your Project → SQL Editor
2. Run queries directly

### View Data
```sql
SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM order_items;
```

### Check Auth Users
1. Go to Supabase → Authentication → Users
2. See all registered users

### Reset Database (caution!)
```sql
DELETE FROM order_items;
DELETE FROM orders;
DELETE FROM products;
```

---

## Deployment

### Deploy Frontend to Vercel
```bash
cd e-commerce

# Method 1: Git integration (easiest)
# Push to GitHub, connect repo to Vercel dashboard

# Method 2: Vercel CLI
npm i -g vercel
vercel

# Add env vars in Vercel dashboard
# - VITE_SUPABASE_URL
# - VITE_SUPABASE_ANON_KEY
# - VITE_API_BASE (point to production backend)
```

### Deploy Backend to Railway/Render
```bash
# Method: Git integration
# 1. Push to GitHub (private recommended for backend)
# 2. Connect repo to Railway/Render dashboard
# 3. Add env vars in dashboard
#    - SUPABASE_URL
#    - SUPABASE_SERVICE_ROLE_KEY
#    - PORT

# Or use CLI
npm i -g railway
railway login
railway link
railway up
```

---

## Cleanup & Reset

### Clear npm Cache
```bash
npm cache clean --force
```

### Reinstall All Dependencies
```bash
# Backend
cd server
rm -rf node_modules package-lock.json
npm install

# Frontend
cd e-commerce
rm -rf node_modules package-lock.json
npm install
```

### Reset Supabase Session (Frontend)
```javascript
// In browser console
localStorage.removeItem('sb-[project-ref]-auth-token')
location.reload()
```

### Delete Local .env Files (use .env.example again)
```bash
rm server/.env
rm e-commerce/.env
# Then recreate from .env.example
```

---

## Help & Troubleshooting

### Port Already in Use
```bash
# Frontend (port 5173)
lsof -i :5173
kill -9 <PID>

# Backend (port 4000)
lsof -i :4000
kill -9 <PID>
```

### Node Modules Issues
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Git Commands
```bash
# Initialize repo (if needed)
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main

# Ignore node_modules
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Add gitignore"
```

---

## Documentation Files

| File | Purpose |
|------|---------|
| [PROJECT_SETUP.md](PROJECT_SETUP.md) | Complete setup guide |
| [COMPLETION_CHECKLIST.md](COMPLETION_CHECKLIST.md) | Project status & features |
| [ARCHITECTURE.md](ARCHITECTURE.md) | System architecture & data flow |
| [server/QUICKSTART.md](server/QUICKSTART.md) | Backend quick reference |
| [e-commerce/QUICKSTART.md](e-commerce/QUICKSTART.md) | Frontend quick reference |
| [server/README.md](server/README.md) | Backend overview |
| [e-commerce/README.md](e-commerce/README.md) | Frontend overview |
