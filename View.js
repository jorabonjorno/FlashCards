const readline = require('readline')
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
// const fs = require('fs/promises')
// const r = await () => {
//   const readDir = fs.readdir('./topics')
//   for (let i = 0; i<readDir.length)
//   const readFile = fs.readFile()
// }

const fs = require('fs')
const readDir = fs.readdirSync('./topics')
const readfile = fs.readFileSync('./topics/1.txt')

// console.log(`${readDir.join('\n')}`)
rl.question(`${readDir.join('\n')} \n`, (answer) => {
  if(answer === readDir[0]) {
    rl.question(`${readfile.split('\n')[0]}`, (answer) => {
      // answer === `${readfile.split('\n')[1]}` ? console.log('Правильно') : console.log('Не правильно')
      // rl.question('Второй вопрос? \n', (answer) => {
      //   console.log(
      //       `Ответ: ${answer} - true/false`
      //   );
      //   rl.question('Третий вопрос? \n', (answer) => {
      //     console.log(
      //         `Ответ: ${answer} - true/false`
      //     );
      rl.close();
    })
  // });
  // });
}
})


class View {
  constructor() {

  }
}

module.exports = View
