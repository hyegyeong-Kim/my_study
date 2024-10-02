<script setup lang="ts">
definePageMeta({
  layout: "publish"
});

interface User {
  depth1: string;
  depth2: string;
  depth3: string;
  depth4: string;
  title: string;
  id: string;
  link: string;
  complete: boolean;
  outlink: boolean;
  modal: boolean;
  etc: string;
}

const tableRowClassName = ({ row }: { row: User }) => {
  let rowClass = "";

  if (row.depth1) {
    rowClass = "depth1" + " ";
  }

  if (row.complete) {
    if (row.modal) {
      rowClass += "modal-row";
      return rowClass;
    }
    rowClass += "complete-row";
    return rowClass;
  } else if (row.outlink) {
    rowClass += "outlink-row";
    return rowClass;
  }
  return rowClass;
};

const tableData: User[] = [
  // 로그인
  {
    depth1: "로그인",
    depth2: "아이디 로그인",
    depth3: "",
    depth4: "",
    title: "아이디 로그인",
    id: "LO_010",
    link: "LO_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: "메인이미지 변경 예정"
  },
  { depth1: "", depth2: "계정선택 로그인", depth3: "", depth4: "", title: "계정선택 로그인", id: "LO_020", link: "LO_020", complete: true, outlink: false, modal: false, etc: "" },
  // {
  //   depth1: "",
  //   depth2: "휴면계정 해제",
  //   depth3: "휴면계정 해제(실명)",
  //   depth4: "",
  //   title: "이메일인증",
  //   id: "LO_P01",
  //   link: "modal",
  //   complete: true,
  //   outlink: false,
  //   modal: true,
  //   etc: ""
  // },
  // { depth1: "", depth2: "", depth3: "휴면계정 해제(비실명)", depth4: "", title: "휴대폰인증", id: "LO_P02", link: "modal", complete: true, outlink: false, modal: true, etc: "" },
  { depth1: "", depth2: "계정정보 찾기", depth3: "", depth4: "", title: "계정정보 찾기", id: "LO_030", link: "LO_031", complete: true, outlink: false, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "ID 찾기",
    depth4: "",
    title: "ID 찾기",
    id: "LO_031",
    link: "LO_031",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  { depth1: "", depth2: "", depth3: "ID 찾기", depth4: "", title: "ID 찾기 완료", id: "LO_035", link: "LO_035", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "", depth3: "비밀번호 재설정", depth4: "", title: "비밀번호 재설정", id: "LO_032", link: "LO_032", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "", depth3: "비밀번호 재설정", depth4: "본인확인", title: "본인확인", id: "LO_033", link: "LO_033", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "", depth3: "비밀번호 재설정", depth4: "본인인증", title: "본인인증", id: "ME_E00", link: "", complete: false, outlink: true, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "비밀번호 재설정",
    depth4: "비밀번호 재설정 입력",
    title: "비밀번호 재설정 입력",
    id: "LO_034",
    link: "LO_034",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "주기적 비밀번호 변경 권유",
    depth3: "",
    depth4: "",
    title: "주기적 비밀번호 변경 권유",
    id: "LO_040",
    link: "LO_040",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "비밀번호 재설정(초기화)",
    depth3: "비밀번호 재설정(초기화)",
    depth4: "",
    title: "비밀번호 재설정(초기화)",
    id: "LO_050",
    link: "LO_050",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "추가 이용약관 동의",
    depth3: "",
    depth4: "",
    title: "추가 이용약관 동의",
    id: "LO_060",
    link: "LO_060",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "회원정보 추가 입력",
    depth3: "",
    depth4: "",
    title: "회원정보 추가 입력",
    id: "LO_070",
    link: "LO_070",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },

  // 회원가입
  {
    depth1: "회원가입",
    depth2: "회원유형 선택",
    depth3: "",
    depth4: "",
    title: "회원유형 선택",
    id: "ME_000",
    link: "ME_000",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "SK구성원 회원가입",
    depth3: "STEP1. 이용약관동의",
    depth4: "",
    title: "이용약관동의",
    id: "ME_010",
    link: "ME_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP1. 이용약관동의",
    depth4: "약관 보기",
    title: "약관 보기",
    id: "ME_P00",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP2. 계정정보 입력",
    depth4: "",
    title: "계정정보 입력",
    id: "ME_011",
    link: "ME_011",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP3. 서비스정보 입력",
    depth4: "",
    title: "서비스정보 입력",
    id: "ME_012",
    link: "ME_012",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP4. 회원가입 완료",
    depth4: "",
    title: "회원가입 완료",
    id: "ME_014",
    link: "ME_014",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "일반사용자 신규가입",
    depth3: "STEP1. 이용약관동의",
    depth4: "",
    title: "이용약관",
    id: "ME_020",
    link: "ME_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_010와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP1. 이용약관동의",
    depth4: "약관 보기",
    title: "약관 보기",
    id: "ME_P00",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP2. 계정정보 입력",
    depth4: "",
    title: "계정정보 입력",
    id: "ME_021",
    link: "ME_011",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_011에 내용포함"
  },
  { depth1: "", depth2: "", depth3: "", depth4: "", title: "본인인증", id: "ME_E00", link: "", complete: false, outlink: true, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP2. 계정정보 입력",
    depth4: "해외 거주 또는 외국인 고객 안내",
    title: "해외 거주 또는 외국인 고객 안내",
    id: "ME_P01",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP3. 서비스정보 입력",
    depth4: "",
    title: "서비스정보 입력",
    id: "ME_023",
    link: "ME_023",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP4. 회원가입 완료",
    depth4: "",
    title: "회원가입 완료",
    id: "ME_022",
    link: "ME_022",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "일반사용자 전환가입",
    depth3: "STEP1. 이용약관동의",
    depth4: "",
    title: "이용약관",
    id: "ME_030",
    link: "ME_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_010와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP1. 이용약관동의",
    depth4: "약관 보기",
    title: "약관 보기",
    id: "ME_P00",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP2. 계정정보 입력",
    depth4: "",
    title: "계정정보 입력",
    id: "ME_031",
    link: "ME_011",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_011에 내용포함"
  },
  { depth1: "", depth2: "", depth3: "STEP2. 계정정보 입력", depth4: "", title: "본인인증", id: "ME_E00", link: "", complete: false, outlink: true, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "STEP2. 계정정보 입력",
    depth4: "해외 거주 또는 외국인 고객 안내",
    title: "해외 거주 또는 외국인 고객 안내",
    id: "ME_P01",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },

  {
    depth1: "",
    depth2: "",
    depth3: "STEP3. 서비스정보 입력",
    depth4: "",
    title: "서비스정보 입력",
    id: "ME_033",
    link: "ME_023",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_023와 동일페이지"
  },

  {
    depth1: "",
    depth2: "",
    depth3: "STEP4. 회원가입 완료",
    depth4: "",
    title: "회원가입 완료",
    id: "ME_032",
    link: "ME_014",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_014와 동일페이지"
  },
  // 서비스신청
  {
    depth1: "서비스신청",
    depth2: "이용약관동의",
    depth3: "",
    depth4: "",
    title: "이용약관동의",
    id: "ME_040",
    link: "ME_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_010와 동일페이지"
  },
  {
    depth1: "",
    depth2: "이용약관동의",
    depth3: "약관 보기",
    depth4: "",
    title: "약관 보기",
    id: "ME_P00",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },

  {
    depth1: "",
    depth2: "닉네임 입력",
    depth3: "",
    depth4: "",
    title: "닉네임 입력",
    id: "ME_041",
    link: "ME_011",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_011에 내용포함"
  },
  {
    depth1: "",
    depth2: "회원유형 입력",
    depth3: "",
    depth4: "",
    title: "회원유형 입력",
    id: "ME_042",
    link: "ME_023",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_023와 동일페이지"
  },
  {
    depth1: "",
    depth2: "공통",
    depth3: "",
    depth4: "",
    title: "파트너사 검색(모바일)",
    id: "ME_P03",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: "ME_P03와 동일팝업"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "사회적기업 검색(모바일)",
    id: "ME_P04",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: "ME_P03와 동일팝업"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "대학교 검색(모바일)",
    id: "ME_P05",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: "ME_P03와 동일팝업"
  },
  {
    depth1: "",
    depth2: "서비스정보 입력",
    depth3: "",
    depth4: "",
    title: "서비스정보 입력",
    id: "ME_043",
    link: "ME_012",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_012와 동일페이지"
  },
  {
    depth1: "",
    depth2: "서비스신청 완료",
    depth3: "",
    depth4: "",
    title: "서비스신청 완료",
    id: "ME_044",
    link: "ME_014",
    complete: true,
    outlink: false,
    modal: false,
    etc: "ME_014와 동일페이지"
  },
  {
    depth1: "",
    depth2: "서비스신청 완료",
    depth3: "",
    depth4: "",
    title: "서비스신청 완료",
    id: "ME_045",
    link: "ME_045",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },

  // 가입안내
  { depth1: "가입안내", depth2: "", depth3: "", depth4: "", title: "가입안내", id: "ME_050", link: "ME_050", complete: true, outlink: false, modal: false, etc: "" },

  // 내정보
  { depth1: "내정보", depth2: "", depth3: "", depth4: "", title: "내 정보", id: "MY_000", link: "MY_010", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "회원정보", depth3: "", depth4: "", title: "회원정보", id: "MY_010", link: "MY_010", complete: true, outlink: false, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "회원정보 변경",
    depth4: "비밀번호 확인",
    title: "비밀번호 확인",
    id: "MY_011",
    link: "MY_011",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "회원정보 변경",
    depth4: "회원정보 변경",
    title: "회원정보 변경",
    id: "MY_012",
    link: "MY_012",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "서비스 정보 변경",
    depth4: "",
    title: "서비스 정보 변경",
    id: "MY_017",
    link: "MY_017",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "E-mail ID 변경",
    depth4: "비밀번호 확인",
    title: "비밀번호 확인",
    id: "MY_013",
    link: "MY_013",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "E-mail ID 변경",
    depth4: "E-mail ID 변경",
    title: "E-mail ID 변경",
    id: "MY_014",
    link: "MY_014",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  { depth1: "", depth2: "", depth3: "비밀번호 변경", depth4: "", title: "비밀번호 변경", id: "MY_015", link: "MY_015", complete: true, outlink: false, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "휴대폰 번호 변경",
    depth4: "비밀번호 확인",
    title: "비밀번호 확인",
    id: "MY_018",
    link: "MY_018",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "휴대폰 번호 변경",
    depth4: "휴대폰 번호 변경",
    title: "휴대폰 번호 변경",
    id: "MY_019",
    link: "MY_019",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  { depth1: "", depth2: "", depth3: "프로필 변경", depth4: "", title: "프로필 변경", id: "MY_016", link: "MY_016", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "이용약관", depth3: "", depth4: "", title: "이용약관", id: "MY_020", link: "MY_020", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "", depth3: "서비스 이용약관", depth4: "", title: "서비스 이용약관", id: "MY_021", link: "MY_021", complete: true, outlink: false, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "서비스 이용약관",
    depth4: "mySUNI 서비스 해지",
    title: "mySUNI 서비스 해지",
    id: "MY_022",
    link: "MY_022",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "서비스 이용약관",
    depth4: "mySUNI ON 서비스 해지",
    title: "mySUNI ON 서비스 해지",
    id: "MY_023",
    link: "MY_022",
    complete: true,
    outlink: false,
    modal: false,
    etc: "MY_022와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "서비스 이용약관",
    depth4: "이천포럼 서비스 해지",
    title: "이천포럼 서비스 해지",
    id: "MY_024",
    link: "MY_022",
    complete: true,
    outlink: false,
    modal: false,
    etc: "MY_022와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "서비스 이용약관",
    depth4: "울산포럼 서비스 해지",
    title: "울산포럼 서비스 해지",
    id: "MY_025",
    link: "MY_022",
    complete: true,
    outlink: false,
    modal: false,
    etc: "MY_022와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "통합 ID 회원 탈퇴",
    depth4: "",
    title: "통합 ID 회원 탈퇴",
    id: "MY_025",
    link: "MY_022",
    complete: true,
    outlink: false,
    modal: false,
    etc: "MY_022와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "통합 ID 회원 탈퇴",
    depth4: "탈퇴 확인",
    title: "탈퇴 확인",
    id: "MY_026",
    link: "MY_026",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "통합 ID 이용약관",
    depth4: "",
    title: "통합 ID 이용약관",
    id: "MY_027",
    link: "MY_027",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  { depth1: "", depth2: "이용내역", depth3: "", depth4: "", title: "이용내역", id: "MY_030", link: "MY_031", complete: true, outlink: false, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "로그인 이력",
    depth4: "",
    title: "로그인",
    id: "MY_031",
    link: "MY_031",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "인증 이력",
    depth4: "",
    title: "인증 이력",
    id: "MY_032",
    link: "MY_031",
    complete: true,
    outlink: false,
    modal: false,
    etc: "MY_031와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "서비스 이력",
    depth4: "",
    title: "서비스 이력",
    id: "MY_033",
    link: "MY_031",
    complete: true,
    outlink: false,
    modal: false,
    etc: "MY_031와 동일페이지"
  },
  { depth1: "", depth2: "가족계정", depth3: "", depth4: "", title: "가족계정", id: "MY_040", link: "MY_040", complete: true, outlink: false, modal: false, etc: "" },

  // 공통
  {
    depth1: "공통",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "통합 ID 이용약관",
    id: "CO_P01",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보 처리방침",
    id: "CO_P02",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "E-mail 미수신 안내",
    id: "CO_P03",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  { depth1: "", depth2: "", depth3: "", depth4: "", title: "SMS 미수신 안내", id: "CO_P04", link: "modal", complete: true, outlink: false, modal: true, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "파트너사 검색(모바일)",
    id: "ME_P03",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "사회적기업 검색(모바일)",
    id: "ME_P04",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: "ME_P03와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "대학교 검색(모바일)",
    id: "ME_P05",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: "ME_P03와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "소속사 검색(모바일)",
    id: "ME_P06",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: "ME_P03와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "주전공 추가 팝업",
    id: "ME_P07",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "복수전공 추가 팝업",
    id: "ME_P08",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: "ME_P07와 동일페이지"
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "인증번호 재발송 팝업(E-mail)",
    id: "LO_P01",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "인증번호 재발송 팝업(SMS)",
    id: "LO_P02",
    link: "modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },

  // 기타
  {
    depth1: "기타",
    depth2: "개인정보 유지 동의",
    depth3: "",
    depth4: "",
    title: "개인정보 유지 동의",
    id: "ET_010",
    link: "ET_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "개인정보 유지 동의 완료",
    depth3: "",
    depth4: "",
    title: "개인정보 유지 동의 완료",
    id: "ET_020",
    link: "ET_020",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "비밀번호 재설정(초기화)",
    depth3: "",
    depth4: "",
    title: "비밀번호 재설정(초기화)",
    id: "ET_030",
    link: "LO_034",
    complete: true,
    outlink: false,
    modal: false,
    etc: "LO_034와 동일페이지"
  },
  { depth1: "", depth2: "오류", depth3: "", depth4: "", title: "오류", id: "ET_040", link: "ET_040", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "세션만료", depth3: "", depth4: "", title: "세션만료", id: "ET_050", link: "ET_050", complete: true, outlink: false, modal: false, etc: "" },

  // 공통 (어드민)
  { depth1: "공통 (어드민)", depth2: "", depth3: "", depth4: "", title: "조회", id: "list", link: "admin/list", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "", depth3: "", depth4: "", title: "등록", id: "regist", link: "admin/regist", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "", depth3: "", depth4: "", title: "modal", id: "modal", link: "admin/modal", complete: true, outlink: false, modal: false, etc: "" },

  // 회원 (어드민)
  {
    depth1: "회원 (어드민)",
    depth2: "로그인",
    depth3: "",
    depth4: "",
    title: "로그인",
    id: "ALO_020",
    link: "admin/ALO_020",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "회원정보 조회",
    depth3: "",
    depth4: "",
    title: "회원 조회",
    id: "AME_010",
    link: "admin/AME_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "이용약관 조회 팝업",
    depth4: "",
    title: "이용약관 조회 팝업",
    id: "AME_P01",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "개인정보 파일 다운로드 팝업",
    depth4: "",
    title: "개인정보 파일 다운로드 팝업",
    id: "AME_P02",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "계정 정지 팝업",
    depth4: "",
    title: "계정 정지 팝업",
    id: "AME_P03",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "계정 메모 팝업",
    depth4: "",
    title: "계정 메모 팝업",
    id: "AME_P04",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "회원정보 상세",
    depth4: "",
    title: "회원정보 상세",
    id: "AME_011",
    link: "admin/AME_011",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "회원정보 상세",
    depth4: "",
    title: "회원정보 상세",
    id: "AME_P11",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "SK구성원 계정연결 변경 팝업",
    title: "SK구성원 계정연결 변경 팝업",
    id: "AME_P05",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "회원정보 조회_서비스별",
    depth3: "",
    depth4: "",
    title: "회원정보 조회_서비스별",
    id: "AME_020",
    link: "admin/AME_020",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "회원정보 조회_멤버사",
    depth3: "",
    depth4: "",
    title: "회원정보 조회_멤버사",
    id: "AME_030",
    link: "admin/AME_030",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "회원정보 조회_외부 협력사",
    depth3: "",
    depth4: "",
    title: "회원정보 조회_외부 협력사",
    id: "AME_040",
    link: "admin/AME_040",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "SK구성원 Activation",
    depth3: "",
    depth4: "",
    title: "SK구성원 Activation",
    id: "AME_050",
    link: "admin/AME_050",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "일반사용자 등록",
    depth3: "",
    depth4: "",
    title: "일반사용자 등록",
    id: "AME_060",
    link: "admin/AME_060",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "회원 탈퇴 내역",
    depth3: "",
    depth4: "",
    title: "회원 탈퇴 내역",
    id: "AME_070",
    link: "admin/AME_070",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "서비스 탈퇴 내역",
    depth3: "",
    depth4: "",
    title: "서비스 탈퇴 내역",
    id: "AME_080",
    link: "admin/AME_080",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "GDI 데이터 조회",
    depth3: "",
    depth4: "",
    title: "GDI 데이터 조회",
    id: "AME_090",
    link: "admin/AME_090",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "SK구성원 등록/수정",
    depth3: "",
    depth4: "",
    title: "SK구성원 등록/수정",
    id: "AME_0A0",
    link: "admin/AME_0A0",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },

  // 권한 (어드민)
  {
    depth1: "권한 (어드민)",
    depth2: "관리자 권한 관리",
    depth3: "",
    depth4: "",
    title: "관리자 권한 관리",
    id: "AAU_010",
    link: "admin/AAU_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "통합 ID 회원 조회 팝업",
    depth4: "",
    title: "통합 ID 회원 조회 팝업",
    id: "AAU_P01",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "멤버사 조회 팝업",
    depth4: "",
    title: "멤버사 조회 팝업",
    id: "AAU_P02",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "운영/담당자 관리",
    depth3: "",
    depth4: "",
    title: "운영/담당자 관리",
    id: "AAU_020",
    link: "admin/AAU_020",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "멤버사 권한 관리",
    depth3: "",
    depth4: "",
    title: "멤버사 권한 관리",
    id: "AAU_030",
    link: "admin/AAU_030",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "멤버사 회원 조회 팝업",
    depth4: "",
    title: "멤버사 회원 조회 팝업",
    id: "AAU_P04",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },

  // 공통코드 (어드민)
  {
    depth1: "공통코드 (어드민)",
    depth2: "공통코드 그룹 관리",
    depth3: "",
    depth4: "",
    title: "공통코드 그룹 관리",
    id: "ACD_010",
    link: "admin/ACD_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "그룹 코드 등록 팝업",
    depth4: "",
    title: "그룹 코드 등록 팝업",
    id: "ACD_P01",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "그룹 코드 수정 팝업",
    depth4: "",
    title: "그룹 코드 수정 팝업",
    id: "ACD_P02",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "공통코드 관리",
    depth3: "",
    depth4: "",
    title: "공통코드 관리",
    id: "ACD_020",
    link: "admin/ACD_020",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },

  // 서비스 (어드민)
  {
    depth1: "서비스 (어드민)",
    depth2: "서비스정보",
    depth3: "",
    depth4: "",
    title: "서비스정보",
    id: "ASV_010",
    link: "admin/ASV_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  { depth1: "", depth2: "로그인 화면", depth3: "", depth4: "", title: "로그인 화면", id: "ASV_020", link: "admin/ASV_020", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "서비스 등록", depth3: "", depth4: "", title: "서비스 등록", id: "ASV_030", link: "admin/ASV_030", complete: true, outlink: false, modal: false, etc: "" },

  // 약관 (어드민)
  {
    depth1: "약관 (어드민)",
    depth2: "약관 조회",
    depth3: "",
    depth4: "",
    title: "약관 조회",
    id: "ATM_010",
    link: "admin/ATM_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "약관 등록 팝업",
    depth4: "",
    title: "약관 등록 팝업",
    id: "ATM_P01",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },

  // 시스템 이력 (어드민)
  {
    depth1: "시스템 이력 (어드민)",
    depth2: "E-Mail 발송 이력",
    depth3: "",
    depth4: "",
    title: "E-Mail 발송 이력",
    id: "ASY_010",
    link: "admin/ASY_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "E-mail 발송 내역 상세 팝업",
    depth4: "",
    title: "E-mail 발송 내역 상세 팝업",
    id: "ASY_P01",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "SMS 발송 이력",
    depth3: "",
    depth4: "",
    title: "SMS 발송 이력",
    id: "ASY_020",
    link: "admin/ASY_020",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "SMS 발송 내역 상세 팝업",
    depth4: "",
    title: "SMS 발송 내역 상세 팝업",
    id: "ASY_P02",
    link: "admin/modal",
    complete: true,
    outlink: false,
    modal: true,
    etc: ""
  },
  {
    depth1: "",
    depth2: "개인정보열람 이력",
    depth3: "",
    depth4: "",
    title: "개인정보열람 이력",
    id: "AHT_010",
    link: "admin/AHT_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "사용자 로그인 이력",
    depth3: "",
    depth4: "",
    title: "사용자 로그인 이력",
    id: "AHT_020",
    link: "admin/AHT_020",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "관리자 로그인 이력",
    depth3: "",
    depth4: "",
    title: "관리자 로그인 이력",
    id: "AHT_030",
    link: "admin/AHT_030",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "관리자 기능 실행 이력",
    depth3: "",
    depth4: "",
    title: "관리자 기능 실행 이력",
    id: "AHT_040",
    link: "admin/AHT_040",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  // 메인 (어드민)
  {
    depth1: "메인 (어드민)",
    depth2: "메인",
    depth3: "",
    depth4: "",
    title: "메인",
    id: "ACM_010",
    link: "admin/ACM_010",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  // 승인관리 (어드민)
  {
    depth1: "승인관리",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "",
    id: "AAM_000",
    link: "admin/AAM_000",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },

  // 이메일
  {
    depth1: "이메일",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "E-mail 인증번호 안내",
    id: "EM_011",
    link: "email/EM_011.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "%서비스명% 회원 가입 안내",
    id: "EM_012",
    link: "email/EM_012.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보 이용내역 통지 및 개인정보 수집출처 안내",
    id: "EM_013",
    link: "email/EM_013.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "광고성 정보 수신 동의 안내",
    id: "EM_014",
    link: "email/EM_014.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  { depth1: "", depth2: "", depth3: "", depth4: "", title: "비밀번호 초기화 안내", id: "EM_015", link: "email/EM_015.html", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "", depth3: "", depth4: "", title: "mySUNI ID 탈퇴 안내", id: "EM_016", link: "email/EM_016.html", complete: true, outlink: false, modal: false, etc: "" },
  { depth1: "", depth2: "", depth3: "", depth4: "", title: "mySUNI 회원가입 안내", id: "EM_017", link: "email/EM_017.html", complete: true, outlink: false, modal: false, etc: "" },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "휴대폰 전화번호 변경 안내",
    id: "EM_018",
    link: "email/EM_018.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "mySUNI ID 이용 정지 안내",
    id: "EM_019",
    link: "email/EM_019.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "mySUNI ID 이용 제한 안내",
    id: "EM_020",
    link: "email/EM_020.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "mySUNI ID 통합 ID 오픈 안내",
    id: "EM_021",
    link: "email/EM_021.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "mySUNI ID 통합 ID 오픈 안내",
    id: "EM_021-이천",
    link: "email/EM_021-이천.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "mySUNI ID 통합 ID 전환 안내",
    id: "EM_022",
    link: "email/EM_022.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "약관",
    depth2: "개인정보 처리 방침",
    depth3: "",
    depth4: "",
    title: "개인정보 처리 방침",
    id: "SUNI-ID/개인정보처리방침/개인정보처리방침.html",
    link: "terms/SUNI-ID/개인정보처리방침/개인정보처리방침.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보 처리 방침 (중문)",
    id: "SUNI-ID/개인정보처리방침/개인정보처리방침_cn.html",
    link: "terms/SUNI-ID/개인정보처리방침/개인정보처리방침_cn.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보 처리 방침 (영문)",
    id: "SUNI-ID/개인정보처리방침/개인정보처리방침_en.html",
    link: "terms/SUNI-ID/개인정보처리방침/개인정보처리방침_en.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보처리요구서",
    id: "SUNI-ID/개인정보처리방침/privacy/개인정보처리요구서.docx",
    link: "public/terms/SUNI-ID/개인정보처리방침/privacy/letter_of_personal_info.docx",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "위임장",
    id: "SUNI-ID/개인정보처리방침/privacy/위임장.docx",
    link: "terms/SUNI-ID/개인정보처리방침/privacy/letter_of_attorney.docx",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보처리재위탁사현황",
    id: "SUNI-ID/개인정보처리방침/재위탁사현황/개인정보처리재위탁사현황_20231218.html",
    link: "terms/SUNI-ID/개인정보처리방침/재위탁사현황/privacyPolicy_consign_20231218.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보처리재위탁사현황",
    id: "SUNI-ID/개인정보처리방침/재위탁사현황/개인정보처리재위탁사현황_20240619.html",
    link: "terms/SUNI-ID/개인정보처리방침/재위탁사현황/privacyPolicy_consign_20240619.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보처리재위탁사현황 (중문)",
    id: "SUNI-ID/개인정보처리방침/재위탁사현황/개인정보처리재위탁사현황_cn",
    link: "terms/SUNI-ID/개인정보처리방침/재위탁사현황/privacyPolicy_consign_cn.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "개인정보처리재위탁사현황 (영문)",
    id: "SUNI-ID/개인정보처리방침/재위탁사현황/개인정보처리재위탁사현황_en",
    link: "terms/SUNI-ID/개인정보처리방침/재위탁사현황/privacyPolicy_consign_en.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "SK구성원",
    depth2: "SK mySUNI 서비스 이용약관",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "SUNI-ID/이용약관/SK_SERVICE_TERMS_231214.html",
    link: "terms/SUNI-ID/이용약관/SK_SERVICE_TERMS_231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "SK mySUNI 서비스 이용약관_글로벌컬리지_영문",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "SUNI-ID/이용약관/SK_SERVICE_TERMS_EN.html",
    link: "terms/SUNI-ID/이용약관/SK_SERVICE_TERMS_EN.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "mySUNI ID 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "SUNI-ID/개인정보수집/SK_PRIVACY_STATEMENT_20231214.html",
    link: "terms/SUNI-ID/개인정보수집/SK_PRIVACY_STATEMENT_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "mySUNI 교육 서비스 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "LMS/개인정보수집/SK_PRIVACY_STATEMENT2_20231214.html",
    link: "terms/LMS/개인정보수집/SK_PRIVACY_STATEMENT2_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "이천포럼 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "이천포럼/개인정보수집/SK_PRIVACY_STATEMENT3_20231214.html",
    link: "terms/이천포럼/개인정보수집/SK_PRIVACY_STATEMENT3_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },

  {
    depth1: "",
    depth2: "이천포럼 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "이천포럼/개인정보수집/SK_PRIVACY_STATEMENT4_20231214.html",
    link: "terms/이천포럼/개인정보수집/SK_PRIVACY_STATEMENT4_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "울산포럼 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "울산포럼/개인정보수집/SK_PRIVACY_STATEMENT5_20231214.html",
    link: "terms/울산포럼/개인정보수집/SK_PRIVACY_STATEMENT5_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "울산포럼 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "울산포럼/개인정보수집/SK_PRIVACY_STATEMENT6_20231214.html",
    link: "terms/울산포럼/개인정보수집/SK_PRIVACY_STATEMENT6_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "일반사용자",
    depth2: "SK mySUNI 서비스 이용약관",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "SUNI-ID/이용약관/SERVICE_TERMS_231214.html",
    link: "terms/SUNI-ID/이용약관/SERVICE_TERMS_231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "SK mySUNI 서비스 이용약관_글로벌컬리지_영문",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "SUNI-ID/이용약관/SK_SERVICE_TERMS_EN.html",
    link: "terms/SUNI-ID/이용약관/SK_SERVICE_TERMS_EN.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "mySUNI ID 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "SUNI-ID/개인정보수집/PRIVACY_STATEMENT_20231214.html",
    link: "terms/SUNI-ID/개인정보수집/PRIVACY_STATEMENT_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "mySUNI ID 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "SUNI-ID/개인정보수집/PRIVACY_STATEMENT2_20231214.html",
    link: "terms/SUNI-ID/개인정보수집/PRIVACY_STATEMENT2_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "mySUNI 서비스 이용약관",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "LMS/이용약관/SERVICE_TERMS_LMS_20231214.html",
    link: "terms/LMS/이용약관/SERVICE_TERMS_LMS_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "mySUNI 교육 서비스 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "LMS/개인정보수집/PRIVACY_STATEMENT_LMS_20231214.html",
    link: "terms/LMS/개인정보수집/PRIVACY_STATEMENT_LMS_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "LRS 서비스 이용약관",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "LRS(사용안함)/이용약관/SERVICE_TERMS_LRS_20231214.html",
    link: "terms/LRS(사용안함)/이용약관/SERVICE_TERMS_LRS_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "LRS 서비스 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "LRS(사용안함)/개인정보수집/PRIVACY_STATEMENT_LRS_20231214.html",
    link: "terms/LRS(사용안함)/개인정보수집/PRIVACY_STATEMENT_LRS_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "이천포럼 서비스 이용약관",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "이천포럼/이용약관/SERVICE_TERMS_ICHEON_20231214.html",
    link: "terms/이천포럼/이용약관/SERVICE_TERMS_ICHEON_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "이천포럼 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "이천포럼/개인정보수집/PRIVACY_STATEMENT_ICHEON_20231214.html",
    link: "terms/이천포럼/개인정보수집/PRIVACY_STATEMENT_ICHEON_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "이천포럼 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "이천포럼/개인정보수집/PRIVACY_STATEMENT2_ICHEON_20231214.html",
    link: "terms/이천포럼/개인정보수집/PRIVACY_STATEMENT2_ICHEON_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "울산포럼 서비스 이용약관",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "울산포럼/이용약관/SERVICE_TERMS_ULSAN_20231214.html",
    link: "terms/울산포럼/이용약관/SERVICE_TERMS_ULSAN_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "울산포럼 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "울산포럼/개인정보수집/PRIVACY_STATEMENT_ULSAN_20231214.html",
    link: "terms/울산포럼/개인정보수집/PRIVACY_STATEMENT_ULSAN_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "울산포럼 이용을 위한 개인정보 수집∙이용 동의",
    depth3: "",
    depth4: "",
    title: "약관 HTML",
    id: "울산포럼/개인정보수집/PRIVACY_STATEMENT2_ULSAN_20231214.html",
    link: "terms/울산포럼/개인정보수집/PRIVACY_STATEMENT2_ULSAN_20231214.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "Playground",
    depth3: "",
    depth4: "",
    title: "Playground 서비스 이용약관",
    id: "Playground/이용약관/SK_SERVICE_TERMS_PLAYGROUND_20240619.html",
    link: "terms/Playground/이용약관/SK_SERVICE_TERMS_PLAYGROUND_20240619.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "",
    depth2: "Playground",
    depth3: "",
    depth4: "",
    title: "Playground 이용을 위한 개인정보 수집∙이용 동의",
    id: "Playground/개인정보수집/SK_PRIVACY_STATEMENT_PLAYGROUND_20240619.html",
    link: "terms/Playground/개인정보수집/SK_PRIVACY_STATEMENT_PLAYGROUND_20240619.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  },
  {
    depth1: "preloader",
    depth2: "",
    depth3: "",
    depth4: "",
    title: "Preloader",
    id: "preloader",
    link: "preloader.html",
    complete: true,
    outlink: false,
    modal: false,
    etc: ""
  }
];
</script>

<template>
  <div>
    <client-only>
      <span class="explanatory complete">작업완료된 페이지</span>
      <span class="explanatory modal">작업완료된 모달</span>
      <span class="explanatory outlink">외부링크 페이지</span>
      <el-table :data="tableData" border size="small" :row-class-name="tableRowClassName" table-layout="auto">
        <el-table-column prop="depth1" label="depth1" fixed="left" />
        <el-table-column prop="depth2" label="depth2" />
        <el-table-column prop="depth3" label="depth3" />
        <el-table-column prop="depth4" label="depth4" />
        <el-table-column prop="title" label="title" />
        <el-table-column prop="id" label="id" fixed="right">
          <template #default="scope">
            <el-tooltip class="box-item" :content="scope.row.etc" placement="top-end" transition="initial" :disabled="!scope.row.etc">
              <el-link v-if="scope.row.link" :href="'/' + scope.row.link" type="primary" target="_blank">{{ scope.row.id }}</el-link>
              <span v-else>{{ scope.row.id }}</span>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </client-only>
    <ul class="coder-tip">
      <li>퍼블이 나오지 않는 페이지의 경우(ex. SSO 로그인) 링크 삭제.</li>
      <li>동일한 페이지의 경우(ex. 이용약관동의) 페이지를 생성하거나 통합페이지로 링크 이동.</li>
    </ul>
  </div>
</template>

<style lang="scss">
:root {
  --list-bgcolor-complete: #fff1f1;
  --list-bgcolor-modal: #ddeeff;
  --list-bgcolor-outlink: #b0b0b0;
}

.el-table td.el-table__cell div {
  word-break: keep-all;
}

// complete-row
.el-table__body .complete-row,
.el-table--striped .el-table__body tr.el-table__row--striped.complete-row {
  &:hover td.el-table__cell {
    background-color: var(--list-bgcolor-complete);
    color: var(--el-text-color-primary);
  }
  td.el-table__cell {
    background-color: var(--list-bgcolor-complete);
    color: var(--el-text-color-primary);
  }
}

// modal-row
.el-table__body .modal-row,
.el-table--striped .el-table__body tr.el-table__row--striped.modal-row {
  &:hover td.el-table__cell {
    background-color: var(--list-bgcolor-modal);
    color: var(--el-text-color-primary);
  }
  td.el-table__cell {
    background-color: var(--list-bgcolor-modal);
    color: var(--el-text-color-primary);
  }
}

// outlink-row
.el-table__body .outlink-row,
.el-table--striped .el-table__body tr.el-table__row--striped.outlink-row {
  &:hover td.el-table__cell {
    background-color: var(--list-bgcolor-outlink);
    color: var(--el-text-color-primary);
  }
  td.el-table__cell {
    background-color: var(--list-bgcolor-outlink);
    color: var(--el-text-color-primary);
  }
}

.depth1 td {
  border-top: 2px solid #000;
}

.el-table_1_column_1 {
  background: var(--el-bg-color-page) !important;
}

.explanatory {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-end;
  &:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
  &.complete:before {
    background-color: var(--list-bgcolor-complete);
  }
  &.modal:before {
    background-color: var(--list-bgcolor-modal);
  }
  &.outlink:before {
    background-color: var(--list-bgcolor-outlink);
  }
}

.coder-tip {
  padding: 10px 0;
  > li {
    padding: 5px 0;
    color: red;
    &:before {
      content: "🌈";
      padding-right: 5px;
    }
  }
}
</style>
