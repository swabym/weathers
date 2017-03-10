var centerX = 207;
var centerY = 520;
var centerBaseline = 225;

var outerRadius = 120;
var innerRadius = 85;


var conditions = [
  { 'name': 'rainy', 'days': 4, 'color': 0 },
  { 'name': 'cloudy', 'days': 9, 'color': 120 },
  { 'name': 'sunny', 'days': 17, 'color': 240 } 
];
var dayCount = 30;


function preload() {
  img = loadImage("Asset_2@2x.png");
  regFont = loadFont("PoiretOne-Regular.ttf");
  scrFont= loadFont("GreatVibes-Regular.ttf");
 

}


function setup() {
  createCanvas(414, 736);
  noLoop();
  background(255);
  imageMode(CENTER);
  image(img, width/2+15,150);
  textFont(regFont);
  textFont(scrFont);

}


function draw() {
  
  fill(0);

  
  noStroke();
  ellipseMode(RADIUS);
  var angleStart = -HALF_PI;  // start at the top 
  
  for (var c = 0; c < conditions.length; c++) {
    var entry = conditions[c];
    fill(entry.color);
    var wedgeSize = map(entry.days, 0, dayCount, 0, TAU);
    var angleStop = angleStart + wedgeSize;
    arc(centerX, centerY, outerRadius, outerRadius, angleStart, angleStop);
    angleStart = angleStop;
  }
  
    //rain
  stroke(0);
  line(width/2+75, height/2+5, width/2+70, height/2+10);
  line(width/2+80, height/2+15, width/2+70, height/2+25);
  line(width/2+95, height/2+10, width/2+90, height/2+15);

  //sun
  noStroke();
  ellipseMode(CENTER);
  fill(255, 235, 124, 200);
  ellipse(width/4+30, 2*height/3, 65);
  //cloud
  fill(221, 255, 255);
  ellipse(3*width/4-12, 2*height/3+40, 50, 25);
  ellipse(3*width/4-15, 2*height/3+32, 30);
  // knock a hole out of the middle
  ellipseMode(RADIUS);
  fill(255);
	ellipse(centerX, centerY, innerRadius, innerRadius);
  
  
  //textAlign(CENTER);
  noStroke();
  fill(0);
   textSize(20);
  textFont(scrFont);
  text("June 2016", centerX, 690);
  textSize(16);
  textFont(regFont);
  text("Cambridge, MA", centerX+12, 708);
 
}
