<template>
  <div class="footer-06">
    <div class="container">
      <!-- Row 1 Starts -->
      <div class="row row1">
        <div class="col-lg-9 col-md-9 col-sm-9">
          <!-- <img src="~/assets/images/logo/footer-logo.png" alt="" /> -->
          <h2 class="mau-trang">
            Công ty Bảo Vệ An Thịnh Phát - Tuyển dụng bảo vệ
          </h2>
        </div>
        <!-- Social Icons Starts -->
        <div class="col-lg-3 col-md-3 col-sm-3">
          <ul class="social-icons">
            <li>
              <a href=""><i class="fa fa-twitter"></i></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/tuyenbaoveanthinhphat/"
                ><i class="fa fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href=""><i class="fa fa-instagram"></i></a>
            </li>
            <li>
              <a href=""><i class="fa fa-linkedin"></i></a>
            </li>
          </ul>
        </div>
        <!-- Social Icons Ends -->
      </div>
      <!-- Row 1 Ends -->
      <!-- Row 2 Starts -->
      <div class="row row2">
        <!-- Tags Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 clearfix tags">
          <h4 class="tieu-de-chan">Từ khóa tìm kiếm</h4>
          <ul>
            <li v-for="(tuKhoa, index) in tuKhoas" :key="index">
              <a href="#">{{ tuKhoa }}</a>
            </li>
          </ul>
        </div>
        <!-- Tags Ends -->
        <!-- Recent Posts Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 recent-posts">
          <h4 class="tieu-de-chan">Tin tuyển dụng mới nhất</h4>
          <ul>
            <li v-for="job in jobs" :key="job._id">
              <nuxt-link :to="'/' + job.slug.current">{{
                job.title
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <!-- Recent Posts Ends -->
        <!-- From Blog Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 from-blog">
          <h4 class="tieu-de-chan">Xin làm bảo vệ</h4>
          <ul>
            <li class="clearfix">
              <div class="picture">
                <img
                  src="~/assets/images/blog/footer/1.jpg"
                  alt="Tuyển bảo vệ ở Vĩnh Phúc"
                />
              </div>
              <div class="info">
                <div class="caption">
                  <a href="#">Tôi ở Vĩnh Phúc xin làm bảo vệ được không?</a>
                </div>
                <div class="date">
                  Ngày đăng {{ new Date().toLocaleDateString() }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- From Blog Ends -->
        <!-- About Us Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 about">
          <h4 class="tieu-de-chan">Tuyển dụng bảo vệ</h4>
          <div class="description">
            <strong
              >Công Ty TNHH Dịch Vụ Bảo Vệ An Thịnh Phát, Mã số thuế:
              2500493741, Địa chỉ: Số nhà 38, Tổ 7, Phường Trưng Trắc, Thị xã
              Phúc Yên, Tỉnh Vĩnh Phúc:</strong
            ><br />
            <strong>Cần tuyển dụng</strong>
            <em>nhân viên an ninh bảo vệ</em> tòa nhà, siêu thị, nhà máy làm
            việc tại KCN Khai Quang, Vĩnh Yên, KCN Bình Xuyên, Vĩnh Phúc hoặc
            KCN Bá Thiện, Vĩnh Phúc. Khu vực Phúc Yên. KCN Quang Minh, Mê Linh,
            Hà Nội
          </div>
          <div class="call-mobile">
            <a id="callnowbutton" href="tel:0978333963">097 833 39 63</a
            ><i class="fa fa-phone"></i>
          </div>
          <!-- Your Chat Plugin code -->
          <div
            class="fb-customerchat"
            attribution="setup_tool"
            page_id="110994124405341"
          ></div>
        </div>
        <!-- About Us Ends -->
      </div>
      <!-- Row 2 Ends -->
    </div>
    <!-- Load Facebook SDK for JavaScript -->

    <script>
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v10.0',
        })
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    </script>

    <!-- Facebook Pixel Code -->
    <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = !0
        n.version = '2.0'
        n.queue = []
        t = b.createElement(e)
        t.async = !0
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s.parentNode.insertBefore(t, s)
      })(
        window,
        document,
        'script',
        'https://connect.facebook.net/vi_VN/fbevents.js'
      )
      fbq('init', '241950547678859')
      fbq('track', 'PageView')
    </script>
    <noscript
      ><img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=241950547678859&ev=PageView&noscript=1"
    /></noscript>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'G-SFDXCZ47RJ')
    </script>
    <script id="mcjs">
      !(function (c, h, i, m, p) {
        ;(m = c.createElement(h)),
          (p = c.getElementsByTagName(h)[0]),
          (m.async = 1),
          (m.src = i),
          p.parentNode.insertBefore(m, p)
      })(
        document,
        'script',
        'https://chimpstatic.com/mcjs-connected/js/users/dafd0f159bea8e5be932061e6/82e7b33165ac47af3b3570a26.js'
      )
    </script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-201783842-3"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())

      gtag('config', 'UA-201783842-3')
    </script>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        {
          _id: '29a39648-4731-4f86-8ecc-8fb2771de26b',
          slug: {
            _type: 'slug',
            current:
              'vinh-yen-tuyen-gap-5-nhan-vien-bao-ve-nha-may-kcn-khai-quang',
          },
          title:
            'Vĩnh Yên - Tuyển gấp 5 Nhân viên bảo vệ nhà máy KCN Khai Quang',
        },
        {
          _id: '44384eba-45a7-4089-bbc7-54ac22c5a78e',
          slug: {
            _type: 'slug',
            current:
              'tuyen-bao-ve-tai-vinh-tuong-bao-ve-sieu-thi-bigc-vinh-phuc',
          },
          title: 'Tuyển bảo vệ tại vĩnh tường - Bảo vệ Siêu Thị BigC Vĩnh Phúc',
        },
        {
          _id: '5f563ca5-d9a8-4cb8-a0dd-96418cc9b224',
          slug: {
            _type: 'slug',
            current:
              'cong-ty-bao-ve-tai-vinh-phuc-tuyen-20-bao-ve-kdt-times-gadern',
          },
          title:
            'Công ty bảo vệ tại Vĩnh Phúc tuyển 20 bảo vệ KĐT Times Gadern',
        },
        {
          _id: '68d0919d-a50e-47dc-996b-7faaa3a36d4e',
          slug: {
            _type: 'slug',
            current: 'vinh-yen-tuyen-03-chi-huy-doi-bao-ve-tai-kcn-khai-quang',
          },
          title: 'Vĩnh Yên - Tuyển 03 chỉ huy đội bảo vệ tại KCN Khai Quang',
        },
        {
          _id: 'f3c39e0b-8346-4af5-bc4c-0e9d51b5db6d',
          slug: {
            _type: 'slug',
            current:
              'tuyen-bao-ve-tai-vinh-phuc-tim-viec-lam-bao-ve-chinh-thuc-thoi-vu',
          },
          title:
            'Tuyển bảo vệ tại vĩnh phúc, tìm việc làm bảo vệ chính thức thời vụ',
        },
        {
          _id: 'f3c39e0b-8346-4af5-bc4c-0e9d51b5dd',
          slug: {
            _type: 'slug',
            current:
              'tuyen-dung-phuc-yen-can-tuyen-05-nhan-vien-lam-bao-ve-kho-hang',
          },
          title:
            'Tuyển dụng phúc yên: Cần tuyển 05 nhân viên làm bảo vệ kho hàng',
        },
      ],
      tuKhoas: [
        'tuyển bảo vệ',
        'tuyển bảo vệ vĩnh phúc',
        'việc làm bảo vệ',
        'tìm việc làm bảo vệ',
        'tuyển bảo vệ tại vĩnh tường',
        'tìm việc làm bảo vệ tại vĩnh yên',
        'tìm việc bảo vệ',
        'làm bảo vệ',
        'tuyển nhân viên bảo vệ',
        'tuyển dụng bảo vệ',
        'tuyển bảo vệ nội bộ',
        'tìm việc làm bảo vệ nội bộ',
        'cần tuyển bảo vệ ca đêm',
        'cần tuyển bảo vệ',
        'việc làm vĩnh phúc',
        'tuyển bảo vệ trường học',
        'bảo vệ nội bộ',
        'tuyển bảo vệ lương cao',
        'tim viec lam bao ve',
        'bao ve noi bo',
        'nhân viên bảo vệ',
      ],
    }
  },
}
</script>
<style scoped>
.tieu-de-chan {
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 30px;
}
</style>
