const colors = ["Blue", "Orange", "Pink", "Purple", "Green"];
console.log(colors);

colors.push("Yellow");
console.log(colors);

colors.splice(2, 1);
console.log(colors);

const colorsString = colors.join (", ")
console.log(colorsString);
