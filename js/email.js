// Adopted and modified from
// http://www.math.rochester.edu/people/faculty/cmlr/Antispam/
function addEvent(obj, type, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(type, fn, true);
    return(true);
  }
  if (obj.attachEvent) {
    var r = obj.attachEvent('on'+type, fn);
    return(r);
  }
  return(false);
}

function change() {
  var space = / /g;
  var begin = /^uva/;
  var end = /cs$/;
  //var spans = document.getElementsByTagName('span');
  var spans = document.getElementsByTagName('dd');
  for (var i = 0; i < spans.length; i++) {
    var s = spans[i];
    var name = s.className;

    if (name == 'hideemail') {
      var address = s.firstChild.nodeValue;
      address = address.replace(begin, '');
      address = address.replace(end, '');
      address = address.replace(space, '.');
      address += '@cs.vir';
      address += 'ginia.e';
      address += 'du';

    /*
      var anchor = document.createElement();
      anchor.appendChild(document.createTextNode(address));
      s.removeChild(s.firstChild);
      s.appendChild(anchor);
    }

       if (name == 'justify' || name == 'expand') {
       var address = s.firstChild.nodeValue;

       if (name == 'justify') {
       address = address.replace(csend, '');
       address += '@vir';
       address += 'ginia.e';
       address += 'du';
       } else if (name == 'expand') {
       address = address.replace(' ', '@');
       address = address.replace('math@', '@');
       address = address.replace(space, '.');
       address = address.replace(csend, '');
       }
    */

    var anchor = document.createElement('a');
    //var anchor = document.createElement();
    anchor.appendChild(document.createTextNode(address));
    anchor.setAttribute('href', 'mailto:' + address);
    s.removeChild(s.firstChild);
    s.appendChild(anchor);
    }
  }
}

addEvent(window, 'load', change);
