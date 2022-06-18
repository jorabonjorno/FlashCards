class Quiz {
  #cursor;
  #topics;

  constructor(topics = []) {
    this.#cursor = 0;
    this.#topics = topics;
  }

  restart() {
    this.#cursor = 0;
  }

  countTopics() {
    return this.#topics.length;
  }

  getAllTopics() {
    return this.#topics;
  }

  getTopic() {
    const result = this.#topics[this.#cursor];
    this.#cursor += 1;
    return result;
  }
}
