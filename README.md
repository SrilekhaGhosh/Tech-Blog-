# 📚 Tech Blog - Optimized React Application

A modern, high-performance tech blog built with React, Tailwind CSS, and Vite. This project is optimized to achieve 90+ Lighthouse scores through strategic asset management and semantic structure.

**🚀 [Live Demo Link](https://tech-blog-eta-seven.vercel.app/)** **📁 [GitHub Repository](https://github.com/SrilekhaGhosh/Tech-Blog-)**

---

## 📊 Lighthouse Audit Results
The following audit was performed on the production build via Vercel. 

| Category | Score | Result |
| :--- | :--- | :--- |
| **Performance** | 90 | ![Lighthouse Audit](<img width="1648" height="972" alt="image" src="https://github.com/user-attachments/assets/2723d053-172f-453c-bd7d-c093dfd6e296" />
) |
| **Accessibility** | 96 | |
| **Best Practices** | 96 | |
| **SEO** | 100 | |

---

## 🔍 SEO Strategy

### Meta Tags Implemented
- **Dynamic Meta Management:** Used `react-helmet-async` to set unique `<title>` and `<meta name="description">` for every article to improve search relevance.
- **Open Graph (OG) & Twitter:** Configured social meta tags for high-quality link previews on platforms like LinkedIn and Twitter.
- **Canonical Tags:** Implemented to consolidate link equity and prevent duplicate content issues.

### Semantic HTML Structure
- Used a clear hierarchical structure including `<header>`, `<main>`, `<article>`, and `<footer>` tags to help search engine crawlers understand content hierarchy.
- Maintained a strict heading hierarchy (`h1` for page titles, `h2` for article titles) to support screen readers and indexation.

---

## ⚡ Performance Optimizations

### Image Optimization
- **Lazy Loading:** Implemented native `loading="lazy"` for all off-screen article cards to conserve bandwidth and improve initial load time.
- **Priority Hinting:** Applied `fetchPriority="high"` to "above-the-fold" images to significantly improve Largest Contentful Paint (LCP).
- **Layout Stability:** Set fixed aspect ratios (16:9) and explicit `width` and `height` attributes on image containers to eliminate Cumulative Layout Shift (CLS).
- **Service Resilience:** Switched to reliable placeholder services (`placehold.co`) to avoid DNS resolution delays identified in initial audits.

### Technical Decisions
- **Code Splitting:** Utilized `React.lazy` and `Suspense` for the `ArticleModal` to reduce the size of the initial JavaScript bundle.
- **Build Optimization:** Configured `vite.config.js` to handle vendor chunking, separating third-party libraries from application logic for better caching.
- **Dependency Management:** Resolved peer dependency conflicts using the `--legacy-peer-deps` flag during the Vercel build process to ensure stability.

---

## 🛠️ Search & Filter Implementation
The application implements a real-time search interface:
- **Direct State Management:** The `SearchBar` utilizes local state for rapid input feedback, passing queries to the parent `Home` component.
- **Dynamic Logic:** The filtering happens in real-time as the user types, ensuring the UI stays in sync with the search criteria.
- **UX Features:** A dedicated "Clear" function allows users to reset their search state instantly.

---

## 🧩 Challenges Faced
- **Image Weight:** Managing a massive initial 27MB payload was the primary obstacle. This was resolved through strict lazy loading and explicit dimensioning to maintain a 90+ performance score.
- **Deployment Conflicts:** Overcoming `react-helmet-async` peer dependency conflicts required custom build configurations on Vercel.

---

## 🧰 Technologies Used
- **Frontend:** React 19, Tailwind CSS, Vite
- **Libraries:** Axios, React Icons, React Helmet Async
- **Technical SEO:** Robots.txt, Sitemap.xml
