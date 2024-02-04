// Images
import crypto from '../../assets/Images/crypto.png';
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
        categories: ['html5', 'css3', 'javascript', 'react'],
        image: crypto,
        test: cryptoTest,
        description: 'This is the first project that I presented at the end of my training course. A one-page website has an interesting banner that attracts the audience and then uses a small gallery to display the portfolio and then gives a description about the person. Finally, you can contact the owner of the portfolio using a form that also has a social network. No other libraries or packages were used to create this website. It was originally a WordPress theme that I customized.',
        link: 'https://crypto-app-89cf.onrender.com/',
        github: 'https://github.com/abed-a-78/Crypto-App'
    },

    {
        id: 2,
        type: 'project',
        projectName: 'Netflix',
        categories: ['html5', 'css3', 'javascript', 'react'],
        image: netflix,
        test: netflixTest,
        description: 'this single-page website has an animated banner and that a modal to display the menu; Most of the site is about the restaurant menu and finally a section for contacting the restaurant and booking. No other libraries or packages were used to create this website. It was originally a WordPress theme that I customized.',
        link: 'https://netflix-login.onrender.com/',
        github: 'https://github.com/abed-a-78/Netflix-Login'
    },

    {
        id: 3,
        type: 'project',
        projectName: 'Library Book',
        categories: ['html5', 'css3', 'javascript', 'react'],
        image: library,
        test: libraryTest,
        description: 'this project multi-page website with various section which is about a company active in the construction. No other library or package was used to create this website. No other libraries or packages were used to create this website. It was originally a WordPress theme that I customized.',
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
        description: 'this project multi-page website with various section which is about a company active in the construction. No other library or package was used to create this website. initially, a wordpress template was prepared, byt I customized. (The only difference is the use of React.js)',
        link: 'https://contact-app-8cl2.onrender.com/',
        github: 'https://github.com/abed-a-78/Contract-App'
    },

    {
        id: 5,
        type: 'mini-project',
        projectName: 'Registration',
        categories: ['html5', 'css3', 'javascript', 'react'],
        image: registration,
        test: registrationTest,
        description: 'a mini project with javascript a bit of design',
        link: 'https://registration-google.onrender.com/',
        github: 'https://github.com/abed-a-78/Registration-Google'
    },

    {
        id: 6,
        type: 'mini-project',
        projectName: 'Calculator',
        categories: ['html5', 'css3', 'javascript', 'react'],
        image: calculator,
        test: calculatorTest,
        description: 'A small project with React and using axios to get data This project is a cryptocurrency search panel and also has a brief login form.',
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