<template lang="pug">
.box.VPN
  .row
    el-popover(
      placement="top-start"
      title="标题"
      :width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    )
      template(#reference)
        figure.IPS(@click="dialogVisible = true")
          figcaption 入侵防護系統 McAfee IPS
          img(src="~@img/IPS.png")
    el-popover(
      placement="top-start"
      title="标题"
      :width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    )
      template(#reference)
        figure.wall.off(@click="dialogVisible = true")
          figcaption 防火牆 Checkpoint Firewall
          img(src="~@img/wall.png")
  el-popover(
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  )
    template(#reference)
      figure.vpn(@click="dialogVisible = true")
        figcaption 虛擬私有網路
        img(src="~@img/vpn.png")
        img(src="~@img/2fa.png")
        figcaption 多因素驗證系統全景 IDexpert
  el-dialog(
    title="提示"
    v-model="dialogVisible"
    width="30%"
  )
    span 这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息这是一段信息
    template(#footer)
      span.dialog-footer
        el-button(@click="dialogVisible = false") 取 消
        el-button(type="primary" @click="dialogVisible = false") 确 定
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'VPN',
  setup() {
    const dialogVisible = ref(false)
    return { dialogVisible }
  },
}
</script>
<style lang="sass" scoped>
$blue: rgb(91,155,213)
.box
  padding-top: 280px !important
figure
  flex-direction: column

figure.IPS,figure.wall
  width: 50%
  &:before
    +fakeLine(2px,170px,$blue)
    top: calc(100% - 35px)
    left: calc(50% - 1px)
figure.IPS
  &:after
    +fakeLine(50%,2px,$blue)
    bottom: 45px
    left: calc(50% + 43px)
figure.wall
  &:after
    +fakeLine(calc(50% + 50px),2px,$blue)
    bottom: 45px
    left: 50%
figure.vpn
  width: 100%
  &::before
    +fakeLine(50%,2px,$blue)
    top: calc(50% - 50px)
    left: 50%
    transform: translateX(-50%)
</style>
