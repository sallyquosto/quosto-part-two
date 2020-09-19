let rain = prompt("How many inches of rain fell?")

let inches = "*"
console.log("Rain: " + inches.repeat(rain));

let yield = 50
if (rain >= 20)
    yield -= yield*.1
else if (rain < 10)
    yield -= yield*.2

let fertilizer = prompt("Did you use fertilizer?");
if (fertilizer === "yes") {
    var type = prompt("Did you use premium or regular fertilizer?")
    if (type === "premium")
        yield += yield*.15;
    else if (type === "regular")
        yield += yield*.10;
}
console.log("The yield should be " + yield + " bushels per acre.")