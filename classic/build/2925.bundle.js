(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2925,1767],{12925:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var s=n(93226),a=n(80430),l=n(82090),i=n(58611),o=n(97688),c=n(93063),r=n(87598),d=n(27529);const u="jp-ClassicKernelStatus-error",C="jp-ClassicKernelStatus-warn",p="jp-ClassicKernelStatus-info",h="jp-ClassicKernelStatus-fade",f={id:"@jupyterlab-classic/application-extension:checkpoints",autoStart:!0,requires:[i.IDocumentManager],optional:[c.IClassicShell],activate:(e,t,n)=>{const{shell:s}=e,i=new d.Widget;i.id=a.DOMUtils.createDomID(),i.addClass("jp-ClassicCheckpoint"),e.shell.add(i,"top",{rank:100});const o=async()=>{const e=s.currentWidget;if(!e)return;const n=t.contextForWidget(e);null==n||n.fileChanged.disconnect(o),null==n||n.fileChanged.connect(o);const a=await(null==n?void 0:n.listCheckpoints());if(!a)return;const c=a[a.length-1];i.node.textContent=`Last Checkpoint: ${l.Time.formatHuman(new Date(c.last_modified))}`};n&&n.currentChanged.connect(o),new r.Poll({auto:!0,factory:()=>o(),frequency:{interval:2e3,backoff:!1},standby:"when-hidden"})}},k={id:"@jupyterlab-classic/application-extension:kernel-logo",autoStart:!0,requires:[c.IClassicShell],activate:(e,t)=>{const{serviceManager:n}=e,s=l.PageConfig.getBaseUrl();let a;const i=async()=>{var l,c,r,u,C;a&&(a.dispose(),a.parent=null);const p=t.currentWidget;if(!(p instanceof o.NotebookPanel))return;await p.sessionContext.ready,p.sessionContext.kernelChanged.disconnect(i),p.sessionContext.kernelChanged.connect(i);const h=null!==(r=null===(c=null===(l=p.sessionContext.session)||void 0===l?void 0:l.kernel)||void 0===c?void 0:c.name)&&void 0!==r?r:"",f=null===(C=null===(u=n.kernelspecs)||void 0===u?void 0:u.specs)||void 0===C?void 0:C.kernelspecs[h];if(!f)return;let k=f.resources["logo-64x64"];if(!k)return;const v=k.indexOf("kernelspecs");k=s+k.slice(v);const g=document.createElement("div"),m=document.createElement("img");m.src=k,m.title=f.display_name,g.appendChild(m),a=new d.Widget({node:g}),a.addClass("jp-ClassicKernelLogo"),e.shell.add(a,"top",{rank:10010})};t.currentChanged.connect(i)}},v={id:"@jupyterlab-classic/application-extension:kernel-status",autoStart:!0,requires:[c.IClassicShell],activate:(e,t)=>{const n=new d.Widget;n.addClass("jp-ClassicKernelStatus"),e.shell.add(n,"menu",{rank:10010});const s=e=>{const t=e.kernelDisplayStatus;let s=`Kernel ${l.Text.titleCase(t)}`;switch(n.removeClass(u),n.removeClass(C),n.removeClass(p),n.removeClass(h),t){case"busy":case"idle":s="",n.addClass(h);break;case"dead":case"terminating":n.addClass(u);break;case"unknown":n.addClass(C);break;default:n.addClass(p),n.addClass(h)}n.node.textContent=s};t.currentChanged.connect((async()=>{const e=t.currentWidget;e instanceof o.NotebookPanel&&e.sessionContext.statusChanged.connect(s)}))}},g={id:"@jupyterlab-classic/application-extension:paths",activate:e=>{if(!(e instanceof c.App))throw new Error(`${g.id} must be activated in JupyterLab Classic.`);return e.paths},autoStart:!0,provides:s.JupyterFrontEnd.IPaths},m={id:"@jupyterlab-classic/application-extension:shell",activate:e=>{if(!(e.shell instanceof c.ClassicShell))throw new Error(`${m.id} did not find a ClassicShell instance.`);return e.shell},autoStart:!0,provides:c.IClassicShell},b=[f,k,v]}}]);
//# sourceMappingURL=2925.bundle.js.map