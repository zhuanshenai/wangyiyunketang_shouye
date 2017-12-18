(function(window){var svgSprite='<svg><symbol id="icon-shouji" viewBox="0 0 1024 1024"><path d="M759.885105 55.775304l-38.021476 0L302.03813 55.775304l-68.423102 0 0 68.325132 0 836.276525 9.761718 0 58.660361 0 419.824476 0 56.243213 0 12.178866 0 0-904.602679L759.885105 55.774281zM510.741793 900.510478c-24.952297 0-45.179796-20.227694-45.179796-45.178969 0-24.949228 20.227499-45.177945 45.179796-45.177945s45.181843 20.227694 45.181843 45.177945C555.923637 880.283808 535.695114 900.510478 510.741793 900.510478zM302.03813 751.773945 302.03813 124.099413 721.862606 124.099413l0 627.674533L302.03813 751.773945z"  ></path></symbol><symbol id="icon-liuyan" viewBox="0 0 1094 1024"><path d="M273.528782 354.658615c-37.769163 0-68.382195 31.753774-68.382196 70.937957 0 39.177949 30.613032 70.931723 68.382196 70.931723 37.76293 0 68.375962-31.753774 68.375961-70.931723 0-39.184182-30.613032-70.937957-68.375961-70.937957m273.516314 0c-37.76293 0-68.382195 31.753774-68.382195 70.937957 0 39.177949 30.619266 70.931723 68.382195 70.931723 37.769163 0 68.382195-31.753774 68.382195-70.931723 0.006234-39.184182-30.613032-70.937957-68.382195-70.937957m273.528781 0c-37.769163 0-68.382195 31.753774-68.382195 70.937957 0 39.177949 30.613032 70.931723 68.382195 70.931723 37.756696 0 68.382195-31.753774 68.382196-70.931723 0-39.184182-30.625499-70.937957-68.382196-70.937957M957.332035 0H136.758157C61.238531 0 0.006234 63.520016 0.006234 141.86968v531.991039c0 78.349664 62.603682 150.565501 139.862472 150.565501h208.419207c36.322977 38.697964 186.676536 194.362521 186.676536 194.362521a16.631148 16.631148 0 0 0 24.173761 0s110.084738-124.808415 181.801889-194.362521h213.293854c77.265024 0 139.868706-72.222071 139.868706-150.565501V141.86968C1094.096425 63.520016 1032.857894 0 957.332035 0m68.388429 673.860719c0 39.165482-32.857115 80.269602-71.486511 80.269601h-209.759423c-25.401773 0-48.241551 26.124866-48.241551 26.124867l-147.280413 152.753482-147.249245-152.753482s-28.051037-26.124866-52.087659-26.124867H139.868706c-38.629395 0-71.48651-41.10412-71.486511-80.269601V141.86968c0-39.177949 30.619266-70.937957 68.382196-70.937957h820.573877c37.76293 0 68.382195 31.760008 68.382196 70.937957v531.991039z"  ></path></symbol><symbol id="icon-dingbu" viewBox="0 0 1024 1024"><path d="M0.00512 511.98464c0 282.320803 229.68773 512.01536 511.99488 512.01536s511.99488-229.69797 511.99488-512.01536C1023.99488 229.68773 794.30715 0 512 0S0.00512 229.68773 0.00512 511.98464z m959.9904 0c0 247.034116-200.975057 447.99552-447.99552 447.99552S64.00448 759.018756 64.00448 511.98464c0-247.013637 200.975057-447.99552 447.99552-447.99552 247.023876 0 447.99552 200.981884 447.99552 447.99552z" fill="" ></path><path d="M297.378573 425.36876a31.98944 31.98944 0 0 0 0 45.256934c12.502915 12.492675 32.754019 12.492675 45.243281 0l137.378466-137.378466v434.741679a31.982614 31.982614 0 0 0 31.99968 31.99968 31.982614 31.982614 0 0 0 31.99968-31.99968V333.247228l137.378466 137.378466c12.492675 12.492675 32.750606 12.492675 45.243281 0a31.965547 31.965547 0 0 0 9.37292-22.630174c0-8.191918-3.133409-16.37701-9.37292-22.62676L534.630174 233.384333a31.95872 31.95872 0 0 0-45.243281 0l-192.004907 191.984427z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)