class Bob{
    constructor(x,y,width,height){
        var boboptions={
    
          
          'density':0.8,
          'restitution': 1,
          'friction':0.3
  
            
        }
    
      this.body= Bodies.circle(x,y,25,boboptions)
     
    //  this.width = width
    //  this.height = height
     
      World.add(world,this.body)
    }
    display(){
    
    var pos= this.body.position
    ellipseMode(CENTER)
    push ()
    fill ("blue")
    ellipse(pos.x,pos.y,50,50)
    
    pop ()
    }
    
    }