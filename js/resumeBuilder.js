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

var work ={};

work.position = "Photography Coordinator";
work.employer = "Sibcy Cline Realtors";
work.yearsWorked = 5;
work.city = "Cincinnati";

var formattedWorkEmployer = 
		HTMLworkEmployer.replace("%data%", work.employer);

var formattedWorkTitle = 
		HTMLworkTitle.replace("%data%", work.position);

var formattedWorkDates = 
		HTMLworkDates.replace("%data%", work.yearsWorked);
		
var formattedWorkLocation = 
		HTMLworkLocation.replace("%data%", work.city);
		
$("#workExperience").append(HTMLworkStart + formattedWorkEmployer + formattedWorkTitle);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);

//Education

var education ={};

education["name"] = "University of Evansville";
education["years"] = 4;
education["city"] = "Evansville";

var formattedSchoolName = 
		HTMLschoolName.replace("%data%", education["name"]);

var formattedSchoolDates = 
		HTMLschoolDates.replace("%data%", education["years"]);
		
var formattedSchoolLocation = 
		HTMLschoolLocation.replace("%data%", education["city"]);
		
$("#education").append(HTMLschoolStart + formattedSchoolName);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);