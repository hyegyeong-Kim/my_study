<script setup>
definePageMeta({
  layout: "admin"
});
</script>

<template>
  <div class="content">
    <!-- 2024-07-17 탭 추가 -->
    <CTabs class="type-02" :index="0" :title="['조회 조건 설정', '엑셀 업로드']" />
    <!--//2024-07-17 탭 추가 -->

    <!-- 조회 조건 설정 edit 24-07-17 : 조회조건 탭과 엑셀 업로드 탭 콘트츠 분리 -->
    <div>
      <!-- 검색조건 -->
      <div class="area-contition">
        <table>
          <!-- Add 23-10-19 -->
          <colgroup>
            <col width="85px" />
            <col width="" />
            <col width="110px" />
            <col width="" />
            <col width="140px" />
            <col width="500px" />
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
              <th>회원구분</th>
              <td>
                <span class="el-radio">
                  <input id="memberType1" type="radio" name="memberType" checked />
                  <label for="memberType1">전체</label>
                </span>
                <span class="el-radio">
                  <input id="memberType2" type="radio" name="memberType" />
                  <label for="memberType2">SK구성원</label>
                </span>
                <span class="el-radio">
                  <input id="memberType3" type="radio" name="memberType" />
                  <label for="memberType3">일반사용자</label>
                </span>
              </td>
              <th><span class="required">서비스</span></th>
              <td>
                <label class="select-wrap">
                  <select>
                    <option value="">mySUNI</option>
                  </select>
                </label>
              </td>
            </tr>
            <tr>
              <th>가입일자</th>
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
              <th>일반 회원유형</th>
              <td>
                <label class="select-wrap">
                  <select>
                    <option value="">비즈니스 파트너</option>
                    <option value="">사회적 기업</option>
                    <option value="">SK구성원 가족</option>
                    <option value="">대학생</option>
                  </select>
                </label>
              </td>
              <th rowspan="2">선택 약관 동의 여부</th>
              <td rowspan="3">
                <label class="input-textarea" style="width:90%;"><!-- Edit 23-10-19 특정 사이즈 지정 직접 넓이 선언 -->
                  <textarea></textarea>
                </label>
                <button type="button" class="icon sch">검색</button>
              </td>
            </tr>
            <tr>
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
              <th>E-mail ID</th>
              <th>이름</th>
              <th>휴대폰 번호</th>
              <th>일반 회원유형</th>
              <th>사번</th>
              <th>소속</th>
              <th>최근 접속일시</th>
              <th>최근 서비스 접속일시</th>
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
              <td>mySU**@sk.com</td>
              <td>김*니</td>
              <td>010-****-1234</td>
              <td>-</td>
              <td>SK000000</td>
              <td>SK 이노베이션</td>
              <td>2023-07-31 05:13</td>
              <td>2023-07-31 05:13</td>
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
    <!-- //조회 조건 설정-->

    <!-- 엑셀 업로드 add 24-07-17  -->
    <div>
      <div class="area-contition">
        <table>
          <!-- Add 23-10-19 -->
          <colgroup>
            <col width="85px" />
            <col width="" />
            <col width="110px" />
            <col width="" />
            <col width="500px" />
          </colgroup>
          <!-- //Add 23-10-19 -->
          <tbody><!-- Add 23-10-19 tbody -->
            <tr>
              <th>업로드 파일</th>
              <td>
                <label class="input-wrap" style="width: calc(100% - 110px)"><!-- Edit 23-10-19 -->
                  <input type="text" :value="getFile" readonly />
                </label>
                <span class="file-upload">
                  <label for="fileUpload">파일찾기</label>
                  <input id="fileUpload" type="file" class="blind" @change="loadimage($event)" />
                </span>

                <p class="mt10"><a href="#none">샘플 파일 다운로드</a></p>
              </td>
              <th>서비스</th>
              <td>
                <label class="select-wrap">
                  <select>
                    <option value="">mySUNI</option>
                  </select>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" class="submit">파일 다운로드</button>
      </div>
      <!-- add 24-07-17 -->
      <div class="nodi_box">
        <strong>[사용 안내]</strong>
        <ul>
          <li>1. 최대 약 10,000명까지 다운로드 가능하며, 오류 발생 시 인원 수를 조금 줄여서 다시 시도해 주시기 바랍니다.</li>
          <li>2. 회원정보 다운로드 시, '서비스' 항목에 설정한 서비스의 Sub 정보가 다운로드 됩니다.</li>
          <li>3. 다운로드 할 회원의 E-mail ID 또는 Sub을 기준으로 조회 후 다운로드가 진행됩니다. (샘플 파일 내, E-mail 또는 Sub으로 설정 가능)</li>
        </ul>
      </div>
      <!-- //add 24-07-17 -->
    </div>
    <!-- //엑셀 업로드-->
  </div>
</template>
