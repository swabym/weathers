var weatherTable;
var rowCount;

// min/maximum temperatures to show on the scale
var minTemp = 60;
var maxTemp = 90;

var minInches = 0; 
var maxInches = 8;

var maxWind;


function preload() {
  myFont=loadFont("IndieFlower.ttf");
  weatherTable = loadTable("data/cambridge.csv", "header");
  rowCount = weatherTable.getRowCount();
}


function setup() {
  createCanvas(400, 400);
  rowCount = weatherTable.getRowCount();
  maxWind = max(weatherTable.getColumn("wind"));
  
  textFont(myFont);
  noLoop();
  
  


}


function draw() {
  background(240);
  
  var pi = PI
  var directions = {
  'N': -pi/2, 'E': 0, 'S': pi/2, 'W': -pi,
  'NE': -pi/4, 'SE': pi/4, 'SW': 3*pi/4, 'NW': -3*pi/4
};


  for (var r = 0; r < rowCount; r++) {
    
    var windAngle = directions[weatherTable.get(r, 'direction')]

    var str = map(weatherTable.getNum(r, "precipitation"), minInches, maxInches, 0, 8);
    var x= map(weatherTable.getNum(r, "wind"), 0, maxWind, 0, 350);
    var temp= map(weatherTable.getNum(r, "temperature"), minTemp, maxTemp, 0, 160); 
    	
    ellipseMode(CORNER);
    push();
    translate(140, 120);
    rotate(windAngle);
    fill(255, temp, 0, 40);
    stroke(255, temp, 0, 120);
    strokeWeight(str);
    ellipse(0,0, x, 65);
    //ellipseMode(CENTER);
    //fill(0);
    //ellipse(0,0,2);
    pop();
    
    
     }
  
  
  textFont(myFont);
  fill(255, 70, 0 );
  textSize(12);
  textAlign(LEFT, CENTER);
  text("w e a t h e", 250, 380);
 	text("cambridge, ma", 252, 390);
}


