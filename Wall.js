class Walls
{
    constructor(x,y)
    {
        var properties = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,10,250,properties);
        World.add(world,this.body);
    }
    display()
    {
        fill("red");
        strokeWeight(1);
        stroke("orange");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,10,250);
    }
}