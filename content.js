;(function(window, document, undefined) {
  'use strict';

  var StyleManager = (function(){
    return {
      testHost: function(){
        setTimeout(function(){
          StyleManager.injectStyle();
        },100);
      },
      injectStyle: function(config){
        var $head = document.querySelector('head');
        var $existing = $head.querySelector('style[data-type=inject]');
        if($existing){
          $existing.parentElement.removeChild($existing);
        }
    
        var $inject = document.createElement('style');
        $inject.setAttribute('type','text/css');
        $inject.setAttribute('data-type','inject');
    
        var widgetStyle = ".cascadesContainer .webPlayer .topPanel .center .contentTitlePanel{margin-top:10px}.cascadesContainer .webPlayer .topPanel .center .contentTitlePanel .title{font-weight:700;font-size:20px}.cascadesContainer .webPlayer .overlaysContainer .hideUntilCssLoaded .xrayQuickView .collapsibleXrayHeader .xrayHeaderTitle,.cascadesContainer .webPlayer .topPanel .center .contentTitlePanel .subtitle{font-size:18px}.cascadesContainer .webPlayer .topPanel .right .topButtons{position:fixed;top:-25px;right:0}.cascadesContainer .webPlayer .overlaysContainer .hideUntilCssLoaded .xrayQuickView{position:fixed;top:10px;left:20px}.cascadesContainer .webPlayer .overlaysContainer .hideUntilCssLoaded .xrayQuickView .widgetGroupView .collapsibleXrayHeader{margin-top:0}.cascadesContainer .webPlayer .overlaysContainer .gradientOverlay{background:0 0}.cascadesContainer .webPlayer .overlaysContainer .bottomPanel .infoBar{padding-left:200px}.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons{position:fixed;bottom:23px;left:52px;z-index:1}.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .fastSeekBack,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .fastSeekForward,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .pausedIcon,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .playIcon{width:20px;height:20px;margin:0 5px}.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .fastSeekBack .svgBackground,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .fastSeekForward .svgBackground,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .pausedIcon .svgBackground,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .playIcon .svgBackground{max-width:none;width:45px;height:45px;top:-12px;left:-5px}";
        $inject.innerHTML = widgetStyle;
        
        $head.appendChild($inject);
      },
    };
  })();

  StyleManager.testHost();

  var Deferred = function(){
    var def = this;
    this.promise = new Promise(function(resolve,reject){
      def.resolve = resolve;
      def.reject = reject;
    });

    this.then = this.promise.then.bind(this.promise);
    this.catch = this.promise.catch.bind(this.promise);
  };
})(window, document);