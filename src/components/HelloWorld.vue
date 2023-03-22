<template lang="pug">
.HelloWorld
  .scrollBox(ref="scrollBox" @mousemove="mousemove")
    .content(ref="content")
      .box
        el-popover(
          placement="top-start"
          title="标题"
          :width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        )
          template(#reference)
            .text(@click="dialogVisible = true") sdfsdfsdf
      .box
        el-popover(
          placement="top-start"
          title="标题"
          :width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        )
          template(#reference)
            .text(@click="dialogVisible = true") sdfsdfsdf
      .box
        el-popover(
          placement="top-start"
          title="标题"
          :width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        )
          template(#reference)
            .text(@click="dialogVisible = true") sdfsdfsdf
      .box
        el-popover(
          placement="top-start"
          title="标题"
          :width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        )
          template(#reference)
            .text(@click="dialogVisible = true") sdfsdfsdf
      .box
        el-popover(
          placement="top-start"
          title="标题"
          :width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        )
          template(#reference)
            .text(@click="dialogVisible = true") sdfsdfsdf
  el-dialog(
    title="提示"
    v-model="dialogVisible"
    width="30%"
    :before-close="handleClose"
  )
    span 这是一段信息
    template(#footer)
      span.dialog-footer
        el-button(@click="dialogVisible = false") 取 消
        el-button(type="primary" @click="dialogVisible = false") 确 定
</template>

<script>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const dialogVisible = ref(false)
    const scrollBox = ref(null)
    const content = ref(null)
    const mousemove = (evt) => {
      const x = evt.clientX
      const boxLeft = scrollBox.value.getBoundingClientRect().left
      const boxWidth = scrollBox.value.offsetWidth
      const point = x - boxLeft
      const contentWidth = content.value.offsetWidth

      const radio = point / boxWidth
      const overflow = contentWidth - boxWidth
      scrollBox.value.scrollTo(overflow * radio, scrollBox.value.scrollTop)
    }

    const handleClose = (done) => {
      ElMessageBox.confirm('确认关闭？')
        .then(() => {
          done()
        })
        .catch(() => {
          // catch
        })
    }

    return {
      mousemove,
      content,
      scrollBox,
      dialogVisible,
      handleClose,
    }
  },
}
</script>
<style lang="sass" scoped>
.HelloWorld
  display: flex
  align-items: center
  justify-content: center
  height: 100vh
  .scrollBox
    width: 95%
    height: 80%
    border: 1px solid #ccc
    overflow: hidden
    .content
      height: 100%
      width: 200%
      display: flex
      .box
        width: 20%
        height: 100%
        border: 1px solid #ccc
        +flex-center
        .text
          +size(100px,100px)
          +flex-center
          border: 1px solid #ccc
          cursor: pointer
</style>
