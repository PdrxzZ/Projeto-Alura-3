let cor;
let posiçãoHorizontal;
let posiçãoVertical;




function setup() {
  
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255))
  posiçãoHorizontal = 200;
  posiçãoVertical = 200;
  
}


function draw() {
  
  fill(cor);
  circle(posiçãoHorizontal, posiçãoVertical, 30);

  if (mouseX < posiçãoHorizontal){
    posiçãoHorizontal = posiçãoHorizontal - 1;
  }

    if (mouseX > posiçãoHorizontal){
      posiçãoHorizontal = posiçãoHorizontal + 1;
    }
  
  if (mouseY < posiçãoVertical){
    posiçãoVertical = posiçãoVertical - 1;
  }
  
  if (mouseY > posiçãoVertical){
    posiçãoVertical = posiçãoVertical + 1;
  }
  
  if (mouseIsPressed){
     cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100))
 
  }
  
  
  
  













}