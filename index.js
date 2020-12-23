 // Player1
 var x=document.querySelector("button");
 x.addEventListener("click",fun);
function fun() {
  var randomNo1=Math.floor((Math.random())*6)+1;
  var str1="images/dice"+randomNo1+".png";
  var position1=document.querySelector(".img1");
  position1.setAttribute("src",str1);
  // Player2
  var randomNo2=Math.floor((Math.random())*6)+1;
  var str2="images/dice"+randomNo2+".png";
  var position2=document.querySelector(".img2");
  position2.setAttribute("src",str2);
  if(randomNo1==randomNo2)
  {
    document.querySelector("h1").innerHTML="Draw";
  }
  else if(randomNo1>randomNo2)
  {
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
  }
  else {
    document.querySelector("h1").innerHTML="🚩 Player 2 wins";
  }
}
