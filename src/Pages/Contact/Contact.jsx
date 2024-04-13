// Components
import SiteLoader from "../../Components/Site-Loader/Site-Loader";
import Hero from '../../Parts/Hero/Hero';
import SocialMedia from '../../Components/Social-Media/Social-Media';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Contact.css';

function Contact() {
    // title
    useTabTitle('Contact');
    // current page
    useCurrentPage();

    return (
        <>
            <SiteLoader />
            <main className='main contact'>
                <Hero title='contact me' />

                <nav className='social-box container'>
                    <SocialMedia url='https://github.com/hosein-a-78' icon='icon-github' link='Hosein Kamalu' />
                    <SocialMedia url='https://www.linkedin.com/in/hosein-kamalu-6361602a5/' icon='icon-linkedin' link='Hosein Kamalu' />
                    <SocialMedia url='https://wa.me/09194196652' icon='icon-whatsapp' link='09194196652' />
                    <SocialMedia url='https://telegram.me/@abed_a_78' icon='icon-telegram' link='@Hosein_a_78' />
                    <SocialMedia url='tel:+989194196652' icon='icon-phone' link='09194196652' />
                    <SocialMedia url='hosein.kamalu.78@gmail.com' icon='icon-gmail' link='hosein.kamalu.78@gmail.com' />
                </nav>
            </main>
        </>
    );
}

export default Contact;