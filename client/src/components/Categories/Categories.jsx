import './Categories.scss'

import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/757316/pexels-photo-757316.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/2'>Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/982585/pexels-photo-982585.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/3'>Sale</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/13071670/pexels-photo-13071670.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <button>
                                <Link className='link' to='/products/4'>Sale</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/19427622/pexels-photo-19427622/free-photo-of-the-model-wears-a-floral-print-pantsuit-and-heels.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <button>
                                <Link className='link' to='/products/5'>Sale</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/6'>Sale</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories