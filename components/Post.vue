<template>
  <div class="post">
    <div class="image">
      <img
        src="~/assets/images/blog/standard-listing/1.jpg"
        class="img-responsive"
        alt=""
      />
    </div>
    <h1>{{ post.title }}</h1>
    <div class="meta clearfix">
      <ul>
        <li>tìm việc <a href="">Tuyển bảo vệ An Thịnh Phát</a></li>
        <li>việc làm <a href="">Bảo Vệ Vĩnh Phúc</a></li>
        <li>ngày {{ new Date().toLocaleDateString() }}</li>
        <li><a href="">17 Hồ sơ</a></li>
        <li>Quan tâm 299</li>
      </ul>
      <div class="share-this">
        <i class="fa fa-share-alt"></i> <a href="">Chia sẻ việc làm</a>
      </div>
    </div>
    <div class="description">
      <block-content
        v-if="post.body.length"
        :key="post.body[0]._id"
        :blocks="post.body[0]"
      />
    </div>
    <div class="button">
      <NuxtLink :to="post.slug.current">Đọc tiếp... </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      require: true,
      default() {
        return { title: '', body: [], slug: { current: '' } }
      },
    },
  },
}
</script>
