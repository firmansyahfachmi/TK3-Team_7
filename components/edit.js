import React, { useState, useEffect } from "react";

const EditProduct = (props) => {
  const [title, setTitle] = useState(props.product.title);
  const [description, setDescription] = useState(props.product.description);
  const [purchasePrice, setPurchasePrice] = useState(
    props.product.purchasePrice
  );
  const [sellPrice, setSellPrice] = useState(props.product.sellPrice);
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: props.product.id,
      title: title,
      description: description,
      purchasePrice: purchasePrice,
      sellPrice: sellPrice,
      image: image
    }
    props.handleEdit(data)

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
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Purchase Price:
          <input
            type="number"
            defaultValue={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Sell Price:
          <input
            type="number"
            defaultValue={sellPrice}
            onChange={(e) => setSellPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="file"
            defaultValue={image}
            accept=".jpg, .jpeg, .png, .svg"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </label>
        <br />
        <input type="submit" value="Update Product" />
      </form>
    </div>
  );
};

export default EditProduct;
