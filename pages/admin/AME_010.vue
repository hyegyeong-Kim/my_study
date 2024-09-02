<script setup>
definePageMeta({
  layout: "admin"
});

/* 자동완성 레이어 팝업 */
function auto_complete_modal(e){
  if(!e.target.closest('.auto_complete_wrap').querySelector('.code-search-list').classList.contains('active')){
    e.target.closest('.auto_complete_wrap').querySelector('.code-search-list').classList.add('active');
  }
}

function close_auto_complete_modal(e){
  e.target.closest('.code-search-list').classList.remove('active');
}
/* //자동완성 레이어 팝업 */
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
          <col width="110px" />
          <col width="" />
          <col width="110px" />
          <col width="500px" />
        </colgroup>
        <!-- 24-06-14 레이아웃 변경 -->
        <!-- //Add 23-10-19 -->
        <tbody><!-- Add 23-10-19 tbody -->
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
            <th>회원구분</th>
            <td>
              <span class="el-radio">
                <input id="memberType2" type="radio" name="memberType" checked />
                <label for="memberType2">SK구성원</label>
              </span>
              <span class="el-radio">
                <input id="memberType3" type="radio" name="memberType" />
                <label for="memberType3">일반사용자</label>
              </span>
            </td>
            <th>상태</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">전체</option>
                  <option value="">미가입</option>
                  <option value="">가입</option>
                  <option value="">보호</option>
                  <option value="">정지</option>
                  <option value="">탈퇴대기</option>
                </select>
              </label>
            </td>
          </tr>
          <tr>
            <th>서비스</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">mySUNI ID</option>
                  <option value="">mySUNI</option>
                  <option value="">이천포럼</option>
                  <option value="">울산포럼</option>
                  <option value="">LRS</option>
                </select>
              </label>
            </td>
            <th>일반 회원유형</th>
            <td>
              <label class="select-wrap">
                <select disabled>
                  <option value="">전체</option>
                  <option value="">비즈니스 파트너</option>
                  <option value="">사회적 기업</option>
                  <option value="">SK구성원 가족</option>
                  <option value="">대학생</option>
                </select>
              </label>
            </td>
            <th>조회기간</th>
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
            <th>선택 약관 동의</th>
            <td>
              <span class="el-checkbox">
                <input id="checkbox1" type="checkbox" name="checkboxName" />
                <label for="checkbox1">광고성 정보 수신 동의</label>
              </span>
            </td>
            <th>소속</th>
            <td>
              <!-- 자동완성 레이어가 노출되는 경우 <div class="auto_complete_wrap">로 감싸야 함 23-11-07 -->
              <div class="auto_complete_wrap">
                <label class="select-wrap">
                  <select>
                    <option value="">전체</option>
                    <option value="">SK계열사</option>
                    <option value="">비즈니스 파트너</option>
                    <option value="">사회적 기업</option>
                    <option value="">대학교</option>
                  </select>
                </label>
                <label class="input-wrap">
                  <input type="text" value="" @keyup="auto_complete_modal($event);" disabled/>
                  <button type="button" class="icon del">삭제</button>
                  <button type="button" class="icon sch">검색</button>
                </label>
                <!-- 자동완성 레이어 -->
                <div class="code-search-list">
                  <ul class="list">
                    <!-- 결과 없음 -->
                    <li>
                      <p class="no_data">검색 결과가 없습니다.</p>
                    </li>
                    <!-- //결과 없음 -->
                    <li>
                      <button type="button" class="button" @click="close_auto_complete_modal($event);">
                        <div class="name">
                          <strong>(주)<em>가나</em>계전</strong>
                          <span>Kana elec</span>
                        </div>
                        <div class="info"><em>코드명</em></div>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="button" @click="close_auto_complete_modal($event);">
                        <div class="name">
                          <strong>(주)<em>가나</em>계전</strong>
                          <span>Kana elec</span>
                        </div>
                        <div class="info">코드명</div>
                      </button>
                    </li>
                  </ul>
                </div>
                <!-- //자동완성 레이어 -->
              </div>
              <!-- //자동완성 레이어가 노출되는 경우 <div class="auto_complete_wrap">로 감싸야 함 23-11-07 -->
            </td>
          </tr>
        </tbody><!-- Add 23-10-19 tbody -->
        <!-- // 24-06-14 레이아웃 변경 -->
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

    <!-- 24-06-14 레이아웃 변경 -->
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
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="80px" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
        </colgroup>
        <thead>
          <tr>
            <th>E-mail ID</th>
            <th>이름</th>
            <th>국제전화 코드</th>
            <th>휴대폰 번호</th>
            <th>등록일자</th>
            <th>이용약관 동의</th>
            <th>회원구분</th>
            <th>회원유형</th>
            <th>사번</th>
            <th>소속</th>
            <th>non-GDI</th>
            <th>mySUNI YN</th>
            <th>Sub</th>
            <th>퇴직여부</th>
            <th>국가</th>
            <th>보호</th>
            <th>정지</th>
            <th>메모</th>
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
            <td>미동의</td>
            <td>SK구성원</td>
            <td>SK구성원 가족</td>
            <td>SK000000</td>
            <td>SK 이노베이션</td>
            <td>N</td>
            <td>N</td>
            <td class="ell">ER53DV421234568125465456871</td>
            <td>N</td>
            <td>KR</td>
            <td>N</td>
            <td><button type="button" class="underline">N</button></td>
            <td><button type="button" class="underline">N</button></td>
            <td>2023-07-31 05:13</td>
          </tr>
          <tr>
            <td>mySU**@sk.com</td>
            <td>김*니</td>
            <td>+82</td>
            <td>010-****-1234</td>
            <td>2023-06-28</td>
            <td>미동의</td>
            <td>SK구성원</td>
            <td>SK구성원 가족</td>
            <td>SK000000</td>
            <td>SK 이노베이션</td>
            <td>N</td>
            <td>N</td>
            <td>ER53DV42</td>
            <td>N</td>
            <td>KR</td>
            <td>N</td>
            <td><button type="button" class="underline">N</button></td>
            <td><button type="button" class="underline">N</button></td>
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
    <!-- // 24-06-14 레이아웃 변경 -->
  </div>
</template>
