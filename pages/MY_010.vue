<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">내 정보</h2>
      <p class="paragraph"><strong>인공지능 써니</strong>님 안녕하세요.</p>
    </div>

    <CTabs class="type-01" :index="0" :title="['회원정보', '이용약관', '이용내역', '가족계정']" />

    <div class="myinfo-wrap">
      <article>
        <h3>기본 프로필</h3>
        <div class="table-box flexible">
          <span class="profile-image">
            <img src="@/assets/images/sample/sample_01.jpg" alt="" />
          </span>
          <table>
            <colgroup>
              <col width="100px" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>ID</th>
                <td>mysuni12**@sk.com</td>
              </tr>
              <tr>
                <th>닉네임</th>
                <td>mySUNI</td>
              </tr>
              <tr>
                <th>회원유형</th>
                <td>SK구성원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="button-box">
          <CButtons class="mid white" :title="'ID 변경'" />
          <CButtons class="mid white" :title="'프로필 변경'" />
          <CButtons class="mid white" :title="'비밀번호 변경'" />
          <CButtons class="mid white" :title="'휴대폰 번호 변경'" />
        </div>
      </article>
      <article>
        <h3>회원정보<a href="" class="link-edit">편집</a></h3>
        <div class="table-box">
          <table>
            <colgroup>
              <col width="150px" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>이름</th>
                <td>김*니</td>
              </tr>
              <tr>
                <th>연락처 E-mail</th>
                <td>Mysuni12**@sk.com</td>
              </tr>
              <tr>
                <th>휴대폰번호</th>
                <td>010-****-1234</td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>********</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>남</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article>
        <h3>SK구성원 정보</h3>
        <div class="table-box">
          <table>
            <colgroup>
              <col width="150px" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>소속</th>
                <td>SK PLANET</td>
              </tr>
              <tr>
                <th>직무</th>
                <td>IT 기획/운영</td>
              </tr>
              <tr>
                <th>직급</th>
                <td>팀원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
      <article>
        <h3>서비스 정보<a href="" class="link-edit">편집</a></h3>
        <div class="table-box">
          <table>
            <colgroup>
              <col width="150px" />
              <col width="*" />
            </colgroup>
            <tbody>
              <tr>
                <th>희망 직군</th>
                <td>IT</td>
              </tr>
              <tr>
                <th>희망 직무</th>
                <td>IT기획</td>
              </tr>
              <tr>
                <th>현재 직군</th>
                <td>IT</td>
              </tr>
              <tr>
                <th>현재 직무</th>
                <td>IT기획</td>
              </tr>
              <tr>
                <th>관심 카테고리</th>
                <td>IT</td>
              </tr>
              <tr>
                <th>관심 분야</th>
                <td>IT기획</td>
              </tr>
              <tr>
                <th>파트너사명</th>
                <td>SK PLANET</td>
              </tr>
              <tr>
                <th>직무</th>
                <td>IT 기획/운영</td>
              </tr>
              <tr>
                <th>직책</th>
                <td>팀원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <p class="empty">입력된 정보가 없습니다.</p> -->
      </article>
    </div>
  </div>
</template>
