# LaunchGrids — Complete Digital Business Setup Agency Website

A premium, production-ready Next.js 14 website for **LaunchGrids** digital agency, optimized for **Cloudflare Pages** static hosting.

---

## 🚀 Tech Stack

- **Next.js 14** — Static export (`output: 'export'`)
- **Tailwind CSS v3** — Utility-first styling with dark mode
- **Lucide React** — Icon library
- **DM Sans + Syne** — Google Fonts (loaded via CSS link)
- **Cloudflare Pages** — Hosting (static, no server required)

---

## 📁 Project Structure

```
launchgrids/
├── app/
│   ├── layout.js         # Root layout with dark mode script
│   ├── page.js           # Main page assembling all sections
│   └── globals.css       # Global styles, animations, CSS variables
├── components/
│   ├── Navbar.js         # Sticky navbar with dark mode toggle
│   ├── Footer.js         # Full footer with links & socials
│   └── sections/
│       ├── Hero.js               # Hero with dashboard visual
│       ├── Problem.js            # Problem statement section
│       ├── Solution.js           # 7 solution categories
│       ├── Services.js           # All 35 services with filter tabs
│       ├── MarketingComparison.js # Digital vs Professional marketing
│       ├── Packages.js           # 3 pricing packages
│       ├── BusinessTypePricing.js # Pricing by business type
│       ├── Portfolio.js          # Project cards + placeholders
│       ├── Maintenance.js        # Monthly maintenance plans
│       ├── AddOns.js             # Optional add-on services
│       ├── Process.js            # 6-step process
│       ├── WhyUs.js              # Why choose LaunchGrids
│       ├── Industries.js         # Industries served
│       ├── CtaSection.js         # Dark CTA banner
│       └── Contact.js            # Full contact form
├── hooks/
│   └── useScrollReveal.js        # Intersection Observer scroll animations
├── public/
│   ├── _headers                  # Cloudflare Pages security headers
│   └── _redirects                # Cloudflare routing rules
├── next.config.js                # Static export config
├── tailwind.config.js            # Tailwind with dark mode + custom theme
└── package.json
```

---

## 🛠️ Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Visit: `http://localhost:3000`

### 3. Build for production
```bash
npm run build
```
Static output goes to the **`out/`** folder.

---

## ☁️ Deploy to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. Push this project to a **GitHub** or **GitLab** repo
2. Go to [Cloudflare Pages Dashboard](https://pages.cloudflare.com)
3. Click **"Create a project"** → Connect your Git repo
4. Set build settings:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** `18` or `20`
5. Click **Deploy** ✅

### Method 2: Direct Upload

1. Run `npm run build` locally
2. Go to Cloudflare Pages → **"Create a project"** → **"Direct Upload"**
3. Upload the entire **`out/`** folder
4. Done ✅

---

## 🌗 Dark Mode

Dark mode is toggled via the moon/sun icon in the navbar.
- Preference is saved to `localStorage`
- Default is **Light mode**
- Dark mode applies via Tailwind's `dark:` class on `<html>`

---

## 🎨 Customization

### Colors (tailwind.config.js)
```js
brand: {
  blue: '#2563EB',      // Primary blue
  violet: '#7F77DD',    // Accent violet
}
```

### Fonts
- **Headings:** Syne (800 weight)
- **Body:** DM Sans (400–600 weight)

### Contact Form
The form currently shows a success state on submit.
To make it functional, integrate one of:
- [Formspree](https://formspree.io) — add `action="https://formspree.io/f/YOUR_ID"` to form
- [EmailJS](https://emailjs.com) — call `emailjs.send()` in `handleSubmit`
- [Cloudflare Workers](https://workers.cloudflare.com) — custom serverless email handler

### Update Contact Info
In `components/sections/Contact.js`, update:
- Phone number
- Email address
- Working hours

### Add Portfolio Projects
In `components/sections/Portfolio.js`, add to the `projects` array:
```js
{
  name: 'Your Project',
  url: 'yoursite.com',
  href: 'https://yoursite.com',
  category: 'Category',
  catColor: 'blue', // blue | violet | orange | green | pink
  desc: 'Project description...',
  status: 'live', // 'live' | 'coming'
  preview: { bg: 'from-blue-600 to-cyan-600', icon: '🌐' }
}
```

---

## ✅ Sections Checklist

| Section | Status |
|---|---|
| Navbar (sticky, dark mode, mobile) | ✅ |
| Hero (dashboard visual, floating cards) | ✅ |
| Problem section | ✅ |
| Solution (7 categories) | ✅ |
| Services (35 services, filterable) | ✅ |
| Marketing Comparison | ✅ |
| Packages (3 tiers) | ✅ |
| Business Type Pricing | ✅ |
| Portfolio (2 live + 3 placeholders) | ✅ |
| Monthly Maintenance Plans | ✅ |
| Add-On Services | ✅ |
| 6-Step Process | ✅ |
| Why Choose Us | ✅ |
| Industries (14 types) | ✅ |
| CTA Banner | ✅ |
| Contact Form | ✅ |
| Footer | ✅ |

---

## 📞 Support

Built by LaunchGrids. For questions, reach out via the contact form on the website.
