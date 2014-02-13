Handlebars.getTemplate = function(name){
	if(Handlebars.templates === undefined || Handlebars.templates[name] === undefined){
		$.ajax({
			url: 'templates/' + name + '.handlebars',
			success: function(data){
				if(Handlebars.templates === undefined){
					Handlebars.templates = {};
				}
				Handlebars.templates[name] = Handlebars.compile(data);
			},
			async : false
		});
	}
	return Handlebars.templates[name];
};

Handlebars.registerHelper('list', function(items, options) {
	var out = "<ul>";
	for(var i=0, l=items.length; i<l; ++i){
		out += "<li>" + options.fn(items[i]) + "</li>";
	}
	return out + "</ul>";
});

