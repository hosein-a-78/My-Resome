// Components
import SocialMedia from '../../Components/Social-Media/Social-Media';
import ScrollUp from '../../Components/Scroll-Up/Scroll-Up';
// Css
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className='container'>
                <p>&copy; 2024 Hosein Kamalu</p>

                <nav>
                    <SocialMedia url='https://wa.me/09194196652' icon='icon-whatsapp' link='09194196652' />
                    <SocialMedia url='https://github.com/abed-a-78' icon='icon-github' />
                    <SocialMedia url='https://telegram.me/@abed_a_78' link='@abed_a_78' icon='icon-telegram' />
                </nav>
            </div>

            {/* scroll up page */}
            <ScrollUp />
        </footer>
    );
}

export default Footer;