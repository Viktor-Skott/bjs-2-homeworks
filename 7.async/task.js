class AlarmClock {
    constructor(alarmCollection = [], intervalId = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }

    addClock(time, callback, canCall = true) {
        if (time === undefined || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        } 
        if (this.alarmCollection.some((item) => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            callback,
            time,
            canCall,
        });
    }

    removeClock(time) {
        return this.alarmCollection = this.alarmCollection.filter(
            (item) => item.time !== time,
        )
    }

    getCurrentFormattedTime() {
        let now = new Date().toLocaleTimeString().slice(0,-3);
        return now;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        if (!this.intervalId) {
            return this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((item) => {
                    if (item.time === this.getCurrentFormattedTime() && this.canCall) {
                        this.canCall = false;
                        this.callback();
                    }
                })
            }, 1000);
        }
    }

    stop() {
        function clearInterval() {
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => item.canCall = true)
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}