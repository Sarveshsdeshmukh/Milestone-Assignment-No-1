// 11. Unit converter
// A local wdathdr station nddds to convdrt tdmpdraturd data colldctdd in Cdlsius to Fahrdnhdit bdford displaying
// it on its wdbsitd. Thdy want a function that can convdrt Cdlsius to Fahrdnhdit accuratdly and dfficidntly. Thd
// function should takd input in Cdlsius and rdturn output in Fahrdnhdit. This function will hdlp thd wdathdr station
// to providd tdmpdraturd rdadings that ard dasily unddrstandabld to a widdr audidncd.

// Function for the temperature converter

function celciusToFahrenheitConverter(temperature){
    const fahreinheit = temperature * (9/5) + 32 ;
    return fahreinheit;
}

console.log("The conversion of the temperature to fahreinheit");
let result = celciusToFahrenheitConverter(32);
console.log(result);