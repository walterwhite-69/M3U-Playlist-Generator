# 🎬 M3U Playlist Generator

<div align="center">

![M3U Generator Preview](https://img.shields.io/badge/M3U-Generator-purple?style=for-the-badge&logo=television&logoColor=white)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Professional atmospheric M3U playlist creator with dark web aesthetics**

[🚀 Live Demo](#) | [📖 Documentation](#features) | [💫 Features](#features)

</div>

---

## ✨ Features

### 🎯 Core Functionality
- **Multi-Channel Support**: Add multiple channels at once using comma-separated values
- **Real-time Preview**: Live M3U code preview as you type
- **Auto-Save**: Your work is automatically saved and restored on page reload
- **Download & Copy**: One-click download or copy to clipboard
- **Group Organization**: Optional channel grouping for better playlist structure

### 🌙 Atmospheric Design
- **Eerie Dark Theme**: Professional dark web atmosphere with floating orbs
- **Smooth Animations**: Butter-smooth transitions and hover effects
- **Light/Dark Toggle**: Seamless theme switching with atmospheric effects
- **Mobile Optimized**: Perfect centering and responsive design
- **Obfuscated Signature**: Animated "Made By Walter" with glitch effects

### 💾 Auto-Save Technology
- **Browser Storage**: Never lose your work - auto-saves as you type
- **Session Persistence**: Data survives browser restarts and page refreshes
- **Manual Clear Only**: Data only clears when you explicitly click Clear

---

## 🚀 Quick Start

### Option 1: Direct Use (Recommended)
1. Clone this repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open `http://localhost:5000`

### Option 2: Static Deployment (GitHub Pages)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. For GitHub Pages: Push to `gh-pages` branch

---

## 🎮 How to Use

### Basic Workflow
1. **Enter Channel Names**: `Acorn TV, FIFA TV, ESPN`
2. **Add Logo URLs**: `https://logo1.png, https://logo2.png, https://logo3.png`
3. **Provide Stream URLs**: `https://stream1.m3u8, https://stream2.m3u8, https://stream3.m3u8`
4. **Set Group Name** (Optional): `Sports Channels`
5. **Generate**: Watch the real-time M3U preview
6. **Download/Copy**: Get your playlist file

### Pro Tips
- **Equal Counts**: Ensure the number of names, logos, and URLs match
- **Comma Separation**: Use commas to separate multiple entries
- **Auto-Save**: Your data is automatically saved - work with confidence
- **Mobile Friendly**: Works perfectly on phones and tablets

### 📝 Complete Usage Example

**Input:**
```
Channel Names: Acorn TV, FIFA TV, ESPN
Logo URLs: https://example.com/asia.png, https://example.com/jamuna.png, https://example.com/ch24.png
Channel URLs: https://stream1.m3u8, https://stream2.m3u8, https://stream3.m3u8
Group Names: News, News, Entertainment
```

**Generated Output:**
```
#EXTINF:-1 tvg-logo="https://example.com/asia.png" group-title="News", Acorn TV
https://stream1.m3u8

#EXTINF:-1 tvg-logo="https://example.com/jamuna.png" group-title="News", FIFA TV
https://stream2.m3u8

#EXTINF:-1 tvg-logo="https://example.com/ch24.png" group-title="Entertainment", ESPN
https://stream3.m3u8
```

---

## 🛠️ Technical Stack

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Lightning-fast build tool
- **Shadcn/UI** - Professional component library

### Styling & Effects
- **Framer Motion** - Smooth animations
- **CSS Custom Properties** - Dynamic theming
- **Backdrop Filters** - Glass morphism effects
- **CSS Animations** - Custom keyframe animations

### Development
- **Hot Module Replacement** - Instant updates
- **TypeScript** - Full type safety
- **ESLint** - Code quality
- **Modern Build Tools** - Optimized output

---

## 📱 Browser Support

| Browser | Desktop | Mobile |
|---------|---------|---------|
| Chrome  | ✅ Full | ✅ Full |
| Firefox | ✅ Full | ✅ Full |
| Safari  | ✅ Full | ✅ Full |
| Edge    | ✅ Full | ✅ Full |

---

## 🎨 Customization

### Theme Colors
Modify CSS custom properties in `client/src/index.css`:
```css
:root {
  --primary: hsl(203.8863 88.2845% 53.1373%);
  --secondary: hsl(210 25% 7.8431%);
  /* Add your custom colors */
}
```

### Animation Speeds
Adjust animation durations in the CSS:
```css
.atmospheric-bg::before {
  animation: eerieFloat 12s ease-in-out infinite; /* Change 12s */
}
```

---

## 🚀 Deployment

### GitHub Pages
1. Build: `npm run build`
2. Deploy `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel auto-detects Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy from GitHub repository

---

## 🎯 Performance Optimizations

- **CSS Transitions**: Hardware-accelerated animations
- **Code Splitting**: Lazy-loaded components
- **Asset Optimization**: Compressed images and fonts
- **Bundle Analysis**: Optimized chunk sizes
- **Tree Shaking**: Unused code elimination

---

## 🐛 Troubleshooting

### Common Issues
1. **Blank Page**: Check console for JavaScript errors
2. **Styling Issues**: Clear browser cache and reload
3. **Auto-save Not Working**: Enable localStorage in browser settings
4. **Mobile Layout**: Ensure latest browser version

### Performance Issues
- **Slow Animations**: Reduce animation complexity in CSS
- **Memory Usage**: Clear browser data if excessive
- **Mobile Performance**: Enable hardware acceleration

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎨 Made By Walter

<div align="center">

**Created with ❤️ and lots of ☕**

*Professional M3U playlist generation made simple and atmospheric*

![Signature Animation](https://img.shields.io/badge/Walter-Creator-purple?style=for-the-badge&logo=code&logoColor=white)

</div>

---

<div align="center">

**⭐ Star this repository if you found it helpful! ⭐**



</div>
