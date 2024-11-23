import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import PopularRestaurants from '../components/PopularRestaurants'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
        fetchRestaurants();
      }, [])

    const fetchRestaurants = async() =>{
        await axios.get('http://localhost:6001/fetch-restaurants').then(
          (response)=>{
            setRestaurants(response.data);
          }
        )
      }

  return (
    <div className="HomePage">

      <div className="home-categories-container">

        <div className="home-category-card" onClick={()=>navigate('/category/Breakfast')}>
          <img src="https://www.lacademie.com/wp-content/uploads/2022/03/indian-breakfast-recipes-500x500.jpg" alt="" />
          <h5>Breakfast</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Biriyani')}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-VXaTJIkc6rk02DU8r7r9zR-KaeWvH1oKA&usqp=CAU" alt="" />
          <h5>Biriyani</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Pizza')}>
          <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />
          <h5>Pizza</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Noodles')}>
          <img src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_2176816723.jpg" alt="" />
          <h5>Noodles</h5>
        </div>

        <div className="home-category-card" onClick={()=>navigate('/category/Burger')}>
          <img src="data:image/jpeg;base64,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" alt="" />
          <h5>Burger</h5>
        </div>

      </div>


      <PopularRestaurants />

      


      <div className="restaurants-container">
        <div className="restaurants-body">
            <h3>All restaurants</h3>
            <div className="restaurants">

                {restaurants.map((restaurant) =>(

                  <div className='restaurant-item' key={restaurant._id}>
                      <div className="restaurant" onClick={()=> navigate(`/restaurant/${restaurant._id}`)}>
                          <img src={restaurant.mainImg} alt="" />
                          <div className="restaurant-data">
                              <h6>{restaurant.title}</h6>
                              <p>{restaurant.address}</p>
                          </div>
                      </div>
                  </div>
                ))}

 
            </div>
        </div>
    </div>





      <Footer />
    </div>
  )
}

export default Home