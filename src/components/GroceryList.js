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

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const snapshot = await getDocs(itemsCollectionRef);
        const itemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching grocery items: ", error);
      }
    };

    fetchItems();
  }, []);

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
    <div className="grocery-container">
      <h2>My Grocery List</h2>
      <div className="grocery-input-section">
        <input
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd();
          }}
          placeholder="Enter grocery item"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* ✨ Modern Tag-Style Items */}
      <div className="grocery-tags">
        {items.map((item) => (
          <div className="tag-card" key={item.id}>
            🛒 {item.text}
            <button className="remove-btn" onClick={() => handleDelete(item.id)}>
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
