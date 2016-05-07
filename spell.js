var spell = function(userInput) {
        var numToWorkOn;

        //create map for all unique names in numbering system
        var oneToTen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
            elevenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
            multipleOfTen = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
            placeValue = ["", " thousand ", " million ", " billion ", " trillion ", " quadrillion ", " quintillion ", " sextillion ", " septillion ", " octillion ", " nonillion ", " decillion ", " undecillion ", " duodecillion ", " Tredecillion ", " Quattuordecillion ", " Quindecillion ", " Sedecillion ", " Septendecillion ", " Octodecillion ", " Novemdecillion  ", " Vigintillion ", " unvigintillion ", " duovigintillion ", " trevigintillion ", " quattuorvigintillion ", " quinvigintillion ", " sexvigintillion ", " septenvigintillion ", " octovigintillion ", " novemvigintillion ", " trigintillion ", " untrigintillion ", " duotrigintillion ", " tretrigintillion ", " quattuortrigintillion ", " quintrigintillion ", " sextrigintillion ", " septentrigintillion ", " octotrigintillion ", " novemtrigintillion ", " quadragintillion ", " unquadragintillion ", " duoquadragintillion ", " trequadragintillion ", " quattuorquadragintillion ", " quinquadragintillion ", " sexquadragintillion ", " septenquadragintillion ", " octoquadragintillion ", " novemquadragintillion ", " quinquagintillion ", " unquinquagintillion ", " duoquinquagintillion ", " trequinquagintillion ", " quattuorquinquagintillion ", " quinquinquagintillion ", " sexquinquagintillion ", " septenquinquagintillion ", " octoquinquagintillion ", " novemquinquagintillion ", " sexagintillion ", " unsexagintillion ", " duosexagintillion ", " tresexagintillion ", " quattuorsexagintillion ", " quinsexagintillion ", " sexsexagintillion ", " septsexagintillion ", " octosexagintillion ", " octosexagintillion ", " septuagintillion ", " unseptuagintillion ", " duoseptuagintillion ", " treseptuagintillion ", " quinseptuagintillion", " sexseptuagintillion", " septseptuagintillion", " octoseptuagintillion", " novemseptuagintillion", " octogintillion", " unoctogintillion", " duooctogintillion", " treoctogintillion", " quattuoroctogintillion", " quinoctogintillion", " sexoctogintillion", " septoctogintillion", " octooctogintillion", " novemoctogintillion", " nonagintillion", " unnonagintillion", " duononagintillion", " trenonagintillion ", " quattuornonagintillion ", " quinnonagintillion ", " sexnonagintillion ", " septnonagintillion ", " octononagintillion ", " novemnonagintillion ", " centillion"];

        //To check if spell has been called as a function call :   spell(123)   window.spell(123)
        if (typeof(userInput) == "number" || typeof(userInput) == "string") {
            numToWorkOn = "" + userInput;
        }

        //To check if spell has been called using a Number/String Object:   "123".spell()   123..spell() 
        else if (typeof(this) == "object") {
            numToWorkOn = this.toString();
        } else {
            return "Invalid Input";
        }

        var reg = new RegExp('^[0-9]+$');
        //Put limit check on the program, placevalue map should be increased to increase capacity
        if (numToWorkOn.length >= 303) {
            return "Number out of bonds!";
        } else if (!numToWorkOn.length || !reg.test(numToWorkOn)) {
            return "Invalid Input";
        } else {
            return convertToString(numToWorkOn);
        }

        //Recursie logic to break number into strings of length 3 each and recursively pronounce each
        function convertToString(stringEquivalent) {
            if (stringEquivalent == 0) {
                return 'zero'
            }

            var result = '',
                unitLookup = 0,
                strLength = stringEquivalent.length;
            for (var k = strLength; k > 0; k = k - 3) {
                var subStr = stringEquivalent.substring(k, k - 3),
                    pronounce = pronounceNum(subStr);

                if (pronounce.toUpperCase() != 'ZERO') {
                    result = pronounce + placeValue[unitLookup] + ' , ' + result;
                }
                unitLookup++;
            }
            //to trim of the extra ", " from last
            return result.substring(0, result.length - 3)
        }

        //Determines the range of input and calls respective function
        function pronounceNum(val) {
            val = parseInt(val);
            if (parseInt(val / 10) == 0) {
                return numLessThan10(val);
            } else if (parseInt(val / 100) == 0) {
                return numLessThan99(val)
            } else
                return numLessThan1000(val);
        }

        //Pronounces any number less than 1000
        function numLessThan1000(val) {
            val = Number(val);
            var hundredPlace = parseInt(val / 100),
                result;
            if (val % 100 == 0) {
                result = oneToTen[hundredPlace] + " hundred ";
            } else {
                result = oneToTen[hundredPlace] + " hundred " + numLessThan99(val % 100);
            }
            return result;
        }

        //Pronounces any number less than 99
        function numLessThan99(val) {
            val = Number(val);
            var tenthPlace = parseInt(val / 10),
                result;
            if (tenthPlace !== 1) {
                val % 10 ? (result = multipleOfTen[tenthPlace] + " " + numLessThan10(val % 10)) : (result = multipleOfTen[tenthPlace]);
                return result;
            } else {
                result = elevenToNineteen[val % 10];
                return result;
            }
        }

        //Pronounces any number less than 10
        function numLessThan10(val) {
            val = Number(val);
            return oneToTen[val];
        };


    }
    //add Spell to Window Object and Number/String prototype
window.spell = spell;
String.prototype.spell = spell;
Number.prototype.spell = spell;
