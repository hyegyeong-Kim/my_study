<script setup>
onMounted(() => {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#parallax");
  // Magic happens here
  function parallax(e) {
    const _w = window.innerWidth / 2;
    const _h = window.innerHeight / 2;
    const _mouseX = e.clientX;
    const _mouseY = e.clientY;
    const _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
    const _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
    const _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
    const x = `${_depth3}, ${_depth2}, ${_depth1}`;
    // console.log(x);
    elem.style.backgroundPosition = x;
  }
});
</script>

<template>
  <div>
    <div id="parallax"><h1>Parallax</h1></div>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #1d1e22;
}
#parallax {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-3.png),
    url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-2.png), url(https://raw.githubusercontent.com/oscicen/oscicen.github.io/master/img/depth-1.png);
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
}
h1 {
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: "Arial";
  text-transform: uppercase;
  opacity: 0.2;
  font-size: 70px;
}
</style>
