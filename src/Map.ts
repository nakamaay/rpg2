class Map {
  chip: string;
  data: number[];
  tilesize: number;

  constructor(chip: string, data: number[], tilesize: number) {
    this.chip = chip;
    this.tilesize = tilesize;
    this.data = data;
  }
}

export default Map;
