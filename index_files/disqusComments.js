"use strict";define("disqusComments/translations/disqusComments",[],{de:{disqusComments_notDisqusIdMessage:"Um mit Disqus zu starten, gehen Sie zu den Einstellungen."},en:{disqusComments_notDisqusIdMessage:"To get started with Disqus head to the Settings panel."},es:{disqusComments_notDisqusIdMessage:"Para comenzar con Disqus, dirígete al panel de opciones."},fr:{disqusComments_notDisqusIdMessage:"Pour commencer à utiliser Disqus, dirigez-vous vers le panneau de propriété."},it:{disqusComments_notDisqusIdMessage:"Per iniziare a usare Disqus, dirigiti al riquadro Impostazioni."},ja:{disqusComments_notDisqusIdMessage:"アカウントを接続して Disqus をご利用ください。"},ko:{disqusComments_notDisqusIdMessage:"Disqus를 시작하려면 설정창으로 이동하세요."},pl:{disqusComments_notDisqusIdMessage:"Aby rozpocząć korzystanie z Disqus przejdź do panelu Ustawień."},ru:{disqusComments_notDisqusIdMessage:"Для работы с Disqus зайдите в панель настроек."},nl:{disqusComments_notDisqusIdMessage:"Ga naar de Instellingen om aan de slag te gaan met Disqus."},tr:{disqusComments_notDisqusIdMessage:"Disqus kullanmaya başlamak için Ayarlar paneline gidin."},sv:{disqusComments_notDisqusIdMessage:"För att börja använda Disqus gå till inställningar."},pt:{disqusComments_notDisqusIdMessage:"Para começar com o Disqus, vá no painel de configurações."},no:{disqusComments_notDisqusIdMessage:"For å komme i gang med Disqus gå til innstillingerpanelet."},da:{disqusComments_notDisqusIdMessage:"For at komme i gang med Diqus, gå til panelet indstillinger."},hi:{disqusComments_notDisqusIdMessage:"To get started with Disqus head to the Settings panel."},zh:{disqusComments_notDisqusIdMessage:"To get started with Disqus head to the Settings panel."},cs:{disqusComments_notDisqusIdMessage:"Abyste mohli začít používat Disqus, přejděte na panel Nastavení."}}),define("disqusComments",["core","utils","lodash","santaProps","disqusComments/translations/disqusComments"],function(s,e,t,i,n){var a=s.compMixins,o=e.urlUtils;return{displayName:"DisqusComments",propTypes:{compData:i.Types.Component.compData.isRequired,id:i.Types.Component.id.isRequired,languageCode:i.Types.RendererModel.languageCode.isRequired,santaBase:i.Types.santaBase,rootPageData:i.Types.rootPageData,currentUrl:i.Types.currentUrl.isRequired},statics:{useSantaTypes:!0},mixins:[a.skinBasedComp,a.postMessageCompMixin,a.uniquePageIdMixin],getDisqusInstanceId:function(){return this.getDisqusId&&this.getDisqusId()||this.getUniquePageId()},getIframeSrc:function(){var s=this.props.rootPageData,e=this.getDisqusInstanceId(),i={disqusId:this.props.compData.disqusId?this.props.compData.disqusId:"wixdemo123",pageUrl:t.isString(this.props.currentUrl)?this.props.currentUrl:this.props.currentUrl.full,pageTitle:s.title,compId:this.props.id,disqusInstanceId:e};return this.props.santaBase+"/static/external/disqusComments.html?"+o.toQueryString(i)},getSkinProperties:function(){var s=!!this.props.compData.disqusId;return{"":{style:{height:this.state.$disqusCommentsDesiredHeight?this.state.$disqusCommentsDesiredHeight:""}},disqusCommentsHolder:{src:this.getIframeSrc(),key:this.getDisqusInstanceId(),style:{height:this.state.$disqusCommentsDesiredHeight?this.state.$disqusCommentsDesiredHeight:""}},disqusCommentsPreviewOverlay:{style:{display:"none"}},noDisqusIdMessage:{style:{display:s?"none":""},children:this.getTranslation("disqusComments_notDisqusIdMessage")}}},componentWillReceiveProps:function(s){this.setState({$disqusId:s.compData.disqusId})},getTranslation:function(s){return this.translatedKeys[s]||s},getInitialState:function(){return this.translatedKeys=n[this.props.languageCode]||{},{$disqusId:this.props.compData.disqusId,$disqusCommentsDesiredHeight:200}},onDisqusCommentsHolderMsg:function(s){this.prevHeight=this.state.$disqusCommentsDesiredHeight,this.setState({$disqusCommentsDesiredHeight:s.height}),this.prevHeight!==s.height&&this.registerReLayout()},componentDidMount:function(){this.setPostMessageHandler(this.props.id,this.onDisqusCommentsHolderMsg)}}});
//# sourceMappingURL=disqusComments.min.js.map