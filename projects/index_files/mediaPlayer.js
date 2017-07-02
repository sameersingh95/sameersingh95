"use strict";define("mediaPlayer",["lodash","react","core","compDesignUtils","santaProps","mediaCommon"],function(e,t,i,n,o,s){function r(e,i){return t.Children.map(e.children,function(n){return t.cloneElement(n,{playerInteraction:e.compProp.playerInteraction,playerInHoverState:i.hover,playerInTimedHoverState:i.timedHover,playerId:e.id})})}var a=s.mediaLogicMixins.mediaPlayer,p=i.compMixins.timeoutsMixin;return{displayName:"MediaPlayer",mixins:[i.compMixins.skinBasedComp,a,p],propTypes:e.defaults({style:o.Types.Component.style.isRequired,compDesign:o.Types.Component.compDesign,compProp:o.Types.Component.compProp,isExperimentOpen:o.Types.isExperimentOpen}),statics:{useSantaTypes:!0,behaviors:s.mediaBehaviors.mediaPlayer},getInitialState:function(){return{hover:!1,timedHover:!1}},toggleHover:function(e){var t="mouseenter"===e.type;this.setState({hover:t}),t||this.removeTimedHover()},setTimedHover:function(){this.state.timedHover||this.setState({timedHover:!0}),this.setTimeout(this.removeTimedHover,2e3)},removeTimedHover:function(){this.setState({timedHover:!1})},handleHoverAction:function(e){switch(this.toggleHover(e),e.type){case"mouseenter":"playOnHover"===this.props.playerInteraction?this.playMedia():"pauseOnHover"===this.props.playerInteraction&&this.pauseMedia();break;case"mouseleave":"playOnHover"===this.props.playerInteraction?this.pauseMedia():"pauseOnHover"===this.props.playerInteraction&&this.playMedia()}},getSkinProperties:function(){var e=this.props.isExperimentOpen("sv_cssDesignData"),i={"":{style:this.props.style},background:this.createFillLayers(),container:{className:this.classSet({"interactive-player":"none"!==this.props.playerInteraction}),style:n.getContainerStyle(this.props.compDesign,e),onMouseEnter:this.handleHoverAction,onMouseLeave:this.handleHoverAction,onMouseMove:this.setTimedHover},inlineContentParent:{style:{pointerEvents:t.Children.count(this.props.children)>0?"auto":"none"}},inlineContent:{children:r(this.props,this.state)}};return"click"===this.props.compProp.playerInteraction&&(i.container.onClick=this.togglePlayMedia),i}}});
//# sourceMappingURL=mediaPlayer.min.js.map