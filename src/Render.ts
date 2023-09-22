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

const MapRender = (
  chip: string,
  data: number[],
  tilesize: number,
  h: number,
  w: number
) => {
  const img = new Image();
  img.src = chip;
  for (let x = 0; x < w / tilesize; x++) {
    for (let y = 0; y < h / tilesize; y++) {
      console.log(`(x:${x},y:${y})`);
      ctx.drawImage(
        img,
        0,
        4 * tilesize,
        tilesize,
        tilesize,
        x * tilesize,
        y * tilesize,
        tilesize,
        tilesize
      );
    }
  }
};

class Render {
  fps: number;
  seen: Seen;
  height: number;
  width: number;

  constructor(fps: number, seen: Seen, height: number, width: number) {
    this.fps = fps;
    this.seen = seen;
    this.height = height;
    this.width = width;
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
          case "Map":
            MapRender(
              this.seen.objects[index].chip,
              this.seen.objects[index].data,
              this.seen.objects[index].tilesize,
              this.height,
              this.width
            );
            break;

          default:
            break;
        }
        // console.log(this.seen.objects[index]);
      }
    }, 1000 / this.fps);
  }
}
export default Render;
