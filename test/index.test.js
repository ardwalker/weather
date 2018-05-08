
// import { describe } from 'jest'
import 'jest-dom/extend-expect'

// import { describe } from 'jasmine'

// describe('calculator', function() {
//   ...
// })

// var $ = require('jquery');
var html = require('fs').readFileSync('./index.html').toString();
document.documentElement.innerHTML = html;

describe( 'Within the document', () => {

  it('presence of location form', () => {
    expect(document.querySelector('form')).toBeInTheDOM();
  });

  it('location form has class', () => {
    expect(document.querySelector('form')).toHaveClass('location-form');
  });

  it('presence of input', () => {
    expect(document.querySelector('form > input')).toHaveAttribute('type', 'text');
  });

});




