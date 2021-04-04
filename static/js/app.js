/* eslint-disable no-undef */
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('nav.transparent').addClass('sticky')
    $('nav.transparent').removeClass('normal')
  } else {
    $('nav.transparent').removeClass('sticky')
    $('nav.transparent').addClass('normal')
  }
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('nav.parallax').addClass('sticky')
    $('nav.parallax').removeClass('normal')
  } else {
    $('nav.parallax').removeClass('sticky')
    $('nav.parallax').addClass('normal')
  }
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('nav.fill-white').addClass('sticky')
    $('nav.fill-white').removeClass('normal')
  } else {
    $('nav.fill-white').removeClass('sticky')
    $('nav.fill-white').addClass('normal')
  }
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('nav.fill-black').addClass('sticky')
    $('nav.fill-black').removeClass('normal')
  } else {
    $('nav.fill-black').removeClass('sticky')
    $('nav.fill-black').addClass('normal')
  }
})

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('.navigation-26.fill-white-overlay').addClass('sticky')
    $('.navigation-26.fill-white-overlay').removeClass('normal')
  } else {
    $('.navigation-26.fill-white-overlay').removeClass('sticky')
    $('.navigation-26.fill-white-overlay').addClass('normal')
  }
})

window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v10.0',
  })
}
$(document).ready(function () {
  ;(function (d, s, id) {
    let js
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) return
    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
    fjs.parentNode.insertBefore(js, fjs)
  })(document, 'script', 'facebook-jssdk')
})
