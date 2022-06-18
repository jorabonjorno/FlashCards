class Model {
  #path = './topics/';
  #topicFiles;
  #topicArray;

  constructor(fsp) {
    this.fsp = fsp;
  }

  async loadData() {
    this.files = this.fsp.readdir(this.#path);
    // Promise.all([]); можно прочитать все файлы асинхронно...
  }

  async getTopics() {
    this.#topicFiles = await this.fsp.readdir(this.#path);
    this.#topicArray = this.#topicFiles
      .map(
        (c, i) => `${1+i}: ${c}`
      )
      .join('\n')
      .replace('.txt', '');
    return this.#topicArray;
  }

  async getQuestions(chosenTopic) {
    const topic = Number(chosenTopic);

    if (!topic && isNaN(topic)) {
      throw new Error('Укажите корректный номер темы!');
    }

    if (!this.#topicArray && !Array.isArray(this.#topicArray)
    ) {
      throw new Error('Не удается получить список тем!');
    }

    if (!this.#topicArray[topic - 1]) {
      throw new Error('Нет такой темы!');
    }

    const filepath = this.#path + this.#topicFiles[topic - 1];
    const text = await this.fsp.readFile(filepath, 'utf-8');

    return text.trim().split('\n\n').map(c => c.split('\n'));
  }
}

module.exports = Model;
