function solve(input){
// [A-Za-z]
// \d
    let letterPatt = /[A-Za-z]/g
    let digitPatt = /\d/g
    let names = input.shift().split(', ')
    let obj = {}

    for(let name of names){
        obj[name] = 0
    }

    while(input[0] !== 'end of race'){
        let line = input.shift()
        let letters = line.match(letterPatt)
        let digits = line.match(digitPatt)

        let name = letters.join('')
        let digitsArr = digits.map(Number)

        let total = 0
        for(let el of digitsArr){
            total += el
        }

        if(obj.hasOwnProperty(name)){
            obj[name] += total
        }

        
    }
    let result = Object.entries(obj).sort((a,b) => b[1]-a[1])
    
        let player1 = result[0]
        console.log(`1st place: ${player1[0]}`)

        let player2 = result[1]
        console.log(`2nd place: ${player2[0]}`)

        let player3 = result[2]
        console.log(`3rd place: ${player3[0]}`) 
}

solve(["George, Peter, Bill, Tom",
"G4e@55or%6g6!68e!!@",
"R1@!3a$y4456@",
"B5@i@#123ll",
"G@e54o$r6ge#",
"7P%et^#e5346r",
"T$o553m&6",
"end of race"])