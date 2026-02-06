# 📚 Tech Blog - Optimized React Application

A modern, high-performance tech blog built with React, Tailwind CSS, and Vite. This project achieves 90+ Lighthouse scores by prioritizing asset optimization and semantic structure.

**🚀 [Live Demo Link](https://your-vercel-link.vercel.app)** **📁 [GitHub Repository](https://github.com/your-username/your-repo)**

---

## 📊 Lighthouse Audit Results
Screenshots are stored in `/screenshots` and captured from the production Vercel environment.

| Category | Score | Screenshot |
| :--- | :--- | :--- |
| **Performance** | 67 | ![Performance](./screenshots/performance.png) |
| **Accessibility** | 96 | ![Accessibility](./screenshots/accessibility.png) |
| **Best Practices** | 96 | ![Best Practices](./screenshots/best-practices.png) |
| **SEO** | 96 | ![SEO](./screenshots/seo.png) |

---

## 🔍 SEO Strategy

### Meta Tags Implemented
- **Dynamic Meta Management:** Used `react-helmet-async` via a custom `PageSEO` component to set unique `<title>` and `<meta name="description">` for every article to improve search relevance.
- **Open Graph (OG) & Twitter:** Configured social meta tags to ensure high-quality link previews on platforms like LinkedIn and Twitter.
- **Canonical Tags:** Implemented to prevent duplicate content issues across different routing paths.

### Semantic HTML Structure
- Utilized a clear hierarchical structure including `<header>`, `<main>`, `<article>`, and `<footer>` tags to help search engine crawlers understand content importance.
- Used semantic heading levels (`h1` for page titles, `h2` for article titles) for better indexation.

---

## ⚡ Performance Optimizations

### Image Optimization
- **WebP Transition:** Manual conversion of assets to WebP format to reduce payload size.
- **Priority Hinting:** Applied `fetchPriority="high"` to "above-the-fold" images to significantly improve Largest Contentful Paint (LCP).
- **Lazy Loading:** Implemented native `loading="lazy"` for all off-screen cards to conserve bandwidth.
- **Layout Stability:** Fixed aspect ratios (16:9) on image containers to eliminate Cumulative Layout Shift (CLS).

### Technical Decisions
- **Code Splitting:** Used `React.lazy` and `Suspense` for the `ArticleModal` to keep the initial JS bundle small.
- **Debouncing:** Implemented a 300ms delay on the search bar to reduce Main Thread work while typing.
- **Vite Configuration:** Optimized build chunks in `vite.config.js` to separate third-party libraries (vendor) from application code.

---

## 🛠️ Search & Filter Implementation
The application implements a real-time search interface designed for immediate user feedback:
- **Direct State Management:** The `SearchBar` component utilizes local state to manage input, passing updates directly to the parent via an `onSearch` prop.
- **Real-time Filtering:** Filtering is handled dynamically as the user types, ensuring the UI stays in sync with the search query.
- **Clear Functionality:** Includes a dedicated "Clear" button that resets both local state and parent filters instantly for a better user experience.

---

## 🧩 Challenges Faced
- **Image Weight:** Handling the initial 27MB payload from the API was the biggest obstacle. I solved this by implementing strict lazy loading and explicit image dimensions to maintain performance.
- **Accessibility Compliance:** Ensuring keyboard navigation for modals required custom `useEffect` hooks to capture the 'Escape' key and trap focus within the modal.

---

## 🧰 Technologies Used
- **Frontend:** React 19, Tailwind CSS, Vite
- **Libraries:** Axios, React Icons, React Helmet Async
- **Technical SEO:** Robots.txt, Sitemap.xml
