import Card from '../Card/Card'
import './FeatureProducts.scss'

const FeatureProducts = ({ type }) => {

    const data = [
        
        {
            id: 1,
            img: 'https://cdn.pixabay.com/photo/2023/10/21/18/51/woman-8332162_640.jpg',
            img2: 'https://cdn.pixabay.com/photo/2022/01/18/15/40/vietnam-6947337_640.jpg',
            title: 'Skirt',
            oldPrice: 1500,
            price: 1200,
            isNew : true,
        },
        {
            id: 2,
            img: 'https://cdn.pixabay.com/photo/2023/10/21/18/51/woman-8332162_640.jpg',
            img2: 'https://cdn.pixabay.com/photo/2022/01/18/15/40/vietnam-6947337_640.jpg',
            title: 'Skirt',
            oldPrice: 1500,
            price: 1200,
        },
        {
            id: 3,
            img: 'https://cdn.pixabay.com/photo/2023/10/21/18/51/woman-8332162_640.jpg',
            img2: 'https://cdn.pixabay.com/photo/2022/01/18/15/40/vietnam-6947337_640.jpg',
            title: 'Skirt',
            oldPrice: 1500,
            price: 1200,
        },
        {
            id: 4,
            img: 'https://cdn.pixabay.com/photo/2023/10/21/18/51/woman-8332162_640.jpg',
            img2: 'https://cdn.pixabay.com/photo/2022/01/18/15/40/vietnam-6947337_640.jpg',
            title: 'Skirt',
            oldPrice: 1500,
            price: 1200,
        },
    ]
    return (
        <div className='featured-products'>
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ratione voluptatibus consectetur ut, quaerat possimus asperiores non delectus deleniti assumenda praesentium minima magnam numquam, sed minus nobis eaque iure soluta culpa voluptates esse molestias!</p>
            </div>
            <div className="bottom">
                {
                    data.map(item => (<Card item={item} key={item.id}/>))
                }
            </div>
        </div>
    )
}

export default FeatureProducts