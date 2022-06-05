import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSearch, setIsSearch] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && isSearch === "All") return true;

    return item.category === selectedCategory || item.name === isSearch;
  });

  function handleSearchChange(e){
    setIsSearch(e.target.value);
  }

  // const newSearchDisplay = items.filter((item) => {
  //   if(isSearch === "") return true;

  //   return item.name === isSearch;
  // })

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
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
