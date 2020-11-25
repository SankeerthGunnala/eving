var firstname = "Michal";
var lastname = "Peter";
var sayHi = {
    firstname:'Zoe',
    lastname:'Lisa',
    greet:function(){
        return `Say Hi to ${firstname} ${lastname}`
    }
}
console.log(sayHi.greet())
"Say Hi to Michal Peter"


var bob = new Object();
bob.age = 10;
bob.city = "newYork";
bob.setAge= function(newAge){
    this.age = newAge
}

bob
{age: 10, city: "newYork", setAge: ƒ}
bob.setAge(20)
undefined
bob
{age: 20, city: "newYork", setAge: ƒ}


var createCity = function(newCity){
    this.city = newCity
}

var bob = new Object();
bob.age = 10
bob.city = "newYork"
bob.setCity= createCity

var tony = new Object();
tony.age = 10
tony.city = "newYork"
tony.setCity= createCity
ƒ (newCity){
    this.city = newCity
}
bob.setCity("Texas")
undefined
bob
{age: 10, city: "Texas", setCity: ƒ}
tony.setCity("Newjersey")
undefined
tony
{age: 10, city: "Newjersey", setCity: ƒ}


