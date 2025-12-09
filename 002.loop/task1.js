let num = "";
let arr = ["Surat","Ahmadabad","Pune","Mumbai","Delhi"];


function cityName(arr, number){
    if(number > arr.length){
        console.log("🚀 ~ Please enter correct name :", number);
        
    }
    else if(number < 0){
        console.log("Please index value is not available",number);
    }
    else{
        for (i=0;i<=number;i++){
        console.log("🚀 ~ cityName arr:", arr[i]);
       
    }
}
}

cityName(arr,3);
