function H(o){window.enmity.plugins.registerPlugin(o)}const r=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const U=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const b=window.enmity.modules.common.Navigation,Y=window.enmity.modules.common.NavigationNative,P=window.enmity.modules.common.NavigationStack;window.enmity.modules.common.Theme;const V=window.enmity.modules.common.Linking,c=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;const f={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function j(...o){return window.enmity.modules.bulk(...o)}function h(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function G(o){return window.enmity.patcher.create(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList;const K=e.Image;e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const L=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const i=e.Text;e.TextInput,e.TouchableHighlight;const F=e.TouchableOpacity;e.TouchableWithoutFeedback,e.Touchable;const C=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon;const W=e.FormInput;e.FormLabel,e.FormRadio;const M=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel;const X=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var $="EmotesPlus",q="1.0.0.1",J="Enhanced mobile emote management.",Z=[{name:"byeoon",id:"1167275288036655133"}],Q="#00007d",ee="https://github.com/byeoon/EmotesPlus",oe=[`
1.0.0: The actual, first, initial release of EmotesPlus!`],E={name:$,version:q,description:J,authors:Z,color:Q,sourceUrl:ee,changelog:oe};function te(o,n,m){return window.enmity.settings.get(o,n,m)}const D=P.createStackNavigator();var ne=({name:o="Page",component:n=C}={})=>{const m=c.createThemedStyleSheet({container:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:.5},card:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,color:r.ThemeColorMap.TEXT_NORMAL},header:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},text:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:r.Fonts.PRIMARY_NORMAL,fontSize:16,marginLeft:16,backgroundColor:"transparent"}}),u=({onPress:s,title:S})=>t.createElement(F,{onPress:s},t.createElement(i,{style:m.text},S));return t.createElement(Y.NavigationContainer,{independent:!0},t.createElement(D.Navigator,{initialRouteName:o,style:m.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:m.card,headerStyle:m.header,headerTitleContainerStyle:{color:r.ThemeColorMap.HEADER_PRIMARY},headerTitleAlign:"center",safeAreaInsets:{top:0}}},t.createElement(D.Screen,{name:o,component:n,options:{headerTitleStyle:{color:"white",fontFamily:r.Fonts.PRIMARY_NORMAL},headerLeft:()=>t.createElement(u,{title:"Cancel",onPress:()=>{b.pop()}}),...P.TransitionPresets.ModalSlideFromBottomIOS}})))};function ie(o,n){fetch(o).then(m=>{m.blob().then(u=>{const s=new FileReader;s.readAsDataURL(u),s.onloadend=()=>{n(s.result)}})})}const[me,re,le]=j(f.byProps("getGuilds"),f.byProps("can","_dispatcher"),f.byProps("uploadEmoji"));function se(o,n,m){return window.enmity.utilities.findInReactTree(o,n,m)}function ae(o){return window.enmity.assets.getIDByName(o)}async function ce(){return(await(await fetch("https://raw.githubusercontent.com/byeoon/EmotesPlus/main/version.json")).json()).version}function de(){const[o,n]=t.useState();return t.useEffect(()=>{ce().then(n)},[]),o}const{default:R}=h("ButtonColors","ButtonSizes");var ue=({settings:o})=>{const n=c.createThemedStyleSheet({title:{flexDirection:"column"},itiswhatitis:{flexDirection:"row",justifyContent:"center",alignItems:"center"},pluginTitle:{fontSize:32,paddingTop:20,paddingLeft:20,paddingRight:30,color:r.ThemeColorMap.HEADER_PRIMARY},pluginAuthor:{fontSize:12,paddingLeft:20,paddingRight:30,color:r.ThemeColorMap.HEADER_SECONDARY},br:{fontSize:0,paddingTop:20,paddingLeft:20,paddingRight:30,color:r.ThemeColorMap.HEADER_SECONDARY},img:{width:72,height:72,marginTop:10,marginLeft:20},tab:{fontSize:14,paddingTop:20,paddingLeft:20,paddingRight:25,color:r.ThemeColorMap.HEADER_SECONDARY}});return t.createElement(L,null,t.createElement(C,{style:n.itiswhatitis},t.createElement(K,{source:{uri:"https://avatars.githubusercontent.com/u/47872200?v=4"},style:n.img}),t.createElement(C,{style:n.title},t.createElement(i,{style:n.pluginTitle},"EmotesPlus"),t.createElement(i,{style:n.pluginAuthor},"Developed by byeoon"),t.createElement(i,{style:n.pluginAuthor}," Version ",E.version," | Remote Version: ",de()),t.createElement(i,{style:n.br}," "))),t.createElement(i,{style:n.tab},"Settings"),t.createElement(M,{label:"Copy Emotes as Hyperlink",trailing:t.createElement(X,{value:o.getBoolean("copyAsHyperlink",!0),onValueChange:()=>o.toggle("copyAsHyperlink",!0)})}),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.br}," "),t.createElement(R,{color:R.Colors.BRAND,text:"Visit GitHub Repository",size:R.Sizes.SMALL,onPress:()=>{V.openURL("https://github.com/byeoon/EmotesPlus")}}),t.createElement(i,{style:n.br}," "),t.createElement(i,{style:n.tab},"Changelog: "),t.createElement(i,{style:n.pluginAuthor}," ",E.changelog," "))};const A=h("openLazy","hideActionSheet"),I=h("setString"),w=G("EmotesPlus"),{default:d}=h("ButtonColors","ButtonSizes"),ye=r.Permissions;function B(o){U.open({content:o,icon:ae("Check")})}const we={...E,onStart(){let o="";const n=w.before(A,"openLazy",(m,[u,s])=>{s==="MessageEmojiActionSheet"&&(n(),u.then(S=>{w.after(S,"default",(pe,ge,k)=>{const O=w.after(k,"type",(he,Ee,x)=>{t.useEffect(()=>()=>void O(),[]);const v=se(x,a=>{var l,y;return(a==null?void 0:a.type)&&((l=a==null?void 0:a.props)==null?void 0:l.emojiNode)&&((y=a==null?void 0:a.props)==null?void 0:y.nonce)});!v||w.after(v,"type",(a,[{emojiNode:l}],y)=>{var T,N;const _=Object.entries(me.getGuilds()).filter(([p,g])=>re.can(ye.MANAGE_GUILD_EXPRESSIONS,g));(N=(T=y==null?void 0:y.props)==null?void 0:T.children)==null||N.push(t.createElement(i,{text:"EmotesPlus"}),t.createElement(d,{color:d.Colors.BRAND,text:"Copy Emote URL",size:d.Sizes.SMALL,onPress:()=>{B("Copied Emote URL to clipboard!"),te(E.name,"copyAsHyperlink",!1)?I.setString(l.src):I.setString("["+l.alt+"]("+l.src+")"),A.hideActionSheet()}}),t.createElement(i,{text:""}),t.createElement(d,{color:d.Colors.BRAND,text:"Clone to Server",size:d.Sizes.SMALL,onPress:()=>{b.push(ne,{component:()=>t.createElement(L,null,t.createElement(W,{onChange:p=>o=p,placeholder:l.alt,title:"Custom Emote Name"}),",",_.map(([p,g])=>t.createElement(F,{onPress:()=>ie(l.src,z=>{le.uploadEmoji({guildId:p,image:z,name:o,roles:void 0}).then(()=>{B(`Cloned emote to ${g}!`),b.pop()})})},t.createElement(M,{label:" "+g})))),name:"Clone Emote"}),A.hideActionSheet()}}))})})})}))})},onStop(){w.unpatchAll()},getSettingsPanel({settings:o}){return t.createElement(ue,{settings:o})}};H(we);
