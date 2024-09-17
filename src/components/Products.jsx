import React, { useState } from "react";
import { products } from "./productsData";
import ProductCard from "./ProductCard";
import "./Products.css";
import JewelryImage from "../assets/Jewellery.png";
import WatchesImage from "../assets/Watches.png";
import ScarvesImage from "../assets/Scarves.png";
import HairAccessoriesImage from "../assets/HairAccessories.png";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(""); // New state for selected category
  const productsPerPage = 12;

  // Function to filter products by search term
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  // Function to sort products
  const handleSort = (event) => {
    const sortValue = event.target.value;
    setSortType(sortValue);
    let sorted = [...filteredProducts];

    if (sortValue === "price-low-high") {
      sorted = sorted.sort((a, b) => a.price - b.price);
    } else if (sortValue === "price-high-low") {
      sorted = sorted.sort((a, b) => b.price - a.price);
    } else if (sortValue === "popularity") {
      sorted = sorted.sort((a, b) => b.rating - a.rating);
    }
    setFilteredProducts(sorted);
  };

  // Function to filter products by category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Page change handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      {/* Search bar */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="search-bar"
      />

      {/* Sorting options */}
      <div className="sort-section">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortType} onChange={handleSort}>
          <option value="">Select</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>

      {/* Category Images */}
      <div className="category-section">
        <div className="category-circle" onClick={() => handleCategoryClick("Jewelry")}>
          <img src={JewelryImage} alt="Jewelry" />
          <p>Jewelry</p>
        </div>
        <div className="category-circle" onClick={() => handleCategoryClick("Watches")}>
          <img src={WatchesImage} alt="Watches" />
          <p>Watches</p>
        </div>
        <div className="category-circle" onClick={() => handleCategoryClick("Scarves")}>
          <img src={ScarvesImage} alt="Scarves" />
          <p>Scarves</p>
        </div>
        <div className="category-circle" onClick={() => handleCategoryClick("Hair Accessories")}>
          <img src={HairAccessoriesImage} alt="Hair Accessories" />
          <p>Hair Accessories</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {currentProducts.length ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={number + 1 === currentPage ? "active-page" : ""}
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
