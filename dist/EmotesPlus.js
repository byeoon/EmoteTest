function T(o){window.enmity.plugins.registerPlugin(o)}const d=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const b=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function y(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function F(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const f=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const i=e.Text;e.TextInput,e.TouchableHighlight;const A=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const C=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const R=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const L=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var P="EmotesPlus",x="1.69.0",D="Enhanced mobile emote management.",I=[{name:"byron",id:"639577344276692992"}],M="#00007d",N="https://github.com/byeoon/EmotesPlus",V=["Initial development"],z={name:P,version:x,description:D,authors:I,color:M,sourceUrl:N,changelog:V},B=({settings:o})=>{const t=b.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:d.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:d.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:d.ThemeColorMap.HEADER_SECONDARY},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:d.ThemeColorMap.HEADER_SECONDARY}});return n.createElement(f,null,n.createElement(C,{style:t.title},n.createElement(i,{style:t.pluginTitle},"EmotesPlus"),n.createElement(i,{style:t.pluginAuthor},"Developed by byron"),n.createElement(i,{style:t.pluginAuthor},"Version 1.0.0"),n.createElement(i,{style:t.br}," "),n.createElement(i,{style:t.tab},"Settings")),n.createElement(R,{label:"Example Setting",trailing:n.createElement(L,{value:o.get("example",!0),onValueChange:()=>o.toggle("example",!0)})}))};function k(o,t,c){return window.enmity.utilities.findInReactTree(o,t,c)}const H=y("openLazy","hideActionSheet"),O=y("setString"),r=F("EmotesPlus"),j={...z,onStart(){console.log("[EmotesPlus] Hello World!");const o=r.before(H,"openLazy",(t,[c,g])=>{g==="MessageEmojiActionSheet"&&(o(),c.then(p=>{const h=r.after(p,"default",(Y,_,S)=>{h();const E=r.after(S,"type",(U,W,v)=>{n.useEffect(()=>()=>void E(),[]);const a=k(v,m=>{var s,l;return(m==null?void 0:m.type)&&((s=m==null?void 0:m.props)==null?void 0:s.emojiNode)&&((l=m==null?void 0:m.props)==null?void 0:l.nonce)});!a||r.after(a,"type",(m,[{emojiNode:s}],l)=>{var u,w;O.setString(s.src),(w=(u=l==null?void 0:l.props)==null?void 0:u.children)==null||w.push(n.createElement(A,{onPress:()=>console.log("you pressed it")},n.createElement(i,{style:{color:"white"}},"Press me!")))})})})}))})},onStop(){r.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(B,{settings:o})}};T(j);
