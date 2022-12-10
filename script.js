function BMI(weight,height){
return  weight /(height*height);
}


console.log(BMI(60,1.6));


function Status(BMI){
    if (BMI < 18.5 ){ return("لديك نقص في الوزن")

}else if (18.5<= BMI && BMI <=25){return ("وزنك صحي")
}else if (BMI>25){return"لديك زيادة في الوزن"}
}


function calculate(){
    let weight= document.getElementById("weight").value
    let height=document.getElementById("height").value
    let bmiresult= BMI(weight,height)
    let desc =Status(bmiresult)
   return document.getElementById("result").innertext= bmiresult +""+ desc

   console.log(bmiresult )
}


