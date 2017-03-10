var line1x = 200
var line1y = 40
var line2x = 338.56
var line2y = 280
var line3x = 61.44
var line3y = 280

//var amountmin = 45.9
//var amountmax = 62.7
//var latmin = 0
//var latmax = 52

function preload() {
  rain = loadTable("data/rain.csv", "csv", "header");
  temp= loadTable("data/temp.csv", "csv", "header");
	myFont=loadFont("PoiretOne-Regular.ttf"); 
}
  
function setup() {
  createCanvas(400, 400);
  rainCount = rain.getRowCount();
  tempCount = temp.getRowCount();
	   noLoop()
  textFont(myFont);
}

function draw() {
  background(240);  
  strokeCap(ROUND);
  strokeWeight(1);
  stroke(59, 229, 124);
  line(width/2, height/2, line1x, line1y);
  stroke(66, 134, 244);
  line(width/2, height/2, line2x, line2y);
  stroke(180, 50, 50);
  line(width/2, height/2, line3x, line3y);
noStroke();
 
  textSize(12);
  textAlign(CENTER, CENTER);
//  textFont("cursive");
  textFont(myFont)
  
  push();
  fill(59, 229, 124);
  translate(line1x-3, line1y-18);
  rotate(-PI/2);
  text("latitude", 0, 0);
  pop();
  
  push();
  fill(66, 134, 244);
  translate(line2x+31, line2y+15);
  rotate(PI/6);
  text("80in. rainfall", 0, 0);
  pop();
  
  
  push();
  fill(180, 50, 50);
  translate(line3x-28,line3y+13);
  rotate(-PI/6);
  text("temperature", 0, 0);
  pop();
  
  fill(0);
  textSize(15);
  text("Temp v Lat v Rain", 200, 340);
  textSize(12);
  text("two separate datasets--what can you see?", 200, 355)
  
  
  
  for (var p = 0; p < rainCount; p++) {
  
    //raintolat
    var xx= map(rain.get(p,"Amount"), 0, 80, 200, line2x);
    var xy= map(rain.get(p,"Amount"), 0, 80, 200, line2y);

    var yy= map(rain.get(p,"Latitude"), 0, 80, 200, line1y);
    
    //temptolat
    var yy2= map(temp.get(p,"Latitude"), 0, 80, 200, line1y);
    

    var zx= map(temp.get(p,"Temperature"), 0, 80, 200, line3x);
    var zy= map(temp.get(p,"Temperature"), 0, 80, 200, line3y);
    
    	


    	stroke(0,0, 0, 80);

    	strokeWeight(1.5);
    	//strokeCap(SQUARE);
    	//line(xx, xy, 200, yy);
    	//line(zx, zy, 200, yy2);
  
    	beginShape(LINES);
    	vertex(xx,xy);
    	vertex(200,yy);
    	vertex(zx, zy);
    	vertex(200,yy2);
    	endShape();
   //noFill();
    //ellipseMode(CENTER);
    //ellipse(200, 200, zx, zy);
  }

}