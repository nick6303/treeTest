<template lang="pug">
.box.WCG
  el-popover(
    placement="top-start"
    title="标题"
    :width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  )
    template(#reference)
      figure.WCG(@click="dialogVisible = true")
        figcaption 上網行為管理系統 Forcepoint WCG
        img(src="~@img/WCG.png")
  .row
    el-popover(
      placement="top-start"
      title="标题"
      :width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    )
      template(#reference)
        figure.pepLink.off(@click="dialogVisible = true")
          img(src="~@img/pepLink.png")
          figcaption 廣域網路負載平衡器 PepLink
    el-popover(
      placement="top-start"
      title="标题"
      :width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    )
      template(#reference)
        figure.helmet(@click="dialogVisible = true")
          img(src="~@img/helmet.png")
          figcaption 全球資安情資分析防禦系統 Ixia TheartArmor
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
  name: 'WCG',
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
  padding-bottom: 100px !important
figure
  flex-direction: column
figure.pepLink
  width: 50%
  &:before
    +fakeLine(calc(50% + 50px),2px,$blue)
    top: calc(50% - 25px)
    left: -50px
  &:after
    +fakeLine(100px,2px,$blue)
    top: calc(50% - 25px)
    left: calc(50% + 44px)
figure.WCG
  &:before
    left: 14px
    +fakeLine(2px,130px,$blue)
    top: 70%
  &:after
    +fakeLine(calc(100% - 30px),2px,$blue)
    top: 70%
    left: 50%
    transform: translateX(-50%)
figure.helmet
  width: 50%
  &:before
    +fakeLine(2px,120px,$blue)
    left: calc(50% - 1px)
    bottom: calc(50% + 69px)
  &:after
    +fakeLine(180px,2px,$blue)
    top: calc(50% - 25px)
    left: calc(50% + 44px)
</style>
