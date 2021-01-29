class Ball{
  constructor(x,y,r){
    var options={
    restitution:0.5,
    density:1,
    }
    this.body=Bodies.circle(x,y,r,options)
    this.x=x
    this.y=y
    this.r=r
    this.image = loadImage("superhero-01.png");
  
    World.add(world,this.body)
    
  }
display(){
  fill("red")
  
 
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2);
   
}
}