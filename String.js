class String{
    constructor(bodyA, bodyB, offsetX, offsetY){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: offsetX, y: offsetY},
            stiffness: 0.04,
            length: 10
        }

        //this.pointB = pointB;
        //this.string = Constraint.create(options);
        //World.add(world, this.string);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    display(){
            var posA = this.string.bodyA.position;
            var posB = this.string.bodyB.position;
            
            line(posA.x, posA.y, posB.x+this.offsetX, posB.y+this.offsetY);
    }
    
}