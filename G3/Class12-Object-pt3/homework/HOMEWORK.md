# Animal Class Homework

## Requirements

Create a class `Animal` with the following properties and methods:

### Properties

- `name`: Name of the animal
- `type`: Dietary type (carnivore/herbivore/omnivore)
- `age`: Age of the animal
- `size`: Size of the animal
- `isEaten`: Boolean flag indicating if the animal has been eaten (default: false)

### Methods

#### eat(input)

The `eat` method should check if the input is an Animal instance and handle the following cases:

1. If input is an Animal and this animal is herbivore:

   - Log: "The animal (this animal name) is a herbivore and does not eat other animals"

2. If input is an Animal and this animal is not herbivore:

   - If the input animal's size is less than half of this animal's size:
     - Set input animal's `isEaten` property to true
     - Log: "The animal (this animal name) ate the (input animal name)"
   - If the input animal's size is twice as large or larger:
     - Log: "The animal (this animal name) tried to eat the (input animal name) but it was too large"

3. If input is not an Animal:
   - Log: "The animal (this animal name) is eating (input)"
