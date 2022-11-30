import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container position-relative bg-danger">
      <div className=" text-bg-danger text-center position-absolute top-50 start-50 translate-middle">
        {greeting}
      </div>
    </div>
  );
};

export default ItemListContainer;
