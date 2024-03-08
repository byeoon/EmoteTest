function H(o){window.enmity.plugins.registerPlugin(o)}const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const Y=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const E=window.enmity.modules.common.Navigation,V=window.enmity.modules.common.NavigationNative,N=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme;const G=window.enmity.modules.common.Linking,c=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const b={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function j(...o){return window.enmity.modules.bulk(...o)}function d(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function $(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const L=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const i=e.Text;e.TextInput,e.TouchableHighlight;const F=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const M=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const C=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const D=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var K="EmotesPlus",W="1.1.0",X="Enhanced mobile emote management.",q=[{name:"byron",id:"639577344276692992"}],J="#00007d",Q="https://github.com/byeoon/EmotesPlus",Z=[`
 1.0.1: Optimized code, added toast icon, fixed bug where actionsheet would not close on click, settings now have changelog and version fixed 
`,`1.0.2: Removed lengthy text when copying hyperlink to clipboard, fixed bug where some elements would have $ before them, added text titles and better spacing. 
`,`1:0.3: De-cluttered the emote menu, you can now decide if you want to copy as hyperlink or emote using Settings. 
 `,"1.1.0: You can now clone emotes to servers!"],S={name:K,version:W,description:X,authors:q,color:J,sourceUrl:Q,changelog:Z};function ee(o,n,r){return window.enmity.settings.get(o,n,r)}const I=N.createStackNavigator();var oe=({name:o="Page",component:n=M}={})=>{const r=c.createThemedStyleSheet({container:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},card:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:l.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},text:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:l.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),p=({onPress:s,title:R})=>t.createElement(F,{onPress:s},t.createElement(i,{style:r.text},R));return t.createElement(V.NavigationContainer,{independent:!0},t.createElement(I.Navigator,{initialRouteName:o,style:r.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:r.card,headerStyle:r.header,headerTitleContainerStyle:{color:l.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(I.Screen,{name:o,component:n,options:{headerTitleStyle:{color:"white",fontFamily:l.Fonts.PRIMARY_NORMAL},headerLeft:()=>t.createElement(p,{title:"Cancel",onPress:()=>{E.pop()}}),...N.TransitionPresets.ModalSlideFromBottomIOS}})))};function te(o,n){fetch(o).then(r=>{r.blob().then(p=>{const s=new FileReader;s.readAsDataURL(p),s.onloadend=()=>{n(s.result)}})})}const[ne,ie,re]=j(b.byProps("getGuilds"),b.byProps("can","_dispatcher"),b.byProps("uploadEmoji"));function le(o,n,r){return window.enmity.utilities.findInReactTree(o,n,r)}function me(o){return window.enmity.assets.getIDByName(o)}const se=d("setString"),{default:u}=d("ButtonColors","ButtonSizes");var ae=({settings:o})=>{const n=c.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:l.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:l.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:l.ThemeColorMap.HEADER_SECONDARY},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:l.ThemeColorMap.HEADER_SECONDARY}});return t.createElement(L,null,t.createElement(M,{style:n.title},t.createElement(i,{style:n.pluginTitle},"EmotesPlus"),t.createElement(i,{style:n.pluginAuthor},"Developed by byron"),t.createElement(i,{style:n.pluginAuthor},"Version ",S.version),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.tab},"Settings")),t.createElement(C,{label:"New UI Support (WIP)",trailing:t.createElement(D,{value:o.get("newUISupport",!1),onValueChange:()=>o.toggle("newUISupport",!0)})}),t.createElement(C,{label:"Copy Emotes as Hyperlink",trailing:t.createElement(D,{value:o.get("copyAsHyperlink",!1),onValueChange:()=>o.toggle("copyAsHyperlink",!0)})}),t.createElement(i,{style:n.br}," "),t.createElement(u,{color:u.Colors.BRAND,text:"Copy Plugin Link",size:u.Sizes.SMALL,onPress:()=>{se.setString("https://raw.githubusercontent.com/byeoon/EmotesPlus/main/dist/EmotesPlus.js")}}),t.createElement(i,{style:n.br}," "),t.createElement(u,{color:u.Colors.BRAND,text:"Visit GitHub Repository",size:u.Sizes.SMALL,onPress:()=>{G.openURL("https://github.com/byeoon/EmotesPlus")}}),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.pluginAuthor},"Changelog: ",S.changelog))};const A=d("openLazy","hideActionSheet"),k=d("setString"),g=$("EmotesPlus"),{default:y}=d("ButtonColors","ButtonSizes");d("RedesignCompat");const ce=l.Permissions;function x(o){Y.open({content:o,icon:me("Check")})}const de={...S,onStart(){console.log("[EmotesPlus] Hello World!");const o=g.before(A,"openLazy",(n,[r,p])=>{p==="MessageEmojiActionSheet"&&(o(),r.then(s=>{g.after(s,"default",(R,ue,B)=>{const O=g.after(B,"type",(ye,pe,z)=>{t.useEffect(()=>()=>void O(),[]);const f=le(z,a=>{var m,w;return(a==null?void 0:a.type)&&((m=a==null?void 0:a.props)==null?void 0:m.emojiNode)&&((w=a==null?void 0:a.props)==null?void 0:w.nonce)});!f||g.after(f,"type",(a,[{emojiNode:m}],w)=>{var v,T;const _=Object.entries(ne.getGuilds()).filter(([P,h])=>ie.can(ce.MANAGE_GUILD_EXPRESSIONS,h));(T=(v=w==null?void 0:w.props)==null?void 0:v.children)==null||T.push(t.createElement(i,{text:"Emotes+"}),t.createElement(y,{color:y.Colors.BRAND,text:"Copy Emote URL",size:y.Sizes.SMALL,onPress:()=>{x("Copied Emote URL to clipboard!"),ee(S.name,"copyAsHyperlink",!1)?k.setString(m.src):k.setString("["+m.alt+"]("+m.src+")"),A.hideActionSheet()}}),t.createElement(i,{text:"  "}),t.createElement(y,{color:y.Colors.BRAND,text:"Clone to Server",size:y.Sizes.SMALL,onPress:()=>{E.push(oe,{component:()=>t.createElement(L,null,_.map(([P,h])=>t.createElement(F,{onPress:()=>te(m.src,U=>{re.uploadEmoji({guildId:P,image:U,name:m.alt,roles:void 0}).then(()=>{x(`Cloned emote to ${h}!`),E.pop()})})},t.createElement(C,{label:" "+h})))),name:"Clone Emote"}),A.hideActionSheet()}}))})})})}))})},onStop(){g.unpatchAll()},getSettingsPanel({settings:o}){return t.createElement(ae,{settings:o})}};H(de);
