const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $textarea = document.querySelector('textarea')
const articleButton = document.querySelector('#submitArticle');
const bubbleButton = document.querySelector('#addBubble');

const data = []
data.push({
  "role": "system",
  "content": "챗봇은 금융 시장에 대해 설명해주는 경제 선생님입니다."
})

const url = `https://open-api.jejucodingcamp.workers.dev/`

articleButton.addEventListener('click', function(event) {
  event.preventDefault();
  const contents = $textarea.value
  data.push({
    "role": "user",
    "content":  '다음 내용을 분석하고 요약해줘\n' + contents
  })

  chatGPTAPI()
});

bubbleButton.addEventListener('click', e => {
  e.preventDefault()
  const contents = $input.value
  data.push({
    "role": "user",
    "content": contents
  })
  $input.value = '' // Clear the input field.

  chatGPTAPI()
})

function chatGPTAPI() {
  showBufferingIndicator();

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      // 답변 온 것을 assistant로 저장
      addSpeechBubble(res.choices[0].message.content, "bot")
      hideBufferingIndicator();
    })
}

function addSpeechBubble(text=null, sender) {
  var content = text || document.getElementById("user-input").value.trim();

  if (content !== "") {
    var container = document.getElementById("dialog-container");
    var bubble = document.createElement("div");
    
    bubble.classList.add("speech-bubble", sender)
    bubble.innerHTML = content;

    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
  }
}

function showBufferingIndicator() {
  addSpeechBubble(" ", "loader");
}

function hideBufferingIndicator() {
  var container = document.getElementById("dialog-container");
  var bufferingBubbles = container.getElementsByClassName("loader");
  if (bufferingBubbles.length > 0) {
    container.removeChild(bufferingBubbles[0]);
  }
}