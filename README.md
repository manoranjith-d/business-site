# ReliableSoft Solutions - Business Website

A modern, SEO-optimized business website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit: `https://YOUR_USERNAME.github.io/business-site/`

## 📋 Features

- ✅ Modern, responsive design with glassmorphism effects
- ✅ SEO optimized with meta tags, sitemap, and robots.txt
- ✅ Smooth animations with Framer Motion
- ✅ Fast page loads with Next.js App Router
- ✅ Static site generation for GitHub Pages
- ✅ Fully accessible and mobile-friendly

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## 🌐 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

The site is configured to automatically deploy when you push to the main/master branch.

**Setup Steps:**

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/business-site`
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Push your code:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```
5. Wait 2-3 minutes for the deployment to complete
6. Your site will be live at: `https://YOUR_USERNAME.github.io/business-site/`

### Option 2: Manual Deployment

```bash
# Build the static site
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
reliablesoft-solutions/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing
│   ├── careers/           # Careers page
│   ├── contact/           # Contact form
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, Features, CTA, etc.
│   └── ui/                # Reusable UI components
├── lib/                   # Utility functions
└── public/                # Static assets

```

## 🎨 Customization

### Update Company Information

1. **Contact Details**: Edit `components/layout/footer.tsx`
2. **Navigation Links**: Edit `components/layout/navbar.tsx`
3. **Services**: Edit `components/sections/services-preview.tsx`
4. **About Content**: Edit `app/about/page.tsx`

### Change Colors

Edit `app/globals.css` to modify the color scheme:

```css
--primary: 221 83% 53%;     /* Main blue color */
--accent: 199 89% 48%;      /* Accent cyan color */
```

## 📊 Performance

- Lighthouse Score: 95+ (Performance)
- Fully static site generation
- Optimized images and assets
- Minimal JavaScript bundle

## 📝 License

MIT License - feel free to use this for your projects!

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
