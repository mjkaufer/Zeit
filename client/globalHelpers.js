UI.registerHelper('formatDate', function(date){
	return date.toLocaleDateString() + ", " + date.toLocaleTimeString();
})