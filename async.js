// async function
async function test(){
    return "Hiii";
}
console.log(test());

// async function - II
async function test(){
    return "Hello";
}
test(). then((result) =>{
    console.log(result)
});

//await Operator
async function test(){
    console.log(" 2 : Message")
    console.log(" 3 : Message");
    console.log(" 4 : Message");

}
console.log(" 1 : Message");
test();
console.log(" 5 : Message");

// after running this program we put AWAIT operator in 2nd number console.log

async function test(){
    console.log(" 2 : Message")
    await console.log(" 3 : Message");
    console.log(" 4 : Message");

}
console.log(" 1 : Message");
test();
console.log(" 5 : Message");


