let skills = {
    'Front-End Web development' : [
        `<span>Javascript development with hands on experience of frameworks like <strong>Angular JS</strong> and 
         <strong>Bootstrap JS</strong>.</span>`,
        `<span>Used <strong>VUE js</strong> in this porfolio website and using the same in my next venture.</span>`,
        '<span>Can efficiently work with <strong>jQuery</strong> to create a quick working widgets.</span>',
        `<span>Nevertheless <strong>HTML5</strong> and <strong>CSS3</strong> and in love with 
        <strong>Sass</strong> for better management of styles.</span>`,
        '<span>Full integration of front-end development using <strong>Gulp</strong>.</span>',
        '<span><strong>Jasmine</strong> and <strong>Karma</strong> are the best friends for setting up unit tests.</span>',
        '<span>For e2e testing, I started with <strong>Protractor</strong> in Angular JS and now I use the same for non-angular applications too.</span>',
        `<span>I have hands-on of mobile application development using <strong>Apache Cordova</strong> for a quick application 
        creation across multiple platforms.</span>`,
        `<span>Getting good at <strong>photoshop</strong> for designing skills.</span>`
    ],
    'Back-End Web development' : [
        `<span>I have good experience in <strong>Laravel PHP</strong> and <strong>Eloquent</strong> to create the RESTful 
        API servers and use <strong>Blades</strong> for views based simple websites.</span>`,
        `<span>Sometimes, for simple applications, I use <strong>NodeJS</strong> to 
        create the server, such as this Portfolio website.</span>`,
        `<span>In few of the applications, I have used <strong>Enterprise Java</strong> with <strong>Spring Hibernate</strong> 
        frameworks on Tomcat server.</span>`
    ]
};


