<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <div class="meta clearfix">
      <ul>
        <li>by <a href="">Admin</a></li>
        <li>in <a href="">Photoshop, Website Design</a></li>
        <li>posted 31 May, 2015</li>
        <li><a href="">17 Comments</a></li>
        <li>Likes 299</li>
      </ul>
      <div class="share-this">
        <i class="fa fa-share-alt"></i> <a href="">Share this post</a>
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
