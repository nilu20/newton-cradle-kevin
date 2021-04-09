

class Rope{
    constructor(body1,body2,xOffset){
var options={

    bodyA:body1,
    bodyB:body2,
   pointB: {x:xOffset,y:0}
     
    }

    this.sling=Constraint.create(options)
    this.xOffset= xOffset
    World.add(world,this.sling)
    }
      

    
    
      
    display(){
      
            var pointA= this.sling.bodyA.position
            var pointB= this.sling.bodyB.position
            strokeWeight(3)
            stroke(240,6,15)
            line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y)
          
        }
    
}
