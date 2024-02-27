let student ={
    name : "Hudson",
    age : 22,
    email : "Hudson890@gmail.com",
    password : "Hudson@890",
    mobile : 6962398634,
}
console.log(student);

// Accessing the object properties
console.log(student.age);
console.log(student["age"]);
console.log(student.name);

// Replacing the value
student.password = "hudsonhornet";
console.log(student);

// Adding new properties
student.address ="India";
console.log(student);

console.log("--------------------------");

const smartphones = {
    "brand" : "Iphone",
    "model" : "14",
    "color" : ["Black", "White", "Blue", "Red","Green","Yellow","pink"],
    "price" : 70000,
    "camera" : "108MP",
    "battery" : "5000mAh",
}
console.log(smartphones);
console.log(smartphones.color[2]);
smartphones.color[2] = "SkyBlue";
console.log(smartphones);

const phones =[
    {brand : "Iphone", model :"14", color :["red","blue","white",], price :70000, camera : "108", battery :"5000mAh"},
    {brand : "Iphone", model :"14", color :["red","blue","white",], price :70000, camera : "108", battery :"5000mAh"}
    {brand : "Iphone", model :"14", color :["red","blue","white",], price :70000, camera : "108", battery :"5000mAh"}
];
console.log(phones[1].color[2]);