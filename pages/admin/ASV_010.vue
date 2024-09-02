<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <div class="layout-column">
      <div class="column">
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">서비스 목록</h3>
          <div class="count">총 <span>12</span>건</div>
          <div class="buttons">
            <span class="el-checkbox">
              <input id="checkboxService" type="checkbox" name="checkboxService" />
              <label for="checkboxService">미사용 서비스 포함</label>
            </span>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>서비스명</th>
                <th>서비스 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>이천포럼</td>
                <td>사용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="column">
        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">서비스정보</h3>
          <div class="buttons">
            <button type="button" class="prime solid">저장</button>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-regist">
          <table>
            <!-- Add 23-10-19 -->
            <colgroup>
              <col width="20%" />
              <col width="5%" />
              <col width="" />
            </colgroup>
            <!-- //Add 23-10-19 -->
            <tbody>
              <tr>
                <th><span class="required">서비스명</span></th>
                <td colspan="2">
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
              </tr>
              <tr>
                <th><span class="required">서비스 대상</span></th>
                <td colspan="2">
                  <span class="el-radio">
                    <input id="radio1" type="radio" name="radioName" />
                    <label for="radio1">공용</label>
                  </span>
                  <span class="el-radio">
                    <input id="radio2" type="radio" name="radioName" />
                    <label for="radio2">일반사용자</label>
                  </span>
                  <span class="el-radio">
                    <input id="radio3" type="radio" name="radioName" />
                    <label for="radio3">SK구성원</label>
                  </span>
                </td>
              </tr>
              <!-- Add 23-10-19 -->
              <tr>
                <th><span class="required">닉네임 사용 여부</span></th>
                <td colspan="2">
                  <span class="el-radio">
                    <input id="radio4" type="radio" name="radioName2" />
                    <label for="radio4">사용</label>
                  </span>
                  <span class="el-radio">
                    <input id="radio5" type="radio" name="radioName2" />
                    <label for="radio5">미사용</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th><span class="required">프로필 사용 여부</span></th>
                <td colspan="2">
                  <span class="el-radio">
                    <input id="radio6" type="radio" name="radioName3" />
                    <label for="radio6">사용</label>
                  </span>
                  <span class="el-radio">
                    <input id="radio7" type="radio" name="radioName3" />
                    <label for="radio7">미사용</label>
                  </span>
                </td>
              </tr>
              <!-- //Add 23-10-19 -->
              <tr>
                <th><span class="required">지원 언어</span></th>
                <td colspan="2">
                  <span class="el-checkbox">
                    <input id="checkbox1" type="checkbox" name="checkboxName" />
                    <label for="checkbox1">KR</label>
                  </span>
                  <span class="el-checkbox">
                    <input id="checkbox2" type="checkbox" name="checkboxName" />
                    <label for="checkbox2">EN</label>
                  </span>
                  <span class="el-checkbox">
                    <input id="checkbox3" type="checkbox" name="checkboxName" />
                    <label for="checkbox3">ZH</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th rowspan="2"><span class="required">대고객 서비스명</span></th>
                <td>KR</td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
              </tr>
              <tr>
                <td>EN</td>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" />
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">연동 관리</h3>
        </div>

        <!-- 그리드 -->
        <div class="area-regist">
          <table>
            <!-- Add 23-10-19 -->
            <colgroup>
              <col width="20%" />
              <col width="" />
            </colgroup>
            <!-- //Add 23-10-19 -->
            <tbody>
              <tr>
                <th>Client ID</th>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" readonly />
                  </label>
                </td>
              </tr>
              <tr>
                <th>Client Secret</th>
                <td>
                  <!-- Edit 23-10-19 -->
                  <p class="multi-form">
                    <label class="input-wrap w100">
                      <input type="text" readonly />
                    </label>
                    <button type="button" class="underline">마스킹 해제</button>
                  </p>
                  <!-- //Edit 23-10-19 -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">URL 관리</h3>
          <div class="buttons">
            <button type="button" class="prime solid">저장</button>
          </div>
        </div>

        <!-- 그리드 -->
        <div class="area-regist">
          <table>
            <!-- Add 23-10-19 -->
            <colgroup>
              <col width="20%" />
              <col width="" />
            </colgroup>
            <!-- //Add 23-10-19 -->
            <tbody>
              <tr>
                <th>홈페이지 URL</th>
                <td>
                  <label class="input-wrap w100">
                    <input type="text" placeholder="홈페이지 URL 입력" />
                  </label>
                </td>
              </tr>
              <tr>
                <th>Redirect URI</th>
                <td>
                  <div class="box-regist-inputs">
                    <div class="top">
                      <p>최대 20개까지 등록 가능합니다.</p>
                      <button type="button" class="prime">추가하기</button>
                    </div>
                    <div class="context">
                      <!-- Edit 23-10-19 -->
                      <p class="multi-form">
                        <label class="input-wrap">
                          <input type="text" />
                          <button type="button" class="icon del">삭제</button>
                        </label>
                        <button type="button" class="underline">삭제</button>
                      </p>
                      <p class="multi-form">
                        <label class="input-wrap">
                          <input type="text" />
                          <button type="button" class="icon del">삭제</button>
                        </label>
                        <button type="button" class="underline">삭제</button>
                      </p>
                      <!-- //Edit 23-10-19 -->
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 그리드제목 -->
        <div class="area-title">
          <h3 class="h3">서비스 가입 추가 정보</h3>
        </div>

        <!-- 그리드 -->
        <div class="area-regist">
          <table>
            <!-- Add 23-10-19 -->
            <colgroup>
              <col width="20%" />
              <col width="" />
            </colgroup>
            <!-- //Add 23-10-19 -->
            <thead>
              <tr>
                <th>회원 유형</th>
                <th>수집하는 추가정보 항목</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>비즈니스 파트너</th>
                <td>
                  파트너사 <br />
                  직무 <br />
                  직급
                </td>
              </tr>
              <tr>
                <th>사회적 기업</th>
                <td>
                  기업명 <br />
                  직무 <br />
                  직급
                </td>
              </tr>
              <tr>
                <th>구성원가족</th>
                <td>
                  추천인 이름 <br />
                  소속사 <br />
                  회사 E-mail <br />
                  추천인과의 관계
                </td>
              </tr>
              <tr>
                <th>대학생</th>
                <td>
                  소속 학교 <br />
                  주전공 <br />
                  복수전공 <br />
                  수료 학기 <br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
