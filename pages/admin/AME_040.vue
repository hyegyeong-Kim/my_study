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
        </colgroup>
        <!-- //Add 23-10-19 -->
        <tbody><!-- Add 23-10-19 tbody -->
          <tr>
            <th>소속</th>
            <td>
              <label class="select-wrap">
                  <select>
                    <option value="">전체</option>
                    <option value="">SK계열사</option>
                    <option value="">비즈니스 파트너</option>
                    <option value="">사회적 기업</option>
                    <option value="">대학교</option>
                  </select>
                </label>
            </td>
          </tr>
            <tr>
              <th>조회조건</th>
              <td>
                <label class="select-wrap">
                <select>
                  <option value="">E-mail ID</option>
                  <option value="">이름</option>
                  <option value="">휴대폰 번호</option>
                  <option value="">사번</option>
                  <option value="">Sub</option>
                </select>
              </label>
                <label class="input-wrap">
                  <input type="text" value="" />
                  <button type="button" class="icon del">삭제</button>
                </label>
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
    <div class="area-result table-wrap type_horizontal">
      <table>
        <colgroup>
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="80px" />
          <col width="" />
        </colgroup>
        <thead>
          <tr>
            <th>E-mail ID</th>
            <th>이름</th>
            <th>국제전화 코드</th>
            <th>휴대폰 번호</th>
            <th>등록일자</th>
            <th>회원유형</th>
            <th>소속</th>
            <th>mySUNI YN</th>
            <th >Sub</th>
            <th>최근 접속일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>mySU**@sk.com</td>
            <td>김*니</td>
            <td>+82</td>
            <td>010-****-1234</td>
            <td>2023-06-28</td>
            <td>SK구성원 가족</td>
            <td>SK플래닛</td>
            <td>N</td>
            <td class="ell">112DEDD1234561566</td>
            <td>2023-07-31 05:13</td>
          </tr>
          <tr>
            <td>mySU**@sk.com</td>
            <td>김*니</td>
            <td>+82</td>
            <td>010-****-1234</td>
            <td>2023-06-28</td>
            <td>SK구성원 가족</td>
            <td>SK플래닛</td>
            <td>N</td>
            <td class="ell">112DEDD1234561566</td>
            <td>2023-07-31 05:13</td>
          </tr>
          <tr>
            <td>mySU**@sk.com</td>
            <td>김*니</td>
            <td>+82</td>
            <td>010-****-1234</td>
            <td>2023-06-28</td>
            <td>SK구성원 가족</td>
            <td>SK플래닛</td>
            <td>N</td>
            <td class="ell">112DEDD1234561566</td>
            <td>2023-07-31 05:13</td>
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
