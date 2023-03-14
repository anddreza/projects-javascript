"use strict";

var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var relogio = setInterval(function time() {
  var dateToday = new Date();
  var hr = dateToday.getHours();
  var min = dateToday.getMinutes();
  var s = dateToday.getSeconds();
  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = s;
});
//# sourceMappingURL=script.dev.js.map
