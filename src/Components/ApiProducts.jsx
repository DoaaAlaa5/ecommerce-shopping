import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // هنظهر 8 في الأول

  useEffect(() => {
    // هنسحب من كذا لينك عشان نجمع ملابس كتير
    const fetchClothes = async () => {
      try {
        const [mens, womens, tops] = await Promise.all([
          axios.get('https://dummyjson.com/products/category/mens-shirts'),
          axios.get('https://dummyjson.com/products/category/womens-dresses'),
          axios.get('https://dummyjson.com/products/category/tops')
        ]);
        
        // بنجمع كل المنتجات في مصفوفة واحدة
        const combined = [...mens.data.products, ...womens.data.products, ...tops.data.products];
        setAllProducts(combined);
      } catch (err) {
        console.error("Error fetching clothes:", err);
      }
    };

    fetchClothes();
  }, []);

  const displayedItems = allProducts.slice(0, visibleCount);
  const hasMore = visibleCount < allProducts.length;

  const handleSeeMore = () => {
    setVisibleCount(allProducts.length); // يظهر الكل مرة واحدة
  };

  const handleSeeLess = () => {
    setVisibleCount(8);
  };

  if (allProducts.length === 0) return <h3 className="text-center my-5">Loading Clothes...</h3>;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold">Our Fashion Collection</h1>

      <div className="row g-4">
        {displayedItems.map((item) => (
          <div key={item.id} className="col-12 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="text-center p-3">
                <img
                  src={item.thumbnail}
                  className="card-img-top rounded"
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'contain', backgroundColor: '#f8f9fa' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-bold text-dark">{item.title}</h6>
                <p className="card-text text-primary fs-5 fw-bold">${item.price}</p>
                <button className="btn btn-dark mt-auto w-100">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5 d-flex justify-content-center gap-3">
        {hasMore && (
          <button className="btn btn-primary px-5 py-2 shadow" onClick={handleSeeMore}>
            See All Fashion ({allProducts.length})
          </button>
        )}
        
        {visibleCount > 8 && (
          <button className="btn btn-outline-dark px-5 py-2" onClick={handleSeeLess}>
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ApiProducts;