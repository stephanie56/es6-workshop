"use strict";

var getAlert = function getAlert() {
  var buttons = document.getElementsByTagName('input');

  var _loop = function _loop(i) {
    buttons[i].onclick = function () {
      return alert(i);
    };
  };

  for (var i = 0; i < buttons.length; i++) {
    _loop(i);
  }
};

window.onload = getAlert;