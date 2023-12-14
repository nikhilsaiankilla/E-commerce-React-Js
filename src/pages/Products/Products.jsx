import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'
import { useState } from 'react'

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice , setMaxPrice] = useState(1000)
  const [sort , setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name='shoes' id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name='shoes' id="2" value={2} />
            <label htmlFor="2">pants</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name='shoes' id="3" value={3} />
            <label htmlFor="3">shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name='shoes' id="4" value={4} />
            <label htmlFor="4">skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name='shoes' id="5" value={5} />
            <label htmlFor="5">tops</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <span>0</span>
          <input type="range" min={0} max={10000} step={1} onChange={(e) => setMaxPrice(e.target.value)}/>
          <span>10000</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value='asc' name='price' onChange={e => setSort(e.target.value)}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value='desc' name='price' onChange={e => setSort(e.target.value)}/>
            <label htmlFor="desc">Price (highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"
             className='catImg' 
             alt='banner'
        />
        <List maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products