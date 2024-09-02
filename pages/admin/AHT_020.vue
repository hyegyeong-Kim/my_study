<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <!-- 검색조건 -->
    <div class="area-contition">
      <table>
        <!-- Add 23-10-19 -->
        <colgroup>
          <col width="105px" />
          <col width="" />
          <col width="125px" />
          <col width="" />
          <col width="95px" />
          <col width="" />
        </colgroup>
        <!-- //Add 23-10-19 -->
        <tbody><!-- Add 23-10-19 tbody -->
          <tr>
            <th>사용자</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
              <label class="input-wrap">
                <input type="text" />
              </label>
            </td>
            <th>접속 위치</th>
            <td>
              <span class="el-radio">
                <input id="locationRadio1" type="radio" name="locationRadio" checked />
                <label for="locationRadio1">전체</label>
              </span>
              <span class="el-radio">
                <input id="locationRadio2" type="radio" name="locationRadio" />
                <label for="locationRadio2">국내</label>
              </span>
              <span class="el-radio">
                <input id="locationRadio3" type="radio" name="locationRadio" />
                <label for="locationRadio3">해외</label>
              </span>
            </td>
            <th>로그인 방식</th>
            <td>
              <span class="el-radio">
                <input id="loginTypeRadio1" type="radio" name="loginTypeRadio" checked />
                <label for="loginTypeRadio1">전체</label>
              </span>
              <span class="el-radio">
                <input id="loginTypeRadio2" type="radio" name="loginTypeRadio" />
                <label for="loginTypeRadio2">직접 로그인</label>
              </span>
              <span class="el-radio">
                <input id="loginTypeRadio3" type="radio" name="loginTypeRadio" />
                <label for="loginTypeRadio3">대체 로그인</label>
              </span>
            </td>
          </tr>
          <tr>
            <th>로그인 서비스</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <th>로그인 성공 여부</th>
            <td>
              <span class="el-radio">
                <input id="loginSuccessRadio1" type="radio" name="loginSuccessRadio" checked />
                <label for="loginSuccessRadio1">전체</label>
              </span>
              <span class="el-radio">
                <input id="loginSuccessRadio2" type="radio" name="loginSuccessRadio" />
                <label for="loginSuccessRadio2">성공</label>
              </span>
              <span class="el-radio">
                <input id="loginSuccessRadio3" type="radio" name="loginSuccessRadio" />
                <label for="loginSuccessRadio3">실패</label>
              </span>
            </td>
            <th>발생 일시</th>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
              <span>~</span>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
          </tr>
        </tbody><!-- Add 23-10-19 tbody -->
      </table>
      <button type="submit" class="submit">조회</button>
    </div>

    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">사용자 로그인 이력</h3>
      <div class="count">총 <span>12</span>건</div>
      <div class="buttons">
        <label class="select-wrap">
          <select>
            <option value="">10개씩 보기</option>
            <option value="">25개씩 보기</option>
            <option value="">50개씩 보기</option>
            <option value="">100개씩 보기</option>
          </select>
        </label>
      </div>
    </div>

    <!-- 그리드 -->
    <div class="area-result">
      <table>
        <thead>
          <tr>
            <th>순번</th>
            <th>E-mail ID</th>
            <th>이름</th>
            <th>로그인 서비스</th>
            <th>접속 위치</th>
            <th>IP</th>
            <th>접속 단말</th>
            <th>OS</th>
            <th>브라우저</th>
            <th>로그인 방식</th>
            <th>로그인 성공 여부</th>
            <th>발생 일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>aaaaa**@sk.com</td>
            <td>김*니</td>
            <td>LMS</td>
            <td>국내</td>
            <td>111.111.111.111</td>
            <td>thinkpad 6</td>
            <td>Windows 11</td>
            <td>Edge</td>
            <td>대체 로그인</td>
            <td>성공</td>
            <td>2023-12-31 00:00</td>
          </tr>

          <!-- 결과 없을 경우 -->
          <tr>
            <td colspan="999">
              <p class="no-result">조회내역이 없습니다.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="box-pagination">
        <a href="" class="move first">첫페이지 이동</a>
        <a href="" class="move prev">이전페이지 이동</a>
        <a href="">991</a>
        <a href="">992</a>
        <a href="">993</a>
        <a href="">994</a>
        <a href="" class="current">995</a>
        <a href="">996</a>
        <a href="">997</a>
        <a href="">998</a>
        <a href="">999</a>
        <a href="">1000</a>
        <a href="" class="move next">다음페이지 이동</a>
        <a href="" class="move last">마지막페이지 이동</a>
      </div>
    </div>
  </div>
</template>
