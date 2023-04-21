class stopWatch {
    constructor() {
        let startTime;
        let endTime;
        let running;
        let duration = 0;

        Object.defineProperty(this, 'duration', {
            get: function () {
                return duration
            },
        })

        this.start = function () {
            if (running) {
                throw new Error('Stopwatch is already running')
            } else {
                startTime = new Date()
                running = true
            }
        }

        this.stop = function () {
            if (!running) {
                throw new Error('Start the stopwatch first')
            } else {
                endTime = new Date()
                duration = duration + (endTime - startTime) / 1000
                running = false
            }
        }

        this.reset = function () {
            duration = 0
            startTime = null
            endTime = null
            running = false
        }
    }
}

const sw = new stopWatch()
