import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data = [
        {
            id: 1,
            img: 'https://cdn.pixabay.com/photo/2023/10/21/18/51/woman-8332162_640.jpg',
            img2: 'https://cdn.pixabay.com/photo/2022/01/18/15/40/vietnam-6947337_640.jpg',
            title: 'Skirt',
            desc: 'Skirt',
            oldPrice: 1500,
            price: 1200,
            isNew: true,
        },
        {
            id: 2,
            img: 'https://cdn.pixabay.com/photo/2023/10/21/18/51/woman-8332162_640.jpg',
            img2: 'https://cdn.pixabay.com/photo/2022/01/18/15/40/vietnam-6947337_640.jpg',
            title: 'Skirt',
            desc: 'Skirt',
            oldPrice: 1500,
            price: 1200,
        },
    ]
    return (
        <div className='cart'>
            <h1>Products in your cart</h1>
            {
                data?.map(item => (
                    <div className='item' key={item.id}>
                        <img src={item.img} alt="" />
                        <div className='details'>
                            <h1>{item.title}</h1>
                            {/* <p>{item.desc?.subString(0, 100)}</p> */}
                            <div className="price">
                                1 x ${item.price}
                            </div>
                        </div>
                        <DeleteOutlineIcon className='delete' />
                    </div>
                ))
            }

            <div className="total">
                <span>subtotal</span>
                <span>$69</span>
            </div>
            <button>proceed to checkout</button>
            <span className="reset">Reset Cart</span>
        </div>
    )
}

export default Cart