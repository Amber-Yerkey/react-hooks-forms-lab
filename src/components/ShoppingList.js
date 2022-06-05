import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSearch, setIsSearch] = useState("");

  
  const itemsToDisplay = items
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory)
    
  .filter((item) => item.name.toLowerCase().includes(isSearch.toLowerCase()))
  

  // const newSearchDisplay = items.filter((item) => {
  //   if (isSearch === "") return true;
    
  //   return item.name === isSearch;
  // });
  
  // function handleSearchChange(e) {
  //   setIsSearch(e.target.value);
  // }

  //!may need??
  // search={isSearch} filter
  
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={setIsSearch} search={isSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
        }
      </ul>
    </div>
  );
}

export default ShoppingList;
