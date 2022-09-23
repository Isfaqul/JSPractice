let romanToInt = function(s) {
    const MAP = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let integer = 0;
    let sArray = s.split("")
    
    sArray.forEach(function(char, i) {
        // Comparing current char with the next char in the string
        if (MAP[char] < MAP[sArray[i + 1]]) {
            integer -= MAP[char]
        } else {
            integer += MAP[char]
        }
    })
    
    return integer;
};

console.log(romanToInt("MCMXCIV"));
