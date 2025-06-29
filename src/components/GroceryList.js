// import React, { useState } from 'react';
// import './GroceryList.css'; 

// const GroceryList = () => {
//   const [items, setItems] = useState([]);
//   const [newItem, setNewItem] = useState('');

//   const handleAddItem = () => {
//     if (newItem.trim() === '') return;
//     setItems([...items, newItem]);
//     setNewItem('');
//   };

//   const handleDeleteItem = (index) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//   };

//   return (
//     <div className="grocery-container">
//       <h2 className='title'>Your Grocery List</h2>
//       <div className="grocery-input-section">
//         <input
//           type="text"
//           placeholder="Enter grocery item"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//         />
//         <button onClick={handleAddItem}>Add</button>
//       </div>

//       <ul className="grocery-list">
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleDeleteItem(index)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GroceryList;


import React, { useState } from 'react';
import './GroceryList.css';
import { FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';


function GroceryList() {
  const [items, setItems] = useState([]);
  const [inputItem, setInputItem] = useState('');

  const handleAdd = () => {
    if (inputItem.trim() === '') return;
    setItems([...items, { text: inputItem, purchased: false }]);
    setInputItem('');
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const togglePurchased = (index) => {
    const newItems = [...items];
    newItems[index].purchased = !newItems[index].purchased;
    setItems(newItems);
  };

  return (
    <div className="grocery-container">
      <h2>My Grocery List</h2>
      <div className="grocery-input-section">
        <input
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          placeholder="Enter grocery item"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="grocery-list">
        {items.map((item, index) => (
          <li className="grocery-item" key={index}>
            <span
              className={`grocery-text ${item.purchased ? 'purchased' : ''}`}
              onClick={() => togglePurchased(index)}
            >
              {item.purchased ? <FaCheckCircle /> : <FaRegCircle />}
              <span>{item.text}</span>
            </span>
            <button onClick={() => handleDelete(index)} className="delete-btn">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;

