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
                    <SocialMedia url='dds' icon='icon-whatsapp' />
                    <SocialMedia url='dds' icon='icon-github' />
                    <SocialMedia url='dds' icon='icon-telegram' />
                </nav>
            </div>

            {/* scroll up page */}
            <ScrollUp />
        </footer>
    );
}

export default Footer;