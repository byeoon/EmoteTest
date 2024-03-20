function H(o){window.enmity.plugins.registerPlugin(o)}const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const V=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const S=window.enmity.modules.common.Navigation,Y=window.enmity.modules.common.NavigationNative,P=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme;const G=window.enmity.modules.common.Linking,c=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const E={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function j(...o){return window.enmity.modules.bulk(...o)}function d(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function K(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const W=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const L=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const i=e.Text;e.TextInput,e.TouchableHighlight;const F=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const M=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const b=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const D=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var $="EmotesPlus",X="1.1.0",q="Enhanced mobile emote management.",J=[{name:"byron",id:"639577344276692992"}],Q="#00007d",Z="https://github.com/byeoon/EmotesPlus",ee=[`
 1.0.1: Optimized code, added toast icon, fixed bug where actionsheet would not close on click, settings now have changelog and version fixed 
`,`1.0.2: Removed lengthy text when copying hyperlink to clipboard, fixed bug where some elements would have $ before them, added text titles and better spacing. 
`,`1:0.3: De-cluttered the emote menu, you can now decide if you want to copy as hyperlink or emote using Settings. 
 `,`1.1.0: You can now clone emotes to servers! 
`],h={name:$,version:X,description:q,authors:J,color:Q,sourceUrl:Z,changelog:ee};function oe(o,n,r){return window.enmity.settings.get(o,n,r)}const I=P.createStackNavigator();var te=({name:o="Page",component:n=M}={})=>{const r=c.createThemedStyleSheet({container:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},card:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:l.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},text:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:l.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),y=({onPress:s,title:v})=>t.createElement(F,{onPress:s},t.createElement(i,{style:r.text},v));return t.createElement(Y.NavigationContainer,{independent:!0},t.createElement(I.Navigator,{initialRouteName:o,style:r.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:r.card,headerStyle:r.header,headerTitleContainerStyle:{color:l.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(I.Screen,{name:o,component:n,options:{headerTitleStyle:{color:"white",fontFamily:l.Fonts.PRIMARY_NORMAL},headerLeft:()=>t.createElement(y,{title:"Cancel",onPress:()=>{S.pop()}}),...P.TransitionPresets.ModalSlideFromBottomIOS}})))};function ne(o,n){fetch(o).then(r=>{r.blob().then(y=>{const s=new FileReader;s.readAsDataURL(y),s.onloadend=()=>{n(s.result)}})})}const[ie,re,le]=j(E.byProps("getGuilds"),E.byProps("can","_dispatcher"),E.byProps("uploadEmoji"));function me(o,n,r){return window.enmity.utilities.findInReactTree(o,n,r)}function se(o){return window.enmity.assets.getIDByName(o)}const ae="https://raw.githubusercontent.com/byeoon/EmotesPlus/main/version.json";d("setString");const{default:R}=d("ButtonColors","ButtonSizes");var ce=({settings:o})=>{const n=c.createThemedStyleSheet({title:{flexDirection:"column"},pluginTitle:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:l.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:45,color:l.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:l.ThemeColorMap.HEADER_SECONDARY},img:{width:64,height:64,paddingTop:20,paddingLeft:20,paddingRight:20},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:l.ThemeColorMap.HEADER_SECONDARY}});return t.createElement(L,null,t.createElement(M,{style:n.title},t.createElement(W,{source:{uri:"https://avatars.githubusercontent.com/u/47872200?v=4"},style:n.img}),t.createElement(i,{style:n.pluginTitle},"EmotesPlus"),t.createElement(i,{style:n.pluginAuthor},"Developed by byron"),t.createElement(i,{style:n.pluginAuthor},"Version ",h.version," | Remote Version: ",ae),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.tab},"Settings")),t.createElement(b,{label:"New UI Support (WIP)",trailing:t.createElement(D,{value:o.getBoolean("newUISupport",!0),onValueChange:()=>o.toggle("newUISupport",!0)})}),t.createElement(b,{label:"Copy Emotes as Hyperlink",trailing:t.createElement(D,{value:o.getBoolean("copyAsHyperlink",!0),onValueChange:()=>o.toggle("copyAsHyperlink",!0)})}),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.br}," "),t.createElement(R,{color:R.Colors.BRAND,text:"Visit GitHub Repository",size:R.Sizes.SMALL,onPress:()=>{G.openURL("https://github.com/byeoon/EmotesPlus")}}),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.pluginAuthor},"Changelog: ",h.changelog))};const C=d("openLazy","hideActionSheet"),B=d("setString"),p=K("EmotesPlus"),{default:u}=d("ButtonColors","ButtonSizes");d("RedesignCompat");const de=l.Permissions;function k(o){V.open({content:o,icon:se("Check")})}const ue={...h,onStart(){console.log("[EmotesPlus] Hello World!");const o=p.before(C,"openLazy",(n,[r,y])=>{y==="MessageEmojiActionSheet"&&(o(),r.then(s=>{p.after(s,"default",(v,ye,x)=>{const O=p.after(x,"type",(ge,pe,z)=>{t.useEffect(()=>()=>void O(),[]);const A=me(z,a=>{var m,g;return(a==null?void 0:a.type)&&((m=a==null?void 0:a.props)==null?void 0:m.emojiNode)&&((g=a==null?void 0:a.props)==null?void 0:g.nonce)});!A||p.after(A,"type",(a,[{emojiNode:m}],g)=>{var f,T;const _=Object.entries(ie.getGuilds()).filter(([N,w])=>re.can(de.MANAGE_GUILD_EXPRESSIONS,w));(T=(f=g==null?void 0:g.props)==null?void 0:f.children)==null||T.push(t.createElement(i,{text:"Emotes+"}),t.createElement(u,{color:u.Colors.BRAND,text:"Copy Emote URL",size:u.Sizes.SMALL,onPress:()=>{k("Copied Emote URL to clipboard!"),oe(h.name,"copyAsHyperlink",!1)?B.setString(m.src):B.setString("["+m.alt+"]("+m.src+")"),C.hideActionSheet()}}),t.createElement(i,{text:"  "}),t.createElement(i,{text:"  "}),t.createElement(u,{color:u.Colors.BRAND,text:"Clone to Server",size:u.Sizes.SMALL,onPress:()=>{S.push(te,{component:()=>t.createElement(L,null,_.map(([N,w])=>t.createElement(F,{onPress:()=>ne(m.src,U=>{le.uploadEmoji({guildId:N,image:U,name:m.alt,roles:void 0}).then(()=>{k(`Cloned emote to ${w}!`),S.pop()})})},t.createElement(b,{label:" "+w})))),name:"Clone Emote"}),C.hideActionSheet()}}))})})})}))})},onStop(){p.unpatchAll()},getSettingsPanel({settings:o}){return t.createElement(ce,{settings:o})}};H(ue);
