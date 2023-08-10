module.exports = function toReadable(n) {
    let ones = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve', 
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    let tens = [
        'zero',
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ]



    if (n <= 19) {               
        return ones[n]
    }

      
    if(n > 10 && n < 100 && n % 10 === 0) {         
        return tens[n/10]
    }

    if(n > 10 && n < 100 && n % 10 !==0) {
        return `${tens[Math.floor(n / 10)]} ${ones[n % 10]}`
    }

    if(n > 99 && n < 1000 && n % 100 === 0) {         
        return `${ones[n / 100]} hundred`
    }

    if(n > 100 && n < 1000 && n % 100 !==0 && n % 10 === 0) {
        return `${ones[Math.floor(n / 100)]} hundred ${tens[(n / 10) % 10]}`
    }

    if(n > 100 && n < 1000 && n % 100 !==0 && n % 10 !==0 && n % 100 < 20) {
        return `${ones[Math.floor(number/100)]} hundred ${ones[number%100]}`
    } 
   
    if(n > 100 && n < 1000 && n % 100 !==0 && n % 10 !==0 && n % 100 !==11 && n % 100 > 19) {
        return `${ones[Math.floor(n/100)]} hundred ${tens[(Math.floor(n / 10)) % 10]} ${ones[n % 10]}`
    } 
}