/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Andrew and Nabeh
 * Created on: Jan 2026
 * This program creates a burglar alarm
*/

// comment header 

let distanceToObject: number = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    // Send trigger pulse

    // Read echo pulse
    distanceToObject = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters);
    // If something is close, sound alarm
    if (distanceToObject > 0 && distanceToObject < 15) {
        // buzzer ON
        basic.showIcon(IconNames.Skull)
        music.playTone(988, music.beat(BeatFraction.Whole))
    } else {
        // buzzer OFF
        music.stopAllSounds()
        basic.clearScreen()
    }
    basic.pause(100)
})
