<div align="center">

<img src="LOGO white_theme.png.png" alt="NABEH Logo" height="80" />

# NABEH — نابية
### Smart Education Assist | مساعد التعليم الذكي

**An AI-powered EdTech SaaS landing page for the future of education.**  
*منصة تعليمية ذكية بالذكاء الاصطناعي لمستقبل التعليم*

---

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![RTL Support](https://img.shields.io/badge/RTL-Arabic%20Support-0DFFF1?style=for-the-badge)](.)
[![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Supported-1B3C53?style=for-the-badge)](.)
[![License](https://img.shields.io/badge/License-MIT-456882?style=for-the-badge)](LICENSE)

</div>

---

## 📸 Preview

### 🌅 Hero Section — Light Mode
![Hero Light Mode](screenshots/hero-light.png)

### 🌙 Hero Section — Dark Mode
![Hero Dark Mode](screenshots/hero-dark.png)

### 💡 About Section
![About Section](screenshots/about.png)

### ⚡ Features Section
![Features Section](screenshots/features.png)

### 💳 Pricing Section
![Pricing Section](screenshots/pricing.png)

### 📝 Registration Form — Dark Mode
![Registration Form](screenshots/register-dark.png)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Color Palette](#-color-palette)
- [Sections](#-sections)
- [Installation](#-installation)
- [Bilingual Support](#-bilingual-support)
- [Dark / Light Mode](#-dark--light-mode)
- [Interactive Animations](#-interactive-animations)
- [Author](#-author)

---

## 🌐 Overview

**NABEH** (نابة) is a professional, responsive, and bilingual landing page for an EdTech SaaS platform. It serves as an **informational portal and institution registration gateway** — not the actual functional platform.

The platform uses **AI-driven technology** to monitor student engagement, track attention via computer vision (face & eye tracking), and provide teachers with real-time analytics dashboards.

> 🎯 **Goal:** Allow educational institutions to learn about the platform and book their spots before the official launch.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌍 **Bilingual (AR / EN)** | Full Arabic RTL and English LTR support with a single toggle |
| 🌙 **Dark / Light Mode** | Seamlessly switches with persistent theme saved to localStorage |
| 🎨 **Modern UI** | Glassmorphism cards, gradient text, smooth hover effects |
| ✨ **Particle Canvas** | Interactive floating particle network on the hero background |
| 🔲 **Animated Grid** | Drifting perspective grid overlay on the hero section |
| 🃏 **Floating Metric Badges** | 4 animated stat cards floating around the dashboard preview (92% Attendance, 85% Engagement, AI Powered, 88% Submission Rate) |
| 🖱️ **3D Image Tilt** | The hero dashboard tilts with mouse movement using CSS perspective |
| 💫 **Scroll Animations** | Elements fade in with IntersectionObserver as you scroll |
| 📊 **Animated Counters** | Stats count up from 0 when they enter the viewport |
| 📋 **Registration Form** | Multi-section form with file upload (drag & drop), password toggle, and validation |
| 📱 **Fully Responsive** | Mobile-first layout with hamburger menu |
| 🏷️ **Pricing Plans** | 3-tier pricing (Pro / Premium / Plus) with feature lists |
| 🔔 **Toast Notifications** | Animated slide-up feedback toasts on form submission |

---

## 🛠️ Tech Stack

```
├── HTML5          — Semantic markup, RTL/LTR structuring
├── CSS3           — Custom properties, animations, glassmorphism
│   ├── CSS Variables    (light/dark theme tokens)
│   ├── @keyframes       (14+ custom animations)
│   ├── IntersectionObserver fade-ins
│   └── CSS Grid & Flexbox layouts
└── Vanilla JavaScript
    ├── Theme toggle (localStorage persistence)
    ├── Language switcher (data-ar / data-en attributes)
    ├── Canvas Particle System (mouse-reactive)
    ├── 3D Tilt Effect (mousemove perspective)
    ├── Animated stat counters
    ├── Drag & Drop file upload
    ├── Form validation & toast feedback
    └── Active nav tracking on scroll
```

**Fonts:** [Cairo](https://fonts.google.com/specimen/Cairo) (Arabic) + [Inter](https://fonts.google.com/specimen/Inter) (English) via Google Fonts

---

## 📁 Project Structure

```
NABEH/
├── index.html                  # Main HTML — all sections
├── styles.css                  # Full design system & animations
├── script.js                   # All interactivity & canvas animations
├── hero.png                    # Hero dashboard preview image
├── LOGO white_theme.png.png    # Logo for light mode
├── Logo dark_theme.png.png     # Logo for dark mode
├── screenshots/
│   ├── hero-light.png
│   ├── hero-dark.png
│   ├── about.png
│   ├── features.png
│   ├── pricing.png
│   └── register-dark.png
└── README.md
```

---

## 🎨 Color Palette

| Swatch | Hex | Usage |
|:---:|---|---|
| ![#E3E3E3](https://via.placeholder.com/20/E3E3E3/E3E3E3.png) | `#E3E3E3` | Neutral / Light backgrounds |
| ![#1B3C53](https://via.placeholder.com/20/1B3C53/1B3C53.png) | `#1B3C53` | Primary Dark / Footer |
| ![#234C6A](https://via.placeholder.com/20/234C6A/234C6A.png) | `#234C6A` | Primary / Buttons |
| ![#456882](https://via.placeholder.com/20/456882/456882.png) | `#456882` | Secondary text / Icons |
| ![#0DFFF1](https://via.placeholder.com/20/0DFFF1/0DFFF1.png) | `#0DFFF1` | Accent / Glow / Highlights |

---

## 📄 Sections

1. **🏠 Hero** — Headline, description, CTA buttons, animated stats, floating badges, 3D dashboard preview, particle network background
2. **💡 About** — 3-card overview: Face & Eye Tracking, Behavioral Analysis, Real-Time Engagement Scores
3. **⚡ Features** — 4-card feature grid: Real-Time Monitoring, Teacher Dashboard, Post-Lecture Quizzes, Reports & Analytics
4. **💳 Pricing** — 3-tier plans: Pro ($49), Premium ($99 — featured), Plus ($199)
5. **📝 Register** — Multi-field institution registration form with logo upload and admin account creation
6. **🦶 Footer** — Quick links, contact info, copyright

---

## 🚀 Installation

```bash
# 1. Clone the repository
git clone https://github.com/abdelrahman-abozarifa04/NABEH.git

# 2. Navigate into the project
cd NABEH

# 3. Open directly in your browser
# Simply open index.html in any modern browser
# No build tools or dependencies required!
```

> ✅ Zero dependencies · No npm · No build step · Just open `index.html`

---

## 🌍 Bilingual Support

The site fully supports **Arabic (RTL)** and **English (LTR)** via a toggle button in the header.

**How it works:**

Every translatable element carries `data-ar` and `data-en` attributes:

```html
<h2 data-ar="تعليم أذكى بتقنيات المستقبل"
    data-en="Smarter Education with Future Technologies">
  تعليم أذكى بتقنيات المستقبل
</h2>
```

JavaScript reads the active language and updates all text content + sets `dir="rtl"` or `dir="ltr"` on the `<html>` element.

---

## 🌙 Dark / Light Mode

```javascript
// Theme persists across page reloads via localStorage
localStorage.setItem('nabeh-theme', 'dark');
document.documentElement.setAttribute('data-theme', 'dark');
```

All colors are driven by CSS custom properties, so every element adapts instantly:

```css
:root              { --bg-primary: #FFFFFF; --text-primary: #1B3C53; }
[data-theme="dark"] { --bg-primary: #0D1B2A; --text-primary: #E3E3E3; }
```

---

## 🎬 Interactive Animations

| Animation | Implementation |
|---|---|
| **Particle Network** | Canvas 2D API — 55 dots, mouse-repulsion, connecting lines |
| **Hero Grid** | CSS `background-image` grid + `gridDrift` keyframe |
| **Floating Badges** | CSS `@keyframes floatBadge1-4` with staggered delays |
| **3D Image Tilt** | JS `mousemove` → CSS `perspective()` + `rotateX/Y` |
| **Scroll Fade-Ins** | `IntersectionObserver` with `data-delay` attribute |
| **Stat Counters** | `requestAnimationFrame` ease-out cubic counter |
| **Orb Movement** | CSS `orbMove1 / orbMove2` blur blobs |
| **Rotating Rings** | CSS `ringRotate / ringRotateRev` dashed borders |

---

## 👨‍💻 Author

**Abdelrahman Sami Abozarifa**

[![GitHub](https://img.shields.io/badge/GitHub-abdelrahman--abozarifa04-181717?style=for-the-badge&logo=github)](https://github.com/abdelrahman-abozarifa04)

---

<div align="center">

**© 2025 NABEH — نابية. All Rights Reserved.**

*Built with ❤️ for the future of education*

</div>
