import inquirer from "inquirer";

let myBalance = 10000
const pinNumber = 1234
async function Atm(){

const pinAnswar = await inquirer.prompt(
    {
        type:"number",    
        name:"pin",
        message: "Please Enter Your pin Number"

    }

    )
    if(Number(pinAnswar.pin)===pinNumber){
        console.log("Correct Pin NO")

    const operationAnswar = await     inquirer.prompt([
            {
                name:"operation",
                message:"Please Select one of the following",
                type:"list",
                choices:["Cash Withdrawal", "Balance Inquiry", "Fast Cash"]
            }
        ])
                console.log(operationAnswar.operation)
                if(operationAnswar.operation==="Cash Withdrawal"){
                    let amoutAnswar = await inquirer.prompt([
                        {
                            name: "amout",
                            type: "number",
                            message:"Enter Amount"
                        }
                    ])
                    if(amoutAnswar.amout<=myBalance){
                        myBalance -= amoutAnswar.amout 
                    console.log(`Your Remaining balance is ${myBalance}`)
                    }
                    
                    else if(amoutAnswar.amout>myBalance){
                        
                        console.log("Insufficient Balance")
                    }
                }
                else if(operationAnswar.operation === "Balance Inquiry")
                {
                console.log(`Your Balance is ${myBalance}`)
                 }  

                 else if(operationAnswar.operation === "Fast Cash")
                 {
                    const fastCashAnswar = await inquirer.prompt([
                        {
                            name: "fashcash",
                            message:"Please Select One of the following",
                            type: "list",
                            choices:["1000", "2000", "5000"]
                        }
                    ])
                    if(fastCashAnswar.fashcash === "1000"){
                        myBalance -= 1000
                        console.log(`Your Remaining Balance is ${myBalance}`)
                    }
                    

                    else if(fastCashAnswar.fashcash === "2000"){
                        myBalance -= 2000
                        console.log(`Your Remaining Balance is ${myBalance}`)
                    }
                   
                    else if(fastCashAnswar.fashcash === "5000"){
                        myBalance -= 5000
                        console.log(`Your Remaining Balance is ${myBalance}`)
                    }
                }

            
    }

    else{
        console.log("Correct The Pin No and Try agian")
        Atm()
    }
}
Atm()