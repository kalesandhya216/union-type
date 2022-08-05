var cl = console.log;
// type inference
var a = 10;
// b : string
var b = 'Hello';
// c : any
var c;
var d = 123; // typeof d == number 123
function combine(n1, n2, convertType) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (convertType === 'as-num') {
        return +result;
    }
    else {
        return result.toString();
    }
    // return result
}
cl(combine(20, 30, 'as-num'), typeof combine(20, 30, 'as-num'));
cl(combine(10, '20', 'as-num'), typeof combine(10, '20', 'as-num'));
cl(combine('15', '15', 'as-string'), typeof combine('15', '15', 'as-string'));
var combine1 = combine(20, 30, 'as-num');
cl(combine1, typeof combine1);
// function return type 
function add(n1, n2) {
    return n1 + n2;
}
cl(add(10, 15));
function sum(n1, n2) {
    return (n1 + n2).toString();
}
cl(sum(15, 15));
// void
function Add(n1, n2) {
    cl(n1 + n2);
}
Add(70, 30);
// ======================= Ex. 1) ======================
// type >> 
var p = true;
p = false;
// p = 20;
// p = 'hello';
var q;
q = 'hello typescript';
q = 15;
q = true;
var ab = 500; // typeof ab >> number 500
// union type 
// custom type / type alias
function combineNumStr(n1, n2, convertResultType) {
    // return n1*n2;
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
        // return result;
    }
    else {
        result = n1.toString() + n2.toString();
        // return result;
    }
    if (convertResultType === 'as-num') {
        return +result;
    }
    else {
        return result.toString();
    }
    // return result;
}
cl(combineNumStr(10, 2, 'as-num'), typeof combineNumStr(10, 2, 'as-num'));
cl(combineNumStr('5', 20, 'as-num'), typeof combineNumStr('5', 20, 'as-num'));
cl(combineNumStr('15', '15', 'as-str'), typeof combineNumStr('15', '15', 'as-str'));
// function return type 
function mul(n1, n2) {
    return n1 * n2;
}
cl(mul(10, 10));
function add1(n1, n2) {
    // return (n1+n2).toString();
    return n1.toString() + n2.toString();
}
cl(add1(15, 5));
// void >> cannot use return keyword in void type
function div(n1, n2) {
    cl(n1 / n2);
}
div(50, 2);
// ======================= Ex. 2) ======================
// type inference
// x : number
var x = 25;
// x = true;
var y = '54';
// y = 22;
var r;
// union type 
function combine2(n1, n2, convertRestype) {
    // return n1+n2;
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 * n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (convertRestype === 'as-num') {
        return +result;
    }
    else {
        return result.toString();
    }
    // return result;
}
cl(combine2(15, 10, 'as-num'), typeof combine2(15, 10, 'as-num'));
cl(combine2(5, '20', 'as-num'), typeof combine2(5, '20', 'as-num'));
cl(combine2('10', '30', 'as-str'), typeof combine2('10', '30', 'as-str'));
// function return type 
function div1(n1, n2) {
    return n1 / n2;
}
cl(div1(500, 20));
function sub(n1, n2) {
    return (n1 - n2).toString();
}
cl(sub(50, 20));
// void
function add2(n1, n2) {
    cl(n1 + n2);
}
add2(50, 220);
// ======================= Ex. 3) ======================
// type inference
var place = 'nanded';
place = 'hello';
// place = 30;
var age = 30;
// age = 'thirty';
var v;
// union type
function combine3(n1, n2, convertrestype) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
        // return result;
    }
    else {
        result = n1.toString() + n2.toString();
        // return result;
    }
    if (convertrestype === 'as-num') {
        return +result;
    }
    else {
        return result.toString();
    }
}
cl(combine3(70, 60, 'as-num'), typeof combine3(70, 60, 'as-num'));
cl(combine3(40, '40', 'as-num'), typeof combine3(40, '40', 'as-num'));
cl(combine3('25', '35', 'as-str'), typeof combine3('25', '35', 'as-str'));
// function return type 
function sum1(n1, n2) {
    return n1 + n2;
}
cl(sum1(100, 150));
function sum2(n1, n2) {
    return n1.toString() + n2.toString();
}
cl(sum2(5, 15));
// void
function mul_2(n1, n2) {
    cl(n1 * n2);
}
mul_2(10, 35);
// ======================= Ex. 4) ======================
// type inference
var w;
w = 'hello typescript';
w = 15;
w = true;
var pq = null;
// pq = 'typescript';
// pq = false;
// mn : number
var mn = 500;
var db = 450; // typeof db = number 450
// union type
function comb_num_str(n1, n2, convertRestype) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
        // return result;
    }
    else {
        result = n1.toString() + n2.toString();
        // return result;
    }
    if (convertRestype === 'as-num') {
        return +result;
    }
    else {
        return result.toString();
    }
    // return result;
}
cl(comb_num_str(40, 30, 'as-num'), typeof comb_num_str(40, 30, 'as-num'));
cl(comb_num_str('20', 4, 'as-num'), typeof comb_num_str('20', 4, 'as-num'));
cl(comb_num_str('25', '45', 'as-str'), typeof comb_num_str('25', '45', 'as-str'));
// function return type
function divison(n1, n2) {
    return n1 / n2;
}
cl(divison(300, 10));
function Sum(n1, n2) {
    // return (n1+n2).toString();
    return n1.toString() + n2.toString();
}
cl(Sum(11, 15));
// void
function sumOf2(n1, n2) {
    cl(n1 + n2);
}
sumOf2(300, 250);
