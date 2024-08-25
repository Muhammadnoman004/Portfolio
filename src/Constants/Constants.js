import { FaBootstrap, FaCss3Alt, FaGithub, FaHtml5, FaLinkedinIn } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

// for project 1
import project1Img1 from '../assets/Project1/login.png'
import project1Img2 from '../assets/Project1/verification.png'
import project1Img3 from '../assets/Project1/student 1.png'
import project1Img4 from '../assets/Project1/student.png'
import project1Img5 from '../assets/Project1/student 2.png'
import project1Img6 from '../assets/Project1/student 3.png'
import project1Img7 from '../assets/Project1/student 4.png'
import project1Img8 from '../assets/Project1/student 5.png'
import project1Img9 from '../assets/Project1/student 6.png'
import project1Img10 from '../assets/Project1/trainer 1.png'
import project1Img11 from '../assets/Project1/trainer 2.png'
import project1Img12 from '../assets/Project1/trainer 3.png'
import project1Img13 from '../assets/Project1/trainer 4.png'
import project1Img14 from '../assets/Project1/admin 1.png'
import project1Img15 from '../assets/Project1/admin 2.png'
import project1Img16 from '../assets/Project1/admin 3.png'
import project1Img17 from '../assets/Project1/admin 4.png'

// for project 2
import project2Img1 from '../assets/Project2/Blog 1.png'
import project2Img2 from '../assets/Project2/Blog 2.png'
import project2Img3 from '../assets/Project2/Blog 3.png'
import project2Img4 from '../assets/Project2/Blog 4.png'
import project2Img5 from '../assets/Project2/Blog 5.png'
import project2Img6 from '../assets/Project2/Blog 6.png'

// for project 3
import project3Img1 from '../assets/Project3/Site 1.png'
import project3Img2 from '../assets/Project3/Site 2.png'
import project3Img3 from '../assets/Project3/Site 3.png'
import project3Img4 from '../assets/Project3/Site 4.png'
import project3Img5 from '../assets/Project3/Site 5.png'

// for project 4
import project4Img1 from '../assets/Project4/quiz 1.png'
import project4Img2 from '../assets/Project4/quiz 2.png'
import project4Img3 from '../assets/Project4/quiz 3.png'

// for project 5
import project5Img1 from '../assets/Project5/smit 1.png'
import project5Img2 from '../assets/Project5/smit 2.png'
import project5Img3 from '../assets/Project5/smit 3.png'

// socialIcons
import { FaFacebookF } from "react-icons/fa";

// lightModeImg
import lightModeImg from '../assets/lightModeImg.png'
import nightModeImg from '../assets/nightModeImg.png'

// institutesImages
import schoolLogo from '../assets/schoolLogo.jpg'
import collegeLogo from '../assets/collegeLogo.jpg'
import universityLogo from '../assets/universityLogo.png'
import smitLogo from '../assets/smitLogo.png'
import lingversityLogo from '../assets/lingversityLogo.jpg'
import digiskillsLogo from '../assets/digiskillsLogo.png'

// navbarLogo
import navbarImg from '../assets/navbarLogo.png'


const skillsSubTitle = "Crazy full stack developer who wants to explore every tech stack";

// name
const name = "Muhammad Noman";

// navbarLogo
const navbarLogo = navbarImg;

// skillsIcons
const skillsIcons = [
    {
        icon: <FaHtml5 />,
        title: "Html-5"
    },
    {
        icon: <FaCss3Alt />,
        title: "css3"
    },
    {
        icon: <FaBootstrap />,
        title: "Bootstrap"
    },
    {
        icon: <IoLogoJavascript />,
        title: "JavaScript"
    },
    {
        icon: <RiReactjsLine />,
        title: "reactjs"
    },
    {
        icon: <IoLogoFirebase />,
        title: "firebase"
    },
    {
        icon: <TbBrandNextjs />,
        title: "Nextjs"
    },
];

// education
const education = [
    // {
    //     img: universityLogo,
    //     instituteName: "University of Karachi",
    //     degreeName: "Bachelor of Computer Science",
    //     duration: "January 2024 - December 2027"
    // },
    {
        img: collegeLogo,
        instituteName: "Jinnah Govt College Nazimabad",
        degreeName: "Intermediate in Science General Group",
        duration: "November 2021 - October 2023"
    },
    {
        img: schoolLogo,
        instituteName: "Matchless Grammar Secondary School",
        degreeName: "Matriculation in Science Group",
        duration: "March 2019 - October 2021"
    }
]

// resumeLink
const resume = "https://drive.google.com/file/d/1cEj9nfYDevORTpV87cuMd3WKexi7Lxfd/view?usp=sharing";

// professionalExperience
const professionalExperience = [

    {
        img: smitLogo,
        name: "Saylani Mass IT Training Program",
        role: "Web & Mobile App Development Course",
        duration: "June 2023 - May 2024",
        certified: true
    },
    {
        img: lingversityLogo,
        name: "Linversity Institute Of Languages & Training",
        role: "Graphics Design Course",
        duration: "July 2021 - February 2022",
        certified: true
    },
    {
        img: digiskillsLogo,
        name: "DigiSkills",
        role: "Digital Marketing",
        duration: "September 2021 - December 2021",
        certified: true
    },
]

