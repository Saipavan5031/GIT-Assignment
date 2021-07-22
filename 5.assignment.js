class Department
{
    constructor(dp_name)
    {
        this.dp_name=dp_name;
    }
    getDepartmentNmae()
    {
        console.log(`${this.dp_name}`);
    }
}
class Employee extends Department
{
    constructor(dp_name)
    {
        super(dp_name);
    }
    getFN()
    {
        
      console.log('this is the first name');  

    }
    getLN()
    {
        
        console.log('this is the last name');
    }

}
let a= new Employee('saipavan');
a.getDepartmentNmae();
a.getFN();
a.getLN();