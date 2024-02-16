# ChatGPT 기반 경제 교육 챗봇 서비스
<img src="images/screenshot.png" width="100%">

## 1. 서비스 소개와 기능

### 1.1 서비스 소개
- 사용자들에게 대화 형식을 통해 경제 관련 지식을 제공하는 교육 플랫폼
- 다양한 경제 관련 기사와 교육 자료를 분석하여, 사용자가 쉽고 효과적으로 경제 개념을 이해하고 학습하도록 도움

### 1.2  주요 기능
- 대화식 학습: 챗봇과의 실시간 대화를 통해 경제 개념을 학습합니다.
- 다양한 학습 자료: 최신 경제 뉴스, 기사, 연구 자료 등을 기반으로 한 풍부한 교육 자료를 활용합니다.

## 2. 개발 환경 및 배표 URL

### 2.1 개발 환경
- 개발 환경: HTML, CSS, JavaScript
- 서비스 배포 환경: GitHub Page

### 2.2 배포 URL
- https://daisybum.github.io/orm-project1/#contact

### 2.3 URL 구조
- main

| App          | URL                           | Views Function    | HTML File Name                        | Note           |
|--------------|-------------------------------|-------------------|---------------------------------------|----------------|
| orm-project1 | '/orm-project1'               | main              | /orm-project1/index.html              | 홈화면          |
| orm-project1 | '/orm-project1/tutorial       | tutorial          | /orm-project1/assets/index.html       | 튜토리얼        |

## 3. 요구사항 및 기능 명세
```mermaid
sequenceDiagram
    participant U as 사용자
    participant AI as 기사/교육 자료 입력 창
    participant W as 웹 인터페이스
    participant S as 서버

    U->>AI: 기사 혹은 교육 자료 입력
    AI->>W: 입력된 기사/교육 자료 처리
    U->>W: 텍스트 영역 또는 입력 필드를 통한 질문
    W->>W: 사용자 입력 처리
    W->>S: 서버에 요청 전송 (질문 및 관련 기사/교육 자료 포함)
    Note over S: 서버 요청 처리
    S->>W: 응답 반환
    W->>U: 대화 버블로 결과 표시
    U->>W: 추가 질문 또는 피드백
    W->>S: 추가 요청 전송 (추가 질문 및 관련 기사/교육 자료 포함)
    Note over S: 추가 요청 처리
    S->>W: 추가 응답 반환
    W->>U: 대화 버블로 추가 결과 표시
```

## 4. 프로젝트 구조와 개발 일정
### 4.1 프로젝트 구조
```
📦orm-project1
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂aboutPage
 ┃ ┗ 📜index.html
 ┣ 📂assets
 ┃ ┣ 📂script
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜tutorial.js
 ┃ ┗ 📂style
 ┃ ┃ ┣ 📜about.css
 ┃ ┃ ┣ 📜main.css
 ┃ ┃ ┣ 📜normalize.css
 ┃ ┃ ┣ 📜reset.css
 ┃ ┃ ┗ 📜tutorial.css
 ┣ 📂tutorial
 ┃ ┗ 📜index.html
 ┣ 📜index.html
 ┗ 📜README.md
```

### 4.2 개발 일정(WBS)
* 아래 일정표는 머메이드로 작성했습니다.
```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       챗봇을 이용한 금융 상담 웹사이트

    section 기획
    챗봇 구성                         :          des1, 2024-02-13, 3h
    말풍선 및 챗봇 레이아웃             :         des2, after des7, 1h
    각 페이지 별 구성                :         des3, 2024-02-14, 6h

    section 디자인
    리디자인                         :          des4, 2024-02-15, 6h

    section 프론트엔드 개발
    메인                             :         des7, after des1, 4h
    챗봇                             :         des8, after des1, 4h
    말풍선                           :         des9, after des2, 3h
    챗봇 레이아웃                     :         des10, after des2, 5h
    말풍선                           :         des11, 2024-02-14, 3h
    챗봇 레이아웃                     :         des12, 2024-02-14, 6h
    리디자인 반영                     :         des13, after des4, 6h

    section 최종 조정 및 발표 준비
    웹사이트 전체 검토 및 테스트      :         des14, 2024-02-15, 3h
    마지막 조정 및 버그 수정          :         des15, after des14, 3h
    프로젝트 발표 준비                :         des16, after des15, 3h

    section 프로젝트 발표
    프로젝트 발표                     :         des17, 2024-02-16, 6h
```

## 5. 와이어프레임 / UI / BM

### 5.1 와이어프레임
<img src="images/main page.png" width="100%">
<br></br>
<img src="images/about page.png" width="100%">
<br></br>
<img src="images/tutorial.png" width="100%">


## 6. 에러 및 해결방법

### 6.1 단락 단위 줄바꿈 에러
- 챗GPT의 답변을 말풍선으로 출력할 때, 단락마다 줄바꿈이 이루어지지 않는 문제
    - 기존 코드:  ChatGPT의 응답을 받을 때, textContent 속성을 사용해서 텍스트를 추가함
        - textContent는 HTML 태그를 무시하고 순수한 텍스트만을 다룸
    - 해결책: textContent 대신, innerHTML을 이용하여 텍스트를 추가
        - innerHTML은 HTML 태그를 인식하므로 줄바꿈을 인식할 수 있음
- 문제 해결 실패
    - 챗GPT의 응답과 파싱 과정의 분석 필요

## 7. 개발하며 느낀점
1. 문서화 작업이 중요하다.
    - 프로젝트 문서화를 처음으로 경험하며, 문서에 꼭 포함되어야 할 내용과 작성시 주의사항을 습득
    - 다른 사람이 볼 때, 그리고 기술 문서를 업데이트 할 때, 가독성과 이해도를 높이기 위해 노력하였습니다.
    - 앞으로 README.md 파일을 작성할 때, 정해진 틀을 이용하고 GibHub README.md 파일들의 통일성을 높이고자 합니다.
2. 생각보다 자잘한 기능들의 구현이 중요하다.
    - 사용자 인터페이스를 구성할 때, 사용자는 쉽게 지나치는 기능들이 많고 그런 디테일을 잘 구현해야 한다는 사실을 깨달았습니다.
    - 디테일에 집중할 수 있는 시간은 빠른 작업 속도가 선행될 때 확보할 수 있다고 생각합니다.
    - 결론은 언제나 열심히 연습하고, 효율적 작업으로 작업 속도를 높이는 개발자가 되겠습니다.
