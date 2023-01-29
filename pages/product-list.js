import EditProduct from "@/components/edit";
import { useState } from "react";

const ProductList = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Product 1",
      description: "This is a sample product",
      purchasePrice: 10,
      sellPrice: 20,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is another sample product",
      purchasePrice: 15,
      sellPrice: 25,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Product 3",
      description: "This is yet another sample product",
      purchasePrice: 20,
      sellPrice: 30,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Product 4",
      description: "This is yet another sample product",
      purchasePrice: 20,
      sellPrice: 30,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Product 5",
      description: "This is yet another sample product",
      purchasePrice: 20,
      sellPrice: 30,
      image: "https://via.placeholder.com/150",
    },
  ])

  const [isEdit, setIsEdit] = useState(true);

  const handleDelete = (id) => {
    console.log("delete", id)
    let newData = products.filter(x => x.id != id)
    setProducts(newData)
  }
  return (
    <>
      <div className="product-list-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <br />
            <p>Purchase Price: {product.purchasePrice}</p>
            <p>Sell Price: {product.sellPrice}</p>
            <div className="product-actions">
              <button onClick={() => setIsEdit(true)}>Edit</button>
              <button onClick={() => handleDelete(`${product.id}`)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEdit && <EditProduct product={products} onClose={() => setIsEdit(false)} />}
    </>
  );
};

export default ProductList;
