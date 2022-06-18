class Topic {
  #cursor;
  #title;
  #questions;

  constructor(title = 'untitled', questions = []) {
    this.#cursor = 0;
    this.#title = title;
    this.#questions = questions;
  }

  restart() {
    this.#cursor = 0;
  }

  getTitle() {
    return this.#title;
  }

  countQuestions() {
    return this.#questions.length;
  }

  getAllQuestions() {
    return this.#questions;
  }

  getQuestion() {
    const result = this.#questions[this.#cursor];
    this.#cursor += 1;
    return result;
  }
}
