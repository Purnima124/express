// var obj={
// length:20,
// height:35,
// }
// if('breadth' in obj===false){
//     obj.breadth =12;}
// console.log(obj.breadth)

// if ("cat"==="dog"){
// var outcome="if block";
// console.log("yes")
// }else{
// var outcome="else blog"
// console.log("no")
// }
// var x=0;
// function fun(){
// ++x;
// this.x=x
// return x;
// }
// var bar =new fun ;
// console.log(bar.x)
// function height(){
// var height = 123.56;
// var type =(height>=190)? "tall":"short";
// return type;}
// let sum =0;
// const a=[1,2,3];
// a.forEach(getSum);
// console.log(sum)
// function getSum(ele) {
//     sum +=ele;
// }


// (function(){
//     setTimeout(()=>console.log(1),2000);
//     console.log(2);
//     setTimeout(()=>console.log(3),0);
//     console.log(4)

// })();

// function job(){
//     return new Promise(function(resolve,reject){
//         reject()
//     })
// }
// let promise=job();
// promise
// .then(function(){
//     console.log('Success 1')
// })
// .then(function(){
//     console.log('Success 2')
// })
// .then(function(){
//     console.log('Success 3')
// })
// .then(function(){
//     console.log('Success 4')
// })

async function f(){
    let result='first';
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('done'),1000);
    })
    result=await promise;
    console.log(result)
}
f();
