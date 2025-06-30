const BMI=(wt,ht)=>{
    let bmi=wt/(ht*ht);
    let status;
    if(bmi<18.5){
        return "UnderWeight"
    }
    else if(bmi<25){
        return "Normal";
    }
    else if(bmi<30){
        return "Overweight";
    }
    else{
        return "obesity";
    }
}