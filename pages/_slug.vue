<template>
  <div v-if="post" class="blog-detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-8">
          <div class="row">
            <div class="col-lg-12">
              <div class="post">
                <div class="image">
                  <img
                    src="~/assets/images/blog/details/1.jpg"
                    class="img-responsive"
                    alt=""
                  />
                </div>
                <h1 v-text="post.title"></h1>
                <div class="clearfix">
                  <div class="meta">
                    <ul>
                      <li>by <a href="">Admin</a></li>
                      <li>in <a href="">Photoshop, Graphic Design</a></li>
                    </ul>
                  </div>
                  <div class="like-comment-share">
                    <ul>
                      <li class="like">
                        <a href="" class="like"
                          ><i class="fa fa-heart"></i>292</a
                        >
                      </li>
                      <li>
                        <a href=""><i class="fa fa-comment"></i> 21</a>
                      </li>
                      <li>
                        <a href=""><i class="fa fa-share-alt"></i> Share</a>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]`
    const post = await $sanity.fetch(query)
    return { post }
  },
}
</script>
