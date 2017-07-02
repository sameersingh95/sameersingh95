"use strict";define("imageZoomDisplayer",["react","lodash","core","santaProps","utils","imageClientApi","image"],function(e,i,o,t,n,s,p){function r(e,i,o,t){var n={id:this.props.id+"image",ref:"image",key:e.id,imageData:e,quality:t,containerWidth:i.imageContainerWidth,containerHeight:i.imageContainerHeight,displayMode:s.fittingTypes.LEGACY_FULL,onClick:this.props.goToNextItem,effectName:this.props.compProp.effectName};return o&&(n.onClick=this.props.toggleButtons,n.onTap=this.props.toggleButtons),this.createChildComponent(e,"core.components.Image","image",n)}var a=o.compMixins,c=n.linkRenderer,l={goToLinkText:"Go to link"};return{displayName:"ImageZoomDisplayer",mixins:[a.skinBasedComp],propTypes:i.assign({id:t.Types.Component.id,compData:t.Types.Component.compData.isRequired,compProp:t.Types.Component.compProp,isMobileDevice:t.Types.Device.isMobileDevice,isTabletDevice:t.Types.Device.isTabletDevice,rootNavigationInfo:t.Types.Component.rootNavigationInfo.isRequired,linkRenderInfo:t.Types.Link.linkRenderInfo.isRequired,goToNextItem:e.PropTypes.func,toggleButtons:e.PropTypes.func,zoomDimensions:e.PropTypes.object,quality:e.PropTypes.object},t.santaTypesUtils.getSantaTypesByDefinition(p)),statics:{useSantaTypes:!0},getInitialState:function(){var e="desktop";return this.props.isMobileDevice?e="mobile":this.props.isTabletDevice&&(e="tablet"),{$device:e}},getSkinProperties:function(){var e=this.props.compData,i=this.props.compProp,o=this.props.zoomDimensions,t=this.props.quality,n={title:{children:e.title},description:{children:e.description},image:r.call(this,e,o,this.props.isMobileDevice||this.props.isTabletDevice,t)};return e.link&&(n.link=c.renderLink(e.link,this.props.linkRenderInfo,this.props.rootNavigationInfo),n.link.children=i&&i.goToLinkText?i.goToLinkText:l.goToLinkText),n}}});
//# sourceMappingURL=imageZoomDisplayer.min.js.map