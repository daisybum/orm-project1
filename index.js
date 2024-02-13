const $input = document.querySelector('input')
const $button = document.querySelector('button')
const $answer = document.querySelector('.answer')

const data = []
data.push({
    "role": "system",
    "content": "assistant는 점심시간 메뉴를 추천해주는 요리사입니다."
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
            $answer.innerHTML = `<p>${res.choices[0].message.content}</p>`
        })
        .catch(error => {
            console.error('Error:', error);
            $answer.innerHTML = `<p>Error loading response</p>`;
        });
}

document.addEventListener('DOMContentLoaded', (event) => {
    const style = document.createElement('style');
    style.textContent = `
      body {
        font-family: Arial, sans-serif;
      }
      .navbar {
        display: flex;
        justify-content: flex-end;
        padding: 10px;
      }
      .navbar a {
        margin-left: 20px;
        text-decoration: none;
        color: black;
      }
      .container {
        display: flex;
        padding: 20px;
      }
      .left-panel {
        flex: 2;
        border: 2px solid #ccc;
      }
      .right-panel {
        flex: 1;
        margin-left: 20px;
      }
      .footer {
        padding: 10px;
        background-color: #f3f3f3;
        text-align: center;
      }
      button {
        padding: 10px;
        width: 100%;
      }
    `;
    document.head.appendChild(style);
});

function buttonClicked() {
    alert('Button was clicked!');
}