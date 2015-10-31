(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var description = document.getElementById('description-info');
var agenda = document.getElementById('agenda-info');

function resize() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (w >= 1000) {
    var maxHeight = Math.max(description.offsetHeight, agenda.offsetHeight);

    description.style.height = maxHeight + 'px';
    agenda.style.height = maxHeight + 'px';
  } else {
    description.style.height = 'auto';
    agenda.style.height = 'auto';
  }
}

window.onresize = resize;
resize();

},{}]},{},[1]);
