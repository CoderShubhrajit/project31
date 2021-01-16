class Ground
{
    constructor()
    {
        var options = {
            isStatic: true,
            density: 1.0,
            friction: 0.7
        }
        this.body = Bodies.rectangle(240,670,480,10,options);
        World.add(world,this.body);
    }
    display()
    {
        fill("purple");
        strokeWeight(3);
        stroke("pink");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,480,10);
    }
}