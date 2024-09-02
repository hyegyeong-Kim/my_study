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
          <col width="85px" />
          <col width="" />
          <col width="105px" />
          <col width="" />
          <col width="85px" />
          <col width="" />
          <col width="85px" />
          <col width="" />
        </colgroup>
        <!-- //Add 23-10-19 -->
        <tbody><!-- Add 23-10-19 tbody -->
          <!-- 2024-04-03 해상도 1920관련 내용 tr 한줄에 최대 3쌍(th+td) 입력 가능하며 초과시 조회버튼이 넘어가 스크롤이 생깁니다. 해당 부분 참고부탁드립니다.-->
          <tr>
            <th>관리자 권한 관리</th>
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
            <th>관리자 식별자</th>
            <td>
              <label class="input-wrap">
                <input type="text" />
              </label>
            </td>
            <th>구분</th>
            <td>
              <span class="el-radio">
                <input id="sheetRadio1" type="radio" name="sheetRadio" checked />
                <label for="sheetRadio1">전체</label>
              </span>
              <span class="el-radio">
                <input id="sheetRadio2" type="radio" name="sheetRadio" />
                <label for="sheetRadio2">조회</label>
              </span>
              <span class="el-radio">
                <input id="sheetRadio3" type="radio" name="sheetRadio" />
                <label for="sheetRadio3">다운로드</label>
              </span>
            </td>
          </tr>
          <tr>
            <th>일시</th>
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
            <th>기능명</th>
            <td>
              <label class="input-wrap">
                <input type="text" />
              </label>
            </td>
            <th>마스킹 여부</th>
            <td>
              <span class="el-radio">
                <input id="maskingRadio1" type="radio" name="maskingRadio" checked />
                <label for="maskingRadio1">전체</label>
              </span>
              <span class="el-radio">
                <input id="maskingRadio2" type="radio" name="maskingRadio" />
                <label for="maskingRadio2">Y</label>
              </span>
              <span class="el-radio">
                <input id="maskingRadio3" type="radio" name="maskingRadio" />
                <label for="maskingRadio3">N</label>
              </span>
            </td>
          </tr>
          <tr>
            <th>대상 건수</th>
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
        <!-- //2024-04-03 해상도 1920관련 내용 tr 한줄에 최대 3쌍(th+td) 입력 가능하며 초과시 조회버튼이 넘어가 스크롤이 생깁니다. 해당 부분 참고부탁드립니다.-->
        </tbody><!-- Add 23-10-19 tbody -->
      </table>
      <button type="submit" class="submit">조회</button>
    </div>

    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">개인정보열람 이력</h3>
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
            <th>메뉴명</th>
            <th>메뉴코드</th>
            <th>기능명</th>
            <th>구분</th>
            <th>열람 건수</th>
            <th>마스킹 여부</th>
            <th>사유</th>
            <th>관리자 식별자</th>
            <th>열람자명</th>
            <th>열람자 소속</th>
            <th>열람 일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>회원정보 조회</td>
            <td>AAAA_AAAA</td>
            <td>회원정보 조회</td>
            <td>조회</td>
            <td>9,999</td>
            <td>Y</td>
            <td>이벤트 수행사 전달 용도</td>
            <td><button type="button" class="underline">123456789012</button></td>
            <td>김*니</td>
            <td>SK 이노베이션</td>
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
