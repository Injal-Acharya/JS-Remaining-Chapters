console.log(document.cookie)
document.cookie="injal=Acharya;"
console.log(document.cookie)

let key, value
do{
    key = prompt("Enter the key:")
    value = prompt("Enter the value for the key:")
    document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`     //encodeURIComponent() :- this function is used to encode the key and value for the cookie
                                                                                //decodeURIComponent() is used to decode the key or value back to it's original form
}while(confirm("Do you want to continue?"))

console.log(document.cookie)
