import {Navbar} from './components/Navbar'
import { Portada } from "./components/Portada";
import './App.css'
import {products as prod} from './mocks/products.json'
import { useState,useEffect } from 'react';

export const App = () => {
  const [products,setProducts] = useState([])
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = prod;
      // const url = 'https://cartify.p.rapidapi.com/productsprod';
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "c0f4027d00mshe18306e3afdbad2p176324jsn58ddc7deddd1",
          "X-RapidAPI-Host": "cartify.p.rapidapi.com",
        },
      };

      try {
        // const response = await fetch(url,options);
        // const result = await response.json();
        setProducts(prod)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <Portada/>
   
    <div>
      <h1>Product List</h1>
      {error && <p>Error fetching products: {error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <img src={product.image} alt={product.title} width="100" />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

