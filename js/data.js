var currentDate = new Date();

/** Site Description **/
var logoUrl = "images/logo.png";
var navbarLogoUrl = "images/navlogo.png";
var siteTitle = "ALiAS";
var siteAbout = "Amity Linux Assistance Sapience";
var siteMotto = "";

/** FlashBox **/
var showFlashBox = 0;
var flashBoxContent = '<a href="https://www.facebook.com/events/1873570922897377/" target="_blank"><img src="images/flashbox/poster02032017.jpg"></a>';
var flashBoxEndDate = new Date(2017,02,01); //It will end at 03/03/2017 00:00 P.S. Month starts from 0
/** Intro Section **/
/** Intro Section **/
var siteAboutHistory = "<p>Started back in 2010; With main aim to foster the growth of use of Linux for the developers in the campus and to promote the culture of hacking and sharing.<\p>ALiAS is now a platform for upcoming developers for finding exposure by meeting the people working in related industries, learning various languages and becoming a better developer.";
var joinNowBtnLink = "https://goo.gl/forms/mkBRe8jA5pJlexaK2";

/** Alumni Section **/
var alumniDescription = "Alumni who were a part of ALiAS are now placed in various companies or some of them are still consulting other(s) in the open source domain.";

/** Array Definitions**/
var services = [];
var events = [];
var webinars = [];
var team = [];

/** Services List
	Do you want to stand out of crowd and learn unique skills?
	Do you want to participate in Google Summer of code?
	Do you want to be a part of hacker culture?
	Do you have fun while learning?
	Do you want  to learn trending technologies?
	Do you want learn Linux and peripheral technologies?
	Credits: Ajay Tripathi
**/

services[0] = "Stand out of crowd and learn unique skills from people already working in the industry!";
services[1] = "Be a part of Hacker Culture";
services[3] = "Learn by Fun and Collaboration";
services[4] = "Learn Linux, Android, Networking, etc. There is no limit on how much and what you can learn!";
services[6] = "Already know something? Teach it to others! That's how we work!";
services[5] = "Alias welcomes each and every student of amity irrespective of their department.";
/** End Services **/

/** Events List
	title: Event Title
	cta: Link url for Call to Action Button
	ctaText: Call to Action Button Text
	cta2: Second Link url for Call to Action Button
	cta2Text: Call to Action Button Text
	description: Event Description. Can Contain HTML Tags
	date: Event Date
	startTime: Event Start Time
	endTime: Event End Time
	location: Event Location
	eventOD: 0 for NO, 1 for YES. The text and respective classes are automatically added by the script
	events[0] = {title: "", cta: "", ctaText: "",cta2: "", cta2Text: "", description: "", date: "", startTime: "", endTime: "", location: "", eventOD: 0};
	
**/
events[0] = {title: "Study Group: Web Designing", cta: "https://docs.google.com/forms/d/e/1FAIpQLScaB0SGVp31QzY4Pg6Mcj0sr2R7JqYGgVMbnrAyivCSOKD4Dg/viewform", ctaText: "Register", cta2: "https://drive.google.com/open?id=0B-SmzjWLoGhCeFdBemVJWDREZlk", cta2Text: "Study Material", description: "Learn Web Designing {HTML, CSS, JQuery} from scratch in this on going Study Group Sessions of Web Designing  and start contributing to open source projects.", date: "On Going", startTime: "Tentative", endTime: "Tentative", location: "Announced on Group", eventOD: 0, cta2enable:0 };

/** End Events List **/

/** Webinars List  **/

webinars[0] = {title: "Webinar: Introduction to Linux", cta: "https://www.youtube.com/watch?v=CTO-8BnzS_s", ctaText: "Watch Now!", description: "This webinar would be about basics of Linux and its terminologies. We'll be covering basics of command lines/principles/every 'Must Know' things about Linux.<br/><strong>Speakers:</strong> <br/><strong>Anuvrat Parashar:<strong> <a href = \"http://anuvrat.in/\">http://anuvrat.in/</a> ", date: "3 Jan '17", startTime: "10:00 PM ", endTime: "11:00 PM ", location: "YouTube", eventOD: 0};
webinars[1] = {title: "Webinar: Introduction to Command Line Interface", cta: "https://www.youtube.com/watch?v=gmi_YM_N2L4", ctaText: "Watch Now!", description: "This webinar would be about basics of using Command Line Interface in Linux. We'll be covering basics of command lines/ principles/ every 'Must Know' things about Linux. <br/><strong>Speakers:</strong> <br/><strong>Rohit Goyal:<strong> <a href = \"https://about.me/rohitgoyal18\">about.me/rohit</a> ", date: "13 Jan '17", startTime: "10:00 PM ", endTime: "11:00 PM ", location: "YouTube", eventOD: 0};
webinars[2]= {title: "Webinar: Open Source Softwares", cta: "https://www.youtube.com/watch?v=JcYABQrAkaU", ctaText: "Watch Now!", description: "Learn the basics of Open Source and Open Source Software in this live interactive session.<br/><strong>Speakers:</strong> <br/><strong>Amit Kumar:<strong> <a href = \"http://iamit.in\">http://iamit.in</a> <br/><stong>Sanyam Khurana:</strong> <a href=\"http://www.sanyamkhurana.com\">sanyamkhurana.com</a>", date: "17 Jan '17", startTime: "10:00 PM ", endTime: "10:45 PM ", location: "YouTube", eventOD: 0};


