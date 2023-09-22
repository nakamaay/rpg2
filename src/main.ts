import Sprite from "./Sprite";
import Seen from "./Seen";
import Render from "./Render";
import Map from "./Map";

const MapData = [
  1, 1, 1, 1, 0, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const circle = new Sprite("img/circle.png");
const square = new Sprite("img/square.png");
const test = new Seen("Seen");
circle.x = 50;
circle.y = 60;
square.x = 200;
square.y = 100;
test.add(circle);
test.add(square);

//map
const mainMap = new Map("img/base.png", MapData, 16);

test.add(mainMap);

const render = new Render(30, test, 480, 640);
render.play();
