"use strict";define("pinterestFollow",["core","lodash","santaProps"],function(t,e,o){var s=function(t){var o=["https://","http://","//"];return e.some(o,e.includes.bind(null,t))?t:e.last(o)+t};return{displayName:"PinterestFollow",mixins:[t.compMixins.skinBasedComp],propTypes:{compData:o.Types.Component.compData.isRequired},statics:{useSantaTypes:!0},getSkinProperties:function(){return{followButtonTag:{children:[this.props.compData.label],style:{display:"inline-block"}},followButton:{href:s(this.props.compData.urlChoice),target:"_blank"}}}}});
//# sourceMappingURL=pinterestFollow.min.js.map