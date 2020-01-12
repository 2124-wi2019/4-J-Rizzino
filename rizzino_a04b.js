/* Julie Rizzino
rizzino_a04b.js
INFO 2124
Thoendel
1/9/20 */
let firstName = `Julie`;//My name//
let weight = `131.0`;//My weight//
let height = 62.0;//My height//
let age = `30`;//My age//
const marsGravity = 0.38;//Number used to convert weight on Earth to weight on Mars// 
const inchesToMeters = 2.54;//Number used to convert height from Inches to Meters//

let message = `Hello there, ${firstName}! On Earth you weigh ${weight}. 
But, since gravity is weaker on Mars, you would only weigh ${parseFloat(weight)*marsGravity} pounds there!

Neat huh? Want to know what else is neat?

Mars takes longer to rotate around the Sun than does Earth.  This means the Mars year is actually longer than our "terran" year. So although you are ${parseInt(age)} years old on Earth, you're only ${(Number(age)*365)/687} years old on Mars.

Did you know, the European Space Agency requires potential astronauts to measure between 153 and 190 cm? Just in case you ever decide to move to Europe and want to be an astronaut, you're height in mertic is ${String(height)*inchesToMeters} cm.
`;//Message to output on computer//
console.log(message);//Computer output of message//