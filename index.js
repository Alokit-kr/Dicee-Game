 // Player1
 var x=document.querySelectorAll("button")[0];
 x.addEventListener("click",fun);
function fun() {
  var randomNo1=Math.floor((Math.random())*6)+1;
  var str1="dice"+randomNo1+".png";
  var position1=document.querySelectorAll(".img1")[0];
  position1.setAttribute("src",str1);
  // Player2
  var randomNo2=Math.floor((Math.random())*6)+1;
  var str2="dice"+randomNo2+".png";
  var position2=document.querySelectorAll(".img2")[0];
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
