/*
This is empty on purpose! Your code to build the resume will go here.
 */
//Bio Information
var bio = {
	"name" : "Julia Hendrickson",
	"role" : "  Graphic Designer and Web Developer",
	"contacts" : {
		"mobile" : "324-456-7656",
		"email" : "julia@gmail.com",
	},
	"photo" : "images/fry.jpg",
	"welcomeMessage" : "Hello World!",
	"skills" : ["Everything!"],
	}
	
var formattedName = 
		HTMLheaderName.replace("%data%", bio.name);
		
var formattedRole = 
		HTMLheaderRole.replace("%data%", bio.role);
		
var formattedMobile = 
	HTMLmobile.replace("%data%", bio.contacts.mobile);

var formattedEmail = 
	HTMLemail.replace("%data%", bio.contacts.email);

var formattedBioPic =
	HTMLbioPic.replace("%data%", bio.photo);
	
var formattedWelcomeMessage = 
	HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	
var formattedSkills = 
	HTMLskills.replace("%data%", bio.skills);
		
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(HTMLskillsStart + formattedSkills);

//work

var work ={
	"jobs":[
	{
		"employer": "Sibcy Cline Realtors",
		"title": "Photography Coordinator",
		"location": "Cincinnati, OH",
		"dates": "2006 - Present",
		"description": " - Routing and scheduling 50-60 photography appointments daily - Managing seven full-time photographers daily activities - Editing photos using Photoshop - Working directly with agents to meet their photo marketing needs - Photographing listings and working with home owners to maximize their homes potential"
	},
	{
		"title": "Marketing Representative",
		"description": " - Created direct mail pieces for agents - Work directly with agents in creating design pieces and setting up a marketing plan - Work with builders in creating marketing pieces - Produce and submit ads in multiple publications"
	},
	{
		"title": "Marketing Assistant",
		"description": " - Assisted marketing representatives with agent projects	- Designed postcards and other print piece for builders - Create builder presentation interactive media - Produce pieces all the way through the print process - Assist in producing and submitting ads in multiple publications - Created portions of the listing magazine"
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
		
$("#workExperience").append(HTMLworkStart); 
$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle);
$(".work-entry").append(formattedWorkDates);
$(".work-entry").append(formattedWorkLocation + "</br>");

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
		"degree": "Certificate for Social Media in Business"
	}
	]
	};

var formattedSchoolName = 
		HTMLschoolName.replace("%data%", education.schools[0].name);

var formattedSchoolDates = 
		HTMLschoolDates.replace("%data%", education.schools[0].dates);
		
var formattedSchoolLocation = 
		HTMLschoolLocation.replace("%data%", education.schools[0].city);
		
$("#education").append(HTMLschoolStart + formattedSchoolName);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation + "</br>");

var formattedSchoolName = 
		HTMLschoolName.replace("%data%", education.schools[1].name);

var formattedSchoolDates = 
		HTMLschoolDates.replace("%data%", education.schools[1].dates);
		
var formattedSchoolLocation = 
		HTMLschoolLocation.replace("%data%", education.schools[1].city);
		
$("#education").append(HTMLschoolStart + formattedSchoolName);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation + "</br>");