import React, { useState } from "react";
import "./SmartFinder.css";

const filters = [
  "Vegetarian",
  "High Protein",
  "Low Calorie",
  "Vegan",
  "Breakfast",
  "Dinner",
];

function SmartFinder({ groceryItems }) {
  const [query, setQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFilterToggle = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleSearch = async () => {
    if (groceryItems.length === 0 && !query.trim()) return;

    const ingredients = groceryItems.map((item) => item.text).join(",");
    const tags = selectedFilters.join(",");

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients},${query}&diet=${tags}&addRecipeInformation=true&number=8&apiKey=6c1f1bb8d430479ab0bb8dbb6bf0a83a`
      );
      const data = await res.json();
      setRecipes(data.results || []);
    } catch (err) {
      console.error("Error fetching smart recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="smart-finder-container" data-aos="fade-down">
      <h2>🔍 Smart Recipe Finder</h2>

      <div className="tip-banner">
        💡 Try typing "pasta" or select a filter like "High Protein" to discover
        quick recipe ideas!
      </div>
      <div className="smart-input-group">
        <input
          type="text"
          placeholder="Search for a craving (e.g. pasta, curry...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Find Recipes</button>
      </div>

      <div className="filter-chips">
        {filters.map((filter) => (
          <span
            key={filter}
            className={`chip ${
              selectedFilters.includes(filter) ? "active" : ""
            }`}
            onClick={() => handleFilterToggle(filter)}
          >
            {filter}
          </span>
        ))}
      </div>

      {loading && <p>Loading recipes...</p>}

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
            <a
              href={`https://spoonacular.com/recipes/${recipe.title
                .toLowerCase()
                .replace(/ /g, "-")}-${recipe.id}`}
              target="_blank"
              rel="noreferrer"
              className="view-link"
            >
              View Recipe →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmartFinder;
