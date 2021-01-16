class Particles
{
    constructor(x,y,r)
    {
        var properties = {
            isStatic: false,
            restitution: 0.4
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r-8,properties);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill(this.color);
        //ellipseMode(RADIUS);
        //ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}