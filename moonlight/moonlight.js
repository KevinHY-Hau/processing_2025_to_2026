/*
 * @name Geometries
 * @arialabel Six 3D shapes in neon gradient rotating on a white background. Shapes include cube, cylinder, ring, pyramid, sphere, and a plane.
 * @description There are six 3D primitives in p5 now.
 */
function setup() {
  createCanvas(500, 500, WEBGL)
  frameRate(36)
  angleMode(DEGREES)
  
}

function draw() {
  background(0)

  //push();
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //plane(70);
  //pop();
  
  
  for(i = -100; i <= 100; i += 100){
    
    rotateY(frameCount * 0.05)
 
    for(j = -100; j <= 100; j += 100){
      
      rotateX(frameCount * 0.005)
      
      for(k = -100; k <= 100; k += 100){
        rotateZ(frameCount * 0.005)
        push()
        translate(i, j, k)
        //sphere(5 + 2 * sin(TWO_PI * (frameCount % 60) * 0.1))
        //box(50, 50, 50)
        pointLight(200, 180, 100, 100 + 20 * sin(frameCount), 100 + 20 * sin(frameCount), 0)
        specularMaterial(250, 255, 0)
        sphere(20, 64)
        pop()
      }
    }
  }
  
  //translate(0, 0, 0);
  //push();
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //box(70, 70, 70);
  //pop();

  //translate(240, 0, 0);
  //push();
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //cylinder(70, 70);
  //pop();

  //translate(-240 * 2, 200, 0);
  //push();
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //cone(70, 70);
  //pop();

  //translate(240, 0, 0);
  //push();
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //torus(70, 20);
  //pop();

  //translate(240, 0, 0);
  //push();
  //rotateZ(frameCount * 0.01);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  //sphere(70);
  //pop();
}
