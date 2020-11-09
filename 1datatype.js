String = "Hi" 'hey' '443cdy' "46547" 'true' "false"
Number = 878 8787878798 8.88 .989
Boolean = true/false
null
undefined

///////////
Es5 >  Ecma Script 5 //Ecma-European computer manufactures association //
Es6 >  Ecma Script 6
////////

//////Es5/////
var a = "Hi"
var b = 10
var c = true

var a = "Hi"
typeof(a)
"string"

var b = 10
typeof(b)
"number"

var c = true
typeof(c)
"boolean"

var d = "1000"
typeof(d)
"string"

var d = 'ok'
typeof(d)
"string"
// my example

var a = true;     
var b = "hai";    
var c = 50;
typeof(a) + typeof(b) + typeof(c)         
"booleanstringnumber"
//
var a = 16
var b = 10
undefined
a+b
26
a-b
6
a*b
160
a/b
1.6
var a = 36
var b = 0.6
undefined
a+b
36.6
var a = 35.9
var b = 0.6
undefined
a+b
36.5
a-b
35.3
a*b
21.54
a/b
59.833333333333336
var a = 35.9
var b = 0.6
undefined
a%b
0.4999999999999999
var a = 6
var b = 8
undefined
a%b
6
9%7
2
6%10
6

//////string////

var a = "Hi"
var b = " JavaScript"
undefined
a+b (concat)
"Hi JavaScript"
a-b
NaN (not a number)
a*b
NaN
a/b
NaN
a%b
NaN


var a = "hi"
var b = 10

undefined

a+b
"hi10"
b+a
"10hi"
b+b
20
a+a
"hihi"
a-b
NaN

string+string = string
string+number = string
number+string = string
number+number = number

10+"20"+30
"1020"+30
"102030"

"10"+20+30
"1020"+30
"102030"

10+20+"30"
30+"30"
"3030"

10+"20"+30-1
"102030"-1
102029
"10"+20+30-1
102029
10+20+"30"-1
3029
10+"20"+30
"102030"
10+"20"+"50"+30+3
"102050303"
10+"20"+"50"+30+30
"1020503030"
10+"20"+"50"+30-10
10205020
10+20+"20"+"30"+50-4
30203046
10+20+"20"+"30"+50+4
"302030504"
10+20+70+"20"+"30"+50+4+63+"30"
"10020305046330"
10*20+70
270
10*"20"+70-30
240
10*"20"+70-"30"
240
10*"20"+70-"30"+50+30
320

10*"20"+70-"30"+50+30+60-8+40/2
392
"10"*"20"+"70"-"30"+"50"+"30"+"60"-"8"+"40"/"2"
20040503072
10+3+"5"*"6"+"50"+"8"+"30"-"7"