//                                      slides

// https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-2

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    //      "this" refres to current object of the class
    area() {
        console.log(this.width * this.height);
        console.log(this);
    }

    paint() {
        console.log(`Painting with color ${this.color}`);
    }
}

const rect = new Rectangle(2, 4, "blue");
rect.area();
rect.paint();

