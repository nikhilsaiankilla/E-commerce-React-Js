import Card from '../Card/Card'
import './List.scss'
import productData from './../../data/Products.json'

const List = () => {
    const data = productData.products
    return (
        <div className='list'>
            {data?.map(item => <Card item={item} key={item.id} />)}
        </div>
    )
}

export default List