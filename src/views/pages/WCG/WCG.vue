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
figure
  flex-direction: column
figure.pepLink
  position: relative
  margin-right: 50px !important
  &:before
    +fakeLine(40px,2px,$blue)
    position: absolute
    top: calc(50% - 40px)
    right: calc(50% + 45px)
  &:after
    +fakeLine(100px,2px,$blue)
    position: absolute
    top: calc(50% - 40px)
    left: calc(50% + 44px)
figure.WCG
  position: relative
  &:before
    left: 20px
    +fakeLine(2px,130px,$blue)
    position: absolute
    top: 70%
    z-index: -1
  &:after
    +fakeLine(calc(100% - 40px),2px,$blue)
    position: absolute
    top: 70%
    right: 20px
    z-index: -1
figure.helmet
  position: relative
  &:before
    +fakeLine(2px,130px,$blue)
    position: absolute
    left: 50%
    bottom: calc(50% + 67px)
    z-index: -1
  &:after
    +fakeLine(140px,2px,$blue)
    position: absolute
    top: calc(50% - 40px)
    left: calc(50% + 44px)
</style>