let portfolio = {
    'Energy Aspects': {
        title: 'Senior web developer',
        period: 'Nov 2015 - present',
        about : [
            `Energy Aspects is a data centric company in energy market that provides reports and analysis on 
            Crude oil, natural gas, emissions and LPG/NGL. I am currently responsible for development, enhancements
            and maintenance of company's internal applications, website, CMS and publishing systems.`,
            `Here are some of my projects at Energy Aspects - `
        ],
        projects: [
            {
                id : 'energy-aspects',
                target : '#energy-aspects',
                title : 'Energy Aspects website',
                link : 'https://www.energyaspects.com',
                about : [
                    `Energy Aspects publishes reports and provides data services 
                    on Crude oil, Natural gas, emissions and LPG/NGL market. 
                    All the reports are present and maintained on the website for clients access.`,
                    `While working on modernization of legacy website, I introduced comprehensive inline editing on the
            website for easier and faster content management.`

                ],
                tech: ['HTML5', 'CSS3', 'Javascript', 'Jquery','Gulp', 'Jasmine', 'Karma','Laravel PHP','Blade', 'Eloquent' ],
                mini_image : '/images/portfolio/energy_aspects_front_page.png',
                images :[
                    '/images/portfolio/energy_aspects.png',
                    '/images/portfolio/ea_mobile_1.png',
                    '/images/portfolio/ea_mobile_2.png'
                ]
            },
            {
                id : 'publishing',
                target : '#publishing',
                title : 'Publishing application',
                about : [
                    `As Energy Aspects' main business is to publish the reports. So publishing application is an essential and
                    most important application for the business.`,
                    `Publishing application makes use of tinyMCE editor for generating rich content required for website
                    and the e-mail. It allows analysts to create the publication and send out an e-mail in one step.`,
                    `There is a facility to switch between the website and e-mail views.`
                ],
                mini_image : '/images/portfolio/publisher.png',
                tech: ['Angular JS','tinyMCE','Gulp', 'Jasmine', 'Karma', 'Protractor', 'Laravel PHP'],
                images :['/images/portfolio/publisher.png']
            },
            {
                id : 'ea-events',
                target : '#ea-events',
                title : 'Event application',
                about : [
                    `There was a requirement to track the various events and meetings that we hold with our 
                    clients around the world. This was earlier done through Outlook calendars.`,
                    `But the need was to have a system in place, so everyone in the company could access, to see the details on which 
                    of our clients were being invited, and their rsvp status.`,
                    `This would also help us understand which of our users to invite to future events, 
                    by using data on our last engagement with them.`
                ],
                mini_image : '/images/portfolio/Events.png',
                tech: ['HTML5', 'CSS3','Angular JS','Gulp', 'Jasmine', 'Karma', 'Protractor', 'Laravel PHP'],
                images :['/images/portfolio/Events.png']
            },
            {
                id : 'ea-ptw',
                target : '#ea-ptw',
                title : 'Published this week summary e-mail application',
                about : [`As we publish many reports and e-mail alerts each week, we needed a way to 
                send a summary e-mail to the clients every Friday.`,
                `So an application was required to create this e-mail automatically which would pull in the publications
                in that week. And arrange them in a defined manner and send out the e-mail on a given time.`,
                    `It was essential to have a user interface so that anyone can make changes in the reports order 
                    or edit the text if required. Also to add an introductory text for the upcoming events etc.`,
                    `Litmus was used to test the generated e-mail on all the e-mail clients.`
                ],
                mini_image : '/images/portfolio/e-mail-design.png',
                tech: ['HTML5', 'CSS3','Jquery', 'Bootstrap', 'Litmus','Gulp', 'Jasmine', 'Karma', 'Laravel PHP', 'Blade', 'Eloquent'],
                images :['/images/portfolio/e-mail-design.png']
            },
            {
                id : 'disk-browser',
                title : 'Disk browser / File Manager',
                target : '#disk-browser',
                about : [
                    `Disk browser helps in managing files and directories on a disk. This has been created as an open source
                    package.`,
                    `Disk can be a folder maintained on the server or AWS disk or any other shared disks which can be 
                    connected through some APIs.`,
                    `Client plugin is written using Javascript and browserify. Server plugin is available for Node and
                    Laravel PHP.`
                ],
                mini_image : '/images/portfolio/disk-browser.png',
                link : 'https://github.com/ershwetabansal/disk-browser',
                tech : ['HTML5', 'CSS3', 'Bootstrap', 'Javascript', 'Browserify', 'Node JS', 'EXPRESS JS', 'LARAVEL PHP'],
                images : ['/images/portfolio/disk-browser.png']

            }
        ]
    },
    'L&T Infotech': {
        title: 'Project lead',
        period: 'Oct 2009 - Aug 2015',
        about : [
            `I had started my career at L&T Infotech in 2009 and worked there for 6 years with different
            clients and in different domains. Here are the different applications that I worked upon -`
        ],
        projects: [
            {
                id : 'dubal',
                target : '#dubal',
                title : 'Web application for Dubal Aluminum',
                about : [
                    `Dubal is a Dubai based Aluminum production company. They had a requirement to develop a tablet
                    based application for their plant workers which would help them with their routine operations.
                    This is quite an interesting application in the way that the backend is supposed to communicate with
                    Aluminum potline controllers using TCP connections to collect the plant readings such as Amperage,
                    voltage etc.`,
                    `I had visited the plant to collect the requirement and developed a solution along with the user interface
                    design with the help of another UI designer.`,
                    `Then I led the team of 4 to develop the application in all phases of SDLC.`
                ],
                mini_image : '/images/portfolio/dubal_1.png',
                link : '',
                tech: ['HTML5', 'CSS3','Angular JS', 'JAVA', 'Spring', 'Hibernate'],
                images : ['/images/portfolio/dubal_1.png', '/images/portfolio/dubal_2.png', '/images/portfolio/dubal_3.png']
            },
            {
                id : 'yum',
                target :'#yum',
                title : 'Employee appraisal mobile application for Yum foods',
                about : [
                    `Yum foods is an American fast food company. They had given us a requirement to develop a B2E
                    HR talent application for mobile devices.`,
                    `The requirement was to provide an application to the appraisers in the company so they can log
                    appraisal for their subordinates. The application is supposed to work even if the user is offline
                    and data should get synced as soon as the user comes online.`
                ],
                mini_image : '/images/portfolio/hr_talent.png',
                link : '',
                tech: ['HTML5', 'CSS', 'Jquery', 'Spring', 'Hibernate', 'JAVA'],
                images : []
            },
            {
                id : 'smart-miles',
                target : '#smart-miles',
                title : 'Mobility Enterprise Application Platform - SmartMiles',
                about : [
                    `Smart Miles™ is a MEAP (Mobility Enterprise Application Platform) solution, specifically designed 
                    to help enterprises carry out business over mobile devices and tablets while considering aspects 
                    of information security and access rights for multiple devices and users. For different enterprise 
                    needs, applications are created which can be deployed on Smart Miles platform.`,
                    `Smart Miles is a combination of client side package to be installed on different devices, an administrator
                    application, a server side for application versioning and an IDE (Eclipse IDE extension) for developing
                     Smart Miles applications.`
                ],
                mini_image : '/images/portfolio/SmartMilesAdminLog.png',
                tech : [],
                images :['/images/portfolio/SmartMilesAdmin.png',
                    '/images/portfolio/SmartMilesAdminLog.png',
                    '/images/portfolio/SmartMilesIDE.png'
                ]
            },
            {
                id : 'travelers',
                target : '#travelers',
                title : 'Policy issuance website for Travelers',
                about : [
                    `Travelers is a United states based insurance company. I was working in Travelers as a vendor from
                    L&T Infotech.`,
                    'I was working in the personal insurance side of the business and had been working on the enhancements' +
                    'for their website and some of the internal applications.'
                ],
                tech: ['HTML5', 'CSS3', 'Javascript', 'JQUERY'],
                images : []
            }
        ]
    },
    'Tata consultancy services': {
        title: 'Software developer',
        period: 'Sep 2007 - Oct 2009',
        projects : [
            {
                id : 'merril-lynch',
                target : '#merril-lynch',
                title : 'Mainframe developer at Merrill Lynch',
                about : [
                    `Merrill Lynch, now merged into Bank of America, was an independent investment bank. Now, Merrill Lynch is
                     wealth management division of BOA. I was part of a team working
                    in the account opening applications for Merrill Lynch from TCS, Mumbai.`,
                    `I was involved in enhancements and development of various Batch and Online applications.
                    I worked as a consultant for the different teams to improve the performance of COBOL - DB2 applications.`,

                ],
                tech : [],
                images : []
            }
        ],
        responsibilities: {
            'developer': [
                'Worked on mainframe technologies.',
                'Enhanced and developed various Batch and Online applications for Investment banking client.',
                'Worked as a consultant for the different teams to improve the performance of COBOL - DB2 applications.',
                'Developed various REXX based tools to speed up the daily activities and automate the manual processes.'
            ]
        }
    }
};

