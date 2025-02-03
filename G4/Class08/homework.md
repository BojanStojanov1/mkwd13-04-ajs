# Homework 8

## Exercise 1

Use https://swapi.dev/api/people/{characterId} to fetch information about a character, with the following requirements:

- Enter the characterId from an input field
- Call the API on a button click
- Fetch the character's planet information
- Fetch all the films where the character has played
- Analyze the API response, see what propery includes the films
- Show the information on the HTML (not console) in the following format:

  - Information for <character_name> from planet <planet_name>
  - ul for all films where the character has starred

Hint:

- there are at least 3 API calls that need to be done
- first API should fetch the character info
- second and third APIs should be called only after first one is finished
- there is only 1 homeworld for a character
- there are multiple films for a character
  - see the country and neighbour countries example from class :)

## Exercise 2

Use combination of promises and setTimeout to process a fast-food order with the follwing requirements:

- processOrder()
  - accepts parameters
    - name: 'pizza', 'burger', 'toast'
    - amount
- getOrderDescription()
  - a function that returns a promise that resolves an object with properties
    - name: contains the passed order name 'pizza', 'burger' or 'toast'
    - desription: "Instant delivery order for <order_name> x<order_amount>"
- getOrderPrice()
  - a function that returns a promise that resolves THE SAME object with properties
    - price:
      - pizza: 350
      - burger: 300
      - toast: 200
    - totalPrice: <calculated_total_price>
- finishOrder()
  - a function that
    - logs the full object in console
- throw and catch an error for invalid order name

NOTE: Use promise chain; See the exact log messages in the example below!

IMPORTANT NOTE: start with an empty object; add properties to the object in every step;

Example use:

```JavaScript
	processOrder('pizza', 2)
		.then(/*your code here to getOrderDescription */)
		.then(/*your code here to getOrderPrice */)
		.then(/*your code here to finishOrder */)
		.catch(/* your code to handle any error */)

	// Example result:
	/*

		// log this from getOrderDescription()
		"Processing order for 'pizza'
		{
			name: 'pizza',
			description: 'Instant delivery order for "pizza" x2',
			status: 'processing'
		}

		// log this from getOrderPrice()
		"Calculating order price"
		{
			name: 'pizza',
			description: 'Instant delivery order for "pizza" x2',
			price: 350,
			totalPrice: 700,
			status: 'calculating price'
		}

		// log this from finishOrder()
		"Finished order"
		{
			name: 'pizza',
			description: 'Instant delivery order for "pizza" x2',
			price: 350,
			totalPrice: 700,
			status: 'finished'
		}
	*/

	processOrder('burek', 3)
		.then(/*your code here to getOrderDescription */)
		.then(/*your code here to getOrderPrice */)
		.then(/*your code here to finishOrder */)
		.catch(/* your code to handle any error */)

	/*
		"Invalid order. We don't serve <order_name>"
	*/
```

## Exercise 3

Use combination of Promise, setTimeout, setInverval to simulate a traffic light:

- red light: 2 seconds
- yellow light: 3 seconds
- green light: 5

Make the traffic light run indefinitely.

Bonus: Make it look nice with html and css :)
