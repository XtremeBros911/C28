class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA = bodyA;
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);            
        }
    }
    attach(body){
        this.launcher.bodyA= body;
    }
    fly(){
        this.launcher.bodyA= null;        
    }
}