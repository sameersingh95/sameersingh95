"use strict";define("textInput",["lodash","core","santaProps","textCommon"],function(t,i,e,n){function s(){var i=this.getFontSize();if(this.props.isMobileView){var e=t.max([13,Number(i.fontSize.replace("px",""))]);i.fontSize=e+"px"}return i}return{displayName:"TextInput",mixins:[n.baseTextInput,n.textScaleMixin,i.compMixins.inputFocusMixin],propTypes:{compProp:e.Types.Component.compProp.isRequired,isMobileView:e.Types.isMobileView},statics:{useSantaTypes:!0,behaviors:t.assign({},n.baseTextInput.BASE_TEXT_BEHAVIORS,i.compMixins.inputFocusMixin.INPUT_FOCUS_BEHAVIORS)},focus:function(){this.refs.input.focus()},blur:function(){this.refs.input.blur()},getSkinProperties:function(){var i={"with-validation-indication":this.shouldShowValidityIndication()};i[this.props.compProp.textAlignment+"-direction"]=!0;var e=this.getBaseTextInputSkinProperties();e[""]={className:this.classSet(i),"data-disabled":!!this.props.compProp.isDisabled,"data-preview":t.isFunction(this.getComponentPreviewState)&&this.getComponentPreviewState()};var n="padding"+t.capitalize(this.props.compProp.textAlignment);return e.input=t.merge({style:s.call(this)},e.input,{"data-preview":t.isFunction(this.getComponentPreviewState)&&this.getComponentPreviewState()}),e.input.style[n]=this.props.compProp.textPadding,e}}});
//# sourceMappingURL=textInput.min.js.map