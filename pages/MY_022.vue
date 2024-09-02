<script setup></script>

<template>
  <div class="page-layout">
    <div class="title-box">
      <h2 class="title">mySUNI 서비스 해지</h2>
      <h2 class="title">mySUNI ON 서비스 해지</h2>
      <h2 class="title">이천포럼 서비스 해지</h2>
      <h2 class="title">울산포럼 서비스 해지</h2>
      <h2 class="title">통합 ID 회원탈퇴</h2>
      <p class="paragraph">mySUNI 서비스 탈퇴를 진행하시기 전 다음 안내사항을 확인하세요.</p>
    </div>

    <div class="form-wrap narrow no-border">
      <form>
        <article>
          <CMultiple
            :id="['agree']"
            :type="'checkbox'"
            :title="''"
            :style="'black'"
            :name="'약관동의'"
            :label="['안내사항을 모두 확인하였으며, 이에 동의합니다.']"
            :checked="[false]"
            :disabled="false"
          />
        </article>
        <article>
          <div class="linear-box">
            <div class="bullet-list">
              <ul>
                <li>서비스 탈퇴시 교육 정보가 삭제되며, 복구가 불가합니다.</li>
                <li>등록된 게시물이 있을 경우 탈퇴 후에는 삭제할 수 없습니다.</li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <div class="subtitle-box no-border">
            <strong class="subtitle">탈퇴사유를 입력하세요. (1개 이상 선택 필수)</strong>
          </div>
          <CMultiple
            :id="['reasonCheck01', 'reasonCheck02', 'reasonCheck03']"
            :type="'checkbox'"
            :title="''"
            :style="'black column'"
            :name="'reasonCheck'"
            :label="['사유1', '사유2', '사유3']"
            :checked="[false]"
            :disabled="false"
          />
          <br /><br />
          <CTextarea :placeholder="'탈퇴사유를 입력하세요.'" />
        </article>
        <article>
          <div class="subtitle-box no-border">
            <strong class="subtitle">mySUNI에 하고 싶은말</strong>
          </div>
          <CTextarea :class="'big'" :placeholder="'mySUNI에게 조언을 주시면 앞으로 서비스를 개선해나가도록 노력하겠습니다.'" />
        </article>

        <div class="button-box">
          <CButtons class="big dark" :title="'취소'" />
          <CButtons class="big gray" :title="'다음'" disabled />
          <CButtons class="big point" :title="'다음'" />
        </div>
      </form>
    </div>
  </div>
</template>
