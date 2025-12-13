$(function() {
  // Cache selectors
  var $tabs = $('.tab');
  var $boxes = $('.content-box');
  var $layout = $('.layout');
  var $tabsPanel = $('.tabs-panel');
  var $contentPanel = $('.content-panel');

  // colors on each tab
  var colors = {
    reality: {
      layout: '#241e1d',
      tabs: '#3e3432ff',
      content: '#241e1d',
      text: '#76706a',
      border: '#76706a' 
    },
    city: {
      layout: '#4a4f4e',
      tabs: '#2f3736ff',
      content: '#4a4f4e',
      text: '#909189',
      border: '#909189'
    },
    hotel: {
      layout: '#392b2a',
      tabs: '#2d2322ff',
      content: '#392b2a',
      text: '#915d3a',
      border: '#915d3a'
    },
    snow: {
      layout: '#6f7a82',
      tabs: '#454c51ff',
      content: '#6f7a82',
      text: '#c4d2d2ff',
      border: '#aeb7b7'
    },
    limbo: {
      layout: '#2a2727',
      tabs: '#201c1cff',
      content: '#2a2727',
      text: '#82a0ab',
      border: '#82a0ab'
    }
  };

  // color transitions
  $layout.css('transition', 'background-color 0.5s ease, color 0.5s ease');
  $tabsPanel.css('transition', 'background-color 0.5s ease');
  $contentPanel.css('transition', 'background-color 0.5s ease');
  $tabs.css('transition', 'color 0.5s ease, border-color 0.5s ease');
  $boxes.css('transition', 'color 0.5s ease');

  // Function to activate a tab
  function activateTab(target) {
    $tabs.removeClass('active');
    $boxes.removeClass('active');

    // Add active class to clicked tab and corresponding content
    var $activeTab = $tabs.filter(`[data-target="${target}"]`);
    $activeTab.addClass('active');
    $('#' + target).addClass('active');

    // colors
    var c = colors[target];
    $layout.css('background-color', c.layout).css('color', c.text);
    $tabsPanel.css('background-color', c.tabs);
    $contentPanel.css('background-color', c.content);
    $tabs.css('color', c.text);
    $boxes.css('color', c.text);

    // Change active tab border
    $tabs.css({
      'border-left-color': 'transparent',
      'border-bottom-color': 'transparent'
    });

    $activeTab.css('border-left-color', c.border);
    if (window.innerWidth <= 500) {
      $activeTab.css('border-bottom-color', c.border);
    }
  }

  // Click 
  $tabs.on('click', function() {
    var target = $(this).data('target');
    activateTab(target);
  });

//   colors 
  var initialTab = $tabs.filter('.active').data('target');
  if (initialTab) activateTab(initialTab);

  $(window).on('resize', function() {
    var activeTarget = $tabs.filter('.active').data('target');
    if (activeTarget) activateTab(activeTarget);
  });
});


$(document).ready(function () {
  function logSizes() {
    console.clear();

    console.log("Layout:", $(".layout").outerWidth(), "x", $(".layout").outerHeight());
    console.log("Tabs Panel:", $(".tabs-panel").outerWidth(), "x", $(".tabs-panel").outerHeight());
    console.log("Content Panel:", $(".content-panel").outerWidth(), "x", $(".content-panel").outerHeight());

    $(".content-box").each(function () {
      console.log(
        "Content Box #" + this.id + ":",
        $(this).outerWidth(),
        "x",
        $(this).outerHeight()
      );
    });
  }

  logSizes();

  $(window).on("resize", logSizes);
});
