(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6735,6983],{76735:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var n=a(93226),o=a(80430),i=a(82090),s=a(58611),c=a(22982),l=a(59586),r=a(86082),d=a(93063),p=a(9234),u=a(27529);const m=new RegExp("/(notebooks|edit)/(.*)");var g;!function(e){e.toggleTop="application:toggle-top",e.toggleZen="application:toggle-zen",e.openLab="application:open-lab",e.openTree="application:open-tree"}(g||(g={}));const h={id:"@jupyterlab-classic/application-extension:logo",autoStart:!0,activate:e=>{const t=i.PageConfig.getBaseUrl(),a=document.createElement("a");a.href=`${t}classic/tree`,a.target="_blank",a.rel="noopener noreferrer";const n=new u.Widget({node:a});p.jupyterIcon.element({container:a,elementPosition:"center",padding:"2px 2px 2px 8px",height:"28px",width:"auto"}),n.id="jp-ClassicLogo",e.shell.add(n,"top",{rank:0})}},b={id:"@jupyterlab-classic/application-extension:opener",autoStart:!0,requires:[n.IRouter,s.IDocumentManager],activate:(e,t,a)=>{const{commands:n}=e,o="router:tree";n.addCommand(o,{execute:t=>{var n;const o=null!==(n=t.path.match(m))&&void 0!==n?n:[],[,,s]=o;if(!s)return;const c=decodeURIComponent(s),l=i.PathExt.extname(c);e.restored.then((()=>{".ipynb"===l?a.open(c,"Notebook",void 0,{ref:"_noref"}):a.open(c,"Editor",void 0,{ref:"_noref"})}))}}),t.register({command:o,pattern:m})}},x={id:"@jupyterlab-classic/application-extension:no-tabs-menu",requires:[l.IMainMenu],autoStart:!0,activate:(e,t)=>{t.tabsMenu.dispose()}},C={id:"@jupyterlab-classic/application-extension:pages",autoStart:!0,optional:[o.ICommandPalette,l.IMainMenu],activate:(e,t,a)=>{const n=i.PageConfig.getBaseUrl();e.commands.addCommand(g.openLab,{label:"Open JupyterLab",execute:()=>{window.open(`${n}lab`)}}),e.commands.addCommand(g.openTree,{label:"Open Files",execute:()=>{window.open(`${n}classic/tree`)}}),t&&[g.openLab,g.openTree].forEach((e=>{t.addItem({command:e,category:"View"})})),a&&a.viewMenu.addGroup([{command:g.openLab},{command:g.openTree}],0)}},v={id:"@jupyterlab-classic/application-extension:paths",autoStart:!0,provides:n.JupyterFrontEnd.IPaths,activate:e=>{if(!(e instanceof d.App))throw new Error(`${v.id} must be activated in JupyterLab Classic.`);return e.paths}},f={id:"@jupyterlab-classic/application-extension:router",autoStart:!0,provides:n.IRouter,requires:[n.JupyterFrontEnd.IPaths],activate:(e,t)=>{const{commands:a}=e,o=t.urls.base,i=new n.Router({base:o,commands:a});return e.started.then((()=>{i.route(),window.addEventListener("popstate",(()=>{i.route()}))})),i}},I={id:"@jupyterlab-classic/application-extension:session-dialogs",provides:o.ISessionContextDialogs,autoStart:!0,activate:()=>o.sessionContextDialogs},w={id:"@jupyterlab-classic/application-extension:shell",activate:e=>{if(!(e.shell instanceof d.ClassicShell))throw new Error(`${w.id} did not find a ClassicShell instance.`);return e.shell},autoStart:!0,provides:d.IClassicShell},y={id:"@jupyterlab-classic/application-extension:spacer",autoStart:!0,activate:e=>{const t=new u.Widget;t.id=o.DOMUtils.createDomID(),t.addClass("jp-ClassicSpacer"),e.shell.add(t,"top",{rank:1e4});const a=new u.Widget;a.id=o.DOMUtils.createDomID(),a.addClass("jp-ClassicSpacer"),e.shell.add(a,"menu",{rank:1e4})}},S={id:"@jupyterlab-classic/application-extension:tab-title",autoStart:!0,requires:[d.IClassicShell],activate:(e,t)=>{const a=()=>{const e=t.currentWidget;if(!(e instanceof c.DocumentWidget))return;const a=()=>{const t=i.PathExt.basename(e.context.path);document.title=t};e.context.pathChanged.connect(a),a()};t.currentChanged.connect(a),a()}},T={id:"@jupyterlab-classic/application-extension:title",autoStart:!0,requires:[d.IClassicShell],optional:[s.IDocumentManager,n.IRouter],activate:(e,t,a,n)=>{const o=new u.Widget;o.id="jp-title",e.shell.add(o,"top",{rank:10});const l=async()=>{const e=t.currentWidget;if(!(e&&e instanceof c.DocumentWidget))return;if(o.node.children.length>0)return;const l=document.createElement("h1");l.textContent=e.title.label,o.node.appendChild(l),o.node.style.marginLeft="10px",a&&(o.node.onclick=async()=>{var t;const o=await(0,s.renameDialog)(a,e.context.path);if(e&&e.activate(),!o)return;const c=i.PathExt.basename(o.path);if(l.textContent=c,!n)return;const r=null!==(t=n.current.path.match(m))&&void 0!==t?t:[],[,d,p]=r;if(!d||!p)return;const u=encodeURIComponent(o.path);n.navigate(`/classic/${d}/${u}`,{skipRouting:!0})})};t.currentChanged.connect(l),l()}},E={id:"@jupyterlab-classic/application-extension:top",requires:[d.IClassicShell],optional:[l.IMainMenu],activate:(e,t,a)=>{const n=t.top;e.commands.addCommand(g.toggleTop,{label:"Show Header",execute:()=>{n.setHidden(n.isVisible)},isToggled:()=>n.isVisible}),a&&a.viewMenu.addGroup([{command:g.toggleTop}],2);const o=()=>{"desktop"===e.format?t.expandTop():t.collapseTop()};e.formatChanged.connect(o),o()},autoStart:!0},j={id:"@jupyterlab-classic/application-extension:translator",activate:e=>new r.TranslationManager,autoStart:!0,provides:r.ITranslator},M={id:"@jupyterlab-classic/application-extension:zen",autoStart:!0,optional:[o.ICommandPalette,d.IClassicShell,l.IMainMenu],activate:(e,t,a,n)=>{const{commands:o}=e,i=document.documentElement,s=()=>{null==a||a.expandTop(),null==a||a.menu.setHidden(!1),c=!1};let c=!1;o.addCommand(g.toggleZen,{label:"Toggle Zen Mode",execute:()=>{c?(document.exitFullscreen(),s()):(i.requestFullscreen(),null==a||a.collapseTop(),null==a||a.menu.setHidden(!0),c=!0)}}),document.addEventListener("fullscreenchange",(()=>{document.fullscreenElement||s()})),t&&t.addItem({command:g.toggleZen,category:"Mode"}),n&&n.viewMenu.addGroup([{command:g.toggleZen}],3)}},k=[h,x,b,C,v,f,I,w,y,S,T,E,j,M]}}]);
//# sourceMappingURL=6735.bundle.js.map