import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
// console.log(props)
// const []
const [name, setItemName] = useState("")
const [category, setCatName] = useState("Produce")

// const newItem = {
//   id: uuid(), // the `uuid` library can be used to generate a unique id
//   name: itemName,
//   category: itemCategory,
// };

function handleItemChange(e){
  setItemName(e.target.value)
}

function handleCatChange(e){
  setCatName(e.target.value)
}

function handleSubmit(e) {
  // console.log("submitted")
  e.preventDefault()
  onItemFormSubmit({
    id: uuid(),
    name,
    category,
  });
}

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemChange} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

// onSubmit={handleSubmit}