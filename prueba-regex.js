

var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
var t = 'www.google.com';



if (t.match(regex)) {
  console.log("Successful match");
  
} else {
    console.log("No match");
}


