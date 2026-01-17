let rot_time = 3
let a1 = 150
let b1 = 75
let speed = 120
let delay1 = 0
let min_dist = 0.5
let size = 0.4

function setup() {
  createCanvas(500, 500)
}

function draw(){
  
  background(50)
    
  // Calculate the angle to rotate.
  let angle = TWO_PI / rot_time  

  // Move the origin to the center.
  translate(250, 250)
   
  // Draw the flower.
  
  cos_frame_speed = cos(frameCount/speed)
  sin_frame_speed = sin(frameCount/speed)

  // middle ellipse
  for(let i = 0; i <= TWO_PI; i += TWO_PI/60){   
    for (let j = 0; j < rot_time; j++) {
      rotate(angle)
      e_x1 = a1 * (cos(i) * cos_frame_speed)
      e_y1 = b1 * (sin(i) * cos_frame_speed)      
      fill(random(10,250), random(10,250), random(10,250))
      noStroke()
      circle(e_x1, e_y1, 2)     
    }
  }
  
  // circle going around ellipse for the middle
  for (let i = 0; i < rot_time; i++) {
    noStroke()
    rotate(angle)
    
    e_x1 = a1 * (cos_frame_speed * cos(delay1+frameCount / speed))
    e_y1 = b1 * (sin_frame_speed * cos(delay1+frameCount / speed))      
    fill(255, random(100,250), random(100,250))
    circle(e_x1, e_y1, 5)
    circle(-e_x1, -e_y1, 5)
  }
  
  
  // ellipse outside
  for(let i = 0; i <= TWO_PI; i += TWO_PI/60){   
    for (let j = 0; j < rot_time; j++) {
      rotate(angle)
      e_x1 = a1 * (min_dist + cos(i) * cos_frame_speed)
      e_y1 = b1 * (min_dist + sin(i) * cos_frame_speed)      
      fill(random(10,250), random(10,250), random(10,250))
      noStroke()
      circle(e_x1, e_y1, 2)
      circle(-e_x1, -e_y1, 2)
    }
  }
  
  // circle going around ellipse outside
  for (let i = 0; i < rot_time; i++) {
    noStroke()
    rotate(angle)
    
    e_x1 = a1 * (min_dist + cos_frame_speed * cos(delay1+frameCount / speed))
    e_y1 = b1 * (min_dist + sin_frame_speed * cos(delay1+frameCount / speed))      
    fill(255, random(100,250), random(100,250))
    circle(e_x1, e_y1, 5)
    circle(-e_x1, -e_y1, 5)
  }
  
  // ellipse smaller
  for(let i = 0; i <= TWO_PI; i += TWO_PI/20){   
    for (let j = 0; j < rot_time; j++) {
      rotate(angle)
      e_x1 = size * (a1 * (min_dist + cos(i) * cos_frame_speed))
      e_y1 = size * (b1 * (min_dist + sin(i) * cos_frame_speed))      
      fill(random(10,250), random(10,250), random(10,250))
      noStroke()
      circle(e_x1, e_y1, 2)
    }
  }
  
  for (let i = 0; i < rot_time; i++) {
    //ellipse(0, 0, 2 * a1 * cos(delay1+frameCount/speed), 2 * b1 * cos(delay1+frameCount/speed)) 
    rotate(angle)
    
    e_x1 = size * (min_dist + a1 * cos_frame_speed * cos(2 * delay1+frameCount / (speed)))
    e_y1 = size * (min_dist + b1 * sin_frame_speed * cos(2 * delay1+frameCount / (speed)))      
    
    noStroke()
    fill(255, random(100,250), random(100,250))
    circle(-e_x1, -e_y1, 5)
    circle(e_x1, e_y1, 5)
  }
  
  // circles going circle in both direction
  for (let i = 0; i < rot_time; i++) {
    stroke(255, random(100,250), random(100,250))
    noFill()
    
    circle( a1 * cos_frame_speed,  b1 * sin_frame_speed, 6 * cos_frame_speed)
    circle(-a1 * cos_frame_speed, -b1 * sin_frame_speed, 6 * cos_frame_speed)
    circle( a1 * cos_frame_speed, -b1 * sin_frame_speed, 6 * cos_frame_speed)
    circle(-a1 * cos_frame_speed,  b1 * sin_frame_speed, 6 * cos_frame_speed)
    
    a2 = size * (min_dist + a1 * cos_frame_speed)
    b2 = size * (min_dist + b1 * sin_frame_speed)
    stroke(255, random(100,250), random(100,250))
    
    circle( a2,  b2, 6 * cos_frame_speed)
    circle(-a2, -b2, 6 * cos_frame_speed)
    fill(random(100,250),random(100,250),random(100,250))
    circle( a2, -b2, 6 * cos_frame_speed)
    circle(-a2,  b2, 6 * cos_frame_speed)
    
    rotate(angle)
    //circle(0.4 * a1 * cos(frameCount/speed), 0.4 * b1 * cos(frameCount/speed), 10* cos(frameCount/speed))
    //circle(-0.4 * a1 * cos(frameCount/speed), -0.4 * b1 * cos(frameCount/speed), 10* cos(frameCount/speed))
  }
  
  // smaller ellipse of paddle
  for(let i = 0; i <= TWO_PI; i += TWO_PI/20){   
    for (let j = 0; j < rot_time; j++) {
      rotate(angle)
      e_x1 = 0.5 * (a1 * (1 + cos(i) * cos_frame_speed))
      e_y1 = 0.5 * (b1 * (1 + sin(i) * cos_frame_speed))      
      fill(random(10,250), random(10,250), random(10,250))
      noStroke()
      circle(e_x1, e_y1, 2)
      circle(-e_x1, -e_y1, 2) 
    }
  }
  
  
}


//function getRandomInt(max) {
//  return Math.floor(Math.random() * max);
//}

//t1 = np.linspace(0, 2*pi, 100)
//Ell1 = np.array([a1*np.cos(t1) , b1*np.sin(t1)])  
//R_rot1 = np.array([[cos(t_rot1) , -sin(t_rot1)],[sin(t_rot1) , cos(t_rot1)]])  

//Ell_rot1 = np.zeros((2,Ell1.shape[1]))
//for i in range(Ell1.shape[1]):
//    Ell_rot1[:,i] = np.dot(R_rot1,Ell1[:,i])
