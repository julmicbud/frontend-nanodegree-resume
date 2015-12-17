/*
This is empty on purpose! Your code to build the resume will go here.
 */
//Bio Information
var bio = {
	"name" : "Julia Hendrickson",
	"role" : "  Graphic Designer and Web Developer",
	"contacts" : {
		"mobile" : "555-555-5555",
		"email" : "julmicbud@gmail.com",
		"twitter": "@julmicbud",
		"github": "julmicbud",
	},
	"website": "www.julmicbud.com",
	"photo" : "https://a3-images.myspacecdn.com/images03/20/b6d8a8f46c644ca99a4dfc662a8109f8/300x300.jpg",
	"welcomeMessage" : "Hello and welcome to my resume. Feel free to look around and let me know if you have any questions.",
	"skills" :["HTML5", "CSS","Javascript","JQuery","Photoshop","Illustrator","Indesign"],
	};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic =	HTMLbioPic.replace("%data%", bio.photo);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic + formattedWelcomeMessage);	
	
	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart); 
	};
	
	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};
	
	var formattedMobile =	HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter =	HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace ("%data%", bio.contacts.github);
	$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub);
	$("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub);

	
};

//work

var work ={
	"jobs":[
	{
		"employer": "Sibcy Cline Realtors",
		"title": "Photography Coordinator",
		"location": "Cincinnati, OH",
		"dates": "2006 - Present",
		"description": " - Routing and scheduling 50-60 photography appointments daily</br>- Managing seven full-time photographers daily activities </br>- Editing photos using Photoshop</br>- Working directly with agents to meet their photo marketing needs</br>- Photographing listings and working with home owners to maximize their homes potential"
	},
	{
		"title": "Marketing Representative",
		"description": " - Created direct mail pieces for agents</br> - Work directly with agents in creating design pieces and setting up a marketing plan</br> - Work with builders in creating marketing pieces</br> - Produce and submit ads in multiple publications"
	},
	{
		"title": "Marketing Assistant",
		"description": " - Assisted marketing representatives with agent projects	</br> - Designed postcards and other print piece for builders - Create builder presentation interactive media - Produce pieces all the way through the print process - Assist in producing and submitting ads in multiple publications - Created portions of the listing magazine"
	},
	{
		"employer": "Bethesda School of Nursting inc., Alumni Association",
		"title": "Freelance Web Design",
		"location": "Cincinnati, OH",
		"dates": "2007-2008",
		"description": "- Updated design and structure of website</br>- Maintain and update website monthly",
	}
	]};

work.display = function() {
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);	
		
		$("#workExperience").append(HTMLworkStart); 
		$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle).append(formattedWorkDates).append(formattedWorkLocation).append(formattedWorkDescription + "</br>" + "</br>");
		
	var formattedWorkTitle = HTMLworkTitle.replace(" - %data%", work.jobs[1].title);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[1].description);	
		
		$(".work-entry").append(formattedWorkTitle);
		$(".work-entry").append(formattedWorkDescription + "</br>");

	var formattedWorkTitle = HTMLworkTitle.replace(" - %data%", work.jobs[2].title);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[2].description);	
		
		$(".work-entry").append(formattedWorkTitle);
		$(".work-entry").append(formattedWorkDescription + "</br>");

	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[3].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[3].title);
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[3].dates);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[3].location);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[3].description);	
		
		$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle).append(formattedWorkDates).append(formattedWorkLocation).append(formattedWorkDescription + "</br>" + "</br>");
};

//projects

var projects ={
	"pro":[{
		"title": "Wedding Invitation",
		"dates": 2011,
		"description": "A wedding invitation I created by only being told the wedding colors and the wedding was going to be very eclectic. They ended up loving this design.",
		"images": "images/Lyndsayinvite350x225.jpg"
		},
	{
		"title": "Postcard",
		"dates": 2012,
		"description":"A postcard created as a promotional piece for an art fair.",
		"images": "images/Summerfair2-350x225.jpg"
	},
	{
		"title": "Baby Shower invitation",
		"dates": 2014,
		"description":"An invitation created for a baby shower",
		"images": "images/babyShowerbutton350x225.jpg"
	}
	]
};

