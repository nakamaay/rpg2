class Seen {
  name: string;
  objects: any[];

  constructor(name: string) {
    this.name = name;
    this.objects = [];
  }
  add(object: any) {
    this.objects.push(object);
  }
}

export default Seen;
