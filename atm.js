const out = {}
function atm(num) {
    if(num < 100 || num%100 != 0) console.log("please eneter a valoid amount!!")
    else if (num >= 2000) {
        let val = num % 2000
        out[2000] = Math.floor(num / 2000)
        atm(val)
    }
    else if (num >= 500 && num < 2000) {
        let val1 = num % 500
        out[500] = Math.floor(num / 500)
        atm(val1)
    }
    else if (num >= 200 && num < 500) {
        let val2 = num % 200
        out[200] = Math.floor(num / 200)
        atm(val2)
    }
    else if (num >= 100 && num < 200) {
        out[100] = Math.floor(num / 100)

    }
    return out;

}