import './Contact.scss'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>be in touch</span>
            <div className="mail">
                <input type="text" placeholder='enter your email'/>
                <button>join us</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <MailIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact