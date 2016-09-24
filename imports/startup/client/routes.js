import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//Layouts
import "../../ui/layouts/mainLayout.js";
//Pages

//Components


FlowRouter.route("/", {
	name:"Accueil",
	action:function(){
		BlazeLayout.render("mainLayout");
	}
});