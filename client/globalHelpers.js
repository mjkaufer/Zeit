UI.registerHelper('formatDate', function(date){
	return date.toLocaleDateString() + ", " + date.toLocaleTimeString();
});

UI.registerHelper('idStr', function(s){
	return s._str;
})