function countDown() {
    for (let i = 5; i > 0; i--) {
        console.log(i);
    }
}
countDown();

function countUp(start, end) {
    for (i = start; i <= end; i++) {
        console.log(i);
    }
}
countUp(0, 10);

function isLong(word) {
    if (word.length > 10) {
        return true;
    } else {
        return false;
    }
}
console.log(isLong("software developer"));

function whatWaterState(temperature) {
    if (temperature <= 32) {
        console.log("solid");
    } else if (temperature > 32 && temperature < 212) {
        console.log("liquid");
    } else if (temperature >= 212) {
        console.log("gas");
    }
}
whatWaterState(250);

let sandwiches = [
    {type: "italian", calories: 1000, cost: 7.69, isVegetarian: false},
    {type: "veggie", calories: 500, cost: 5.50, isVegetarian: true},
    {type: "meatball", calories: 900, cost: 8.25, isVegetarian: false},
    {type: "jackfruit", calories: 650, cost: 8.50, isVegetarian: true}
];
console.log(sandwiches);

function makeSandwich(array, type, calories, cost, isVegetarian) {
    let newSandwich = {type: type, calories: calories, cost: cost, isVegetarian: isVegetarian};
    array.push(newSandwich);
}
makeSandwich(sandwiches, "cheeseburger", 800, 7.50, false);
console.log(sandwiches);

function findVegetarianSandwich(array) {
    let vegetarianSandwich = array.find((item) => item.isVegetarian === true);
    return vegetarianSandwich;
}
findVegetarianSandwich(sandwiches);
console.log(findVegetarianSandwich(sandwiches));

function findCheapestSandwich(array) {
    let cheapestSandwich = array[0];
    array.forEach((item) => {
        if (item.cost < cheapestSandwich.cost) {
            cheapestSandwich = item;
        }
    });
    return cheapestSandwich;
}
console.log(findCheapestSandwich(sandwiches));