function V(o){window.enmity.plugins.registerPlugin(o)}const m=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const M=window.enmity.modules.common.Toasts,K=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const A=window.enmity.modules.common.Navigation,W=window.enmity.modules.common.NavigationNative,D=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme;const X=window.enmity.modules.common.Linking,u=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const S={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function $(...o){return window.enmity.modules.bulk(...o)}function y(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function J(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const Q=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const I=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const r=e.Text;e.TextInput,e.TouchableHighlight;const k=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const R=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox;const v=e.FormDivider;e.FormHint,e.FormIcon;const Z=e.FormInput;e.FormLabel,e.FormRadio;const b=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const q=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var ee="EmotesPlus",oe="1.1.0",te="Enhanced mobile emote management.",ne=[{name:"byeoon",id:"1167275288036655133"}],ie="#00007d",re="https://github.com/byeoon/EmotesPlus",se=[`
1.0.0: The first initial release of EmotesPlus!
`,`1.1.0: Added the ability to copy emotes as images, and update notifier.
`],w={name:ee,version:oe,description:te,authors:ne,color:ie,sourceUrl:re,changelog:se};function me(o,n,i){return window.enmity.settings.get(o,n,i)}const O=D.createStackNavigator();var ae=({name:o="Page",component:n=R}={})=>{const i=u.createThemedStyleSheet({container:{backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},card:{backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:m.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},text:{color:u.ThemeColorMap.HEADER_PRIMARY,fontFamily:m.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),g=({onPress:l,title:P})=>t.createElement(k,{onPress:l},t.createElement(r,{style:i.text},P));return t.createElement(W.NavigationContainer,{independent:!0},t.createElement(O.Navigator,{initialRouteName:o,style:i.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:i.card,headerStyle:i.header,headerTitleContainerStyle:{color:m.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(O.Screen,{name:o,component:n,options:{headerTitleStyle:{color:"white",fontFamily:m.Fonts.PRIMARY_NORMAL},headerLeft:()=>t.createElement(g,{title:"Cancel",onPress:()=>{A.pop()}}),...D.TransitionPresets.ModalSlideFromBottomIOS}})))};function x(o,n){fetch(o).then(i=>{i.blob().then(g=>{const l=new FileReader;l.readAsDataURL(g),l.onloadend=()=>{n(l.result)}})})}const[le,ce,de,ve]=$(S.byProps("getGuilds"),S.byProps("can","_dispatcher"),S.byProps("uploadEmoji"),S.byProps("downloadMediaAsset"));function ue(o,n,i){return window.enmity.utilities.findInReactTree(o,n,i)}function B(o){return window.enmity.assets.getIDByName(o)}const ge=y("setString");async function _(){return(await(await fetch("https://raw.githubusercontent.com/byeoon/EmotesPlus/main/version.json")).json()).version}function pe(){K.show({title:"EmotesPlus",body:"You are running an outdated version of EmotesPlus! Please re-install to get the latest update.",confirmText:"Okay"})}function ye(o){M.open({content:o,icon:B("Check")})}function we(){const[o,n]=t.useState();return t.useEffect(()=>{_().then(n)},[]),o}function he(){w.version.toString()<_().toString()&&(console.log("EmotesPlus is running an outdated version and it is recommended to update."),pe())}var Ee=({settings:o})=>{const n=u.createThemedStyleSheet({title:{flexDirection:"column"},itiswhatitis:{flexDirection:"row",justifyContent:"center",alignItems:"center"},pluginTitle:{fontSize:32,paddingTop:20,paddingLeft:20,paddingRight:30,color:m.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:20,paddingRight:30,color:m.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:m.ThemeColorMap.HEADER_SECONDARY},img:{width:72,height:72,marginTop:10,marginLeft:20},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:m.ThemeColorMap.HEADER_SECONDARY}});return t.createElement(I,null,t.createElement(R,{style:n.itiswhatitis},t.createElement(Q,{source:{uri:"https://avatars.githubusercontent.com/u/47872200?v=4"},style:n.img}),t.createElement(R,{style:n.title},t.createElement(r,{style:n.pluginTitle},"EmotesPlus"),t.createElement(r,{style:n.pluginAuthor},"Developed by byeoon"),t.createElement(r,{style:n.pluginAuthor}," Version ",w.version," | Remote Version: ",we()),t.createElement(r,{style:n.br}," "))),t.createElement(r,{style:n.tab},"Settings"),t.createElement(b,{label:"Copy Emotes as Hyperlink",trailing:t.createElement(q,{value:o.getBoolean("copyAsHyperlink",!0),onValueChange:()=>o.toggle("copyAsHyperlink",!0)})}),t.createElement(v,null),t.createElement(b,{label:"Open GitHub Repository",icon:"ic_arrow_right",onPress:()=>X.openURL("https://github.com/byeoon/EmotesPlus")}),t.createElement(v,null),t.createElement(b,{label:"Copy Plugin URL",icon:"ic_arrow_right",onPress:()=>{ge.setString("https://raw.githubusercontent.com/byeoon/EmotesPlus/main/dist/EmotesPlus.js"),ye("Copied URL!")}}),t.createElement(r,{style:n.tab},"Changelog: "),t.createElement(r,{style:n.pluginAuthor}," ",w.changelog," "))};const f=y("openLazy","hideActionSheet"),z=y("setString"),Se=y("setImage"),h=J("EmotesPlus"),{default:a}=y("ButtonColors","ButtonSizes"),be=m.Permissions;function T(o){M.open({content:o,icon:B("Check")})}const fe={...w,onStart(){he();const o=h.before(f,"openLazy",(n,[i,g])=>{g==="MessageEmojiActionSheet"&&(o(),i.then(l=>{h.after(l,"default",(P,Ce,U)=>{const H=h.after(U,"type",(Ae,Re,Y)=>{t.useEffect(()=>()=>void H(),[]);const N=ue(Y,c=>{var s,p;return(c==null?void 0:c.type)&&((s=c==null?void 0:c.props)==null?void 0:s.emojiNode)&&((p=c==null?void 0:c.props)==null?void 0:p.nonce)});if(!N)return;let C="placeholdername";h.after(N,"type",(c,[{emojiNode:s}],p)=>{var L,F;const j=Object.entries(le.getGuilds()).filter(([d,E])=>ce.can(be.MANAGE_GUILD_EXPRESSIONS,E));(F=(L=p==null?void 0:p.props)==null?void 0:L.children)==null||F.push(t.createElement(r,{text:"EmotesPlus"}),t.createElement(a,{color:a.Colors.BRAND,text:"Copy Emote URL",size:a.Sizes.SMALL,onPress:()=>{T("Copied Emote URL to clipboard!"),me(w.name,"copyAsHyperlink",!1)?z.setString(s.src):z.setString("["+s.alt+"]("+s.src+")"),f.hideActionSheet()}}),t.createElement(r,{text:""}),t.createElement(a,{color:a.Colors.BRAND,text:"Copy Emote as Image",size:a.Sizes.SMALL,onPress:()=>{x(s.src,d=>{Se.setImage(d.split(",")[1])}),T("Copied Emote as image!"),f.hideActionSheet()}}),t.createElement(r,{text:""}),t.createElement(a,{color:a.Colors.BRAND,text:"Clone to Server",size:a.Sizes.SMALL,onPress:()=>{C=s.alt,A.push(ae,{component:()=>t.createElement(I,null,t.createElement(Z,{onChange:d=>C=d,placeholder:s.alt,title:"Custom Emote Name"}),t.createElement(v,null),j.map(([d,E])=>t.createElement(k,{onPress:()=>x(s.src,G=>{de.uploadEmoji({guildId:d,image:G,name:C,roles:void 0}).then(()=>{T(`Cloned emote to ${E}!`),A.pop()})})},t.createElement(b,{label:" "+E})))),name:"Clone Emote"}),f.hideActionSheet()}}))})})})}))})},onStop(){h.unpatchAll()},getSettingsPanel({settings:o}){return t.createElement(Ee,{settings:o})}};V(fe);
