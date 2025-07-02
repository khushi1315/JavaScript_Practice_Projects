const Add=(...numbers)=>{
    let sum=0;
    for(let num of numbers){
        sum+=num;
    }
    return sum;
}
const Subtract=(...numbers)=>{
    if(numbers.length==0) return 0;
    let ans=numbers[0];
    for(let i=1;i<numbers.length;i++){
        ans-=num[i];
    }
    return ans;
}
const Multiply=(...num)=>{
    let ans=num[0];
    for(let i=1;i<num.length;i++){
        ans*=num[i];
    }
    return ans;
}
const Divide=(...num)=>{
    let ans=num[0];
    for(let i=1;i<num.length;i++){
        ans/=num[i];
    }
    return ans;
}
