$(document).ready(function() {
  var savedHash = location.hash;
  var hashParts = savedHash.split('_');

  var lock = false;
  function subTabsSync(a,b,c) {
      if (lock)
        return;

      var currentTab = c.attr('id');
      if (currentTab.indexOf('burial') > -1)
        var nextTab = currentTab.replace('burial', 'cremation');
      else if (currentTab.indexOf('cremation') > -1)
        var nextTab = currentTab.replace('cremation', 'burial');
      var nextTabId = '#' +nextTab.split('_')[0] + '1';
      if (!lock) {
          lock = true;
           $(nextTabId).easytabs('select', nextTab);
           $('.prices-tabs_panel.panel-container > div:not(.active)').hide();
          setTimeout(function() { lock = false; }, 5);
      }
  }
  var config = {
    updateHash: false,
    tabActiveClass: 'is-active',
    tabs: '.headline_tabs .switch-list > li'
  };
  var subConfig = {
      tabActiveClass: 'is-active',
      tabs: '> .prices-tabs > ul > li',
      updateHash: false,
  };


  if (savedHash.length > 1)
    config.defaultTab = hashParts[0] + '-selector';
  $('#prices-types').easytabs(config);

  if (savedHash.indexOf('burial') > -1) {
      $('#burial1').easytabs(subConfig);
      subConfig.defaultTab = '#cremation_' + savedHash.split('_')[1] + '-selector';
      $('#cremation1').easytabs(subConfig);
  } else if (savedHash.indexOf('cremation') > -1) {
      $('#cremation1').easytabs(subConfig);
      subConfig.defaultTab = '#burial_' + savedHash.split('_')[1] + '-selector';
      $('#burial1').easytabs(subConfig);
  } else $('#burial1, #cremation1').easytabs(subConfig);
  $('#burial1, #cremation1').bind('easytabs:before', subTabsSync);

  $('#costs-list').easytabs({
	  updateHash: false,
	  tabActiveClass: 'is-active',
	  tabs: '.headline_tabs .switch-list > li'
  });

  $('html, body').stop().animate({
    scrollTop: $('#prices-types').offset().top - 143
  }, 300, 'swing');
});
