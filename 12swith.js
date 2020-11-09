> for multiple condition and multiple output(IF else)
> for one condition and one output(Ternary)
> for one condition and multiple output(switch)

var a = 10
switch(a%2){
    case 0:
        console.log(`Number ${a} is even`);
        break;
    case 1:
        console.log(`Number ${a} is odd`);
        break;
    default:
        console.log(`Number ${a} is unkown`);
}
var name = 'sankeerth'
switch(name){
    case 'John':
        console.log(`${name} is admin`);
        break;
    case 'Alvin':
        console.log(`${name} is Super Admin`);
        break;
    default:
        console.log(`${name} is unknown`);
}

var Banquethall = '400 members'
switch(Banquethall){
    case '100 members':
        console.log(`${Banquethall} AR Gardens`);
        break;
    case '500 members':
        console.log(`${Banquethall} Sarayu Gardens`);
        break;
    default:
        console.log(`${Banquethall} Apna Gardens`);
}

switch(new Date().getDay()){
    case 1:
        console.log(`Today is monday`);
        break;
    case 5:
        console.log(`Today is Friday`);
        break;
    default:
        console.log(`Invalid Input`);
}

