import inquirer from 'inquirer';
import chalk from 'chalk';

async function askQuestion() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.blue("Which operation do you want to perform?"),
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "firstNum",
            message: chalk.yellow("Enter First Number: ")
        },
        {
            type: "number",
            name: "secondNum",
            message: chalk.yellow("Enter Second Number: ")
        }
    ]);
    if (answers.operator == "Addition") {
        let output = answers.firstNum + answers.secondNum;
        console.log(chalk.greenBright(`${answers.firstNum} + ${answers.secondNum} = ${output}`));
    }
    else if (answers.operator == "Subtraction") {
        let output = answers.firstNum - answers.secondNum;
        console.log(chalk.greenBright(`${answers.firstNum} - ${answers.secondNum} = ${output}`));
    }
    else if (answers.operator == "Multiplication") {
        let output = answers.firstNum * answers.secondNum;
        console.log(chalk.greenBright(`${answers.firstNum} * ${answers.secondNum} = ${output}`));
    }
    else if (answers.operator == "Division") {
        let output = answers.firstNum / answers.secondNum;
        console.log(chalk.greenBright(`${answers.firstNum} / ${answers.secondNum} = ${output}`));
    }

};
async function restart() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "list",
                name: "question",
                message: chalk.blue("Do you want to perform more calculaitons?"),
                choices: ["Yes", "No"]
            }
        ])
    } while (again.question == "Yes")
}

restart();


