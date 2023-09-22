import Seen from "./Seen";

class Render {
  fps: number;
  seen: Seen;

  constructor(fps: number, seen: Seen) {
    this.fps = fps;
    this.seen = seen;
  }
  play() {
    setInterval(() => {
      for (let index = 0; index < this.seen.objects.length; index++) {
        console.log(this.seen.objects[index]);
      }
    }, 1000 / this.fps);
  }
}
export default Render;
