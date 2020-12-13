class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      //this.image = loadImage("polygon.png");
    }
  
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      strokeWeight(2);
      fill("lightgreen");
      rect(pos.x, pos.y, this.width, this.height);
    }
}
  