import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div
          className="d-flex justify-content-center col-sm-6 col-lg-4 col-xl-3 mb-2"
          key={item.id}
        >
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
