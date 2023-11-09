'use strict';

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function classZS(target) {
  target.out = 'test';
}

var Demo = classZS(_class = function Demo() {
  _classCallCheck(this, Demo);
}) || _class;

console.log(Demo.out);
