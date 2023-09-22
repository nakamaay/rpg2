import Seen from "./Seen";

const canvas = document.getElementById("mycanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;


const SpriteRender = (url: string, x: number, y: number) => {
  var img = new Image();

  img.onload = function onImageLoad() {
    ctx.drawImage(img, x, y);
  };

  img.src = url;
};

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
        switch (this.seen.objects[index].constructor.name) {
          case "Sprite":
            SpriteRender(
              this.seen.objects[index].url,
              this.seen.objects[index].x,
              this.seen.objects[index].y
            );
            break;

          default:
            break;
        }
        console.log(this.seen.objects[index]);
      }
    }, 1000 / this.fps);
  }
}
export default Render;
