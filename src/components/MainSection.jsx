import React from "react";
import Card from "./Card";

const MainSection = ({ articles, onCardClick }) => {
  if (!articles || articles.length === 0) {
    return (
      <main className="max-w-7xl mx-auto mt-12 px-4 text-center">
        <p className="text-gray-500 text-lg">No articles found.</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto mt-12 px-4" aria-label="Articles Feed">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Card
            key={article.id || article._id}
            article={article}
            index={index} // FIX: Passing the loop index to the Card component
            onClick={() => onCardClick(article)}
          />
        ))}
      </div>
    </main>
  );
};

export default MainSection;