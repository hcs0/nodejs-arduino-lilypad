# Node JS with Arduino Lilypad (Work in progress!!) #
In this tutorial, we'll be using the [Johnny-Five Javascript Robotics Programming Framework](https://github.com/rwaldron/johnny-five) and Ardunio Lilypad.  You can use other hardware.

<img src="https://www.arduino.cc/en/uploads/Main/A000011_featured.jpg">

[Schematics](https://www.arduino.cc/en/uploads/Main/LilyPad_schematic_v18.pdf)

##First time setup###

###Basic Hardware###
- Arduino Lilypad ATmega168
- Conductive threads
- LED lights

###Set up the Arduino Lilypad###
Using a needle conductive thread, sew through the LED lights with their corresponding pin as noted on the microcontroller.  Keep track of where the pins are located for future reference.

Make sure that the threads don't touch each other.

You can also sew in other components and sensors as offered by the [Arduino Lilypad](https://www.arduino.cc/en/Main/ArduinoBoardLilyPad).  

###Set up NodeJS for Arduino###
Download the [Arduino IDE](https://www.arduino.cc/en/Main/Software) online.
Follow the instructions listed on [Node-ARDX](http://node-ardx.org/) to set up NodeJS, NPM, 
and any other requirements.

###Set up the Lilypad Arduino with the IDE###
Connect the Lilypad Arduino via USB.  The settings that I have within the IDE are:
- **Board:** Lilypad Arduino USB 
- **Port:** The port should reference a USB.  If not, make sure that it's being recognized.
- **Programmer:** AVR ISP

The Programmer settings may differ for you. The Arduino IDE recognized another board ('Lilypad Arduino') as a default which prompted a [avrdude stk500_getsync() not in sync resp=0x30 error](http://www.instructables.com/id/A-solution-to-avrdude-stk500getsync-not-in-syn/) message.

###Run your first module###
Make sure to install Johnny-Five

```
npm install johnny-five
```
 
You can then try running one of the code examples located within node-/ardx/code/

```
node code/CIRC01-code-led-b-pulse.js
```

And that is how you can get started! Have a look at the other folders for further examples.
