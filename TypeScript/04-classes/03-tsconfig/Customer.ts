class Customer{
    private _firstName: String;
    private _lastName: String;

    constructor(firstName:String, lastName:String){
        this.firstName = firstName;
        this.lastName = lastName;
    } 

    public get firstName() : String{
        return this._firstName;
    }

    public get lastName() : String{
        return this._lastName;
    }

    public set firstName(firstName:String){
        this._firstName = firstName;
    }

    public set lastName(value: String){
        this._lastName = value;
    }
}

let myCustomer = new Customer("ahmet", "yiğit");

console.log(`That is class data ${myCustomer.firstName} ${myCustomer.lastName}`)