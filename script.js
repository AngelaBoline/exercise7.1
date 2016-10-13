var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

//newHeading.innerHTML = "This is a Heading"
//newParagraph,innerHTML = "Lorem ipsum dolor sit amet, donec pede quam 
//at cras sed, ultricies iaculis ac metus similique, scelerisque netus at 
//sapien vitae dui fringilla, amet gravida dapibus ipsum leo sed, id ultricies 
//arcu. Volutpat nibh lectus, ut neque elit vestibulum ac adipiscing dui, donec 
//risus orci quam morbi proin, et pede risus a a vestibulum, sed proin.";

var h1Text = document.createTextNode("This is a heading"):
var paraText = document.createTextNode("Lorem ipsum dolor sit amet, donec pede quam 
at cras sed, ultricies iaculis ac metus similique, scelerisque netus at 
sapien vitae dui fringilla, amet gravida dapibus ipsum leo sed, id ultricies 
arcu. Volutpat nibh lectus, ut neque elit vestibulum ac adipiscing dui, donec 
risus orci quam morbi proin, et pede risus a a vestibulum, sed proin.");

newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

document.getElementById("main").appendChild(newHeading);
document.getElementById("main").appendChild(newParagraph);

var main = document.getElementById("main");
main.setAttribute("align" , "center");

