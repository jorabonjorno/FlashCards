class Question {
  #question;
  #answer;

  constructor(question = '', answer = '') {
    this.#question = question;
    this.#answer = answer;
  }

  getQuestion() {
    return this.#question;
  }

  getAnswer() {
    return this.#answer;
  }

  isItSo(value) {
    return this.#answer === value;
  }
}
