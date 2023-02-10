// AIRLINE TICKET QUESTION :

function airlineTicket(x) {
    let letter; // solving or what variable name
    let location; // store letter location
    let result = [];
    let check = x[x.length - 1]; // check digit
    let main = x.slice(0, x.length - 1); // main part of ticket
    for (i = 0; i < x.length; i++) {
        if (isNaN(x[i])) {
            letter = x[i];
            location = i;
        }
    }
    if (isNaN(x)) {
        if (location != x.length - 1) { // find the non check digit numbers
            x = x.slice(0, x.length - 1)
            for (i = 0; i < 10; i++) {
                main = x.slice(0, location) + i + x.slice(location + 1, x.length); // check all combinations from 0-9
                if (main % 7 == check) {
                    result.push(i); // store possible results
                }
            }
        }
        else {
            main = x.slice(0, x.length - 1)
            result = main % 7; // find check digit
        }
        return letter + " = " + result;
    }
    else {
        if (parseInt(main) % 7 == check) {
            return "Valid Ticket";
        }
        else {
            return "Invalid Ticket";
        }
    }
}


// SIN NUMBER QUESTION :

function sinSum(x) {
    let sum = 0;
    for (i = 0; i < x.length; i++) {
        if (!isNaN(x[i]))
            if (i == 0 || i % 2 == 0) {
                //console.log(x[i]);
                sum += parseInt(x[i]);
            }
            else {
                //console.log(x[i])
                let product = parseInt(x[i]) * 2;
                if (product >= 10) { // sum numbers if the product is greater than 10
                    product = product.toString(); // convert to string so I can get get each number separately
                    product = parseInt(product[0]) + parseInt(product[1]); // add them as integers
                    //console.log(product);
                    sum += product;
                }
                else {
                    sum += product;
                }
            }
    }
    return sum;
}
//console.log(totalSum1("5984x787"));

function sinNumber(x) {
    let check = parseInt(x[x.length - 1]); // determine check digit
    let sum = 0; // store sum
    let result; // store answer
    let letter; // store letter
    let location // store location of letter
    let product; // store the product of 3 * i
    let main = x.slice(0, x.length - 1);

    if (isNaN(x)) {

        if (x.length == 9) {

            // Loop to find letter and location
            for (i = 0; i < x.length; i++) {
                if (isNaN(x[i])) {
                    letter = x[i];
                    location = i;
                }
            }

            // Looking for a variable that is not the check digit
            if (location != x.length - 1) {
                // x = x.slice(0, x.length - 1);

                sum += sinSum(main);
                //console.log(sum);

                for (i = 0; i < 10; i++) {
                    if (location == 0 || location % 2 == 0) {
                        result = -(sum + i) % 10; // result for a non doubled number
                    }
                    else {
                        if (2 * i < 10) {
                            result = -(sum + 2 * i) % 10; // result for a doubled number
                        }
                        // SUM the numbers if 2 * i has two digits
                        else {
                            //console.log(2*i);
                            product = 2 * i;
                            product = product.toString();
                            //console.log(product);
                            product = parseInt(product[0]) + parseInt(product[1]);
                            //console.log(product);
                            result = -(sum + product) % 10;
                            //console.log(result);
                        }

                    }

                    while (result < 0) {
                        result += 10; // get positive modulo answer
                    }

                    if (result == check) {
                        result = i; // store number found
                        break
                    }
                }
            }
            // Looking for the check digit
            else {
                sum += sinSum(main);
                result = -sum % 10;
                while (result < 0) {
                    result += 10; // get positive mudolue answer
                }
            }
        }
        return letter + " = " + result;
    }
    // Check if input is valid
    else {
        if (x.length != 9) {
            return "Please type a 9 digits number";
        } else {
            sum = sinSum(main);
            result = -sum % 10;
            while (result < 0) {
                result += 10;
            }
            if (result == check) {
                return "Valid SIN Number";
            }
            else {
                return "Invalid SIN Number";
            }
        }
    }

}
// UPC NUMBER QUESTIONS :

