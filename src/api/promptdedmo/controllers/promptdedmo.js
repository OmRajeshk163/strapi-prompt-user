'use strict';

module.exports = {
  async get_promptsync(ctx) {
    const prompt = require("prompt-sync")({ sigint: true });
    const age = prompt("How old are you? ");
    const name = prompt("who are you? ");
    console.log(`You are ${age} years old.`);
    console.log(`You are ${name}.`);
    ctx.send([`You are ${name}.`,`You are ${age} years old.`])
  }
}
