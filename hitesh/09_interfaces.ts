interface ItUser{
    name: String
    email?: string
    // startProcess:()=>void
    startProcess():void // OR
    // getCoupon?: (code: String) => string
    getCoupon?(code: string): string // OR
}

const itUser1: ItUser = {
    name: "Deepak",
    // startProcess:()=>{
    // }
    startProcess(){
    },
    getCoupon(code){
        return code
    }
}