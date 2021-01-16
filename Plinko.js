class Obstacles
{
    constructor(x,y)
    {
        var properties = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,10,properties);
        World.add(world,this.body);
    }
    display()
    {
        push();
        fill("black");
        strokeWeight(5);
        stroke("lightgreen");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10,10);
        pop();
    }
}