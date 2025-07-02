const tool=(a)=>{
    return `length: ${a.length},lowercase ${a.toLowerCase()}`;
    
}
function replace(a,b,c){
return a.replace(b,c);
}

const slice=(txt,start,end)=>{
    let sliced=txt.slice(start,end);
    return sliced;
}