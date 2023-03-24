
(function () {
  $('section').waypoint({
    handler: function(direction) {
      if (direction === 'down') {
        setCurrentSection(this.element.id);
      } else {
        var previous = $(this.element).prev();
        if (previous[0] != null) {
          setCurrentSection(previous[0].id);
        } else {
          setCurrentSection(null);
        }
      }
    }
  });

  var currentSection;

  function setCurrentSection(section) {
    if (currentSection != undefined) {
      currentSection.removeClass('currentSection');
    }

    if (section != null) {
      currentSection = $('a[href=#' + section + ']');
      currentSection.addClass('currentSection');
    } else {
      currentSection = null;
    }
  }

  // fix link navigation to section selection
  $('.headingsBlock a').click(function () {
    setTimeout(function () {
      window.scrollBy(0,1);
    }, 1);
  });

  // setup horizontal banner images scroll
  // console.log($('#fridgeTracker').offset().top);
  // $('#fridgeHeaderImg').css({'left': $('#fridgeTracker').offset().top});

  // $(document).scroll(function (evt) {
  //   $('#headerImages').css({'left' : $(document).scrollTop()});
  // });

  var controller = new ScrollMagic.Controller();
  // new ScrollMagic.Scene({ triggerElement: '#splashTrigger', duration: 200 })
  //                .setTween('#content', { backgroundColor: '#fff' })
  //                .addTo(controller);

  ['fridge', 'social', 'inventory'].forEach(function (elm) {
    new ScrollMagic.Scene({ triggerElement: '#' + elm + 'Trigger', duration: 300 })
                   .setTween('#' + elm + 'Banner', { left: 0 })
                   .addTo(controller);

    // var elementSel = '#' + elm + 'Banner';
    // var tween = TweenMax.fromTo(elementSel, 1000, {scaleY: 0}, {scaleY: 1});
    // var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById(elementSel), duration: 300 })
    //               .setTween(tween)
    //               .addTo(controller);
    // timeline.add(tween);
    // scene.addTween(timeline);
  });
})();