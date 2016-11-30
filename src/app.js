import $ from 'jquery';
import Backbone from 'backbone';


var PageView = Backbone.View.extend({
  initialize: function() {
    this.counter = 0;
  },
  render: function() {
    //this.$el.empty();
    // Make a place for the header banner
    var headerTag = $('<header>');

    // Render the header banner
    var header = new HeaderView({
      el: headerTag
    });
    header.render();
    this.$el.append(header.$el);

    // Setup a Cage
    var cage = $('<img>');
    cage.attr('src', 'https://www.placecage.com/200/300');
    this.$el.append(cage);

    // Setup a click counter
    var counterHTML = '<section>Times clicked: '+this.counter+'</section>';
    this.$el.append(counterHTML);

    // Setup our buttons
    var button1 = new ButtonView();
    var button2 = new ButtonView();

    // Render the buttons
    button1.render();
    button2.render();

    // Put the buttons on the page
    this.$el.append(button1.$el);
    this.$el.append(button2.$el);

    // Listen to the buttons
    this.listenTo(button1, 'no-suggestions', this.onClick);
    this.listenTo(button2, 'no-suggestions', this.onClick);

    header.listenTo(button1, 'no-suggestions', header.hide);
  },
  events: {
    'click img': 'onClick'
  },
  onClick: function(whoClicked) {
    // Increment the counter
    this.counter += 1;
    //this.render();
    alert(whoClicked + ' was clicked');
    this.$('section').html('Times clicked: ' + this.counter);
  }
});

var HeaderView = Backbone.View.extend({
  render: function() {
    this.$el.attr('id', 'yaels-header');
    this.$el.html('<h1>THIS IS A WEBPAGE</h1>');
  },
  hide: function() {
    this.$el.hide();
  }
});

var ButtonView = Backbone.View.extend({
  render: function() {
    var buttonHTML = '<button>CLICK ME</button>';
    this.$el.html(buttonHTML);
  },

  events: {
    'click button': 'onClickButton'
  },

  onClickButton: function() {
    this.$('button').css('background-color', 'red');
    this.trigger('no-suggestions', 'button');
  }
});










$(document).ready(function() {
  var page = new PageView({
    el: $('body')
  });
  page.render();
  $('body').append('<h1>Hello Ada</h1>');
});
