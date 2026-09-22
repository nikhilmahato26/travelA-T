# Travel with A & T – Official Website

Premium travel company website for **Travel with A & T**.
- **Head Office**: Delhi, India
- **Branch Office**: Srinagar, Jammu and Kashmir, India
- **Phone**: +91 95990 83509
- **Email**: travelwithaandt@gmail.com

Built with: **React + Vite + Tailwind CSS + Framer Motion**

---

## 📁 Folder Structure

```
travelA&T/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   ├── logo.jpg               ← High-res logo
│   │   ├── logo.png               ← Circular logo badge
│   │   ├── logo-transparent.png   ← Transparent logo badge
│   │   └── packages/              ← Destination photography
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CTAStrip.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollReveal.jsx
│   │   └── Toast.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Packages.jsx
│   │   ├── Services.jsx
│   │   ├── Hotels.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── siteContent.js        ← ⭐ Edit ALL content & business info here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🚀 Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open: `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```

---

## ✏️ Configuration

All business information, phone numbers, WhatsApp, packages, and office addresses are configured in:
`src/data/siteContent.js`

```js
export const brand = {
  name: "Travel with A & T",
  phone: "+91 95990 83509",
  whatsapp: "919599083509",
  email: "travelwithaandt@gmail.com",
  headOffice: "Delhi, India",
  branchOffice: "Srinagar, Jammu and Kashmir, India",
};
```

---

## 📱 Features

- ✅ Warm golden-bronze & mountain-sunrise aesthetic matching brand logo
- ✅ Sticky responsive navbar with dual-state styling & active section highlight
- ✅ Dynamic Hero with instant WhatsApp and Package CTAs
- ✅ Curated holiday packages with category filtering (Domestic, International, Pilgrimage)
- ✅ Luxury hotel & resort showcase
- ✅ Comprehensive services (Flights, Hotels, Visas, Tour Packages, Taxi Transfers, Group Travel)
- ✅ About section highlighting Delhi Head Office & Srinagar Branch Office
- ✅ Client testimonials with verified Google review signals
- ✅ Interactive FAQ accordion
- ✅ Dual-office contact section (Delhi & Srinagar) with instant WhatsApp and Email enquiry routing
- ✅ Mobile-first design and fluid animations (Framer Motion)
