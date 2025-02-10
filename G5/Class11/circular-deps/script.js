// Parent Template/Parent Constructor
function Parent(name){
    this.name = name
    this.children = [] // Array to has child objects
}

// Child Template/Child Constructor
function Child(name, parent){
    this.name = name;
    this.parent = parent;
}

// Example:

const parent1 = new Parent("PARENT A");
const child1 = new Child('CHILD A', parent1);

parent1.children.push(child1);

console.log(parent1);

console.log(child1)


console.log('--- SOLUTION ---');
function ParentSolution(name, id){
    this.id = id;
    this.name = name;
    this.childIds = []
};

function ChildSolution(name, parentId){
    this.id = Date.now() // Timestamp (unique) at that moment
    this.name = name;
    this.parentId = parentId // It is not a good practice the child to know it's parent
};

const parentSolution = new ParentSolution('Parent 1', "1");

const childSolution = new ChildSolution("Child 1", parentSolution.id);

parentSolution.childIds.push(childSolution.id);

console.log(parentSolution);
console.log(childSolution)