import axios from "axios";
import React, { useState, useEffect } from "react";
import "./GroceryList.css";

import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function GroceryList({ items, setItems }) {
  const [inputItem, setInputItem] = useState("");
  const itemsCollectionRef = collection(db, "groceryItems");
  const [suggestions, setSuggestions] = useState([]);
  const API_KEY = "6c1f1bb8d430479ab0bb8dbb6bf0a83a";



  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputItem.trim() === "") {
        setSuggestions([]);
        return;
      }

      try {
        const res = await axios.get(
          "https://api.spoonacular.com/food/ingredients/autocomplete",
          {
            params: {
              query: inputItem,
              number: 5,
              apiKey: API_KEY,
            },
          }
        );
        setSuggestions(res.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounce);
  }, [inputItem]);

  const handleAdd = async () => {
    if (inputItem.trim() === "") return;
    const newItem = { text: inputItem, purchased: false };
    try {
      const docRef = await addDoc(itemsCollectionRef, newItem);
      setItems([...items, { ...newItem, id: docRef.id }]);
      setInputItem("");
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const handleSuggestionClick = async (name) => {
    const newItem = { text: name, purchased: false };
    try {
      const docRef = await addDoc(itemsCollectionRef, newItem);
      setItems([...items, { ...newItem, id: docRef.id }]);
      setInputItem("");
      setSuggestions([]);
    } catch (error) {
      console.error("Error adding item from suggestion: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "groceryItems", id));
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const clearAllItems = async () => {
    try {
      const deletions = items.map((item) =>
        deleteDoc(doc(db, "groceryItems", item.id))
      );
      await Promise.all(deletions);
      setItems([]);
    } catch (error) {
      console.error("Error clearing all items: ", error);
    }
  };

  return (
    <div className="grocery-container" data-aos="fade-up">
      <h2>🛒 My Grocery List</h2>
      <div className="grocery-input-section">
      <div className="input-wrapper">
        <input
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd();
          }}
          placeholder="Enter grocery item"
        />
        {suggestions.length > 0 && (
          <ul className="suggestion-dropdown">
            {suggestions.map((sugg, index) => (
              <li key={index} onClick={() => handleSuggestionClick(sugg.name)}>
                {sugg.name}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleAdd}>Add</button>
        </div>
      </div>
      

      <div className="grocery-tags">
        {items.map((item) => (
          <div className="tag-card" key={item.id}>
            🛒 {item.text}
            <button
              className="remove-btn"
              onClick={() => handleDelete(item.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <button className="clear-btn" onClick={clearAllItems}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default GroceryList;
