import inquirer from "inquirer";
let myBalance = 10000;
const pinNumber = 1234;
const pinAnswar = await inquirer.prompt({
    type: "number",
    name: "pin",
    message: "Please Enter Your Number"
});
if (pinAnswar.pin === pinNumber) {
    console.log("Correct Pin NO");
    const operationAnswar = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select one of the following",
            type: "list",
            choices: ["Cash Withdrawal", "Balance Inquiry"]
        }
    ]);
    console.log(operationAnswar.operation);
    if (operationAnswar.operation === "Cash Withdrawal") {
        let amoutAnswar = await inquirer.prompt([
            {
                name: "amout",
                type: "number",
                message: "Enter Amount"
            }
        ]);
        myBalance -= amoutAnswar.amout;
        console.log(`Your Remaining balance is ${myBalance}`);
    }
    else if (operationAnswar.operation === "Balance Inquiry")
        console.log(`Your Balance is ${myBalance}`);
}
else {
    console.log("Correct The Pin No and Try aa");
}
