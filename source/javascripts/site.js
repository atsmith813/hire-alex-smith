//= require jquery
//= require popper.js
//= require bootstrap

$(document).ready(function() {
  var type_text = [
    'Hard-working',
    'Genuine',
    'Unanticipated',
    'Smurff',
    'Honest',
    'Giggly',
    'Driven',
    'Determined',
    'Smart',
    'Blunt',
    'Kind',
    'Loyal',
    'Stubborn',
    'Goofy',
    'Pessimistic',
    'Cheesy',
    'Annoying'
  ];

  new TypeIt('#type-text', {
    strings: type_text,
    breakLines: false,
    lifeLike: true,
    loop: true
  });
});
