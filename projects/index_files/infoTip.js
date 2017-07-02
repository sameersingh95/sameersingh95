"use strict";define("infoTip/utils/infoTipUtils",["zepto"],function(t){function i(t){return t.offset()}function e(t,i){return{top:t.top-i.height,left:t.left-i.width/2,right:"auto"}}function n(i,e,n,o){var s,r=t(window.document.body).scrollTop();return i-r<0?((s=e.top+o.height)>n+r+o.height&&(s=e.top<0?e.top:r),s>0?s:0):i}function o(t,i,e,n){return i>n?"auto":t<0?e.left:t}function s(t,i,e){return t>e?i.left+i.width:t}function r(t,i,e){var r=window.innerWidth,u=window.innerHeight;return{top:n(t.top,i,u,e),left:o(t.left,t.right,i),right:s(t.right,i,r)}}function u(t,i){var e,n=0,o=0,s=i.offsetParent();return s&&(n=(e=s.offset()).top,o=e.left),{top:t.top-n,left:t.left-o,right:"auto"===t.right?t.right:t.right+o}}function h(n,o){var s,h,c;return n=t(n),o=t(o),c={width:o.width(),height:o.height()},s=i(n),h=e(s,c),h=r(h,s,c),h=u(h,o)}return{getPosition:h}}),define("infoTip",["lodash","utils","core","santaProps","infoTip/utils/infoTipUtils","reactDOM"],function(t,i,e,n,o,s){function r(){c.call(this)}function u(){this.setTimeoutNamed("closeTipByTimeout",r.bind(this),T)}function h(t,i){a.call(this,s.findDOMNode(i.source))}function c(){this.clearTimeoutNamed("openTip"),this.setState({$hidden:"hidden",runTimer:!0})}function a(t){this.setState({$hidden:"",isShown:!0,caller:t}),u.call(this)}function f(){var i,e;this.state.isShown&&(i=s.findDOMNode(this),e=o.getPosition(this.state.caller,i),d(i,t.pick(e,["top","left","right"])))}function p(i){return i&&t.isEmpty(i.description)}var l=e.compMixins,d=i.style.assignStyle,T=3e3;return{displayName:"InfoTip",mixins:[l.skinBasedComp,l.timeoutsMixin],propTypes:{compData:n.Types.Component.compData.isRequired},statics:{useSantaTypes:!0},onMouseEnter:function(){this._isMouseInside=!0},onMouseLeave:function(){this._isMouseInside=!1,c.call(this)},showToolTip:function(t,i){p(i.source.props.compData)||(this.clearTimeoutNamed("hideTipByClose"),this.setTimeoutNamed("openTip",function(){h.call(this,t,i)}.bind(this),500))},closeToolTip:function(){this.setTimeoutNamed("hideTipByClose",function(){this._isMouseInside||c.call(this)}.bind(this),150)},getSkinProperties:function(){return{content:{children:[this.props.compData.content]}}},componentDidUpdate:function(){f.call(this)},getInitialState:function(){return{$hidden:"hidden",isMouseInside:!1}}}});
//# sourceMappingURL=infoTip.min.js.map