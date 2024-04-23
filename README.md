
<h1>JSG Stroy</h1>
<img src='https://github.com/JSG-8579/sudoku/assets/54690444/3e45f184-80e1-4729-98f2-823ce5280403' width='700' height='300'>
<ul>
  <li>프로젝트 소개: Vue를 활용하여 스도쿠의 게임을 만들었습니다..</li>
  <li>프로젝트 인원: 본인</li>
  <li>프로젝트 기간: 2024-04-04 ~ 2024-04-16</li>
  <li>배포 URL: https://sudoku-kohl-tau.vercel.app/</li>
</ul>
<h1>SKILL</h1>
<div>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
  <img src="https://img.shields.io/badge/Vue-4FC08D?style=for-the-badge&logo=Vue&logoColor=white">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
  
  
  
</div>
<h1>Views 구성</h1>
<ul>
  <li>HomeView.Vue</li>
  <li>SudokuGameView.Vue</li>
  <li>GameRanking.Vue</li>
</ul>
<h1>Component 구성</h1>
<ul>
  <li>SudokuGame.Vue</li>
  <li>DifficultyText.Vue</li>
  <li>ExplanationText.Vue</li>
</ul>
<h1>Views 설명</h1>
<ul>
  <li>App.Vue로 공통되는 body와 main의 위치 및 크기를 잡고, 각각의 페이지를 Views로 url로 페이지가 전환되도록 하였습니다. </li>
  <li>Views인 SudokuGameView에 게임플레이, 난이도선택, 룰 설명 페이지를 component화 작업을 하였습니다.</li>
  <li>methods로 스도쿠 보드판을 생성하는 함수를 만들었고, mounted로 페이지가 로드 될때마다 스도쿠 보드생성 함수를 실행하도록 하였습니다.</li>
  <li>난이도 선택에 따라 vuex인 store에서 difficult 값을 변환하면서 난이도에 맞는 스도쿠판이 나오도록 했습니다.</li>
  <li>게임이 끝나면 MySQL데이터 서버를 활용하여 입력한 이름과 타이머의 시간을 가지고 랭킹리스트가 출력되게 하였습니다.</li>
</ul>
<h1>작업 후기</h1>
<p>vue로 간단한 미니게임을 만들어 보기위해서 예전에 제가 자주 플레이 했던 스도쿠라는 게임을 구현하려고 했습니다.</br>
간단해 보였지만, 이 스도쿠 보드판을 생성하는데 여러가지의 함수가 적용되는걸 알았고, 이것을 Vue 환경에서 적용하기위해</br>
노력을 많이 했습니다. 랭킹 시스템을 추가하면서 MySQL이라는 데이터서버를 활용하였고, 이 과정속에서도 많은 공부가 되었고,</br>
Vue를 알아가는데 도움이 많이 되었습니다.</p>
