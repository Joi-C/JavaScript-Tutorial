var words = "bottles";
var word = "bottle";
var count = 99;
    while (count > 1) {
        console.log(count + " " + words + " of beer on the wall");
        console.log(count + " " + words + " of beer on the wall");
        console.log("Take one down, pass it around,");
        count = count -1;
        if (count > 1){
            console.log(count + " " + words + " of beer on the wall");
            console.log("  ")
        } else {
            console.log(count + " " + word + " of beer on the wall");
            console.log("  ")
            console.log(count + " " + word + " of beer on the wall");
            console.log(count + " " + word + " of beer on the wall");
            console.log("Take it down, pass it around,");
            count = count -1;             
            console.log("No more " + " " + words + " of beer on the wall");}
    }