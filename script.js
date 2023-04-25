const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");

sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText.length > 0) {
    const userMessageElement = document.createElement("div");
    userMessageElement.textContent = messageText;
    userMessageElement.style.fontWeight = 'bold';
    chatMessages.appendChild(userMessageElement);
    messageInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Add application response
    handleUserInput(messageText);
  }
}

function handleUserInput(input) {
  let response = '';

  if (input.toLowerCase().includes("hello")) {
    response = "Hi! How can I help you?";
  } else if (input.toLowerCase().includes("how are you")) {
    response = "I'm a chat application, I don't have feelings, but I'm here to help!";
  } else {
    response = "I'm not sure how to respond to that. Can you please rephrase your question?";
  }

  const responseElement = document.createElement("div");
  responseElement.textContent = response;
  responseElement.style.color = "#D9D9D9";
  chatMessages.appendChild(responseElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
