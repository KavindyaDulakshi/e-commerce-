# Home Haven — E-commerce Frontend

This folder contains the `e-commerce` React app (Vite + React) for a modern home-items shop.

Quick start

```bash
cd e-commerce
npm install
npm run dev        # development server: http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview production build
```

Notes
- Uses Tailwind CSS via `@tailwindcss/vite` plugin.
- Icons via `lucide-react`.
- Routing is implemented with `react-router-dom` (see `src/App.jsx`).

Suggestions
- Replace placeholder contact/social links with real URLs in `src/component/footer.jsx`.
- Add backend/cart persistence when wiring checkout flow.
