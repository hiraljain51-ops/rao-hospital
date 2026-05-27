# Rao Hospital — Mobile Landing Page

A production-ready, mobile-only landing page for Rao Hospital built with
**React + Vite · Tailwind CSS · Framer Motion · Swiper.js**

---

## Project Structure

```
rao-hospital/
├── src/
│   ├── assets/               ← Drop real doctor photos here
│   ├── components/
│   │   ├── Navbar.jsx        ← Sticky header + slide-in mobile drawer
│   │   ├── Hero.jsx          ← Hero section with stats strip
│   │   ├── CredibilityStrip.jsx  ← Infinite purple marquee
│   │   ├── Specialities.jsx  ← Animated stacked speciality cards
│   │   ├── WhyTrust.jsx      ← Why families trust section
│   │   ├── Doctors.jsx       ← Swipeable doctor carousel (14 cards)
│   │   ├── Testimonials.jsx  ← Swipeable testimonial carousel
│   │   ├── FAQ.jsx           ← Animated accordion FAQ
│   │   ├── FinalCTA.jsx      ← Dark gradient CTA section
│   │   ├── Footer.jsx        ← Dark footer
│   │   └── StickyButton.jsx  ← Persistent bottom CTA button
│   ├── data/
│   │   ├── doctors.js        ← All 14 doctor records (edit here)
│   │   └── index.js          ← All other content arrays (edit here)
│   ├── App.jsx               ← Root layout — all sections assembled
│   ├── main.jsx              ← React entry point
│   └── index.css             ← Tailwind + global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Run Locally

### Requirements
- **Node.js 18 or later** — download from https://nodejs.org

### Steps

```bash
# 1. Enter the project folder
cd rao-hospital

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in Chrome at http://localhost:5173
#    Use DevTools → Device Toolbar → iPhone 14 to preview as mobile
```

---

## Deploy to Vercel (recommended)

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel    # install once globally
vercel                   # run from inside rao-hospital/
# accept all defaults → your site is live in ~60 seconds
```

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → "New Project"
3. Import the repo
4. Framework preset: **Vite** (auto-detected)
5. Click **Deploy** — done

---

## Edit Content

### Change doctor cards
Open `src/data/doctors.js` and edit any field:

```js
{
  id: 1,
  name: 'Dr. Asha Rao',
  qualification: 'MS, FRCOG',
  experience: '30+ Years',
  speciality: 'Chief Consultant — Fertility, Obstetrics & Gynaecology',
  image: 'https://...',           // URL or local import
  bgClass: 'card-bg-lavender',   // card-bg-lavender | card-bg-mint | card-bg-sky | card-bg-blush
},
```

To use a **local photo**:
1. Drop the image file into `src/assets/` (e.g. `dr-asha.jpg`)
2. At the top of `doctors.js` add:
   ```js
   import drAsha from '../assets/dr-asha.jpg'
   ```
3. Set `image: drAsha` for that doctor

### Change specialities, FAQs, testimonials, or trust cards
Open `src/data/index.js` and edit the relevant exported array.

### Change hero text, headline, CTA
Open `src/components/Hero.jsx` and edit the inline text strings.

### Change contact details (phone, address, email)
Open `src/components/Footer.jsx`.

---

## Colour Reference

| Token | Hex | Used for |
|-------|-----|----------|
| Purple | `#776492` | Primary brand, buttons, accents |
| Pink | `#f26b77` | Italic headlines, star ratings |
| Gray light | `#d9d9d9` | Borders, dividers |
| Gray text | `#545454` | Body copy |
| White | `#ffffff` | Backgrounds, cards |

## Typography

| Font | Usage |
|------|-------|
| **Playfair Display** | All headings, hero headline, italic emphasis |
| **Outfit** | Body copy, buttons, labels, captions |

---

## Build for production

```bash
npm run build
# Output is in /dist — upload to any static host
```

## Preview production build locally

```bash
npm run preview
```
