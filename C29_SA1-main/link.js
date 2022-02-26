class Link {
   constructor (bodyA, bodyB){
       var lastLink = bodyA.body.bodies.length - 2
       var options = {
           bodyA: bodyA.body.bodies [lastLink],
           bodyB: bodyB, 
           stiffness: 0.05,
           length: -10
     }
     this.link2 = Matter.Constraint.create(options)

     World.add (world, this.link2)
    }
}