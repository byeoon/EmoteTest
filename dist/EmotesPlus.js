function T(o){window.enmity.plugins.registerPlugin(o)}const d=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts,window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const F=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function a(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function f(o){return window.enmity.patcher.create(o)}var b="EmotesPlus",A="1.420.0",C="Enhanced mobile emote management.",R=[{name:"byron",id:"639577344276692992"}],L="#00007d",x="https://github.com/byeoon/EmotesPlus",D=["Initial development"],P={name:b,version:A,description:C,authors:R,color:L,sourceUrl:x,changelog:D};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const B=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const l=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const M=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const N=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const z=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var I=({settings:o})=>{const t=F.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:d.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:d.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:d.ThemeColorMap.HEADER_SECONDARY},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:d.ThemeColorMap.HEADER_SECONDARY}});return n.createElement(B,null,n.createElement(M,{style:t.title},n.createElement(l,{style:t.pluginTitle},"EmotesPlus"),n.createElement(l,{style:t.pluginAuthor},"Developed by byron"),n.createElement(l,{style:t.pluginAuthor},"Version 1.0.0"),n.createElement(l,{style:t.br}," "),n.createElement(l,{style:t.tab},"Settings")),n.createElement(N,{label:"Example Setting",trailing:n.createElement(z,{value:o.get("example",!0),onValueChange:()=>o.toggle("example",!0)})}))};function V(o,t,c){return window.enmity.utilities.findInReactTree(o,t,c)}const k=a("openLazy","hideActionSheet"),H=a("setString"),r=f("EmotesPlus"),{default:u}=a("ButtonColors","ButtonStyles"),j={...P,onStart(){console.log("[EmotesPlus] Hello World!");const o=r.before(k,"openLazy",(t,[c,p])=>{p==="MessageEmojiActionSheet"&&(o(),c.then(h=>{r.after(h,"default",(O,Y,S)=>{const E=r.after(S,"type",(_,U,v)=>{n.useEffect(()=>()=>void E(),[]);const w=V(v,m=>{var s,i;return(m==null?void 0:m.type)&&((s=m==null?void 0:m.props)==null?void 0:s.emojiNode)&&((i=m==null?void 0:m.props)==null?void 0:i.nonce)});!w||r.after(w,"type",(m,[{emojiNode:s}],i)=>{var y,g;(g=(y=i==null?void 0:i.props)==null?void 0:y.children)==null||g.push(n.createElement(u,{color:u.Colors.BRAND,text:"your text",size:u.Sizes.SMALL,onPress:()=>{console.log("wow you clicked me"),H.setString(s.src)}}))})})})}))})},onStop(){r.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(I,{settings:o})}};T(j);
