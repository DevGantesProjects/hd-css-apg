var _url = window.location.protocol+'//'+window.location.host+''
var _urlS = window.location.protocol+'//localhost:3000'
//var _urlS = window.location.protocol+'//192.168.15.4:3000'

function lastDateMonth () {
  now = new Date
  day = now.getDate()
  month = now.getMonth()
  year = now.getFullYear()
  var primeiroDia = new Date(date.getFullYear(), date.getMonth(), 1)
  var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  return primeiroDia + ' - ' + ultimoDia
//  return year+'-'+month+'-'+day
}

function position(e) {
  var el = e;
  var coordenadas = el.getBoundingClientRect();
//  console.log('posição x', coordenadas.left, 'posição y', coordenadas.top)
  return {top: coordenadas.top, left: coordenadas.left}
}

// https://pt.stackoverflow.com/questions/181922/formatar-moeda-brasileira-em-javascript?rq=1
function getMoney( str ) {
  return parseInt( str.replace(/[\D]+/g,'') );
}

function formatReal( int ) {
  var tmp = int+'';
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if( tmp.length > 6 )
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
}

function getRandomItem(items) {
	return items[Math.floor(Math.random() * (items.length -1))];
}

function setCookie(name, value, duration) {
  var cookie = name + "=" + escape(value) +
  ((duration) ? "; duration=" + duration.toGMTString() : "");

  document.cookie = cookie;
}

function getCookie(name) {
  var cookies = document.cookie;
  var prefix = name + "=";
  var begin = cookies.indexOf("; " + prefix);

  if (begin == -1) {

      begin = cookies.indexOf(prefix);
       
      if (begin != 0) {
          return null;
      }

  } else {
      begin += 2;
  }

  var end = cookies.indexOf(";", begin);
   
  if (end == -1) {
      end = cookies.length;                        
  }

  return unescape(cookies.substring(begin + prefix.length, end));
}

function deleteCookie(name) {
  if (getCookie(name)) {
         document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

function capitalize () {
  const url = window.location
  var hash = url.hash.replace('#/', '')
  hash.charAt(0).toUpperCase() + hash.substring(1)
  console.log(hash)
  return hash
}
