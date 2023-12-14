import Card from '../Card/Card'
import './List.scss'

const List = () => {

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
    <div className='list'>
        {data?.map(item => <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default List