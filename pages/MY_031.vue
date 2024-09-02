<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">내 정보</h2>
      <p class="paragraph"><strong>인공지능 써니</strong>님 안녕하세요.</p>
    </div>

    <CTabs class="type-01" :index="2" :title="['회원정보', '이용약관', '이용내역', '가족계정']" />

    <div class="history-wrap">
      <CTabs class="type-02" :index="0" :title="['로그인', '인증이력', '서비스 이력']" />

      <article>
        <div class="filter-box">
          <div class="term-calendar">
            <label for="termStart">
              <input id="termStart" type="text" value="2023.01.01" />
            </label>
            <span>~</span>
            <label for="termEnd">
              <input id="termEnd" type="text" value="2023.12.31" />
            </label>
          </div>
          <div class="term-buttons">
            <button type="button" class="active">오늘</button>
            <button type="button">일주일</button>
            <button type="button">1개월</button>
            <button type="button">3개월</button>
          </div>
        </div>
        <div class="history-table">
          <table>
            <colgroup>
              <col width="20%" />
              <col width="*" />
              <col width="20%" />
            </colgroup>
            <tbody>
              <tr>
                <td class="site">mySUNI</td>
                <td><strong class="title">서비스 가입</strong></td>
                <td class="date">오늘 오전 5:30</td>
              </tr>
              <tr>
                <td class="site">mySUNI ON</td>
                <td><strong class="title">서비스 가입</strong></td>
                <td class="date">오늘 오전 5:30</td>
              </tr>
              <tr>
                <td class="site">mySUNI ON</td>
                <td><strong class="title">회원정보 변경</strong></td>
                <td class="date">오늘 오전 5:30</td>
              </tr>
              <tr>
                <td class="site">mySUNI ON</td>
                <td><strong class="title">비밀번호 변경</strong></td>
                <td class="date">오늘 오전 5:30</td>
              </tr>
              <tr>
                <td class="site">통합ID</td>
                <td><strong class="title">닉네임 변경</strong></td>
                <td class="date">오늘 오전 5:30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Edit 2024-02-19 : 화살표버튼과 숫자 버튼 구분위한 테그 추가 -->
        <div class="pagination">
          <div class="arrow-wrap">
            <button type="button" class="button-move first">처음으로 이동</button>
            <button type="button" class="button-move prev">처음으로 이동</button>
          </div>
          <div class="paging-wrap">
            <button type="button" class="current">997</button>
            <button type="button">998</button>
            <button type="button">998</button>
            <button type="button">998</button>
            <button type="button">999</button>
          </div>
          <div class="arrow-wrap">
            <button type="button" class="button-move next">다음으로 이동</button>
            <button type="button" class="button-move last">마지막으로 이동</button>
          </div>
        </div>
        <!-- //Edit 2024-02-19 : 화살표버튼과 숫자 버튼 구분위한 테그 추가 -->
      </article>
    </div>
  </div>
</template>
