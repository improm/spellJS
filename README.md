SpellJS
===========

A simple JavaScript library which provides the pronunciation of long numbers. Read long number up to 303 digits (10^303). 

Installation
------------
```javascript
	bower install spelljs
```

Or you can just include spell.js file if you want.


Usage
-----------------------

There are 3 ways to use it:

	1.  Using function call:
```javascript
		 spell(124);  	//"one hundred twenty four"
		 spell("123");	//"one hundred twenty three"
```

	2.  Using String Object method
```javascript
		 "12312312321321313123123123123123".spell();   //"twelve nonillion  , three hundred twelve octillion  , three hundred twelve septillion  , three hundred twenty one sextillion  , three hundred twenty one quintillion  , three hundred thirteen quadrillion  , one hundred twenty three trillion  , one hundred twenty three billion  , one hundred twenty three million  , one hundred twenty three thousand  , one hundred twenty three"
```

	3. Using Number Object method
```javascript
		  123..spell();	//"one hundred twenty three"
```
Precaution when using spellJS
-----------------------	

Be careful while working with numbers in JavaScript:

1.Numbers don't won't allow direct operation like:
```javascript
	12.toString();  //wrong syntax
	12.spell();     // wrong syntax
```
This is because JavScript is ambiguous if it is a decimal number or a property (like 12.5 or 13.7 )
So way around numbers is as follow:

```javascript
	12..toString();  
	12..spell(); 
	12.0.spell();
	(12).spell();
```

2.Be careful while using function call and Number Object method. By default JavaScript can only safely represent numbers between:

```javascript
	 -(2^53 - 1) and 2^53 - 1
```
The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (2^53 - 1).

```javascript
	Number.MAX_SAFE_INTEGER   // 9007199254740991
	Math.pow(2, 53) - 1        // 9007199254740991
```

So using the spell method on very long numbers will cause trouble. A loss of precision occurs.  i.e.
 ```javascript
 	console.log(21321312312321321312313123123)  //2.1321312312321322e+28
 	// So a loss of precision occurs here  

	21321312312321321312313123123..spell();    //"two hundred thirteen Tredecillion  , two hundred thirteen duodecillion  , one hundred twenty three undecillion  , one hundred twenty three decillion  , two hundred thirteen nonillion  , two hundred twenty octillion "
	spell(21321312312321321312313123123);		//"two hundred thirteen Tredecillion  , two hundred thirteen duodecillion  , one hundred twenty three undecillion  , one hundred twenty three decillion  , two hundred thirteen nonillion  , two hundred twenty octillion "


```
So best approach is to prefer string equivalents of them :
```javascript
	"21321312312321321312313123123".spell(); 
	spell("21321312312321321312313123123");

	document.querySelector("#input").value.trim().spell();   
	$("#input").val().trim().spell()
	//Because it returns String value not Number value of input
```

3. Preceding a number with 0  causes JavScript to interpret it as an Octadecimal number (Base 8, 0-7 digits).
```javascript
	spell(070)    // outputs "fifty six"
	spell(080)    // outputs "eighty"    
	//because if it were octadecimal 8 should not be there. Hence treated as default i.e. binary
 ```
 
 Likewise numbers preceding with 0x are hexadecimal.
 Hence safest approach as discussed earlier is to use string equivalent!!!
```javascript
	spell("070")    // outputs "seventy"
	spell("080")    // outputs "eighty" 
 ```

How it works
------------

As there is limit on maximum integer size that we can use in JavaScript, spellJS uses Strings to manipulate the numbers. A huge number is broken down into chunks of strings and then recursively spelled out. The current max limit is 303 digits long number. And that too is is not because of memory issues. By increasing the map provided to SpellJS, the range can be further increased.

Contributing
------------

We welcome contributions and improvements! 

