const data = [
    {
        id: 1,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_competitive.png",
        name:"Competitive Programming",
        para:"Competitive Programming questions solved by top rated coders"
    },
    {
        id: 2,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_interview.png",
        name:"Interview Preparation",
        para:"Commonly asked coding interview questions solved step by ste"
    },
    {
        id: 3,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_ds.png",
        name:"Data Structures and Algorithms",
        para:"Basic concepts of Data Structures and Algo and Ds/Algo problems solved"
    },
    {
        id: 4,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_aptitude.png",
        name:"Aptitude",
        para:"Practice Aptitude questions, commonly asked Puzzles"
        
    },
    {
        id: 5,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_cpp.png",
        name:"C++ Programming",
        para:"Deep dive into the fundamentals of C++ programming"
    },
    {
        id: 6,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/categories-image/category_os.png",
        name:"Operating System",
        para:"In depth concepts of Operating System explained in a easy way"
    },

    // *********
    
    //////mock test data

    // ********

    {
        id: 7,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504995662-Aptitude%20Based%20Test%203%20icon.svg",
        name:"Aptitude placement 2022 - Mock test 3",
        date:"Sep 24",
        dateheading:"Date",
        participants:"1101",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 8,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663504948572-Service%20Based%20Test%203%20icon.svg",
        name:"Service-Based Companies 2022 - Mock test 3",
        date:"Sep 22",
        dateheading:"Date",
        participants:"1015",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 9,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573432125-Product%20Based%20Test%203%20icon.svg",
        name:"Product-Based Companies 2022 - Mock test 3",
        date:"Sep 19",
        dateheading:"Date",
        participants:"2142",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 10,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573579324-Aptitude%20Based%20Test%202%20icon.svg",
        name:"Aptitude placement 2022 - Mock test 2",
        date:"Sep 13",
        dateheading:"Date",
        participants:"2410",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 11,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573537587-Service%20Based%20Test%202%20icon.svg",
        name:"Service-Based Companies 2022 - Mock test 2",
        date:"Sep 10",
        dateheading:"Date",
        participants:"2665",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 12,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573498423-Product%20Based%20Test%202%20icon.svg",
        name:"Product-Based Companies 2022 - Mock test 2",
        date:"Sep 8",
        dateheading:"Date",
        participants:"2440",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 13,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573764163-Aptitude%20Based%20Test%201%20icon.svg",
        name:"Aptitude placement 2022 - Mock test 1",
        date:"Aug 12",
        dateheading:"Date",
        participants:"2037",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 14,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573641368-Product%20Based%20Test%201%20icon.svg",
        name:"Product-Based Companies 2022 - Mock test 1",
        date:"Aug 10",
        dateheading:"Date",
        participants:"1930",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 15,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1663573695778-Service%20Based%20Test%201%20icon.svg",
        name:"Service-Based Companies 2022 - Mock test 1",
        date:"Aug 8",
        dateheading:"Date",
        participants:"2034",
        participantsheading:"Participants",
        duration:"60 min",
        durationheading:"Duration"
    },
    {
        id: 16,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407560177-Service%20based%20icons_Service_based_T5.svg",
        name:"Service-Based Companies 2021 - Mock Series 2021 - Test 5",
        date:"Sep 24",
        dateheading:"Date",
        participants:"1101",
        participantsheading:"Participants",
        duration:"120 min",
        durationheading:"Duration"
    },
    {
        id: 17,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407518822-Service%20based%20icons_Service_based_T4.svg",
        name:"Service-Based Companies 2021 - Mock Series 2021 - Test 4",
        date:"Jul 31",
        dateheading:"Date",
        participants:"1794",
        participantsheading:"Participants",
        duration:"120 min",
        durationheading:"Duration"
    },
    {
        id: 18,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1626407475370-Service%20based%20icons_Service_based_T3.svg",
        name:"Service-Based Companies 2021 - Mock Series 2021 - Test 3",
        date:"Jul 27",
        dateheading:"Date",
        participants:"1719",
        participantsheading:"Participants",
        duration:"120 min",
        durationheading:"Duration"
    },
    {
        id: 19,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624132865618-aptitude.svg",
        name:"Aptitude"
    },
    {
        id: 20,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/IPv4.svg",
        name:"Computer Network"
    },
    {
        id: 21,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816734176-anomalies-and-functional-dependency.svg",
        name:"Database Management System"
    },
    {
        id: 22,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623765556116-backtracking.svg",
        name:"Algorithms"
    },
    {
        id: 23,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623815849291-arrays-and-pointers.svg",
        name:"C Language"
    },
    {
        id: 24,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623817215289-atomic-transactions.svg",
        name:"Operating System"
    },
    {
        id: 25,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816336071-abstraction.svg",
        name:"C++ Language"
    },
    {
        id: 26,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/topic/array.svg",
        name:"Data Structure"
    },
    {
        id: 27,
        image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1623816917473-access-modifiers-this-super.svg",
        name:"Java Language"
    },
    {
        id: 28,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/ibm.svg"
    },
    {
        id: 29,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/hcl.svg"
    },
    {
        id: 30,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/zenser.svg"
    },
    {
        id: 31,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/accenture.svg"
    },
    {
        id: 32,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/techmahindra.svg"
    },
    {
        id: 33,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/sap.svg"
    },
    {
        id: 34,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/samsung.svg"
    },
    {
        id: 35,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/hsbc.svg"
    },
    {
        id: 36,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/adobe.svg"
    },
    {
        id: 37,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/honeywell.svg"
    },

    // 
    // Master Compo data
    // 
    // 
   
    {
        id: 38,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp",
        name:"Mamta",
        post:"Co-Founder, Prepbytes",
        company:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp"
    },
    {
        id: 39,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp",
        name:"kushdeep",
        post:"SDE, ShareChat",
        company:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp"
    },
    {
        id: 40,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp",
        name:"Aveek",
        post:"Mentor, Prepbytes",
        company:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp"
    },
    {
        id: 41,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp",
        title:"Personalised Program",
        text:"Master your skills from where you are, with India's only personalised program"
    },
    {
        id: 42,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Expert+Mentors.webp",
        title:"Expert Mentors",
        text:"Get career guidance, mentorship, time management strategies from industry experts"
    },
    {
        id: 43,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Quick+Doubt+Support.webp",
        title:"Quick Doubt Support",
        text:"Get your doubts cleared by coding experts and have a smooth learning"
    },
    {
        id: 44,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Get+certificate-01.webp",
        title:"Get Certified",
        text:"Get recognized on course completion with highly reputed PrepBytes certificates"
    },
    {
        id: 45,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_250+Coding+Questions.webp",
        title:"250+ Coading Questions",
        text:"Best way to master a language is by coding in the language"
    },
    {
        id: 46,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_20+Live+Coding+Sessions.webp",
        title:"20+ Live Coding Sessions",
        text:"Code live and get mentorship with the top-rated coders of the country."
    },
    {
        id:47,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Hours+of+Videos.webp",
        title:"20+ Live Coding Sessions",
        text:"Recorded video lectures by experts to help you understand the concepts easily"
    },
    {
        id: 48,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Tech-Apti+MCQ+Tests.webp",
        title:"40+ Coding quizes",
        text:"Small quizzes after every topic to give you a quick check on your understandings"
    },
    {
        id: 49,
        imagetwo:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_prepare_for_campus.webp",
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/prepare_for_campus.webp",
        name:"FULL STACK PROGRAM"
    },
    {
        id: 50,
        imagetwo:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_master_competetive.webp",
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp",
        name:"MASTER COMPETITIVE PROGRAMMING"
    },
    {
        id: 51,
        imagetwo:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/bg_learn_full_mern.webp",
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/learn_full_stack.webp",
        name:"BUILD DEVELOPMENT PROJECTS"
    },
    {
        id: 52,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/100k_coding.svg",
        name:"100K",
        text:"Coding Community"
    },
    {
        id: 53,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/1000%2B_hours_pf.svg",
        name:"1000+",
        text:"Hours of Live session"
    },
    {
        id: 54,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/10000_hours_learning.svg",
        name:"10000+",
        text:"Hours of learning"
    },
    {
        id: 55,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/doubts_solved.svg",
        name:"700K+",
        text:"Doubts Solved"
    },

    {
        id: 56,
        repolink:"https://github.com/rohit-yadav-4099/project_1",
        hostlink:"https://rohit-yadav-4099.github.io/project_1/",
        about:"It is a pure HTML page. This assignment is to make sure that you understand the basic html tags like Heading, Paragraphs, Lists, Tables, Dic, etc. and their usage."
    },
    {
        id: 57,
        repolink:"https://github.com/rohit-yadav-4099/project_2",
        hostlink:"https://rohit-yadav-4099.github.io/project_2/",
        about:"This project contains the capabilties of HTML, CSS. During the development of this project you will understand that how do you connect the HTML pages with CSS files and style the pages, you will be developing styled static application containing HTML files and CSS files. And understand the difference between Internal CSS, External CSS and Inline CSS and CSS properties like margin, display, box property, padding etc."
    },
    {
        id: 58,
        repolink:"https://github.com/rohit-yadav-4099/projectCSS2",
        hostlink:"https://rohit-yadav-4099.github.io/projectCSS2/",
        about:"TIn this project you will be developing the application in a way that same website can work on multiple devices having different screen sizes in pixels. To acheive this you will be using Media Queries, one of the finest concept in CSS to build responsive applications."
    },
    {
        id: 59,
        repolink:"https://github.com/rohit-yadav-4099/JSproject-1",
        hostlink:"https://rohit-yadav-4099.github.io/JSproject-1/",
        about:"While developing this project, you will get to work on multiple HTML tags, and various CSS properties. Most importantly you will get introduced with the functions required for DOM manipulation. Also how to add dynamic HTML using JS and Date function of JS."
    },
    {
        id: 60,
        repolink:"https://github.com/rohit-yadav-4099/To-do-app",
        hostlink:"https://rohit-yadav-4099.github.io/To-do-app/",
        about:"This project contains the capabilties of JS. During the development of this project you will understand that how do you connect the HTML pages with functionality written in JS files, you will be using multiple DOM functions which will make your static application as Dynamic application where you can do multiple operations on user input and change the look and view of page based on user input, also known as adding Dynamic HTML in the website based on user's input."
    },
    {
        id: 61,
        repolink:"https://github.com/rohit-yadav-4099/react-Project",
        hostlink:"https://react-project-five-omega.vercel.app/",
        about:"This assessment includes capabilities React.JS and React Router mainly. While developing this project you will understand that how you can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables. You will also be creating different components like Class Components and Functional Components, and can use Hooks, which is the newest concept of React16. And also you will get comfortable in developing single page application using Browser Router."
    },
    {
        id: 62,
        repolink:"https://github.com/rohit-yadav-4099/react_front-end / https://github.com/rohit-yadav-4099/react_blogApi",
        hostlink:"https://react-front-end-psi.vercel.app/",
        about:"This project mainly revolves around technologies like Node.JS and Express. During its development you will understand that how to create a server and then how to expose the APIs having data using express server. And also they will understand how to create the structure of data and maintain the data."
    },
    {
        id: 63,
        repolink:"https://github.com/rohit-yadav-4099/ecomfront,https://github.com/rohit-yadav-4099/ecommercebackend",
        hostlink:"https://ecommerce-mu-hazel-81.vercel.app/",
        about:"This assessment includes capabilities React.JS and React Router mainly. While developing this project you will understand that how you can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables. You will also be creating different components like Class Components and Functional Components, and can use Hooks, which is the newest concept of React16. And also you will get comfortable in developing single page application using Browser Router. You will also be developing this application using Redux library, so you will be working on concepts like setting up Redux in React Project following three principles of redux i.e. State, Action and Reducer. Also how to connect and have the communication between the React Components and Redux. You will also be developing Login functionality in this project, which includes the Registration Concept and Login Concept. You will be using JWT tokens to acheive this functionality."
    },
    {
        id: 64,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp",
        text:"Apply, fill the form & wait till we review your application. You will be selected based on the eligibility criteria (2023, 2022 & 2021 passouts)"
    },
    {
        id: 65,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp",
        text:"Go through the free classes and learn the important concepts while understanding how the program unfolds."
    },
    {
        id: 66,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp",
        text:"Embark on your journey of success once you receive the offer letter for successful enrolment."
    },
    {
        id: 67,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/4%2BMonths%2BPrograms.webp",
        text:"You have now signed up for a learning-filled journey of 7 months that ends with you being placed in your dream company."
    },
    {
        id: 68,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp",
        text:"The program comes with interview opportunities and a placement guarantee of minimum 5 LPA."
    },
    {
        id: 69,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Live+Learning.webp",
        name:"Live Learning",
        text:"Master Mern Stack in Live Classes taken by Experts"
    },
    {
        id: 70,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/1+week+of+Free+Classes.webp",
        name:"Learn with Industry Experts",
        text:"Learn with leading tech mentors and gain access to real-time web development experience."
    },
    {
        id: 71,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Learn+by+Doing.webp",
        name:"Learn by Doing",
        text:"Gain in depth experience by building real world projects"
    },
    {
        id: 72,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Resume+Building.webp",
        name:"Resume Building",
        text:"Get a resume that companies would shortlist"
    },
    {
        id: 73,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Mock+Interviews.webp",
        name:"Mock Interviews",
        text:"Interview practice with industry veterans with real-time feedbacks"
    },
    {
        id: 74,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview+Opportunities.webp",
        name:"Interview Opportunities",
        text:"Get developer interview opportunities after course completion"
    },
    {
        id: 75,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp",
        text:"Upcoming Elevation Academy Batch - Full Stack Web Development Career - May 2023 now OPEN"
    },
    {
        id: 76,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/chelsea_Juspay-1.webp",
        name:"Chelsea",
        company:"Juspay",
        text:"Prepbytes really helped me start my prep from basic. The teachers are really helpful and were always available to clear my doubts. Thats the reason I was able to crack the interview and land an internship."
    },
    {
        id: 77,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/SusovanGhosh.webp",
        name:"Susovan Ghosh",
        company:"StepSetGo",
        text:"It's absolutely awesome guys. Go for it without a second thought and you won't regret it!"
        
    },
    {
        id: 78,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/akash_bisht.webp",
        name:"Akash Bisht",
        company:"AccelQ",
        text:"Thank you prepbytes for providing wonderful opportunity during Covid time. Its constant mentorship support program helped me to enhance my coding skills and also to get a job at a reputed company. Thanks a lot."
    },
    {
        id: 79,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Paytm_Logo.webp"
    },
    {
        id: 80,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/info_edge_Logo.svg"
    },
    {
        id: 81,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/SAP_Logo.svg"
    },
    {
        id: 82,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intuit_Logo.svg"
    },
    {
        id: 83,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Microsoft_Logo.svg"
    },
    {
        id: 84,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Thoughtfocus_Logo.svg"
    },
    {
        id: 85,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/99_Games_Logo.svg"
    },
    {
        id: 86,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Samsung_Logo.svg"
    },
    {
        id: 87,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Amazon_Logo.svg"
    },
    {
        id: 88,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Buy_Hatke_logo.svg"
    },
    {
        id: 89,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intel_logo.svg"
    },
    {
        id: 90,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Teksystems_logo.svg"
    },
    {
        id: 91,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/mamta_ma'am(Mentor).webp",
        name:"Mamta Kumari",
        text:"Ex Amazon, Samsung - Cofounder PrepBytes",
        para:"Mamta has 4.5 years of experience as a Software Developer. She has great passion towards coding and motivates students to pursue coding.Her mission is to use her knowledge and expertise to help students get placed in their dream company.",
        company:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/amazon.webp"
    },
    {
        id: 92,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Kunal.webp",
        name:"Kunal Dwivedi",
        text:"Software Developer, Amazon",
        para:"Kunal has switched from Samsung to Amazon recently and likes to spend time teaching students who are walking down the same road. He love competitive programming and have secured under 100 rank in various coding challenges and 287 rank in Google Kickstart.",
        company:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/amazon.webp"
    },
    {
        id: 93,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/mentor_harshita.webp",
        name:"Harshita Sharma",
        text:"Product Engineer, AskSid.ai",
        para:"Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. She has 3+ years of MERN Stack Exp. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.",
        company:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/ask_sid.png"
    },
    {
        id: 94,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/faculity-icon.svg",
        name:"100K+",
        text:"Student Coding Community"
    },
    {
        id: 95,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/college-icon.svg",
        name:"800+",
        text:"Colleges"
    },
    {
        id: 96,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/student-icon.svg",
        name:"100+",
        text:"Student placed"
    }
    
    
  ]
  
  module.exports = data;