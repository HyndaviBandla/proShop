import React from "react";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:4000/api/products");
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  //   if you put something in the above line empty array in here and that value changes, this use effect is going to run okay, but we only want it to run once when the page loads.
  // So we're just going to leave this as an empty array.
  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default HomeScreen;
