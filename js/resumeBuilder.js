/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Julia Hendrickson",
	"role" : "Graphic Designer and Web Developer",
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
		
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#header").append(formattedBioPic);
	