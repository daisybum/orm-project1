const $input = document.querySelector('input')
const $botButton = document.querySelector('#tryButton')
const $feedbackInput = document.querySelector('#feedbackInput')
const $feedbackButton = document.querySelector('#feedbackButton')

const data = []
data.push({
  "role": "system",
  "content": "챗봇은 금융 시장에 대해 설명해주는 경제 선생님입니다."
})

const url = `https://open-api.jejucodingcamp.workers.dev/`


function simulateResponse() {
  var userInput = document.getElementById("userInput").value;
  var response = '"' + userInput + '" 에 대한 챗봇의 대답을 반환합니다.';

  addSpeechBubble(userInput, 'user')
  addSpeechBubble(response, 'bot')

  // 입력창 초기화
  document.getElementById("userInput").value =''
}

$feedbackButton.addEventListener('click', e => {
  e.preventDefault()
  const feedback = $feedbackInput.value
  // 피드백을 처리하는 로직 추후 업데이트
  console.log("Received feedback:", feedback);
  $feedbackInput.value = '' // Clear the feedback field.
})

function addSpeechBubble(text = null, sender) {
  var content = text || document.getElementById("userInput").value.trim();

  if (content !== "") {
    var container = document.getElementById("dialog-container");
    var bubble = document.createElement("div");

    bubble.classList.add("speech-bubble", sender)
    bubble.innerHTML = content;

    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  }
}