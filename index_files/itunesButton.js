"use strict";define("itunesButton",["lodash","react","core","utils","santaProps"],function(e,o,n,r,t){function s(e,n){var r={parentConst:o.DOM.a,target:e.openIn};return n.downloadUrl&&(r.href=n.downloadUrl),r}function p(e,o){return"userLang"===e?o:e}function a(o,n,r){var t=i(r);return o=p(o,n),e.includes(d,o)||(o="en"),t.replace(u,o.toUpperCase())}function i(e){return r.media.getMediaUrl(e,c)}var u="{{langCode}}",c="itunesButton/iTunesBtn_"+u+".svg",d=["da","de","en","es","fr","it","jp","ko","nl","no","pl","pt","ru","sv","tr"];return{displayName:"ItunesButton",mixins:[n.compMixins.skinBasedComp],propTypes:{compData:t.Types.Component.compData.isRequired,compProp:t.Types.Component.compProp.isRequired,serviceTopology:t.Types.ServiceTopology.serviceTopology,userLanguage:t.Types.WixUserSantaTypes.userLanguage.isRequired},static:{useSantaTypes:!0},getSkinProperties:function(){return{downloadButton:s(this.props.compProp,this.props.compData),itunesImg:{src:a(this.props.compProp.language,this.props.userLanguage,this.props.serviceTopology)}}}}});
//# sourceMappingURL=itunesButton.min.js.map