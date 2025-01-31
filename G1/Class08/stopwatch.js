let stopwatch = {
    time: 0,
    interval: null,

    start: function() {
        this.interval = setInterval(() => {
            this.time++;
            console.log(this.time);
        }, 1000);
    },

    stop: function() {
        clearInterval(this.interval);
        this.interval = null;
    },

    reset: function() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.time = 0;
    }
}

// console.log('Start first time');
// stopwatch.start();

// setTimeout(() => {
//     console.log('Stop first time');
//     stopwatch.stop();
// }, 5000);

// setTimeout(() => {
//     console.log('Start second time');
//     stopwatch.start();
//     // stopwatch.time = 10000;
//     // stopwatch.interval = null;
// }, 8000);

// setTimeout(() => {
//     console.log('Reset first time');
//     stopwatch.reset();
// }, 15000);

// setTimeout(() => {
//     console.log('Start last time');
//     stopwatch.start();
// }, 20000);


let [start, stop, reset] = (function(){
    let time = 0;
    let interval = null;

    function start() {
        setInterval(() => {
            time++;
            console.log(time);
        }, 1000);
    }

    function stop() {
        clearInterval(interval);
        interval = null;
    }

    function reset() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
        time = 0;
    }

    // return as array
    return [
        start,
        stop,
        reset
    ];
})();


// console.log('Start first time');
// start();

// setTimeout(() => {
//     console.log('Stop first time');
//     stop();
// }, 5000);

// setTimeout(() => {
//     console.log('Start second time');
//     start();
//     // stopwatch.time = 10000;
//     // stopwatch.interval = null;
// }, 8000);

// setTimeout(() => {
//     console.log('Reset first time');
//     reset();
// }, 15000);

// setTimeout(() => {
//     console.log('Start last time');
//     start();
// }, 20000);


let { start: pocni, stop: zastani, reset: resetiraj } = 
(function(){
    let time = 0;
    let interval = null;

    function start() {
        setInterval(() => {
            time++;
            console.log(time);
        }, 1000);
    }

    function stop() {
        clearInterval(interval);
        interval = null;
    }

    function reset() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
        time = 0;
    }

    // return as array
    return {
        start,
        stop,
        reset
    };
})();