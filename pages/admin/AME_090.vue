<script setup>
definePageMeta({
  layout: "admin"
});

// 이메일 모달 서비스명과 유효기간
const serviceName = "mySUN"; // 서비스명
const expirationDate = "2024-06-13"; // 유효기간
const companyName = "SK 하이닉스"; // 회사이름
const companyNameEn = "SK Hynix"; // 회사이름
const companyNameZh = "SK 海力士"; // 회사이름

function openModal(id, _type) {
  /* Edit 23-10-19 넓이에 따른 클래스 추가 : 1200 = wide */
  document.getElementById(id).classList.add("active");
  if (_type) {
    document.getElementById(id).children[0].classList.add(_type);
  }
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}
function closeModalOverlay(e) {
  e.target.classList.remove("active");
}
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
        <tbody>
          <!-- Add 23-10-19 tbody -->
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
        </tbody>
        <!-- Add 23-10-19 tbody -->
      </table>
      <button type="submit" class="submit">조회</button>
    </div>

    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">회원 목록</h3>
      <div class="count">총 <span>12</span>건</div>
      <div class="buttons">
        <button type="button" @click="openModal('email_ko')">E-mail 초대_국문</button>
        <button type="button" @click="openModal('email_en')">E-mail 초대_영문</button>
        <button type="button" @click="openModal('email_zh')">E-mail 초대_중문</button>
        <button type="button">엑셀 다운로드</button>
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

  <!-- 메일 모달 -->
  <ClientOnly>
    <Teleport to="#admin-container">
      <div id="email_ko" class="modal-overlay" @click="closeModalOverlay($event)">
        <div class="modal-container" @click.stop>
          <div class="header columns">
            <div class="title">
              <h1 class="modal_logo">SUNI</h1>
              {{ serviceName }} 회원 가입 안내 <span class="expiration_date">({{ expirationDate }} 유효기간 만료)</span>
            </div>
            <button type="button" class="button" @click.prevent="closeModal('email_ko')">닫기</button>
          </div>
          <div class="content email-content">
            <!-- <h1 class="modal_logo">SUNI</h1>
            <h3 class="email_title">
              {{ serviceName }} 회원 가입 안내 <span class="expiration_date">({{ expirationDate }}유효기간 만료)</span>
            </h3> -->
            <p class="email_description">
              <span>안녕하세요.</span>
              <strong> {{ serviceName }}</strong> 회원으로 귀하를 초대합니다. <br />
              아래 링크를 통해 회원으로 가입하세요
            </p>
            <table>
              <thead>
                <tr>
                  <th colspan="2">초대 정보 안내</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>서비스</th>
                  <td>{{ serviceName }}</td>
                </tr>
                <tr>
                  <th>회사명</th>
                  <td>{{ companyName }}</td>
                </tr>
                <tr>
                  <th>유효기간</th>
                  <td>
                    <strong>{{ expirationDate }}</strong> 까지
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="emil_notes">
              <h4>유의사항</h4>
              <ul>
                <li>- 초대자 본인 전용 회원 가입 링크입니다.</li>
                <li>- 타인에게 알려 주시는 경우 회원가입이 제한될 수 있으니 유의하시기 바랍니다.</li>
                <li>- 이 링크는 7일간 유효하며, 기간 경과 후 가입이 불가합니다.</li>
                <li>- 회사명이 본인 소속과 일치하지 않는 경우 Help Desk로 문의 바랍니다.</li>
              </ul>
            </div>
            <button type="button" class="common-buttons point">
              <strong>{{ serviceName }}</strong
              >&nbsp;회원가입
            </button>
            <div class="email_footer">
              <ul>
                <li>※ 본 메일은 발신전용 메일로 회신이 불가능합니다.</li>
                <li>※ 문의사항은 Help Desk(1599-7535)로 문의 바랍니다.</li>
              </ul>
              <p class="copyright">&copy; mySUNI. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="email_en" class="modal-overlay" @click="closeModalOverlay($event)">
        <div class="modal-container" @click.stop>
          <div class="header columns">
            <div class="title">
              <h1 class="modal_logo">SUNI</h1>
              {{ serviceName }} Membership Invitation <span class="expiration_date">({{ expirationDate }} Expires on)</span>
            </div>
            <button type="button" class="button" @click.prevent="closeModal('email_en')">닫기</button>
          </div>
          <div class="content email-content">
            <!-- <h1 class="modal_logo">SUNI</h1>
            <h3 class="email_title">
              {{ serviceName }} 회원 가입 안내 <span class="expiration_date">({{ expirationDate }}유효기간 만료)</span>
            </h3> -->
            <p class="email_description">
              <span>Hello,</span>
              We are inviting you to become a member of <strong> {{ serviceName }}.</strong><br />
              Please sign up through the link below.
            </p>
            <table>
              <thead>
                <tr>
                  <th colspan="2">Invitation Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Service</th>
                  <td>{{ serviceName }}</td>
                </tr>
                <tr>
                  <th>Company Name</th>
                  <td>{{ companyNameEn }}</td>
                </tr>
                <tr>
                  <th>Validity Period</th>
                  <td>
                    Until <strong>{{ expirationDate }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="emil_notes">
              <h4>Notes</h4>
              <ul>
                <li>&middot; This membership registration link is exclusively for you.</li>
                <li>&middot; Please be aware that sharing it with others may restrict your ability to register.</li>
                <li>&middot; This link is valid for 7 days, and you cannot sign up after it expires.</li>
                <li>&middot; If the company name does not match your affiliation, please contact the Help Desk.</li>
              </ul>
            </div>
            <button type="button" class="common-buttons point">Register</button>
            <div class="email_footer">
              <ul>
                <li>&middot; Legal Notice: This email was sent from a dedicated outbound email address that cannot receive replies.</li>
              </ul>
              <p class="copyright">&copy; mySUNI. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="email_zh" class="modal-overlay" @click="closeModalOverlay($event)">
        <div class="modal-container" @click.stop>
          <div class="header columns">
            <div class="title">
              <h1 class="modal_logo">SUNI</h1>
              {{ serviceName }} 加入通知 <span class="expiration_date">(有效期至 {{ expirationDate }})</span>
            </div>
            <button type="button" class="button" @click.prevent="closeModal('email_zh')">닫기</button>
          </div>
          <div class="content email-content">
            <!-- <h1 class="modal_logo">SUNI</h1>
            <h3 class="email_title">
              {{ serviceName }} 회원 가입 안내 <span class="expiration_date">({{ expirationDate }}유효기간 만료)</span>
            </h3> -->
            <p class="email_description">
              <span>尊敬的用户： </span>
              我们诚挚邀请您成为 <strong> {{ serviceName }}.</strong> 的会员<br />
              请通过以下链接注册成为会员。
            </p>
            <table>
              <thead>
                <tr>
                  <th colspan="2">邀请信息</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>服务</th>
                  <td>{{ serviceName }}</td>
                </tr>
                <tr>
                  <th>公司名称</th>
                  <td>{{ companyNameZh }}</td>
                </tr>
                <tr>
                  <th>有效期</th>
                  <td>
                    截止至 &nbsp;<strong>{{ expirationDate }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="emil_notes">
              <h4>注意事项</h4>
              <ul>
                <li>&middot; 此邀请链接仅限您本人使用。</li>
                <li>&middot; 请注意，若将此链接告知他人，可能会限制您的注册资格。</li>
                <li>&middot; 此链接的有效期为7天，过期后将无法注册。</li>
                <li>&middot; 如果公司名称与您的所属不符，请联系获得帮助。</li>
              </ul>
            </div>
            <button type="button" class="common-buttons point">注册 {{ serviceName }} 会员</button>
            <div class="email_footer">
              <ul>
                <li>※ 法律声明：本邮件由专用发件邮箱发送，无法接收回复。</li>
              </ul>
              <p class="copyright">&copy; mySUNI. ALL RIGHTS RESERVED.</p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>
