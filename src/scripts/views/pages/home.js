import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="jumbotron">
      <picture>
        <source media="(min-width:768px)" srcset="./images/hero-image_2-large.jpg" type="image/webp">
        <source media="(min-width:768px)" srcset="./images/hero-image_2-large.jpg" type="image/jpg">
        
        <source media="(max-width:768px)" srcset="./images/hero-image_2-small.jpg" type="image/webp">
        <source media="(max-width:768px)" srcset="./images/hero-image_2-small.jpg" type="image/jpg">
        <img class="lazyload" data-src="./images/hero-image_2.jpg" alt="jumbotron Restaurant">
      </picture>
      <h2>
        Exploring Flavors, <br>
        Savoring Moments.
      </h2>
      </div>
      <div class="content">
        <h2 class="content__heading"><span>Restoran: Makanan, Minuman, dan Suasana Terbaik</span></h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantSource.listRestaurants();
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.error('Error rendering restaurant list:', error);
    }
  },
};

export default Home;
