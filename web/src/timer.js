const SECOND = 1000;
const MINUTE = SECOND * 60;
export default class Clock {
  constructor(workTime, breakTime, callback) {
    this.workTime = workTime * MINUTE;
    this.breakTime = breakTime * MINUTE;
    this.callback = callback;
    this.mode = 'work';
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
    let clock = this.getClock();
    this.ID = setInterval(this.#action(this.callback, clock), SECOND);
  }
  end() {
    if (this.ID) clearInterval(this.ID);
  }
  getClock(){
    if (this.mode == "break") return this.breakTime;
    return this.workTime;
  }
  switch(mode) {
    this.end();
    if (mode.toLowerCase() == "break") {
      this.mode = "break";
    } else if (mode.toLowerCase() == "work") {
      this.mode = "work";
    }
  }
  updateTime(workTime, breakTime) {
    this.workTime = workTime * MINUTE;
    this.breakTime = breakTime * MINUTE;
  }
}
