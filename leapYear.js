function leapYear(year){
    const num1 = year%400;
    const num2 = year%100;
    const num3 = year%4;
    if(((num3==0)&&(num2!=0))||(num1==0)){
        console.log(year + " This is Leap Year");
    }
    else{
        console.log(year + " This is not Leap Year");
    }
}
var years = ([1700,1800,1900,1996,2000,2001,2002,2003,2004,2005,2006,2007,2008]);
for(var i = 0; i<years.length; i++){
    leapYear(years[i]);
}