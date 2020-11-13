class Countdown {
  constructor (shift, id) {
    this.shift = shift;
    this.startTime = Date.now();
    this.endTime = this.startTime + shift * 3.6e6;
    this.counter = document.getElementById(id);
    this.start();
  }
  
  start () {
    let range, hours, minutes, seconds, self = this;
    this.startTime += 1000;
    range = (this.endTime - this.startTime)/1000;
    hours = this.zeroAdd(Math.floor( (range/(60*60)) % 24 ));
    minutes = this.zeroAdd(Math.floor( (range/60) % 60 ));
    seconds = this.zeroAdd(Math.floor( range % 60 ));

    this.counter.innerText = `${hours}:${minutes}:${seconds}`;
    setTimeout(function () {
      self.start();
    }, 1000);
  }
  
  zeroAdd (digit) {
    return (`0${digit}`).slice(-2);
  }
}

window.onload = () => {
  const cd1 = new Countdown(12, "s1");
  const cd2 = new Countdown(16, "s2");
  const cd3 = new Countdown(02, "s3");
  const cd4 = new Countdown(23, "s4");
  const cd5 = new Countdown(01, "s5");
};
