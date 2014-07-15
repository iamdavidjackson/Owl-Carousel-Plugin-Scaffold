/**
 * Plugin Name
 * @since 2.0.0
 */
;(function ( $, window, document, undefined ) {
    PluginName = function(carousel){
        this.initVariables(carousel);
        this.initHandlers();
    }
    
    PluginName.Defaults = {
        optionName: 'value',
        optionName2: 'value'
    }
    
    PluginName.prototype.initVariables = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
        */
        this._core = carousel;

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};
        
        // set default options
        this._core.options = $.extend({}, this.Defaults, this._core.options);

        /**
         * The carousel element.
         * @type {jQuery}
        */
        this.$element = this._core.$element;

        // This will track how many times we click the button
        this.clickCount = 0;
    }
    
    PluginName.prototype.init = function() {
        var options = this._core.settings;

        // Add your init logic here.  A good example of what would go here
        // is anything that needs to be added to the DOM to use your plugin.
        
        this._controls.$button = $('<a href="#">Click me</a>').addClass('PluginNameButton').appendTo(this.$element);

        this.isInit = true;
    }

    PluginName.prototype.initHandlers = function() {

        // Add any required event listeners tied to internal Owl events.
        // Use $.proxy to keep the scope of "this" your plugin.
        
        this.$element.on('initialize.owl.carousel', $.proxy(this.onInitialize, this));
        this.$element.on('initialized.owl.carousel', $.proxy(this.onInitialized, this));

        this.$element.on('refresh.owl.carousel', $.proxy(this.onRefresh, this));
        this.$element.on('refreshed.owl.carousel', $.proxy(this.onRefreshed, this));

        this.$element.on('resize.owl.carousel', $.proxy(this.onResize, this));
        this.$element.on('resized.owl.carousel', $.proxy(this.onResized, this));

        this.$element.on('translate.owl.carousel', $.proxy(this.onTranslate, this));
        this.$element.on('translated.owl.carousel', $.proxy(this.onTranslated, this));

        this.$element.on('drag.owl.carousel', $.proxy(this.onDrag, this));
        this.$element.on('dragged.owl.carousel', $.proxy(this.onDragged, this));

        this.$element.on('change.owl.carousel', $.proxy(this.onChange, this));
        this.$element.on('changed.owl.carousel', $.proxy(this.onChanged, this));
    }

    PluginName.prototype.initEvents = function() {

        // Add any required event listeners here.  It's best to put internal Owl events in 
        // initHandlers so this section is more for events associated with this plugin specifically.
        
        this._controls.$button.on('click', $.proxy(this.onButtonClick, this));
    }

    PluginName.prototype.onInitialize = function(event) {

        // This event is triggered before the carousel initializes
    
    }

    PluginName.prototype.onInitialized = function(event) {

        // This event is triggered after the carousel has initialized
    
    }

    PluginName.prototype.onRefresh = function(event) {
        
        // This event is triggered before the carousel refreshes
        
    }

    PluginName.prototype.onRefreshed = function(event) {

        // This event is triggered after the carousel has refreshed
        // 
        // Initialize the plugin if it hasn't been already.
        if(!this.isInit) {
            this.init();
            this.initEvents();
        }
    }

    PluginName.prototype.onResize = function(event) {

        // This event is triggered before the carousel resizes
    
    }

    PluginName.prototype.onResized = function(event) {

        // This event is triggered after the carousel has resized
    
    }

    PluginName.prototype.onTranslate = function(event) {

        // This event is triggered before the carousel has starts moving
    
    }

    PluginName.prototype.onTranslated = function(event) {

        // This event is triggered after the carousel has stopped moving
    
    }

    PluginName.prototype.onDrag = function(event) {

        // This event is triggered before the carousel is dragged
    
    }

    PluginName.prototype.onDragged = function(event) {

        // This event is triggered after the carousel has been dragged
    
    }

    PluginName.prototype.onChange = function(event) {

        // This event is triggered before the carousel changes
    
    }

    PluginName.prototype.onChanged = function(event) {

        // This event is triggered after the carousel has changed
    
    }

    PluginName.prototype.onTrigger = function(event) {

        // This function is automatically triggered on each plugin loaded in Owl Carousel.
        // It passes in the event as a parameter and you can then add on any extra data you need to
        
        event.pluginName = {
            clickCount: this.clickCount
        }
    }

    PluginName.prototype.onButtonClick = function(event) {
        this.clickCount += 1;
        this._controls.$button.text(this.clickCount + " clicks");

        // Trigger an internal event so that we can update any other active plugins
        this._core.trigger('change', { property: { name: 'clickCount', value: this.clickCount } });

        // Trigger an external event on the window like this
        $(window).trigger('click.pluginName.owl.carousel', this.clickCount);
    }
    
    PluginName.prototype.destroy = function(){
        
        // Turn off your events here to keep your environment clean
        this.$element.off('refreshed.owl.carousel', $.proxy(this.onRefreshed, this));
    };

    // This adds the plugin to Owl Carousel
    $.fn.owlCarousel.Constructor.Plugins['pluginName'] = PluginName;

})( window.Zepto || window.jQuery, window,  document );