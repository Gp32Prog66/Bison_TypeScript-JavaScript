class Bison
{
    add(a:number, b:number):number 
    {
        return a + b;

    }

    subtract(a:number, b:number):number 
    {
        return a - b;
        
    }

    multiply(a:number, b:number):number 
    {
        return a * b;
        
    }

    divide(a:number, b:number):number 
    {
        if(b === 0)
        {
            throw new Error("Can't Divide by Zero")
        }
        return a / b;
        
    }
}

export default Bison;