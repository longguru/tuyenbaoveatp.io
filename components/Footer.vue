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
          <h1>Từ khóa tìm kiếm</h1>
          <ul>
            <li v-for="(tuKhoa, index) in tuKhoas" :key="index">
              <a href="#">{{ tuKhoa }}</a>
            </li>
          </ul>
        </div>
        <!-- Tags Ends -->
        <!-- Recent Posts Starts -->
        <div class="col-lg-3 col-md-6 col-sm-6 recent-posts">
          <h1>Tin tuyển dụng mới nhất</h1>
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
          <h1>Xin làm bảo vệ</h1>
          <ul>
            <li class="clearfix">
              <div class="picture">
                <img src="~/assets/images/blog/footer/1.jpg" alt="" />
              </div>
              <div class="info">
                <div class="caption">
                  <a href="">Tôi ở Vĩnh Phúc xin làm bảo vệ được không?</a>
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
          <h1>Tuyển dụng bảo vệ</h1>
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
            <a id="callnowbutton" href="tel:0374638603">037 463 86 03</a
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
            current: 'tuyen-dung-05-bao-ve-nha-may-tai-kcn-khai-quang',
          },
          title:
            'Tuyển dụng 05 nhân viên bảo vệ nhà máy tại KCN Khai Quang - Vĩnh Yên - Vĩnh Phúc',
        },
        {
          _id: '44384eba-45a7-4089-bbc7-54ac22c5a78e',
          slug: {
            _type: 'slug',
            current: 'tuyen-bao-ve-tai-vinh-tuong',
          },
          title:
            'Tuyển 03 nam/nữ làm nhân viên bảo vệ tại Vĩnh Tường – Vĩnh Phúc',
        },
        {
          _id: 'f3c39e0b-8346-4af5-bc4c-0e9d51b5db6d',
          slug: {
            _type: 'slug',
            current:
              'tuyen-bao-ve-tai-ha-noi-tim-viec-lam-bao-ve-chinh-thuc-thoi-vu',
          },
          title:
            'Tuyển bảo vệ tại Hà Nội, tìm việc làm bảo vệ chính thức thời vụ',
        },
      ],
      tuKhoas: [
        'tuyển bảo vệ',
        'việc làm bảo vệ',
        'tìm việc làm bảo vệ',
        'tuyển bảo vệ hà nội',
        'việc làm bảo vệ tại hà nội',
        'tìm việc bảo vệ',
        'làm bảo vệ',
        'tuyển nhân viên bảo vệ',
        'tuyển dụng bảo vệ',
        'tuyển bảo vệ nội bộ',
        'tìm việc làm bảo vệ nội bộ',
        'cần tuyển bảo vệ ca đêm',
        'cần tuyển bảo vệ',
        'tuyển bảo vệ ca 8 tiếng tại hà nội',
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
