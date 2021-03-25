const log = document.getElementById("dab");

document.addEventListener('keyup', dab);

function logKey(e) {
	var hexString = ((e.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0))*9+30).toString(16);
	document.body.style.background = "#"+hexString+hexString+hexString
}
function func(x){
  return Math.round(Math.abs((2 * 255) / Math.PI * Math.asin(Math.sin((2*Math.PI) / (6.25*4)*(x)))));
}
function dab(unu){
  var e = ((unu.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)))
  console.log("called")
  console.log(unu.key + " " + e + " " + func(e))
  var xd2 = [255,0,255,0]
  switch(Math.floor(e/6))
  {
    case 0:
      xd2.splice(2, 1)
      xd2[1] += func(e)
      break;
     case 1: 
      xd2.splice(1, 1)
      xd2[0] = func(e)
      break;
     case 2: 
      xd2.splice(0, 1)
      xd2[2] = func(e)
      break;
     case 3:
      xd2.splice(0, 1)
      xd2.pop()
      xd2.push(255)
      xd2[1] = func(e)
      break;
     case 4:
      xd2.splice(0, 1)
      xd2.pop()
      xd2.push(255)
      xd2[1] = func(e)
      break;
     default:
      e = 0;
      break;
  }
  console.log("#"+xd2.join())
  for(i = 0; i<3; i++)
  {
    if(xd2[i]<16)
    xd2[i]="0"+xd2[i].toString(16);
    else xd2[i]=xd2[i].toString(16);
  }
  console.log("#"+xd2.join(""))
  document.body.style.background = "#"+xd2.join("");
}