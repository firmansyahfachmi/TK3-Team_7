import React, { useState } from "react";

const EditProduct = (props) => {
  const [title, setTitle] = useState(props.product.title);
  const [description, setDescription] = useState(props.product.description);
  const [purchasePrice, setPurchasePrice] = useState(
    props.product.purchasePrice
  );
  const [sellPrice, setSellPrice] = useState(props.product.sellPrice);
  const [image, setImage] = useState(props.product.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating product:", {
      title,
      description,
      purchasePrice,
      sellPrice,
      image,
    });
    // Update the product in the backend here
  };

  return (
    <div className="wrapper-edit-product">
      <form className="edit-product-form" onSubmit={handleSubmit}>
        <div className="close-btn" onClick={props.onClose}>&times;</div>
        
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Purchase Price:
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Sell Price:
          <input
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Update Product" />
      </form>
    </div>
  );
};

export default EditProduct;
