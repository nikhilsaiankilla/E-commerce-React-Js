import Card from '../Card/Card'
import './FeatureProducts.scss'
import ProductData from './../../data/Products.json'

const FeatureProducts = ({ type }) => { 
    const data = ProductData.products
    return (
        <div className='featured-products'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ratione voluptatibus consectetur ut, quaerat possimus asperiores non delectus deleniti assumenda praesentium minima magnam numquam, sed minus nobis eaque iure soluta culpa voluptates esse molestias!</p>
            </div>
            <div className="bottom">
                {
                    data?.slice(5,9).map(item => (<Card item={item} key={item.id}/>))
                }
            </div>
        </div>
    )
}

export default FeatureProducts