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
    
        var widgetStyle = ".atvwebplayersdk-overlays-container .atvwebplayersdk-bottompanel-container,.cascadesContainer .webPlayer .overlaysContainer .bottomPanel .infoBar{padding-left:200px}.cascadesContainer .webPlayer .topPanel .center .contentTitlePanel{margin-top:10px}.cascadesContainer .webPlayer .topPanel .center .contentTitlePanel .title{font-weight:700;font-size:20px}.cascadesContainer .webPlayer .overlaysContainer .hideUntilCssLoaded .xrayQuickView .collapsibleXrayHeader .xrayHeaderTitle,.cascadesContainer .webPlayer .topPanel .center .contentTitlePanel .subtitle{font-size:18px}.cascadesContainer .webPlayer .topPanel .right .topButtons{position:fixed;top:-25px;right:0}.cascadesContainer .webPlayer .overlaysContainer .hideUntilCssLoaded .xrayQuickView{position:fixed;top:10px;left:20px}.cascadesContainer .webPlayer .overlaysContainer .hideUntilCssLoaded .xrayQuickView .widgetGroupView .collapsibleXrayHeader{margin-top:0}.cascadesContainer .webPlayer .overlaysContainer .gradientOverlay{background:0 0}.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons{position:fixed;bottom:23px;left:52px;z-index:1}.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .fastSeekBack,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .fastSeekForward,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .pausedIcon,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .playIcon{width:20px;height:20px;margin:0 5px}.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .fastSeekBack .svgBackground,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .fastSeekForward .svgBackground,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .pausedIcon .svgBackground,.cascadesContainer .webPlayer .overlaysContainer .pausedOverlay .buttons .playIcon .svgBackground{max-width:none;width:45px;height:45px;top:-12px;left:-5px}.atvwebplayersdk-overlays-container>div:first-child{background:0 0}.atvwebplayersdk-overlays-container>div:nth-child(4)>div:first-child>div:first-child{margin-top:10px}.atvwebplayersdk-overlays-container>div:nth-child(4)>div:first-child>div:first-child h1{font-weight:700;font-size:20px}.atvwebplayersdk-overlays-container>div:nth-child(4)>div:first-child>div:first-child h2{font-size:18px}.atvwebplayersdk-overlays-container>div:nth-child(4)>div:nth-child(2){position:fixed;bottom:49px;left:10px}.atvwebplayersdk-overlays-container>div:nth-child(4)>div:nth-child(2) .atvwebplayersdk-fastseekback-button,.atvwebplayersdk-overlays-container>div:nth-child(4)>div:nth-child(2) .atvwebplayersdk-fastseekforward-button,.atvwebplayersdk-overlays-container>div:nth-child(4)>div:nth-child(2) .atvwebplayersdk-playpause-button{border:10px;width:35px;height:35px;margin:0 13px}.atvwebplayersdk-overlays-container>div:nth-child(4)>div:nth-child(2) .atvwebplayersdk-fastseekback-button+div>div:first-child>div:first-child,.atvwebplayersdk-overlays-container>div:nth-child(4)>div:nth-child(2) .atvwebplayersdk-fastseekforward-button+div>div:first-child>div:first-child,.atvwebplayersdk-overlays-container>div:nth-child(4)>div:nth-child(2) .atvwebplayersdk-playpause-button+div>div:first-child>div:first-child{position:absolute;top:1px;left:12px;font-size:12px;line-height:35px;width:35px;text-align:center}.atvwebplayersdk-overlays-container>div:nth-child(5)>div:first-child>div:nth-child(2)>div:nth-child(1){position:fixed;top:-45px;left:10px}.atvwebplayersdk-overlays-container>div:nth-child(5)>div:first-child>div:nth-child(2)>div:nth-child(1) .xrayHeaderTitle{font-size:14px}.atvwebplayersdk-overlays-container>div:nth-child(5)>div:first-child>div:nth-child(2)>div:nth-child(1) .xrayHeaderViewAll{font-size:12px}.atvwebplayersdk-overlays-container>div:nth-child(5)>div:first-child>div:nth-child(2)>div:nth-child(2){position:fixed;top:-25px;right:10px}";
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