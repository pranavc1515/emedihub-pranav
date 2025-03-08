import React from "react";

const NewsArticles = () => {
  const articles = [
    {
      image: "/path-to-health-image.png",
      author: "Anita Jackson",
      title: "Health and Hygiene",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt.",
    },
    {
      image: "/path-to-salt-image.png",
      author: "Anita Jackson",
      title: "Salt-rich diet gets a lashing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt.",
    },
    {
      image: "/path-to-diet-image.png",
      author: "Anita Jackson",
      title: "Much go on diet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt.",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20 text-center">
      <h2 className="text-blue-900 text-3xl font-bold mb-4 underline underline-offset-4">News & Articles</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        We use only the best quality materials on the market in order to provide the best products to our patients.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-md">
            <img src={article.image} alt={article.title} className="w-full rounded-lg mb-4" />
            <p className="text-gray-800 font-semibold mb-2">~{article.author}</p>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <button className="bg-blue-900 text-white px-6 py-2 rounded">know more</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;
