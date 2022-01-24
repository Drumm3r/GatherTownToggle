// ==UserScript==
// @name         gather.town microphone and camera toggle
// @namespace    https://schoenenborn.info/
// @version      1.0.1
// @description  A script which adds the possibility to toggle your camera and microphone with a simple key press
// @author       Daniel Schönenborn
// @match        https://gather.town/app/*
// @icon         https://www.google.com/s2/favicons?domain=gather.town
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', function (keydownEvent) {
        let videoContainers = [
            '.GameVideo-self-video-container',
            '.GameVideosContainer-videobar-content',
        ];

        let videoContainersLength = videoContainers.length;
        let microphoneToggleButton = null;
        let cameraToggleButton = null;
        let i = 0;

        if (keydownEvent.code === 'KeyM') {            
            while(microphoneToggleButton === null && i < videoContainersLength) {
                microphoneToggleButton = document.querySelector(videoContainers[i] + ' [title="Enable microphone"]');

                if (microphoneToggleButton === null) {
                    microphoneToggleButton = document.querySelector(videoContainers[i] + ' [title="Disable microphone"]');
                }

                ++i;
            }
            
            if (microphoneToggleButton === null) {
                return;
            }

            microphoneToggleButton.click();
            return;
        }

        if (keydownEvent.code === 'KeyC') {            
            while(cameraToggleButton === null && i < videoContainersLength) {
                cameraToggleButton = document.querySelector(videoContainers[i] + ' [title="Enable video"]');
    
                if (cameraToggleButton === null) {
                    cameraToggleButton = document.querySelector(videoContainers[i] + ' [title="Disable video"]');
                }

                ++i;
            }

            if (cameraToggleButton === null) {
                return;
            }

            cameraToggleButton.click();
            return;
        }
    });
})();