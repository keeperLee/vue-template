<template>
  <div class="root">
    <div class="UploadDemo">
      <el-upload
          ref="upload"
          :auto-upload="false"
          :before-upload="beforeUpload"
          :file-list="fileList"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          action="http://127.0.0.1:8083/upload/upload"
          class="upload-demo"
          name="multipartFile">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button size="small" style="margin-left: 10px;" type="success" @click="submitUpload">上传到服务器
        </el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadDemo",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      // const isLt2M = file.size / 1024 / 1024 < 2;
      //
      // if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      // if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 2MB!');
      // }
      // return isJPG && isLt2M;
    }
  }
}
</script>

<style lang="stylus" scoped>
.root
  position: relative;
  width 100%
  height 100%

  .UploadDemo
    position relative

</style>
