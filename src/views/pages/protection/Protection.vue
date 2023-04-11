<template lang="pug">
.box.Protection
  el-popover(
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  )
    template(#reference)
      figure(@click="dialogVisible = true" data-target="ProtectionItem2" data-name="ProtectionItem1")
        img(src="~@img/trendMicro.png")
        figcaption 防毒軟體 TrendMicro Apexone
  el-popover(
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  )
    template(#reference)
      figure(@click="dialogVisible = true" data-target="ProtectionItem3" data-name="ProtectionItem2")
        img(src="~@img/usb.png")
        figcaption USB 管控軟體資產管理軟體 WinMatrix

  el-popover(
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  )
    template(#reference)
      figure(@click="dialogVisible = true" data-target="ProtectionItem4" data-name="ProtectionItem3")
        img(src="~@img/crowdstrike.png")
        figcaption 端點進階持續性攻擊防護軟體 Crowdstrike Falcon


  el-popover(
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  )
    template(#reference)
      figure(@click="dialogVisible = true" data-target="ProtectionItem5" data-name="ProtectionItem4")
        img(src="~@img/IP.png")
        figcaption IP/MAC管理系統 Dr.IP

  el-popover(
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  )
    template(#reference)
      figure(@click="dialogVisible = true"  data-target="" data-name="ProtectionItem5")
        img(src="~@img/cyberark.png")
        figcaption 特權帳號管理系統 CyberArk
  el-dialog(
    title="提示"
    v-model="dialogVisible"
    width="80%"
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
  name: 'ProtectionItem',
  setup() {
    const dialogVisible = ref(false)
    return {
      dialogVisible,
    }
  },
}
</script>
<style lang="sass" scoped>
$blue: rgb(91,155,213)
.box
  position: relative
  // border: 2px solid $blue
  border-radius: 15px
</style>
