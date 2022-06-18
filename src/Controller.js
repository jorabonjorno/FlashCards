class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  async run() {
    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки
    // Здесь this.printTopicsController — является callback'ом  
    // this.model.readTopics(this.printTopicsController)
    const chosenTopic = await this.printTopicsController();
    const questions = await this.printQuestionsController(chosenTopic);
  }

  async printTopicsController() {
    // Тут нужно попросить экземпляр класса view вывести меню пользователю, 
    // а также дождаться ответа последнего
    const topicList = await this.model.getTopics();
    return this.view.render(topicList); // получить ответ от пользователя
  }

  async printQuestionsController(chosenTopic) {
    // Тут нужно попросить экземпляр класса view вывести меню пользователю, 
    // а также дождаться ответа последнего
    let questionList = await this.model.getQuestions(chosenTopic);
    let printer;
    for (let q of questionList) {
      printer = 'Ведущий: ';
      const answer = await this.view.render(q[0]);

      if (answer == q[1]) {
        printer += 'Верно!';
      } else {
        printer += 'Вы ошиблись.';
      }
      printer += '\n';

      console.log(printer);
    }
    this.view.rl.close();
  }
}

module.exports = Controller;
