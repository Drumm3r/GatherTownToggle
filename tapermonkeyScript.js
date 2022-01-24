// ==UserScript==
// @name         gather.town microphone and camera toggle
// @namespace    https://schoenenborn.info/
// @version      1.0.0
// @description  A script which adds the possibility to toggle your camera and microphone with a simple key press
// @author       Daniel Schönenborn
// @match        https://gather.town/app/*
// @icon         https://www.google.com/s2/favicons?domain=gather.town
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener("keydown", function (keydownEvent) {
        if (keydownEvent.code === "KeyM") {
            let microphoneToggleButton = document.querySelector('[title="Enable microphone"]');

            if (microphoneToggleButton === null) {
                microphoneToggleButton = document.querySelector('[title="Disable microphone"]');
            }

            microphoneToggleButton.click();
            return;
        }

        if (keydownEvent.code === "KeyC") {
            let cameraToggleButton = document.querySelector('[title="Enable video"]');

            if (cameraToggleButton === null) {
                cameraToggleButton = document.querySelector('[title="Disable video"]');
            }

            cameraToggleButton.click();
            return;
        }
    });
})();