/** Team List 
	team[0] = {name:"Test Name 1", designation: "Events Head", ppicUrl: "images/alumni/1.jpg"};
**/
team[0] = {name:"Shivam Rajput", designation: "", ppicUrl: "images/team/shivam.jpg"};
team[1] = {name:"Ashish Dahiya", designation: "", ppicUrl: "images/team/ashish.jpg"};
team[2] = {name:"Tanya Jain", designation: "", ppicUrl: "images/team/tanya.jpg"};
team[4] = {name:"Ayush Agarwal", designation: "", ppicUrl: "images/team/ayush.jpg"};
team[5] = {name:"Parth Sharma", designation: "", ppicUrl: "images/team/parth.jpg"};
team[6] = {name:"Manas Kashyap", designation:"", ppicUrl: "images/team/manas.jpg"};
team[7] = {name:"Animesh Verma", designation: "", ppicUrl: "images/team/animesh.jpg"};

/** End Team List **/

/** Containers **/
var flashBox = $(".flashbox");
var flashBoxContentContainer = $(".flashBox-content");
var flashBoxCloseBtn = $(".flashbox .closeBtn");
var coverLogoContainer = $(".coverLogo");
var navbarLogoContainer = $("#navbarLogo");
var siteMottoContainer = $(".motto");
var siteAboutContainer = $(".siteAboutContainer");
var siteAboutHistoryContainer = $(".siteAboutHistory .description");
var joinNowBtnLinkContainer = $(".joinNowBtnLink");
var siteServicesListContainer = $(".servicesList");
var eventsListContainer = $("#eventsListContainer");
var webinarsListContainer = $("#webinarsListContainer");
var alumniDescriptionContainer = $(".alumniDescription p");
var teamListContainer = $(".teamList");
/** End Containers **/

/** Load Data **/
document.title = siteTitle;			//Update Site Title
coverLogoContainer.attr("src",logoUrl);	//Update Logo on Cover page
navbarLogoContainer.attr("src",navbarLogoUrl); //Update logo on navigation

siteMottoContainer.html(siteMotto);
siteAboutContainer.html(siteAbout);	//Update Site About
siteAboutHistoryContainer.html(siteAboutHistory);
joinNowBtnLinkContainer.attr("href",joinNowBtnLink);

/** Load and enable FlashBox **/

