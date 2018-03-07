//= require jquery
//= require popper.js
//= require bootstrap

$(document).ready(function() {
  var type_text = [
    'Hard-working',
    'Genuine',
    'Unanticipated',
    'Giggly',
    'Driven',
    'Determined',
    'Smart',
    'Blunt',
    'Smurff',
    'Kind',
    'Loyal',
    'Stuborn'
  ];

  new TypeIt('#type-text', {
    strings: type_text,
    breakLines: false,
    lifeLike: true,
    loop: true
  });
});
