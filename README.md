# Rao Hospital — Mobile Landing Page

A production-ready mobile landing page for Rao Hospital built with React, Tailwind CSS, Framer Motion, and Swiper.js.

---

## 🚀 Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate to the project
cd rao-hospital

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
# Use Chrome DevTools → Toggle Device → iPhone 14 (or any mobile)
```

---

## 🌐 Deploy on Vercel

### Option A — Vercel CLI (Fastest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow prompts — select defaults
# Your site will be live at: https://your-project.vercel.app
```

### Option B — Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Framework preset: **Vite**
5. Click **Deploy**

---

## ✏️ How to Edit Content

All content lives in two places:

### 1. `src/data/index.js`
Edit these arrays to update content:

```js
// Update specialities
export const specialities = [ ... ]

// Update why trust cards
export const trustReasons = [ ... ]

// Update testimonials
export const testimonials = [ ... ]

// Update FAQ questions and answers
export const faqs = [ ... ]

// Update credibility strip items
export const credibilityItems = [ ... ]
```

### 2. `src/data/doctors.js`
Edit this array to update doctor cards:

```js
export const doctors = [
  {
    id: 1,
    name: "Dr. Asha Rao",          // Doctor name
    qualification: "MS, FRCOG",     // Qualification
    experience: "30+ Years",         // Experience
    speciality: "Chief Consultant — Fertility, Obstetrics & Gynaecology",
    image: "https://...",            // Replace with real photo URL
    bgClass: "doctor-card-bg-1",    // bg-1 to bg-4 for different card colors
  },
  // Add more doctors here...
]
```

### 3. Replace Doctor Images
- Add images to `src/assets/` folder (e.g. `dr-asha-rao.jpg`)
- Update the `image` field in `src/data/doctors.js`:
  ```js
  import drAshaRao from "../assets/dr-asha-rao.jpg";
  // ...
  image: drAshaRao,
  ```

### 4. Update Hero Text
Edit `src/components/Hero.jsx`:
- Change headline, subheadline, CTA text, stats

### 5. Update Contact Details
Edit `src/components/Footer.jsx`:
- Phone, email, address

---

## 📁 Project Structure

```
rao-hospital/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          ← Navigation + mobile drawer
│   │   ├── Hero.jsx            ← Hero section
│   │   ├── CredibilityStrip.jsx ← Purple marquee strip
│   │   ├── Specialities.jsx    ← Specialities cards
│   │   ├── WhyTrust.jsx        ← Why trust cards
│   │   ├── Doctors.jsx         ← Swipeable doctor carousel
│   │   ├── Testimonials.jsx    ← Swipeable testimonial carousel
│   │   ├── FAQ.jsx             ← Accordion FAQ
│   │   ├── FinalCTA.jsx        ← Dark CTA section
│   │   ├── Footer.jsx          ← Footer
│   │   └── StickyButton.jsx    ← Always-visible bottom CTA
│   ├── data/
│   │   ├── index.js            ← Specialities, FAQs, Testimonials, Trust
│   │   └── doctors.js          ← Doctor cards data
│   ├── App.jsx                 ← Root component
│   ├── main.jsx                ← Entry point
│   └── index.css               ← Global styles + Tailwind
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🎨 Color Reference

| Token | Hex | Usage |
|-------|-----|-------|
| Purple | `#776492` | Primary brand, buttons, accents |
| Pink | `#f26b77` | Italic headlines, stars, highlights |
| Gray Light | `#d9d9d9` | Borders, dividers |
| White | `#ffffff` | Backgrounds, cards |
| Gray Mid | `#545454` | Body text |

## 🔤 Fonts

- **Playfair Display** — Headings, hero, italic emphasis
- **Outfit** — Body copy, buttons, labels, captions
