'use strict';
// その１
function fib(n){
    if (n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

// その２(連想配列)
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib2(n){
 if(memo.has(n)){
     return memo.get(n);
 }
 const value = fib2(n - 1) + fib2(n - 2);
 memo.set(n, value);
 return value;
}

// その３ (配列)
const v = [0, 1]
function fib3(n){
    if(n < v.length){
        return v[n];
    }

    const value = fib3(n - 1) + fib3(n - 2)
    v.push(value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++){
    // console.log(fib(i));
    // console.log(fib2(i));
    console.log(fib3(i));
}
