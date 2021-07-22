class Myclass1
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }

    static distance(x,y)
    {
        const da=x.a-y.a;
        const db=x.b-y.b;
        return Math.hypot(da,db);
    }
}
const p1=new Myclass1(5,5);
const p2=new Myclass1(10,10);
console.log(p1.distance);//undefined
console.log(p2.distance);//undefined

console.log(Myclass1.distance(p1,p2));//7.01

// STATIC METHODS CAN NOT BE ACCESSED USING INSTANCE OF CLASS
//CAN BE ACCESSED BY USING CLASS NAME 