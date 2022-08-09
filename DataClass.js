class DataStruckture {
  constructor() {
    this.storage = [];
  }
  insert(value) {
    console.log(value);
    this.storage.push(...value);
  }
  remove(value) {
    this.storage.pop();
  }
}

const ds = new DataStruckture();
ds.insert([10, 20, 30, 30]);
ds.remove();
