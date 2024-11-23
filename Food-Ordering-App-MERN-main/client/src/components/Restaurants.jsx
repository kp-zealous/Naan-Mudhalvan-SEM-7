import React, { useState, useEffect } from 'react';
import '../styles/Restaurants.css';

const Restaurants = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the restaurant details from the API
    const fetchRestaurantDetails = async () => {
      try {
        const response = await fetch('http://localhost:6001/fetch-restaurant-details-with-items/12345');  // Replace with actual restaurant ID
        const data = await response.json();
        setRestaurantData(data.menu);  // Assuming 'menu' contains the restaurant items
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="restaurants-container">
      <div className="restaurants-filter">
        <h4>Filters</h4>
        <div className="restaurant-filters-body">
          {/* Filters section */}
          <div className="filter-sort">
            <h6>Sort By</h6>
            <div className="filter-sort-body sub-filter-body">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="filter-sort-radio1" />
                <label className="form-check-label" htmlFor="filter-sort-radio1">Popularity</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="filter-sort-radio4" />
                <label className="form-check-label" htmlFor="filter-sort-radio4">Rating</label>
              </div>
            </div>
          </div>
          <div className="filter-categories">
            <h6>Categories</h6>
            <div className="filter-categories-body sub-filter-body">
              {/* Categories section */}
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="filter-category-check-1" />
                <label className="form-check-label" htmlFor="filter-category-check-1">South Indian</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="filter-category-check-2" />
                <label className="form-check-label" htmlFor="filter-category-check-2">North Indian</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="filter-category-check-3" />
                <label className="form-check-label" htmlFor="filter-category-check-3">Chinese</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="filter-category-check-4" />
                <label className="form-check-label" htmlFor="filter-category-check-4">Beverages</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="filter-category-check-5" />
                <label className="form-check-label" htmlFor="filter-category-check-5">Ice Cream</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label className="form-check-label" htmlFor="flexCheckChecked">Tiffins</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="restaurants-body">
        <h3>All restaurants</h3>
        <div className="restaurants">
          {/* Dynamically render restaurant items */}
          {restaurantData.map((item, index) => (
            <div className='restaurant-item' key={index}>
              <div className="restaurant">
                <img src={item.itemImg || 'https://via.placeholder.com/150'} alt={item.title} />
                <div className="restaurant-data">
                  <h6>{item.title}</h6>
                  <p>{item.description}</p>
                  <h5>Rating: <b>{item.rating || 'N/A'}/5</b></h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
