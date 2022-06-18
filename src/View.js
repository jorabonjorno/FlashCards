class View {
  rl;

  constructor(rl) {
    this.rl = rl;
  }

  async render(text) {
    return await this.rl.question(`${text}\n`);
  }
}

module.exports = View;
