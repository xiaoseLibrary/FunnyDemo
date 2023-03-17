<template>
  <div class="p-10">
    <goBackBtn></goBackBtn>
    <section>
      <div class="chat-container">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="message"
          :class="{ 'is-bot': message.sender === 'bot' }"
        >
          <div class="message-content">{{ message.text }}</div>
        </div>
        <div class="input-container">
          <input
            v-model="inputText"
            @keyup.enter="send"
            placeholder="输入消息"
          />
          <button @click="send">发送</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      messages: [],
      inputText: ""
    };
  },
  methods: {
    async send() {
      if (!this.inputText) {
        return;
      }
      this.messages.push({ sender: "user", text: this.inputText });
      let api_key = "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";
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/davinci-codex/completions",
          {
            prompt: `User: ${this.inputText}\nBot:`,
            max_tokens: 128,
            n: 1,
            stop: "\n"
          },
          {
            headers: {
              "Authorization": `Bearer ${api_key}`,
              "Content-Type": "application/json"
            }
          }
        );
        const botMessage = response.data.choices[0].text.trim();
        this.messages.push({ sender: "bot", text: botMessage });
      } catch (error) {
        console.error(error);
        this.messages.push({ sender: "bot", text: "出了点小问题，请稍后再试" });
      }
      this.inputText = "";
    }
  }
};
</script>
<style scoped>
.chat-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: lightblue;
}

.message {
  display: flex;
  margin-bottom: 8px;
}

.is-bot .message-content {
  margin-left: auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  color: #0084ff;
}

.message-content {
  max-width: 60%;
  background-color: #0084ff;
  color: white;
  border-radius: 8px;
  padding: 8px;
}

.input-container {
  margin-top: 16px;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  width: 80%;
}

button {
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #0084ff;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
