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
          <col width="85px" />
          <col width="" />
          <col width="85px" />
          <col width="" />
        </colgroup>
        <!-- //Add 23-10-19 -->
        <tbody><!-- Add 23-10-19 tbody -->
          <tr>
            <th>검색</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">E-mail ID</option>
                  <option value="">이름</option>
                  <option value="">휴대폰 번호</option>
                </select>
              </label>
              <label class="input-wrap">
                <input type="text" value="" />
                <button type="button" class="icon del">삭제</button>
              </label>
            </td>
            <th>상태</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">미가입</option>
                  <option value="">보호</option>
                  <option value="">휴면</option>
                  <option value="">정지</option>
                  <option value="">관리</option>
                </select>
              </label>
            </td>
            <th>소속</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">SK계열사</option>
                  <option value="">비즈니스 파트너</option>
                  <option value="">사회적 기업</option>
                  <option value="">대학교</option>
                </select>
              </label>
              <label class="input-wrap">
                <input type="text" value="" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
          </tr>
          <tr>
            <th>등록일자</th>
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
            <th>국가</th>
            <td>
              <span class="el-radio">
                <input id="country1" type="radio" name="country" checked />
                <label for="country1">KR</label>
              </span>
              <span class="el-radio">
                <input id="country2" type="radio" name="country" />
                <label for="country2">US</label>
              </span>
              <span class="el-radio">
                <input id="country3" type="radio" name="country" />
                <label for="country3">CN</label>
              </span>
            </td>
          </tr>
        </tbody><!-- Add 23-10-19 tbody -->
      </table>
      <button type="submit" class="submit">조회</button>
    </div>

    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">회원 목록</h3>
      <div class="count">총 <span>12</span>건</div>
      <div class="buttons">
        <button type="button" class="point dnld">엑셀 다운로드</button>
        <label class="select-wrap">
          <select>
            <option value="">10개씩 보기</option>
            <option value="">25개씩 보기</option>
            <option value="">50개씩 보기</option>
            <option value="">100개씩 보기</option>
          </select>
        </label>
        <label class="select-wrap">
          <select>
            <option value="">E-mail ID 오름차순</option>
            <option value="">E-mail ID 내림차순</option>
            <option value="">이름 오름차순</option>
            <option value="">이름 내림차순</option>
          </select>
        </label>
      </div>
    </div>

    <!-- 그리드 -->
    <div class="area-result">
      <table>
        <thead>
          <tr>
            <th>
              <span class="el-checkbox">
                <input id="checkboxGridAll" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGridAll"></label>
              </span>
            </th>
            <th>사번</th>
            <th>이름(KR)</th>
            <th>이름(EN)</th>
            <th>이름(ZH)</th>
            <th>생년월일</th>
            <th>휴대폰 번호</th>
            <th>E-mail</th>
            <th>소속</th>
            <th>직무</th>
            <th>조직</th>
            <th>상태</th>
            <th>회원여부</th>
            <th>mySUNI</th>
            <th>최초 등록일</th>
            <th>수정자</th>
            <th>수정일시</th>
            <th>상세보기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid01" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid01"></label>
              </span>
            </td>
            <td>SK000000</td>
            <td>김*니</td>
            <td></td>
            <td></td>
            <td>****-**-**</td>
            <td>010-****-1234</td>
            <td>mySU**@sk.com</td>
            <td>SK 이노베이션</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Y</td>
            <td>Y</td>
            <td>23-06-03</td>
            <td>시스템</td>
            <td>23-06-03 12:12:12</td>
            <td><button type="button" class="underline">보기</button></td>
          </tr>

          <!-- 결과 없을 경우 -->
          <tr>
            <td colspan="999">
              <p class="no-result">조회내역이 없습니다.</p>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Delete 23-10-19 페이징 삭제 -->
    </div>
  </div>
</template>
