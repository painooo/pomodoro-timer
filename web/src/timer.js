const SECOND = 1000;
const MINUTE = SECOND * 60;
export default class Clock {
  constructor(workTime, breakTime, callback) {
    this.workTime = workTime * MINUTE;
    this.breakTime = breakTime * MINUTE;
    this.callback = callback;
    this.clock = this.workTime;
  }
  #action(callback, clock) {
    return () => {
      callback(clock);
      this.#chkEnd(clock);
      clock -= SECOND;
    };
  }
  #chkEnd(clock) {
    if (clock <= 0) {
      this.end();
    }
  }
  start() {
    this.end();
    this.ID = setInterval(this.#action(this.callback, this.clock), SECOND);
  }
  end() {
    if (this.ID) clearInterval(this.ID);
  }
  switch(mode) {
    this.end();
    if (mode.toLowerCase() == "break") {
      this.clock = this.breakTime;
    } else if (mode.toLowerCase() == "work") {
      this.clock = this.workTime;
    }
  }
  updateTime(workTime, breakTime) {
    this.workTime = workTime * MINUTE;
    this.breakTime = breakTime * MINUTE;
  }
}
