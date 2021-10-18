import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilter] = useState("All")

  function updateFilter(event) {
    setFilter(event.target.value)
  }

  let itemsToShow

  if (filterBy == "All") {
    itemsToShow = items
  } else {
    itemsToShow = items.filter((item) => item.category == filterBy)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={updateFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToShow.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
