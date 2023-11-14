"use strict";

class Stopwatch {
    _startTime = 0;
    _endTime = 0;
    _running = 0;
    duration = 0;

    start() {
        if (_running) throw new Error(`Stopwatch has already started.`);

        _running = true;

        _startTime = new Date();
    }
    stop() {
        if (!_running) throw new Error(`Stopwatch is not started.`);

        _running = false;

        _endTime = new Date();

        const seconds = (_endTime.getTime() - _startTime.getTime()) / 1000;
        duration += seconds;
    }
    reset() {
        _startTime = 0;
        _endTime = 0;
        _running = 0;
        duration = 0;
    }
}

const sw = new Stopwatch();
sw.start();
