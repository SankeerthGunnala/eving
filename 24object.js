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
undefined
typeof(movies)
"object"
movies[0].name
"Mad Max"


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

movies.map((data) => {
  return data.name
})

["Mad Max", "Avenger", "Jab We Met"]


var movie =  {
    "name":"Mad Max",
    "rating":3.4,
    "lang":"Eng"
}

for(a in movies){
    console.log(a)
}
