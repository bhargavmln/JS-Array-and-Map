//Die roll and ma the outcome
{
    console.log(" ")
    let myMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
    let check = true;
    while (check) {
        let roll = ((Math.floor(Math.random() * 10)) % 6) + 1;
        switch (roll) {
            case 1:
                check = incrementValue(myMap, 1)
                break;
            case 2:
                check = incrementValue(myMap, 2)
                break;
            case 3:
                check = incrementValue(myMap, 3)
                break;
            case 4:
                check = incrementValue(myMap, 4)
                break;
            case 5:
                check = incrementValue(myMap, 5)
                break;
            case 6:
                check = incrementValue(myMap, 6)
                break;
        }
    }
    console.log(findMinValue(myMap) + " occured minimum number of times");
    console.log(myMap);

    function findMinValue(map) {
        let min = 10;
        let getKey;
        for (let key of map.keys()) {
            if (map.get(key) < min) {
                min = map.get(key);
                getKey = key
            }
        }
        return getKey;
    }

    function incrementValue(myMap, key) {
        let check = true;
        let value = myMap.get(key) + 1;
        myMap.set(key, value)
        if (myMap.get(key) == 10) {
            check = false;
            console.log(key + " occured maximum number of times");
        }
        return check;
    }
}
console.log(" ")
//Get birthdays in a month
{
    let myMap = new Map();
    for (i = 1; i <= 50; i++) {
        let month = ((Math.floor(Math.random() * 100)) % 12) + 1;
        myMap.set(i, month);
    }
    for(j=1;j<=12;j++){
    console.log("Id of people with Birthday in month "+ j +" is: " + BdaysInAMonth(myMap, j));
    }

    function BdaysInAMonth(myMap, month) {
        let monthArray = [];
        for (let [k, v] of myMap) {
            if (v == month)
                monthArray.push(k)
        }
        return monthArray;
    }
}
