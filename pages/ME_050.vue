<script setup>
</script>

<template>
  <div class="guidance-layout">
    <div class="title-box">
      <h2 class="title">
        <!-- 2024-03-25 마이써니 아이디전환 안내 최종 수정에 따른 태그 추가 */ -->
        <span>내 정보는 내가 지키자!</span>
        <br/>
        <!-- //2024-03-25 마이써니 아이디전환 안내 최종 수정에 따른 태그 추가 */ -->
        지금 바로 
        <em>mySUNI ID</em>로 전환해 주세요!
      </h2><!-- Edit 23-12-07 -->
      <!-- 2024-03-25 마이써니 아이디전환 안내 최종 수정에 따른 태그 추가 */ -->
      <span>
        개인정보 유출 방지 및 보안 강화를 위한 <em>mySUNI ID 전환 대상자</em> 입니다.
      </span>
      <!-- //2024-03-25 마이써니 아이디전환 안내 최종 수정에 따른 태그 추가 */ -->
    </div>
    <div class="guidance">
      <div>
        <span><img src="@/assets/images/common/Rectangle18556.png" alt="" /></span>
      </div>
      <!-- 2024-03-25 마이써니 아이디전환 안내 최종 수정에 따른 태그 추가 */ -->
      <div class="sub_wrap">
        <dl>
          <dt>안전하고 <br>스마트하게</dt>
          <dd>강화된 보안 방식인 <br>
              OIDC 표준의 SSO로그인으로<br>
              소중한 개인정보를 보호합니다.
          </dd>
        </dl>
        <dl>
          <dt>한 번의 로그인으로 <br>연결되는 다양한 서비스</dt>
          <dd>mySUNI, 이천포럼 등<br>
              다양한 서비스를 사용할 수<br>
              있습니다.
          </dd>
        </dl>
        <dl>
          <dt>
            간편한<br>
            내 정보 관리
          </dt>
          <dd>
            소중한 내 개인정보를<br>
            mySUNI ID에서 안전하고 간편하게<br>
            통합 관리할 수 있습니다.
          </dd>
        </dl>
        
      </div>
      <!-- //2024-03-25 마이써니 아이디전환 안내 최종 수정에 따른 태그 추가 */ -->
    </div>
    <div class="button-box">
      <CButtons class="big point" :title="'mySUNI ID로 전환하기'" />
    </div>
  </div>
</template>
