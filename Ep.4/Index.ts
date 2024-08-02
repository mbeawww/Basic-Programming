// function sayHi(dayOfWeek: number) {
   // if (dayOfWeek ===1) {
        //console.log('อาทิตย์')
    //} else if (dayOfWeek ===2) {
        //console.log('จันทร์')
    //}else if (dayOfWeek ===3) {
        //console.log('อังคาร')
    //}else if (dayOfWeek ===4) {
        //console.log('พุธ')
    //}else if (dayOfWeek ===5) {
        //console.log('พฤหัสบดี')
    //}else if (dayOfWeek ===6) {
        //console.log('ศุกร์')
    //}else if (dayOfWeek ===7) {
        //console.log('เสาร์')
    //}else if (dayOfWeek >7) {
        //console.log('Error')
//} 
//sayHi (4)
//}

function sayHii(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
        default:
            console.log(Error)
            break
    }
}
sayHii (10)

function getBmi(f:number,o:number) {
    const bmi = f / ((o / 100) * (o / 100))
    switch (true) {
        default:
            console.log('ผิดพลาด')
            break
        case bmi <18.50:
            console.log('นำหนักน้อย/ผอม')
            break
        case bmi >18.50 && bmi < 22.90:
            console.log('ปกติ/สุขภาพดี')
            break
        case bmi >22.90 && bmi < 24.90:
            console.log('โรคอ้วนระดับ 1')
            break
         case bmi >24.90 && bmi < 29.90:
            console.log('โรคอ้วนระดับ 2 ')
            break
         case bmi >30:
            console.log('อ้วนมาก/โรคอ้วนระดับ3')
            break
    } 
}
//const x: number = 41
//const y: number = 46.0
//console.log((x*10 + y *10) / 10)
//console.log(y.toFixed())
//const a: number = 41
//const z: number = 46
//console.log(z.toPrecision(7))
//const s:string = '46.25'
//console.log(parseFloat('46.001'))

//function fl(f:number,d:number) {
  //  const p = f.toFixed(d)
 //   return p
//}

//console.log(fl (115,4))

//function og(q:number) {
   // const l = q.toLocaleString()
 //   return l
//}
//console.log (og(30000))

//const zx: string = "kankawee"
//console.log(zx.indexOf(''))

//const zx: string = "Hello M,How are you"
//console.log(zx.length)

//const zx: string = "Hello"
//console.log(zx.charAt(0))

//console.log(zx.trim())

//console.log(zx.toUpperCase())

//console.log(zx.indexOf(''))