// skillsList
const skillsList = [
    "Develop highly interactive Front end / User Interfaces for your websites.",
    "Integration of third party services such as Firebase.",
    "Easily create responsive sites."
]

// servicesList
const servicesList = [
    {
        title: "Website Development",
        description: "Create responsive and interactive websites for individuals, businesses, or organizations using your skills in HTML5, CSS3, JavaScript, and Bootstrap. Ensure that the websites are mobile-friendly and optimized for various devices and screen sizes."
    },
    {
        title: "Frontend Development",
        description: "Specialize in frontend development by building user interfaces (UIs) and user experiences (UX) using HTML5, CSS3, JavaScript, and React.js. Develop single-page applications (SPAs) and ensure they are fast, responsive, and accessible."
    },
    {
        title: "Custom Web Applications",
        description: "Utilize React.js along with backend technologies (like Node.js, Express.js, or others) to develop custom web applications. Use Firebase for real-time data syncing and backend services, such as authentication, databases, and hosting."
    },
    {
        title: "Web Hosting and Deployment",
        description: "Assist clients in deploying their websites and web applications to hosting platforms such as Firebase Hosting, Netlify, or traditional web servers. Optimize website performance and ensure secure connections (HTTPS)."
    },
    {
        title: "Maintenance and Updates",
        description: "Offer maintenance services to keep websites and web applications up-to-date with security patches, performance improvements, and feature enhancements. Provide regular backups and monitoring for uptime."
    },
    {
        title: "Responsive Design Audits",
        description: "Evaluate existing websites for responsiveness across devices and browsers. Provide recommendations and implement improvements using CSS3 media queries and responsive design principles."
    },
    {
        title: "Integration with APIs",
        description: "Integrate third-party APIs (such as social media APIs, or data APIs) into web applications using JavaScript and frameworks like React.js. Ensure secure and efficient data exchange between systems."
    },
]

// portfolio
const portfolio = [
    {
        images: [
            project1Img1,
            project1Img2,
            project1Img3,
            project1Img4,
            project1Img5,
            project1Img6,
            project1Img7,
            project1Img8,
            project1Img9,
            project1Img10,
            project1Img11,
            project1Img12,
            project1Img13,
            project1Img14,
            project1Img15,
            project1Img16,
            project1Img17,
        ],
        title: "Assignment Submission Portal",
        description: "The Assignment Submission Portal simplifies the management of classes, assignments, and profiles for admins, trainers, and students. It includes key features like user management, class creation, and secure assignment submissions. Developed with a robust tech stack, it ensures a secure and efficient experience.",
        link: "https://assignment-submission-portal.vercel.app/"
    },
    {
        images: [
            project2Img1,
            project2Img2,
            project2Img3,
            project2Img4,
            project2Img5,
            project2Img6,
        ],
        title: "Blogging Website",
        description: "I've developed an adaptive blog platform using React,js for smooth data handling with Firebase, prioritizing security to safeguard user information. The emphasis is on providing an accurate, secure, and user-centric blogging experience.",
        link: "https://react-blogging-website-orpin.vercel.app/"
    },
    {
        images: [
            project3Img1,
            project3Img2,
            project3Img3,
            project3Img4,
            project3Img5
        ],
        title: "My Site",
        description: "This website showcases a My Site homepage. The platform emphasizes the site offerings, which encompass innovative design, performance enhancement, and complete customization. The site also includes feedback from delighted clients and a prompt to download the My Site application.",
        link: "https://next-pwa-pied-two.vercel.app/"
    },
    {
        images: [
            project4Img1,
            project4Img2,
            project4Img3,
        ],
        title: "Quiz App",
        description: "I have developed a quiz app using React.js that generates random questions and tracks your score in real-time. The app not only provides immediate feedback on your performance but also determines whether you've passed or failed, offering an engaging and interactive quiz experience.",
        link: "https://react-quiz-ivory.vercel.app/"
    },
    {
        images: [
            project5Img1,
            project5Img2,
            project5Img3,
        ],
        title: "Saylani Enrollment Form",
        description: "I have crafted a user-friendly and responsive enrolment form that mirrors the functionality of the Saylani form. This project was a fantastic opportunity to enhance my skills in HTML, CSS, and JavaScript, as well as integrate Firebase Firestore for seamless data storage.",
        link: "https://muhammadnoman004.github.io/SMIT-Form/"
    },
]

// contact
const contact = {
    number: "+923492089094",
    email: "huzaifakhanofficial01@gmail.com",
    location: "Metroville S.I.T.E. Karachi."
}

// socialLinks
const socialLinks = [
    {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/profile.php?id=100090157283290"
    },
    {
        icon: <FaGithub />,
        link: "https://github.com/Huzaifa-Khan-Official"
    },
    {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/huzaifa-khan-officia/"
    }
]

const themes = {
    lightModeImg,
    nightModeImg
}

export { skillsSubTitle, skillsIcons, skillsList, servicesList, portfolio, contact, socialLinks, name, themes, education, professionalExperience, resume, navbarLogo }