(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5311],{45311:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>M});var o,n=a(93226),i=a(80430),r=a(82090),s=a(65124),l=a(96987),d=a(39232),c=a(86082),u=a(4324),p=a(62867),m=a(9727),g=a(76487),b=a(27529),h=a(2411);!function(e){e.activateNextTab="application:activate-next-tab",e.activatePreviousTab="application:activate-previous-tab",e.activateNextTabBar="application:activate-next-tab-bar",e.activatePreviousTabBar="application:activate-previous-tab-bar",e.close="application:close",e.closeOtherTabs="application:close-other-tabs",e.closeRightTabs="application:close-right-tabs",e.closeAll="application:close-all",e.setMode="application:set-mode",e.toggleMode="application:toggle-mode",e.toggleLeftArea="application:toggle-left-area",e.toggleRightArea="application:toggle-right-area",e.togglePresentationMode="application:toggle-presentation-mode",e.tree="router:tree",e.switchSidebar="sidebar:switch"}(o||(o={}));const v={id:"@jupyterlab/application-extension:main",requires:[n.IRouter,i.IWindowResolver,c.ITranslator],optional:[i.ICommandPalette,n.IConnectionLost],provides:n.ITreePathUpdater,activate:(e,t,a,s,l,d)=>{const c=s.load("jupyterlab");if(!(e instanceof n.JupyterLab))throw new Error(`${v.id} must be activated in JupyterLab.`);let u="",m="";const g=a.name;if(console.debug(`Starting application in workspace: "${g}"`),0!==e.registerPluginErrors.length){const t=h.createElement("pre",null,e.registerPluginErrors.map((e=>e.message)).join("\n"));(0,i.showErrorMessage)(c.__("Error Registering Plugins"),{message:t})}!function(e,t,a){const{commands:i,contextMenu:s,shell:l}=e,d=a.__("Main Area");i.addCommand(n.JupyterFrontEndContextMenu.contextMenu,{label:a.__("Shift+Right Click for Browser Menu"),isEnabled:()=>!1,execute:()=>{}}),e.contextMenu.addItem({command:n.JupyterFrontEndContextMenu.contextMenu,selector:"body",rank:1/0});const c=()=>{const t=e.contextMenuHitTest((e=>!!e.dataset.id));if(!t)return l.currentWidget;const a=(0,p.toArray)(l.widgets("main")).filter((e=>e.id===t.dataset.id));return a.length<1?l.currentWidget:a[0]},u=e=>{e.forEach((e=>e.close()))},m=(e,t)=>{switch(e.type){case"split-area":{const a=(0,p.iter)(e.children);let o,n=null;do{o=a.next(),o&&(n=m(o,t))}while(!n&&o);return n}case"tab-area":{const{id:a}=t;return e.widgets.some((e=>e.id===a))?e:null}default:return null}},g=e=>{const{id:t}=e,a=(e=>{var t;const{mainArea:a}=l.saveLayout();if(!a||"multiple-document"!==r.PageConfig.getOption("mode"))return null;const o=null===(t=a.dock)||void 0===t?void 0:t.main;return o?m(o,e):null})(e),o=a&&a.widgets||[],n=o.findIndex((e=>e.id===t));return n<0?[]:o.slice(n+1)};i.addCommand(o.activateNextTab,{label:a.__("Activate Next Tab"),execute:()=>{l.activateNextTab()}}),i.addCommand(o.activatePreviousTab,{label:a.__("Activate Previous Tab"),execute:()=>{l.activatePreviousTab()}}),i.addCommand(o.activateNextTabBar,{label:a.__("Activate Next Tab Bar"),execute:()=>{l.activateNextTabBar()}}),i.addCommand(o.activatePreviousTabBar,{label:a.__("Activate Previous Tab Bar"),execute:()=>{l.activatePreviousTabBar()}});const b="#jp-main-dock-panel .lm-DockPanel-tabBar.jp-Activity .lm-TabBar-tab";i.addCommand(o.close,{label:()=>a.__("Close Tab"),isEnabled:()=>{const e=c();return!!e&&e.title.closable},execute:()=>{const e=c();e&&e.close()}}),s.addItem({command:o.close,selector:b,rank:4}),i.addCommand(o.closeAll,{label:a.__("Close All Tabs"),execute:()=>{l.closeAll()}}),i.addCommand(o.closeOtherTabs,{label:()=>a.__("Close All Other Tabs"),isEnabled:()=>{const e=l.widgets("main");return!!e.next()&&!!e.next()},execute:()=>{const e=c();if(!e)return;const{id:t}=e,a=(0,p.toArray)(l.widgets("main")).filter((e=>e.id!==t));u(a)}}),s.addItem({command:o.closeOtherTabs,selector:b,rank:4}),i.addCommand(o.closeRightTabs,{label:()=>a.__("Close Tabs to Right"),isEnabled:()=>!!c()&&g(c()).length>0,execute:()=>{const e=c();e&&u(g(e))}}),s.addItem({command:o.closeRightTabs,selector:b,rank:5}),e.commands.addCommand(o.toggleLeftArea,{label:()=>a.__("Show Left Sidebar"),execute:()=>{l.leftCollapsed?l.expandLeft():(l.collapseLeft(),l.currentWidget&&l.activateById(l.currentWidget.id))},isToggled:()=>!l.leftCollapsed,isVisible:()=>!l.isEmpty("left")}),e.commands.addCommand(o.toggleRightArea,{label:()=>a.__("Show Right Sidebar"),execute:()=>{l.rightCollapsed?l.expandRight():(l.collapseRight(),l.currentWidget&&l.activateById(l.currentWidget.id))},isToggled:()=>!l.rightCollapsed,isVisible:()=>!l.isEmpty("right")}),e.commands.addCommand(o.togglePresentationMode,{label:()=>a.__("Presentation Mode"),execute:()=>{l.presentationMode=!l.presentationMode},isToggled:()=>l.presentationMode,isVisible:()=>!0}),e.commands.addCommand(o.setMode,{isVisible:e=>{const t=e.mode;return"single-document"===t||"multiple-document"===t},execute:e=>{const t=e.mode;if("single-document"!==t&&"multiple-document"!==t)throw new Error(`Unsupported application shell mode: ${t}`);l.mode=t}}),e.commands.addCommand(o.toggleMode,{label:a.__("Simple Interface"),isToggled:()=>"single-document"===l.mode,execute:()=>{const t="multiple-document"===l.mode?{mode:"single-document"}:{mode:"multiple-document"};return e.commands.execute(o.setMode,t)}}),t&&(t.addItem({command:o.activateNextTab,category:d}),t.addItem({command:o.activatePreviousTab,category:d}),t.addItem({command:o.activateNextTabBar,category:d}),t.addItem({command:o.activatePreviousTabBar,category:d}),t.addItem({command:o.close,category:d}),t.addItem({command:o.closeAll,category:d}),t.addItem({command:o.closeOtherTabs,category:d}),t.addItem({command:o.closeRightTabs,category:d}),t.addItem({command:o.toggleLeftArea,category:d}),t.addItem({command:o.toggleRightArea,category:d}),t.addItem({command:o.togglePresentationMode,category:d}),t.addItem({command:o.toggleMode,category:d}))}(e,l,c),e.shell.layoutModified.connect((()=>{e.commands.notifyCommandChanged()})),e.shell.modeChanged.connect(((e,a)=>{const o=r.PageConfig.getUrl({mode:a});t.navigate(o,{skipRouting:!0}),r.PageConfig.setOption("mode",a)})),e.shell.currentPathChanged.connect(((e,a)=>{const o=a.newValue,n=o||m,i=r.PageConfig.getUrl({treePath:n});t.navigate(i,{skipRouting:!0}),r.PageConfig.setOption("treePath",n),u=o})),d=d||n.ConnectionLost,e.serviceManager.connectionFailure.connect(((e,t)=>d(e,t,s)));const b=e.serviceManager.builder,y=()=>b.build().then((()=>(0,i.showDialog)({title:c.__("Build Complete"),body:h.createElement("div",null,c.__("Build successfully completed, reload page?"),h.createElement("br",null),c.__("You will lose any unsaved changes.")),buttons:[i.Dialog.cancelButton({label:c.__("Reload Without Saving"),actions:["reload"]}),i.Dialog.okButton({label:c.__("Save and Reload")})],hasClose:!0}))).then((({button:{accept:a,actions:o}})=>{a?e.commands.execute("docmanager:save").then((()=>{t.reload()})).catch((e=>{(0,i.showErrorMessage)(c.__("Save Failed"),{message:h.createElement("pre",null,e.message)})})):o.includes("reload")&&t.reload()})).catch((e=>{(0,i.showErrorMessage)(c.__("Build Failed"),{message:h.createElement("pre",null,e.message)})}));b.isAvailable&&b.shouldCheck&&b.getStatus().then((e=>{if("building"===e.status)return y();if("needed"!==e.status)return;const t=h.createElement("div",null,c.__("JupyterLab build is suggested:"),h.createElement("br",null),h.createElement("pre",null,e.message));(0,i.showDialog)({title:c.__("Build Recommended"),body:t,buttons:[i.Dialog.cancelButton(),i.Dialog.okButton({label:c.__("Build")})]}).then((e=>e.button.accept?y():void 0))}));const f=c.__("Are you sure you want to exit JupyterLab?\n\nAny unsaved changes will be lost.");return window.addEventListener("beforeunload",(t=>{if(e.status.isDirty)return t.returnValue=f})),function(e){if(m=e,!u){const a=r.PageConfig.getUrl({treePath:e});t.navigate(a,{skipRouting:!0}),r.PageConfig.setOption("treePath",e)}}},autoStart:!0},y={id:"@jupyterlab/application-extension:layout",requires:[d.IStateDB,n.ILabShell],activate:(e,t,a,o)=>{const i=e.started,s=e.commands,l=new n.LayoutRestorer({connector:t,first:i,registry:s});return l.fetch().then((e=>{a.restoreLayout(r.PageConfig.getOption("mode"),e),a.layoutModified.connect((()=>{l.save(a.saveLayout())}))})),l},autoStart:!0,provides:n.ILayoutRestorer},f={id:"@jupyterlab/application-extension:router",requires:[n.JupyterFrontEnd.IPaths],activate:(e,t)=>{const{commands:a}=e,o=t.urls.base,i=new n.Router({base:o,commands:a});return e.started.then((()=>{i.route(),window.addEventListener("popstate",(()=>{i.route()}))})),i},autoStart:!0,provides:n.IRouter},_={id:"@jupyterlab/application-extension:tree-resolver",autoStart:!0,requires:[n.IRouter],provides:n.JupyterFrontEnd.ITreeResolver,activate:(e,t)=>{const{commands:a}=e,n=new g.DisposableSet,i=new m.PromiseDelegate,s=new RegExp("/(lab|doc)(/workspaces/[a-zA-Z0-9-_]+)?(/tree/.*)?");n.add(a.addCommand(o.tree,{execute:async e=>{var t;if(n.isDisposed)return;const a=r.URLExt.queryStringToObject(null!==(t=e.search)&&void 0!==t?t:""),o=a["file-browser-path"]||"";delete a["file-browser-path"],n.dispose(),i.resolve({browser:o,file:r.PageConfig.getOption("treePath")})}})),n.add(t.register({command:o.tree,pattern:s}));const l=()=>{n.isDisposed||(n.dispose(),i.resolve(null))};return t.routed.connect(l),n.add(new g.DisposableDelegate((()=>{t.routed.disconnect(l)}))),{paths:i.promise}}},x={id:"@jupyterlab/application-extension:notfound",requires:[n.JupyterFrontEnd.IPaths,n.IRouter,c.ITranslator],activate:(e,t,a,o)=>{const n=o.load("jupyterlab"),r=t.urls.notFound;if(!r)return;const s=a.base,l=n.__("The path: %1 was not found. JupyterLab redirected to: %2",r,s);a.navigate(""),(0,i.showErrorMessage)(n.__("Path Not Found"),{message:l})},autoStart:!0},w={id:"@jupyterlab/application-extension:faviconbusy",requires:[n.ILabStatus],activate:async(e,t)=>{t.busySignal.connect(((e,t)=>{const a=document.querySelector('link[rel="icon"]'+(t?".idle.favicon":".busy.favicon"));if(!a)return;const o=document.querySelector("link"+(t?".busy.favicon":".idle.favicon"));o&&a!==o&&(a.rel="",o.rel="icon",o.parentNode.replaceChild(o,o))}))},autoStart:!0},I="@jupyterlab/application-extension:sidebar",T={id:I,autoStart:!0,requires:[l.ISettingRegistry,n.ILabShell,c.ITranslator],activate:(e,t,a,n,i)=>{const r=n.load("jupyterlab");let s={};const l=()=>{(0,p.each)(a.widgets("left"),(e=>{s[e.id]&&"right"===s[e.id]&&a.add(e,"right")})),(0,p.each)(a.widgets("right"),(e=>{s[e.id]&&"left"===s[e.id]&&a.add(e,"left")}))};a.layoutModified.connect(l),Promise.all([t.load(I),e.restored]).then((([e])=>{s=e.get("overrides").composite||{},e.changed.connect((e=>{s=e.get("overrides").composite||{},l()}))})),e.commands.addCommand(o.switchSidebar,{label:r.__("Switch Sidebar Side"),execute:()=>{const a=e.contextMenuHitTest((e=>!!e.dataset.id));let o,n;if(!a)return;{o=a.dataset.id;const e=document.getElementById("jp-left-stack"),t=document.getElementById(o);n=e&&t&&e.contains(t)?"right":"left"}const i=Object.assign({},s);return i[o]=n,t.set(I,"overrides",i)}}),e.contextMenu.addItem({command:o.switchSidebar,selector:".jp-SideBar .lm-TabBar-tab",rank:500})}},C={id:"@jupyterlab/application-extension:shell",activate:e=>{if(!(e.shell instanceof n.LabShell))throw new Error(`${C.id} did not find a LabShell instance.`);return e.shell},autoStart:!0,provides:n.ILabShell},P={id:"@jupyterlab/application-extension:status",activate:e=>{if(!(e instanceof n.JupyterLab))throw new Error(`${P.id} must be activated in JupyterLab.`);return e.status},autoStart:!0,provides:n.ILabStatus},S={id:"@jupyterlab/application-extension:info",activate:e=>{if(!(e instanceof n.JupyterLab))throw new Error(`${S.id} must be activated in JupyterLab.`);return e.info},autoStart:!0,provides:n.JupyterLab.IInfo},E={id:"@jupyterlab/apputils-extension:paths",activate:e=>{if(!(e instanceof n.JupyterLab))throw new Error(`${E.id} must be activated in JupyterLab.`);return e.paths},autoStart:!0,provides:n.JupyterFrontEnd.IPaths},L={id:"@jupyterlab/application-extension:property-inspector",autoStart:!0,requires:[n.ILabShell,c.ITranslator],optional:[n.ILayoutRestorer],provides:s.IPropertyInspectorProvider,activate:(e,t,a,o)=>{const n=a.load("jupyterlab"),i=new s.SideBarPropertyInspectorProvider(t,void 0,a);return i.title.icon=u.buildIcon,i.title.caption=n.__("Property Inspector"),i.id="jp-property-inspector",t.add(i,"right",{rank:100}),o&&o.add(i,"jp-property-inspector"),i}},R={id:"@jupyterlab/application-extension:logo",autoStart:!0,requires:[n.ILabShell],activate:(e,t)=>{const a=new b.Widget;u.jupyterIcon.element({container:a.node,elementPosition:"center",margin:"2px 2px 2px 8px",height:"auto",width:"16px"}),a.id="jp-MainLogo",t.add(a,"top",{rank:0})}},M=[v,y,f,_,x,w,T,C,P,S,E,L,R]}}]);
//# sourceMappingURL=5311.bundle.js.map