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
