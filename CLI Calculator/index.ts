import inquirer from 'inquirer';
import chalkAnimation, { rainbow } from 'chalk-animation';
import chalk from 'chalk';

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    })
};

async function welcome() {
    let animatedTitle = chalkAnimation.rainbow(`_________Calculator___________`);
    await sleep();
    animatedTitle.stop();
    console.log(chalk.red(`     _____________________
    |  _________________  |
    | |      Zaid.E     | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `))
};
await welcome();

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


