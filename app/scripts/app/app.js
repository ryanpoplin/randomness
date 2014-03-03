(function() {
	
	var App, AppRegion, indexView, NameSpace;

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
	console.log(region);

    NameSpace.Views.IndexView = Backbone.Marionette.ItemView.extend({
        initialize: function() {
            console.log('IndexView Init');
        },
        el: '#main',
        template: _.template($('#index-template').html()),
        render: function() {
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
            '': 'index'
        },
        index: function() {
        	AppRegion = Marionette.Region.extend({
    			el: '#main',
    			currentView: indexView.render()
    		});
    	}
    });

    new App.Router;

    Backbone.history.start();

}());