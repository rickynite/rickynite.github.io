(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8462,2466],{88462:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var r,a=n(93226),i=n(80430),o=n(13631),d=n(39232),s=n(71187),c=n(50337),l=n(96987),v=n(86082),u=n(4324);!function(e){e.open="settingeditor:open",e.revert="settingeditor:revert",e.save="settingeditor:save"}(r||(r={}));const g={id:"@jupyterlab/settingeditor-extension:plugin",requires:[a.ILayoutRestorer,l.ISettingRegistry,o.IEditorServices,d.IStateDB,s.IRenderMimeRegistry,a.ILabStatus,v.ITranslator],optional:[i.ICommandPalette],autoStart:!0,provides:c.ISettingEditorTracker,activate:function(e,t,n,a,o,d,s,l,v){const m=l.load("jupyterlab"),{commands:p,shell:S}=e,_="setting-editor",I=a.factoryService.newInlineEditor,y=new i.WidgetTracker({namespace:_});let R;return t.restore(y,{command:r.open,args:e=>({}),name:e=>_}),p.addCommand(r.open,{execute:()=>{if(y.currentWidget)return void S.activateById(y.currentWidget.id);const t=g.id,a=e.restored;R=new c.SettingEditor({commands:{registry:p,revert:r.revert,save:r.save},editorFactory:I,key:t,registry:n,rendermime:d,state:o,translator:l,when:a});let v=null;R.commandsChanged.connect(((e,t)=>{t.forEach((e=>{p.notifyCommandChanged(e)})),R.canSaveRaw?v||(v=s.setDirty()):v&&(v.dispose(),v=null),R.disposed.connect((()=>{v&&v.dispose()}))})),R.id=_,R.title.icon=u.settingsIcon,R.title.label=m.__("Settings");const E=new i.MainAreaWidget({content:R});y.add(E),S.add(E)},label:m.__("Advanced Settings Editor")}),v&&v.addItem({category:m.__("Settings"),command:r.open}),p.addCommand(r.revert,{execute:()=>{var e;null===(e=y.currentWidget)||void 0===e||e.content.revert()},icon:u.undoIcon,label:m.__("Revert User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=y.currentWidget)||void 0===e?void 0:e.content.canRevertRaw)&&void 0!==t&&t}}),p.addCommand(r.save,{execute:()=>{var e;return null===(e=y.currentWidget)||void 0===e?void 0:e.content.save()},icon:u.saveIcon,label:m.__("Save User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=y.currentWidget)||void 0===e?void 0:e.content.canSaveRaw)&&void 0!==t&&t}}),y}},m=g}}]);
//# sourceMappingURL=8462.bundle.js.map