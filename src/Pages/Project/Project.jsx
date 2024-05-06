// Images
import crypto1 from '../../assets/Images/crypto1.png';
import cryptoTest from '../../assets/Images/cryptoTest.png';
import netflix from '../../assets/Images/netflix.png';
import netflixTest from "../../Assets/Images/netflixTest.png";
import library from '../../assets/Images/library.png';
import libraryTest from '../../assets/Images/libraryTest.png';
import contact from '../../assets/Images/contact.png';
import contactTest from '../../assets/Images/contactTest.png';
import registration from '../../assets/Images/registration.png';
import registrationTest from '../../assets/Images/registrationTest.png';
import calculator from '../../assets/Images/calculator.png';
import calculatorTest from '../../assets/Images/calculatorTest.png';
// Components
import SiteLoader from '../../Components/Site-Loader/Site-Loader';
import Hero from '../../Parts/Hero/Hero';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Project.css';

// data
const data = [
    {
        id: 1,
        type: 'project',
        projectName: 'Crypto App',
        categories: ['html5', 'css3', 'react'],
        image: crypto1,
        test: cryptoTest,
        description: 'Dive into the world of cryptocurrencies with my React-based project, the CryptoToken Explorer! This single-page application (SPA) is designed to provide users with a seamless experience to explore and visualize information about various cryptocurrencies. Utilizing React and Paginate, the project allows users to search for specific cryptocurrency tokens by name. The search functionality is dynamic, providing real-time results as users type.Implemented Paginate for efficient handling of large datasets, ensuring a smooth and organized presentation of token information.Clicking on each token reveals an interactive medal chart showcasing its historical performance. Ive integrated charting libraries to visualize the price trends, empowering users with valuable insights.',
        link: 'https://crypto-app-89cf.onrender.com/',
        github: 'https://github.com/abed-a-78/Crypto-App'
    },

    {
        id: 2,
        type: 'project',
        projectName: 'Netflix',
        categories: ['html5', 'css3', 'react'],
        image: netflix,
        test: netflixTest,
        description: 'Welcome to my React project where I ve recreated the iconic Netflix login page! This single-page application (SPA) serves as a frontend implementation of the Netflix login experience, showcasing my skills in building responsive and dynamic user interfaces.',
        link: 'https://netflix-login.onrender.com/',
        github: 'https://github.com/abed-a-78/Netflix-Login'
    },

    {
        id: 3,
        type: 'project',
        projectName: 'Library Book',
        categories: ['html5', 'css3', 'react'],
        image: library,
        test: libraryTest,
        description: 'Welcome to the BookWorm Library, a React-based front-end project that transforms book exploration into an interactive and enjoyable experience. This application allows users to search for books by name and express their appreciation by liking them. Dive into the world of literature with a user-friendly interface that combines search functionality and a personalized liking system.',
        link: 'https://library-app-083d.onrender.com/',
        github: 'https://github.com/abed-a-78/Library-App'
    },

    {
        id: 4,
        type: 'project',
        projectName: 'Contact',
        categories: ['html5', 'css3', 'react'],
        image: contact,
        test: contactTest,
        description: 'Introducing the Personal Information Manager, a React-based front-end project that allows users to input and manage their personal information effortlessly. This application offers a straightforward interface for users to enter their first name, last name, email, and phone number. Upon submission, the entered information is saved and can be managed through the intuitive user interface.',
        link: 'https://contact-app-8cl2.onrender.com/',
        github: 'https://github.com/abed-a-78/Contract-App'
    },

    {
        id: 5,
        type: 'mini-project',
        projectName: 'Registration',
        categories: ['html5', 'css3', 'react'],
        image: registration,
        test: registrationTest,
        description: 'Embark on the journey of seamless user registration with the Google Registration Form, a React-based single-page application (SPA) that provides a user-friendly experience for signing up. This project incorporates form validation to ensure data integrity and offers clear feedback messages for both errors and successful registrations.',
        link: 'https://registration-google.onrender.com/',
        github: 'https://github.com/abed-a-78/Registration-Google'
    },

    {
        id: 6,
        type: 'mini-project',
        projectName: 'Calculator',
        categories: ['html5', 'css3', 'javascript'],
        image: calculator,
        test: calculatorTest,
        description: 'Explore the power of simplicity with the VanillaJS Calculator, a straightforward project demonstrating the fundamentals of JavaScript for building a functional calculator. This project allows users to perform basic arithmetic operations, making calculations a breeze in a minimalist and user-friendly environment.',
        link: 'https://calculator-vanila.onrender.com/',
        github: 'https://github.com/abed-a-78/Calculator'
    }
];

function Project() {
    // title
    useTabTitle('Project');
    // current page
    useCurrentPage();

    return (
        <>
            <SiteLoader />
            <main className='main project'>
                <Hero title={<>hi.i'm Hosein.<br />a developer</>}>
                    <p>thank you for looking at my projects.</p>
                </Hero>

                <div className="container">
                    <div className='project-items'>
                        {data.filter(item => item.type === 'project').map(item => {
                            const { id, projectName, image, test, categories, link, description, github } = item;
                            return (
                                <article className='article-item' key={id}>
                                    <h2 className='title-md'>{projectName}</h2>

                                    <figure>
                                        <div className='parent-img-shadow'>
                                            <img src={image} alt={projectName} className='article-img' />
                                            <nav className='img-shadow'>
                                                <a href={link} target='_blank' className='shadow-btn icon-link'></a>
                                            </nav>
                                        </div>
                                        <img src={test} alt='test' className='img-test' />
                                        <figcaption>{description}</figcaption>
                                    </figure>

                                    <nav className='article-footer'>
                                        <a href={github} target='_blank' className='icon-github'></a>

                                        <div className='category'>
                                            {categories.map((category, index) => {
                                                return <div className={`category-item icon-${category}`} key={index}></div>
                                            })}
                                        </div>
                                    </nav>
                                </article>
                            );
                        })}
                    </div>

                    {/* mini project */}
                    <h2 className='title-md subline'>mini project</h2>
                    <div className='project-items'>
                        {data.filter(item => item.type === 'mini-project').map(item => {
                            const { id, projectName, image, test, categories, link, description, github } = item;
                            return (
                                <article className='article-item' key={id}>
                                    <h2 className='title-md'>{projectName}</h2>

                                    <figure>
                                        <div className='parent-img-shadow'>
                                            <img src={image} alt={projectName} className='article-img' />
                                            <nav className='img-shadow'>
                                                <a href={link} target='_blank' className='shadow-btn icon-link'></a>
                                            </nav>
                                        </div>
                                        <img src={test} alt='test' className='img-test' />
                                        <figcaption>{description}</figcaption>
                                    </figure>

                                    <nav className='article-footer'>
                                        <a href={github} target='_blank' className='icon-github'></a>

                                        <div className='category'>
                                            {categories.map((category, index) => {
                                                return <div className={`category-item icon-${category}`} key={index}></div>
                                            })}
                                        </div>
                                    </nav>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Project;