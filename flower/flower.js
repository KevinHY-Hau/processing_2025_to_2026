let rot_time = 5
let a1 = 180
let b1 = 75
let speed = 60
let delay1 = 50

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
  for (let i = 0; i < rot_time; i++) {
    fill(255, 209, 220, 20)
    noStroke()
    ellipse(0, 0, 2 * a1 * cos(delay1+frameCount/speed), 2 * b1 * cos(delay1+frameCount/speed))
    
    rotate(angle)
    
    e_x1 = a1 * cos(frameCount / speed) * cos(delay1+frameCount / speed)
    e_y1 = b1 * sin(frameCount / speed) * cos(delay1+frameCount / speed )      
    fill(255, random(100,250), random(100,250))
    circle(e_x1, e_y1, 10)
    circle(-e_x1, -e_y1, 10)
  }
  
  for(let i = 0; i <= TWO_PI; i += TWO_PI/60){   
    for (let j = 0; j < rot_time; j++) {
      rotate(angle)
      e_x1 = a1 * cos(i) * cos(frameCount/speed)
      e_y1 = b1 * sin(i) * cos(frameCount/speed)      
      fill(random(10,250), random(10,250), random(10,250))
      circle(e_x1, e_y1, 3) 
    }
  }
}



//t1 = np.linspace(0, 2*pi, 100)
//Ell1 = np.array([a1*np.cos(t1) , b1*np.sin(t1)])  
//R_rot1 = np.array([[cos(t_rot1) , -sin(t_rot1)],[sin(t_rot1) , cos(t_rot1)]])  

//Ell_rot1 = np.zeros((2,Ell1.shape[1]))
//for i in range(Ell1.shape[1]):
//    Ell_rot1[:,i] = np.dot(R_rot1,Ell1[:,i])
