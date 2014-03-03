(function() {
	
	var App, AppRegion, indexView, NameSpace, region;

    NameSpace = {
    	Models: {},
        Collections: {},
        Views: {},
        Router: null
    };

    App = new Backbone.Marionette.Application();
	
	App.addRegions({
		mainRegion: '#main'
	});
	
	region = App.getRegion('mainRegion');

    NameSpace.Views.IndexView = Backbone.Marionette.ItemView.extend({
        initialize: function() {
            console.log('IndexView Init');
        },
        el: '#main',					
        template: Handlebars.compile($('#index-template').html()),
        render: function() {
            region.reset();
            this.$el.html(this.template());
            return this;
        }
    });

    indexView = new NameSpace.Views.IndexView;

    App.Router = Backbone.Router.extend({
        initialize: function() {
            console.log('Router Init...');
        },
        routes: {
            '': 'index',
            'menu': 'menu'
        },
        index: function() {
        	AppRegion = Marionette.Region.extend({
    			el: '#main',
    			currentView: indexView.render()
    		});
    	},
    	menu: function() {
    		// ...
    	}
    });

    new App.Router;

    Backbone.history.start();
	
	console.log(region);

	// ...
	region.close(indexView);

}());