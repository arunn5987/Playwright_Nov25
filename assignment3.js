
    /*
For female scenario:
   */
  
var genderType="female"
function printGender()
{
    let colour='brown'
    {
        if(genderType=="female"){
        var age=30
        let colour='pink'
        console.log('Inside IF block color:',colour);
}
        console.log('Outside IF block age:',age);
    }
}
    printGender()
    console.log('Function scoped gender type',genderType);

    
  /*
For male scenario:
   */

var genderType="male"
function printGender()
{
    let colour='brown'
    var age=30
    {
        if(genderType=="female"){
        let colour='pink'
         console.log('Inside IF block color:',colour);
}
      else{
         console.log('Inside IF block color:',colour);
      }
        console.log('Outside IF block age:',age);
    }
}
    printGender()
  console.log('Function scoped gender type',genderType);

 