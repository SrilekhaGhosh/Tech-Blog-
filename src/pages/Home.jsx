import React, { useEffect, useState, useMemo, useCallback } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ArticleModal from "../components/ArticleModal";
import PageSEO from "../utils/PageSEO";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Requirement: Handle API errors

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("https://sample-api-black.vercel.app/api/v1/blogs");
      if (response.data.success) {
        const blogs = response.data.blogs || [];
        setArticles(blogs);
        const uniqueCategories = [...new Set(blogs.map((blog) => blog.category))];
        setCategories(uniqueCategories);
      }
    } catch (err) {
      setError("Failed to load articles. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchArticles(); }, []);

  // Requirement: Search and Category filter work together (Combined Filtering)
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory ? article.category === activeCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchQuery, activeCategory]);

  const handleCardClick = useCallback((article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <PageSEO isHome={true} />
      <Header onLogoClick={() => { setActiveCategory(null); setSearchQuery(""); }} />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tech Blog</h1>
          <p className="text-xl text-gray-600">Latest insights on development and technology.</p>
        </section>

        <SearchBar onSearch={setSearchQuery} />

        {categories.length > 0 && (
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        )}

        {/* Requirement: Handle API errors gracefully */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 my-8" role="alert">
            <p className="text-red-700 font-medium">{error}</p>
            <button onClick={fetchArticles} className="text-red-800 underline mt-2">Try again</button>
          </div>
        )}

        {/* Requirement: Handle loading states */}
        {loading ? (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl h-96 animate-pulse shadow-sm" />
            ))}
          </div>
        ) : (
          <MainSection articles={filteredArticles} onCardClick={handleCardClick} />
        )}
      </main>

      <ArticleModal 
        article={selectedArticle} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <Footer />
    </div>
  );
};

export default Home;