function helloWorld() {
    console.log('Hi')
}
//ไม่รับ input ไม่มี output

function secondHello(name: string) {
    console.log(name)
} // รับ input แต่ไม่ output

secondHello('M')

function getPi() {
    return 3.14
}

console.log(getPi())

function st(fname: string, sname: string, tname: string) {
    if (!(fname === 'nan' || sname === 'pleum') && tname === 'yo') {
        console.log('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}



st('pleum', 'nan', 'yo')


function gen(f: string, h: number, w:number) {
    if (f === 'เพศชาย' && h > 170 === w < 80 ) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่ต้องเกณฑ์')
    }
}


gen('เพศชาย', 170,17)

function ao(l: string,e: number, q:number):string {
    if (l === 'เพศชาย' && e >= 170 &&  (q > 50 && q<= 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่ต้องเกณฑ์')
    }
        
}

ao('เพศชาย',170,111)

function aa(height: number,weight: number): {
    const bmi = weight / (height* height)
    let (nn:string)
    if (bmi < 18.50) {
        return ="น้ำหนักน้อย/ผอม"
    }else if (bmi >= 18.50&&bmi <=22.90) {
        return ="ปกติ(สุขภาพดี)"
    }else if (bmi >= 23&&bmi <=24.90) {
        return ="ท้วม/โรคอ้วนระดับ 1"
    }else if (bmi >= 25&&bmi <=29.90) {
        return ="อ้วน/โรคอ้วนระดับ 2"
    }else if (bmi >= 30) {
        return ="อ้วนมาก/โรคอ้วนระดับ 3"
    }
}

console.log(aa(170,60))