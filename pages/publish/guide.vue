<script setup>
definePageMeta({
  layout: "publish"
});

const monacoOptions = { theme: "vs-dark" };

const componentData = [
  /* Tab */
  {
    componentTitle: "Tab type-01",
    tagName: resolveComponent("CTabs"),
    tagRef: ref(`<CTabs class="type-01" :index="0" :title="['tab1', 'tab2', 'tab3']" />`),
    class: "type-01",
    index: 0,
    title: ["tab1", "tab2", "tab3"]
  },
  {
    componentTitle: "Tab type-02",
    tagName: resolveComponent("CTabs"),
    tagRef: ref(`<CTabs class="type-02" :index="0" :title="['tab1', 'tab2', 'tab3']" />`),
    class: "type-02",
    index: 0,
    title: ["tab1", "tab2", "tab3"]
  },
  /* //Tab */
  /* Button */
  {
    componentTitle: "Button big",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="big prime" :title="'button'" />`),
    class: "big prime",
    title: "button"
  },
  {
    componentTitle: "Button big",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="big point" :title="'button'" />`),
    class: "big point",
    title: "button"
  },
  {
    componentTitle: "Button big",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="big dark" :title="'button'" />`),
    class: "big dark",
    title: "button"
  },
  {
    componentTitle: "Button big",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="big gray" :title="'button'" />`),
    class: "big gray",
    title: "button"
  },
  {
    componentTitle: "Button big",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="big white" :title="'button'" />`),
    class: "big white",
    title: "button"
  },
  {
    componentTitle: "Button big",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="big white-prime" :title="'button'" />`),
    class: "big white-prime",
    title: "button"
  },
  {
    componentTitle: "Button mid",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="mid prime" :title="'button'" />`),
    class: "mid prime",
    title: "button"
  },
  {
    componentTitle: "Button mid",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="mid point" :title="'button'" />`),
    class: "mid point",
    title: "button"
  },
  {
    componentTitle: "Button mid",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="mid dark" :title="'button'" />`),
    class: "mid dark",
    title: "button"
  },
  {
    componentTitle: "Button mid",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="mid gray" :title="'button'" />`),
    class: "mid gray",
    title: "button"
  },
  {
    componentTitle: "Button mid",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="mid white" :title="'button'" />`),
    class: "mid white",
    title: "button"
  },
  {
    componentTitle: "Button mid",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="mid white-prime" :title="'button'" />`),
    class: "mid white-prime",
    title: "button"
  },
  /* //Button */
  /* Icon Button */
  {
    componentTitle: "Button Icon [search]",
    tagName: resolveComponent("CButtons"),
    tagRef: ref(`<CButtons class="common-icon search" />`),
    class: "common-icon search",
    type: "Icon"
  },
  /* //Icon Button */
  {
    componentTitle: "Input text",
    tagName: resolveComponent("CInputs"),
    tagRef: ref(`<CInputs :id="'id01'" :type="'text'" :placeholder="'플레이스홀더'" :label="'레이블'" :value="'내용'" :disabled=false :readonly=false />`),
    id: "id01",
    type: "text",
    placeholder: "플레이스홀더",
    label: "레이블",
    value: "내용",
    disabled: false,
    readonly: false
  },
  {
    componentTitle: "Input password",
    tagName: resolveComponent("CInputs"),
    tagRef: ref(`<CInputs :id="'id02'" :type="'password'" :placeholder="'플레이스홀더'" :label="'레이블'" :value="'내용'" :disabled=false :readonly=false />`),
    id: "id02",
    type: "password",
    placeholder: "플레이스홀더",
    label: "레이블",
    value: "내용",
    delete: false,
    disabled: false,
    readonly: false
  },
  {
    componentTitle: "Radio",
    tagName: resolveComponent("CMultiple"),
    tagRef: ref(
      `<CMultiple :type="'radio'" :title="" :style="''" :name="'네임11'" :id="['id11', 'id12', 'id13']" :label="['레이블11', '레이블12', '레이블13']" :checked="[true, false, false]" :disabled="false" />`
    ),
    type: "radio",
    title: "",
    style: "",
    name: "네임11",
    id: ["id11", "id12", "id13"],
    label: ["레이블11", "레이블12", "레이블13"],
    checked: [true, false, false],
    disabled: false
  },
  {
    componentTitle: "Checkbox",
    tagName: resolveComponent("CMultiple"),
    tagRef: ref(
      `<CMultiple :type="'checkbox'" :title="" :style="''" :name="'네임31'" :id="['id31', 'id32', 'id33']" :label="['레이블31', '레이블32', '레이블33']" :checked="[true, false, false]" :disabled="false" />`
    ),
    type: "checkbox",
    title: "",
    style: "",
    name: "네임31",
    id: ["id31", "id32", "id33"],
    label: ["레이블31", "레이블32", "레이블33"],
    checked: [true, false, false],
    disabled: false
  },
  /* SelectBox */
  {
    componentTitle: "SelectBox",
    tagName: resolveComponent("CSelectBox"),
    tagRef: ref(`<CSelectBox :coptions="options" :title="타이틀" :disabled=false :changed=false />`),
    id: "select_test",
    title: "타이틀",
    option: [
      {
        val: "value",
        txt: "옵션01"
      },
      { val: "value", txt: "옵션02" },
      { val: "value", txt: "옵션03" },
      { val: "value", txt: "옵션04" }
    ],
    disabled: false,
    changed: false
  },
  /* //SelectBox */
  {
    componentTitle: "Steps",
    tagName: resolveComponent("CSteps"),
    tagRef: ref(`<CSteps :index="0" :title="['타이틀1','타이틀2','타이틀3']"/>`),
    index: 0,
    title: ["타이틀1", "타이틀2", "타이틀3"]
  }
];

