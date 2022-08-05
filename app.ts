
let cl = console.log;


// type inference

let a = 10;

// b : string

let b = 'Hello';


// c : any
let c;

const d = 123; // typeof d == number 123

// union type 


// custom type / type alias

type Combination = (number | string);
type ConvertDescr = 'as-num' | 'as-string';

function combine(n1 : Combination, n2 : Combination, convertType : ConvertDescr){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1+n2;
    }else{
        result = n1.toString() + n2.toString();
    }

    if(convertType === 'as-num'){
        return +result;
    }else{
        return result.toString();
    }
    // return result
}

cl(combine(20,30, 'as-num'), typeof combine(20,30, 'as-num'));
cl(combine(10, '20', 'as-num'), typeof combine(10, '20', 'as-num'));
cl(combine('15', '15', 'as-string'), typeof combine('15', '15', 'as-string'));



let combine1 = combine(20,30, 'as-num');
cl(combine1, typeof combine1);

// function return type 

function add(n1 : number, n2 : number) : number{
    return n1+n2;
}

cl(add(10, 15));

function sum(n1 : number, n2 : number) : string{
    return (n1+n2).toString();
}

cl(sum(15,15));

// void

function Add(n1 : number, n2 : number) : void{
    cl(n1 + n2);
}

Add(70, 30);


// ======================= Ex. 1) ======================


// type >> 

let p = true; 

p = false;
// p = 20;
// p = 'hello';

let q;

q = 'hello typescript';
q = 15;
q = true;

const ab = 500; // typeof ab >> number 500

// custom type / alias type

type CombNumStr = number | string;
type ConvertDes = 'as-num'| 'as-str';

// union type 

// custom type / type alias


function combineNumStr(n1 : CombNumStr, n2 : CombNumStr, convertResultType : ConvertDes){
    // return n1*n2;
    let result;

    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1+n2;
        // return result;

    }else{
        result = n1.toString()+n2.toString();
        // return result;
    }

    if(convertResultType === 'as-num'){
        return +result;
    }else{
        return result.toString();
    }

    // return result;
}


cl(combineNumStr(10, 2, 'as-num'), typeof combineNumStr(10, 2, 'as-num'));
cl(combineNumStr('5', 20, 'as-num'), typeof combineNumStr('5', 20, 'as-num'));
cl(combineNumStr('15', '15', 'as-str'), typeof combineNumStr('15', '15', 'as-str'));


// function return type 


function mul(n1 : number, n2 : number) : number {
    return n1*n2;
}

cl(mul(10, 10));

function add1(n1 : number, n2 : number) : string {
    // return (n1+n2).toString();
    return n1.toString() + n2.toString();
}

cl(add1(15, 5));


// void >> cannot use return keyword in void type

function div(n1 : number, n2 : number) : void{
    cl(n1/n2);
}

div(50, 2);


// ======================= Ex. 2) ======================

// type inference

// x : number

let x = 25;

// x = true;

let y = '54';

// y = 22;

let r;

// custom type / type alias

type Comb_numStr = number | string;
type Convert_des = 'as-num' | 'as-str';


// union type 


function combine2(n1 : Comb_numStr, n2 : Comb_numStr, convertRestype : Convert_des){
    // return n1+n2;
    let result;

    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1*n2;
    }else{
        result = n1.toString() + n2.toString();
    }

    if(convertRestype === 'as-num'){
        return +result;
    }else{
        return result.toString();
    }

    // return result;
}

cl(combine2(15, 10, 'as-num'), typeof combine2(15, 10, 'as-num'));
cl(combine2(5, '20', 'as-num'), typeof combine2(5, '20', 'as-num'));
cl(combine2('10', '30', 'as-str'), typeof combine2('10', '30', 'as-str'));



// function return type 

function div1(n1 : number, n2 : number) : number{
    return n1/n2;
}

cl(div1(500, 20));


function sub(n1 : number, n2 : number) : string{
    return (n1-n2).toString();
}

cl(sub(50, 20));


// void


function add2(n1 : number, n2 : number) : void{
    cl(n1+n2);
}

add2(50,220);


// ======================= Ex. 3) ======================

// type inference


let place = 'nanded';

place = 'hello';
// place = 30;


let age = 30;

// age = 'thirty';


let v;

// custom type/type alias

type Combofnumstr = number | string;
type Convert_Description = 'as-num' | 'as-str';


// union type

function combine3(n1 : Combofnumstr, n2 : Combofnumstr, convertrestype : Convert_Description){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1+n2;
        // return result;
    }else{
        result = n1.toString()+n2.toString();
        // return result;
    }

    if(convertrestype === 'as-num'){
        return +result;
    }else{
        return result.toString();
    }
}

cl(combine3(70, 60, 'as-num'), typeof combine3(70, 60, 'as-num'));
cl(combine3(40, '40', 'as-num'), typeof combine3(40, '40', 'as-num'));
cl(combine3('25', '35', 'as-str'), typeof combine3('25', '35', 'as-str'));


// function return type 


function sum1(n1 : number, n2 : number){
    return n1+n2;
}

cl(sum1(100, 150));

function sum2(n1 : number, n2 : number) : string{
    return n1.toString() + n2.toString();
}

cl(sum2(5, 15));

// void

function mul_2(n1 : number, n2 : number) : void{
    cl(n1*n2);
}

mul_2(10, 35);


// ======================= Ex. 4) ======================

// type inference

let w;

w = 'hello typescript';
w = 15;
w = true;


let pq = null;

// pq = 'typescript';
// pq = false;

// mn : number

let mn = 500;


const db = 450; // typeof db = number 450

// custom type / type alias

type CombNum_Str = number | string;
type Convert_Des = 'as-num' | 'as-str';

// union type

function comb_num_str(n1 : CombNum_Str, n2 : CombNum_Str, convertRestype : Convert_Des){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number'){
        result = n1+n2;
        // return result;
    }else{
        result = n1.toString()+n2.toString();
        // return result;
    }

    if(convertRestype === 'as-num'){
        return +result;
    }else{
        return result.toString();
    }

    // return result;
}


cl(comb_num_str(40, 30, 'as-num'), typeof comb_num_str(40, 30, 'as-num'));
cl(comb_num_str('20', 4, 'as-num'), typeof comb_num_str('20', 4, 'as-num'));
cl(comb_num_str('25', '45', 'as-str'), typeof comb_num_str('25', '45', 'as-str'));


// function return type

function divison(n1 : number, n2 : number) : number{
    return n1/n2;
}

cl(divison(300, 10));


function Sum(n1 : number, n2 : number) : string{
    // return (n1+n2).toString();
    return n1.toString()+n2.toString();
}

cl(Sum(11, 15));


// void

function sumOf2(n1 : number, n2 : number) : void {
    cl(n1+n2);
}

sumOf2(300, 250);