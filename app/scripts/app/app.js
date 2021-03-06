// (function() {

    var App, app;

    // Do custom configs for:...
    // localStorage, Parse, and an Express RESTful API.

    App = App || {};
    App.Config || (App.Config = {});
    App.Models || (App.Models = {});
    App.Collections || (App.Collections = {});
    App.Routers || (App.Routers = {});
    App.Views || (App.Views = {});
    App.Templates || (App.Templates = {});
    app = app || {};

    // Real Storage...
    App.Config = _.extend(App.Config, {
        // Storage...
        storeName: 'quests'
    });

    // Test Storage...
    App.Config = _.extend(App.Config, {
        storeName: 'questsTest'
    });

    App.Models.Quest = Backbone.Model.extend({
        /*initialize: function() {
            console.log('Quest Model Init...');
        },*/
        defaults: function() {
            return {
                title: '',
                text: 'Edit this quest...',
                createdAt: new Date()
            };
        }
    });

    App.Collections.Quests = Backbone.Collection.extend({
        /*initialize: function() {
            console.log('Quest Collection Init...');
        },*/
        model: App.Models.Quest,
        localStorage: new Backbone.LocalStorage(App.Config.storeName)
    });

    App.Templates['template-quest-view'] = "<div class=\"well well-small\">" + " <h2 id=\"pane-title\"><%= title %></h2>" + "</div>" + "<div id=\"pane-text\"><%= text %></div>";

    App.Views.QuestView = Backbone.View.extend({
        template: _.template(App.Templates['template-quest-view']),
        converter: new Showdown.converter(),
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.render();
        },
        render: function() {
            this.$el.html(this.template({
                title: this.model.get('title'),
                text: this.converter.makeHtml(this.model.get('text'))
            }));
            return this;
        }
    });
	
	/*var App, AppRegion, indexView, NameSpace, region;
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
    			currentView: indexView.render()
    		});
    	},
    	menu: function() {
    	}
    });
    new App.Router;
    Backbone.history.start();
	console.log(region);
	region.close(indexView);*/

// }());