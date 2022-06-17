class Model {
  #topicPath = './topics/';
  topics;

  constructor(fsp) {
    this.fsp = fsp;
  }

  async getTopics() {
    this.topics = await this.fsp.readdir(this.#topicPath);
    return this.topics;
  }

  async getQuestions(topicNumber) {
    const filepath = this.#topicPath + this.topics[topicNumber - 1];
    let tmp = await this.fsp.readFile(filepath, 'utf-8');
    this.questions = tmp.trim().split('\n\n').map(c => c.split('\n'));
    return this.questions;
  }
}

module.exports = Model
