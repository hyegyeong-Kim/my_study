<script setup>
definePageMeta({
    layout: "admin"
});

const date_range = [
  { val: "value", txt: "일" },
  { val: "value", txt: "주" },
  { val: "value", txt: "월" }
];

function sam_situation() {
    const _target = event.target.closest('.area-title').classList.add('current');

    event.target.closest('.area-title').nextElementSibling.querySelector('.gray-box').style.display = 'none';
    event.target.closest('.area-title').nextElementSibling.querySelector('table').style.cssText = 'opacity:0; display:table';
    event.target.closest('.area-title').nextElementSibling.querySelector('.preloader_wrap').classList.add('active');

    setTimeout(function(){
        document.querySelector('.area-title.current').nextElementSibling.querySelector('.preloader_wrap').classList.remove('active');
        document.querySelector('.area-title.current').nextElementSibling.querySelector('table').style.removeProperty('opacity');
    },500);
}

</script>

<template>
    <div class="content">

        <!-- 담당자 정보 노출 -->
        <div class="info_box">
            <strong>접근 권한에 따라 사용 가능한 메뉴가 좌측에 제공됩니다.<br /> 접근 권한 및 Admin 사용과 관련하여 문의가 필요할 경우 담당자에게 문의 바랍니다.</strong>

            <p>Admin 관리 담당자 : 최윤홍 RF (02-6323-9002)</p>
        </div>
        <!-- //담당자 정보 노출 -->

        <!-- 그리드제목 -->
        <div class="area-title">
            <h3 class="h3">다국어 레이블</h3>
        </div>

        <!-- 그리드 -->
        <div class="area-result">
            <table>
                <colgroup>
                    <col style="width:10%;" />
                    <col />
                    <col style="width:13%;" />
                    <col />
                    <col />
                    <col style="width:10%;" />
                </colgroup>
                <thead>
                    <tr>
                        <th>대상 화면</th>
                        <th>파일명</th>
                        <th>등록일</th>
                        <th>등록자 E-mail</th>
                        <th>등록자</th>
                        <th>등록</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>인증</td>
                        <td><button type="button" class="underline">인증포탈_20240101.xlsx</button></td>
                        <td>2024-00-00</td>
                        <td>SKI.1234**@sk.com</td>
                        <td>김*니</td>
                        <td>
                            <!-- Edit 23-12-14 : file upload button -->
                            <span class="file-upload"><label for="fileUpload">등록</label><input id="fileUpload"
                                    type="file" class="blind"></span>
                            <!-- //Edit 23-12-14 : file upload button -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- add 2024-03-11 -->
        <!-- 그리드제목 -->
        <div class="area-title">
            <h3 class="h3">가입 및 로그인 통계</h3>
        </div>

        <div class="area-contition">
            <table>
                <!-- Add 23-10-19 -->
                <colgroup>
                    <col width="85px" />
                    <col width="" />
                    <col width="85px" />
                    <col width="" />
                </colgroup>
                <!-- //Add 23-10-19 -->
                <tbody><!-- Add 23-10-19 tbody -->
                    <tr>
                        <th>통계 단위</th>
                        <td>
                            <CSelectBox :coptions="date_range" />
                        </td>
                        <th>조회 기간</th>
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
                </tbody><!-- Add 23-10-19 tbody -->
            </table>
            <button type="submit" class="submit">조회</button>
        </div>

        <!-- 2024-04-04 레이아웃 4분할 변경 thead sticky 추가-->
        <div class="row_wrap row_4">
            <section>
                <div class="area-title">
                    <h3 class="h3">가입</h3>
                    <div class="buttons"><button type="button" class="point dnld">엑셀 다운로드</button></div>
                </div>

                <div class="area-regist table-wrap type_vertical">
                    <table class="ar admin_main_row">
                        <thead class="ac">
                            <tr>
                                <th>기간</th>
                                <th>mySUNI</th>
                                <th>LRS</th>
                                <th>이천포럼</th>
                                <th>울산포럼</th>
                                <th>AAAAAAAAA</th>
                                <th>합계</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th class="al">전체누적</th>
                                <th>10,000</th>
                                <th>10</th>
                                <th>10</th>
                                <th>15</th>
                                <th>20</th>
                                <th>18</th>
                            
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <th>02/01</th>
                                <td>10</td>
                                <td>10</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <th>02/02</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/03</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/04</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/05</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/06</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th >02/07</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/08</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/09</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/10</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/11</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/12</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/13</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/14</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/15</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/16</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/17</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/18</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/19</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/20</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <div class="area-title">
                    <h3 class="h3">로그인 전체</h3>
                    <div class="buttons"><button type="button" class="point dnld">엑셀 다운로드</button></div>
                </div>

                <div class="area-regist table-wrap type_vertical ">
                    <table class="ar admin_main_row">
                        <thead class="ac">
                            <tr>
                                <th>기간</th>
                                <th>mySUNI</th>
                                <th>LRS</th>
                                <th>이천포럼</th>
                                <th>울산포럼</th>
                                <th>AAAAAAAAA</th>
                                <th>합계</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th class="al">전체누적</th>
                                <th>10,000</th>
                                <th>10</th>
                                <th>10</th>
                                <th>15</th>
                                <th>20</th>
                                <th>18</th>
                            
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <th>02/01</th>
                                <td>10</td>
                                <td>10</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <th>02/02</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/03</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/04</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/05</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/06</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/07</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/08</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/09</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/10</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/11</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/12</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/13</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/14</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/15</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/16</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/17</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/18</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/19</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/20</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <div class="area-title">
                    <h3 class="h3">로그인 사용자</h3>
                    <div class="buttons"><button type="button" class="point dnld">엑셀 다운로드</button></div>
                </div>

                <div class="area-regist table-wrap type_vertical">
                    <table class="ar admin_main_row">
                        <thead class="ac">
                            <tr>
                                <th>기간</th>
                                <th>mySUNI</th>
                                <th>LRS</th>
                                <th>이천포럼</th>
                                <th>울산포럼</th>
                                <th>AAAAAAAAA</th>
                                <th>합계</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th class="al">전체누적</th>
                                <th>10,000</th>
                                <th>10</th>
                                <th>10</th>
                                <th>15</th>
                                <th>20</th>
                                <th>18</th>
                            
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <th>02/01</th>
                                <td>10</td>
                                <td>10</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <th>02/02</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/03</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/04</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/05</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/06</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/07</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/08</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/09</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/10</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/11</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/12</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/13</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/14</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/15</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/16</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/17</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/18</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/19</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/20</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


            <section>
                <!-- add 24-03-12 -->
                <div class="area-title">
                    <h3 class="h3">로그인 수단</h3>
                    <div class="buttons"><button type="button" class="point dnld">엑셀 다운로드</button></div>
                </div>

                <div class="area-regist table-wrap type_vertical">
                    <table class="ar admin_main_row">
                        <thead class="ac">
                            <tr>
                                <th>기간</th>
                                <th>mySUNI</th>
                                <th>LRS</th>
                                <th>이천포럼</th>
                                <th>울산포럼</th>
                                <th>AAAAAAAAA</th>
                                <th>합계</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th class="al">전체누적</th>
                                <th>10,000</th>
                                <th>10</th>
                                <th>10</th>
                                <th>15</th>
                                <th>20</th>
                                <th>18</th>
                            
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <th>02/01</th>
                                <td>10</td>
                                <td>10</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                                <td>18</td>
                            </tr>
                            <tr>
                                <th>02/02</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/03</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/04</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/05</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/06</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/07</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/08</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/09</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/10</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/11</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/12</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/13</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/14</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/15</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/16</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/17</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/18</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/19</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                            <tr>
                                <th>02/20</th>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>20</td>
                                <td>120</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- //add 24-03-12 -->
            </section>
        </div>
        <!-- //2024-04-04 레이아웃 4분할 변경 thead sticky 추가 -->

        <!-- 2024-05-31 기존 row_1 클래스 삭제 및 구조 변경 -->
        <!-- 2024-04-04 레이아웃 사이즈 변경 thead sticky 추가-->
        <div class="row_wrap">
            <section>
                <div class="area-title">
                    <h3 class="h3">서비스 별 가입 현황</h3>
                    <div class="buttons"><button type="button" class="dark" @click="sam_situation();">조회</button></div>
                </div>

            <div class="area-regist">
                <div class="area-title mt10">
                    <div class="buttons"><button type="button" class="point dnld">엑셀 다운로드</button></div>
                </div>
                <div class="area-regist table-wrap type_vertical">
                <!-- 최초 노출 -->
                    <p class="gray-box ac">조회 버튼을 클릭하세요.</p>
                <!-- //최초 노출 -->
                    <table class="ar admin_main_row" style="display:none;">
                        <thead class="ac">
                            <tr>
                                <th>서비스</th>
                                <th>가입 현황 (명)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="al">mySUNI</th>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <th class="al">LRS</th>
                                <td>500</td>
                            </tr>
                            <tr>
                                <th class="al">이천포럼</th>
                                <td>500</td>
                            </tr>
                            <tr>
                                <th class="al">울산포럼</th>
                                <td>2,000</td>
                            </tr>
                            <tr>
                                <th class="al">AAA</th>
                                <td>250</td>
                            </tr>
                        </tbody>
                    </table>
                
                    <div class="preloader_wrap"><!-- active 클래스 추가 시 보여집니다. -->
                        <div class="preloader">
                            <div class="spinner_layer">
                                <div class="circle_clipper left">
                                    <div class="circle"></div>
                                </div>
                                <div class="gap_patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle_clipper right">
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </section>
        </div>
        <!-- // 2024-04-04 레이아웃 사이즈 변경 thead sticky 추가 -->
        <!-- //2024-05-31 기존 row_1 클래스 삭제 및 구조 변경 -->

        <!-- 2024-04-04 2분할 변경 -->
        <div class="row_wrap">
            <section> 
                <div class="area-title">
                    <h3 class="h3">멤버사 별 mySUNI 가입 현황</h3>
                    <div class="buttons"><button type="button" class="dark">조회</button></div>
                </div>

                <div class="area-regist">
                    <div class="area-title mt10">
                        <div class="buttons"><button type="button" class="point dnld">엑셀 다운로드</button></div>
                    </div>
                    <div class="area-regist table-wrap type_vertical" style="max-height:944px;"><!-- 세로 스크롤 시 type_vertical 클래스 추가 -->
                        <table class="ar admin_main_row">
                            <thead class="ac">
                                <tr>
                                    <th rowspan="2">회사명</th>
                                    <th colspan="4">가입 현황</th>
                                </tr>
                                <tr>
                                    <th>대상 구성원 <br>(전체/명)</th>
                                    <th>가입 (명)</th>
                                    <th>미가입 (명)</th>
                                    <th>가입률 (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class='al al_left'>전체0</th>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가1</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스2</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명3</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가4</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스5</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명6</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가7</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스8</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명9</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가0</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스1</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명2</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가3</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스4</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명5</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가6</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스7</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명8</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가9</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스0</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="preloader_wrap"><!-- active 클래스 추가 시 보여집니다. -->
                    <div class="preloader">
                        <div class="spinner_layer">
                            <div class="circle_clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap_patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle_clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="area-title">
                    <h3 class="h3">멤버사 별 mySUNI ID SK구성원 현황</h3>
                    <div class="buttons"><button type="button" class="dark">조회</button></div>
                </div>

                <div class="area-regist">
                    <div class="area-title mt10">
                        <div class="buttons"><button type="button" class="point dnld">엑셀 다운로드</button></div>
                    </div>
                    <div class="area-regist table-wrap type_vertical" style="max-height:944px;"><!-- 세로 스크롤 시 type_vertical 클래스 추가 -->
                        <table class="ar admin_main_row">
                            <thead class="ac">
                                <tr>
                                    <th rowspan="2">회사명</th>
                                    <th colspan="2">전체 구성원 (명)</th>
                                    <th colspan="2">가입 (명)</th>
                                </tr>
                                <tr>
                                    <th>GDI</th>
                                    <th>non-GDI</th>
                                    <th>GDI</th>
                                    <th>non-GDI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="al al_right">전체0</th>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명6</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명2</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가3</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스4</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명5</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가6</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스7</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명8</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>11번가9</th>
                                    <td>500</td>
                                    <td>2,000</td>
                                    <td>500</td>
                                    <td>2,000</td>
                                </tr>
                                <tr>
                                    <th>ADT캡스0</th>
                                    <td>500</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <th>AIA생명</th>
                                    <td>2,000</td>
                                    <td>10,000</td>
                                    <td>10,000</td>
                                    <td>500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="preloader_wrap"><!-- active 클래스 추가 시 보여집니다. -->
                    <div class="preloader">
                        <div class="spinner_layer">
                            <div class="circle_clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap_patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle_clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section> 
            <!-- //add 2024-03-11 -->
        </div>
        <!-- 2024-04-04 2분할 변경-->
        
    </div>
</template>
