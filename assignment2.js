
let genderType = "female";
function printGender() {
      let color = "brown";  
    if (genderType.startsWith("female")) {
  
        var age = 30;       
        let color = "pink";     
        console.log("Inside IF block color:", color);   
    }
    console.log("Outside IF block age:", age);  
    console.log("Function scoped color:", color);        
}
printGender();
console.log("Global genderType:", genderType);    
genderType = "male";
printGender();
console.log("Global genderType after change:", genderType);
