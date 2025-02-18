// Create a class Shape that has:
// name
// color
// position, array of x and y coordinates
// getArea - method that will only write in the console that there is no special implementation for area
// getPerimeter - method that will only write in the console that there is no special implementation for perimeter
// checkPosition - a method that checks if the input is a Shape.
// If the input is a Shape and if it's x coordinate is in front of this x coordinate, write in console a message
// If the input is a Shape and if it's y coordinate is in front of this y coordinate, write in console a message
// If the input is a Shape and if it's x and y coordinates are in front of this x and y coordinates, write in console a message
// *add method move that is shared among all instances and can be accessed through the class name. It takes a shape as input, logs Moving.. in the console and updates the position of the input, by increasing the coordinates for 5.
// *create a setter and getter for the color and name property. The setter/getter will log a corresponding message. The setter should do validation.

class Shape{
    constructor(name, color, position){
        this.name = name;
        this.color = color;
        this.position = position;
    }

    set name(nameInput){
        !nameInput ? "no name" : this._name = nameInput;
    }

    get name(){
        console.log("we are getting the name...");
        return this._name;
    }

    set color(colorInput){
        !colorInput ? "no color" : this._color = colorInput;
    }

    get color(){
        console.log("we are getting the color...");
        return this._color;
    }

    getArea(){
        console.log("getArea has no concrete implementation");
    }

    getPerimeter(){
        console.log("getPerimeter has no concrete implementation");
    }

    checkPosition(shape) {
        if (shape instanceof Shape) { //checks if the object is an instance of a class
            //the most specific check (if condition) should alway go first (be on top)
            if (shape.position[0] > this.position[0] && shape.position[1] > this.position[1]) {
                console.log(`Shape ${shape.name} has both x and y coordinates in front of this object`);
                return;
            }
            if (shape.position[0] > this.position[0]) {
                console.log(`Shape ${shape.name} x coordinate is in front of this x coordinate`);
                return;
            }

            if (shape.position[1] > this.position[1]) {
                console.log(`Shape ${shape.name} y coordinate is in front of this y coordinate`);
                return;
            }

            console.log(`This has both x and y coordinates in front of ${shape.name} object`);
        } else {
            console.log("The input is not a Shape");
        }
    }

    static move(shape) {
        if (shape instanceof Shape) {
            console.log("Moving...");
            shape.position[0] += 5;
            shape.position[1] += 5;
        } else {
            console.log("The input is not a Shape");
        }
    }
}

let shape1 = new Shape("shape1", "red", [5,6]);
let shape2 = new Shape("shape2", "blue", [2,3]);

shape1.checkPosition(shape2);//shape1 is this (the object we are working with) and shape2 is shape ( the object that we sent) 
