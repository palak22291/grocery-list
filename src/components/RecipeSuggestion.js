import React, { useEffect, useState } from "react";
import "./RecipeSuggestion.css";

const RecipeSuggestion = ({ groceryItems }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!groceryItems || groceryItems.length === 0) {
        setLoading(false);
        return;
      }

      const ingredients = groceryItems.map((item) => item.text).join(",");

      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&addRecipeNutrition=true&addRecipeInformation=true&number=8&apiKey=7af11a2c05974af598a8a56095656db2`
        );
        const data = await res.json();
        setRecipes(data.results || []);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [groceryItems]);

  return (
    <div className="recipe-suggestion-container"  data-aos="zoom-in-up">
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <>
          {recipes.length > 0 ? (
            <>
              <h2>🍽️ Suggested Recipes</h2>
              <div className="recipe-grid">
                {recipes.map((recipe) => (
                  <div key={recipe.id} className="recipe-card">
                    <img src={recipe.image} alt={recipe.title} />
                    <h4 className="recipe-title">{recipe.title}</h4>

                    {/* Nutritional Info */}
                    {recipe.nutrition?.nutrients && (
                      <div className="nutrition-tags">
                        {recipe.nutrition.nutrients.find(
                          (n) => n.name === "Protein"
                        )?.amount > 10 && (
                          <span className="tag">🥚 High Protein</span>
                        )}
                        {recipe.vegetarian && (
                          <span className="tag">🌱 Vegetarian</span>
                        )}
                        {recipe.vegan && <span className="tag">🌿 Vegan</span>}
                      </div>
                    )}

                    {/* Dish type tags */}
                    {recipe.dishTypes && (
                      <div className="dish-tags">
                        {recipe.dishTypes.map((type) => (
                          <span key={type} className="tag">
                            🥣 {type}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Link to full recipe */}
                    <a
                      href={`https://spoonacular.com/recipes/${recipe.title
                        .toLowerCase()
                        .replace(/ /g, "-")}-${recipe.id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="view-recipe"
                    >
                      View Recipe →
                    </a>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p style={{ textAlign: "center", opacity: 0.7 }}>
              No recipes found for your grocery items.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default RecipeSuggestion;
