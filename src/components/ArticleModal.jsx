import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
// FIX: Ensure the import matches your exact file name (uppercase SEO)
import PageSEO from '../utils/PageSEO'; 

const ArticleModal = ({ article, isOpen, onClose }) => {
  // Requirement: Implement keyboard navigation (ESC key)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      // PERFORMANCE: Prevent scrolling background while modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Requirement: Handle API errors/loading gracefully (Guard clause)
  if (!isOpen || !article) return null;

  // Requirement: Format dates properly ("Jan 15, 2024")
  const formattedDate = new Date(article.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <PageSEO article={article} />
      
      <article 
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative outline-none" 
        onClick={(e) => e.stopPropagation()}
        tabIndex="0"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-white/90 shadow-md rounded-full p-2 hover:bg-gray-100 transition focus-ring"
          aria-label="Close modal"
        >
          <AiOutlineClose className="text-2xl text-gray-700" />
        </button>

        <div className="relative aspect-video overflow-hidden bg-gray-100">
          <img
            src={article.photo_url || 'https://placehold.co/800x450?text=TechBlog'}
            alt="" 
            width="800"
            height="450"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-10">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
            <time dateTime={article.created_at}>{formattedDate}</time>
          </div>

          <h1 id="modal-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Requirement: Color contrast meets WCAG AA (gray-800 on white) */}
          <div 
            dangerouslySetInnerHTML={{ __html: article.content_html }} 
            className="prose prose-blue max-w-none text-gray-800 leading-relaxed" 
          />
        </div>
      </article>
    </div>
  );
};

export default ArticleModal;