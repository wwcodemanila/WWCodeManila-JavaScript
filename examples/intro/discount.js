function getDiscountedPrice(originalPrice, discount){
	// compute for and return discounted price
	// advanced: you can try to use currying here and change the arguments for the function
}

var customerA = { 
	name: "Barbara", 
	customerType: "Student",
	total: 140.50
};

var customerB = { 
	name: "Eva", 
	customerType: "Senior Citizen",
	total: 560.00
};

var customerC = { 
	name: "Maria", 
	customerType: "Regular",
	total: 680.50
};

var customerD = { 
	name: "Charm", 
	customerType: "Student",
	total: 680.50
};

var customers = [customerA, customerB, customerC, customerD];

// DISCOUNT CONDITIONS
// if customer is a student, the discount is 10%
// if customer is a senior citizen, the discount is 20%
// if customer is just regular customer, there is no discount 0%


// GOAL
// compute for the discounted price of each customer's total purchase
// to do this, call the function "getDiscountedPrice" for each customer


// EXPECTED OUTPUT
// print out the final price for each
// use the function console.log() to print this to the console
// "Barbara's discounted price is Php126.45 (10% discount)"
// "Eva's discounted price is Php448 (20% discount)"
// "Maria's discounted price is Php680.5 (0% discount)"
// "Charm's discounted price is Php612.45 (10% discount)"


for (i = 0; i < customers.length; i++) {
	result = customers[i].name + "'s discounted price is Php???"

	var node = document.createElement("LI");                
	var textnode = document.createTextNode(result);         
	node.appendChild(textnode);   
	
	var results = document.getElementById("discounted-price");
	results.appendChild(node);
}
