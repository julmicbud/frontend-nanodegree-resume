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
	},
	"twitter": "@julmicbud",
	"github": "julmicbud",
	"website": "www.julmicbud.com",
	"photo" : "https://a3-images.myspacecdn.com/images03/20/b6d8a8f46c644ca99a4dfc662a8109f8/300x300.jpg",
	"welcomeMessage" : "Hello and welcome to my resume. Feel free to look around and let me know if you have any questions.",
	"skills" :["excel","word"],
	};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic =	HTMLbioPic.replace("%data%", bio.photo);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic + formattedWelcomeMessage);	
	$("#header").append(HTMLskillsStart); 
	
	var formattedMobile =	HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter =	HTMLtwitter.replace("%data%", bio.twitter);
	var formattedGithub = HTMLgithub.replace ("%data%", bio.github);
	$("#topContacts").append(formattedMobile).append(formattedEmail).append(formattedTwitter).append(formattedGithub);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};
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
	}
	]};

var formattedWorkEmployer = 
		HTMLworkEmployer.replace("%data%", work.jobs[0].employer);

var formattedWorkTitle = 
		HTMLworkTitle.replace("%data%", work.jobs[0].title);

var formattedWorkDates = 
		HTMLworkDates.replace("%data%", work.jobs[0].dates);
		
var formattedWorkLocation = 
		HTMLworkLocation.replace("%data%", work.jobs[0].location);
	
var formattedWorkDescription = 
		HTMLworkDescription.replace("%data%", work.jobs[0].description);	
		
$("#workExperience").append(HTMLworkStart); 
$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle);
$(".work-entry").append(formattedWorkDates);
$(".work-entry").append(formattedWorkLocation)
$(".work-entry").append(formattedWorkDescription + "</br>" + "</br>");

var formattedWorkTitle = 
		HTMLworkTitle.replace(" - %data%", work.jobs[1].title);
			
var formattedWorkDescription = 
		HTMLworkDescription.replace("%data%", work.jobs[1].description);	
		
$(".work-entry").append(formattedWorkTitle);
$(".work-entry").append(formattedWorkDescription + "</br>");

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
		"degree": "Social Media for Business Certification",
		"dates": "2012"
	}
	]
	};

var formattedSchoolName = 
		HTMLschoolName.replace("%data%", education.schools[0].name);

var formattedSchoolDates = 
		HTMLschoolDates.replace("%data%", education.schools[0].dates);
		
var formattedSchoolLocation = 
		HTMLschoolLocation.replace("%data%", education.schools[0].city);
		
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation + "</br>");

var formattedSchoolName = 
		HTMLschoolName.replace("%data%", education.schools[1].name);

var formattedSchoolDates = 
		HTMLschoolDates.replace("%data%", education.schools[1].dates);
		
var formattedSchoolLocation = 
		HTMLschoolLocation.replace("%data%", education.schools[1].city);
		
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation + "</br>");

bio.display();