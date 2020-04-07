function Person(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;

}


let father = new Person("Murtaza",25,"green")
let mother = new Person("Rahel", 50,"blue")
Person.prototype.getName = function(){
    return "Name : " + this.name;
}
console.log(father.getName())
console.log(mother.getName())

