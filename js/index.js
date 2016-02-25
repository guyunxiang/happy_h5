/**
 * Created by guyunxiang on 15/12/28.
 */
$(document).ready(function () {

  var audio = document.getElementById('audio');
  var time = null, musicplayer = null, musicRotate = 0, nextInter = null;

  var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    speed: 600,
    //lazyLoadingInPrevNext: true,
    //lazyLoadingOnTransitionStart: true,

    nextButton: '.next-page',

    onInit: function (swiper) {
      // 设置头像动画
      initSlide1();
      nextAnimation();
    },

    onSlideChangeStart: function (swiper) {
      if (swiper.activeIndex == 7) {
        $('.next-page').hide();
        clearInterval(nextInter);
      } else {
        $('.next-page').show();
        nextAnimation();
      }
    },

    onSlideChangeEnd: function (swiper) {
      (swiper.activeIndex > 0) ? clearInterval(time) : initSlide1();
    }
  });

  // 初始化首页
  function initSlide1() {
    var i = 0, k = 1;
    time = setInterval(function () {
      (i >= -5 && i < 10) ? headerAnimation(i) : k = -k;
      i = i + k;
    }, 50);
    // 设置音乐动画
    setMusicAnimation();
  }

  // 第二页面图片样式
  $('img[data-sign="1"]').css('rotate', -10);

  $('img[data-sign="2"]').css('rotate', 15);

  $('img[data-sign="3"]').css('rotate', -5);


  // 第五页图片样式
  $('#slide-5-1').css('rotate', -10);

  $('#slide-5-2').css('rotate', 10);

  $('#slide-5-3').css('rotate', -15);

  // 点击切换音乐播放暂停
  $('.music').on('click', function () {
    audioPlayOrPause();
  });

  // 切换音乐播放
  function audioPlayOrPause() {
    // 如果音乐出于暂停播放
    if (audio.paused) {
      // 设置音乐播放按钮动画
      setMusicAnimation();
      // 播放音乐
      audio.play();
    } else {
      // 停止音乐按钮动画
      clearInterval(musicplayer);
      // 切换图片
      $('.music').attr('src', 'images/music_pause.png');
      // 暂停播放
      audio.pause();
    }
  }

  // 音乐图片转动定时器
  function setMusicAnimation() {
    // 切换图片
    $('.music').attr('src', 'images/music_play.png');
    clearInterval(musicplayer);
    musicplayer = setInterval(function () {
      (musicRotate < 360) ? musicAnimation(musicRotate) : musicRotate = 0;
      musicRotate = musicRotate + 2;
    }, 50);
  }

  // 设置音乐转动方法
  function musicAnimation(r) {
    $('.music').css('rotate', r);
  }

  // 头像转动动画
  function headerAnimation(r) {
    $('#header-cc').css('rotate', r);
    $('#header-gg').css('rotate', -r);
  }

  // 下一页按钮动画
  function nextAnimation() {
    var $img = $('.next-page img');
    var i = 0, j = 10;
    clearInterval(nextInter);
    nextInter = setInterval(function () {
      if (j < 35) {
        $img.css({
          'opacity': i,
          'margin-bottom': j + 'px'
        });
      } else {
        i = 0;
        j = 10;
      }
      i = i + 0.1;
      j = j + 1;
    }, 60);
  }

});