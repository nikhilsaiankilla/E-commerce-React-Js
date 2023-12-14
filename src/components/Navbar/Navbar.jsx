import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import flag from './../../assests/en.png'

import { Link } from 'react-router-dom'
import Cart from './../Cart/Cart'

import './Navbar.scss'
import { useState } from 'react';

const Navbar = () => {
  const [open , setOpen] = useState(false)

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={flag} alt='flag' />
            <ExpandMoreOutlinedIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <ExpandMoreOutlinedIcon />
          </div>
          <div className="item">
            <Link  className='link' to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link className='link'  to='/products/2'>Men</Link>
          </div>
          <div className="item">
            <Link  className='link' to='/products/3'>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link  className='link' to='/'>
            Nyntraa
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link'  to='/'>Home</Link>
          </div>
          <div className="item">
            <Link className='link'  to='/'>About</Link>
          </div>
          <div className="item">
            <Link className='link'  to='/'>Contact</Link>
          </div>
          <div className="item">
            <Link className='link'  to='/'>store</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <ShoppingBagOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar