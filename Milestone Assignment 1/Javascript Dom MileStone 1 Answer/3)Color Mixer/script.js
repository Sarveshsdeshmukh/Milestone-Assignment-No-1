// 3. Color Mixer

// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to determine the resulting color when the two colors are mixed. The program should print the resulting color based on the following criteria"
// L If color1 is "red" and color2 is "blue" or vice versa, print "purple"P
// L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
// L If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"P
// L If any other combination of colors is input, the program should print "Invalid color combination".

// const color1 = "";
// const color2 = "";

// const colorPattern1 = (( color1=== "red" && color2 === "blue")||( color1=== "blue" && color2 === "red"));
// const colorPattern2 = (( color1=== "red" && color2 === "yellow")||( color1=== "yellow" && color2 === "red"));
// const colorPattern3 = (( color1=== "blue" && color2 === "yellow")||( color1=== "yellow" && color2 === "blue"));

// function colorMixer(color1,color2){
//     switch(color1,color2){
//         case "colorPattern1":
//             console.log("purple"); 
//             break;
//         case "colorPattern2":
//             console.log("purple");
//             break;
//         case "colorPattern3":
//             console.log("purple");
//             break;
//     default:
//         console.log("This Pattern Does Not Exists");        
//     }

// } 

// colorMixer("red","blue");

// Above code is not working

function mixColors(color1, color2) {
    let resultingColor;
  
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "orange";
            break;
          default:
            resultingColor = "Invalid color combination";
        }
        break;
  
      case "blue":
        switch (color2) {
          case "red":
            resultingColor = "purple";
            break;
          case "yellow":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
        }
        break;
  
      case "yellow":
        switch (color2) {
          case "red":
            resultingColor = "orange";
            break;
          case "blue":
            resultingColor = "green";
            break;
          default:
            resultingColor = "Invalid color combination";
        }
        break;
  
      default:
        resultingColor = "Invalid color combination";
    }
  
    console.log(resultingColor);
  }
  
 
  mixColors("red", "blue");
  mixColors("red", "yellow");
  mixColors("blue", "yellow");
  mixColors("green", "blue"); 
  