const guideOptions = ref([]);
for (let i = 0; i < componentData.length; i++) {
  guideOptions.value.push({ show: false });
}

function toggleEditor(index) {
  const show = guideOptions.value[index].show;
  if (show) {
    guideOptions.value[index].show = false;
  } else {
    guideOptions.value[index].show = true;
  }
}
</script>

<template>
  <div>
    <!-- components -->
    <el-row :gutter="20">
      <el-col v-for="(item, index) in componentData" :key="index" :span="24" :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>{{ item.componentTitle }}</span>
              <el-button @click="toggleEditor(index)">
                <Icon name="material-symbols:code" />
              </el-button>
            </div>
          </template>
          <el-row :gutter="40">
            <el-col :span="24">
              <div class="grid-content">
                <div class="card-body">
                  <!-- {{ item.tagName.__name }} -->
                  <component
                    :is="item.tagName"
                    :id="item.id"
                    :class="item.class"
                    :index="item.index"
                    :title="item.title"
                    :type="item.type"
                    :placeholder="item.placeholder"
                    :label="item.label"
                    :value="item.value"
                    :delete="item.delete"
                    :badge="item.badge"
                    :view="item.view"
                    :search="item.search"
                    :mail="item.mail"
                    :confirm="item.confirm"
                    :notice="item.notice"
                    :disabled="item.disabled"
                    :readonly="item.readonly"
                    :style="item.style"
                    :name="item.name"
                    :checked="item.checked"
                    :cert-timer="item.certTimer"
                    :coptions="item.option"
                    :changed="item.changed"
                  />
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="grid-content">
                <div class="editor-box" :class="{ active: guideOptions[index].show }">
                  <ClientOnly>
                    <MonacoEditor v-model="item.tagRef.value" lang="html" class="editor tag" :options="monacoOptions"> Loading... </MonacoEditor>
                  </ClientOnly>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.editor {
  width: 100%;
  height: 150px;
  border: 1px solid var(--el-card-border-color);
  border-radius: 10px;
  overflow: hidden;
  &.tag {
    height: 50px;
  }
}
.el-card {
  margin-bottom: 20px;
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .grid-content {
    text-align: center;
    .editor-box {
      max-height: 0;
      padding-top: 0;
      overflow: hidden;
      transition: all 0.3s;
      &.active {
        padding-top: 20px;
        max-height: 150px;
      }
    }
  }
}

.common-icon {
  margin: 0 auto;
}
.common-buttons {
  margin: 0 auto;
}
</style>
