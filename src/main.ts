import Sprite from "./Sprite";
import Seen from "./Seen";
import Render from "./Render";

const canvas = document.getElementById("mycanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillRect(32, 32, 100, 100);

const animal = new Sprite("img/cat.png");
const animal2 = new Sprite("img/dog.png");
const test = new Seen("Seen");
test.add(animal);
test.add(animal2);
const render = new Render(30, test);
render.play();
