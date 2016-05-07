# spellJS
SpellJS: Read big numbers using JavaScript (up to  10^303) 

SpellJS
===========

A simple JavaScript library which provides the pronunciation of long numbers. Read long number up to 303 digits (10^303). 

Installation
------------

Just include spell.js file in your project and start using.


Usage
-----------------------

There are 3 ways to use it:

	1.  Using function call:
```javascript
		 spell(124);
		 spell("123");
```

	2.  Using String Object method
```javascript
		 "123".spell();
```

	3. Using Number Object method
```javascript
		  123..spell();
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
			 -(2^53 - 1) and 2^53 - 1

			 The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1).

		```javascript
			 Number.MAX_SAFE_INTEGER   // 9007199254740991
			Math.pow(2, 53) - 1        // 9007199254740991
		```

		 So using the spell method on very long numbers will cause trouble. i.e.
		  ```javascript
			21321312312321321312313123123..spell();
			spell(21321312312321321312313123123);
		```
		So best approach is to prefer string equivalents of them :
		  ```javascript
			"21321312312321321312313123123".spell();
			spell("21321312312321321312313123123");

			//Because it will returns String value not Number value of input
			document.querySelector("#input").value.trim().spell();   
			$("#input").val().trim().spell()
		```
		3. Preceding a number with 0  causes JavScript to interpret it as an Octadecimal number (Base 8, 0-7 digits).
		```javascript
			spell(070)    // outputs "fifty six"
			spell(080)    // outputs "eighty"    because if it were octadecimal 8 should not be there. Hence the default binary
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

