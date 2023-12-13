import './Footer.scss'

import payment from './../../assests/payment.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categoriees</h1>
          <span>women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse amet illo mollitia alias accusamus at voluptatum temporibus excepturi unde veritatis maxime exercitationem reiciendis eaque laboriosam, corporis necessitatibus aperiam perspiciatis eius!</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse amet illo mollitia alias accusamus at voluptatum temporibus excepturi unde veritatis maxime exercitationem reiciendis eaque laboriosam, corporis necessitatibus aperiam perspiciatis eius!</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Nyntraaa</span>
          <span>&copy; Copyright 2023. ALL Rights Reserved</span>
        </div>
        <div className="right">
          <img src={payment} alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer