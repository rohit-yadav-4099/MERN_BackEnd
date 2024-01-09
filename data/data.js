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
        copany:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp"
    },
    {
        id: 39,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp",
        name:"kushdeep",
        post:"SDE, ShareChat",
        copany:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp"
    },
    {
        id: 40,
        image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp",
        name:"Aveek",
        post:"Mentor, Prepbytes",
        copany:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp"
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
    
  ]
  
  module.exports = data;