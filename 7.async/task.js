class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback, canCall = true) {
        if (!time || !callback) {
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
        this.alarmCollection = this.alarmCollection.filter(
            (item) => item.time !== time
        )
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-6);
    }

    start() {
        if (this.intervalId) {
            return;
        };
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((item) => {
                if (item.time == this.getCurrentFormattedTime() && item.canCall) {
                    item.canCall = false;
                    item.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((item) => item.canCall = true)
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }
}