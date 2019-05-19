export interface User{
    id:string; 
    first_name:String;
    last_name:String;
    email:String;
    phone_number:String;
    username:String;
    password:String;
    address:{
        state:String;
        city:String;
        zipcode:String;
    }
    
    role:String;

}

let evilResponseProps = Object.keys(this.address);
let goodResponse = [];
for(let a of goodResponse){
    goodResponse.push(goodResponse[a]);
}
    