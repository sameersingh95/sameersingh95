"use strict";define("pinterestPinIt",["lodash","core","utils","santaProps","socialCommon"],function(i,t,e,o,r){function s(i,t){return d[i][t]}function a(t,e){var o=t.santaBase+"/static/external/pinterestPinIt.html?";return i.isEmpty(t.compData.uri)||i.isEmpty(t.compData.description)?o+=h.toQueryString(n(t)):o+=h.toQueryString(p(t,e)),o}function n(i){return{gagPath:e.media.getMediaUrl(i.serviceTopology,"pinterestPinIt/pinterest-disabled.png")}}function p(i,t){return{media:h.addProtocolIfMissing(i.serviceTopology.staticMediaUrl+"/"+i.compData.uri),url:t,description:i.compData.description,"data-pin-do":"buttonBookmark","data-pin-config":i.compProp.counterPosition,"data-pin-color":i.compProp.color,"data-pin-height":s("none",i.compProp.size).height}}var c=t.compMixins,h=e.urlUtils,d={none:{small:{width:40,height:20},large:{width:56,height:28}},beside:{small:{width:81,height:20},large:{width:101,height:28}},above:{small:{width:40,height:50},large:{width:56,height:66}}};return{displayName:"PinterestPinIt",mixins:[c.skinBasedComp,r.socialCompMixin],propTypes:{compData:o.Types.Component.compData.isRequired,santaBase:o.Types.santaBase.isRequired,compProp:o.Types.Component.compProp.isRequired,serviceTopology:o.Types.ServiceTopology.serviceTopology},statics:{useSantaTypes:!0},getSkinProperties:function(){var i=s(this.props.compProp.counterPosition,this.props.compProp.size),t=i.height,e=i.width;return{"":{style:{height:t,width:e}},iframe:{width:e,height:t,"data-src":a(this.props,this.getSocialUrl(!0))}}}}});
//# sourceMappingURL=pinterestPinIt.min.js.map