export default {
    name : 'Shweta Bansal',
    title : 'Full-stack developer',
    profile_image : '/images/shweta_profile.jpg',
    headers : {
        'My skills' : '/about',
        'Portfolio' : '/portfolio',
        'Contact' : '/contact'
    },
    intro: [
        'HTML', 'CSS', 'Javascript', 'Design', 'Web performance', 'Laravel PHP', 'Node JS/Express JS'
    ],
    about: [
        `I am a full stack developer with wide experience in front end and back end technologies.`,
        `I am looking forward to developing and exercising years of knowledge on challenging projects and applications. 
         I have a problem solving approach and appreciates clean and readable code. 
         I am always enthusiastic for learning new technologies and frameworks. I strongly vouch for test driven development.`
    ],
    skills : skills,
    portfolio_paragraph : [
        'I have developed various projects in my career which diversify from websites to B2E web applications to hybrid mobile applications.',
        'Here are some of the snapshots of my work.'
    ],
    portfolio : portfolio,
    contacts :[
        {
            text : 'E-mail',
            link : 'mailto:ershwetabansal@gmail.com',
            class : 'fa-envelope-o',
            linkText : 'ershwetabansal@gmail.com'
        },
        {
            text : 'Twitter',
            link : 'https://twitter.com/shweta_bansal',
            class : 'fa-twitter',
            linkText : 'shweta_bansal'
        },
        {
            text : 'Github',
            link : 'https://github.com/ershwetabansal',
            class : 'fa-github',
            linkText : 'ershwetbansal'
        },
        {
            text : 'Linkedin',
            link : 'https://www.linkedin.com/in/shweta-bansal-26a91216',
            class : 'fa-linkedin-square',
            linkText : 'shweta-bansal-26a91216'
        }
    ]
};