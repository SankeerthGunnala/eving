var moviename = "Tanaji"
var movierating = 4.8
var movielang = "hindi"


var moviename1 = "ohbaby"
var movierating1 = 4.5
var movietype = "emotion"

/////Liternal Notation

var movies ={
    name: "avengers"
    rating: 4.5
    lang: "Eng"
}
movies.name
"avengers"
movies["lang"]
"Eng"
movies["rating"]
4.5
movies.lang
"Eng"
movies.rating
4.5
movies.inds = "hollywood"
"hollywood"
movies
{name: "avengers", rating: 4.5, lang: "Eng", inds: "hollywood"}
movies.type = "Action"
"Action"
movies
{name: "avengers", rating: 4.5, lang: "Eng", inds: "Hollywood", type: "Action"}
delete movies.lang
true
movies
{name: "avengers", rating: 4.5, inds: "Hollywood", type: "Action"}

movies["type"] = "Action"
"Action"
movies["inds"] = "Hollywood"
"Hollywood"
movies["heroname"] = "Thor"
"Thor"
movies
{name: "avengers", rating: 4.5, lang: "Eng", type: "Action", inds: "Hollywood", …}
heroname: "Thor"
inds: "Hollywood"
lang: "Eng"
name: "avengers"
rating: 4.5
type: "Action"


var movie =  {
    "name":"Mad Max",
    "rating":3.4,
    "lang":"Eng"
}
undefined
for(a in movie){
    console.log(movie[a])
}
 Mad Max
 3.4
Eng
undefined
for(a in movie){
    console.log(a)
}
 name
 rating
 lang
///////

var test = [{a:1},{b:2},{c:3}]

for(i=0;i>test.length;i++)
for(key in text[i]){
    console.log(text[i][key])
}
1
2
3


var test = [{a:1},{b:2},{c:3},{d:4}]

for(i=1;i<test.length;i++){
    for(key in test[i]){
        console.log(test[i][key])
    }
}
 2
 3
 4

 var movies = [
    {
        "name":"Mad Max",
        "rating":3.4,
        "lang":"Eng"
    },
    {
        "name":"Avenger",
        "rating":4.3,
        "lang":"Eng"
    },
    {
        "name":"Jab We Met",
        "rating":4.8,
        "lang":"Hindi"
    }
]

for(i=0;i<movies.length;i++){
    for(key in movies[i]){
        console.log(key)
    }
}

name
rating
lang
name
rating
lang
name
rating
lang
var movies = [
    {
        "name":"Mad Max",
        "rating":3.4,
        "lang":"Eng"
    },
    {
        "name":"Avenger",
        "rating":4.3,
        "lang":"Eng"
    },
    {
        "name":"Jab We Met",
        "rating":4.8,
        "lang":"Hindi"
    }
]

for(i=0;i<movies.length;i++){
    for(key in movies[i]){
        console.log(movies[i][key])
        //console.log(key)
    }
}
Mad Max
VM2636:21 3.4
VM2636:21 Eng
VM2636:21 Avenger
VM2636:21 4.3
VM2636:21 Eng
VM2636:21 Jab We Met
VM2636:21 4.8
VM2636:21 Hindi

var calc={
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}
calc.sum(10,20)
30
calc.sub(10,20)
-10

var calc={
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b},
    mul:function(a,b){return a*b},
    div:(a,b)=>{return a/b},
}
undefined
calc.div(20,5)
4
calc.mul(20,5)
100

var calc={
    sum:function(a,b,c){return a+b+c},
    sub:(a,b,c)=>{return a-b-c},
    mul:function(a,b,c){return a*b*c},
    div:(a,b,c)=>{return a/b/c},
}
undefined
calc.sum(2,5,3)
10
calc.sub(2,5,3)
-6
calc.mul(2,5,3)
30


var dbQuery = {
    find:(table)=> {return `Select * from ${table}`},
    insert:(table,data) => { return `Insert into ${table} name,city values(${data.name}, ${data.city})`}
}

dbQuery.find('Emp')
"Select * from Emp"
dbQuery.insert('Student',{name:'Nikita',city:'Amsterdam'})
"Insert into Student name,city values(Nikita, Amsterdam)"

