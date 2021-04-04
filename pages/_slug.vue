<template>
  <div v-if="post" class="blog-detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-8">
          <div class="row">
            <div class="col-lg-12">
              <div class="post">
                <div class="image">
                  <SanityImage :asset-id="post.imageId" auto="format">
                    <template #default="{ src }">
                      <img
                        :src="src"
                        class="img-responsive"
                        :alt="post.title"
                      />
                    </template>
                  </SanityImage>
                </div>
                <h1 v-text="post.title"></h1>
                <div class="clearfix">
                  <div class="meta">
                    <ul>
                      <li>tìm việc <a href="#">Bảo vệ An Thịnh Phát</a></li>
                      <li>việc làm <a href="#">Bảo vệ Vĩnh Phúc</a></li>
                    </ul>
                  </div>
                  <div class="like-comment-share">
                    <ul>
                      <li class="like">
                        <a href="#" class="like"
                          ><i class="fa fa-heart"></i>292</a
                        >
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-comment"></i> 21</a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-share-alt"></i> Share</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="description">
                  <block-content
                    v-for="child in post.body"
                    :key="child._id"
                    :blocks="child"
                  />
                </div>
              </div>
            </div>
          </div>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=242726457596775&autoLogAppEvents=1"
            nonce="D6wC9xAj"
          ></script>
          <div
            class="fb-comments"
            :data-href="'https://tuyenbaoveatp.ga/' + $route.fullPath"
            data-width=""
            data-numposts="5"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]{_id, title, body, slug, 'imageId': mainImage.asset->_id}`
    const post = await $sanity.fetch(query)
    return { post }
  },
}
</script>
