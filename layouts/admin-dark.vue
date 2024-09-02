<script setup>
/* Add 23-11-28 자동완성 레이어 외부 클릭 시 레이어 닫기 */
onMounted(() => {
  document.querySelector('body').addEventListener('click', function(e){
    if(document.querySelectorAll('.auto_complete_wrap').length > 0){
      if(!e.target.closest('div').classList.contains('code-search-list')){
        for(var i=0; i<document.querySelectorAll('.auto_complete_wrap').length; i++){
          document.querySelectorAll('.code-search-list')[i].classList.remove('active');
        }
      }
    }
  });
})
/* //Add 23-11-28 자동완성 레이어 외부 클릭 시 레이어 닫기 */
</script>

<template>
  <div id="admin-container" class="type_dark">
    <AdminSidebar />
    <main class="main">
      <AdminHeader />
      <div class="content-wrap">
        <slot />
      </div>
    </main>
  </div>
</template>

<style lang="scss">
@import url("/assets/css/admin.scss");
</style>
