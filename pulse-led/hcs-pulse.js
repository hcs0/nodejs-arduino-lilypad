// this is based on the node-ardx library

var five = require("johnny-five");
var board, myLed;

board = new five.Board();

board.on("ready", function() {

  myLed = new five.Led(2,3); // use other LED pins 
  myLed.blink(900);

  // I added the function below to show whether or not the LED is working or if it's not working...

  function ledMessage() {
  	var delay = 1;
  	board.counter = 0;
  	for (var i = 0; i < leds.lenght;) {
  		var led = leds[i];

  		board.wait(delay,function() {
  			console.log("The LED is working...")
  			leds[this.counter].on();
  		})
  		
  		board.wait(function() {
  			console.log("The LED looks like it is not working...")
  			leds[this.counter].off();
  			}
  		}
  	}
});

  // try "on", "off", "toggle", "brightness",
  // "fade", "fadeIn", "fadeOut", 
  // "pulse", "strobe", 
  // "stop" (stops strobing, pulsing or fading)