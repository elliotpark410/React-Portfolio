(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(7),r=t.n(l),o=(t(13),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",{id:"home"},i.a.createElement("nav",{id:"nav-wrap"},i.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),i.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),i.a.createElement("ul",{id:"nav",className:"nav"},i.a.createElement("li",{className:"current"},i.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),i.a.createElement("li",null,i.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),i.a.createElement("div",{className:"row banner"},i.a.createElement("div",{className:"banner-text"},i.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),i.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},e.roleDescription),i.a.createElement("hr",null),i.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",{key:e.name},i.a.createElement("a",{href:e.url,target:"_blank"},i.a.createElement("i",{className:e.className})))})))),i.a.createElement("p",{className:"scrolldown"},i.a.createElement("a",{className:"smoothscroll",href:"#about"},i.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),d=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"three columns"},i.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("h2",null,"About Me"),i.a.createElement("p",null,e.aboutme))))}}]),a}(n.Component),h=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"resume"},i.a.createElement("div",{className:"row education"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Education"))),i.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.UniversityName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),i.a.createElement("p",null,e.Achievements)))}))),i.a.createElement("div",{className:"row work"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Work"))),i.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return i.a.createElement("div",{className:"row item"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("h3",null,e.CompanyName),i.a.createElement("p",{className:"info"},e.specialization,i.a.createElement("span",null,"\u2022")," ",i.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),i.a.createElement("p",null,e.Achievements)))}))),i.a.createElement("div",{className:"row skill"},i.a.createElement("div",{className:"three columns header-col"},i.a.createElement("h1",null,i.a.createElement("span",null,"Skills"))),i.a.createElement("div",{className:"nine columns main-col"},i.a.createElement("p",null,e.skillsDescription),i.a.createElement("div",{className:"bars"},i.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return i.a.createElement("li",null,i.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),i.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns collapsed"},i.a.createElement("h1",null,"Check Out Some of My Works."),i.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return i.a.createElement("div",{className:"columns portfolio-item"},i.a.createElement("div",{className:"item-wrap"},i.a.createElement("a",{href:"#modal-01"},i.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"portfolio-item-meta"},i.a.createElement("h5",null,e.name),i.a.createElement("p",null,e.description))))),i.a.createElement("div",{className:"portfolio-links"},i.a.createElement("p",{className:"github"},i.a.createElement("a",{href:"".concat(e.imgrepo),target:"_blank"},i.a.createElement("i",{className:"fa fa-3x fa-github"}))),i.a.createElement("p",{className:"deployedSite"},i.a.createElement("a",{href:"".concat(e.imglink),target:"_blank"},i.a.createElement("i",{className:"fa fa-2x fa-desktop"})))))})))))}}]),a}(n.Component),g=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"row section-head contact-text"},i.a.createElement("div",{style:{width:"100%"},className:"columns"},i.a.createElement("p",{className:"lead"},"Please conact me if you have any questions or suggestions!"),i.a.createElement("a",{href:"mailto:elliotpark410@gmail.com"},i.a.createElement("i",{className:"fa fa-envelope email"})))))}}]),a}(n.Component),E=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return i.a.createElement("footer",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"twelve columns"},i.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return i.a.createElement("li",null,i.a.createElement("a",{href:e.url},i.a.createElement("i",{className:e.className})))}))),i.a.createElement("div",{id:"go-top"},i.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},i.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v={name:"Elliot Park",role:"Backend Developer",linkedinId:"https://www.linkedin.com/in/elliot-park/",email:"elliotpark410@gmail.com",roleDescription:"I like building things and solving problems. Currently living in Bali, Indonesia.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/elliot-park/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/elliotpark410/",className:"fa fa-github"},{name:"twitter",url:"http://twitter.com/ElliotPark15",className:"fa fa-twitter"}],aboutme:"My journey into coding began with University of California, Berkeley's Full Stack Web Development bootcamp. There were a lot of sleepless nights, but it was worth every second. After I deployed my first app, I was hooked and I knew this is what I want to do for the rest of my life. The bootcamp taught me how to problem solve, work with a team, and learn new things every day. I am currently doing operational work for a crypto-finance company in Bali. When I am not working I use my spare time to sharpen my skills in React and JavaScript. If I am not in front of my computer you can find me surfing at the beach or doing jiu jitsu on the mats. Thanks for checking out my portfolio, and feel free to reach out if you have any questions!",address:"Bali, Indonesia",website:"E: elliotpark410@gmail.com",education:[{UniversityName:"University of California, Santa Barbara",specialization:"Philosophy",MonthOfPassing:"Jun",YearOfPassing:"2016",Achievements:"Additional Coursework: University of California, Berkeley Full Stack Web Development bootcamp"}],work:[{CompanyName:"Systematic Trading Group",specialization:"Operations Team Lead",YearOfLeaving:"Present",Achievements:"Translate strategy into actionable goals to execute cryptocurrency arbitrage within different markets in South Korea and USA. Adhere to company, federal, state, and local business requirements, enforcing compliance and taking action when necessary. Monitor performance with tracking and establish corrective measures as needed, and prepare detailed reports. Define project requirements and timeline, and organize team to meet business needs within budget. Conduct recurring check-in meetings with C-suite to analyze business strategy and deliver reports. Collaborate with other engineers to whiteboard, pseudocode, debug, and review code."},{CompanyName:"SingleStore",specialization:"Account Executive",MonthOfLeaving:"Oct",YearOfLeaving:"2021",Achievements:"Build lasting customer relationships with stakeholders by providing solutions to business challenges. Generate new business while expanding footprint into existing accounts with high outbound activity. Practice clear communication of product by thoroughly understanding technical capabilities. Create detailed usage reports to analyze usage and positively influence renewal business. Manage renewal and upsell business with quota attainment, achieved 100% renewal rate. Conduct online training sessions and best practice webinars to ensure customer success."},{CompanyName:"Walpole & Co., LLP",specialization:"Tax Consultant",MonthOfLeaving:"Jun",YearOfLeaving:"2019",Achievements:"Retrieved client data and analyzed various accounting software with the goal of improving processes. Generated custom analytics and reports to detect issues with user adoption and inventory processing. Conducted training sessions to prepare more than two hundred employees for new software adoption. Extracted client data from numerous sources and prepared financial reports for inventory accuracy. Provided tax consultation with clients in tech, manufacturing, financial, and real estate industries. Implemented SaaS software to Tier 1 global companies and provided technical support."}],skillsDescription:"HTML, CSS, JavaScript, TypeScript, React, MySQL, MongoDB, Express, Node, Jest",skills:[{skillname:"Express"},{skillname:"MySQL"},{skillname:"TypeScript"},{skillname:"Jest"}],portfolio:[{name:"Code Quiz",description:"A simple code quiz that allows users to test their JavaScript knowledge.",imgurl:"images/portfolio/code-quiz.png",imgrepo:"https://github.com/elliotpark410/Code-Quiz",imglink:"https://elliotpark410.github.io/Code-Quiz/"},{name:"Tech Blog",description:"A CMS-style blog site similar to Wordpress.",imgurl:"images/portfolio/tech-blog.png",imgrepo:"https://github.com/elliotpark410/Tech-Blog",imglink:"https://desolate-atoll-11549.herokuapp.com/"},{name:"Team Profile Generator",description:"A command-line application that generates a team profile.",imgurl:"images/portfolio/team-profile.png",imgrepo:"https://github.com/elliotpark410/Team-Profile-Generator",imglink:"https://elliotpark410.github.io/Team-Profile-Generator/"},{name:"Text Editor",description:"A text editor app that runs in the browser and meets the Progressive Web App criteria.",imgurl:"images/portfolio/text-editor.png",imgrepo:"https://github.com/elliotpark410/Text-Editor",imglink:"https://pure-chamber-15361.herokuapp.com/"}]},b=function(e){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,{resumeData:v}),i.a.createElement(d,{resumeData:v}),i.a.createElement(h,{resumeData:v}),i.a.createElement(f,{resumeData:v}),i.a.createElement(g,{resumeData:v}),i.a.createElement(E,{resumeData:v}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.53650e03.chunk.js.map