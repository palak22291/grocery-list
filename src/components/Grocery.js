
import GroceryList from './GroceryList'; 
import { useState } from 'react';

import Footer from './Footer'; 
import RecipeSuggestion from './RecipeSuggestion';

  const Grocery = () => {
    const [items, setItems] = useState([]);
  return (
    <>
     
     <GroceryList items={items} setItems={setItems} />
      <RecipeSuggestion groceryItems={items}/>
   

       <Footer /> 

      
    </>
  );
};

export default Grocery;
