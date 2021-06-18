//default parameter on function
function add(num1,num2=9){
    // num2=num2 || 0;

    // if(num2 ==undefined){
    //     num2 =0;
    // }
    return num1+num2;
}
const total = add(10,1)
console.log(total);