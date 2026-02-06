import React, { memo } from "react";
import { FiClock, FiUser } from "react-icons/fi";

const Card = memo(({ article, onClick, index }) => {
  // Requirement: Format dates properly ("Jan 15, 2024")
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <article
      onClick={onClick}
      // Requirement: Implement keyboard navigation (Enter/Space)
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      tabIndex="0" 
      role="button"
      aria-label={`Article: ${article.title}`}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer h-full flex flex-col hover:shadow-xl transition-all focus:ring-2 focus:ring-blue-600 outline-none"
    >
     <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
  <img
    src={article.photo_url}
    alt=""
    
    fetchPriority={index < 3 ? "high" : "auto"}
    
    loading={index < 3 ? "eager" : "lazy"} 
    width="400"
    height="225"
    className="w-full h-full object-cover"
    
    onError={(e) => { e.target.src = 'https://placehold.co/400x225?text=TechBlog'; }} 
  />
</div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h2>
        <p className="text-gray-700 text-sm line-clamp-3 mb-4 leading-relaxed">{article.description}</p>
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between text-gray-600 text-xs">
          <span className="flex items-center gap-1"><FiUser /> User #{article.user_id}</span>
          <time className="flex items-center gap-1" dateTime={article.created_at}>
            <FiClock /> {formatDate(article.created_at)}
          </time>
        </div>
      </div>
    </article>
  );
});

export default Card;