# 🚀 Deployment Guide

## GitHub Pages Deployment

### Quick Deploy (Recommended)
1. **Fork this repository**
2. **Build the project**:
   ```bash
   npm install
   npm run build:client
   ```
3. **Deploy to GitHub Pages**:
   - Go to repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `gh-pages` branch
   - Your site will be available at `https://yourusername.github.io/m3u-generator`

### Manual Deployment
1. **Build the client**:
   ```bash
   npm run build:client
   ```
2. **Deploy the `dist` folder** to any static hosting service

---

## Alternative Hosting Options

### Vercel (Zero Config)
1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Vite configuration
3. Deploy with one click

### Netlify
1. **Build command**: `npm run build:client`
2. **Publish directory**: `dist`
3. Deploy directly from GitHub

### Replit Deployment
1. Use the built-in deployment feature
2. The full-stack version works perfectly on Replit

---

## Environment Setup

### Development
```bash
git clone <your-repo>
cd m3u-generator
npm install
npm run dev
```

### Production Build
```bash
npm run build:client
```

### Preview Build
```bash
npm run preview
```

---

## Performance Notes

- ✅ **Optimized animations** with hardware acceleration
- ✅ **CSS-only effects** for maximum performance
- ✅ **Minimal JavaScript** footprint
- ✅ **Mobile-first** responsive design
- ✅ **Accessibility support** with reduced motion options

---

## Troubleshooting

### Build Issues
- Ensure Node.js 18+ is installed
- Clear `node_modules` and reinstall if needed
- Check for TypeScript errors: `npm run check`

### Deployment Issues
- Verify build completes successfully
- Check browser console for errors
- Ensure all assets are properly loaded

Made with ❤️ by Walter