import EditProduct from "@/components/edit";
import { use, useState } from "react";

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

  const [selectedProduct, setSelectedProduct] = useState([])

  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = (id) => {
    console.log("delete", id)
    let newData = products.filter(x => x.id != id)
    setProducts(newData)
  }

  const handleEdit = (data) => {
    console.log(data)
    let newData = products.map(x => {
      if (data.id == x.id) {
        x.title = data.title
        x.description = data.description
        x.purchasePrice = data.purchasePrice
        x.sellPrice = data.purchasePrice
        x.image = data.image
      }
      return x
    })
    setProducts(newData)
    setIsEdit(false)
  }

  return (
    <>
      <div className="product-list-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.title} style={{ height: '230px', width: '230px', objectFit: 'cover' }} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <br />
            <p>Purchase Price: {product.purchasePrice}</p>
            <p>Sell Price: {product.sellPrice}</p>
            <div className="product-actions">
              <button onClick={() => {
                setSelectedProduct(product)
                setIsEdit(true)
              }}>Edit</button>
              <button onClick={() => handleDelete(`${product.id}`)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEdit && <EditProduct product={selectedProduct} handleEdit={handleEdit} onClose={() => setIsEdit(false)} />}
    </>
  );
};

export default ProductList;
