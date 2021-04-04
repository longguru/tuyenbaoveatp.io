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
<style scoped>
.blog-standard {
  padding-top: 100px;
  padding-bottom: 100px;
}

.blog-standard .post {
  margin-bottom: 50px;

  padding-bottom: 50px;

  border-bottom-width: 1px;

  border-bottom-style: solid;

  border-bottom-color: #e2e2e2;
}

.blog-standard .post .image {
  padding-bottom: 10px;

  position: relative;
}

.blog-standard .post .image .user {
  position: absolute;

  z-index: 10;

  left: 40px;

  bottom: -25px;
}

.blog-standard .post .image .user .pic {
  float: left;
}

.blog-standard .post .image .user .pic img {
  border: 3px solid #fff;
}

.blog-standard .post .image .user .name {
  padding-left: 80px;

  padding-top: 3px;

  padding-bottom: 3px;

  padding-right: 30px;

  background-color: #f5f5f5;

  border-radius: 30px;

  color: #000;

  letter-spacing: 3px;

  font-size: 14px;

  margin-top: 20px;

  text-transform: uppercase;

  font-weight: 500;
}

.blog-standard .post h1 {
  font-size: 32px;

  color: #000;
}

.blog-standard .post .meta {
  color: #999999;

  margin-bottom: 30px;

  padding-bottom: 30px;

  border-bottom-width: 1px;

  border-bottom-style: solid;

  border-bottom-color: #e2e2e2;
}

.blog-standard .post .meta ul {
  padding: 0px;

  margin: 0px;

  float: left;
}

.blog-standard .post .meta ul li {
  display: inline-block;

  padding-left: 6px;
}

.blog-standard .post .meta ul li:first-child {
  display: inline-block;

  padding-left: 0px;
}

.blog-standard .post .meta ul li:first-child:before {
  display: inline-block;

  font: normal normal normal 14px/1 FontAwesome;

  font-size: inherit;

  text-rendering: auto;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  content: '';

  padding-right: 0px;
}

.blog-standard .post .meta ul li:before {
  display: inline-block;

  font: normal normal normal 14px/1 FontAwesome;

  font-size: inherit;

  text-rendering: auto;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  content: '|';

  padding-right: 10px;
}

.blog-standard .post .meta ul li a {
  color: #039be5;
}

.blog-standard .post .meta .share-this {
  float: right;
}

.blog-standard .post .meta .share-this i {
  padding-right: 8px;
}

.blog-standard .post .meta .share-this a {
  color: #039be5;
}

.blog-standard .post .description {
  font-size: 16px;

  color: #666666;
}

.blog-standard .post .full-contents {
  text-align: center;

  padding-top: 10px;

  padding-bottom: 20px;
}

.blog-standard .post .full-contents h2 {
  font-size: 32px;

  color: #000;

  padding-bottom: 20px;
}

.blog-standard .post .full-contents .description {
  font-size: 16px;

  line-height: 36px;
}

.blog-standard .post .full-contents .description .share-this {
  float: none;

  margin-top: 40px;

  font-family: 'Roboto', sans-serif;
}

.blog-standard .post .full-contents .description .share-this i {
  padding-right: 8px;

  color: #cccccc;
}

.blog-standard .post .full-contents .description .share-this a {
  color: #039be5;
}

.blog-standard .post .full-contents .description blockquote {
  font-size: 19px;

  border-left: 5px solid #d6d6d6;

  font-style: italic;

  color: #29a3e7;

  margin-top: 40px;

  margin-right: 0;

  margin-bottom: 40px;

  margin-left: 0;

  padding-top: 10px;

  padding-right: 20px;

  padding-bottom: 10px;

  padding-left: 20px;
}

.blog-standard .post .button {
  margin-top: 40px;

  margin-bottom: 10px;

  width: 100%;
}

.blog-standard .post .button a {
  color: #000;

  text-align: center;

  width: 100%;

  border: 2px solid #000;

  background-color: transparent;

  padding-top: 12px;

  padding-right: 30px;

  padding-bottom: 12px;

  padding-left: 30px;

  font-weight: bold;

  font-size: 14px;

  text-transform: uppercase;

  letter-spacing: 3px;
}

.blog-standard .post .button a:hover {
  text-decoration: none;

  border: 2px solid #000;

  background-color: #000;

  color: #fff;
}
</style>
