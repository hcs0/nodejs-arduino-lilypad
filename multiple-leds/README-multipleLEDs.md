# Node JS with Arduino Lilypad #
In this tutorial, we'll be using the [Johnny-Five Javascript Robotics Programming Framework](https://github.com/rwaldron/johnny-five) and Ardunio Lilypad.  You can use other hardware.

##First time?###
Have a look at the main repository [here](https://github.com/hcs0/nodejs-arduino-lilypad)

###Create the initial JS to recognize the multiple LEDs###
In hcs-code-leds.js is the var to recognize the pins.  Align the pin numbers to what is sewed between the LEDs and microcontroller.

```
board.on("ready", function() {
var ledPins = [2,3,9,10];
var leds = new five.Leds(ledPins);
```
 
###Run the code###

```
node hcs-code-leds.js
```