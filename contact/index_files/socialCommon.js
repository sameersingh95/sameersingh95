"use strict";define("socialCommon/mixins/socialCompMixin",["santaProps"],function(t){return{propTypes:{compData:t.Types.Component.compData,urlFormat:t.Types.urlFormat,getMainPageUrl:t.Types.getMainPageUrl,getCurrentUrl:t.Types.getCurrentUrl},getSocialUrl:function(t){var e,i=this.props.compData?this.props.compData.urlFormat:this.props.urlFormat,o=this.props.compData&&this.props.compData.isHttpsEnabled;return e=t?this.props.getMainPageUrl(i):this.props.getCurrentUrl(i,void 0,i!==this.props.urlFormat),o?e:e.replace(/^https:/,"http:")}}}),define("socialCommon/mixins/facebookComponentMixin",["lodash","reactDOM","santaProps"],function(t,e,i){function o(t,e){return!!(t&&t.height&&t.width&&e&&e.height&&e.width)&&(t.height!==e.height||t.width!==e.width)}return{getInitialState:function(){return this._lastHref=this.getHref(this.props),null},propTypes:{externalScriptLoader:i.Types.SiteAspects.externalScriptLoader,cookie:i.Types.RequestModel.cookie,currentUrl:i.Types.currentUrl,userLanguage:i.Types.WixUserSantaTypes.userLanguage.isRequired},loadScript:function(){"undefined"==typeof window||window.FB||this.props.externalScriptLoader.loadScript("FACEBOOK",null,{currentUrl:this.props.currentUrl,cookie:this.props.cookie,userLanguage:this.props.userLanguage})},parseFacebookPluginDomNode:function(){t.has(window,"FB.XFBML.parse")&&window.FB.XFBML.parse(e.findDOMNode(this))},componentDidMount:function(){this.loadScript(),this.parseFacebookPluginDomNode()},componentDidUpdate:function(e){var i=this.getHref(this.props);t.isEqual(e.compData,this.props.compData)&&t.isEqual(e.compProp,this.props.compProp)&&!o(e.style,this.props.style)&&i===this._lastHref||this.parseFacebookPluginDomNode(),this._lastHref=i}}}),define("socialCommon/mixins/twitterComponentMixin",["lodash","santaProps"],function(t,e){function i(t,e){return"userLang"===t?e:t}var o=["da","de","en","es","fr","hi","it","ja","ko","nl","no","pl","pt","ru","sv","tr"];return{getInitialState:function(){return{width:this.props.style.width,height:this.props.style.height}},propTypes:{compProp:e.Types.Component.compProp.isRequired,id:e.Types.Component.id.isRequired,style:e.Types.Component.style.isRequired,userLanguage:e.Types.WixUserSantaTypes.userLanguage.isRequired},componentDidMount:function(){window.addEventListener("message",this.processMessage)},componentWillUnmount:function(){window.removeEventListener("message",this.processMessage)},processMessage:function(t){t.data&&"twitterSize"===t.data.type&&t.data.compId===this.props.id&&(this.registerReLayout(),this.setState(t.data.size))},getLanguage:function(){var e=i(this.props.compProp.dataLang,this.props.userLanguage);return t.includes(o,e)?e:"en"},getSkinProperties:function(){return{"":{style:{width:this.state.width,height:this.state.height}},iframe:{"data-src":this.getIFrameSrc(),width:this.state.width,height:this.state.height}}}}}),define("socialCommon",["socialCommon/mixins/socialCompMixin","socialCommon/mixins/facebookComponentMixin","socialCommon/mixins/twitterComponentMixin"],function(t,e,i){return{socialCompMixin:t,facebookComponentMixin:e,twitterComponentMixin:i}});
//# sourceMappingURL=socialCommon.min.js.map