projects.display = function() {
	var formattedProjectTitle = 
		HTMLprojectTitle.replace("%data%", projects.pro[0].title);
		
	var formattedProjectDates = 
		HTMLprojectDates.replace("%data%", projects.pro[0].dates);
	
	var formattedProjectDescription = 
		HTMLprojectDescription.replace("%data%", projects.pro[0].description);
		
	var formattedProjectImage = 
		HTMLprojectImage.replace("%data%", projects.pro[0].images);
	
	$("#projects").append(HTMLprojectStart);
	$(".project-entry").append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDescription).append(formattedProjectImage + "</br>");

	var formattedProjectTitle = 
		HTMLprojectTitle.replace("%data%", projects.pro[1].title);
		
	var formattedProjectDates = 
		HTMLprojectDates.replace("%data%", projects.pro[1].dates);
	
	var formattedProjectDescription = 
		HTMLprojectDescription.replace("%data%", projects.pro[1].description);
		
	var formattedProjectImage = 
		HTMLprojectImage.replace("%data%", projects.pro[1].images);
	
	$(".project-entry").append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDescription).append(formattedProjectImage + "</br>");

	var formattedProjectTitle = 
		HTMLprojectTitle.replace("%data%", projects.pro[2].title);
		
	var formattedProjectDates = 
		HTMLprojectDates.replace("%data%", projects.pro[2].dates);
	
	var formattedProjectDescription = 
		HTMLprojectDescription.replace("%data%", projects.pro[2].description);
		
	var formattedProjectImage = 
		HTMLprojectImage.replace("%data%", projects.pro[2].images);
	
	$(".project-entry").append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDescription).append(formattedProjectImage + "</br>");
};


//Education

var education ={
	"schools":[
	{
		"name": "University of Evansville",
		"city": "Evansville, IN",
		"degree": "BS",
		"major": "Visual Communications", 
		"minor": "Mass Communications",
		"dates": 2006
		},
	{
		"name": "University of Cincinnati",
		"city": "Cincinnati, OH",
		"certificate": "Social Media for Business Certification",
		"dates": "2012"
	}
	],
	"onlineCourses":[
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2015,
		"url": "http://www.udacity.com",
	}
	]
	};
education.display = function() {
	
	var formattedSchoolName = 
		HTMLschoolName.replace("%data%", education.schools[0].name);

	var formattedSchoolDates = 
		HTMLschoolDates.replace("%data%", education.schools[0].dates);
		
	var formattedSchoolLocation = 
		HTMLschoolLocation.replace("%data%", education.schools[0].city);
	
	var formattedSchoolDegree =
		HTMLschoolDegree.replace("%data%", education.schools[0].degree);
	
	var formattedSchoolMajor =
		HTMLschoolMajor.replace("%data%", education.schools[0].major);
		
	var formattedSchoolMinor =
		HTMLschoolMajor.replace("Major: %data%", "Minor: " + education.schools[0].minor);	

	if (education.schools.length > 0) {
		$("#education").append(HTMLschoolStart);
	}

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree).append(formattedSchoolDates).append(formattedSchoolLocation).append(formattedSchoolMajor).append(formattedSchoolMinor + "</br>");

	var formattedSchoolName = 
		HTMLschoolName.replace("%data%", education.schools[1].name);

	var formattedSchoolDates = 
		HTMLschoolDates.replace("%data%", education.schools[1].dates);
		
	var formattedSchoolLocation = 
		HTMLschoolLocation.replace("%data%", education.schools[1].city);
		
	var formattedSchoolCertification =
		HTMLschoolMajor.replace("Major: %data%", education.schools[1].certificate);	

		
		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDates).append(formattedSchoolLocation).append(formattedSchoolCertification + "</br></br>");
	
	if(education.onlineCourses.length > 0) {
		$(".education-entry").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL + "</br>");	
	}
}

};

bio.display();
work.display();
projects.display();
education.display();
