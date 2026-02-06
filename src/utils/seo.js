// Utility functions for SEO and Structured Data

export const getWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tech Blog',
    description: 'Discover the latest insights on technology, programming, and web development',
    url: 'https://techblog.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://techblog.example.com?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

export const getArticleSchema = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.photo_url || 'https://via.placeholder.com/1200x630?text=Article',
    datePublished: article.created_at,
    dateModified: article.updated_at || article.created_at,
    author: {
      '@type': 'Person',
      name: `User ${article.user_id}`,
    },
    articleBody: article.content_text || article.description,
    keywords: article.category,
  };
};

export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tech Blog',
    url: 'https://techblog.example.com',
    description: 'A platform for sharing insights on technology and web development',
  };
};
