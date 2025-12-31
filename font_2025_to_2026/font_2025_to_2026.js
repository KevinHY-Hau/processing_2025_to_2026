let font
let points202
let points1, points2,points3,points4,points5,points6

let interval = 40
let start = 120

function preload(){
  font = loadFont("Lato-Regular.ttf")
}

function setup() {
  createCanvas(400,200)
  points202 = font.textToPoints("202", 20, 150, 150)
  points1 = font.textToPoints("1", 140, 150, 150)
  points2 = font.textToPoints("2", 140, 150, 150)
  points3 = font.textToPoints("3", 140, 150, 150)
  points5 = font.textToPoints("5", 280, 150, 150)
  points6 = font.textToPoints("6", 280, 150, 150)
}

function draw() {
  background(120)
  noStroke()
  
  // Countdown 3 2 1
  if(frameCount > start & frameCount < start + interval ){
    fill(255)
    for(let i = 0; i < points3.length; i++){
      circle(points3[i].x, points3[i].y, 10)
    }
  }
  if(frameCount > start + interval & frameCount < start + interval * 2 ){
    fill(255)
    for(let i = 0; i < points2.length; i++){
      circle(points2[i].x, points2[i].y, 10)
    }
  }
  if(frameCount > start + interval * 2 & frameCount < start + interval * 3 ){
    fill(255)
    for(let i = 0; i < points1.length; i++){
      circle(points1[i].x, points1[i].y, 10)
    }
  }
  
  // 202
  if(frameCount > start + interval * 3 || frameCount < start){
    for(let i = 0; i < points202.length; i++){
      if(frameCount > start + interval * 3){
        fill(random(100,255),random(100,255),random(100,255))
      }
      if(frameCount < start){
        fill(255)
      }
      circle(points202[i].x, points202[i].y, 5) 
    }
  }
  
  // 5
  if(frameCount < start){
    for(let i = 0; i < points5.length; i++){
      fill(255)
      circle(points5[i].x, points5[i].y, 5)  
    }
  }
  
  // 6
  if(frameCount > start + interval * 3){
    for(let i = 0; i < points6.length; i++){  
      fill(random(100,255),random(100,255),random(100,255))
      circle(points6[i].x, points6[i].y, 5) 
    }
    
    // draw rect around
    for(let i = 0; i <= width / 20; i++){
      fill(random(200,255),random(200,255),random(200,255))
      circle(i * 20, 0, 15)
      fill(random(200,255),random(200,255),random(200,255))
      circle(i * 20, height, 15)
    }
    for(let i = 0; i <= height / 20; i++){
      fill(random(200,255),random(200,255),random(200,255))
      circle(0, i * 20, 15)
      fill(random(200,255),random(200,255),random(200,255))
      circle(width, i * 20, 15)
    }
    
  }
  
  if(frameCount > 1000){
    redraw()
    frameCount = 0
  }
}
