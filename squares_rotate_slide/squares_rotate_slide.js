let nb = 30
let rot = 3
let dim = 350
let f = 1
let fmin = 0.5


function setup() {
  createCanvas(500,500)
  rectMode(CENTER)
  angleMode(DEGREES)
  sliderNb = createSlider(2,50,nb,1)
  sliderRot = createSlider(0,180,rot,1)
  sliderFmin = createSlider(0, 1, fmin, 0.02)
}


function draw() {
  nb = sliderNb.value()
  rot = sliderRot.value()
  fmin = sliderFmin.value()
  background(0)
  translate(width/2,height/2)
  noFill()
  stroke(255)
  
  for(let i = 0; i < nb; i++){
    f = map(i,0,nb-1,1,fmin) // find i between 0 to nb - 1 and map it to between 1 to 0.2
    print(f)
    square(0,0,f * dim)
    rotate(rot)
  }

}
