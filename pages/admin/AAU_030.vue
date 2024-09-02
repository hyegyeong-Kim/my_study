<script setup>
definePageMeta({
  layout: "admin"
});

/* admin table th에 들어가는 툴팁 기능 */
function onToggleTooltip(event) {
  event.currentTarget.classList.toggle("active");
  event.currentTarget.nextElementSibling.querySelector('.popper').classList.toggle("active");
}
function onCloseTooltip(event) {
  event.currentTarget.parentElement.classList.toggle("active");
  event.currentTarget.closest('.tooltip-box').previousElementSibling.classList.toggle("active");
}
/* admin table th에 들어가는 툴팁 기능 */
</script>

<template>
  <div class="content">
    <div class="layout-column">
      <div class="column">
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">멤버사 담당자 목록</h3>
          <div class="count">총 <span>12</span>건</div>
          <div class="buttons">
            <button type="button" class="prime solid">등록</button>
            <button type="button">삭제</button>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
          <table>
            <thead>
              <tr>
                <th>
                  <span class="el-checkbox">
                    <input id="checkboxGridAll01" type="checkbox" name="checkboxGridNameAll01" />
                    <label for="checkboxGridAll01"></label>
                  </span>
                </th>
                <th>회원 구분</th>
                <th>소속</th>
                <th>조직</th>
                <th>사번</th>
                <th>이름</th>
                <th>권한그룹</th>
                <th>멤버사</th>
                <th>개인정보 열람</th>
                <th>권한 관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="el-checkbox">
                    <input id="checkboxGrid01" type="checkbox" name="checkboxGridName01" />
                    <label for="checkboxGrid01"></label>
                  </span>
                </td>
                <td>SK구성원</td>
                <td>SK이노베이션</td>
                <td>mySUNI</td>
                <td>SK123456</td>
                <td>김*니</td>
                <td>통합ID</td>
                <td>SK이노베이션 외</td>
                <td>Y</td>
                <td>Y</td>
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
      <div class="column">
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">권한 정보 상세</h3>
        </div>

        <div class="area-regist">
          <table>
            <tr>
              <th>이름</th>
              <td>김*니</td>
            </tr>
            <tr>
              <th>소속</th>
              <td>SK이노베이션</td>
            </tr>
            <tr>
              <th>사번</th>
              <td>SK123456</td>
            </tr>
            <tr>
              <th>권한그룹</th>
              <td>멤버사 관리</td>
            </tr>
            <tr>
              <!-- Edit 23-10-19 툴팁 추가 -->
              <th>
                <span class="tool-tip-title" @click="onToggleTooltip($event)">개인정보 열람</span>
                <div class="tooltip-box">
                  <div class="popper" style="width:450px;">
                    <div class="bullet-list">
                      <strong>개인정보 열람 (마스킹 미적용) 권한 안내</strong>
                      <ul>
                        <li>목록형태로 조회하는 화면에는 적용되지 않습니다.</li>
                        <li>개인정보 엑셀 다운로드시 마스킹 여부를 선택합니다.</li>
                        <li>개인정보 열람권한은 통합ID 관리자만 지정 가능합니다.<br/> 해당 권한이 필요한 경우 통합 ID관리자에게 권한을 요청하시기 바랍니다.</li>
                      </ul>
                    </div>
                    <button type="button" class="close" @click.prevent="onCloseTooltip($event)">닫기</button>
                  </div>
                </div>
              </th>
              <!-- //Edit 23-10-19 툴팁 추가 -->
              <td>N</td>
            </tr>
            <tr>
              <!-- Edit 23-10-19 툴팁 추가 -->
              <th>
                <span class="tool-tip-title" @click="onToggleTooltip($event)">권한 관리 설정</span>
                <div class="tooltip-box">
                  <div class="popper" style="width:350px;">
                    <div class="bullet-list">
                      <strong>권한 관리 설정 안내
                        <p class="explain">각 권한그룹 별로 다음 메뉴 접근이 가능합니다.</p>
                      </strong>
                      <ul>
                        <li>mySUNI ID 관리자 : 관리자 권한 관리</li>
                        <li>서비스 관리자 :  멤버사·협력사 관리</li>
                        <li>멤버사 관리자 : 멤버사 권한 관리</li>
                      </ul>
                    </div>
                    <button type="button" class="close" @click.prevent="onCloseTooltip($event)">닫기</button>
                  </div>
                </div>
              </th>
              <!-- //Edit 23-10-19 툴팁 추가 -->
              <td>N</td>
            </tr>
            <tr>
              <th>등록</th>
              <td>김슈퍼(2023-06-28)</td>
            </tr>
            <tr>
              <th>수정</th>
              <td>이수정(2023-06-28)</td>
            </tr>
          </table>
        </div>

        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">멤버사 권한 목록</h3>
          <div class="count">총 <span>12</span>건</div>
          <div class="buttons">
            <button type="button" class="prime solid">저장</button>
          </div>
        </div>

        <div class="area-result">
          <table>
            <thead>
              <tr>
                <th>그룹사</th>
                <th>멤버사</th>
                <th>권한 할당</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SK 이노베이션</td>
                <td>SK 이노베이션</td>
                <td>
                  <label class="select-wrap">
                    <select>
                      <option value="">Y</option>
                      <option value="">N</option>
                    </select>
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
