import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item['img-1']} alt="" className='main-img'/>
          <img src={item['img-2']} alt="" className='second-img'/>
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3 className='old-price'>$ {item.oldPrice}</h3>
          <h3>$ {item.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card