// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function wins(object) {
    return object.result === "W";
}


function superbowlWin(array) {
    const newArray = array.find(wins)

    if(newArray) {
            return newArray.year;
        } else 
        {return undefined}
            
}      
console.log(superbowlWin(record));
