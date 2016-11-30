import $ from 'jquery';
import Backbone from 'backbone';


var PageView = Backbone.View.extend({
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
  }
});

$(document).ready(function() {
  var page = new PageView({
    el: $('body')
  });
  page.render();
  $('body').append('<h1>Hello Ada</h1>');
});
