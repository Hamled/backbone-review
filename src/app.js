import $ from 'jquery';
import Backbone from 'backbone';


var PageView = Backbone.View.extend({
  initialize: function(options) {
    this.count = 0;
  },

  render: function() {
    // Make a place for the header banner
    var headerTag = $('<header>');
    this.$el.append(headerTag);

    // Render the header banner
    var header = new HeaderView({
      el: headerTag
    });
    header.render();

    // Setup a Cage
    var cage = $('<img>');
    cage.attr('src', 'https://www.placecage.com/200/300');
    this.$el.append(cage);

    // Setup our counter
    var counter = $('<p>');
    counter.text('Times clicked: ' + this.count);
    this.$el.append(counter);

    // Setup our buttons
    var button1 = new ButtonView();
    var button2 = new ButtonView();

    button1.render();
    button2.render();

    this.$el.append(button1.$el);
    this.$el.append(button2.$el);
  }
});

var HeaderView = Backbone.View.extend({
  render: function() {
    this.$el.html('<h1>THIS IS A WEBPAGE</h1>');
  }
});

var ButtonView = Backbone.View.extend({
  render: function() {
    var buttonHTML = '<button class="cool-button">CLICK ME</button>';
    this.$el.html(buttonHTML);
  },

  events: {
    'click .cool-button': 'onClick'
  },

  onClick: function(e) {
    alert('You clicked me!');
  }
});

$(document).ready(function() {
  var page = new PageView({
    el: $('body')
  });
  page.render();
  $('body').append('<h1>Hello Ada</h1>');
});
