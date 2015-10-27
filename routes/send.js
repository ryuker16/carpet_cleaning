var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send/',function(req,res){
 var transporter = nodemailer.createTransport("SendIT", {
    service: 'gmail',
    auth: {
        user: 'aeoneon@gmail.com',
        pass: 'Udonsoup16'
    }
});

var emailBody = '<div>Name: ' + req.user.name + '</div>' +
'<div>Email: ' + req.user.email + '</div>' +
'<div>Phone: ' + req.user.phone + '</div>' +
'<div>Message: ' + req.user.message + '</div>' +
'<div>Date: ' + (new Date()).toString() + '</div>'; 

var mailOptions = { 
	From: 'aeoneon@gmail.com',
	To: 'will@bluenightphoto.com',
	subject: 'Contact from website',
	text: 'hiya good body!',
	html: 'emailBody'
};

var nodemailer = require("nodemailer");

transporter.sendMail(mailOptions, function (error, info){
  if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
	
	transporter.close();
});
module.exports = router;
