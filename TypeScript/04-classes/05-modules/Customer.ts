export class Customer{


    constructor(private _firstName:String, private _lastName:String){
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
