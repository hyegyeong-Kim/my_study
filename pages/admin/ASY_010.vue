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
            <th>구분</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <th>발송 일시</th>
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
          <tr>
            <th>제목</th>
            <td>
              <label class="input-wrap">
                <input type="text" value="" />
              </label>
            </td>
            <th>상태</th>
            <td>
              <span class="el-radio">
                <input id="radio1" type="radio" name="radioName" checked />
                <label for="radio1">전체</label>
              </span>
              <span class="el-radio">
                <input id="radio2" type="radio" name="radioName" />
                <label for="radio2">정상</label>
              </span>
              <span class="el-radio">
                <input id="radio3" type="radio" name="radioName" />
                <label for="radio3">오류</label>
              </span>
            </td>
          </tr>
        </tbody><!-- Add 23-10-19 tbody -->
      </table>
      <button type="submit" class="submit">조회</button>
    </div>

    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">E-mail 발송 내역</h3>
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
            <th>No.</th>
            <th>구분</th>
            <th>제목</th>
            <th>발송상태</th>
            <th>정상 발송</th>
            <th>발송 오류</th>
            <th>발송 일시</th>
            <th>상세 보기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>개인정보 이용내역 통지</td>
            <td>개인정보 이용내역 통지 안내 드립니다.</td>
            <td>정상</td>
            <td>1,000</td>
            <td></td>
            <td>2023-12-31 00:00</td>
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
