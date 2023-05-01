function sumValues(num1, num2, add) {
    if(add) {
        const result = 0;
        result = num1 + num2;
        console.log(result);
    } else return;

    console.log(result);
}

function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for(let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    console.log(discounted);
}


let student = {
    name: "Sarah",
    major: "Computer Science",
    "Grad Year": "2022",
    greeting: function(){console.log("hello")},
    "Favorite Teacher": {
        name: "powell",
        course: "cse110"
    },
    courseLoad: ["CSE110", "asdfasd"]
};

console.log(student.courseLoad[0]);

//hello