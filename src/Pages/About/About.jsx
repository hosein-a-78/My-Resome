// Images
import Profile from '../../assets/Images/profil.jpg';
//Document
import cv from "./../../Assets/Document/Hosein_kamalu.pdf"
// Components
import SiteLoader from '../../Components/Site-Loader/Site-Loader';
import Hero from '../../Parts/Hero/Hero';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './about.css';

function About() {
    // title
    useTabTitle('About');
    // current page
    useCurrentPage();

    return (
        <>
            <SiteLoader />
            <main className='main about'>
                <Hero title='about me' />

                <article>
                    <figure className="container">
                        <img src={Profile} alt={Profile} className='profile' />
                        <figcaption className='caption'>
                            <h2 className='title-md'>Hello, I am Hosein, I am 23 years old and it has been a year since I got acquainted with the world of programming.</h2>
                            <p>I started training from the Laitec training group affiliated with Sharif University of Technology and after that I tried to learn more with online courses.<br />I am well-versed in Html5 and Css3, and I also know JavaScript at an intermediate level, I am familiar with sass, bootstrap and Jquery. I worked with git and github and the portfolio is fully responsive, there is also a small project related to rest api skills in the portfolio.<br />I recently learned the react course and put some work samples in my resume.</p>

                            <a href={cv} className='get-cv' download>
                                <span>Download Cv</span>
                                <span className='get-cv-icon icon-download'></span>
                            </a>
                        </figcaption>
                    </figure>
                </article>
            </main>
        </>
    );
}

export default About;