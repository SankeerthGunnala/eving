function language(name,country){
    this.name=name;
    this.country=country;
    this.greet=function(){
        return `Say Hi to ${country}`
    }
}

var Hindi = new language('Hindi','India')
Hindi
language {name: "Hindi", country: "India", greet: ƒ}
Hindi.greet()
"Say Hi to India"

//es6
class language1{
    constructor(name,country){
        this.name = name;
        this.country=country;
    }

    greet=()=>{
        return `Say Hi`
    }
}

var english = new language1('English','UK')
english
language1 {name: "English", country: "UK", greet: ƒ}
english.greet()
"Say Hi"


class language1{
    constructor(name,country){
        this.name = name;
        this.country=country;
    }

    greet=()=>{
        return `Say Hi`
    }
}
undefined
var hindi = new language1('Hindi','English')
undefined
hindi
language1 {name: "Hindi", country: "English", greet: ƒ}
hindi.greet()
"Say Hi"
