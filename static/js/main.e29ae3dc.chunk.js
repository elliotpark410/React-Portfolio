(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(7),r=t.n(i),o=(t(13),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"Hello, I'm ",e.name,"."),l.a.createElement("h2",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme))))}}]),a}(n.Component),h=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Work"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))),l.a.createElement("div",{className:"portfolio-links"},l.a.createElement("p",{className:"github"},l.a.createElement("a",{href:"".concat(e.imgrepo),target:"_blank"},l.a.createElement("i",{className:"fa fa-3x fa-github"}))),l.a.createElement("p",{className:"deployedSite"},l.a.createElement("a",{href:"".concat(e.imglink),target:"_blank"},l.a.createElement("i",{className:"fa fa-2x fa-desktop"})))))})))))}}]),a}(n.Component),g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head contact-text"},l.a.createElement("div",{style:{width:"100%"},className:"columns"},l.a.createElement("p",{className:"lead"},"Please conact me if you have any questions or suggestions!"),l.a.createElement("a",{href:"mailto:elliotpark410@gmail.com"},l.a.createElement("i",{className:"fa fa-envelope email"})))))}}]),a}(n.Component),E=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={name:"Elliot Park",role:"Full Stack Web Developer",linkedinId:"https://www.linkedin.com/in/elliot-park/",email:"elliotpark410@gmail.com",roleDescription:"I'm a Full Stack Web Developer.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/elliot-park/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/elliotpark410/",className:"fa fa-github"}],aboutme:"My journey into coding began with the Full Stack Web Development bootcamp at the University of California, Berkeley. Despite the sleepless nights, every moment was worth it. The thrill of deploying my first app ignited a passion within me, solidifying my decision to pursue coding as a lifelong career. I thrive on learning about emerging technologies and relish the challenge of solving complex problems. With nearly two years of experience as a Full Stack Developer, I've had the opportunity to contribute to a wide range of projects, including the design of customer-facing websites and the development of RESTful API endpoints for a fintech mobile app. One of my proudest achievements has been successfully integrating the server with third-party APIs to implement essential features such as transaction confirmation, P2P transfers, and push notifications. At Jagad, where I currently work as a Node Developer, I've honed my skills in building secure and scalable API endpoints that adhere to strict security standards. I've collaborated with cross-functional teams to identify partnership requirements and develop open API features for payment gateway capability. When I'm not immersed in code, you can find me riding the waves at the beach or practicing jiu jitsu on the mats. I thrive on new challenges and am always eager to expand my horizons. Don't hesitate to reach out \u2014 I'm excited to connect and share more about my journey in tech!",address:"Irvine, California",website:"E: elliotpark410@gmail.com",education:[{UniversityName:"University of California, Berkeley",specialization:"Full Stack Web Development Bootcamp",MonthOfPassing:"Mar",YearOfPassing:"2022"},{UniversityName:"University of California, Santa Barbara",specialization:"Philosophy",MonthOfPassing:"Jun",YearOfPassing:"2016"}],work:[{CompanyName:"Jagad",specialization:"Full Stack Developer",MonthOfLeaving:"Feb",YearOfLeaving:"2024",Achievements:"\n        \u2022 Design and debug RESTful API endpoints for a fintech mobile application that meets strict security standards, ensuring the protection of sensitive user data\n        \u2022 Develop hundreds unit tests, integration tests, and end-to-end tests to verify the functionality of back-end processing, database interactions, and business logic\n        \u2022 Coordinate with other engineering teams to identify partnership requirements, create documentation, and build open API features for payment gateway capability\n        \u2022 Create interoperability for Telegram bot to interact with backend API endpoints, allowing users to redeem to bank and redeem to e-wallet.\n        \u2022 Improve customer experience by integrating server with third-party APIs like Fireblocks, DurianPay, Solana, ICP, and Slack\n        \u2022 Refactor database schema to adhere to database normalization design principles, enhancing performance\n        \u2022 Collaborate with a team of 8 developers to build diagrams and workflows for new feature specifications\n        "}],skillsDescription:"Git, Bash, HTML, CSS, React, JavaScript, Jest, TypeScript, SQL, Node, Express, Prisma, Sequelize, Mongoose, MySQL, MongoDB, Postman, Insomnia, Docker, Linux, Sentry, CI/CD",portfolio:[{name:"Code Quiz",description:"A simple code quiz that allows users to test their JavaScript knowledge.",imgurl:"images/portfolio/code-quiz.png",imgrepo:"https://github.com/elliotpark410/Code-Quiz",imglink:"https://elliotpark410.github.io/Code-Quiz/"},{name:"Tech Blog",description:"A CMS-style blog site similar to Wordpress.",imgurl:"images/portfolio/tech-blog.png",imgrepo:"https://github.com/elliotpark410/Tech-Blog",imglink:"https://ep-tech-blog.herokuapp.com/"},{name:"Team Profile Generator",description:"A command-line application that generates a team profile.",imgurl:"images/portfolio/team-profile.png",imgrepo:"https://github.com/elliotpark410/Team-Profile-Generator",imglink:"https://elliotpark410.github.io/Team-Profile-Generator/"},{name:"Text Editor",description:"A text editor app that runs in the browser and meets the Progressive Web App criteria.",imgurl:"images/portfolio/text-editor.png",imgrepo:"https://github.com/elliotpark410/Text-Editor",imglink:"https://drive.google.com/file/d/1JcmvHDmYU6WjGITv-FaK7d9HGSF34AQG/view"}]},b=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:v}),l.a.createElement(d,{resumeData:v}),l.a.createElement(h,{resumeData:v}),l.a.createElement(f,{resumeData:v}),l.a.createElement(g,{resumeData:v}),l.a.createElement(E,{resumeData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.e29ae3dc.chunk.js.map