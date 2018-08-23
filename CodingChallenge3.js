//Array of bills
let bills = [124, 48, 268];

// Array containing all three tips (one for each bill)
let tips = [];

//Array containing all three final paid amounts (bill + tip)
let finalAmount = [];


function tipCalculator () {
    bills.forEach(function (bill) {
        let tip = 0;
        let total;

        console.log(bill);

        if (bill <= 50) {
            tip = (bill / 100) * 20;
            total = bill + tip;
        }
        else if (bill <= 200) {
            tip = (bill / 100) * 15;
            total = bill + tip;
        }
        else if (bill >= 201) {
            tip = (bill / 100) * 10;
            total = bill + tip;
        }

        if (tip !== 0) {
            tips.push(tip);
            finalAmount.push(total);
        }
    });
};

tipCalculator();
console.log(tips);
console.log(finalAmount);