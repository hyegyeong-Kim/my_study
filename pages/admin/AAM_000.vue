<script setup>
definePageMeta({
  layout: "admin-dark"
});
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
        <tbody><!-- Add 23-10-19 tbody -->
          <tr>
            <th>text</th>
            <td>
              <label class="input-wrap">
                <input type="text" value="">
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <th>date</th>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <th>radio</th>
            <td>
              <span class="el-radio">
                <input id="radio1" type="radio" name="radioName" checked />
                <label for="radio1">checked</label>
              </span>
              <span class="el-radio">
                <input id="radio2" type="radio" name="radioName" />
                <label for="radio2">default</label>
              </span>
              <span class="el-radio">
                <input id="radio3" type="radio" name="radioName" disabled />
                <label for="radio3">disabled</label>
              </span>
            </td>
          </tr>
          <tr>
            <th>select</th>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <th>period</th>
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
            <th>checkbox</th>
            <td>
              <span class="el-checkbox">
                <input id="checkbox1" type="checkbox" name="checkboxName" checked />
                <label for="checkbox1">checked</label>
              </span>
              <span class="el-checkbox">
                <input id="checkbox2" type="checkbox" name="checkboxName" />
                <label for="checkbox2">default</label>
              </span>
              <span class="el-checkbox">
                <input id="checkbox3" type="checkbox" name="checkboxName" disabled />
                <label for="checkbox3">disabled</label>
              </span>
            </td>
          </tr>
        </tbody><!-- Add 23-10-19 tbody -->
      </table>
      <button type="submit" class="submit">조회</button>
    </div>

    <!-- 그리드제목 -->
    <div class="area-title">
      <h3 class="h3">그리드 제목</h3>
      <div class="buttons">
        <button type="button" class="prime solid">저장</button>
        <button type="button" class="prime">추가</button>
        <button type="button">삭제</button>
        <button type="button" class="point upld">엑셀 업로드</button>
        <button type="button" class="point dnld">엑셀 다운로드</button>
        <button type="button" class="refresh">새로고침</button>
        <label class="select-wrap">
          <select>
            <option value="">select</option>
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
            <th>집계구분</th>
            <th>집계구분</th>
            <th>수치</th>
            <th>강조</th>
            <th>입력_텍스트</th>
            <th>입력_날짜</th>
            <th>입력_셀렉트</th>
            <th>BTN</th>
            <th>DESC</th>
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
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>기본</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid02" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid02"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td class="emphasis">단일데이터 강조</td>
            <!-- 강조(단일데이터): td 태그에 emphasis 클래스 삽입. -->
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="emphasis">
            <!-- 강조(행): tr 태그에 emphasis 클래스 삽입. -->
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid03" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid03"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>행 강조</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="modify">
            <!-- 강조(수정예정 행): tr 태그에 modify 클래스 삽입. -->
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid04" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid04"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>수정예정 행 강조</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="checked">
            <!-- 강조(선택): tr 태그에 checked 클래스 삽입. -->
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid05" type="checkbox" name="checkboxGridName" checked />
                <label for="checkboxGrid05"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>선택 행 강조</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid06" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid06"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>기본</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid07" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid07"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>기본</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid08" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid08"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>기본</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid09" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid09"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>기본</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span class="el-checkbox">
                <input id="checkboxGrid10" type="checkbox" name="checkboxGridName" />
                <label for="checkboxGrid10"></label>
              </span>
            </td>
            <td>Label</td>
            <td>Label</td>
            <td>1,000.00</td>
            <td>기본</td>
            <td>
              <label class="input-wrap">
                <input type="text" value="text" />
                <button type="button" class="icon del">삭제</button>
                <button type="button" class="icon sch">검색</button>
              </label>
            </td>
            <td>
              <label class="input-wrap">
                <input type="text" value="0000-00-00" />
                <button type="button" class="icon cal">날짜선택</button>
              </label>
            </td>
            <td>
              <label class="select-wrap">
                <select>
                  <option value="">select</option>
                </select>
              </label>
            </td>
            <td></td>
            <td></td>
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
</template>
