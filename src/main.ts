import Sprite from "./Sprite";
import Seen from "./Seen";
import Render from "./Render";

const circle = new Sprite("img/circle.png");
const square = new Sprite("img/square.png");
const test = new Seen("Seen");
circle.x = 50;
circle.y = 60;
square.x = 200;
square.y = 100;
test.add(circle);
test.add(square);
const render = new Render(30, test);
render.play();
