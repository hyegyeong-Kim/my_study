<script setup>
definePageMeta({
  layout: "publish"
});
</script>

<template>
  <div>
    <h2>인수인계 리스트</h2>
    <p>작성자: 양재원</p>
    <p>2023년 7월 14일 ~ 2023년 10월 13일 진행된 내용</p>
    <p>(추후 진행예정인 내용 포함)</p>
    <ol class="list">
      <li>
        <strong>1. front</strong>
        <ol>
          <li>
            <strong>1.1. 공통</strong>
            <ul>
              <li>- 화면 내 prime색상(#00bfae) 미사용.</li>
              <li>- input, select, multiple, textarea, tabs 높이, 여백, 폰트크기 변경.</li>
              <li>- button 높이, 폰트크기, 줄바꿈형식 변경.</li>
              <li>- steps 넘버링제거, 타임라인 형태로 변경.</li>
              <li>- 얇은 아이콘으로 대체.</li>
              <li>- validation 텍스트(ex. 인증완료) 색상 변경, input 내 위치 변경.</li>
              <li>- .authentication disabled 추가.</li>
              <li>- 인증번호 재발송버튼 높이, 폰트크기 변경.</li>
              <li>- 인증번호 시간만료버튼 높이, 폰트크기 변경, 클릭방지 적용.</li>
              <li>- 툴팁 제목 클릭시 등장으로 변경.</li>
              <li>- 툴팁 내용 디자인 없이 진행.</li>
              <li>- .gray-box 여백, 폰트크기, 폰트색상 변경.</li>
            </ul>
          </li>
          <li>
            <strong>1.2. LO_010</strong>
            <ul>
              <li>- layouts/login.vue</li>
              <li>- 캐러셀 미사용 및 단일 이미지 사용.</li>
            </ul>
          </li>
          <li>
            <strong>1.3. 약관동의</strong>
            <ul>
              <li>- 약관변경일 추가.</li>
            </ul>
          </li>
          <li>
            <strong>1.4. ME_023</strong>
            <ul>
              <li>- 회원유형 선택 추가.</li>
            </ul>
          </li>
          <li>
            <strong>1.5. ME_050</strong>
            <ul>
              <li>- 가입안내 페이지 추가.</li>
            </ul>
          </li>
          <li>
            <strong>1.6. MY_010</strong>
            <ul>
              <li>- 회원정보 수정버튼 추가.</li>
              <li>- 서비스정보 수정버튼 추가.</li>
            </ul>
          </li>
          <li>
            <strong>1.7. MY_016</strong>
            <ul>
              <li>- 프로필변경 페이지 추가.</li>
            </ul>
          </li>
          <li>
            <strong>1.8. MY_020</strong>
            <ul>
              <li>- 이용약관보기 디자인 변경.</li>
            </ul>
          </li>
          <li>
            <strong>1.9. MY_031</strong>
            <ul>
              <li>- 달력 플러그인 개발(주성제 수석님 담당)에서 적용.</li>
              <li>- 달력 디자인 변경 요청시 진행필수.</li>
              <li>- 기간선택 레이아웃 변경.</li>
              <li>- .pagination a태그에서 button태그로 변경. (백제선 수석님 요청)</li>
            </ul>
          </li>
          <li>
            <strong>1.10. modal</strong>
            <ul>
              <li>- 헤더 높이, 여백 변경.</li>
              <li>- 헤더 타이틀 폰트크기 변경.</li>
              <li>- 닫기버튼 아이콘 변경.</li>
              <li>- 내용 폰트크기 변경.</li>
            </ul>
          </li>
          <li>
            <strong>1.11. 신규페이지</strong>
            <ul>
              <li>- ET_010</li>
              <li>- ET_020</li>
              <li>- ET_040</li>
              <li>- ET_050</li>
            </ul>
          </li>
        </ol>
      </li>
      <li>
        <strong>2. admin</strong>
        <ol>
          <li>
            <strong>2.1. 개발시 front와 독립된 레파지토리 사용으로 인해 독립된 퍼블소스 추가.</strong>
            <ul>
              <li>- layouts/admin.vue</li>
              <li>- assets/css/admin.scss</li>
              <li>- images/admin</li>
              <li>- pages/admin</li>
            </ul>
          </li>
          <li>
            <strong>2.2. 신규페이지</strong>
            <ul>
              <li>- AME_010</li>
              <li>- AME_P01</li>
              <li>- AME_P02</li>
              <li>- AME_P03</li>
              <li>- AME_P04</li>
              <li>- AME_011</li>
              <li>- AME_P05</li>
              <li>- AME_020</li>
              <li>- AME_030</li>
              <li>- AME_040</li>
              <li>- AME_050</li>
              <li>- AME_060</li>
              <li>- AME_070</li>
              <li>- AME_080</li>
              <li>- AME_090</li>
              <li>- AME_0A0</li>
              <li>- AAU_010</li>
              <li>- AAU_P01</li>
              <li>- AAU_P02</li>
              <li>- AAU_020</li>
              <li>- AAU_030</li>
              <li>- AAU_P04</li>
              <li>- ACD_010</li>
              <li>- ACD_P01</li>
              <li>- ACD_P02</li>
              <li>- ACD_020</li>
              <li>- ASV_010</li>
              <li>- ASV_020</li>
              <li>- ASV_030</li>
              <li>- ATM_010</li>
              <li>- ATM_P01</li>
              <li>- ASY_010</li>
              <li>- ASY_P01</li>
              <li>- ASY_020</li>
              <li>- ASY_P02</li>
              <li>- AHT_010</li>
              <li>- AHT_020</li>
              <li>- AHT_030</li>
              <li>- AHT_040</li>
            </ul>
          </li>
        </ol>
      </li>
      <li>
        <strong>3. email</strong>
        <ol>
          <li>
            <strong>3.1. 페이지 확인을 위한 html 페이지 추가.</strong>
            <ul>
              <li>- public/email</li>
              <li>- public/email/images</li>
            </ul>
          </li>
          <li>
            <strong>3.2. 주석처리된 내부소스가 email 발송시 사용되는 영역.</strong>
            <ul>
              <li>- &lt;!-- 이메일 영역 시작 --&gt;</li>
              <li>- &lt;!-- 이메일 영역 끝 --&gt;</li>
            </ul>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<style scoped lang="scss">
h2 {
  padding-bottom: 20px;
  font-size: 20px;
}
.list {
  padding-top: 20px;
  > li {
    line-height: 1.5;
    padding: 10px 0;
    border-top: 1px solid #999;
    > strong {
      display: block;
      font-size: 16px;
    }
    > ol {
      > li {
        padding: 5px 0 5px 10px;
        box-sizing: border-box;
        &:hover {
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 0 3px #ff664d;
        }
        strong {
          display: block;
          color: #666;
        }
        > ul {
          li {
            padding-left: 20px;
            color: #666;
            &:hover {
              background: rgba(255, 102, 77, 0.1);
            }
          }
        }
      }
    }
  }
}
</style>
