let skills = {
    'Front End' : [
        'Javascript, jQuery, AJAX, HTML5, CSS3, Sass',
        'Frameworks - Angular, Bootstrap',
        'Build tools - bower, gulp/elixir, npm, yarn, protrator(e2e)',
        'Testing - Jasmine, Karma'
    ],
    'Server side' : [
        'Laravel PHP, Eloquent, Blades',
        'Node, Express js',
        'Enterprise JAVA',
        'Testing -phpunit, junit'
    ],
    'Tools' : [
        'Project management - Jira, Rally, Basecamp',
        'Source control - Git, SVN',
        'Browser testing - Browserstack',
        'E-mail testing - Litmus'
    ],
    'Methodologies' : [
        'Test driven development',
        'Focus on website performance',
        'Responsive web design'
    ],
    'Other' :[
        'E-mail design and development'
    ]
};


let portfolio = new Map();
portfolio.set('Energy Aspects', {
    title : 'Senior web developer',
    period : 'Nov 2015 - present',
    responsibilities : {
        'Web developer' : [
            'Energy Aspects is a startup data centric company in energy market that provides reports and analysis on Crude oil, natural gas, emissions and LPG/NGL.',
            'Responsible for development, enhancements and maintenance of company’s internal applications, website, CMS and Publishing system.',
            'Involved in modernization of legacy website and development of content management system from scratch. Introduced comprehensive inline editing on the website for faster change of content and better management.',
            'Developed a benchmarked template suite for marketing and communication e-mails, which resulted in much faster e-mail development with any new application.'
        ]
    }
});

portfolio.set('L&T Infotech', {
    title : 'Project lead',
    period : 'Oct 2009 - Aug 2015',
    responsibilities : []
});

portfolio.set('L&T Infotech', {
    title : '',
    period : '',
    responsibilities : {
        'Web application for Dubal aluminum' : [
            'Requirement gathering from plant workers and Dubal team to come up with the screen visuals (wireframes) and the flow of application.',
            'Created documents and specifications for functional requirements.',
            'Led a team of 4 to design, develop and deliver the application.',
            'Used Angular JS framework for the application development.',
            'Used Bootstrap for the responsive design as the application was to be developed for multiple resolutions (tablets and mobile).',
            'Developed custom widgets (e.g. dial to show voltage) for some of the specific requirements by client.',
            'Performed testing and debugging required for the development.'
        ],
        'Employee appraisal mobile application for Yum foods' : [
            'Developed Phonegap based hybrid application for mobile and tablets.',
            'Used HTML5, Javascript and CSS3 for developing UI screens.',
            'While keeping the same view layer, developed application for Windows, iPhone and Android OS.',
            'Done unit and integration testing for the application.'
        ],
        'Mobile Application Development Platform (MADP) - SmartMiles' :[
            'End-to-end design/development of mobile application development platform.',
            'Developed a framework using Object oriented javascript, HTML5 and CSS3 that helps in quickly developing UI of mobile applications. This framework provides multiple custom widgets for all resolutions while taking care of cross browser and cross platform/devices.',
            'Developed Phonegap based Mobile applications on SmartMiles platform using Spring- hibernate on backend and HTML5/CSS3/Jquery on front end.',
            'Performed performance testing on the different applications to benchmark the performance of the platform.'
        ],
        'Policy issuance website for Travelers' : [
            'Performed enhancements for the website.',
            'Worked closely with the design team and project managers to ensure projects deliveries in a timely manner.',
            'Worked in agile environment with 2 weeks iteration.',
            'Performed browser testing and debugging'
        ]
    }
});

portfolio.set('Tata consultancy services', {
    title : 'Software developer',
    period : 'Sep 2007 - Oct 2009',
    responsibilities : {
        'developer' : [
            'Worked on mainframe technologies.',
            'Enhanced and developed various Batch and Online applications for Investment banking client.',
            'Worked as a consultant for the different teams to improve the performance of COBOL - DB2 applications.',
            'Developed various REXX based tools to speed up the daily activities and automate the manual processes.'
        ]
    }
});

export default {
    name : 'Shweta Bansal',
    title : 'Full stack developer',
    profile_image : '/images/shweta_profile.jpg',
    headers : {
        'About' : '/about',
        'Skills' : '/skills',
        'Portfolio' : '/portfolio',
        'Contact' : '/contact',
        'Resume' : '/resume.html'
    },
    intro: [
        'HTML', 'CSS', 'Javascript', 'Design', 'Web performance', 'Laravel PHP', 'Node JS/Express JS'
    ],
    about: [
        `I am a full stack developer with wide experience in front end and back end technologies. 
         I am looking forward to developing and exercising years of knowledge on challenging projects and applications. 
         I have a problem solving approach and appreciates clean and readable code. 
         I am always enthusiastic for learning new technologies and frameworks.`,
        `I use test driven approach for front end as well as back end development 
        which helps in better code quality and faster development. This makes my projects well documented and maintainable.`,
        'My front-end build process involves the use of tools such as Sass, Gulp, Bower, and NPM to speed up development.'
    ],
    skills : skills,
    portfolio_paragraph : [
        'I have developed various projects in my career which diversify from websites to B2E web applications to hybrid mobile applications.',
        'Here are some of the snapshots of my work.'
    ],
    portfolio : portfolio
};