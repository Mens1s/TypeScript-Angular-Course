class Customer{
    firstName: String;
    lastName: String;

    constructor(firstName:String, lastName:String){
        this.firstName = firstName;
        this.lastName = lastName;
    } 

}

let myCustomer = new Customer("ahmet", "yiğit");

console.log(`That is class data ${myCustomer.firstName} ${myCustomer.lastName}`)