import { useState } from 'react'
import './Product.scss'

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://cdn.pixabay.com/photo/2022/01/18/15/40/vietnam-6947337_640.jpg'
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>title</h2>
        <span className='price'>$ 999</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore, fugit, sapiente mollitia atque, rem saepe veritatis quos laudantium soluta velit architecto modi.</p>
        <div className="quantity">
          <button onClick={e => setQuantity(e => e > 1 ? e - 1 : 1)}>-</button>
            {quantity}
          <button onClick={e => setQuantity(e => e + 1)}>+</button>
        </div>
        <div className="add">
          <ShoppingBagIcon /> add to cart
        </div>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> add to wish list
          </div>
          <div className="item">
            <BalanceIcon /> add to compare
          </div>
        </div>
        <div className="info">
          <span>Vendor : polo</span>
          <span>Product Type : T-shirt</span>
          <span>Tag : T-shirt , Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>description</span>
          <hr />
          <span>additional information</span>
          <hr />
          <span>faq</span>
        </div>
      </div>
    </div>
  )
}

export default Product