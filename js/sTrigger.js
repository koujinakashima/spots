jQuery(function () {
  /* ロードマップピン止め */
gsap.to('.roadmap_body', {
  ease: 'none',
scrollTrigger: {
  trigger: '.roadmap_body',
  start: 'top top', 
  /* end: 'bottom top',  */
  end: '+=4000', 
  pin: true, 
  scrub: true,
  /* markers: true */
}
});
}); 
 
 /* スクロールトリガーパララックス */
  //パララックス1 トップのロードマップイントロ
  jQuery(function () {
    ScrollTrigger.matchMedia({
      "(min-width: 481px)": function() {
    gsap.to(".top_roadMap_explanation",{
        yPercent: -100,
        /* ease: "none", */
        scrollTrigger: {
          trigger: ".nituite_img_box",
          start: "top top",
         /*  end: "bottom center", */
          scrub: 1,
          /* markers: true, */
          repeat: -1,
        },
      });
    },
    "(max-width: 480px)": function() {
      gsap.to(".top_roadMap_explanation",{
        yPercent: 0,
        /* ease: "none", */
        scrollTrigger: {
          trigger: ".nituite_img_box",
          start: "top top",
         /*  end: "bottom center", */
          scrub: false,
          /* markers: true, */
          /* repeat: -1, */
        },
      });
    }
    });
  });
  
  jQuery(function () {
    /*トップのロードマップイントロ フェードアウト */
    ScrollTrigger.matchMedia({
      "(min-width: 481px)": function() {
    gsap.to('.top_roadMap_explanation', {
      opacity: '0' ,
      scrollTrigger: {
        trigger: '.top_roadmap_intro',
        start: 'top top', 
        end: 'bottom top', 
        scrub: true,
       /*  markers: true */
      },
    });
  },
  "(max-width: 480px)": function() {
    gsap.to('.top_roadMap_explanation', {
      opacity: '1' ,
      scrollTrigger: {
        trigger: '.top_roadmap_intro',
        start: 'top top', 
        end: 'bottom top', 
        scrub: false,
       /*  markers: true */
      },
    });
  }
  });
});
    /* ----------ロードマップスクロールアニメーションPC---------- */

  jQuery(function () {
  /* メーター */
  gsap.to('.parameter', {
    width: '100%' ,
    ease: 'none',
    scrollTrigger: {
      trigger: '.roadmap_body',
      start: 'top top', 
      end: '+=3700', 
      scrub: 1,
      /* markers: true */
    }
  });
  });

    jQuery(function () {
    /* ロードマップアイコン移動  */
    gsap.to('.animation_contet_titleArea_inner', {
      top:' 27%',
      left: '15%',
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: '.common_animation_inner',
        start: 'top center', 
        end:'bottom top', 
        /* markers: true, */
      }
    });
    
    /* アイコンサイズ小さくする */
    gsap.to('.common_animation_contet_icon', {
      transform:'scale(1)' ,
      marginBottom: '0px',
      scrollTrigger: {
        toggleActions: "play none none reverse",
        trigger: '.common_animation_inner',
        start: 'top center', 
        /* markers: true, */
      }
    });
    });
    
    //-----左１つめアニメーション-----
    /* フェードイン */
    jQuery(function () {
      const tx = gsap.timeline({
        scrollTrigger: {
          trigger: '.common_animation',
           scrub: true,
          /*  start: 'top top', */
            /* end: 'bottom top',  */
        }
      })
      .set('.animation_leftBox1', { autoAlpha:0 })
      .to('.animation_leftBox1', {
        autoAlpha: 1 ,
        /* fontSize: '50px', */
         scrollTrigger: {
          trigger: '.common_animation',
          start: 'top top',
          end: '+=100', 
          scrub: true,
          /* markers: true,  */
        },
      })
       .fromTo('.animation_leftBox1', {
         },
          {
         autoAlpha:0 ,
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=800 top',
          end: '+=300', 
          scrub: true,
          /* markers: true, */
         }
        });
      });
    /* 文字拡大 */
      /* jQuery(function () {
        gsap.to('.animation_task1', {
          transform: 'scale(3)' ,
          scrollTrigger: {
            trigger: '.common_animation',
            start: 'top top', 
            end: '+=1000', 
            scrub: true,
            markers: true
          }
        });
        }); */
        jQuery(function () {
     /*  gsap.to('.road_passing-bar1', {
      opacity:1 ,
      scrollTrigger: {
        trigger: '.common_animation_inner',
        start: 'top top',
          end: '+=100', 
          scrub: true, 
        markers: true,
      }
    }); */
          /* アニメーション発動クラス付与 */
         ScrollTrigger.create({
        trigger: '.common_animation', 
        start: 'top top', 
        end: '+=7000', 
        toggleClass: {targets: ".road_passing-bar1", className:"road_passing-barTrigger" }, 
        /* once: true, */
         /* markers: true, */
      });
       ScrollTrigger.create({
        trigger: '.common_animation', 
        start: 'top top', 
         end: '+=7000', 
        toggleClass: {targets: ".road_passing-box1", className:"road_passing-boxTrigger" }, 
        /* once: true, */
         /* markers: true, */
      });
      });
    //-----左2つめアニメーション-----
    /* フェードイン */
    jQuery(function () {
      const tx = gsap.timeline({
        scrollTrigger: {
          trigger: '.common_animation',
           scrub: true,
          /*  start: 'top top', */
            /* end: 'bottom top',  */
        }
      })
      .set('.animation_leftBox2', { autoAlpha:0 })
      .to('.animation_leftBox2', {
        autoAlpha: 1 ,
        /* fontSize: '50px', */
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=1000 top',
          end: '+=300', 
          scrub: true,
          /* markers: true,  */
        },
      })
       .fromTo('.animation_leftBox2', {
         },
          {
         autoAlpha:0 ,
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=1800 top',
          end: '+=300', 
          scrub: true,
          /* markers: true, */
         }
        });
      });
      /* アニメーション発動クラス付与 */
      jQuery(function () {
      ScrollTrigger.create({
        trigger: '.common_animation', 
        start: '+=1000 top', 
        end: '+=7000', 
        toggleClass: {targets: ".road_passing-bar2", className:"road_passing-barTrigger" }, 
        /* once: true, */
         /* markers: true, */
      });
       ScrollTrigger.create({
        trigger: '.common_animation', 
        start: '+=1000 top', 
         end: '+=7000', 
        toggleClass: {targets: ".road_passing-box2", className:"road_passing-boxTrigger" }, 
        /* once: true, */
         /* markers: true, */
      });
    });
    
        //-----左3つめアニメーション-----
    /* フェードイン */
    jQuery(function () {
      const tx = gsap.timeline({
        scrollTrigger: {
          trigger: '.common_animation',
           scrub: true,
          /*  start: 'top top', */
            /* end: 'bottom top',  */
        }
      })
      .set('.animation_leftBox3', { autoAlpha:0 })
      .to('.animation_leftBox3', {
        autoAlpha: 1 ,
        /* fontSize: '50px', */
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2000 top',
          end: '+=300', 
          scrub: true,
          /* markers: true,  */
        },
      })
       .fromTo('.animation_leftBox3', {
         },
          {
         autoAlpha:0 ,
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2800 top',
          end: '+=300', 
          scrub: true,
          /* markers: true, */
         }
        });
      });
    /* アニメーション発動クラス付与 */
    jQuery(function () {
      ScrollTrigger.create({
        trigger: '.common_animation', 
        start: '+=2000 top', 
        end: '+=7000', 
        toggleClass: {targets: ".road_passing-bar3", className:"road_passing-barTrigger" }, 
        /* once: true, */
         /* markers: true, */
      });
       ScrollTrigger.create({
        trigger: '.common_animation', 
        start: '+=2000 top', 
         end: '+=7000', 
        toggleClass: {targets: ".road_passing-box3", className:"road_passing-boxTrigger" }, 
        /* once: true, */
         /* markers: true, */
      });
    });
    //-----4つめアニメーション-----
    /* フェードイン */
    jQuery(function () {
      const tx = gsap.timeline({
        scrollTrigger: {
          trigger: '.common_animation',
           scrub: true,
          /*  start: 'top top', */
            /* end: 'bottom top',  */
        }
      })
      .set('.animation_leftBox4', { autoAlpha:0 })
      .to('.animation_leftBox4', {
        autoAlpha: 1 ,
        /* fontSize: '50px', */
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=3000 top',
          end: '+=300', 
          scrub: true,
         /*  markers: true,  */
        },
      })
       /* .fromTo('.animation_leftBox4', {
         },
          {
         autoAlpha:0 ,
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=11300 top',
          end: '+=700', 
          scrub: true,
          markers: true,
         }
        }); */
      });
    /* アニメーション発動クラス付与 */
    jQuery(function () {
      ScrollTrigger.create({
        trigger: '.common_animation', 
        start: '+=3000 top', 
        end: '+=7000', 
        toggleClass: {targets: ".road_passing-bar4", className:"road_passing-barTrigger" }, 
        /* once: true, */
         /* markers: true, */
      });
       ScrollTrigger.create({
        trigger: '.common_animation', 
        start: '+=3000 top', 
         end: '+=7000', 
        toggleClass: {targets: ".road_passing-box4", className:"road_passing-boxTrigger" }, 
        /* once: true, */
         /* markers: true, */
      });
    });
    
    //-----右１つめアニメーション-----
    /* フェードイン */
    jQuery(function () {
      const tx = gsap.timeline({
        scrollTrigger: {
          trigger: '.common_animation',
           scrub: true,
          /*  start: 'top top', */
            /* end: 'bottom top',  */
        }
      })
      .set('.animation_rightBox1', { autoAlpha:0 })
      .to('.animation_rightBox1', {
        autoAlpha: 1 ,
        /* fontSize: '50px', */
         scrollTrigger: {
          trigger: '.common_animation',
          start: 'top top',
          end: '+=250', 
          scrub: true,
          /* markers: true,  */
        },
      })
       .fromTo('.animation_rightBox1', {
         },
          {
         autoAlpha:0 ,
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=800 top',
          end: '+=300', 
          scrub: true,
          /* markers: true, */
         }
        });
      });
    /* 画像縮小 */
      jQuery(function () {
        gsap.to('.animation_icon1-1', {
          transform: 'scale(1)' ,
           autoAlpha: 1 ,
          scrollTrigger: {
            trigger: '.common_animation',
            start: 'top top', 
            end: '+=200', 
            scrub: 0.3,
            /* markers: true */
          }
        });
        });
       jQuery(function () {
        gsap.to('.animation_icon1-2', {
          transform: 'scale(1)' ,
           autoAlpha: 1 ,
          scrollTrigger: {
            trigger: '.common_animation',
            start: 'top -=200', 
            end: '+=200', 
            scrub: 0.3,
            /* markers: true */
          }
        });
        });
        //-----右2つめアニメーション-----
    /* フェードイン */
    jQuery(function () {
      const tx = gsap.timeline({
        scrollTrigger: {
          trigger: '.common_animation',
           scrub: true,
          /*  start: 'top top', */
            /* end: 'bottom top',  */
        }
      })
      .set('.animation_rightBox2', { autoAlpha:0 })
      .to('.animation_rightBox2', {
        autoAlpha: 1 ,
        /* fontSize: '50px', */
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=1000 top',
          end: '+=300', 
          scrub: true,
          /* markers: true,  */
        },
      })
       .fromTo('.animation_rightBox2', {
         },
          {
         autoAlpha:0 ,
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=1800 top',
          end: '+=300', 
          scrub: true,
          /* markers: true, */
         }
        });
      });
    /* 画像縮小 */
      jQuery(function () {
        gsap.to('.animation_icon2', {
          transform: 'scale(1)' ,
          autoAlpha: 1 ,
          scrollTrigger: {
            trigger: '.common_animation',
            start: '+=1000 top', 
            end: '+=200', 
            scrub: 0.3,
            /* markers: true */
          }
        });
        });
    //-----右3つめアニメーション-----
    /* フェードイン */
    jQuery(function () {
      const tx = gsap.timeline({
        scrollTrigger: {
          trigger: '.common_animation',
           scrub: true,
          /*  start: 'top top', */
            /* end: 'bottom top',  */
        }
      })
      .set('.animation_rightBox3', { autoAlpha:0 })
      .to('.animation_rightBox3', {
        autoAlpha: 1 ,
        /* fontSize: '50px', */
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2000 top',
          end: '+=300', 
          scrub: true,
          /* markers: true,  */
        },
      })
       .fromTo('.animation_rightBox3', {
         },
          {
         autoAlpha:0 ,
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2800 top',
          end: '+=300', 
          scrub: true,
          /* markers: true, */
         }
        });
      });
    /* 画像縮小1 */
    jQuery(function () {
      gsap.to('.animation_icon3-1', {
        transform: 'scale(1)' ,
         autoAlpha: 1 ,
        scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2000 top', 
          end: '+=200', 
          scrub: 0.3,
          /* markers: true */
        }
      });
      });
      /* 画像縮小2 */
     jQuery(function () {
      gsap.to('.animation_icon3-2', {
        transform: 'scale(1)' ,
         autoAlpha: 1 ,
        scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2100 top', 
          end: '+=200', 
          scrub: 0.3,
          /* markers: true */
        }
      });
      });
      /* 画像縮小3 */
    jQuery(function () {
      gsap.to('.animation_icon3-3', {
        transform: 'scale(1)' ,
         autoAlpha: 1 ,
        scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2200 top', 
          end: '+=250', 
          scrub: 0.3,
          /* markers: true */
        }
      });
      });
      /* 画像縮小4 */
     jQuery(function () {
      gsap.to('.animation_icon3-4', {
        transform: 'scale(1)' ,
         autoAlpha: 1 ,
        scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2300 top', 
          end: '+=250', 
          scrub: 0.3,
          /* markers: true */
        }
      });
      });
      /* 画像縮小5 */
    jQuery(function () {
      gsap.to('.animation_icon3-5', {
        transform: 'scale(1)' ,
         autoAlpha: 1 ,
        scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2400 top', 
          end: '+=250', 
          scrub: 0.3,
          /* markers: true */
        }
      });
      });
      /* 画像縮小6 */
     jQuery(function () {
      gsap.to('.animation_icon3-6', {
        transform: 'scale(1)' ,
         autoAlpha: 1 ,
        scrollTrigger: {
          trigger: '.common_animation',
          start: '+=2500 top', 
          end: '+=250', 
          scrub: 0.3,
          /* markers: true */
        }
      });
      });
    //-----右4つめアニメーション-----
    /* フェードイン */
    jQuery(function () {
      const tx = gsap.timeline({
        scrollTrigger: {
          trigger: '.common_animation',
           scrub: true,
          /*  start: 'top top', */
            /* end: 'bottom top',  */
        }
      })
      .set('.animation_rightBox4', { autoAlpha:0 })
      .to('.animation_rightBox4', {
        autoAlpha: 1 ,
        /* fontSize: '50px', */
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=3000 top',
          end: '+=300', 
          scrub: true,
         /*  markers: true,  */
        },
      })
       /* .fromTo('.animation_leftBox4', {
         },
          {
         autoAlpha:0 ,
         scrollTrigger: {
          trigger: '.common_animation',
          start: '+=11300 top',
          end: '+=700', 
          scrub: true,
          markers: true,
         }
        }); */
      });
        /* 画像縮小 */
      jQuery(function () {
        gsap.to('.animation_icon4-1', {
          transform: 'scale(1)' ,
           autoAlpha: 1 ,
          scrollTrigger: {
            trigger: '.common_animation',
            start: '+=3000 top', 
            end: '+=200', 
            scrub: 0.3,
            /* markers: true */
          }
        });
        });
       jQuery(function () {
        gsap.to('.animation_icon4-2', {
          transform: 'scale(1)' ,
           autoAlpha: 1 ,
          scrollTrigger: {
            trigger: '.common_animation',
            start: '+=3200 top', 
            end: '+=200', 
            scrub: 0.3,
            /* markers: true */
          }
        });
        });
    
    /* ----------ロードマップスクロールアニメーションPC end---------- */
    
    /* ロードマップ2020 パララックス２*/
    //クラス追加
    jQuery(function () {
      //右のエリア全体パララックス
      gsap.to(".roadoMap_2020_right",{
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".roadoMap_2020_right",
          start: "top center",
         /*  end: "bottom center", */
          scrub: 1,
          /* markers: true, */
          repeat: -1,
        },
      }
    );
      //画像のパララックス
    gsap.to(".roadoMap_2020_img",{
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: ".roadoMap_2020_right",
          start: "top center",
         /*  end: "bottom center", */
          scrub: 1,
          /* markers: true, */
          repeat: -1,
        },
      });
    });
     /* ロードマップ2020の画像スライドインクラス付与 メディアクエリで切り替え*/
    jQuery(function () {
    ScrollTrigger.matchMedia({
       // 481px以上
      "(min-width: 481px)": function() {
     ScrollTrigger.create({
        trigger: '.roadoMap_2020_img', //アニメーションが始まるトリガーとなる要素
        start: 'top 60%',
        toggleClass: {targets: ".imgBoxBg", className:"opacity_animate" ,className:"animate"}, //クラスをつけたり、外したりできる
        once: true,
         /* markers: true, */
      });
      },
      // 480px以下
      "(max-width: 480px)": function() {
       ScrollTrigger.create({
        trigger: '.roadoMap_2020_img', //アニメーションが始まるトリガーとなる要素
        start: 'top 90%',
        toggleClass: {targets: ".imgBoxBg", className:"opacity_animate" ,className:"animate"}, //クラスをつけたり、外したりできる
        once: true,
         /* markers: true, */
      });
      },
    });
    }); 
    /* ----------イベント報告 のグラデーション箇所のアニメーション---------- */
    jQuery(function () {
      gsap.to('.top_event_bottomBg', {
        paddingTop: '600px' ,
        scrollTrigger: {
          trigger: '.top_event_po',
          start: 'top top', 
          end: '+=10000', 
          scrub: 1,
          /* markers: true, */
        }
      });
      });
