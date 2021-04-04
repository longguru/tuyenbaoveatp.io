<template>
  <nav class="navigation-02 yamm navbar navbar-inverse fill-black normal">
    <div class="container-fluid">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-02"
          aria-expanded="false"
          aria-controls="navbar-02"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="home-01.html"
          ><img
            src="~/assets/images/logo/logo-1.png"
            width="150"
            height="50"
            alt=""
        /></a>
      </div>
      <div id="navbar-02" class="navbar-collapse collapse">
        <ul class="nav navbar-nav right">
          <li><a href="contact-us.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#navigation {
  width: 100%;

  margin-left: auto;

  margin-bottom: auto;

  position: absolute;

  z-index: 99999;

  padding-left: 20px;

  padding-right: 20px;
}

nav.no-sticky {
  position: absolute !important;
}

nav.fill-black.normal {
  background: rgba(20, 20, 20, 1);

  position: fixed;

  width: 100%;

  z-index: 999999;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

nav.fill-black.sticky {
  position: fixed;

  width: 100%;

  background: rgba(20, 20, 20, 0.9);

  z-index: 999999;
}

nav.parallax.normal {
  background: rgba(20, 20, 20, 0.2);

  z-index: 999999;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

nav.parallax.sticky {
  position: fixed;

  width: 100%;

  background: rgba(20, 20, 20, 0.2);

  z-index: 999999;
}

nav.fill-white.normal {
  background: rgba(255, 255, 255, 1);

  position: fixed;

  width: 100%;

  z-index: 999999;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

nav.fill-white.sticky {
  position: fixed;

  width: 100%;

  background: rgba(255, 255, 255, 0.9);

  z-index: 999999;
}

nav.fill-white-overlay.normal {
  background: rgba(255, 255, 255, 1);

  position: fixed;

  width: 100%;

  margin-left: auto;

  margin-right: auto;

  z-index: 999999;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

nav.fill-white-overlay.sticky {
  position: fixed;

  margin-left: auto;

  margin-right: auto;

  width: 100%;

  background: rgba(255, 255, 255, 0.9);

  z-index: 999999;
}

nav.transparent.normal {
  background: rgba(20, 20, 20, 0);

  position: fixed;

  width: 100%;

  z-index: 999999;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

nav.transparent.sticky {
  position: fixed;

  width: 100%;

  background: rgba(20, 20, 20, 0.9);

  z-index: 999999;
}

nav.sticky .navbar-brand {
  float: left;

  height: 0px;

  font-size: 18px;

  line-height: 20px;

  padding-top: 10px;

  padding-right: 15px;

  padding-bottom: 10px;

  padding-left: 15px;
}

nav.sticky .navbar-brand img {
  width: 80%;

  height: auto;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

nav.navigation-13.sticky .navbar-brand {
  position: absolute;

  width: 100%;

  left: 0;

  top: 0;

  right: 0;

  text-align: center;

  margin-left: auto;

  margin-right: auto;

  margin-top: 10px;

  margin-bottom: 10px;
}

nav.navigation-13.normal .navbar-brand img {
  width: 150px;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

nav.navigation-13.sticky .navbar-brand img {
  width: 120px;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

nav.sticky .navbar-nav > li > a {
  padding-top: 0px;

  padding-bottom: 0px;

  height: 60px;

  line-height: 60px;
}

nav.sticky .navbar-nav > li > .searchlink {
  padding-top: 0px;

  padding-bottom: 0px;

  height: 60px;

  line-height: 60px;
}

nav.sticky .navbar-toggle {
  position: relative;

  float: right;

  padding: 9px 10px;

  margin-top: 12px;

  margin-right: 15px;

  margin-bottom: 8px;

  background-color: transparent;

  background-image: none;

  border: 1px solid transparent;

  border-radius: 4px;
}

nav.sticky .nav-contact {
  padding-top: 14px;
}

.navbar-inverse.fill-white .navbar-toggle .icon-bar {
  background-color: #777;
}

.navbar-inverse.fill-white .navbar-toggle {
  position: relative;

  float: right;

  padding: 9px 10px;

  margin-top: 10px;

  margin-right: 15px;

  margin-bottom: 10px;

  background-color: #ccc;

  background-image: none;

  border: 1px solid transparent;

  border-radius: 4px;
}

.navbar-brand {
  float: left;

  height: 50px;

  font-size: 18px;

  line-height: 20px;

  padding-top: 24px;

  padding-right: 15px;

  padding-bottom: 24px;

  padding-left: 15px;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

.navbar-brand img {
  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

.navbar {
  border-radius: 0px;
}

.nav.right {
  float: right;
}

.navbar {
  position: relative;

  /*min-height: 100px;*/

  margin-bottom: 0px;

  border: 1px solid transparent;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

#navbar-01 > ul,
#navbar-02 > ul,
#navbar-03 > ul {
  padding-top: 0px;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

.navbar-nav > li > .searchlink {
  padding-top: 0px;

  padding-bottom: 0px;

  height: 100px;

  line-height: 100px;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

.navbar-nav > li > a {
  padding-top: 0px;

  padding-bottom: 0px;

  height: 100px;

  line-height: 100px;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

.dropdown-menu {
  background: rgba(20, 20, 20, 1);

  color: #fff;

  padding: 10px;

  -webkit-transition: all 0.2s ease;

  transition: all 0.2s ease;

  border-radius: 0px;
}

.dropdown-menu li a {
  color: #fff;
}

.dropdown-menu .yamm-content {
  padding: 10px;
}

.dropdown-menu .yamm-content ul {
}
.dropdown-menu .yamm-content ul li {
  list-style-type: none;

  min-width: 180px;
}

.dropdown-menu .yamm-content ul li h2 {
  padding-left: 20px;

  padding-right: 11px;

  font-weight: 400;

  line-height: 1.3 !important;

  /*white-space: nowrap;*/

  font-size: 13px;

  text-transform: none;

  letter-spacing: 0px;

  font-weight: 600;

  color: #e5e5e5;
}

.dropdown-menu .yamm-content ul li a {
  display: block;

  padding-top: 11px;

  padding-right: 20px;

  padding-bottom: 11px;

  padding-left: 20px;

  font-weight: 400;

  line-height: 1.3 !important;

  /*white-space: nowrap;*/

  font-size: 13px;

  text-transform: none;

  letter-spacing: 0px;

  color: #b0b0b0;

  transition: all 0.3s;

  -webkit-transition: all 0.3s;

  text-align: left;

  -webkit-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);

  -moz-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);

  -o-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);

  -ms-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);

  transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);
}

.dropdown-menu .yamm-content ul li a:hover {
  color: #039be5;

  text-decoration: none;

  /*background-color: rgba(255, 255, 255, .09);*/
}

.dropdown-menu i {
  margin-left: -2px;

  padding-right: 6px;
}

.dropdown-menu i {
  padding-left: 3px;

  font-size: 14px;

  margin-right: 3px;

  text-align: center;

  width: 22px;
}

.dropdown-submenu.menu-invert {
  right: 100% !important;

  left: auto !important;
}

.dropdown ul.dropdown-menu {
  padding: 0px;

  margin: 0px;
}

.dropdown-menu > li > a {
  display: block;

  padding-top: 11px;

  padding-right: 25px;

  padding-bottom: 11px;

  padding-left: 15px;

  clear: both;

  font-weight: 400;

  line-height: 1.3 !important;

  white-space: nowrap;

  font-size: 13px;

  text-transform: none;

  letter-spacing: 0px;

  font-weight: 400;

  color: #b0b0b0;

  text-align: left;

  -webkit-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);

  -moz-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);

  -o-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);

  -ms-transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);

  transition: all 0.27s cubic-bezier(0, 0, 0.58, 1);
}

.dropdown-menu > li > a:hover {
  color: #fff;

  text-decoration: none;

  background-color: rgba(255, 255, 255, 0.09);
}

.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:focus,
.navbar-inverse .navbar-nav > .open > a:hover {
  color: #039be5;

  background: transparent;
}

.searchlink {
  display: block;

  padding-left: 20px;

  padding-right: 15px;

  position: relative;

  color: #fff;

  font-size: 14px;

  cursor: pointer;
}

.searchlink:hover,
.searchlink.open {
  color: #fff;
}

.searchlink.open > .searchform {
  display: block;
}

/** search field **/

.searchform {
  display: none;

  position: absolute;

  width: 300px;

  height: 50px;

  line-height: 30px;

  top: 80px;

  right: -15px;

  padding: 0 15px;

  cursor: default;

  z-index: 10;
}

.sticky .searchform {
  display: none;

  position: absolute;

  width: 300px;

  height: 50px;

  line-height: 30px;

  top: 60px;

  right: -15px;

  padding: 0 15px;

  cursor: default;

  z-index: 10;
}

.searchform:hover i {
  color: #000;
}

.searchlink.open .searchform {
  display: block;
}

#search {
  display: block;

  position: relative;
}

#s {
  width: 270px;

  background: #f5f5f5;

  padding: 8px 11px;

  border: 0;

  color: #000;

  -webkit-border-radius: 2px;

  -moz-border-radius: 2px;

  border-radius: 2px;
}

.sbtn {
  display: block;

  position: absolute;

  right: 10px;

  top: 7px;

  background: none;

  border: none;

  color: #bcbcbc;

  font-size: 20px;

  cursor: pointer;
}

.shop-menu .yamm-content {
  padding-top: 30px;
}

.shop-menu .listing li {
  margin-bottom: 30px;
}

.shop-menu .listing .picture {
  float: left;

  margin-right: 20px;
}

.shop-menu .listing .caption a {
  font-size: 14px;

  padding: 0px;

  padding-bottom: 8px;
}

.shop-menu .listing .caption a:hover {
  background-color: transparent;
}

.shop-menu .listing .info .price {
  font-size: 16px;

  color: #0090bf;
}

.shop-menu .featured-product .caption {
  line-height: normal;

  white-space: nowrap;

  font-size: 14px;

  color: #a7a7a7;
}

.shop-menu .featured-product h3 {
  text-transform: uppercase;

  font-size: 18px;

  color: #a7a7a7;

  padding-top: 0px;

  margin-top: 0px;

  font-weight: 300;
}

.shop-menu .featured-product .picture {
  padding-bottom: 10px;
}

.shop-menu .featured-product .caption {
  font-size: 14px;

  color: #a7a7a7;
}

.shop-menu .featured-product .price {
  font-size: 20px;

  color: #0090bf;
}

.nav-contact {
  display: inline-block;

  text-align: right;

  /* float: right; */

  padding-top: 33px;

  padding-right: 25px;

  padding-bottom: 18px;

  padding-left: 25px;

  -webkit-transition: all 0.4s ease;

  transition: all 0.4s ease;
}

.nav-contact ul {
  text-align: right;

  padding: 0;

  margin: 0;
}

.nav-contact ul li {
  display: inline-block;

  padding-left: 10px;

  padding-right: 10px;
}

.nav-contact ul li a {
  font-size: 13px;

  letter-spacing: 3px;

  color: #fff;

  font-weight: 500;

  text-transform: uppercase;
}

.nav-contact ul li a:hover {
  font-size: 13px;

  letter-spacing: 3px;

  color: #039be5;

  font-weight: 500;

  text-transform: uppercase;

  text-decoration: none;
}
.navigation-02.navbar-inverse .navbar-nav > li > a {
  font-size: 13px;

  letter-spacing: 3px;

  color: #fff;

  font-weight: 500;

  text-transform: uppercase;
}

.navigation-02.navbar-inverse .navbar-nav > li.hamburger a {
  font-size: 22px;
}

.navigation-02.navbar-inverse .navbar-nav > li > a:hover {
  color: #039be5;

  background-color: transparent;
}

.navigation-02.navbar-inverse .navbar-nav > .active > a,
.navigation-02.navbar-inverse .navbar-nav > .active > a:focus,
.navigation-02.navbar-inverse .navbar-nav > .active > a:hover {
  color: #039be5;

  background-color: transparent !important;
}

.navigation-02 .navbar-toggle {
  position: relative;

  float: right;

  padding: 9px 10px;

  margin-top: 10px;

  margin-right: 15px;

  margin-bottom: 10px;

  background-color: transparent;

  background-image: none;

  border: 1px solid transparent;

  border-radius: 4px;
}

.navigation-02.navbar-inverse .navbar-collapse,
.navigation-02.navbar-inverse .navbar-form {
  border-color: transparent;
}

@media (max-width: 768px) {
  .navbar-header {
    float: none;
  }
  .navbar-right {
    float: none !important;
  }

  .navbar-toggle {
    display: block;
  }

  .navbar-collapse {
    border-top: 1px solid transparent;
  }

  .navbar-fixed-top {
    top: 0;
    border-width: 0 0 px;
  }

  .navbar-collapse.collapse {
    display: none !important;
  }

  .navbar-nav {
    float: none !important;
  }

  .navbar-nav > li {
    float: none;
  }

  .navbar-nav > li > a {
    padding-top: 10px;

    padding-bottom: 10px;

    line-height: normal;
  }

  .collapse.in {
    display: block !important;
  }
}
</style>
