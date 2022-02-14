// ==UserScript==
// @name         gather.town microphone and camera toggle
// @namespace    https://schoenenborn.info/
// @version      1.1.1
// @description  A script which adds the possibility to toggle your microphone and camera with your keyboard.
// @author       Daniel Schönenborn
// @match        https://app.gather.town/app/*
// @icon         https://www.google.com/s2/favicons?domain=gather.town
// @grant        none
// @license      CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/legalcode)
// ==/UserScript==

(function () {
    'use strict';

    const videoContainers = [
        '.GameVideo-self-video-container',
        '.GameVideosContainer-videobar-content > div:first-child',
    ];

    const videoContainersLength = videoContainers.length;

    document.addEventListener('keydown', function (keydownEvent) {
        if (!keydownEvent.ctrlKey) return;
        if (!(keydownEvent.code === 'KeyM' || keydownEvent.code === 'KeyC')) return;

        if (keydownEvent.code === 'KeyM') {
            toggleMicrophone();
        }

        if (keydownEvent.code === 'KeyC') {
            toggleCamera();
        }
    });

    function toggleMicrophone() {
        let microphoneToggleButton = null;
        let i = 0;

        while (microphoneToggleButton === null && i < videoContainersLength) {
            microphoneToggleButton = document.querySelector(videoContainers[i] + ' [title="Enable microphone"]');

            if (microphoneToggleButton === null) {
                microphoneToggleButton = document.querySelector(videoContainers[i] + ' [title="Disable microphone"]');
                console.log(videoContainers[i] + ' [title="Disable microphone"]');
            }

            ++i;
        }

        if (microphoneToggleButton === null) {
            return;
        }

        microphoneToggleButton.click();
    }

    function toggleCamera() {
        let cameraToggleButton = null;
        let i = 0;

        while (cameraToggleButton === null && i < videoContainersLength) {
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
    }
})();