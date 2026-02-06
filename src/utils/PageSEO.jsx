import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getWebsiteSchema, getArticleSchema } from './seo';

const PageSEO = ({ article, isHome = false }) => {
  const siteName = "Tech Blog";
  const baseUrl = "https://techblog.com";
  
  // Safe fallbacks to prevent .substring() errors
  const title = isHome 
    ? `${siteName} - Tech & Design Blog` 
    : (article?.title || "Latest Article");

  const description = isHome 
    ? "Insights on technology, programming, and web development." 
    : (article?.description || "Read more about this technology insight on Kagazi.");

  const image = article?.photo_url || `${baseUrl}/logo.png`;
  const url = isHome ? baseUrl : `${baseUrl}/articles/${article?.id}`;

  return (
    <Helmet>
      {/* Ensuring .substring() never runs on undefined */}
      <title>{(title || "").substring(0, 60)}</title>
      <meta name="description" content={(description || "").substring(0, 160)} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* JSON-LD Schema for 95+ SEO Score */}
      <script type="application/ld+json">
        {JSON.stringify(isHome ? getWebsiteSchema() : getArticleSchema(article))}
      </script>
    </Helmet>
  );
};

export default PageSEO;