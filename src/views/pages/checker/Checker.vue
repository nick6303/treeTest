<template lang="pug">
.box.Checker
  el-popover(
    placement="top-start"
    title="标题"
    :width="400"
    trigger="hover"
  ) 
    ul
      li 惡意郵件檢測系統 TrendMicro IMSVA
      li 郵件病毒檢測系統 TrendMirco ScanMail
      li 全方位郵件過濾系統中華數位 SPAM
      li 郵件沙箱檢測系統 McAfee ATD
    template(#reference)
      figure.email.off(@click="dialogVisible = true" data-target="OaNetwork2" data-name="checker1")
        figcaption 全方位郵件過濾系統
        img(src="~@img/email.png")
  el-popover(
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  )
    template(#reference)
      figure.trendDDI(@click="dialogVisible = true" data-target="OaNetwork2" data-name="checker1")
        img(src="~@img/trendDDI.png")
        figcaption 網路惡意行為偵測系統 TrendMicro DDI
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
  name: 'CheckerItem',
  setup() {
    const dialogVisible = ref(false)
    return { dialogVisible }
  },
}
</script>
<style lang="sass" scoped>
$blue: rgb(91,155,213)
.box
  // padding-top: 90px !important
  position: relative
figure
  flex-direction: column
ul
  display: flex
  flex-wrap: wrap
  width: 350px
  li
    width: 50%
    padding: 5px
    text-align: center
</style>