function upcSum(main) {
    let sum = 0;
    for (i = 0; i < main.length; i++) {
        if (!isNaN(main[i])) {
            if (i == 0 || i % 2 == 0) {
                let product = parseInt(main[i]) * 3;
                //console.log(product);
                sum += product;
            }
            else {
                //console.log(x[i]);
                sum += parseInt(main[i]);
            }
        }
    }
    return sum;
}

function upcNumber(x) {
    let check = x[x.length - 1]; // check digit
    let letter; // store letter
    let location; // store location of letter
    let sum = 0;
    let result; // store final result
    let main = x.slice(0, x.length - 1); // store main part

    // Loop to find letter and location
    for (i = 0; i < x.length; i++) {
        if (isNaN(x[i])) {
            letter = x[i];
            location = i;
        }
    }
    if (isNaN(x)) {
        if (x.length == 12 || x.length == 7) {
            if (location != x.length - 1) {
                //console.log(main);
                sum += upcSum(main);
                //console.log(sum);
                for (i = 0; i < 10; i++) {
                    if (location == 0 || location % 2 == 0) {
                        result = -(sum + (3 * i)) % 10; // tripples every other number starting from first
                        //console.log(result, "1");
                    }
                    else {
                        result = -(sum + i) % 10;
                        //console.log(result, "2")
                    }
                    while (result < 0) { // turn result into a positive number
                        result += 10
                    }
                    if (result == check) {
                        result = i;
                        break;
                    }
                }
            }
            else {
                sum += upcSum(main);
                result = -sum % 10;
                while (result < 0) {
                    result += 10;
                }
            }
            while (result < 0) {
                result += 10;
            }
        }
        return letter + " = " + result;
    }
    else {
        if (x.length != 12 && x.length != 7) {
            return "Please type a 12 or 7 digits number";
        }
        else {
            sum += upcSum(main);
            result = -sum % 10;
            while (result < 0) {
                result += 10;
            }
            if (result == check) {
                return "Valid UPC Number";
            }
            else {
                return "Invalid UPC Number";
            }
        }
    }
}

// ISBN NUMBERS QUESTION :

function isbnNumber(x) {
    let check = x[x.length - 1]; // check digit
    let letter; // store letter
    let location; // store location of letter
    let sum = 0;
    let result; // store final result
    let main = x.slice(0, x.length - 1); // store main part

    // Loop to find letter and location
    for (i = 0; i < x.length; i++) {
        if (isNaN(x[i])) {
            letter = x[i];
            location = i;
        }
    }

    if (isNaN(x)) {
        if (x.length == 10) {
            if (location != x.length - 1) { // look for variable that is not a check digit
                for (i = 0; i < main.length; i++) {
                    if (!isNaN(main[i])) {
                        sum += main[i] * (i + 1);
                    }
                }

                for (i = 0; i < 10; i++) {
                    result = (sum + (i * (location + 1))) % 11;
                    console.log(result);
                    if (result == check) {
                        result = i;
                        break
                    }
                }
            }
            else { // look for the check digit
                for (i = 0; i < main.length; i++) {
                    if (!isNaN(main[i])) {
                        sum += main[i] * (i + 1);
                    }
                }
                result = sum % 11;
                while (result < 0) {
                    result += 11;
                    console.log(result);
                }
            }
        }
        if (result == 10) { 
            result = "X"
        }
        return letter + " = " + result;
    }
    else { // validate input
        if (x.length != 10){
            return "Please type a 10 digits number";
        }
        else {
            for (i = 0; i < main.length; i++) {
                if (!isNaN(main[i])) {
                    sum += main[i] * (i + 1);
                }
            }
            if (sum % 11 == check) {
                return "Valid ISBN Number";
            }
            else {
                return "Invalid ISBN Number";
            }
        }
    }
}

function q1() {
    var input = document.getElementById("q1").value;
    var output = document.getElementById("a1");

    output.innerHTML = airlineTicket(input);

}

function q2() {
    var input = document.getElementById("q2").value;
    var output = document.getElementById("a2");

    output.innerHTML = sinNumber(input);
}

function q3() {
    var input = document.getElementById("q3").value;
    var output = document.getElementById("a3");

    output.innerHTML = upcNumber(input);
}
function q4() {
    var input = document.getElementById("q4").value;
    var output = document.getElementById("a4");

    output.innerHTML = isbnNumber(input);
}