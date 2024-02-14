const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $answer = document.querySelector('.answer')

const data = []
data.push({
  "role": "system",
  "content": "assistant는 경제에 대해 상담해주는 펀드 매니저입니다."
})

const url = `https://open-api.jejucodingcamp.workers.dev/`

$button.addEventListener('click', e => {
  e.preventDefault()
  const contents = $input.value
  data.push({
    "role": "user",
    "content": contents
  })
  $input.value = ''

  chatGPTAPI()
})

function chatGPTAPI() {
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
      addSpeechBubble(res.choices[0].message.content)
    })
    .catch(error => {
      console.error('Error:', error);
      $answer.innerHTML = `<p>Error loading response</p>`;
    });
}

function addSpeechBubble(text=null) {
  var content = text || document.getElementById("user-input").value.trim();

  if (content !== "") {
    var container = document.getElementById("dialog-container");
    var bubble = document.createElement("div");
    bubble.className = "speech-bubble";
    bubble.textContent = content;
    container.appendChild(bubble);

    // if (!text) {
    //   input.value = ""; // Clear the input field
    // }
  }
}