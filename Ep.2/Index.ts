function  add(a: number, b: number) {
    return a + b
}

console.log (add(5, 10))


function minus(a: number, b:number) {
    return a - b
}

console.log (minus(7, 6))

function multiple(a: number, b:number, c: number) {
    return a * b * c
}

console.log (multiple(9, 10, 10))

function grade(h: number, m:number, s: number) {
    let score: number = h + m + s

    if(score < 50) {
        return 'เกรดF'
    }else if(score < 60 ) {
        return 'เกรดD'
    }else if(score < 70) {
        return 'เกรดC'
    }
}

console.log(grade(10,45,5))