if(showFlashBox){
	if(flashBoxEndDate.getFullYear()>=currentDate.getFullYear()){
		if(flashBoxEndDate.getMonth()>=currentDate.getMonth()){
			if(flashBoxEndDate.getDate()>=currentDate.getDate()){
				flashBoxContentContainer.html(flashBoxContent);
				flashBox.fadeIn();
			}
		}
	}
	
}
flashBoxCloseBtn.click(function(e){
	flashBox.fadeOut();
});
/** Generate Services **/
for(var x in services){
	var html = '<li class="fa"><span>'+services[x]+'</span></li>';
	siteServicesListContainer.append(html);
}
/** Generate Event Boxes **/
for (var x in events){
		var html = '<div class="col-lg-3 eventBox col-centered text-center"><div class="row eventTitle"><div class="col-lg-12 text-center"><h2>'+events[x].title+'</h2></div></div>';
		if(events[x].cta2enable){
		html += '<div class="row eventInfo"><div class="col-xs-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p style="height: 250px" class="eventDescInfoContainer">'+events[x].description+'</p></div></div></div>';
		}else{
		html += '<div class="row eventInfo"><div class="col-xs-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p style="height: 210px" class="eventDescInfoContainer">'+events[x].description+'</p></div></div></div>'};
		html += '<div class="col-xs-5 eventTiming text-left"><div class="date"><i class="fa fa-calendar"></i> <span><strong>'+events[x].date+'</strong></span></div><div class="startTimimg"><i class="fa fa-clock-o"></i> <span><strong>'+events[x].startTime+'</strong></span></div><div class="endTimimg"><i class="fa fa-clock-o"></i> <span><strong>'+events[x].endTime+'</strong></span></div><div class="eventLocation"><i class="fa fa-map-marker"></i> <span><strong>'+events[x].location+'</strong></span></div><div class="eventOD"><strong>OD</strong> <span class="';
		html += (events[x].eventOD)?"text-success":"text-danger";
		html += '">';
		html += (events[x].eventOD)?"Yes":"No";
		html += '</span></div></div></div>';
		if(events[x].cta2enable){	
		html +='<div class="row eventCTA"><div class="col-lg-12 text-center"><a href="'+events[x].cta+'" target="_blank"><button>'+events[x].ctaText+'</div></div></div>';
		}else{
			html+='<div class="row eventCTA"><div class="col-lg-12 text-center"><a href="'+events[x].cta+'" target="_blank"><button>'+events[x].ctaText+'</div></div><div class="row eventCTA"><div class="col-lg-12 text-center"><a href="'+events[x].cta2+'" target="_blank"><button>'+events[x].cta2Text+'</div></div></div>';
		}
		eventsListContainer.append(html);
}
/** Generate Webinar Boxes */
for (var x in webinars){
		var html = '<div class="col-lg-3 eventBox col-centered text-center"><div class="row eventTitle"><div class="col-lg-12 text-center"><h2>'+webinars[x].title+'</h2></div></div><div class="row eventInfo"><div class="col-xs-7 eventDesc"><div class="row eventDescInfo"><div class="col-lg-12"><p style="height: 260px" class="eventDescInfoContainer">'+webinars[x].description+'</p></div></div></div><div class="col-xs-5 eventTiming text-left"><div class="date"><i class="fa fa-calendar"></i> <span>'+webinars[x].date+'</span></div><div class="startTimimg"><i class="fa fa-clock-o"></i> <span>'+webinars[x].startTime+'</span></div><div class="endTimimg"><i class="fa fa-clock-o"></i> <span>'+webinars[x].endTime+'</span></div><div class="eventLocation"><i class="fa fa-map-marker"></i> <span>'+webinars[x].location+'</span></div><div class="eventOD"><strong>OD</strong> <span class="';
		html += (webinars[x].eventOD)?"text-success":"text-danger";
		html += '">';
		html += (webinars[x].eventOD)?"Yes":"No";
		html += '</span></div></div></div>';
		html +='<div class="row eventCTA"><div class="col-lg-12"><a href="'+webinars[x].cta+'"><button>'+webinars[x].ctaText+'</button></a></div></div></div>';
		webinarsListContainer.append(html);
}


/** Load Alumni **/
alumniDescriptionContainer.html(alumniDescription);

/** Load Team List **/
for (var x in team){
	var html = '<div class="col-lg-2 teamBox box-shadow col-centered">';
	html+='<div class="teamPhotoContainer horizon-center box-shadow"><img src="'+team[x].ppicUrl+'" alt="'+team[x].name+'" title="'+team[x].name+'"/></div>';
	html+='<div class="row"><div class="col-lg-12 text-center"><div class="teamInfoContainer">';
	html+='<strong><div class="teamName">'+team[x].name+'</div></strong>';
	html+='<div class="teamDesignation">'+team[x].designation+'</div>';
	html+='</div></div></div></div>';
	teamListContainer.append(html);
}

/** End Team List**/

/**Button Random Color**/
var colors = ['Amber','Lime','Green','Light-Blue','Blue','Purple','Red','Pink','Deep-Orange'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#contact .section-header").addClass("button-"+random_color);
$(".eventCTA button").addClass("button-"+random_color);
var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#section-color-fix2").addClass("button-"+random_color);
var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#alumni .section-header").addClass("button-"+random_color);
var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#team .section-header").addClass("button-"+random_color);
var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#joinNowBtn").addClass("button-"+random_color);
$(".teamBox").addClass("button-"+random_color);
var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#section-color-fix").addClass("button-"+random_color);
var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#button-color-fix2").addClass("button-"+random_color);
var random_color = colors[Math.floor(Math.random() * colors.length)];
$("#button-color-fix").addClass("button-"+random_color);


/** Do Not Change! Still in BETA **/
var siteThemeClassName ="blue"; //blue, green, red, yellow (Use Blue for now)
$(".theme-bg").addClass(siteThemeClassName);
$(".theme-btn-primary").addClass(siteThemeClassName);