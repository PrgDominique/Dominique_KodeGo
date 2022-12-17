window.onload = (event) => {
   alert("DOM is fully loaded");
  };

  document.getElementById("change_heading").innerHTML = "Hello World";

  document.querySelector(".brown").addEventListener("mouseover", function(){
    document.querySelector(".selected").innerHTML= ": Brown"
  });
  document.querySelector(".green").addEventListener("mouseover", function(){
    document.querySelector(".selected").innerHTML= ": Green"
  });
  document.querySelector(".blue").addEventListener("mouseover", function(){
    document.querySelector(".selected").innerHTML= ": Blue"
  });
  document.querySelector(".yellow").addEventListener("mouseover", function(){
    document.querySelector(".selected").innerHTML= ": Yellow"
  });

  const boxColor = document.createElement("div");
  boxColor.className = "purple"
  
   document.querySelector("section").appendChild(boxColor);

  document.querySelector(".purple").addEventListener("mouseover", function(){
    document.querySelector(".selected").innerHTML= ": Purple"
  });
