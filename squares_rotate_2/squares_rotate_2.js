let nb = 30
let rot = 3
let dim = 50
let f = 0.2


function setup() {
  createCanvas(600,600)
  rectMode(CENTER)
  angleMode(DEGREES)
  noStroke()
  
  frameRate(5)
}


function draw() {
  background(0)

  translate(width/2,height/2)
  
  let speed = round(frameCount / 100)
  
  
  for(let i = 0; i <= nb; i++){
    if(speed % 2 === 1 & i % 2 === 1){
      fill(255)
    } else {
      col1 = round(random(0,255)) 
      fill(col1)
    }
    
    f = map(i, 0, nb-1, 1, 0.2) // find i between 0 to nb - 1 and map it to between 1 to 0.2
    
    for(let j = -4; j <= 4; j++){
      for(let k = -4; k <= 4; k++){
        square(sin(speed)+ (f * dim * j)*4, cos(speed) + (f * dim * k)*4, f * dim , random(6))  
      }
    }
    rotate(sin(frameCount)+TWO_PI / rot)
  }
  
  
  for(let i = 0; i <= nb; i++){
    if(speed % 2 === 1 & i % 5 === 1){
      fill(0)
    } else {
      //col1 = round(random(0,1)) * 255 
      col2 = round(random(0,255))  
      //col3 = round(random(0,1)) * 255 
      fill(col2, 50, 100)
    }
    
    f = map(i, 0, nb-1, 1, 0.2) // find i between 0 to nb - 1 and map it to between 1 to 0.2
    
    for(let j = -4; j <= 4; j++){
      for(let k = -4; k <= 4; k++){
        square(sin(speed)+ (f * dim * j)*5, cos(speed) + (f * dim * k)*5, f * dim , random(6))  
      }
    }
    rotate(frameCount/10)
  }
  
  
}
