// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: orangetry gallery 56.ggsk
// Generated 2026-10-28T09:25:24

function pano2vrSkin(player,base) {
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_image_popup_1', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._mobile_ui=document.createElement('div');
		el.ggId="mobile_ui";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container mobile_ui";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 54px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_ui.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mobile_ui.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile_svg_14=document.createElement('div');
		els=me._mobile_svg_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTE4OCAzMjA4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
			'ExMjkuMDQgMTAzMS45OSAxMTU5IDEzNDIgMTA0NC42NCAyMDU2LjQyIDExMjYuNiAyNDg2LjM1IDExODggMzIwOCAwIDMyMDggNjEgMCAxMTg4IDAgMTEyOS4wNCAxMDMxLjk5Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mobile_svg_14__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 14";
		el.ggDy=-181;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 1893px;';
		hs+='left : -580px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 680px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._mobile_ui.appendChild(me._mobile_svg_14);
		el=me._mobile_svg_16=document.createElement('div');
		els=me._mobile_svg_16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzM0MSAxMTM3LjUzIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
			'M9IjYyNCAxMDY2IDYyNCAxMDY1LjU4IDY1Ni4wMyAxMDYzLjY0IDk0OC4zOCAxMDM5IDIwNzAuNTcgMTA4OS43NiAyNTgyIDExMzcuNTMgMzI0MSAxMDk1IDMzNDEgMzQgMCAwIDAgMTA5NCA2MjQgMTA2NiIvPgogPC9nPgo8L3N2Zz4K';
		me._mobile_svg_16__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 16";
		el.ggDx=305;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 764px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -670px;';
		hs+='visibility : hidden;';
		hs+='width : 2266px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mobile_ui.appendChild(me._mobile_svg_16);
		el=me._mobile_svg_13=document.createElement('div');
		els=me._mobile_svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzI0NyAxMzcwLjY4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
			'M9IjI1NjAuODEgNzAuODMgMjE3Ni4wMSAzNi4zMyAxODY1LjYxIDEwNSAxMTUxLjU4IDg4LjM0IDcwMiAxMzUuNjggMCAwIDAgMTM3MC42OCAzMjQ3IDEzNzAuNjggMzIwOCAwIDI1NjAuODEgNzAuODMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._mobile_svg_13__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 13";
		el.ggDx=-88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -897px;';
		hs+='height : 1079px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 2262px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mobile_ui.appendChild(me._mobile_svg_13);
		el=me._mobile_svg_15=document.createElement('div');
		els=me._mobile_svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTE1MSAzMjA4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
			'gyLjMyIDY0Ny4xOSA0Mi4yMiAxMDMxLjk5IDg3IDEzNDAgNDkgMTY1NCAxMDIuNjggMjA1Ni40MiAxNC44NCAyMjQ4IDQzLjk3IDI0ODYuMzUgMCAzMjA4IDExNTEgMzIwOCAxMTI2IDAgMCAwIDgyLjMyIDY0Ny4xOSIvPgogPC9nPgo8L3N2Zz4K';
		me._mobile_svg_15__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 15";
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 1247px;';
		hs+='position : absolute;';
		hs+='right : -369px;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 437px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._mobile_ui.appendChild(me._mobile_svg_15);
		el=me._mobile_svg_17=document.createElement('div');
		els=me._mobile_svg_17__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNzEzIDIxOSIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm'+
			'9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZTFlMGRjOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI0IDguNTEgMCAyMTkgMjkxIDIwNC4zIDQzNCAyMDMuNTIgNjMyIDE4MS44NiA3MTMgMTc3Ljk5IDcwMiAwIDI0IDguNTEiLz4KICA8Zz4KICAgPGxpbmUgeDE9IjE1MC41IiB5Mj0iMzkuNSIgeDI9IjIxMC41MyIgeTE9IjM5LjUiIGNsYXNzPSJjbHMtMyIvPgogICA8cG9seWdvbiBj'+
			'bGFzcz0iY2xzLTEiIHBvaW50cz0iMjA3LjIyIDQzLjU5IDIwNi41MyA0Mi44NiAyMTAuMTUgMzkuNSAyMDYuNTMgMzYuMTQgMjA3LjIyIDM1LjQxIDIxMS42MSAzOS41IDIwNy4yMiA0My41OSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mobile_svg_17__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg location_title";
		el.ggType='svg';
		hs ='';
		hs+='height : 98px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 349px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_17.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile_svg_18=document.createElement('div');
		els=me._mobile_svg_18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNzguODIgMTQuMDIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8Zz4KICAgPHBhdGggZD0ibTcuMTQsMTEuNDlWMi'+
			'4wOGgtMi43MnYzLjMxYzAsNC43OS0xLjE3LDYuMS0zLjU0LDYuMWgtLjg4di0xLjk4aC4zMmMxLjE0LDAsMS45NS0uNjcsMS45NS00LjI0Vi4xaDcuMDl2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtMTguOSwxMC4zOWMtLjc3Ljc3LTEuNzMsMS4yLTMuMDQsMS4ycy0yLjI5LS40My0zLjA2LTEuMmMtMS4xNC0xLjE0LTEuMTUtMi40Mi0xLjE1LTQuNTlzLjAyLTMuNDYsMS4xNS00LjU5Yy43Ny0uNzcsMS43NS0xLjIsMy4wNi0xLjJzMi4yNy40MywzLjA0LDEuMmMxLjE0LDEuMTQsMS4xNywyLjQyLDEuMTcsNC41OXMtLjAzLDMuNDYtMS4xNyw0LjU5Wm0tMS42Mi03'+
			'Ljc5Yy0uMzItLjM3LS44Mi0uNjEtMS40Mi0uNjFzLTEuMS4yNC0xLjQ0LjYxYy0uNDIuNDgtLjU0LDEuMDItLjU0LDMuMnMuMTMsMi43MS41NCwzLjE5Yy4zNC4zNy44My42MiwxLjQ0LjYyczEuMS0uMjYsMS40Mi0uNjJjLjQyLS40OC41Ni0xLjAxLjU2LTMuMTlzLS4xNC0yLjcyLS41Ni0zLjJaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTIyLjM3LDExLjQ5Vi4xaDIuMjJ2MTEuNGgtMi4yMlptNi4yNCwwbC00LTUuOTdMMjguMjkuMWgyLjY2bC0zLjgzLDUuMzUsNC4yMSw2LjA1aC0yLjcyWiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0zOS40NywxMS40OWwtLjY3LTIuMD'+
			'JoLTQuMDVsLS42OSwyLjAyaC0yLjMyTDM1Ljg5LjFoMS43NWw0LjE2LDExLjRoLTIuMzJabS0yLjY2LTguMDRsLTEuNDQsNC4xNWgyLjgzbC0xLjM5LTQuMTVaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTUwLjY5LDE0LjAydi0yLjUzaC03LjQ5Vi4xaDIuMjN2OS40MWgzLjg2Vi4xaDIuMjJ2OS40MWgxLjMzdjQuNTFoLTIuMTVaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTYxLjAxLDExLjQ5di03LjMxbC00LjQzLDcuMzFoLTEuOTlWLjFoMi4yM3Y3LjNMNjEuMjUuMWgxLjk4djExLjRoLTIuMjJaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTY3LjcxLDExLjQ5'+
			'aC0yLjY0bDIuMzUtNC43NGMtMS4yLS41NC0xLjk1LTEuNjYtMS45NS0zLjExLDAtMi4xOCwxLjU1LTMuNTUsMy43NS0zLjU1aDQuNDJ2MTEuNGgtMi4yMnYtNC4yOWgtMS44MmwtMS44Nyw0LjI5Wm0zLjctOS40NGgtMi4wOGMtLjk5LDAtMS42NS42Mi0xLjY1LDEuNTdzLjY2LDEuNjIsMS42NSwxLjYyaDIuMDh2LTMuMTlaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTc2LjQ1LDcuMTV2LTIuMzdoMi4zN3YyLjM3aC0yLjM3Wm0wLDQuMzR2LTIuMzdoMi4zN3YyLjM3aC0yLjM3WiIgY2xhc3M9ImNscy0xIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._mobile_svg_18__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 18";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 29px;';
		hs+='position : absolute;';
		hs+='right : 274px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_18.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_svg_17.appendChild(me._mobile_svg_18);
		me._mobile_ui.appendChild(me._mobile_svg_17);
		el=me._mobile_location_title=document.createElement('div');
		els=me._mobile_location_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="mobile_location_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 29px;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 319px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Pobeda\", sans-serif; font-size: clamp(30px, 6vw, 60px); line-height: 0.85; font-weight: 300; color: #111; -webkit-text-stroke: 1px #111; background: transparent; border: none; box-shadow: none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 319px;';
		hs+='height: 60px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mobile_location_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mobile_location_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._mobile_location_title.ggUpdateText();
		});
		el.appendChild(els);
		me._mobile_location_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_location_title.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_ui.appendChild(me._mobile_location_title);
		el=me._mobile_svg_1=document.createElement('div');
		els=me._mobile_svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgOTUuNiAxNTYuMzIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L'+
			'7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Im00OC42OCwxMzMuNmMwLDYuOS0xLjUxLDEyLjMyLTQuNTEsMTYuMjgtMy4wMSwzLjk2LTguMjUsNS45NC0xNS43Myw1Ljk0aC03LjQ4Yy03LjQ4LDAtMTIuNzYtMS45OC0xNS44NC01Ljk0cy00LjYyLTkuMzgtNC42Mi0xNi4yOFYyMi45NGMwLTcuMDQsMS41NC0xMi41NCw0LjYyLTE2LjVTMTMuNDguNSwyMC45Ni41aDcuNDhjNy40OCwwLDEyLjcyLDEuOTgsMTUuNzMsNS45NCwzLDMuOTYsNC41MSw5LjQ2LDQuNTEsMTYuNXYxMTAuNjZabS02LjYtMTExLjk4YzAtMy44MS0uOTktNy4xOC0yLjk3LTEwLjEyLTEuOTgt'+
			'Mi45My01LjMyLTQuNC0xMC4wMS00LjRoLTkuMDJjLTQuNywwLTguMDMsMS40Ny0xMC4wMSw0LjQtMS45OCwyLjk0LTIuOTcsNi4zMS0yLjk3LDEwLjEydjExMy4wOGMwLDMuODIuOTksNy4xOSwyLjk3LDEwLjEyLDEuOTgsMi45NCw1LjMxLDQuNCwxMC4wMSw0LjRoOS4wMmM0LjY5LDAsOC4wMy0xLjQ2LDEwLjAxLTQuNCwxLjk4LTIuOTMsMi45Ny02LjMsMi45Ny0xMC4xMlYyMS42MloiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtOTUuMSwxLjgydjE1Mi42OGgtNi42VjguNDJoLTE4LjkyVjEuODJoMjUuNTJaIiBjbGFzcz0iY2xzLTEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._mobile_svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -28px;';
		hs+='height : 100px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_ui.appendChild(me._mobile_svg_1);
		el=me._mobile_svg_5=document.createElement('div');
		els=me._mobile_svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzgxLjkgNzI2LjM1IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQogICAgPC9zdHlsZT4KID'+
			'wvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxnPgogICA8cGF0aCBkPSJtMzc5LjksODMuMzVjLTYyLjQ2LDI5LjMyLTgxLDI4LjU5LTg2LDIyLTYuODQtOS4wMSw3Ljk2LTMzLjg3LDIyLTQ4LDEzLjI3LTEzLjM1LDMyLjA2LTIzLjMzLDM1LTIwLDMuMywzLjc0LTExLjk4LDI1LjgtMzEsNDEtMzAuODIsMjQuNjQtNzYuOTcsMzUuNy04NywyMi02LjA4LTguMyw2LjA2LTI2LjgyLDMtMjUtNDQuNSwyNi41LTEwMC41LDczLjUtMTc5LjUsMTc5LjUtMTEuMDcsMTQuODUtMzcuMTcsNTUuOTctMzEuNSw4Ni41LDEuOTEsMTAuMjcsNC43MSwyNS40'+
			'LDE1LDMxLDM1LjM5LDE5LjI4LDE0NS40MS04MS44NSwxMzAtMTEzLTcuNDQtMTUuMDQtNDQuMjYtMTQuMDUtNjktNi02Ni41OSwyMS42Ny0xMTguMDUsMTE4LjAxLTkyLDIwMiwyMS4wMiw2Ny43OCw4OS4xMSwxMTYuNTMsMTY5LDExOSIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0zMS4xNiwyODEuNzVjNDEuNDktNDcuNjksNzQuOTEtODMuNyw5Ni41OC0xMDYuNjIsMTIuMzQtMTMuMDUsNzMuMzYtNzcuMzYsOTkuMzktMTQ3LjUyLDMuODUtMTAuMzgsNy4yMi0yMS42NSw0LjE0LTI0Ljc3LTYuNTgtNi42OS0zOC41OSwyOC4zNC00OS44NSw0MC42Ny0yNy43NiwzMC4zOS03Ni44OSw5NS'+
			'4yMS0xNDQuMDEsMjQxLjY4IiBjbGFzcz0iY2xzLTEiLz4KICA8L2c+CiAgPHBhdGggZD0ibTc0LjksNzI0LjM1YzIzLjIzLTE3Ljk1LDUyLjE3LTM3LjYxLDg3LTU2LDM4LjI4LTIwLjIxLDczLjk2LTMzLjc2LDEwNC00MyIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mobile_svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 285px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 107px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_ui.appendChild(me._mobile_svg_5);
		el=me._mobile_svg_8=document.createElement('div');
		els=me._mobile_svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzA1LjExIDE0MiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iMTkwLjUiIHkyPSIuNSIgeDI9IjI4MS41IiB5MT0iMTQxLjUiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIxMy41IiB5Mj0iNTQuNzkiIHgyPSIxMy41IiB5MT0iMjguNSIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9Ii41IiB5Mj0iNDEuNSIgeDI9IjI3LjQ3IiB5MT0iNDEuNSIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjM3LjM5IiB5Mj0iNDEuNSIgeDI9IjMwNC42MSIgeTE9IjQxLjUiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._mobile_svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 8";
		el.ggDx=-88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 102px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : hidden;';
		hs+='width : 277px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mobile_ui.appendChild(me._mobile_svg_8);
		el=me._mobile_svg_6=document.createElement('div');
		els=me._mobile_svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTExLjI4IDMzOS43NiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iLjUiIHkyPSIzMzkuMjYiIHgyPSIxMTAuNzgiIHkxPSIyODQuMjYiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIyNyIgeTI9IjIxOC45NiIgeDI9IjI3IiB5MT0iMTkwLjc2IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iNDEuMSIgeTI9IjIwNC44NiIgeDI9IjEyLjkiIHkxPSIyMDQuODYiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIyNi43OSIgeTI9Ijc4LjA3IiB4Mj0iMjYuNzkiIHkxPSI0OS44NyIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjQwLjg5IiB5Mj0iNjMuOTciIHgyPSIxMi42OSIg'+
			'eTE9IjYzLjk3IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMjciIHkyPSI5MS41OSIgeDI9IjI3IiB5MT0iMTYxLjMyIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMjciIHkyPSIuNSIgeDI9IjI3IiB5MT0iMzYuNDEiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._mobile_svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 6";
		el.ggDy=61;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 229px;';
		hs+='position : absolute;';
		hs+='right : -52px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._mobile_svg_4=document.createElement('div');
		els=me._mobile_svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTMyLjYgMTQ2LjYiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogMy42cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+Ci'+
			'A8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cGF0aCBkPSJtMTMwLjgsMS44Yy0yMC44NiwxMy45My00Ny4wMiwzNC4yOS03Myw2M0MzMS40Myw5My45MywxMy42MiwxMjIuNDIsMS44LDE0NC44IiBjbGFzcz0iY2xzLTEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._mobile_svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 4";
		el.ggDx=-385;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 66px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -259px;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mobile_svg_6.appendChild(me._mobile_svg_4);
		me._mobile_ui.appendChild(me._mobile_svg_6);
		el=me._mobile_svg_19=document.createElement('div');
		els=me._mobile_svg_19__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjM5LjY4IDE1Ni4yMyIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iMTAwLjEyIiB5Mj0iLjUiIHgyPSIxMDAuMTIiIHkxPSIxNTUuNzMiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSI1MC42MiIgeTI9Ijg5LjIzIiB4Mj0iMjM5LjE4IiB5MT0iODkuMjMiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIuNSIgeTI9Ijg5LjMzIiB4Mj0iMjYuMDEiIHkxPSI4OS4zMyIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjEzLjI2IiB5Mj0iMTAyLjA5IiB4Mj0iMTMuMjYiIHkxPSI3Ni41NyIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mobile_svg_19__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -26px;';
		hs+='height : 126px;';
		hs+='left : -106px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 283px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_19.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_ui.appendChild(me._mobile_svg_19);
		el=me._mobile_svg_20=document.createElement('div');
		els=me._mobile_svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzYgNzAiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxjaXJjbGUgY3'+
			'g9IjE3LjUiIHI9IjE3IiBjeT0iMTcuNSIgY2xhc3M9ImNscy0xIi8+CiAgPGNpcmNsZSBjeD0iMTgiIHI9IjE3IiBjeT0iMzUiIGNsYXNzPSJjbHMtMSIvPgogIDxjaXJjbGUgY3g9IjE4LjUiIHI9IjE3IiBjeT0iNTIuNSIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mobile_svg_20__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 20";
		el.ggDx=-61;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 7px;';
		hs+='height : 46px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mobile_ui.appendChild(me._mobile_svg_20);
		el=me._mobile_svg_7=document.createElement('div');
		els=me._mobile_svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjgzLjc4IDEuNSIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iLjUiIHkyPSIxIiB4Mj0iNjIuODMiIHkxPSIxIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iNTIzLjQxIiB5Mj0iLjUiIHgyPSI2ODMuMjgiIHkxPSIuNSIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mobile_svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mobile_Svg 7";
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 11px;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 422px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mobile_svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_svg_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._mobile_ui.appendChild(me._mobile_svg_7);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container locations_panel";
		el.ggType='container';
		hs ='';
		hs+='height : 328px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._mobile_locations=document.createElement('div');
		els=me._mobile_locations__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="mobile_locations";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text list_locations";
		el.ggType='text';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 201px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		hs+='#${ROOT_ID} { display: flex; } @media (min-width: 1200px) { #${ROOT_ID} { display: none !important; } } @media (max-width: 699px) { #${ROOT_ID} { display: none !important; } }';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 10px;';
		hs+='height: 10px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";(function(){

/* =========================================================
НАСТРОЙКИ
========================================================= */

var ROOT_ID =
"sfu-location-menu-mobile";

var STYLE_ID =
"sfu-location-menu-style-mobile";

var LOCATIONS = [
    {
        key:"library",
        label:"Библиотека",
        nodes:{
            "2011":"node18",
            "2026":"node1",
            "future":"node10"
        }
    },
    {
        key:"well",
        label:"«Колодцы»",
        nodes:{
            "2011":"node20",
            "2026":"node5",
            "future":"node13"
        }
    },
    {
        key:"dashi",
        label:"«Трансформация»",
        nodes:{
            "2011":"node17",
            "2026":"node2",
            "future":"node24"
        }
    },
    {
        key:"pyramid",
        label:"«Пирамида»",
        nodes:{
            "2011":"node22",
            "2026":"node7",
            "future":"node15"
        }
    },
    {
        key:"inig",
        label:"ИниГ",
        nodes:{
            "2011":"node16",
            "2026":"node3",
            "future":"node11"
        }
    },
    {
        key:"ifksit",
        label:"Спорткомплекс",
        nodes:{
            "2011":"node19",
            "2026":"node4",
            "future":"node12"
        }
    },
    {
        key:"stadium",
        label:"Стадион",
        nodes:{
            "2011":"node23",
            "2026":"node8",
            "future":"node9"
        }
    },
    {
        key:"dorm",
        label:"Общежития",
        nodes:{
            "2011":"node21",
            "2026":"node6",
            "future":"node14"
        }
    }
];

var ERAS = [

    {
        key:"2011",
        label:"2011"
    },

    {
        key:"2026",
        label:"2026"
    },

    {
        key:"future",
        label:"Фантастическое\nбудущее"
    }

];


/* =========================================================
УДАЛЯЕМ СТАРУЮ ВЕРСИЮ
========================================================= */

var oldRoot =
document.getElementById(
ROOT_ID
);

if (oldRoot) {

    oldRoot.remove();

}

var oldStyle =
document.getElementById(
STYLE_ID
);

if (oldStyle) {

    oldStyle.remove();

}


/* =========================================================
CSS
========================================================= */

var style =
document.createElement("style");

style.id =
STYLE_ID;

style.textContent = `

/* =========================================================
ТОЛЬКО MOBILE
========================================================= */

@media (max-width:699px) {

    #sfu-year-switcher {

        display: none !important;

    }


    .location_title {

        transform:
            scale(1) !important;

        transform-origin:
            right top !important;

    }


    .location_title,
    .location_title div,
    .location_title span,
    .location_title .ggskin_text {

        font-size:
            26px !important;

        line-height:
            1.05 !important;

    }

}


/* =========================================================
ОСНОВНАЯ ПЛАШКА
========================================================= */

#${ROOT_ID} {

    position: fixed;

    left: 0;
    bottom: 0;

    width: 100%;
    height: 365px;

    z-index: 1000000;

    box-sizing: border-box;

    padding:
        20px
        24px
        28px;

    background:
        #e2e1dd;

    color:
        #242527;

    font-family:
        Arial,
        sans-serif;

    transform:
        translateY(205px);

    transition:
        transform .42s
        cubic-bezier(.2,.8,.2,1);

    pointer-events: auto;

    clip-path: polygon(

        0% 3%,

        8% 1.5%,

        25% 2.5%,

        42% 0%,

        59% 2%,

        77% .8%,

        93% 2.5%,

        100% 3%,

        100% 100%,

        0% 100%

    );

}


/* =========================================================
ОТКРЫТО
========================================================= */

#${ROOT_ID}.open {

    transform:
        translateY(0);

}


/* =========================================================
РУЧКА
========================================================= */

#${ROOT_ID} .mobile-handle-area {

    position: absolute;

    left: 0;
    top: 0;

    width: 100%;
    height: 34px;

    cursor: pointer;

    z-index: 20;

}


#${ROOT_ID} .mobile-handle {

    position: absolute;

    left: 50%;
    top: 14px;

    width: 48px;
    height: 5px;

    transform:
        translateX(-50%);

    background:
        rgba(36,37,39,.32);

    border-radius:
        999px;

}


/* =========================================================
ВЕРХНЯЯ СТРОКА
========================================================= */

#${ROOT_ID} .mobile-top-row {

    position: relative;

    width: 100%;

    margin-top: 27px;

    display: flex;

    align-items: center;
    justify-content: center;

    box-sizing: border-box;

}


/* =========================================================
КНОПКА ЗВУКА
========================================================= */

#${ROOT_ID} .mobile-mute {

    position: absolute;

    left: 5px;
    top: 50%;

    transform:
        translateY(-50%);

    width: 42px;
    height: 42px;

    display: flex;

    align-items: center;
    justify-content: center;

    appearance: none;
    -webkit-appearance: none;

    border: 0;

    padding: 0;
    margin: 0;

    background:
        transparent;

    cursor: pointer;

    z-index: 5;

}


/* =========================================================
РУПОР — ЗВУК ВКЛЮЧЕН
========================================================= */

#${ROOT_ID} .mobile-mute::before {

    content: "";

    display: block;

    width: 27px;
    height: 27px;

    background-repeat:
        no-repeat;

    background-position:
        center;

    background-size:
        contain;

    background-image:
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 12.5h6L18 6v20l-8-6.5H4z' fill='%23d8561f'/%3E%3Cpath d='M21 11c3 3 3 7 0 10' fill='none' stroke='%23d8561f' stroke-width='2.3' stroke-linecap='round'/%3E%3Cpath d='M25 8c5 5 5 11 0 16' fill='none' stroke='%23d8561f' stroke-width='2.3' stroke-linecap='round'/%3E%3C/svg%3E");

}


/* =========================================================
РУПОР — ЗВУК ВЫКЛЮЧЕН
========================================================= */

#${ROOT_ID} .mobile-mute.muted::before {

    background-image:
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M4 12.5h6L18 6v20l-8-6.5H4z' fill='%23d8561f'/%3E%3Cpath d='M21 11l8 10' fill='none' stroke='%23d8561f' stroke-width='2.4' stroke-linecap='round'/%3E%3Cpath d='M29 11l-8 10' fill='none' stroke='%23d8561f' stroke-width='2.4' stroke-linecap='round'/%3E%3C/svg%3E");

}


/* =========================================================
ГОДЫ
========================================================= */

#${ROOT_ID} .mobile-years {

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 22px;

    transform:
        translateX(20px);


}


/* =========================================================
КНОПКА ГОДА
========================================================= */

#${ROOT_ID} .mobile-year {

    position: relative;

    display: inline-flex;

    align-items: center;
    justify-content: center;

    appearance: none;
    -webkit-appearance: none;

    border: 0;

    outline: 0;

    margin: 0;

    padding:
        7px
        8px;

    background:
        transparent;

    color:
        #242527;

    font-family:
        'Pobeda',
        Arial,
        sans-serif;

    font-size:
        23px;

    font-weight:
        400;

    line-height: 1;

    white-space: nowrap;

    cursor: pointer;

    opacity:
        .48;

}


/* =========================================================
АКТИВНЫЙ ГОД
========================================================= */

#${ROOT_ID} .mobile-year[data-era="future"] { font-size: 16px; letter-spacing: -.7px; max-width: 124px; white-space: pre-line; text-align: center; line-height: .9; }

#${ROOT_ID}
.mobile-year.active {

    opacity: 1;

    font-weight: 700;

}


#${ROOT_ID}
.mobile-year.active::after {

    content: "";

    position: absolute;

    left: -8px;
    right: -8px;

    top: -5px;
    bottom: -5px;

    border:
        3px solid
        #d8561f;

    border-radius:
        50%;

    transform:
        rotate(-2deg);

    pointer-events: none;

}


/* =========================================================
ЛОКАЦИИ
========================================================= */

#${ROOT_ID} .locations-content {

    position: relative;

    width: 100%;

    margin-top: 37px;

}


/* =========================================================
ЗАГОЛОВОК
========================================================= */

#${ROOT_ID} .mobile-title {

    width: 100%;

    margin:
        0
        0
        22px
        0;

    font-family:
        'Pobeda',
        Arial,
        sans-serif;

    font-size:
        24px;

    font-weight:
        400;

    line-height:
        1;

    color:
        #242527;

    text-align:
        center;

}


/* =========================================================
СЕТКА ЛОКАЦИЙ
========================================================= */

#${ROOT_ID} .mobile-grid {

    position: relative;

    left: 8px;

    display: grid;

    grid-template-columns:
        max-content
        max-content;

    justify-content:
        center;

    column-gap:
        42px;

    row-gap:
        15px;

}


/* =========================================================
ЛОКАЦИЯ
========================================================= */

#${ROOT_ID} .mobile-location {

    position: relative;

    display: inline-flex;

    align-items: center;
    justify-content: flex-start;

    width: max-content;

    box-sizing: border-box;

    appearance: none;
    -webkit-appearance: none;

    border: 0;

    outline: 0;

    margin: 0;

    padding:
        5px
        8px;

    background:
        transparent;

    color:
        #242527;

    font-family:
        Arial,
        sans-serif;

    font-size:
        13px;

    font-weight:
        400;

    line-height:
        1;

    white-space:
        nowrap;

    cursor:
        pointer;

    opacity:
        .60;

}


/* =========================================================
АКТИВНАЯ ЛОКАЦИЯ
========================================================= */

#${ROOT_ID} .mobile-location[data-location="dashi"] {
    transform: translateX(-.75em);
}
#${ROOT_ID} .mobile-location[data-location="pyramid"] {
    transform: translateX(-.5em);
}
#${ROOT_ID} .mobile-location[data-location="well"] {
    transform: translateX(-.5em);
}

#${ROOT_ID}
.mobile-location.active {

    opacity: 1;

    font-weight: 700;

}


#${ROOT_ID}
.mobile-location.active::after {

    content: "";

    position: absolute;

    left: -7px;
    right: -7px;

    top: -5px;
    bottom: -5px;

    border:
        3px solid
        #d8561f;

    border-radius:
        50%;

    transform:
        rotate(-2deg);

    pointer-events: none;

}


/* =========================================================
НЕ MOBILE
========================================================= */

@media (min-width:700px) {

    #${ROOT_ID} {

        display:
            none !important;

    }

}

`;

document.head.appendChild(
style
);


/* =========================================================
СОЗДАЁМ ПЛАШКУ
========================================================= */

var root =
document.createElement("div");

root.id =
ROOT_ID;


/* =========================================================
РУЧКА
========================================================= */

var handleArea =
document.createElement("div");

handleArea.className =
"mobile-handle-area";

var handle =
document.createElement("div");

handle.className =
"mobile-handle";

handleArea.appendChild(
handle
);

root.appendChild(
handleArea
);


/* =========================================================
ВЕРХНЯЯ СТРОКА
========================================================= */

var topRow =
document.createElement("div");

topRow.className =
"mobile-top-row";


/* =========================================================
ЗВУК
========================================================= */

var muteButton =
document.createElement("button");

muteButton.type =
"button";

muteButton.className =
"mobile-mute";

muteButton.setAttribute(
"aria-label",
"Включить или выключить звук"
);


/* =========================================================
ГОДЫ
========================================================= */

var years =
document.createElement("div");

years.className =
"mobile-years";

ERAS.forEach(function(era){

    var button =
        document.createElement("button");

    button.type =
        "button";

    button.className =
        "mobile-year";

    button.dataset.era =
        era.key;

    button.textContent =
        era.label;


    button.addEventListener(
        "click",
        function(event){

            event.preventDefault();

            event.stopPropagation();

            switchEra(
                era.key
            );

        }
    );


    years.appendChild(
        button
    );

});


topRow.appendChild(
muteButton
);

topRow.appendChild(
years
);

root.appendChild(
topRow
);


/* =========================================================
ЛОКАЦИИ
========================================================= */

var locationsContent =
document.createElement("div");

locationsContent.className =
"locations-content";

var title =
document.createElement("div");

title.className =
"mobile-title";

title.textContent =
"ЛОКАЦИИ";

locationsContent.appendChild(
title
);


/* =========================================================
СЕТКА
========================================================= */

var grid =
document.createElement("div");

grid.className =
"mobile-grid";

LOCATIONS.forEach(function(location){

    var button =
        document.createElement("button");

    button.type =
        "button";

    button.className =
        "mobile-location";

    button.dataset.location =
        location.key;

    button.textContent =
        location.label;


    button.addEventListener(
        "click",
        function(event){

            event.preventDefault();

            event.stopPropagation();

            openLocation(
                location
            );

        }
    );


    grid.appendChild(
        button
    );

});


locationsContent.appendChild(
grid
);

root.appendChild(
locationsContent
);

document.body.appendChild(
root
);


/* =========================================================
ТЕКУЩАЯ НОДА
========================================================= */

function getCurrentNode(){

    if (
        typeof player !== "undefined" &&
        typeof player.getCurrentNode ===
        "function"
    ) {

        var node =
            player.getCurrentNode();

        return String(node || "")
            .replace(/[{}]/g,"")
            .trim();

    }

    return "";

}


/* =========================================================
ТЕКУЩАЯ ЛОКАЦИЯ + ГОД
========================================================= */

function getState(){

    var currentNode =
        getCurrentNode();


    for (
        var i = 0;
        i < LOCATIONS.length;
        i++
    ) {

        var location =
            LOCATIONS[i];


        if (
            location.nodes["2011"] ===
            currentNode
        ) {

            return {
                location: location,
                era: "2011"
            };

        }


        if (
            location.nodes["2026"] ===
            currentNode
        ) {

            return {
                location: location,
                era: "2026"
            };

        }


        if (
            location.nodes["future"] ===
            currentNode
        ) {

            return {
                location: location,
                era: "future"
            };

        }

    }


    return {

        location:
            LOCATIONS[0],

        era:
            "2026"

    };

}


/* =========================================================
ОТКРЫТИЕ НОДЫ
========================================================= */

function openNode(nodeId){

    if (
        !nodeId ||
        typeof player === "undefined" ||
        typeof player.openNext !==
        "function"
    ) {

        return;

    }


    player.openNext(
        "{" + nodeId + "}",
        ""
    );

}


/* =========================================================
ПЕРЕКЛЮЧЕНИЕ ГОДА
========================================================= */

function switchEra(newEra){

    var state =
        getState();


    if (
        !state ||
        !state.location
    ) {

        return;

    }


    var targetNode =
        state.location.nodes[
            newEra
        ];


    if (!targetNode) {

        return;

    }


    root
        .querySelectorAll(
            ".mobile-year"
        )
        .forEach(function(button){

            button.classList.toggle(
                "active",
                button.dataset.era ===
                newEra
            );

        });


    if (
        state.era !==
        newEra
    ) {

        openNode(
            targetNode
        );

    }


    setTimeout(
        updateActive,
        50
    );

}


/* =========================================================
ПЕРЕКЛЮЧЕНИЕ ЛОКАЦИИ
========================================================= */

function openLocation(location){

    var state =
        getState();


    var era =
        state && state.era
        ? state.era
        : "2026";


    var targetNode =
        location.nodes[
            era
        ];


    if (!targetNode) {

        return;

    }


    root
        .querySelectorAll(
            ".mobile-location"
        )
        .forEach(function(button){

            button.classList.toggle(
                "active",
                button.dataset.location ===
                location.key
            );

        });


    openNode(
        targetNode
    );


    root.classList.remove(
        "open"
    );


    setTimeout(
        updateActive,
        50
    );

}


/* =========================================================
ЗВУК
========================================================= */

function updateMuteButton(){

    var guide =
        window.sfuAudioGuide;


    var muted =
        false;


    if (
        guide &&
        guide.audio
    ) {

        muted =
            guide.isPaused ? guide.isPaused() : guide.audio.paused;

    }


    muteButton.classList.toggle(
        "muted",
        muted
    );


    muteButton.setAttribute(
        "aria-label",
        muted
            ? "Включить звук"
            : "Выключить звук"
    );

}


function toggleMute(){

    var guide =
        window.sfuAudioGuide;


    if (
        !guide ||
        !guide.audio
    ) {

        return;

    }


    if (
        typeof guide.toggle ===
        "function"
    ) {

        guide.toggle();

    }


    setTimeout(
        updateMuteButton,
        20
    );

}


muteButton.addEventListener(
"click",
function(event){

    event.preventDefault();

    event.stopPropagation();

    toggleMute();

}

);


/* =========================================================
ОБНОВЛЕНИЕ ACTIVE
========================================================= */

function updateActive(){

    var state =
        getState();


    if (!state) {

        return;

    }


    root
        .querySelectorAll(
            ".mobile-year"
        )
        .forEach(function(button){

            button.classList.toggle(
                "active",
                button.dataset.era ===
                state.era
            );

        });


    root
        .querySelectorAll(
            ".mobile-location"
        )
        .forEach(function(button){

            button.classList.toggle(
                "active",
                state.location &&
                button.dataset.location ===
                state.location.key
            );

        });


    updateMuteButton();

}


/* =========================================================
ОТКРЫТИЕ / ЗАКРЫТИЕ
========================================================= */

function toggleSheet(){

    root.classList.toggle(
        "open"
    );

}


handleArea.addEventListener(
"click",
function(event){

    event.preventDefault();

    event.stopPropagation();

    toggleSheet();

}

);


/* =========================================================
СВАЙП
========================================================= */

var touchStartY =
null;


root.addEventListener(
"touchstart",
function(event){

    if (
        !event.touches ||
        !event.touches.length
    ) {

        return;

    }


    touchStartY =
        event.touches[0].clientY;

},
{
    passive:true
}

);


root.addEventListener(
"touchend",
function(event){

    if (
        touchStartY === null ||
        !event.changedTouches ||
        !event.changedTouches.length
    ) {

        return;

    }


    var endY =
        event.changedTouches[0].clientY;


    var difference =
        endY -
        touchStartY;


    if (
        difference <
        -35
    ) {

        root.classList.add(
            "open"
        );

    }


    else if (
        difference >
        35
    ) {

        root.classList.remove(
            "open"
        );

    }


    touchStartY =
        null;

},
{
    passive:true
}

);


/* =========================================================
СОБЫТИЯ PANO2VR
========================================================= */

function panoChanged(){

    setTimeout(
        updateActive,
        30
    );

}


if (
typeof player !== "undefined" &&
typeof player.addListener ===
"function"
) {

    player.addListener(
        "changenode",
        panoChanged
    );


    player.addListener(
        "configloaded",
        panoChanged
    );


    player.addListener(
        "imagesready",
        panoChanged
    );

}


/* =========================================================
СЛЕДИМ ЗА СОСТОЯНИЕМ АУДИО
========================================================= */

function attachAudioListeners(){

    if (
        !window.sfuAudioGuide ||
        !window.sfuAudioGuide.audio
    ) {

        return false;

    }


    var audio =
        window.sfuAudioGuide.audio;


    audio.addEventListener(
        "play",
        updateMuteButton
    );


    audio.addEventListener(
        "pause",
        updateMuteButton
    );


    audio.addEventListener(
        "ended",
        updateMuteButton
    );


    return true;

}


/* =========================================================
СТАРТ
========================================================= */

updateActive();


setTimeout(
updateActive,
100
);


setTimeout(
updateActive,
500
);


setTimeout(
updateActive,
1000
);


setTimeout(
attachAudioListeners,
100
);


setTimeout(
attachAudioListeners,
500
);

})();
		el.appendChild(els);
		me._mobile_locations.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_locations.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._mobile_locations);
		me._mobile_ui.appendChild(me._container_4);
		el=me._svg_22=document.createElement('div');
		els=me._svg_22__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTIwLjYgMTgyLjMxIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0ibTMzLj'+
			'kxLDE1OS43OHYtOS40MWgtMy44NnY5LjQxaC0yLjIydi0xMS40aDguMzF2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMSIvPgogICAgPHBhdGggZD0ibTM4Ljk0LDE1OS43OHYtMTEuNGg3LjUxdjEuOThoLTUuMjh2Mi42N2g0LjV2MS45OGgtNC41djIuNzdoNS4yOHYxLjk4aC03LjUxWiIgY2xhc3M9ImNscy0xIi8+CiAgICA8cGF0aCBkPSJtNTMuMiwxNTUuNDloLTIuMTl2NC4yOWgtMi4yMnYtMTEuNGg0LjQyYzIuMzcsMCwzLjc2LDEuNjIsMy43NiwzLjU1cy0xLjM5LDMuNTUtMy43NiwzLjU1Wm0tLjExLTUuMTJoLTIuMDh2My4xMmgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTVzLS42'+
			'NC0xLjU3LTEuNjUtMS41N1oiIGNsYXNzPSJjbHMtMSIvPgogICAgPHBhdGggZD0ibTY2LjU1LDE1NC41NWMuNS41My43LDEuMTcuNywxLjk3LDAsMi0xLjM0LDMuMjctMy40OSwzLjI3aC00Ljc3di0xMS40aDQuNThjMi4xNSwwLDMuNTIsMS4yMiwzLjUyLDMuMTQsMCwxLjA5LS40NiwxLjg5LTEuNDEsMi40Mi40NS4yNC42Mi4zNy44Ni42MVptLTMuMTUtMS41NWMuOTEsMCwxLjQ3LS41LDEuNDctMS4zMXMtLjU2LTEuMzEtMS40Ny0xLjMxaC0yLjE4djIuNjJoMi4xOFptLjE0LDQuOGMuOTEsMCwxLjQ5LS41NCwxLjQ5LTEuNDFzLS41OC0xLjM5LTEuNDktMS4zOWgtMi4zMnYyLjhoMi4zMloiIG'+
			'NsYXNzPSJjbHMtMSIvPgogICAgPHBhdGggZD0ibTc0LjE2LDE1OS43OGgtNC40OHYtMTEuNGgyLjIydjQuMjloMi4yNmMyLjIyLDAsMy43LDEuNDcsMy43LDMuNTVzLTEuNDksMy41NS0zLjcsMy41NVptLS4xOC01LjEyaC0yLjA4djMuMTRoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU3cy0uNjQtMS41Ny0xLjY1LTEuNTdabTUuMTEsNS4xMnYtMTEuNGgyLjIzdjExLjRoLTIuMjNaIiBjbGFzcz0iY2xzLTEiLz4KICAgIDxwYXRoIGQ9Im05MC41NSwxNTkuNzh2LTcuMzFsLTQuNDMsNy4zMWgtMS45OHYtMTEuNGgyLjIydjcuM2w0LjQzLTcuM2gxLjk4djExLjRoLTIuMjNabS0yLjA4LTEy'+
			'Yy0xLjI2LDAtMi41My0uNTYtMi41OS0yLjI5aDEuNTdjLjA1LjcuNDUuOTksMS4wMi45OXMuOTgtLjI5LDEuMDItLjk5aDEuNTdjLS4wNiwxLjczLTEuMzMsMi4yOS0yLjU5LDIuMjlaIiBjbGFzcz0iY2xzLTEiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Im03LjAzLDE3OC40N3YxLjM5aC0yLjIzdi0xLjM5Yy0zLjM5LS4xMy00LjgtMS44NC00LjgtNC43NHMxLjQxLTQuNTksNC44LTQuNzR2LTEuMTJoMi4yM3YxLjEyYzMuMzkuMTQsNC44MiwxLjg0LDQuODIsNC43NHMtMS40Miw0LjYxLTQuODIsNC43NFptLTIuMTktNy41OWMtMS45LjEtMi42MS45OS0yLjYxLDIuODVzLjcsMi43Ny'+
			'wyLjYxLDIuODV2LTUuN1ptMi4xNiwwdjUuN2MxLjkyLS4wOCwyLjYyLS45OSwyLjYyLTIuODVzLS43LTIuNzUtMi42Mi0yLjg1WiIgY2xhc3M9ImNscy0xIi8+CiAgICA8cGF0aCBkPSJtMTMuODIsMTc5Ljc4di0xMS40aDcuNTF2MS45OGgtNS4yOHYyLjY3aDQuNXYxLjk4aC00LjV2Mi43N2g1LjI4djEuOThoLTcuNTFaIiBjbGFzcz0iY2xzLTEiLz4KICAgIDxwYXRoIGQ9Im0zMS4wMywxODIuMzF2LTIuNTNoLTYuMzJ2Mi41M2gtMi4xNXYtNC41MWgxLjA3Yy45NC0xLjQ2LDEuMzYtMy44NywxLjM2LTYuNXYtMi45MWg2Ljg3djkuNDFoMS4zMXY0LjUxaC0yLjE1Wm0tMS4zOS0xMS45NGgtMi41'+
			'MXYxLjY1YzAsMi4yNi0uMjIsNC4xOS0xLjAxLDUuNzhoMy41MnYtNy40M1oiIGNsYXNzPSJjbHMtMSIvPgogICAgPHBhdGggZD0ibTM1LjEsMTc5Ljc4di0xMS40aDcuNTF2MS45OGgtNS4yOHYyLjY3aDQuNXYxLjk4aC00LjV2Mi43N2g1LjI4djEuOThoLTcuNTFaIiBjbGFzcz0iY2xzLTEiLz4KICAgIDxwYXRoIGQ9Im00OS4zNiwxNzUuNDloLTIuMTl2NC4yOWgtMi4yMnYtMTEuNGg0LjQyYzIuMzcsMCwzLjc2LDEuNjIsMy43NiwzLjU1cy0xLjM5LDMuNTUtMy43NiwzLjU1Wm0tLjExLTUuMTJoLTIuMDh2My4xMmgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTVzLS42NC0xLjU3LTEuNj'+
			'UtMS41N1oiIGNsYXNzPSJjbHMtMSIvPgogICAgPHBhdGggZD0ibTYwLjgzLDE3OS43OGwtLjY3LTIuMDJoLTQuMDVsLS42OSwyLjAyaC0yLjMybDQuMTUtMTEuNGgxLjc0bDQuMTYsMTEuNGgtMi4zMlptLTIuNjYtOC4wNGwtMS40NCw0LjE1aDIuODNsLTEuMzktNC4xNVoiIGNsYXNzPSJjbHMtMSIvPgogICAgPHBhdGggZD0ibTcxLjEyLDE3OS43OHYtOS40MWgtMi43MnYzLjMxYzAsNC43OS0xLjE3LDYuMS0zLjU0LDYuMWgtLjg4di0xLjk4aC4zMmMxLjE0LDAsMS45NS0uNjcsMS45NS00LjI0di01LjE3aDcuMDl2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMSIvPgogICAgPHBhdGggZD0ibTgw'+
			'LjY2LDE3OS43OGgtNC40OHYtMTEuNGgyLjIydjQuMjloMi4yNmMyLjIyLDAsMy43LDEuNDcsMy43LDMuNTVzLTEuNDksMy41NS0zLjcsMy41NVptLS4xOC01LjEyaC0yLjA4djMuMTRoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU3cy0uNjQtMS41Ny0xLjY1LTEuNTdaIiBjbGFzcz0iY2xzLTEiLz4KICAgIDxwYXRoIGQ9Im05Mi40NywxNzkuNzh2LTQuNzdoLTMuODZ2NC43N2gtMi4yMnYtMTEuNGgyLjIydjQuNjZoMy44NnYtNC42NmgyLjIydjExLjRoLTIuMjJaIiBjbGFzcz0iY2xzLTEiLz4KICAgIDxwYXRoIGQ9Im0xMDEuOTksMTc5Ljc4aC00LjQ4di0xMS40aDIuMjJ2NC4yOWgyLj'+
			'I2YzIuMjIsMCwzLjcsMS40NywzLjcsMy41NXMtMS40OSwzLjU1LTMuNywzLjU1Wm0tLjE4LTUuMTJoLTIuMDh2My4xNGgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTdzLS42NC0xLjU3LTEuNjUtMS41N1ptNS4xMSw1LjEydi0xMS40aDIuMjN2MTEuNGgtMi4yM1oiIGNsYXNzPSJjbHMtMSIvPgogICAgPHBhdGggZD0ibTExOC4zNywxNzkuNzh2LTcuMzFsLTQuNDMsNy4zMWgtMS45OHYtMTEuNGgyLjIydjcuM2w0LjQzLTcuM2gxLjk4djExLjRoLTIuMjNabS0yLjA4LTEyYy0xLjI2LDAtMi41My0uNTYtMi41OS0yLjI5aDEuNTdjLjA1LjcuNDUuOTksMS4wMi45OXMuOTgtLjI5LDEuMDIt'+
			'Ljk5aDEuNTdjLS4wNiwxLjczLTEuMzMsMi4yOS0yLjU5LDIuMjlaIiBjbGFzcz0iY2xzLTEiLz4KICAgPC9nPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTEwNy41OCw3NS4ydi0yMC40NGM3LTEuMzcsMTIuMjgtNy41NCwxMi4yOC0xNC45NCwwLTguNDEtNi44Mi0xNS4yMy0xNS4yMy0xNS4yMy00LjE4LDAtNy45NywxLjY4LTEwLjcyLDQuNDFsLTE5LjItMTEuOTZjLjA3LS42LjExLTEuMi4xMS0xLjgxLDAtOC40MS02LjgyLTE1LjIzLTE1LjIzLTE1LjIzcy0xNS4yMyw2LjgyLTE1LjIzLDE1LjIzLDYuODIsMTUuMjMsMTUuMjMsMTUuMjNjNS42NiwwLDEwLjYtMy4wOSwxMy4yMi03LjY3bD'+
			'E3Ljc5LDExLjA4Yy0uNzcsMS44My0xLjIsMy44NC0xLjIsNS45NCwwLDcuNCw1LjI4LDEzLjU3LDEyLjI4LDE0Ljk0djIwLjQ0Yy03LDEuMzctMTIuMjgsNy41NC0xMi4yOCwxNC45NCwwLDguNDEsNi44MiwxNS4yMywxNS4yMywxNS4yM3MxNS4yMy02LjgyLDE1LjIzLTE1LjIzYzAtNy40LTUuMjgtMTMuNTctMTIuMjgtMTQuOTQiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtNzQuODMsNjQuOThjMC04LjQxLTYuODItMTUuMjMtMTUuMjMtMTUuMjNzLTE1LjIzLDYuODItMTUuMjMsMTUuMjNjMCw3LjQsNS4yOCwxMy41NywxMi4yOCwxNC45NHYyMC4yM2MtMy43NS43NC03LjAxLDIuODUt'+
			'OS4yMyw1LjhsLTE3LjEyLTEwLjY2Yy41Ny0xLjYuODktMy4zMy44OS01LjEzLDAtNy40LTUuMjgtMTMuNTctMTIuMjgtMTQuOTR2LTIwLjQ0YzctMS4zNywxMi4yOC03LjU0LDEyLjI4LTE0Ljk0LDAtOC40MS02LjgyLTE1LjIzLTE1LjIzLTE1LjIzUy43NCwzMS40MS43NCwzOS44MmMwLDcuNCw1LjI4LDEzLjU3LDEyLjI4LDE0Ljk0djIwLjQ0Yy03LDEuMzctMTIuMjgsNy41NC0xMi4yOCwxNC45NCwwLDguNDEsNi44MiwxNS4yMywxNS4yMywxNS4yMyw0LjUsMCw4LjU0LTEuOTUsMTEuMzItNS4wNGwxNy41NywxMC45NGMtLjMyLDEuMjItLjQ4LDIuNS0uNDgsMy44MiwwLDguNDEsNi44MiwxNS'+
			'4yMywxNS4yMywxNS4yM3MxNS4yMy02LjgyLDE1LjIzLTE1LjIzYzAtNy40LTUuMjgtMTMuNTctMTIuMjgtMTQuOTR2LTIwLjIzYzctMS4zNywxMi4yOC03LjU0LDEyLjI4LTE0Ljk0IiBjbGFzcz0iY2xzLTEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_22__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 22";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 79px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_22.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_ui.appendChild(me._svg_22);
		me.divSkin.appendChild(me._mobile_ui);
		el=me._tablet_ui=document.createElement('div');
		el.ggId="tablet_ui";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container tablet_ui";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_ui.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._tablet_ui.ggUpdatePosition=function (useTransition) {
		}
		el=me._tablet_svg_14=document.createElement('div');
		els=me._tablet_svg_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTE4OCAzMjA4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
			'ExMjkuMDQgMTAzMS45OSAxMTU5IDEzNDIgMTA0NC42NCAyMDU2LjQyIDExMjYuNiAyNDg2LjM1IDExODggMzIwOCAwIDMyMDggNjEgMCAxMTg4IDAgMTEyOS4wNCAxMDMxLjk5Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_14__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 14";
		el.ggDy=-181;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 1893px;';
		hs+='left : -580px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 680px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._tablet_ui.appendChild(me._tablet_svg_14);
		el=me._tablet_svg_16=document.createElement('div');
		els=me._tablet_svg_16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzM0MSAxMTM3LjUzIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
			'M9IjYyNCAxMDY2IDYyNCAxMDY1LjU4IDY1Ni4wMyAxMDYzLjY0IDk0OC4zOCAxMDM5IDIwNzAuNTcgMTA4OS43NiAyNTgyIDExMzcuNTMgMzI0MSAxMDk1IDMzNDEgMzQgMCAwIDAgMTA5NCA2MjQgMTA2NiIvPgogPC9nPgo8L3N2Zz4K';
		me._tablet_svg_16__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 16";
		el.ggDx=305;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 764px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -670px;';
		hs+='visibility : inherit;';
		hs+='width : 2266px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tablet_ui.appendChild(me._tablet_svg_16);
		el=me._tablet_svg_13=document.createElement('div');
		els=me._tablet_svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzI0NyAxMzcwLjY4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
			'M9IjI1NjAuODEgNzAuODMgMjE3Ni4wMSAzNi4zMyAxODY1LjYxIDEwNSAxMTUxLjU4IDg4LjM0IDcwMiAxMzUuNjggMCAwIDAgMTM3MC42OCAzMjQ3IDEzNzAuNjggMzIwOCAwIDI1NjAuODEgNzAuODMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._tablet_svg_13__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 13";
		el.ggDx=-88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -892px;';
		hs+='height : 1079px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 2262px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tablet_ui.appendChild(me._tablet_svg_13);
		el=me._tablet_svg_15=document.createElement('div');
		els=me._tablet_svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTE1MSAzMjA4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
			'gyLjMyIDY0Ny4xOSA0Mi4yMiAxMDMxLjk5IDg3IDEzNDAgNDkgMTY1NCAxMDIuNjggMjA1Ni40MiAxNC44NCAyMjQ4IDQzLjk3IDI0ODYuMzUgMCAzMjA4IDExNTEgMzIwOCAxMTI2IDAgMCAwIDgyLjMyIDY0Ny4xOSIvPgogPC9nPgo8L3N2Zz4K';
		me._tablet_svg_15__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 15";
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 1247px;';
		hs+='position : absolute;';
		hs+='right : -369px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 437px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._tablet_ui.appendChild(me._tablet_svg_15);
		el=me._tablet_svg_17=document.createElement('div');
		els=me._tablet_svg_17__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNzEzIDIxOSIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm'+
			'9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZTFlMGRjOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI0IDguNTEgMCAyMTkgMjkxIDIwNC4zIDQzNCAyMDMuNTIgNjMyIDE4MS44NiA3MTMgMTc3Ljk5IDcwMiAwIDI0IDguNTEiLz4KICA8Zz4KICAgPGxpbmUgeDE9IjE1MC41IiB5Mj0iMzkuNSIgeDI9IjIxMC41MyIgeTE9IjM5LjUiIGNsYXNzPSJjbHMtMyIvPgogICA8cG9seWdvbiBj'+
			'bGFzcz0iY2xzLTEiIHBvaW50cz0iMjA3LjIyIDQzLjU5IDIwNi41MyA0Mi44NiAyMTAuMTUgMzkuNSAyMDYuNTMgMzYuMTQgMjA3LjIyIDM1LjQxIDIxMS42MSAzOS41IDIwNy4yMiA0My41OSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._tablet_svg_17__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg location_title";
		el.ggType='svg';
		hs ='';
		hs+='height : 135px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : 33px;';
		hs+='visibility : inherit;';
		hs+='width : 457px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_17.ggUpdatePosition=function (useTransition) {
		}
		el=me._tablet_location_title=document.createElement('div');
		els=me._tablet_location_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tablet_location_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 72px;';
		hs+='position : absolute;';
		hs+='right : 33px;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 381px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Pobeda\", sans-serif; font-size: clamp(30px, 6vw, 60px); line-height: 0.85; font-weight: 300; color: #111; -webkit-text-stroke: 1px #111; background: transparent; border: none; box-shadow: none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 381px;';
		hs+='height: 72px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tablet_location_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tablet_location_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._tablet_location_title.ggUpdateText();
		});
		el.appendChild(els);
		me._tablet_location_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_location_title.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_svg_17.appendChild(me._tablet_location_title);
		el=me._tablet_svg_18=document.createElement('div');
		els=me._tablet_svg_18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNzguODIgMTQuMDIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8Zz4KICAgPHBhdGggZD0ibTcuMTQsMTEuNDlWMi'+
			'4wOGgtMi43MnYzLjMxYzAsNC43OS0xLjE3LDYuMS0zLjU0LDYuMWgtLjg4di0xLjk4aC4zMmMxLjE0LDAsMS45NS0uNjcsMS45NS00LjI0Vi4xaDcuMDl2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtMTguOSwxMC4zOWMtLjc3Ljc3LTEuNzMsMS4yLTMuMDQsMS4ycy0yLjI5LS40My0zLjA2LTEuMmMtMS4xNC0xLjE0LTEuMTUtMi40Mi0xLjE1LTQuNTlzLjAyLTMuNDYsMS4xNS00LjU5Yy43Ny0uNzcsMS43NS0xLjIsMy4wNi0xLjJzMi4yNy40MywzLjA0LDEuMmMxLjE0LDEuMTQsMS4xNywyLjQyLDEuMTcsNC41OXMtLjAzLDMuNDYtMS4xNyw0LjU5Wm0tMS42Mi03'+
			'Ljc5Yy0uMzItLjM3LS44Mi0uNjEtMS40Mi0uNjFzLTEuMS4yNC0xLjQ0LjYxYy0uNDIuNDgtLjU0LDEuMDItLjU0LDMuMnMuMTMsMi43MS41NCwzLjE5Yy4zNC4zNy44My42MiwxLjQ0LjYyczEuMS0uMjYsMS40Mi0uNjJjLjQyLS40OC41Ni0xLjAxLjU2LTMuMTlzLS4xNC0yLjcyLS41Ni0zLjJaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTIyLjM3LDExLjQ5Vi4xaDIuMjJ2MTEuNGgtMi4yMlptNi4yNCwwbC00LTUuOTdMMjguMjkuMWgyLjY2bC0zLjgzLDUuMzUsNC4yMSw2LjA1aC0yLjcyWiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0zOS40NywxMS40OWwtLjY3LTIuMD'+
			'JoLTQuMDVsLS42OSwyLjAyaC0yLjMyTDM1Ljg5LjFoMS43NWw0LjE2LDExLjRoLTIuMzJabS0yLjY2LTguMDRsLTEuNDQsNC4xNWgyLjgzbC0xLjM5LTQuMTVaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTUwLjY5LDE0LjAydi0yLjUzaC03LjQ5Vi4xaDIuMjN2OS40MWgzLjg2Vi4xaDIuMjJ2OS40MWgxLjMzdjQuNTFoLTIuMTVaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTYxLjAxLDExLjQ5di03LjMxbC00LjQzLDcuMzFoLTEuOTlWLjFoMi4yM3Y3LjNMNjEuMjUuMWgxLjk4djExLjRoLTIuMjJaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTY3LjcxLDExLjQ5'+
			'aC0yLjY0bDIuMzUtNC43NGMtMS4yLS41NC0xLjk1LTEuNjYtMS45NS0zLjExLDAtMi4xOCwxLjU1LTMuNTUsMy43NS0zLjU1aDQuNDJ2MTEuNGgtMi4yMnYtNC4yOWgtMS44MmwtMS44Nyw0LjI5Wm0zLjctOS40NGgtMi4wOGMtLjk5LDAtMS42NS42Mi0xLjY1LDEuNTdzLjY2LDEuNjIsMS42NSwxLjYyaDIuMDh2LTMuMTlaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTc2LjQ1LDcuMTV2LTIuMzdoMi4zN3YyLjM3aC0yLjM3Wm0wLDQuMzR2LTIuMzdoMi4zN3YyLjM3aC0yLjM3WiIgY2xhc3M9ImNscy0xIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._tablet_svg_18__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 18";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 362px;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 69px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_18.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_svg_17.appendChild(me._tablet_svg_18);
		me._tablet_ui.appendChild(me._tablet_svg_17);
		el=me._tablet_svg_1=document.createElement('div');
		els=me._tablet_svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgOTUuNiAxNTYuMzIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L'+
			'7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Im00OC42OCwxMzMuNmMwLDYuOS0xLjUxLDEyLjMyLTQuNTEsMTYuMjgtMy4wMSwzLjk2LTguMjUsNS45NC0xNS43Myw1Ljk0aC03LjQ4Yy03LjQ4LDAtMTIuNzYtMS45OC0xNS44NC01Ljk0cy00LjYyLTkuMzgtNC42Mi0xNi4yOFYyMi45NGMwLTcuMDQsMS41NC0xMi41NCw0LjYyLTE2LjVTMTMuNDguNSwyMC45Ni41aDcuNDhjNy40OCwwLDEyLjcyLDEuOTgsMTUuNzMsNS45NCwzLDMuOTYsNC41MSw5LjQ2LDQuNTEsMTYuNXYxMTAuNjZabS02LjYtMTExLjk4YzAtMy44MS0uOTktNy4xOC0yLjk3LTEwLjEyLTEuOTgt'+
			'Mi45My01LjMyLTQuNC0xMC4wMS00LjRoLTkuMDJjLTQuNywwLTguMDMsMS40Ny0xMC4wMSw0LjQtMS45OCwyLjk0LTIuOTcsNi4zMS0yLjk3LDEwLjEydjExMy4wOGMwLDMuODIuOTksNy4xOSwyLjk3LDEwLjEyLDEuOTgsMi45NCw1LjMxLDQuNCwxMC4wMSw0LjRoOS4wMmM0LjY5LDAsOC4wMy0xLjQ2LDEwLjAxLTQuNCwxLjk4LTIuOTMsMi45Ny02LjMsMi45Ny0xMC4xMlYyMS42MloiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtOTUuMSwxLjgydjE1Mi42OGgtNi42VjguNDJoLTE4LjkyVjEuODJoMjUuNTJaIiBjbGFzcz0iY2xzLTEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -28px;';
		hs+='height : 100px;';
		hs+='left : 59px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_ui.appendChild(me._tablet_svg_1);
		el=me._tablet_svg_5=document.createElement('div');
		els=me._tablet_svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzgxLjkgNzI2LjM1IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQogICAgPC9zdHlsZT4KID'+
			'wvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxnPgogICA8cGF0aCBkPSJtMzc5LjksODMuMzVjLTYyLjQ2LDI5LjMyLTgxLDI4LjU5LTg2LDIyLTYuODQtOS4wMSw3Ljk2LTMzLjg3LDIyLTQ4LDEzLjI3LTEzLjM1LDMyLjA2LTIzLjMzLDM1LTIwLDMuMywzLjc0LTExLjk4LDI1LjgtMzEsNDEtMzAuODIsMjQuNjQtNzYuOTcsMzUuNy04NywyMi02LjA4LTguMyw2LjA2LTI2LjgyLDMtMjUtNDQuNSwyNi41LTEwMC41LDczLjUtMTc5LjUsMTc5LjUtMTEuMDcsMTQuODUtMzcuMTcsNTUuOTctMzEuNSw4Ni41LDEuOTEsMTAuMjcsNC43MSwyNS40'+
			'LDE1LDMxLDM1LjM5LDE5LjI4LDE0NS40MS04MS44NSwxMzAtMTEzLTcuNDQtMTUuMDQtNDQuMjYtMTQuMDUtNjktNi02Ni41OSwyMS42Ny0xMTguMDUsMTE4LjAxLTkyLDIwMiwyMS4wMiw2Ny43OCw4OS4xMSwxMTYuNTMsMTY5LDExOSIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0zMS4xNiwyODEuNzVjNDEuNDktNDcuNjksNzQuOTEtODMuNyw5Ni41OC0xMDYuNjIsMTIuMzQtMTMuMDUsNzMuMzYtNzcuMzYsOTkuMzktMTQ3LjUyLDMuODUtMTAuMzgsNy4yMi0yMS42NSw0LjE0LTI0Ljc3LTYuNTgtNi42OS0zOC41OSwyOC4zNC00OS44NSw0MC42Ny0yNy43NiwzMC4zOS03Ni44OSw5NS'+
			'4yMS0xNDQuMDEsMjQxLjY4IiBjbGFzcz0iY2xzLTEiLz4KICA8L2c+CiAgPHBhdGggZD0ibTc0LjksNzI0LjM1YzIzLjIzLTE3Ljk1LDUyLjE3LTM3LjYxLDg3LTU2LDM4LjI4LTIwLjIxLDczLjk2LTMzLjc2LDEwNC00MyIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 439px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : -27px;';
		hs+='visibility : inherit;';
		hs+='width : 158px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_ui.appendChild(me._tablet_svg_5);
		el=me._tablet_svg_8=document.createElement('div');
		els=me._tablet_svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzA1LjExIDE0MiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iMTkwLjUiIHkyPSIuNSIgeDI9IjI4MS41IiB5MT0iMTQxLjUiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIxMy41IiB5Mj0iNTQuNzkiIHgyPSIxMy41IiB5MT0iMjguNSIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9Ii41IiB5Mj0iNDEuNSIgeDI9IjI3LjQ3IiB5MT0iNDEuNSIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjM3LjM5IiB5Mj0iNDEuNSIgeDI9IjMwNC42MSIgeTE9IjQxLjUiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._tablet_svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 8";
		el.ggDx=-88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 102px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 277px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tablet_ui.appendChild(me._tablet_svg_8);
		el=me._tablet_svg_6=document.createElement('div');
		els=me._tablet_svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTExLjI4IDMzOS43NiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iLjUiIHkyPSIzMzkuMjYiIHgyPSIxMTAuNzgiIHkxPSIyODQuMjYiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIyNyIgeTI9IjIxOC45NiIgeDI9IjI3IiB5MT0iMTkwLjc2IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iNDEuMSIgeTI9IjIwNC44NiIgeDI9IjEyLjkiIHkxPSIyMDQuODYiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIyNi43OSIgeTI9Ijc4LjA3IiB4Mj0iMjYuNzkiIHkxPSI0OS44NyIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjQwLjg5IiB5Mj0iNjMuOTciIHgyPSIxMi42OSIg'+
			'eTE9IjYzLjk3IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMjciIHkyPSI5MS41OSIgeDI9IjI3IiB5MT0iMTYxLjMyIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMjciIHkyPSIuNSIgeDI9IjI3IiB5MT0iMzYuNDEiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._tablet_svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 6";
		el.ggDy=61;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 229px;';
		hs+='position : absolute;';
		hs+='right : -52px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 104px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tablet_svg_4=document.createElement('div');
		els=me._tablet_svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTMyLjYgMTQ2LjYiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogMy42cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+Ci'+
			'A8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cGF0aCBkPSJtMTMwLjgsMS44Yy0yMC44NiwxMy45My00Ny4wMiwzNC4yOS03Myw2M0MzMS40Myw5My45MywxMy42MiwxMjIuNDIsMS44LDE0NC44IiBjbGFzcz0iY2xzLTEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._tablet_svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 4";
		el.ggDx=-853;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 66px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -338px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tablet_svg_6.appendChild(me._tablet_svg_4);
		me._tablet_ui.appendChild(me._tablet_svg_6);
		el=me._tablet_svg_19=document.createElement('div');
		els=me._tablet_svg_19__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjM5LjY4IDE1Ni4yMyIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iMTAwLjEyIiB5Mj0iLjUiIHgyPSIxMDAuMTIiIHkxPSIxNTUuNzMiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSI1MC42MiIgeTI9Ijg5LjIzIiB4Mj0iMjM5LjE4IiB5MT0iODkuMjMiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIuNSIgeTI9Ijg5LjMzIiB4Mj0iMjYuMDEiIHkxPSI4OS4zMyIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjEzLjI2IiB5Mj0iMTAyLjA5IiB4Mj0iMTMuMjYiIHkxPSI3Ni41NyIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_19__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 19";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -26px;';
		hs+='height : 126px;';
		hs+='left : -106px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 283px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_19.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_ui.appendChild(me._tablet_svg_19);
		el=me._tablet_svg_10=document.createElement('div');
		els=me._tablet_svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzI2Ljg2IDEzNC4yNiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'00IHsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNXB4OwogICAgICB9CgogICAgICAuY2xzLTQsIC5jbHMtNSB7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm9rZS13aWR0aDogLjhweDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDE5LjYyIDkwLjMg'+
			'MCAzMjYuODYgMTcuMTcgMzI2Ljg2IDExNi44MSAyMTQuMTcgMTMwLjU4IDEwMS40OSAxMjguNzQgMzguMzYgMTM0LjI2IDAgMTE1LjE5IDAgMTkuNjIiLz4KICA8Zz4KICAgPGxpbmUgeDE9IjQzLjU2IiB5Mj0iMTAwLjI5IiB4Mj0iNjQuNTEiIHkxPSIxMDAuMjkiIGNsYXNzPSJjbHMtNSIvPgogICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjEuODYgMTAzLjU2IDYxLjMyIDEwMi45OCA2NC4yIDEwMC4zIDYxLjMyIDk3LjYxIDYxLjg2IDk3LjAzIDY1LjM4IDEwMC4zIDYxLjg2IDEwMy41NiIvPgogIDwvZz4KICA8Zz4KICAgPGxpbmUgeDE9IjE1Mi42NSIgeTI9IjEwMC4yOSIgeD'+
			'I9IjE3My41OSIgeTE9IjEwMC4yOSIgY2xhc3M9ImNscy01Ii8+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxNzAuOTQgMTAzLjU2IDE3MC40IDEwMi45OCAxNzMuMjkgMTAwLjMgMTcwLjQgOTcuNjEgMTcwLjk0IDk3LjAzIDE3NC40NiAxMDAuMyAxNzAuOTQgMTAzLjU2Ii8+CiAgPC9nPgogIDxnPgogICA8bGluZSB4MT0iMjU3LjczIiB5Mj0iMTAwLjI5IiB4Mj0iMjc4LjY3IiB5MT0iMTAwLjI5IiBjbGFzcz0iY2xzLTUiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI3Ni4wMyAxMDMuNTYgMjc1LjQ4IDEwMi45OCAyNzguMzcgMTAwLjMgMjc1LjQ4IDk3'+
			'LjYxIDI3Ni4wMyA5Ny4wMyAyNzkuNTQgMTAwLjMgMjc2LjAzIDEwMy41NiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTQ0LjYxLDY4Ljl2MTMuNTZoLTE1LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOC'+
			'wxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im02MS41OCw3NS43MmMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIuNDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMz'+
			'djM1LjcxWm0tMi4xMy0zNi4xNGMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djM2LjQ5YzAsMS4yMy4zMiwyLjMyLjk2LDMuMjcuNjQuOTUsMS43MiwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMzYuNDlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTY5LjQ2LDMzLjE5djQ5LjI3aC0yLjEzdi00Ny4xNGgtNi4xMXYtMi4xM2g4LjI0WiIgY2xhc3M9ImNscy'+
			'0zIi8+CiAgIDxwYXRoIGQ9Im04MC42NywzMy4xOXY0OS4yN2gtMi4xM3YtNDcuMTRoLTYuMTF2LTIuMTNoOC4yNFoiIGNsYXNzPSJjbHMtMyIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTE0My42MSw2OC45djEzLjU2aC0xNS41NXYtMjAuMjRsMTMuNDItMjAuMDl2LTIuNTZjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3YzLjE5aC0yLjEzdi0yLjc3YzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0xLjky'+
			'aDIuNDFjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YyLjc3bC0xMy40MiwyMC4wOXYxNy40N2gxMS4yOXYtMTEuNDNoMi4xM1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTYwLjU4LDc1LjcyYzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjkyLTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLj'+
			'Y0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2MzUuNzFabS0yLjEzLTM2LjE0YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2MzYuNDljMCwxLjIzLjMyLDIuMzIuOTYsMy4yNy42NC45NSwxLjcyLDEuNDIsMy4yMywxLjQyaDIuOTFjMS41MSwwLDIuNTktLjQ3LDMuMjMtMS40Mi42NC0uOTUuOTYtMi4wMy45Ni0zLjI3di0zNi40OVoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTc4LjU0LDY4Ljl2MTMuNTZoLTE1'+
			'LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im'+
			'0xODguODMsNDkuMjNjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zMnYxOS4yNGMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIuNDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdoLTIuMTN2LTMuMTljMC0xLjIzLS4zMi0yLjMy'+
			'LS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3Y5LjY2aDYuODlabTQuNCw2LjgyYzAtMS4yMy0uMzItMi4zMS0uOTYtMy4yM3MtMS43Mi0xLjM4LTMuMjMtMS4zOGgtNy4xdjI0LjY0YzAsMS4yMy4zMiwyLjMyLjk2LDMuMjcuNjQuOTUsMS43MiwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMjAuMDJaIiBjbGFzcz0iY2xzLTMiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Im0yMjUuNDQsNDUuNT'+
			'd2OS4wMmgzLjE3YzEuNTYsMCwyLjY3LjQxLDMuMzEsMS4yNC42NC44My45NywxLjk2Ljk3LDMuNHYxMi4xOWMwLDEuNDctLjMyLDIuNjItLjk3LDMuNDUtLjY0LjgzLTEuNzUsMS4yNC0zLjMxLDEuMjRoLTQuNTV2LTMxLjkyaDguNDZ2MS4zOGgtNy4wOFptMCwxMC40djE4LjcyaDMuMzZjLjk4LDAsMS42OC0uMywyLjA5LS45LjQxLS42LjYyLTEuMjkuNjItMi4wOXYtMTIuN2MwLS44LS4yMS0xLjUtLjYyLTIuMTJzLTEuMTEtLjkyLTIuMDktLjkyaC0zLjM2WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Im0yNDYuNTEsNDQuMTlsLTMuNzcsMjguMzhjLS4xNSwxLjEtLjU2LDEuOTctMS4y'+
			'MiwyLjYtLjY2LjYzLTEuNjYuOTQtMy4wMS45NGgtMS4yNHYtMS4zOGgxLjQzYy44NiwwLDEuNS0uMjQsMS45MS0uNzFzLjY3LTEuMDUuNzYtMS43M2wuODMtNi4zNWgtMy41NHYtLjA1bC0zLjMxLTIxLjcxaDEuNDNsMy4wOCwyMC4zOGgyLjU4bDIuNjctMjAuMzhoMS40M1oiIGNsYXNzPSJjbHMtNCIvPgogICA8cGF0aCBkPSJtMjU2LjcyLDc0LjczaDEuNDd2NS4zOGgtMS4ybC0uMzItNGgtOS40M2wtLjMyLDRoLTEuMmwuMDUtNS4zOGMuNzcsMCwxLjMyLS4xOCwxLjY2LS41My4zNC0uMzUuNTItLjkzLjU1LTEuNzJsMS4yLTI4LjI5aDcuNTR2MzAuNTRabS0xLjM4LDB2LTI5LjE2aC00Ljc4bC'+
			'0xLjIsMjYuOTFjLS4wMywxLjEtLjM0LDEuODYtLjkyLDIuMjVoNi45WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Im0yNzEuMDcsNDQuMTlsLTMuNzcsMjguMzhjLS4xNSwxLjEtLjU2LDEuOTctMS4yMiwyLjYtLjY2LjYzLTEuNjYuOTQtMy4wMS45NGgtMS4yNHYtMS4zOGgxLjQzYy44NiwwLDEuNS0uMjQsMS45MS0uNzFzLjY3LTEuMDUuNzYtMS43M2wuODMtNi4zNWgtMy41NHYtLjA1bC0zLjMxLTIxLjcxaDEuNDNsMy4wOCwyMC4zOGgyLjU4bDIuNjctMjAuMzhoMS40M1oiIGNsYXNzPSJjbHMtNCIvPgogICA8cGF0aCBkPSJtMjkwLjgsNzQuNzN2NS4zOGgtMS4ybC0uMzItNGgtMTUu'+
			'OTZ2LTMxLjkyaDEuMzh2MzAuNTRoNS41N3YtMzAuNTRoMS4zOHYzMC41NGg1LjUydi0zMC41NGgxLjM4djMwLjU0aDIuMjVaIiBjbGFzcz0iY2xzLTQiLz4KICAgPHBhdGggZD0ibTMwMS4wMiw0NC4xOXYxLjM4aC03LjA4djkuMDJoNS4zNHYxLjM4aC01LjM0djE4Ljc3aDcuMDh2MS4zOGgtOC40NnYtMzEuOTJoOC40NloiIGNsYXNzPSJjbHMtNCIvPgogICA8cGF0aCBkPSJtMzExLjkyLDQ0LjE5djEuMzhoLTcuMDh2OS4wMmg1LjM0djEuMzhoLTUuMzR2MTguNzdoNy4wOHYxLjM4aC04LjQ2di0zMS45Mmg4LjQ2WiIgY2xhc3M9ImNscy00Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._tablet_svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : -23px;';
		hs+='visibility : hidden;';
		hs+='width : 282px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_10.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_ui.appendChild(me._tablet_svg_10);
		el=me._tablet_svg_12=document.createElement('div');
		els=me._tablet_svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTEyLjggMTIxLjYiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMyNDI1Mjc7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBzdHJva2Utd2lkdGg6IDBweDsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy00IH'+
			'sKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMCAwIDExMi44IDguMTkgMTEyLjggMTA3LjgzIC4xMiAxMjEuNiAwIDAiLz4KICA8Zz4K'+
			'ICAgPGxpbmUgeDE9IjQzLjY3IiB5Mj0iOTEuMzEiIHgyPSI2NC42MiIgeTE9IjkxLjMxIiBjbGFzcz0iY2xzLTQiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYxLjk3IDk0LjU4IDYxLjQzIDk0IDY0LjMxIDkxLjMyIDYxLjQzIDg4LjYzIDYxLjk3IDg4LjA1IDY1LjQ5IDkxLjMyIDYxLjk3IDk0LjU4Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJtMTEuMzgsMzYuNTl2OS4wMmgzLjE3YzEuNTYsMCwyLjY3LjQxLDMuMzEsMS4yNHMuOTcsMS45Ni45NywzLjR2MTIuMTljMCwxLjQ3LS4zMiwyLjYyLS45NywzLjQ1cy0xLjc1LDEuMjQtMy4zMSwxLjI0aC00LjU1di0zMS'+
			'45Mmg4LjQ2djEuMzhoLTcuMDhabTAsMTAuNHYxOC43MmgzLjM2Yy45OCwwLDEuNjgtLjMsMi4wOS0uOS40MS0uNi42Mi0xLjI5LjYyLTIuMDl2LTEyLjdjMC0uOC0uMjEtMS41LS42Mi0yLjEycy0xLjExLS45Mi0yLjA5LS45MmgtMy4zNloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMzIuNDUsMzUuMjFsLTMuNzcsMjguMzhjLS4xNSwxLjEtLjU2LDEuOTctMS4yMiwyLjYtLjY2LjYzLTEuNjYuOTQtMy4wMS45NGgtMS4yNHYtMS4zOGgxLjQzYy44NiwwLDEuNS0uMjQsMS45MS0uNzFzLjY3LTEuMDUuNzYtMS43M2wuODMtNi4zNWgtMy41NHYtLjA1bC0zLjMxLTIxLjcxaDEuNDNsMy4w'+
			'OCwyMC4zOGgyLjU4bDIuNjctMjAuMzhoMS40M1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtNDIuNjYsNjUuNzVoMS40N3Y1LjM4aC0xLjJsLS4zMi00aC05LjQzbC0uMzIsNGgtMS4ybC4wNS01LjM4Yy43NywwLDEuMzItLjE4LDEuNjYtLjUzLjM0LS4zNS41Mi0uOTMuNTUtMS43MmwxLjItMjguMjloNy41NHYzMC41NFptLTEuMzgsMHYtMjkuMTZoLTQuNzhsLTEuMiwyNi45MWMtLjAzLDEuMS0uMzQsMS44Ni0uOTIsMi4yNWg2LjlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTU3LjAyLDM1LjIxbC0zLjc3LDI4LjM4Yy0uMTUsMS4xLS41NiwxLjk3LTEuMjIsMi42LS42Ni'+
			'42My0xLjY2Ljk0LTMuMDEuOTRoLTEuMjR2LTEuMzhoMS40M2MuODYsMCwxLjUtLjI0LDEuOTEtLjcxcy42Ny0xLjA1Ljc2LTEuNzNsLjgzLTYuMzVoLTMuNTR2LS4wNWwtMy4zMS0yMS43MWgxLjQzbDMuMDgsMjAuMzhoMi41OGwyLjY3LTIwLjM4aDEuNDNaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTc2Ljc1LDY1Ljc1djUuMzhoLTEuMmwtLjMyLTRoLTE1Ljk2di0zMS45MmgxLjM4djMwLjU0aDUuNTd2LTMwLjU0aDEuMzh2MzAuNTRoNS41MnYtMzAuNTRoMS4zOHYzMC41NGgyLjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im04Ni45NiwzNS4yMXYxLjM4aC03LjA4djku'+
			'MDJoNS4zNHYxLjM4aC01LjM0djE4Ljc3aDcuMDh2MS4zOGgtOC40NnYtMzEuOTJoOC40NloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtOTcuODYsMzUuMjF2MS4zOGgtNy4wOHY5LjAyaDUuMzR2MS4zOGgtNS4zNHYxOC43N2g3LjA4djEuMzhoLTguNDZ2LTMxLjkyaDguNDZaIiBjbGFzcz0iY2xzLTMiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_12__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg sfu-year-future";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 22px;';
		hs+='height : 71px;';
		hs+='position : absolute;';
		hs+='right : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_12.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_ui.appendChild(me._tablet_svg_12);
		el=me._tablet_svg_11=document.createElement('div');
		els=me._tablet_svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTA0Ljg3IDEyOS4yIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjQyNTI3OwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgIC'+
			'AgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNzVweDsKICAgICAgfQoKICAgICAgLmNscy0zLCAuY2xzLTQgewogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMCAwIDEwNC43NCA3LjYgMTA0Ljg3'+
			'IDEyOS4yIC4wOCAxMjcuNDkgMCAwIi8+CiAgPGc+CiAgIDxsaW5lIHgxPSI0My4zNCIgeTI9Ijk4LjkyIiB4Mj0iNjQuMjkiIHkxPSI5OC45MiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2MS42NCAxMDIuMTggNjEuMSAxMDEuNiA2My45OCA5OC45MiA2MS4xIDk2LjIzIDYxLjY0IDk1LjY1IDY1LjE2IDk4LjkyIDYxLjY0IDEwMi4xOCIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTM0LjMsNjcuNTJ2MTMuNTZoLTE1LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuND'+
			'ItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im01MS4yNyw3NC4zNGMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIu'+
			'NDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjM1LjcxWm0tMi4xMy0zNi4xNGMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUxLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djM2LjQ5YzAsMS4yMy4zMiwyLjMyLjk2LDMuMjcuNjQuOT'+
			'UsMS43MiwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMzYuNDlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTY5LjI0LDY3LjUydjEzLjU2aC0xNS41NXYtMjAuMjRsMTMuNDItMjAuMDl2LTIuNTZjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MSwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3YzLjE5aC0yLjEzdi0yLjc3YzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0x'+
			'LjkyaDIuNDFjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YyLjc3bC0xMy40MiwyMC4wOXYxNy40N2gxMS4yOXYtMTEuNDNoMi4xM1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtNzkuNTMsNDcuODVjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zMnYxOS4yNGMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIuNDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3Lj'+
			'UtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdoLTIuMTN2LTMuMTljMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3Y5LjY2aDYuODlabTQuNCw2LjgyYzAtMS4yMy0uMzItMi4zMS0uOTYtMy4yMy0uNjQtLjkyLTEuNzItMS4zOC0zLjIzLTEuMzhoLTcuMXYyNC42NGMwLDEuMjMuMzIsMi4zMi45NiwzLjI3LjY0'+
			'Ljk1LDEuNzEsMS40MiwzLjIzLDEuNDJoMi45MWMxLjUxLDAsMi41OS0uNDcsMy4yMy0xLjQyLjY0LS45NS45Ni0yLjAzLjk2LTMuMjd2LTIwLjAyWiIgY2xhc3M9ImNscy0zIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._tablet_svg_11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg sfu-year-2026";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 21px;';
		hs+='height : 76px;';
		hs+='position : absolute;';
		hs+='right : 84px;';
		hs+='visibility : hidden;';
		hs+='width : 68px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_11.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_ui.appendChild(me._tablet_svg_11);
		el=me._tablet_svg_9=document.createElement('div');
		els=me._tablet_svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTA5LjM5IDEzNC4yNiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgIC'+
			'AgICAgc3Ryb2tlOiAjMDAwOwogICAgICAgIHN0cm9rZS13aWR0aDogLjc1cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy00IHsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICMyNDI1Mjc7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuOHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjAgMTkuNjIgOTAuMyAwIDEwOS4z'+
			'IDEuMzggMTA5LjM5IDEyOC44NyAxMDEuNDkgMTI4Ljc0IDM4LjM2IDEzNC4yNiAwIDExNS4xOSAwIDE5LjYyIi8+CiAgPGc+CiAgIDxsaW5lIHgxPSI0My41NiIgeTI9IjEwMC4yOSIgeDI9IjY0LjUxIiB5MT0iMTAwLjI5IiBjbGFzcz0iY2xzLTQiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYxLjg2IDEwMy41NiA2MS4zMiAxMDIuOTggNjQuMiAxMDAuMyA2MS4zMiA5Ny42MSA2MS44NiA5Ny4wMyA2NS4zOCAxMDAuMyA2MS44NiAxMDMuNTYiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Im00NC42MSw2OC45djEzLjU2aC0xNS41NXYtMjAuMjRsMTMuNDItMjAuMDl2LT'+
			'IuNTZjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3YzLjE5aC0yLjEzdi0yLjc3YzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0xLjkyaDIuNDFjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YyLjc3bC0xMy40MiwyMC4wOXYxNy40N2gxMS4yOXYtMTEuNDNoMi4xM1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtNjEuNTgsNzUuNzJjMCwyLjIzLS40OSwz'+
			'Ljk4LTEuNDYsNS4yNS0uOTcsMS4yOC0yLjY2LDEuOTItNS4wOCwxLjkyaC0yLjQxYy0yLjQxLDAtNC4xMi0uNjQtNS4xMS0xLjkyLS45OS0xLjI4LTEuNDktMy4wMy0xLjQ5LTUuMjV2LTM1LjcxYzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0xLjkyaDIuNDFjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YzNS43MVptLTIuMTMtMzYuMTRjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MSwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi'+
			'4wNC0uOTYsMy4yN3YzNi40OWMwLDEuMjMuMzIsMi4zMi45NiwzLjI3LjY0Ljk1LDEuNzIsMS40MiwzLjIzLDEuNDJoMi45MWMxLjUxLDAsMi41OS0uNDcsMy4yMy0xLjQyLjY0LS45NS45Ni0yLjAzLjk2LTMuMjd2LTM2LjQ5WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im02OS40NiwzMy4xOXY0OS4yN2gtMi4xM3YtNDcuMTRoLTYuMTF2LTIuMTNoOC4yNFoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtODAuNjcsMzMuMTl2NDkuMjdoLTIuMTN2LTQ3LjE0aC02LjExdi0yLjEzaDguMjRaIiBjbGFzcz0iY2xzLTMiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg sfu-year-2011";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 19px;';
		hs+='height : 79px;';
		hs+='position : absolute;';
		hs+='right : 145px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_ui.appendChild(me._tablet_svg_9);
		el=me._tablet_button=document.createElement('div');
		els=me._tablet_button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tablet_button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text audio_control";
		el.ggType='text';
		hs ='';
		hs+='bottom : -106px;';
		hs+='height : 7px;';
		hs+='left : 27px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 7px;';
		hs+='height: 7px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tablet_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_button.ggUpdatePosition=function (useTransition) {
		}
		me._tablet_ui.appendChild(me._tablet_button);
		el=me._tablet_svg_70=document.createElement('div');
		els=me._tablet_svg_70__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjgzLjc4IDEuNSIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iLjUiIHkyPSIxIiB4Mj0iNjIuODMiIHkxPSIxIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iNTIzLjQxIiB5Mj0iLjUiIHgyPSI2ODMuMjgiIHkxPSIuNSIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_70__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 7";
		el.ggDx=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 29px;';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 422px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_70.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tablet_ui.appendChild(me._tablet_svg_70);
		el=me._tablet_svg_20=document.createElement('div');
		els=me._tablet_svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzYgNzAiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxjaXJjbGUgY3'+
			'g9IjE3LjUiIHI9IjE3IiBjeT0iMTcuNSIgY2xhc3M9ImNscy0xIi8+CiAgPGNpcmNsZSBjeD0iMTgiIHI9IjE3IiBjeT0iMzUiIGNsYXNzPSJjbHMtMSIvPgogIDxjaXJjbGUgY3g9IjE4LjUiIHI9IjE3IiBjeT0iNTIuNSIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_20__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 20";
		el.ggDx=-84;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 24px;';
		hs+='height : 91px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._tablet_ui.appendChild(me._tablet_svg_20);
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container locations_panel";
		el.ggType='container';
		hs ='';
		hs+='height : 328px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 166px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._tablet_left_panel=document.createElement('div');
		els=me._tablet_left_panel__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzM0LjczIDU1OC4xNyIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'0zIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNCwgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC7'+
			'0L7QuV8xLTIiPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDcuOTQgMzI1IDAgMzM0LjczIDExNC4xNyAyOTYuNTUgMTE0LjE3IDIxMS40OSA0ODQuMTcgMjI2IDQ5NC4xNyAyMzAgNTI0LjE3IDE3NyA1NTguMTcgMjAgNTE3LjE3IDIyIDIzOS4xNyAxNSAyMzYuMTcgMCA3Ljk0Ii8+CiAgPGxpbmUgeDE9IjM2LjUiIHkyPSIxOTMuNjciIHgyPSIzNi41IiB5MT0iNTEyLjY3IiBjbGFzcz0iY2xzLTUiLz4KICA8Zz4KICAgPGxpbmUgeDE9IjEyMi43IiB5Mj0iMTUyLjE3IiB4Mj0iMjIxLjAxIiB5MT0iMTUyLjE3IiBjbGFzcz0iY2xzLTQiLz4KICAgPHBvbHlnb24gY2xhc3M9Im'+
			'Nscy0yIiBwb2ludHM9IjIxNy43IDE1Ni4yNiAyMTcuMDIgMTU1LjUyIDIyMC42MyAxNTIuMTcgMjE3LjAyIDE0OC44MSAyMTcuNyAxNDguMDggMjIyLjEgMTUyLjE3IDIxNy43IDE1Ni4yNiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTExNS41Niw2OS43OXYtOS40MWgtMy44NnY5LjQxaC0yLjIydi0xMS40aDguMzF2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTIwLjU5LDY5Ljc5di0xMS40aDcuNTF2MS45OGgtNS4yOHYyLjY3aDQuNXYxLjk4aC00LjV2Mi43N2g1LjI4djEuOThoLTcuNTFaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTEzNC44'+
			'NSw2NS41aC0yLjE5djQuMjloLTIuMjJ2LTExLjRoNC40MmMyLjM3LDAsMy43NiwxLjYyLDMuNzYsMy41NXMtMS4zOSwzLjU1LTMuNzYsMy41NVptLS4xMS01LjEyaC0yLjA4djMuMTJoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU1cy0uNjQtMS41Ny0xLjY1LTEuNTdaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTE0OC4yLDY0LjU1Yy41LjUzLjcsMS4xNy43LDEuOTcsMCwyLTEuMzQsMy4yNy0zLjQ5LDMuMjdoLTQuNzd2LTExLjRoNC41OGMyLjE1LDAsMy41MiwxLjIyLDMuNTIsMy4xNCwwLDEuMDktLjQ2LDEuODktMS40MSwyLjQyLjQ1LjI0LjYyLjM3Ljg2LjYxWm0tMy4xNS'+
			'0xLjU1Yy45MSwwLDEuNDctLjUsMS40Ny0xLjMxcy0uNTYtMS4zMS0xLjQ3LTEuMzFoLTIuMTh2Mi42MmgyLjE4Wm0uMTQsNC44Yy45MSwwLDEuNDktLjU0LDEuNDktMS40MXMtLjU4LTEuMzktMS40OS0xLjM5aC0yLjMydjIuOGgyLjMyWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNTUuODEsNjkuNzloLTQuNDh2LTExLjRoMi4yMnY0LjI5aDIuMjZjMi4yMiwwLDMuNywxLjQ3LDMuNywzLjU1cy0xLjQ5LDMuNTUtMy43LDMuNTVabS0uMTgtNS4xMmgtMi4wOHYzLjE0aDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41N3MtLjY0LTEuNTctMS42NS0xLjU3Wm01LjExLDUuMTJ2LTEx'+
			'LjRoMi4yM3YxMS40aC0yLjIzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNzIuMTksNjkuNzl2LTcuMzFsLTQuNDMsNy4zMWgtMS45OHYtMTEuNGgyLjIydjcuM2w0LjQzLTcuM2gxLjk4djExLjRoLTIuMjNabS0yLjA4LTEyYy0xLjI2LDAtMi41My0uNTYtMi41OS0yLjI5aDEuNTdjLjA1LjcuNDUuOTksMS4wMi45OXMuOTgtLjI5LDEuMDItLjk5aDEuNTdjLS4wNiwxLjczLTEuMzMsMi4yOS0yLjU5LDIuMjlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTExNS43OCw4OC40N3YxLjM5aC0yLjIzdi0xLjM5Yy0zLjM5LS4xMy00LjgtMS44NC00LjgtNC43NHMxLjQxLTQuNT'+
			'ksNC44LTQuNzR2LTEuMTJoMi4yM3YxLjEyYzMuMzkuMTQsNC44MiwxLjg0LDQuODIsNC43NHMtMS40Miw0LjYxLTQuODIsNC43NFptLTIuMTktNy41OWMtMS45LjEtMi42MS45OS0yLjYxLDIuODVzLjcsMi43NywyLjYxLDIuODV2LTUuN1ptMi4xNiwwdjUuN2MxLjkyLS4wOCwyLjYyLS45OSwyLjYyLTIuODVzLS43LTIuNzUtMi42Mi0yLjg1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xMjIuNTgsODkuNzl2LTExLjRoNy41MXYxLjk4aC01LjI4djIuNjdoNC41djEuOThoLTQuNXYyLjc3aDUuMjh2MS45OGgtNy41MVoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTM5Ljc4'+
			'LDkyLjMxdi0yLjUzaC02LjMydjIuNTNoLTIuMTV2LTQuNTFoMS4wN2MuOTQtMS40NiwxLjM2LTMuODcsMS4zNi02LjV2LTIuOTFoNi44N3Y5LjQxaDEuMzF2NC41MWgtMi4xNVptLTEuMzktMTEuOTRoLTIuNTF2MS42NWMwLDIuMjYtLjIyLDQuMTktMS4wMSw1Ljc4aDMuNTJ2LTcuNDNaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTE0My44Niw4OS43OXYtMTEuNGg3LjUxdjEuOThoLTUuMjh2Mi42N2g0LjV2MS45OGgtNC41djIuNzdoNS4yOHYxLjk4aC03LjUxWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNTguMTEsODUuNWgtMi4xOXY0LjI5aC0yLjIydi0xMS40aDQuND'+
			'JjMi4zNywwLDMuNzYsMS42MiwzLjc2LDMuNTVzLTEuMzksMy41NS0zLjc2LDMuNTVabS0uMTEtNS4xMmgtMi4wOHYzLjEyaDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41NXMtLjY0LTEuNTctMS42NS0xLjU3WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNjkuNTksODkuNzlsLS42Ny0yLjAyaC00LjA1bC0uNjksMi4wMmgtMi4zMmw0LjE1LTExLjRoMS43NGw0LjE2LDExLjRoLTIuMzJabS0yLjY2LTguMDRsLTEuNDQsNC4xNWgyLjgzbC0xLjM5LTQuMTVaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTE3OS44OCw4OS43OXYtOS40MWgtMi43MnYzLjMxYzAsNC43OS0x'+
			'LjE3LDYuMS0zLjU0LDYuMWgtLjg4di0xLjk4aC4zMmMxLjE0LDAsMS45NS0uNjcsMS45NS00LjI0di01LjE3aDcuMDl2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTg5LjQxLDg5Ljc5aC00LjQ4di0xMS40aDIuMjJ2NC4yOWgyLjI2YzIuMjIsMCwzLjcsMS40NywzLjcsMy41NXMtMS40OSwzLjU1LTMuNywzLjU1Wm0tLjE4LTUuMTJoLTIuMDh2My4xNGgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTdzLS42NC0xLjU3LTEuNjUtMS41N1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMjAxLjIyLDg5Ljc5di00Ljc3aC0zLjg2djQuNzdoLTIuMjJ2LT'+
			'ExLjRoMi4yMnY0LjY2aDMuODZ2LTQuNjZoMi4yMnYxMS40aC0yLjIyWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0yMTAuNzQsODkuNzloLTQuNDh2LTExLjRoMi4yMnY0LjI5aDIuMjZjMi4yMiwwLDMuNywxLjQ3LDMuNywzLjU1cy0xLjQ5LDMuNTUtMy43LDMuNTVabS0uMTgtNS4xMmgtMi4wOHYzLjE0aDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41N3MtLjY0LTEuNTctMS42NS0xLjU3Wm01LjExLDUuMTJ2LTExLjRoMi4yM3YxMS40aC0yLjIzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0yMjcuMTIsODkuNzl2LTcuMzFsLTQuNDMsNy4zMWgtMS45OHYtMTEuNGgy'+
			'LjIydjcuM2w0LjQzLTcuM2gxLjk4djExLjRoLTIuMjNabS0yLjA4LTEyYy0xLjI2LDAtMi41My0uNTYtMi41OS0yLjI5aDEuNTdjLjA1LjcuNDUuOTksMS4wMi45OXMuOTgtLjI5LDEuMDItLjk5aDEuNTdjLS4wNiwxLjczLTEuMzMsMi4yOS0yLjU5LDIuMjlaIiBjbGFzcz0iY2xzLTMiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Im03Ni4yMyw3Ny44NnYtNy41M2MyLjU4LS41MSw0LjUyLTIuNzgsNC41Mi01LjUsMC0zLjEtMi41MS01LjYxLTUuNjEtNS42MS0xLjU0LDAtMi45My42Mi0zLjk1LDEuNjJsLTcuMDctNC40Yy4wMy0uMjIuMDQtLjQ0LjA0LS42NywwLTMuMS0yLjUxLTUuNjEtNS'+
			'42MS01LjYxcy01LjYxLDIuNTEtNS42MSw1LjYxLDIuNTEsNS42MSw1LjYxLDUuNjFjMi4wOCwwLDMuOS0xLjE0LDQuODctMi44Mmw2LjU1LDQuMDhjLS4yOS42Ny0uNDQsMS40MS0uNDQsMi4xOSwwLDIuNzMsMS45NSw1LDQuNTIsNS41djcuNTNjLTIuNTguNTEtNC41MiwyLjc4LTQuNTIsNS41LDAsMy4xLDIuNTEsNS42MSw1LjYxLDUuNjFzNS42MS0yLjUxLDUuNjEtNS42MWMwLTIuNzMtMS45NS01LTQuNTItNS41IiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTY0LjE3LDc0LjFjMC0zLjEtMi41MS01LjYxLTUuNjEtNS42MXMtNS42MSwyLjUxLTUuNjEsNS42MWMwLDIuNzMsMS45NSw1'+
			'LDQuNTIsNS41djcuNDVjLTEuMzguMjctMi41OCwxLjA1LTMuNCwyLjEzbC02LjMtMy45M2MuMjEtLjU5LjMzLTEuMjMuMzMtMS44OSwwLTIuNzMtMS45NS01LTQuNTItNS41di03LjUzYzIuNTgtLjUxLDQuNTItMi43OCw0LjUyLTUuNSwwLTMuMS0yLjUxLTUuNjEtNS42MS01LjYxcy01LjYxLDIuNTEtNS42MSw1LjYxYzAsMi43MywxLjk1LDUsNC41Miw1LjV2Ny41M2MtMi41OC41MS00LjUyLDIuNzgtNC41Miw1LjUsMCwzLjEsMi41MSw1LjYxLDUuNjEsNS42MSwxLjY2LDAsMy4xNC0uNzIsNC4xNy0xLjg2bDYuNDcsNC4wM2MtLjEyLjQ1LS4xOC45Mi0uMTgsMS40MSwwLDMuMSwyLjUxLDUuNj'+
			'EsNS42MSw1LjYxczUuNjEtMi41MSw1LjYxLTUuNjFjMC0yLjczLTEuOTUtNS00LjUyLTUuNXYtNy40NWMyLjU4LS41MSw0LjUyLTIuNzgsNC41Mi01LjUiIGNsYXNzPSJjbHMtMyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._tablet_left_panel__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_left_panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 457px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 255px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_left_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_left_panel.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._tablet_left_panel);
		el=me._tablet_locations=document.createElement('div');
		els=me._tablet_locations__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tablet_locations";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text list_locations";
		el.ggType='text';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 57px;';
		hs+='position : absolute;';
		hs+='top : 201px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 10px;';
		hs+='height: 10px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";(function(){

var LOCATIONS = [
    {key:"library", label:"Библиотека", nodes:{"2011":"node18","2026":"node1","future":"node10"}},
    {key:"well", label:"«Колодцы»", nodes:{"2011":"node20","2026":"node5","future":"node13"}},
    {key:"dashi", label:"«Трансформация»", nodes:{"2011":"node17","2026":"node2","future":"node24"}},
    {key:"pyramid", label:"«Пирамида»", nodes:{"2011":"node22","2026":"node7","future":"node15"}},
    {key:"inig", label:"ИниГ", nodes:{"2011":"node16","2026":"node3","future":"node11"}},
    {key:"ifksit", label:"Спорткомплекс", nodes:{"2011":"node19","2026":"node4","future":"node12"}},
    {key:"stadium", label:"Стадион", nodes:{"2011":"node23","2026":"node8","future":"node9"}},
    {key:"dorm", label:"Общежития", nodes:{"2011":"node21","2026":"node6","future":"node14"}}
];

var ROOT_ID = "sfu-location-menu-tablet";
var STYLE_ID = "sfu-location-menu-style-tablet";


/* Удаляем только старую TABLET-версию */

var oldRoot = document.getElementById(ROOT_ID);
if (oldRoot) oldRoot.remove();

var oldStyle = document.getElementById(STYLE_ID);
if (oldStyle) oldStyle.remove();


/* ---------------- CSS ---------------- */

var style = document.createElement("style");
style.id = STYLE_ID;

style.textContent = `

#${ROOT_ID} {

    position: fixed;

    left: 38px;
    top: 120px;

    z-index: 999999;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1px;

    font-family: Arial, sans-serif;
    font-size: 12px;
    line-height: 1;

    pointer-events: auto;
}


#${ROOT_ID} .sfu-location-item {

    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    padding: 5px 12px;

    border: 0;
    background: transparent;

    color: #242527;

    font: inherit;
    line-height: 1;

    white-space: nowrap;

    cursor: pointer;

    opacity: 0.65;

    appearance: none;
    -webkit-appearance: none;
}


#${ROOT_ID} .sfu-location-item[data-location="dashi"] {
    transform: translateX(-.75em);
}
#${ROOT_ID} .sfu-location-item[data-location="pyramid"] {
    transform: translateX(-.5em);
}
#${ROOT_ID} .sfu-location-item[data-location="well"] {
    transform: translateX(-.5em);
}

#${ROOT_ID} .sfu-location-item:hover {

    opacity: 1;
}


#${ROOT_ID} .sfu-location-item.active {

    opacity: 1;
    font-weight: 700;
}


#${ROOT_ID} .sfu-location-item.active::after {

    content: "";

    position: absolute;

    left: -7px;
    right: -7px;
    top: -4px;
    bottom: -4px;

    border: 2px solid #d8561f;
    border-radius: 50%;

    transform: rotate(-2deg);

    pointer-events: none;
}


/* TABLET работает только от 700px до 1199px */

@media (max-width: 699px) {

    #${ROOT_ID} {
        display: none !important;
    }

}

@media (min-width: 1200px) {

    #${ROOT_ID} {
        display: none !important;
    }

}

`;

document.head.appendChild(style);


/* ---------------- СОЗДАЁМ СПИСОК ---------------- */

var root = document.createElement("div");
root.id = ROOT_ID;

document.body.appendChild(root);


function cleanNodeId(id) {

    return String(id || "")
        .replace(/^#/, "")
        .trim();
}


function getCurrentNode() {

    try {

        if (window.pano && typeof pano.getCurrentNode === "function") {
            return cleanNodeId(pano.getCurrentNode());
        }

    } catch(e) {}

    return "";
}


function getState() {

    var node = getCurrentNode();

    for (var i = 0; i < LOCATIONS.length; i++) {

        var loc = LOCATIONS[i];

        for (var era in loc.nodes) {

            if (cleanNodeId(loc.nodes[era]) === node) {

                return {
                    location: loc,
                    era: era
                };

            }
        }
    }

    return {
        location: LOCATIONS[0],
        era: "2026"
    };
}


function openLocation(location) {

    var state = getState();

    var era = state.era || "2026";

    var node = location.nodes[era];

    if (!node) {
        node = location.nodes["2026"];
    }

    if (
        window.pano &&
        typeof pano.openNext === "function"
    ) {

        pano.openNext("{" + node + "}", "");

    }
}


function updateActive() {

    var state = getState();

    var buttons =
        root.querySelectorAll(".sfu-location-item");

    buttons.forEach(function(button) {

        if (
            button.dataset.location ===
            state.location.key
        ) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    });
}


LOCATIONS.forEach(function(location) {

    var button =
        document.createElement("button");

    button.type = "button";

    button.className =
        "sfu-location-item";

    button.dataset.location =
        location.key;

    button.textContent =
        location.label;


    button.addEventListener(
        "click",
        function(){

            openLocation(location);

        }
    );


    root.appendChild(button);

});


updateActive();


/* ---------------- PANO2VR EVENTS ---------------- */

try {

    if (
        window.pano &&
        typeof pano.addListener === "function"
    ) {

        pano.addListener(
            "changenode",
            updateActive
        );

        pano.addListener(
            "configloaded",
            updateActive
        );

        pano.addListener(
            "imagesready",
            updateActive
        );

    }

} catch(e) {}


})();
		el.appendChild(els);
		me._tablet_locations.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_locations.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._tablet_locations);
		me._tablet_ui.appendChild(me._container_3);
		me.divSkin.appendChild(me._tablet_ui);
		el=me._desktop_ui=document.createElement('div');
		el.ggId="desktop_ui";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container desktop_ui";
		el.ggType='container';
		hs ='';
		hs+='height : 2832px;';
		hs+='left : -915px;';
		hs+='position : absolute;';
		hs+='top : -1365px;';
		hs+='visibility : inherit;';
		hs+='width : 3042px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._desktop_ui.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._desktop_ui.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_14=document.createElement('div');
		els=me._svg_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTE4OCAzMjA4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
			'ExMjkuMDQgMTAzMS45OSAxMTU5IDEzNDIgMTA0NC42NCAyMDU2LjQyIDExMjYuNiAyNDg2LjM1IDExODggMzIwOCAwIDMyMDggNjEgMCAxMTg4IDAgMTEyOS4wNCAxMDMxLjk5Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_14__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 2832px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 1063px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._desktop_ui.appendChild(me._svg_14);
		el=me._svg_16=document.createElement('div');
		els=me._svg_16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzM0MSAxMTM3LjUzIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
			'M9IjYyNCAxMDY2IDYyNCAxMDY1LjU4IDY1Ni4wMyAxMDYzLjY0IDk0OC4zOCAxMDM5IDIwNzAuNTcgMTA4OS43NiAyNTgyIDExMzcuNTMgMzI0MSAxMDk1IDMzNDEgMzQgMCAwIDAgMTA5NCA2MjQgMTA2NiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_16__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=389;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 764px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 716px;';
		hs+='visibility : inherit;';
		hs+='width : 2266px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._desktop_ui.appendChild(me._svg_16);
		el=me._svg_13=document.createElement('div');
		els=me._svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzI0NyAxMzcwLjY4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
			'M9IjI1NjAuODEgNzAuODMgMjE3Ni4wMSAzNi4zMyAxODY1LjYxIDEwNSAxMTUxLjU4IDg4LjM0IDcwMiAxMzUuNjggMCAwIDAgMTM3MC42OCAzMjQ3IDEzNzAuNjggMzIwOCAwIDI1NjAuODEgNzAuODMiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_13__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 13";
		el.ggDx=423;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -228px;';
		hs+='height : 1092px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 2538px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tablet_svg_7=document.createElement('div');
		els=me._tablet_svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjgzLjc4IDEuNSIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iLjUiIHkyPSIxIiB4Mj0iNjIuODMiIHkxPSIxIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iNTIzLjQxIiB5Mj0iLjUiIHgyPSI2ODMuMjgiIHkxPSIuNSIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._tablet_svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="tablet_Svg 7";
		el.ggDx=-294;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 912px;';
		hs+='height : 116px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 617px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tablet_svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tablet_svg_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._svg_13.appendChild(me._tablet_svg_7);
		me._desktop_ui.appendChild(me._svg_13);
		el=me._svg_21=document.createElement('div');
		els=me._svg_21__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjY4LjIxIDE0MiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iMTUzLjYxIiB5Mj0iLjUiIHgyPSIyNDQuNjEiIHkxPSIxNDEuNSIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9Ii41IiB5Mj0iNDEuNSIgeDI9IjI2Ny43MSIgeTE9IjQxLjUiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_21__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 1611px;';
		hs+='position : absolute;';
		hs+='top : 2051px;';
		hs+='visibility : hidden;';
		hs+='width : 268px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_21.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_21);
		el=me._svg_15=document.createElement('div');
		els=me._svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTE1MSAzMjA4IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
			'gyLjMyIDY0Ny4xOSA0Mi4yMiAxMDMxLjk5IDg3IDEzNDAgNDkgMTY1NCAxMDIuNjggMjA1Ni40MiAxNC44NCAyMjQ4IDQzLjk3IDI0ODYuMzUgMCAzMjA4IDExNTEgMzIwOCAxMTI2IDAgMCAwIDgyLjMyIDY0Ny4xOSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_15__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 15";
		el.ggDy=180;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 1958px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 731px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._desktop_ui.appendChild(me._svg_15);
		el=me._background=document.createElement('div');
		els=me._background__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzIwOCAxNzkyLjM2IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBhdGggZD0ibTAsMHYxNzkyLjM2aDMyMDhWME'+
			'gwWm0yNTYwLjgxLDEyMjAuNTFsLTM4NC44LTM0LjUtMzEwLjQsNjguNjctNTY1LjI4LTg3Ljg3LTE0OC43Niw3MS4yMS0zOTMuMzktNjUuMzktMzYuNTMsMTQuODgtOTcuNjUtNDIuMzhWNDQyLjI2bDMyLjAzLTEuOTUsMjkyLjM1LTI0LjY0LDExMjIuMTksNTAuNzYsNTExLjQzLDQ3Ljc3LTIxLjE5LDcwNi4zWiIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._background__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 1428px;';
		hs+='left : 184px;';
		hs+='position : absolute;';
		hs+='top : 1046px;';
		hs+='visibility : hidden;';
		hs+='width : 3017px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._background.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._background);
		el=me._svg_17=document.createElement('div');
		els=me._svg_17__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNzEzIDIxOSIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm'+
			'9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZTFlMGRjOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI0IDguNTEgMCAyMTkgMjkxIDIwNC4zIDQzNCAyMDMuNTIgNjMyIDE4MS44NiA3MTMgMTc3Ljk5IDcwMiAwIDI0IDguNTEiLz4KICA8Zz4KICAgPGxpbmUgeDE9IjE1MC41IiB5Mj0iMzkuNSIgeDI9IjIxMC41MyIgeTE9IjM5LjUiIGNsYXNzPSJjbHMtMyIvPgogICA8cG9seWdvbiBj'+
			'bGFzcz0iY2xzLTEiIHBvaW50cz0iMjA3LjIyIDQzLjU5IDIwNi41MyA0Mi44NiAyMTAuMTUgMzkuNSAyMDYuNTMgMzYuMTQgMjA3LjIyIDM1LjQxIDIxMS42MSAzOS41IDIwNy4yMiA0My41OSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_17__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg location_title";
		el.ggType='svg';
		hs ='';
		hs+='height : 173px;';
		hs+='position : absolute;';
		hs+='right : 646px;';
		hs+='top : 1379px;';
		hs+='visibility : inherit;';
		hs+='width : 559px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_17.ggUpdatePosition=function (useTransition) {
		}
		el=me._location_title=document.createElement('div');
		els=me._location_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="location_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 94px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 44px;';
		hs+='visibility : inherit;';
		hs+='width : 459px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Pobeda\", sans-serif; font-size: clamp(48px, 6vw, 84px); line-height: 0.85; font-weight: 400; color: #111; -webkit-text-stroke: 1px #111; background: transparent; border: none; box-shadow: none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: 459px;';
		hs+='height: 94px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._location_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._location_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._location_title.ggUpdateText();
		});
		el.appendChild(els);
		me._location_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._location_title.ggUpdatePosition=function (useTransition) {
		}
		me._svg_17.appendChild(me._location_title);
		el=me._svg_18=document.createElement('div');
		els=me._svg_18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNzguODIgMTQuMDIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8Zz4KICAgPHBhdGggZD0ibTcuMTQsMTEuNDlWMi'+
			'4wOGgtMi43MnYzLjMxYzAsNC43OS0xLjE3LDYuMS0zLjU0LDYuMWgtLjg4di0xLjk4aC4zMmMxLjE0LDAsMS45NS0uNjcsMS45NS00LjI0Vi4xaDcuMDl2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtMTguOSwxMC4zOWMtLjc3Ljc3LTEuNzMsMS4yLTMuMDQsMS4ycy0yLjI5LS40My0zLjA2LTEuMmMtMS4xNC0xLjE0LTEuMTUtMi40Mi0xLjE1LTQuNTlzLjAyLTMuNDYsMS4xNS00LjU5Yy43Ny0uNzcsMS43NS0xLjIsMy4wNi0xLjJzMi4yNy40MywzLjA0LDEuMmMxLjE0LDEuMTQsMS4xNywyLjQyLDEuMTcsNC41OXMtLjAzLDMuNDYtMS4xNyw0LjU5Wm0tMS42Mi03'+
			'Ljc5Yy0uMzItLjM3LS44Mi0uNjEtMS40Mi0uNjFzLTEuMS4yNC0xLjQ0LjYxYy0uNDIuNDgtLjU0LDEuMDItLjU0LDMuMnMuMTMsMi43MS41NCwzLjE5Yy4zNC4zNy44My42MiwxLjQ0LjYyczEuMS0uMjYsMS40Mi0uNjJjLjQyLS40OC41Ni0xLjAxLjU2LTMuMTlzLS4xNC0yLjcyLS41Ni0zLjJaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTIyLjM3LDExLjQ5Vi4xaDIuMjJ2MTEuNGgtMi4yMlptNi4yNCwwbC00LTUuOTdMMjguMjkuMWgyLjY2bC0zLjgzLDUuMzUsNC4yMSw2LjA1aC0yLjcyWiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0zOS40NywxMS40OWwtLjY3LTIuMD'+
			'JoLTQuMDVsLS42OSwyLjAyaC0yLjMyTDM1Ljg5LjFoMS43NWw0LjE2LDExLjRoLTIuMzJabS0yLjY2LTguMDRsLTEuNDQsNC4xNWgyLjgzbC0xLjM5LTQuMTVaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTUwLjY5LDE0LjAydi0yLjUzaC03LjQ5Vi4xaDIuMjN2OS40MWgzLjg2Vi4xaDIuMjJ2OS40MWgxLjMzdjQuNTFoLTIuMTVaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTYxLjAxLDExLjQ5di03LjMxbC00LjQzLDcuMzFoLTEuOTlWLjFoMi4yM3Y3LjNMNjEuMjUuMWgxLjk4djExLjRoLTIuMjJaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTY3LjcxLDExLjQ5'+
			'aC0yLjY0bDIuMzUtNC43NGMtMS4yLS41NC0xLjk1LTEuNjYtMS45NS0zLjExLDAtMi4xOCwxLjU1LTMuNTUsMy43NS0zLjU1aDQuNDJ2MTEuNGgtMi4yMnYtNC4yOWgtMS44MmwtMS44Nyw0LjI5Wm0zLjctOS40NGgtMi4wOGMtLjk5LDAtMS42NS42Mi0xLjY1LDEuNTdzLjY2LDEuNjIsMS42NSwxLjYyaDIuMDh2LTMuMTlaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTc2LjQ1LDcuMTV2LTIuMzdoMi4zN3YyLjM3aC0yLjM3Wm0wLDQuMzR2LTIuMzdoMi4zN3YyLjM3aC0yLjM3WiIgY2xhc3M9ImNscy0xIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_18__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 18";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 14px;';
		hs+='position : absolute;';
		hs+='right : 455px;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_18.ggUpdatePosition=function (useTransition) {
		}
		me._svg_17.appendChild(me._svg_18);
		me._desktop_ui.appendChild(me._svg_17);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 101px;';
		hs+='left : 1898px;';
		hs+='position : absolute;';
		hs+='top : 1402px;';
		hs+='visibility : inherit;';
		hs+='width : 475px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._container_1);
		el=me._choice=document.createElement('div');
		els=me._choice__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTEyLjg4IDk1LjI3IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICAgIHN0cm9rZS13aWR0aDogLjVweDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTMgewogICAgICAgIHN0cm9rZT'+
			'ogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGxpbmUgeDE9IjExMi4zOCIgeTI9IjkzLjI2IiB4Mj0iMTEyLjM4IiB5MT0iMzAuMjYiIGNsYXNzPSJjbHMtMyIvPgog'+
			'IDxnPgogICA8cGF0aCBkPSJtNi4zLjQydjE5LjQzaC0uODRWMS4yNkgxLjczdjE4LjU5aC0uODRWLjQyaDUuNFoiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtMTMuNDQuNDJjLjk1LDAsMS42Mi4yNSwyLjAyLjc2cy41OSwxLjIuNTksMi4xdjguMzdjMCwuOS0uMiwxLjYtLjU5LDIuMS0uMzkuNS0xLjA2Ljc2LTIuMDIuNzZoLTIuMDR2NS4zNWgtLjg0Vi40MmgyLjg4Wm0xLjc2LDIuNjljMC0uNDktLjEzLS45MS0uMzgtMS4yOS0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZoLTIuMTZ2MTIuMzhoMi4xNmMuNiwwLDEuMDItLjE4LDEuMjctLjU1LjI1LS4zNi4zOC0uNzkuMzgtMS4yN1YzLj'+
			'ExWiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0yNS43NiwxNy4xOWMwLC44OC0uMTksMS41Ny0uNTcsMi4wN3MtMS4wNS43Ni0yLC43NmgtLjY0Yy0uOTUsMC0xLjYyLS4yNS0yLjAyLS43NnMtLjU5LTEuMTktLjU5LTIuMDdWMy4xMWMwLS45LjItMS42LjU5LTIuMXMxLjA2LS43NiwyLjAyLS43NmguNjRjLjk1LDAsMS42Mi4yNSwyLC43NnMuNTcsMS4yLjU3LDIuMXYxNC4wOFptLS44NC0xNC4yNWMwLS40OS0uMTMtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NmgtLjg0Yy0uNiwwLTEuMDIuMTktMS4yNy41Ni0uMjUuMzctLjM4LjgtLjM4LDEuMjl2MTQuMzljMCwu'+
			'NDkuMTMuOTEuMzgsMS4yOS4yNS4zNy42OC41NiwxLjI3LjU2aC44NGMuNiwwLDEuMDItLjE5LDEuMjctLjU2LjI1LS4zNy4zOC0uOC4zOC0xLjI5VjIuOTRaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTM5LjE3LjQydjE5LjQzaC05LjI3Vi40MmguODR2MTguNTloMy4zOVYuNDJoLjg0djE4LjU5aDMuMzZWLjQyaC44NFoiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtNDkuMzEuNDJ2MTkuNDNoLS44NFYxLjI2aC0zLjA1bC0uNzMsMTYuMzhjLS4wNiwxLjQ3LS43NywyLjIxLTIuMTMsMi4yMWgtLjQ4di0uODRoLjM5Yy40OSwwLC44My0uMTEsMS4wMi0uMzIuMi0uMjEuMzEtLj'+
			'U2LjM1LTEuMDVsLjczLTE3LjIyaDQuNzNaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTU5LjMsMTcuMTljMCwuODgtLjE5LDEuNTctLjU3LDIuMDdzLTEuMDUuNzYtMiwuNzZoLS42NGMtLjk1LDAtMS42Mi0uMjUtMi4wMi0uNzYtLjM5LS41LS41OS0xLjE5LS41OS0yLjA3VjMuMTFjMC0uOS4yLTEuNi41OS0yLjEuMzktLjUsMS4wNi0uNzYsMi4wMi0uNzZoLjY0Yy45NSwwLDEuNjIuMjUsMiwuNzZzLjU3LDEuMi41NywyLjF2MTQuMDhabS0uODQtMTQuMjVjMC0uNDktLjEzLS45MS0uMzgtMS4yOS0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZoLS44NGMtLjYsMC0xLjAyLjE5LTEuMjcu'+
			'NTYtLjI1LjM3LS4zOC44LS4zOCwxLjI5djE0LjM5YzAsLjQ5LjEzLjkxLjM4LDEuMjkuMjUuMzcuNjguNTYsMS4yNy41NmguODRjLjYsMCwxLjAyLS4xOSwxLjI3LS41Ni4yNS0uMzcuMzgtLjguMzgtMS4yOVYyLjk0WiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im02OC42LjQydi44NGgtNC4zMXY1LjQ5aDMuMjV2Ljg0aC0zLjI1djExLjQyaDQuMzF2Ljg0aC01LjE1Vi40Mmg1LjE1WiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im02LjY2LDI1LjQydjE5LjQzaC0uODR2LTEyLjI2SDEuNzN2MTIuMjZoLS44NHYtMTkuNDNoLjg0djYuMzNoNC4wOXYtNi4zM2guODRaIiBjbGFzcz'+
			'0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTEwLjI3LDQ0Ljg1bDIuMjEtMTkuNDNoMi41OGwyLjIxLDE5LjQzaC0uODdsLS40OC00LjI2aC00LjMxbC0uNDgsNC4yNmgtLjg3Wm0xLjQzLTUuMWg0LjEybC0xLjUxLTEzLjVoLTEuMDZsLTEuNTQsMTMuNVoiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtMjUuNDIsMzcuMDFoLjg0djUuMThjMCwuODgtLjE5LDEuNTctLjU3LDIuMDctLjM4LjUtMS4wNS43Ni0yLC43NmgtLjY0Yy0uOTUsMC0xLjYyLS4yNS0yLjAyLS43Ni0uMzktLjUtLjU5LTEuMTktLjU5LTIuMDd2LTE0LjA4YzAtLjkuMi0xLjYuNTktMi4xLjM5LS41LDEuMDYtLjc2LDIuMDIt'+
			'Ljc2aC42NGMuOTUsMCwxLjYyLjI1LDIsLjc2LjM4LjUuNTcsMS4yLjU3LDIuMXYzLjE2aC0uODR2LTMuMzNjMC0uNDktLjEzLS45MS0uMzgtMS4yOS0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZoLS44NGMtLjYsMC0xLjAyLjE5LTEuMjcuNTYtLjI1LjM3LS4zOC44LS4zOCwxLjI5djE0LjM5YzAsLjQ5LjEzLjkxLjM4LDEuMjkuMjUuMzcuNjguNTYsMS4yNy41NmguODRjLjYsMCwxLjAyLS4xOSwxLjI3LS41Ni4yNS0uMzcuMzgtLjguMzgtMS4yOXYtNS4zMloiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtMzYuMzEsMjYuMjZoLTMuMTR2MTguNTloLS44NHYtMTguNTloLTMuMTF2LS44NG'+
			'g3LjA4di44NFoiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtNDUuMjUsNDIuMTljMCwuODgtLjE5LDEuNTctLjU3LDIuMDdzLTEuMDUuNzYtMiwuNzZoLS42NGMtLjk1LDAtMS42Mi0uMjUtMi4wMi0uNzYtLjM5LS41LS41OS0xLjE5LS41OS0yLjA3di0xNC4wOGMwLS45LjItMS42LjU5LTIuMS4zOS0uNSwxLjA2LS43NiwyLjAyLS43NmguNjRjLjk1LDAsMS42Mi4yNSwyLC43NnMuNTcsMS4yLjU3LDIuMXYxNC4wOFptLS44NC0xNC4yNWMwLS40OS0uMTMtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NmgtLjg0Yy0uNiwwLTEuMDIuMTktMS4yNy41Ni0uMjUuMzctLjM4'+
			'LjgtLjM4LDEuMjl2MTQuMzljMCwuNDkuMTMuOTEuMzgsMS4yOS4yNS4zNy42OC41NiwxLjI3LjU2aC44NGMuNiwwLDEuMDItLjE5LDEuMjctLjU2LjI1LS4zNy4zOC0uOC4zOC0xLjI5di0xNC4zOVoiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtNTQuNTQsMjUuNDJ2MTkuNDNoLS44NHYtOS44OGgtMi4yMWwtMS43NCw5Ljg4aC0uODdsMS43Ni0xMGMtLjYtLjE3LTEuMDItLjQ5LTEuMjctLjk3LS4yNS0uNDgtLjM4LTEuMDctLjM4LTEuNzh2LTMuODRjMC0uOS4yLTEuNi41OS0yLjEuMzktLjUsMS4wNi0uNzYsMi4wMi0uNzZoMi45NFptLS44NC44NGgtMi4yMWMtLjYsMC0xLjAyLjE5LT'+
			'EuMjcuNTYtLjI1LjM3LS4zOC44LS4zOCwxLjI5djQuMTdjMCwuNDkuMTMuOTEuMzgsMS4yN3MuNjguNTUsMS4yNy41NWgyLjIxdi03Ljg0WiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im02OS40NCw0NC4wMXYzLjI4aC0uNzNsLS4yLTIuNDRoLTkuNzJ2LTE5LjQzaC44NHYxOC41OWgzLjM5di0xOC41OWguODR2MTguNTloMy4zNnYtMTguNTloLjg0djE4LjU5aDEuMzdaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTc3LjgxLDI1LjQydi44NGgtNC4zMXY1LjQ5aDMuMjV2Ljg0aC0zLjI1djExLjQyaDQuMzF2Ljg0aC01LjE1di0xOS40M2g1LjE1WiIgY2xhc3M9ImNscy0xIi8+'+
			'CiAgIDxwYXRoIGQ9Im04Ni42LDI1LjQydi44NGgtNC4zMXY1LjQ5aDMuMjV2Ljg0aC0zLjI1djExLjQyaDQuMzF2Ljg0aC01LjE1di0xOS40M2g1LjE1WiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0xLjczLDUxLjI2djUuNDloMS45M2MuOTUsMCwxLjYyLjI1LDIuMDIuNzZzLjU5LDEuMTkuNTksMi4wN3Y3LjQyYzAsLjktLjIsMS42LS41OSwyLjFzLTEuMDYuNzYtMi4wMi43NkguODl2LTE5LjQzaDUuMTV2Ljg0SDEuNzNabTAsNi4zM3YxMS40aDIuMDRjLjYsMCwxLjAyLS4xOCwxLjI3LS41NS4yNS0uMzYuMzgtLjc5LjM4LTEuMjd2LTcuNzNjMC0uNDktLjEzLS45MS0uMzgtMS4yOS'+
			'0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZIMS43M1oiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtMTYuNzEsNTAuNDJsLTIuMywxNy4yOGMtLjA5LjY3LS4zNCwxLjItLjc0LDEuNTgtLjQuMzgtMS4wMS41Ny0xLjgzLjU3aC0uNzZ2LS44NGguODdjLjUyLDAsLjkxLS4xNCwxLjE2LS40My4yNS0uMjkuNDEtLjY0LjQ2LTEuMDVsLjUtMy44NmgtMi4xNnYtLjAzbC0yLjAyLTEzLjIyaC44N2wxLjg4LDEyLjRoMS41N2wxLjYyLTEyLjRoLjg3WiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0yNS4wOSw2OS4wMWguOXYzLjI4aC0uNzNsLS4yLTIuNDRoLTUuNzRsLS4yLDIuNDRoLS43'+
			'M2wuMDMtMy4yOGMuNDcsMCwuOC0uMTEsMS4wMS0uMzIuMjEtLjIxLjMyLS41Ni4zNC0xLjA1bC43My0xNy4yMmg0LjU5djE4LjU5Wm0tLjg0LDB2LTE3Ljc1aC0yLjkxbC0uNzMsMTYuMzhjLS4wMi42Ny0uMjEsMS4xMy0uNTYsMS4zN2g0LjJaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTM1Ljk4LDUwLjQybC0yLjMsMTcuMjhjLS4wOS42Ny0uMzQsMS4yLS43NCwxLjU4LS40LjM4LTEuMDEuNTctMS44My41N2gtLjc2di0uODRoLjg3Yy41MiwwLC45MS0uMTQsMS4xNi0uNDMuMjUtLjI5LjQxLS42NC40Ni0xLjA1bC41LTMuODZoLTIuMTZ2LS4wM2wtMi4wMi0xMy4yMmguODdsMS44OC'+
			'wxMi40aDEuNTdsMS42Mi0xMi40aC44N1oiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtNTAuMTUsNjkuMDF2My4yOGgtLjczbC0uMi0yLjQ0aC05Ljcydi0xOS40M2guODR2MTguNTloMy4zOXYtMTguNTloLjg0djE4LjU5aDMuMzZ2LTE4LjU5aC44NHYxOC41OWgxLjM3WiIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im01OC41Miw1MC40MnYuODRoLTQuMzF2NS40OWgzLjI1di44NGgtMy4yNXYxMS40Mmg0LjMxdi44NGgtNS4xNXYtMTkuNDNoNS4xNVoiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtNjcuMzEsNTAuNDJ2Ljg0aC00LjMxdjUuNDloMy4yNXYuODRoLTMuMjV2'+
			'MTEuNDJoNC4zMXYuODRoLTUuMTV2LTE5LjQzaDUuMTVaIiBjbGFzcz0iY2xzLTEiLz4KICAgPHBhdGggZD0ibTcuMzMsNzYuMjZoLTMuMTR2MTguNTloLS44NHYtMTguNTlILjI1di0uODRoNy4wOHYuODRaIiBjbGFzcz0iY2xzLTIiLz4KICAgPHBhdGggZD0ibTE2LjAxLDc5LjI4YzAsMS41My0uNjIsMi40OS0xLjg1LDIuODguNjUuMTcsMS4xMi40OCwxLjQxLjk0LjI5LjQ2LjQzLDEuMDguNDMsMS44NnY3LjAzYzAsLjktLjIsMS42LS41OSwyLjFzLTEuMDYuNzYtMi4wMi43NmgtMi43MnYtMTkuNDNoMi43MmMuOTUsMCwxLjYyLjI1LDIuMDIuNzZzLjU5LDEuMTkuNTksMi4wN3YxLjA0Wm0tMy'+
			'40NCwyLjQ2Yy45LDAsMS41NS0uMjIsMS45Ny0uNjZzLjYzLTEuMDcuNjMtMS44OXYtMS4wOWMwLS40OS0uMTMtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NmgtMS45OXY1LjQ5aDEuMDRabTIuNiwzLjNjMC0uODItLjE5LTEuNDMtLjU3LTEuODNzLTEuMDItLjYtMS45Mi0uNmgtMS4xNXYxMS4zN2gxLjk5Yy42LDAsMS4wNC0uMTksMS4zNC0uNTYuMy0uMzcuNC0uNzkuMzEtMS4yNnYtNy4xMVoiIGNsYXNzPSJjbHMtMiIvPgogICA8cGF0aCBkPSJtMjUuNyw5Mi4xOWMwLC44OC0uMTksMS41Ny0uNTcsMi4wN3MtMS4wNS43Ni0yLC43NmgtLjY0Yy0uOTUsMC0xLjYyLS4yNS0y'+
			'LjAyLS43NnMtLjU5LTEuMTktLjU5LTIuMDd2LTE0LjA4YzAtLjkuMi0xLjYuNTktMi4xczEuMDYtLjc2LDIuMDItLjc2aC42NGMuOTUsMCwxLjYyLjI1LDIsLjc2cy41NywxLjIuNTcsMi4xdjE0LjA4Wm0tLjg0LTE0LjI1YzAtLjQ5LS4xMy0uOTEtLjM4LTEuMjktLjI1LS4zNy0uNjgtLjU2LTEuMjctLjU2aC0uODRjLS42LDAtMS4wMi4xOS0xLjI3LjU2LS4yNS4zNy0uMzguOC0uMzgsMS4yOXYxNC4zOWMwLC40OS4xMy45MS4zOCwxLjI5LjI1LjM3LjY4LjU2LDEuMjcuNTZoLjg0Yy42LDAsMS4wMi0uMTksMS4yNy0uNTYuMjUtLjM3LjM4LS44LjM4LTEuMjl2LTE0LjM5WiIgY2xhc3M9ImNscy'+
			'0yIi8+CiAgIDxwYXRoIGQ9Im0zNC42Niw3NS40MmguODR2MTkuNDNoLS44NHYtMTMuNDdsLTMuOTgsMy45OHY5LjQ5aC0uODR2LTE5LjQzaC44NHY4Ljg1bDMuOTgtMy45OHYtNC44N1ptLS42NC0yLjc3di44N2gtMi43MnYtLjg3aDIuNzJaIiBjbGFzcz0iY2xzLTIiLz4KICAgPHBhdGggZD0ibTUwLjEyLDc5LjI4YzAsMS41My0uNjIsMi40OS0xLjg1LDIuODguNjUuMTcsMS4xMi40OCwxLjQxLjk0LjI5LjQ2LjQzLDEuMDguNDMsMS44NnY3LjAzYzAsLjktLjIsMS42LS41OSwyLjEtLjM5LjUtMS4wNi43Ni0yLjAyLjc2aC0yLjcydi0xOS40M2gyLjcyYy45NSwwLDEuNjIuMjUsMi4wMi43Ni4z'+
			'OS41LjU5LDEuMTkuNTksMi4wN3YxLjA0Wm0tMy40NCwyLjQ2Yy45LDAsMS41NS0uMjIsMS45Ny0uNjZzLjYzLTEuMDcuNjMtMS44OXYtMS4wOWMwLS40OS0uMTMtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NmgtMS45OXY1LjQ5aDEuMDRabTIuNiwzLjNjMC0uODItLjE5LTEuNDMtLjU3LTEuODMtLjM4LS40LTEuMDItLjYtMS45Mi0uNmgtMS4xNXYxMS4zN2gxLjk5Yy42LDAsMS4wNC0uMTksMS4zNC0uNTZzLjQtLjc5LjMxLTEuMjZ2LTcuMTFaIiBjbGFzcz0iY2xzLTIiLz4KICAgPHBhdGggZD0ibTU2Ljc1LDgxLjcyYy45NSwwLDEuNjIuMjYsMi4wMi43Ny4zOS41MS41OS'+
			'wxLjIxLjU5LDIuMDl2Ny40NWMwLC44OC0uMiwxLjU3LS41OSwyLjA3cy0xLjA2Ljc2LTIuMDIuNzZoLTIuNzd2LTE5LjQzaC44NHY2LjNoMS45M1ptMS43NiwyLjcyYzAtLjQ5LS4xMy0uOTEtLjM4LTEuMjktLjI1LS4zNy0uNjgtLjU2LTEuMjctLjU2aC0yLjA0djExLjQyaDIuMDRjLjYsMCwxLjAyLS4xOSwxLjI3LS41Ni4yNS0uMzcuMzgtLjguMzgtMS4yOXYtNy43M1ptNC4wOS05LjAydjE5LjQzaC0uODR2LTE5LjQzaC44NFoiIGNsYXNzPSJjbHMtMiIvPgogICA8cGF0aCBkPSJtNjcuNyw3Ni4yNnY1LjQ5aDEuOTNjLjk1LDAsMS42Mi4yNSwyLjAyLjc2cy41OSwxLjE5LjU5LDIuMDd2Ny40'+
			'MmMwLC45LS4yLDEuNi0uNTksMi4xcy0xLjA2Ljc2LTIuMDIuNzZoLTIuNzd2LTE5LjQzaDUuMTV2Ljg0aC00LjMxWm0wLDYuMzN2MTEuNGgyLjA0Yy42LDAsMS4wMi0uMTgsMS4yNy0uNTVzLjM4LS43OS4zOC0xLjI3di03LjczYzAtLjQ5LS4xMy0uOTEtLjM4LTEuMjktLjI1LS4zNy0uNjgtLjU2LTEuMjctLjU2aC0yLjA0WiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Im04Mi4xNSw5Mi4xOWMwLC44OC0uMTksMS41Ny0uNTcsMi4wN3MtMS4wNS43Ni0yLC43NmgtLjY0Yy0uOTUsMC0xLjYyLS4yNS0yLjAyLS43Ni0uMzktLjUtLjU5LTEuMTktLjU5LTIuMDd2LTE0LjA4YzAtLjkuMi0xLj'+
			'YuNTktMi4xLjM5LS41LDEuMDYtLjc2LDIuMDItLjc2aC42NGMuOTUsMCwxLjYyLjI1LDIsLjc2cy41NywxLjIuNTcsMi4xdjE0LjA4Wm0tLjg0LTE0LjI1YzAtLjQ5LS4xMy0uOTEtLjM4LTEuMjktLjI1LS4zNy0uNjgtLjU2LTEuMjctLjU2aC0uODRjLS42LDAtMS4wMi4xOS0xLjI3LjU2LS4yNS4zNy0uMzguOC0uMzgsMS4yOXYxNC4zOWMwLC40OS4xMy45MS4zOCwxLjI5LjI1LjM3LjY4LjU2LDEuMjcuNTZoLjg0Yy42LDAsMS4wMi0uMTksMS4yNy0uNTYuMjUtLjM3LjM4LS44LjM4LTEuMjl2LTE0LjM5WiIgY2xhc3M9ImNscy0yIi8+CiAgIDxwYXRoIGQ9Im04OS4xNyw3NS40MmMuOTUsMCwx'+
			'LjYyLjI1LDIuMDIuNzYuMzkuNS41OSwxLjIuNTksMi4xdjguMzdjMCwuOS0uMiwxLjYtLjU5LDIuMS0uMzkuNS0xLjA2Ljc2LTIuMDIuNzZoLTIuMDR2NS4zNWgtLjg0di0xOS40M2gyLjg4Wm0xLjc2LDIuNjljMC0uNDktLjEzLS45MS0uMzgtMS4yOS0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZoLTIuMTZ2MTIuMzhoMi4xNmMuNiwwLDEuMDItLjE4LDEuMjctLjU1LjI1LS4zNi4zOC0uNzkuMzgtMS4yN3YtOC43MVoiIGNsYXNzPSJjbHMtMiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._choice__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="choice";
		el.ggDx=-423;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 743px;';
		hs+='height : 61px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 81px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._choice.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._choice.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._desktop_ui.appendChild(me._choice);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgOTUuNiAxNTYuMzIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L'+
			'7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Im00OC42OCwxMzMuNmMwLDYuOS0xLjUxLDEyLjMyLTQuNTEsMTYuMjgtMy4wMSwzLjk2LTguMjUsNS45NC0xNS43Myw1Ljk0aC03LjQ4Yy03LjQ4LDAtMTIuNzYtMS45OC0xNS44NC01Ljk0cy00LjYyLTkuMzgtNC42Mi0xNi4yOFYyMi45NGMwLTcuMDQsMS41NC0xMi41NCw0LjYyLTE2LjVTMTMuNDguNSwyMC45Ni41aDcuNDhjNy40OCwwLDEyLjcyLDEuOTgsMTUuNzMsNS45NCwzLDMuOTYsNC41MSw5LjQ2LDQuNTEsMTYuNXYxMTAuNjZabS02LjYtMTExLjk4YzAtMy44MS0uOTktNy4xOC0yLjk3LTEwLjEyLTEuOTgt'+
			'Mi45My01LjMyLTQuNC0xMC4wMS00LjRoLTkuMDJjLTQuNywwLTguMDMsMS40Ny0xMC4wMSw0LjQtMS45OCwyLjk0LTIuOTcsNi4zMS0yLjk3LDEwLjEydjExMy4wOGMwLDMuODIuOTksNy4xOSwyLjk3LDEwLjEyLDEuOTgsMi45NCw1LjMxLDQuNCwxMC4wMSw0LjRoOS4wMmM0LjY5LDAsOC4wMy0xLjQ2LDEwLjAxLTQuNCwxLjk4LTIuOTMsMi45Ny02LjMsMi45Ny0xMC4xMlYyMS42MloiIGNsYXNzPSJjbHMtMSIvPgogICA8cGF0aCBkPSJtOTUuMSwxLjgydjE1Mi42OGgtNi42VjguNDJoLTE4LjkyVjEuODJoMjUuNTJaIiBjbGFzcz0iY2xzLTEiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 735px;';
		hs+='height : 100px;';
		hs+='left : 968px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_1);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzgxLjkgNzI2LjM1IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQogICAgPC9zdHlsZT4KID'+
			'wvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxnPgogICA8cGF0aCBkPSJtMzc5LjksODMuMzVjLTYyLjQ2LDI5LjMyLTgxLDI4LjU5LTg2LDIyLTYuODQtOS4wMSw3Ljk2LTMzLjg3LDIyLTQ4LDEzLjI3LTEzLjM1LDMyLjA2LTIzLjMzLDM1LTIwLDMuMywzLjc0LTExLjk4LDI1LjgtMzEsNDEtMzAuODIsMjQuNjQtNzYuOTcsMzUuNy04NywyMi02LjA4LTguMyw2LjA2LTI2LjgyLDMtMjUtNDQuNSwyNi41LTEwMC41LDczLjUtMTc5LjUsMTc5LjUtMTEuMDcsMTQuODUtMzcuMTcsNTUuOTctMzEuNSw4Ni41LDEuOTEsMTAuMjcsNC43MSwyNS40'+
			'LDE1LDMxLDM1LjM5LDE5LjI4LDE0NS40MS04MS44NSwxMzAtMTEzLTcuNDQtMTUuMDQtNDQuMjYtMTQuMDUtNjktNi02Ni41OSwyMS42Ny0xMTguMDUsMTE4LjAxLTkyLDIwMiwyMS4wMiw2Ny43OCw4OS4xMSwxMTYuNTMsMTY5LDExOSIgY2xhc3M9ImNscy0xIi8+CiAgIDxwYXRoIGQ9Im0zMS4xNiwyODEuNzVjNDEuNDktNDcuNjksNzQuOTEtODMuNyw5Ni41OC0xMDYuNjIsMTIuMzQtMTMuMDUsNzMuMzYtNzcuMzYsOTkuMzktMTQ3LjUyLDMuODUtMTAuMzgsNy4yMi0yMS42NSw0LjE0LTI0Ljc3LTYuNTgtNi42OS0zOC41OSwyOC4zNC00OS44NSw0MC42Ny0yNy43NiwzMC4zOS03Ni44OSw5NS'+
			'4yMS0xNDQuMDEsMjQxLjY4IiBjbGFzcz0iY2xzLTEiLz4KICA8L2c+CiAgPHBhdGggZD0ibTc0LjksNzI0LjM1YzIzLjIzLTE3Ljk1LDUyLjE3LTM3LjYxLDg3LTU2LDM4LjI4LTIwLjIxLDczLjk2LTMzLjc2LDEwNC00MyIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 568px;';
		hs+='position : absolute;';
		hs+='right : 582px;';
		hs+='top : 1311px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_5);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzA1LjExIDE0MiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iMTkwLjUiIHkyPSIuNSIgeDI9IjI4MS41IiB5MT0iMTQxLjUiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIxMy41IiB5Mj0iNTQuNzkiIHgyPSIxMy41IiB5MT0iMjguNSIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9Ii41IiB5Mj0iNDEuNSIgeDI9IjI3LjQ3IiB5MT0iNDEuNSIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjM3LjM5IiB5Mj0iNDEuNSIgeDI9IjMwNC42MSIgeTE9IjQxLjUiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 142px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 1351px;';
		hs+='visibility : inherit;';
		hs+='width : 305px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._desktop_ui.appendChild(me._svg_8);
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTExLjI4IDMzOS43NiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSB4MT0iLjUiIHkyPSIzMzkuMjYiIHgyPSIxMTAuNzgiIHkxPSIyODQuMjYiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIyNyIgeTI9IjIxOC45NiIgeDI9IjI3IiB5MT0iMTkwLjc2IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iNDEuMSIgeTI9IjIwNC44NiIgeDI9IjEyLjkiIHkxPSIyMDQuODYiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIyNi43OSIgeTI9Ijc4LjA3IiB4Mj0iMjYuNzkiIHkxPSI0OS44NyIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjQwLjg5IiB5Mj0iNjMuOTciIHgyPSIxMi42OSIg'+
			'eTE9IjYzLjk3IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMjciIHkyPSI5MS41OSIgeDI9IjI3IiB5MT0iMTYxLjMyIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMjciIHkyPSIuNSIgeDI9IjI3IiB5MT0iMzYuNDEiIGNsYXNzPSJjbHMtMSIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDy=296;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 340px;';
		hs+='position : absolute;';
		hs+='right : 558px;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 111px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTMyLjYgMTQ2LjYiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogMy42cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+Ci'+
			'A8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cGF0aCBkPSJtMTMwLjgsMS44Yy0yMC44NiwxMy45My00Ny4wMiwzNC4yOS03Myw2M0MzMS40Myw5My45MywxMy42MiwxMjIuNDIsMS44LDE0NC44IiBjbGFzcz0iY2xzLTEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=-839;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -177px;';
		hs+='visibility : hidden;';
		hs+='width : 99px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._svg_6.appendChild(me._svg_4);
		me._desktop_ui.appendChild(me._svg_6);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjMyIDUyLjEiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZW'+
			'ZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBhdGggZD0ibTIzMCw1LjA5Yy00Ny4yMy0xLjI5LTgwLjc4LTIuMzktOTktMywwLDAtNzYuMDQtMi41Ni0xMjAsMjAtMi40LDEuMjMtOS4xNyw0LjctOSw5LC4xNiw0LjA5LDYuNTIsNi45LDksOCwyNi43NiwxMS44Myw5NSwxMSw5NSwxMSwyNi40NS0uMjcsNTkuODguNTMsOTItOCw5LjI0LTIuNDUsMTguOTktNS44NSwxOS0xMCwwLTIuNi0zLjgxLTUuMTUtMTItOC0xMS4xNi0zLjg4LTMyLjAxLTguODUtNjgtNyIgY2xhc3M9ImNscy0xIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 34px;';
		hs+='left : 979px;';
		hs+='position : absolute;';
		hs+='top : 1521px;';
		hs+='visibility : hidden;';
		hs+='width : 168px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_2);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjE1Ljg1IDU1OC4wMSIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNjYzU3MjI7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+Ci'+
			'A8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cGF0aCBkPSJtMjEwLjQ0LDJjLTIzLjY0LDMxLjE4LTQ4Ljk0LDY4Ljc5LTczLDExMy0yMC41OSwzNy44NC0zNi41NSw3My42OC00OSwxMDYiIGNsYXNzPSJjbHMtMSIvPgogIDxwYXRoIGQ9Im01NS40NCwzMDVDNy41Niw1MTAuMi0uMTMsNTU1LjM0LDIuNDQsNTU2YzUuODgsMS41MSw5NC45MS0yMjIuNTUsMTY2LTI2NCw3LjU2LTQuNDEsMjguNjktMTYuNzMsMzktOSw4Ljg4LDYuNjYsNi44MiwyNS4zOSw0LDMzLTEwLDI3LTIxLjM4LDQ0LjY3LTMzLDU1IiBjbGFzcz0iY2xzLTEiLz4KIDwv'+
			'Zz4KPC9zdmc+Cg==';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 540px;';
		hs+='left : 1149px;';
		hs+='position : absolute;';
		hs+='top : 1567px;';
		hs+='visibility : hidden;';
		hs+='width : 161px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_3);
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzI2Ljg2IDEzNC4yNiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'00IHsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNXB4OwogICAgICB9CgogICAgICAuY2xzLTQsIC5jbHMtNSB7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm9rZS13aWR0aDogLjhweDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDE5LjYyIDkwLjMg'+
			'MCAzMjYuODYgMTcuMTcgMzI2Ljg2IDExNi44MSAyMTQuMTcgMTMwLjU4IDEwMS40OSAxMjguNzQgMzguMzYgMTM0LjI2IDAgMTE1LjE5IDAgMTkuNjIiLz4KICA8Zz4KICAgPGxpbmUgeDE9IjQzLjU2IiB5Mj0iMTAwLjI5IiB4Mj0iNjQuNTEiIHkxPSIxMDAuMjkiIGNsYXNzPSJjbHMtNSIvPgogICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjEuODYgMTAzLjU2IDYxLjMyIDEwMi45OCA2NC4yIDEwMC4zIDYxLjMyIDk3LjYxIDYxLjg2IDk3LjAzIDY1LjM4IDEwMC4zIDYxLjg2IDEwMy41NiIvPgogIDwvZz4KICA8Zz4KICAgPGxpbmUgeDE9IjE1Mi42NSIgeTI9IjEwMC4yOSIgeD'+
			'I9IjE3My41OSIgeTE9IjEwMC4yOSIgY2xhc3M9ImNscy01Ii8+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxNzAuOTQgMTAzLjU2IDE3MC40IDEwMi45OCAxNzMuMjkgMTAwLjMgMTcwLjQgOTcuNjEgMTcwLjk0IDk3LjAzIDE3NC40NiAxMDAuMyAxNzAuOTQgMTAzLjU2Ii8+CiAgPC9nPgogIDxnPgogICA8bGluZSB4MT0iMjU3LjczIiB5Mj0iMTAwLjI5IiB4Mj0iMjc4LjY3IiB5MT0iMTAwLjI5IiBjbGFzcz0iY2xzLTUiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI3Ni4wMyAxMDMuNTYgMjc1LjQ4IDEwMi45OCAyNzguMzcgMTAwLjMgMjc1LjQ4IDk3'+
			'LjYxIDI3Ni4wMyA5Ny4wMyAyNzkuNTQgMTAwLjMgMjc2LjAzIDEwMy41NiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTQ0LjYxLDY4Ljl2MTMuNTZoLTE1LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOC'+
			'wxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im02MS41OCw3NS43MmMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIuNDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMz'+
			'djM1LjcxWm0tMi4xMy0zNi4xNGMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djM2LjQ5YzAsMS4yMy4zMiwyLjMyLjk2LDMuMjcuNjQuOTUsMS43MiwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMzYuNDlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTY5LjQ2LDMzLjE5djQ5LjI3aC0yLjEzdi00Ny4xNGgtNi4xMXYtMi4xM2g4LjI0WiIgY2xhc3M9ImNscy'+
			'0zIi8+CiAgIDxwYXRoIGQ9Im04MC42NywzMy4xOXY0OS4yN2gtMi4xM3YtNDcuMTRoLTYuMTF2LTIuMTNoOC4yNFoiIGNsYXNzPSJjbHMtMyIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTE0My42MSw2OC45djEzLjU2aC0xNS41NXYtMjAuMjRsMTMuNDItMjAuMDl2LTIuNTZjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3YzLjE5aC0yLjEzdi0yLjc3YzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0xLjky'+
			'aDIuNDFjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YyLjc3bC0xMy40MiwyMC4wOXYxNy40N2gxMS4yOXYtMTEuNDNoMi4xM1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTYwLjU4LDc1LjcyYzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjkyLTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLj'+
			'Y0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2MzUuNzFabS0yLjEzLTM2LjE0YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2MzYuNDljMCwxLjIzLjMyLDIuMzIuOTYsMy4yNy42NC45NSwxLjcyLDEuNDIsMy4yMywxLjQyaDIuOTFjMS41MSwwLDIuNTktLjQ3LDMuMjMtMS40Mi42NC0uOTUuOTYtMi4wMy45Ni0zLjI3di0zNi40OVoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTc4LjU0LDY4Ljl2MTMuNTZoLTE1'+
			'LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im'+
			'0xODguODMsNDkuMjNjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zMnYxOS4yNGMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIuNDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdoLTIuMTN2LTMuMTljMC0xLjIzLS4zMi0yLjMy'+
			'LS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3Y5LjY2aDYuODlabTQuNCw2LjgyYzAtMS4yMy0uMzItMi4zMS0uOTYtMy4yM3MtMS43Mi0xLjM4LTMuMjMtMS4zOGgtNy4xdjI0LjY0YzAsMS4yMy4zMiwyLjMyLjk2LDMuMjcuNjQuOTUsMS43MiwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMjAuMDJaIiBjbGFzcz0iY2xzLTMiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Im0yMjUuNDQsNDUuNT'+
			'd2OS4wMmgzLjE3YzEuNTYsMCwyLjY3LjQxLDMuMzEsMS4yNC42NC44My45NywxLjk2Ljk3LDMuNHYxMi4xOWMwLDEuNDctLjMyLDIuNjItLjk3LDMuNDUtLjY0LjgzLTEuNzUsMS4yNC0zLjMxLDEuMjRoLTQuNTV2LTMxLjkyaDguNDZ2MS4zOGgtNy4wOFptMCwxMC40djE4LjcyaDMuMzZjLjk4LDAsMS42OC0uMywyLjA5LS45LjQxLS42LjYyLTEuMjkuNjItMi4wOXYtMTIuN2MwLS44LS4yMS0xLjUtLjYyLTIuMTJzLTEuMTEtLjkyLTIuMDktLjkyaC0zLjM2WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Im0yNDYuNTEsNDQuMTlsLTMuNzcsMjguMzhjLS4xNSwxLjEtLjU2LDEuOTctMS4y'+
			'MiwyLjYtLjY2LjYzLTEuNjYuOTQtMy4wMS45NGgtMS4yNHYtMS4zOGgxLjQzYy44NiwwLDEuNS0uMjQsMS45MS0uNzFzLjY3LTEuMDUuNzYtMS43M2wuODMtNi4zNWgtMy41NHYtLjA1bC0zLjMxLTIxLjcxaDEuNDNsMy4wOCwyMC4zOGgyLjU4bDIuNjctMjAuMzhoMS40M1oiIGNsYXNzPSJjbHMtNCIvPgogICA8cGF0aCBkPSJtMjU2LjcyLDc0LjczaDEuNDd2NS4zOGgtMS4ybC0uMzItNGgtOS40M2wtLjMyLDRoLTEuMmwuMDUtNS4zOGMuNzcsMCwxLjMyLS4xOCwxLjY2LS41My4zNC0uMzUuNTItLjkzLjU1LTEuNzJsMS4yLTI4LjI5aDcuNTR2MzAuNTRabS0xLjM4LDB2LTI5LjE2aC00Ljc4bC'+
			'0xLjIsMjYuOTFjLS4wMywxLjEtLjM0LDEuODYtLjkyLDIuMjVoNi45WiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwYXRoIGQ9Im0yNzEuMDcsNDQuMTlsLTMuNzcsMjguMzhjLS4xNSwxLjEtLjU2LDEuOTctMS4yMiwyLjYtLjY2LjYzLTEuNjYuOTQtMy4wMS45NGgtMS4yNHYtMS4zOGgxLjQzYy44NiwwLDEuNS0uMjQsMS45MS0uNzFzLjY3LTEuMDUuNzYtMS43M2wuODMtNi4zNWgtMy41NHYtLjA1bC0zLjMxLTIxLjcxaDEuNDNsMy4wOCwyMC4zOGgyLjU4bDIuNjctMjAuMzhoMS40M1oiIGNsYXNzPSJjbHMtNCIvPgogICA8cGF0aCBkPSJtMjkwLjgsNzQuNzN2NS4zOGgtMS4ybC0uMzItNGgtMTUu'+
			'OTZ2LTMxLjkyaDEuMzh2MzAuNTRoNS41N3YtMzAuNTRoMS4zOHYzMC41NGg1LjUydi0zMC41NGgxLjM4djMwLjU0aDIuMjVaIiBjbGFzcz0iY2xzLTQiLz4KICAgPHBhdGggZD0ibTMwMS4wMiw0NC4xOXYxLjM4aC03LjA4djkuMDJoNS4zNHYxLjM4aC01LjM0djE4Ljc3aDcuMDh2MS4zOGgtOC40NnYtMzEuOTJoOC40NloiIGNsYXNzPSJjbHMtNCIvPgogICA8cGF0aCBkPSJtMzExLjkyLDQ0LjE5djEuMzhoLTcuMDh2OS4wMmg1LjM0djEuMzhoLTUuMzR2MTguNzdoNy4wOHYxLjM4aC04LjQ2di0zMS45Mmg4LjQ2WiIgY2xhc3M9ImNscy00Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 744px;';
		hs+='height : 134px;';
		hs+='position : absolute;';
		hs+='right : 616px;';
		hs+='visibility : hidden;';
		hs+='width : 327px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_10);
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTA5LjM5IDEzNC4yNiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgIC'+
			'AgICAgc3Ryb2tlOiAjMDAwOwogICAgICAgIHN0cm9rZS13aWR0aDogLjc1cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy00IHsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICMyNDI1Mjc7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuOHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjAgMTkuNjIgOTAuMyAwIDEwOS4z'+
			'IDEuMzggMTA5LjM5IDEyOC44NyAxMDEuNDkgMTI4Ljc0IDM4LjM2IDEzNC4yNiAwIDExNS4xOSAwIDE5LjYyIi8+CiAgPGc+CiAgIDxsaW5lIHgxPSI0My41NiIgeTI9IjEwMC4yOSIgeDI9IjY0LjUxIiB5MT0iMTAwLjI5IiBjbGFzcz0iY2xzLTQiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYxLjg2IDEwMy41NiA2MS4zMiAxMDIuOTggNjQuMiAxMDAuMyA2MS4zMiA5Ny42MSA2MS44NiA5Ny4wMyA2NS4zOCAxMDAuMyA2MS44NiAxMDMuNTYiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Im00NC42MSw2OC45djEzLjU2aC0xNS41NXYtMjAuMjRsMTMuNDItMjAuMDl2LT'+
			'IuNTZjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3YzLjE5aC0yLjEzdi0yLjc3YzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0xLjkyaDIuNDFjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YyLjc3bC0xMy40MiwyMC4wOXYxNy40N2gxMS4yOXYtMTEuNDNoMi4xM1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtNjEuNTgsNzUuNzJjMCwyLjIzLS40OSwz'+
			'Ljk4LTEuNDYsNS4yNS0uOTcsMS4yOC0yLjY2LDEuOTItNS4wOCwxLjkyaC0yLjQxYy0yLjQxLDAtNC4xMi0uNjQtNS4xMS0xLjkyLS45OS0xLjI4LTEuNDktMy4wMy0xLjQ5LTUuMjV2LTM1LjcxYzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0xLjkyaDIuNDFjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YzNS43MVptLTIuMTMtMzYuMTRjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MSwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi'+
			'4wNC0uOTYsMy4yN3YzNi40OWMwLDEuMjMuMzIsMi4zMi45NiwzLjI3LjY0Ljk1LDEuNzIsMS40MiwzLjIzLDEuNDJoMi45MWMxLjUxLDAsMi41OS0uNDcsMy4yMy0xLjQyLjY0LS45NS45Ni0yLjAzLjk2LTMuMjd2LTM2LjQ5WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im02OS40NiwzMy4xOXY0OS4yN2gtMi4xM3YtNDcuMTRoLTYuMTF2LTIuMTNoOC4yNFoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtODAuNjcsMzMuMTl2NDkuMjdoLTIuMTN2LTQ3LjE0aC02LjExdi0yLjEzaDguMjRaIiBjbGFzcz0iY2xzLTMiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg sfu-year-2011";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 743px;';
		hs+='height : 136px;';
		hs+='position : absolute;';
		hs+='right : 830px;';
		hs+='visibility : hidden;';
		hs+='width : 115px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_9);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTA0Ljg3IDEyOS4yIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjQyNTI3OwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgIC'+
			'AgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNzVweDsKICAgICAgfQoKICAgICAgLmNscy0zLCAuY2xzLTQgewogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMCAwIDEwNC43NCA3LjYgMTA0Ljg3'+
			'IDEyOS4yIC4wOCAxMjcuNDkgMCAwIi8+CiAgPGc+CiAgIDxsaW5lIHgxPSI0My4zNCIgeTI9Ijk4LjkyIiB4Mj0iNjQuMjkiIHkxPSI5OC45MiIgY2xhc3M9ImNscy00Ii8+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2MS42NCAxMDIuMTggNjEuMSAxMDEuNiA2My45OCA5OC45MiA2MS4xIDk2LjIzIDYxLjY0IDk1LjY1IDY1LjE2IDk4LjkyIDYxLjY0IDEwMi4xOCIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTM0LjMsNjcuNTJ2MTMuNTZoLTE1LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuND'+
			'ItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im01MS4yNyw3NC4zNGMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIu'+
			'NDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjM1LjcxWm0tMi4xMy0zNi4xNGMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUxLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djM2LjQ5YzAsMS4yMy4zMiwyLjMyLjk2LDMuMjcuNjQuOT'+
			'UsMS43MiwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMzYuNDlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTY5LjI0LDY3LjUydjEzLjU2aC0xNS41NXYtMjAuMjRsMTMuNDItMjAuMDl2LTIuNTZjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MSwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3YzLjE5aC0yLjEzdi0yLjc3YzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0x'+
			'LjkyaDIuNDFjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YyLjc3bC0xMy40MiwyMC4wOXYxNy40N2gxMS4yOXYtMTEuNDNoMi4xM1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtNzkuNTMsNDcuODVjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zMnYxOS4yNGMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIuNDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3Lj'+
			'UtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdoLTIuMTN2LTMuMTljMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3Y5LjY2aDYuODlabTQuNCw2LjgyYzAtMS4yMy0uMzItMi4zMS0uOTYtMy4yMy0uNjQtLjkyLTEuNzItMS4zOC0zLjIzLTEuMzhoLTcuMXYyNC42NGMwLDEuMjMuMzIsMi4zMi45NiwzLjI3LjY0'+
			'Ljk1LDEuNzEsMS40MiwzLjIzLDEuNDJoMi45MWMxLjUxLDAsMi41OS0uNDcsMy4yMy0xLjQyLjY0LS45NS45Ni0yLjAzLjk2LTMuMjd2LTIwLjAyWiIgY2xhc3M9ImNscy0zIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._svg_11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg sfu-year-2026";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 747px;';
		hs+='height : 131px;';
		hs+='position : absolute;';
		hs+='right : 726px;';
		hs+='visibility : hidden;';
		hs+='width : 109px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_11);
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMTEyLjggMTIxLjYiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgaWQ9Il/QodC70L7QuV8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMyNDI1Mjc7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBzdHJva2Utd2lkdGg6IDBweDsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy00IH'+
			'sKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMCAwIDExMi44IDguMTkgMTEyLjggMTA3LjgzIC4xMiAxMjEuNiAwIDAiLz4KICA8Zz4K'+
			'ICAgPGxpbmUgeDE9IjQzLjY3IiB5Mj0iOTEuMzEiIHgyPSI2NC42MiIgeTE9IjkxLjMxIiBjbGFzcz0iY2xzLTQiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYxLjk3IDk0LjU4IDYxLjQzIDk0IDY0LjMxIDkxLjMyIDYxLjQzIDg4LjYzIDYxLjk3IDg4LjA1IDY1LjQ5IDkxLjMyIDYxLjk3IDk0LjU4Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJtMTEuMzgsMzYuNTl2OS4wMmgzLjE3YzEuNTYsMCwyLjY3LjQxLDMuMzEsMS4yNHMuOTcsMS45Ni45NywzLjR2MTIuMTljMCwxLjQ3LS4zMiwyLjYyLS45NywzLjQ1cy0xLjc1LDEuMjQtMy4zMSwxLjI0aC00LjU1di0zMS'+
			'45Mmg4LjQ2djEuMzhoLTcuMDhabTAsMTAuNHYxOC43MmgzLjM2Yy45OCwwLDEuNjgtLjMsMi4wOS0uOS40MS0uNi42Mi0xLjI5LjYyLTIuMDl2LTEyLjdjMC0uOC0uMjEtMS41LS42Mi0yLjEycy0xLjExLS45Mi0yLjA5LS45MmgtMy4zNloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMzIuNDUsMzUuMjFsLTMuNzcsMjguMzhjLS4xNSwxLjEtLjU2LDEuOTctMS4yMiwyLjYtLjY2LjYzLTEuNjYuOTQtMy4wMS45NGgtMS4yNHYtMS4zOGgxLjQzYy44NiwwLDEuNS0uMjQsMS45MS0uNzFzLjY3LTEuMDUuNzYtMS43M2wuODMtNi4zNWgtMy41NHYtLjA1bC0zLjMxLTIxLjcxaDEuNDNsMy4w'+
			'OCwyMC4zOGgyLjU4bDIuNjctMjAuMzhoMS40M1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtNDIuNjYsNjUuNzVoMS40N3Y1LjM4aC0xLjJsLS4zMi00aC05LjQzbC0uMzIsNGgtMS4ybC4wNS01LjM4Yy43NywwLDEuMzItLjE4LDEuNjYtLjUzLjM0LS4zNS41Mi0uOTMuNTUtMS43MmwxLjItMjguMjloNy41NHYzMC41NFptLTEuMzgsMHYtMjkuMTZoLTQuNzhsLTEuMiwyNi45MWMtLjAzLDEuMS0uMzQsMS44Ni0uOTIsMi4yNWg2LjlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTU3LjAyLDM1LjIxbC0zLjc3LDI4LjM4Yy0uMTUsMS4xLS41NiwxLjk3LTEuMjIsMi42LS42Ni'+
			'42My0xLjY2Ljk0LTMuMDEuOTRoLTEuMjR2LTEuMzhoMS40M2MuODYsMCwxLjUtLjI0LDEuOTEtLjcxcy42Ny0xLjA1Ljc2LTEuNzNsLjgzLTYuMzVoLTMuNTR2LS4wNWwtMy4zMS0yMS43MWgxLjQzbDMuMDgsMjAuMzhoMi41OGwyLjY3LTIwLjM4aDEuNDNaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTc2Ljc1LDY1Ljc1djUuMzhoLTEuMmwtLjMyLTRoLTE1Ljk2di0zMS45MmgxLjM4djMwLjU0aDUuNTd2LTMwLjU0aDEuMzh2MzAuNTRoNS41MnYtMzAuNTRoMS4zOHYzMC41NGgyLjI1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im04Ni45NiwzNS4yMXYxLjM4aC03LjA4djku'+
			'MDJoNS4zNHYxLjM4aC01LjM0djE4Ljc3aDcuMDh2MS4zOGgtOC40NnYtMzEuOTJoOC40NloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtOTcuODYsMzUuMjF2MS4zOGgtNy4wOHY5LjAyaDUuMzR2MS4zOGgtNS4zNHYxOC43N2g3LjA4djEuMzhoLTguNDZ2LTMxLjkyaDguNDZaIiBjbGFzcz0iY2xzLTMiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_12__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg sfu-year-future";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 747px;';
		hs+='height : 123px;';
		hs+='position : absolute;';
		hs+='right : 614px;';
		hs+='visibility : hidden;';
		hs+='width : 117px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._svg_12);
		el=me._button=document.createElement('div');
		els=me._button__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="button";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text audio_control";
		el.ggType='text';
		hs ='';
		hs+='bottom : 747px;';
		hs+='height : 10px;';
		hs+='left : 936px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 10px;';
		hs+='height: 10px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._button);
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAABT0lEQVRoge2azRGDIBBGFwpIB3pIU+kkRdiJTXnQDmyAnMgQ5H8xsDu8U2bi4Pf8kMwEhFIKanHsG2qwaX6KWlkEVgwr4wMrWSx2l5BNqWC22L+EbHIFZc7FraRK7p3cWEspm5T2omI9CZnE5IJTsVcpgHg2r1jPUppQRqcYBakYWatij/hKuIhRbMuVWcYuoIKdnfxU9PEVw7R1rguc64IOgx3HdEA3ZgbBhKo1jkYC0H63bLQL/3eMG5LTNNQc+6b4NtY6wF0MMWoMMWoMMWoMMWoMMWoMMWrwFau5PdoL0/wUfBtrHeAuJEDd3frWaBfejQGUt/Z4vZ2fW4xjOvxs1VL/x8oUk74vqGFnv7xjFOVcmZ2LByU5X1b+q6INhdZCGYON9SwXy5Z05K'+
			'inn4HUh511+q21YM4Mylo8Wk7N3HuPg5g+2B2dddHTYecPEQuw0fx7+kkAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAABTklEQVRoge2aTQ6DIBBGBw7RnS56F6/kIXql3sWF7rwEXdFQ5H+wMBPeqkkNfs8PaVIQSimoxbFvqMGm+SlqZRFYMayMD6xksdhdQjalgtli/xKyyRWUORe3kiq5d3JjLaVsUtqLivUkZBKTC07FXqUA4tm8Yj1LaUIZnWIUpGJkrYo94ivhIkaxLVdmGbuACnZ28lPRx1cM09a5LnCuCzoMdhzTAd2YGQQTqtY4GglA+92y0S783zFuSE7TUHPsm+LbWOsAdzHEqDHEqDHEqDHEqDHEqDHEqMFXrOb2aC9M81Pwbax1gLuQAHV361ujXXg3BlDe2uP1dn5uMY7p8LNVS/0fK1NM+r6ghp398o5RlHNldi4elOR8WfmvijYUWgtlDDbWs1wsW9KRo5'+
			'5+BlIfdtbpt9aCOTMoa/FoOTVz7z0OYvpgd3TWRU+HnT+xja7R02CjeAAAAABJRU5ErkJggg==';
		me._button_1__img.ggOverSrc=hs;
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAABlklEQVRoge2ay3GDMBCGV4xryA0O9EJLLiItpZZkJvjmJvBJGRASYqV9ifg7ehizn//VY2S5ZVmAisf8U/Vl/TA6qlpcrVitTIpayWIxLqGQUkG0mJRQCFawwzysJVXy7tOJaUqFnEkvK2ZJaE1O7rAVrUoB5GtLilmW8hzVGBVrQSoHala0SCqEnViLacVq7nIPtEJYe/OtmOJvHaNI63mfdp99fH7Vfi0Kv76xJxaTlaAD4B9bz/skJuhdRMeYpKDK5CEh5+bfb7I2LCmYa3JRn+652lNdzEMtZ0YMgDY9U2IeCkGTYp4aOdNiAOVy5sVKeYtpUbqA34jrIKN2R2IyMYptlqnEKPeNZhKj3gyrJ3bJ3T3necitH0YnfezGfcDTD6MTT0zq1EpsjE'+
			'kfw3UAtP/Wx5CU8i6siUmntGbzj2bLZ/cA284zs0BTsxHjHmuchLXvEmtRLlZztBVbkkvV+j/G2JoWUjuq8TAxy3K52k5dObK0vp39sVG337QFMR2Emjw0WxP77vdFzBSXuzobw9Jl5xctgMowIbFPTwAAAABJRU5ErkJggg==';
		me._button_1__img.ggDownSrc=hs;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 54px;';
		hs+='left : 1642px;';
		hs+='position : absolute;';
		hs+='top : 2039px;';
		hs+='visibility : hidden;';
		hs+='width : 54px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			window.sfuAudioGuide && window.sfuAudioGuide.toggle();
		}
		me._button_1.onmouseover=function (e) {
			me._button_1__img.src=me._button_1__img.ggOverSrc;
		}
		me._button_1.onmouseout=function (e) {
			me._button_1__img.src=me._button_1__img.ggNormalSrc;
		}
		me._button_1.onmousedown=function (e) {
			me._button_1__img.src=me._button_1__img.ggDownSrc;
		}
		me._button_1.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._button_1__img.src = me._button_1__img.ggNormalSrc;
			} else {
				me._button_1__img.src = me._button_1__img.ggOverSrc;
			}
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me._desktop_ui.appendChild(me._button_1);
		el=me._svg_19=document.createElement('div');
		els=me._svg_19__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMjIyIDk5IiBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz'+
			'4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxwYXRoIGQ9Im0yOCwzMmMtMi4xMy0zLjc1LTQuNzYtNy44Mi04LTEyQzEzLjg5LDEyLjEyLDcuNDcsNi4yNSwyLDJjNzIuNjcsMjEsMTQ1LjMzLDQyLDIxOCw2My0xNi41MywyLjkzLTMzLjkxLDYuNTQtNTIsMTEtMjUuNjgsNi4zMy00OS4zOCwxMy41MS03MSwyMS0yLjI0LTQuNjUtNS40My0xMC4yMy0xMC0xNi02LjI1LTcuOTEtMTIuODYtMTMuMzgtMTgtMTctMTUuMzMsNC0zMC42Nyw4LTQ2LDEybDgtNDcsMTgyLDM1SDY5IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iNDIiIHkyPSI1MS42MSIg'+
			'eDI9IjI3LjMyIiB5MT0iMzMiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSI1MiIgeTI9IjY4LjM2IiB4Mj0iMjUuMTUiIHkxPSIzNSIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjYyLjg3IiB5Mj0iNzMuODIiIHgyPSIzMS4zNiIgeTE9IjM1LjEzIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iNzIiIHkyPSI2OS43MSIgeDI9IjQ3LjExIiB5MT0iMzgiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSI4MS45OCIgeTI9IjY2LjQ2IiB4Mj0iNTkuNTYiIHkxPSIzOC44IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iOTEuMzIiIHkyPSI2MiIgeDI9Ijc1IiB5MT0iNDEuMz'+
			'EiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIxMDEuMjciIHkyPSI2My4xMiIgeDI9Ijg2LjAzIiB5MT0iNDIuNTEiIGNsYXNzPSJjbHMtMSIvPgogIDxsaW5lIHgxPSIxMTIuMTQiIHkyPSI2MiIgeDI9Ijk5LjI4IiB5MT0iNDQuNiIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjEyMy4yIiB5Mj0iNjMuMTIiIHgyPSIxMTEiIHkxPSI0Ni43MyIgY2xhc3M9ImNscy0xIi8+CiAgPGxpbmUgeDE9IjEzMy40NCIgeTI9IjYzLjEyIiB4Mj0iMTIzLjIiIHkxPSI0OC43IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMTQyLjI3IiB5Mj0iNjMuMzYiIHgyPSIxMzMuNDQiIHkxPSI1MC40'+
			'IiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMTUyLjQ2IiB5Mj0iNjMuMTIiIHgyPSIxNDYuNDEiIHkxPSI1My4zIiBjbGFzcz0iY2xzLTEiLz4KICA8bGluZSB4MT0iMTYzLjciIHkyPSI2My42MiIgeDI9IjE1OC4yMiIgeTE9IjU0LjkyIiBjbGFzcz0iY2xzLTEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_19__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19";
		el.ggDx=-28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 700px;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 144px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._svg_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._desktop_ui.appendChild(me._svg_19);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container locations_panel";
		el.ggType='container';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 978px;';
		hs+='position : absolute;';
		hs+='top : 1524px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._locations=document.createElement('div');
		els=me._locations__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="locations";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text list_locations";
		el.ggType='text';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 10px;';
		hs+='height: 10px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";(function(){

var LOCATIONS = [
    {key:"library", label:"Библиотека", nodes:{"2011":"node18","2026":"node1","future":"node10"}},
    {key:"well", label:"«Колодцы»", nodes:{"2011":"node20","2026":"node5","future":"node13"}},
    {key:"dashi", label:"«Трансформация»", nodes:{"2011":"node17","2026":"node2","future":"node24"}},
    {key:"pyramid", label:"«Пирамида»", nodes:{"2011":"node22","2026":"node7","future":"node15"}},
    {key:"inig", label:"ИниГ", nodes:{"2011":"node16","2026":"node3","future":"node11"}},
    {key:"ifksit", label:"Спорткомплекс", nodes:{"2011":"node19","2026":"node4","future":"node12"}},
    {key:"stadium", label:"Стадион", nodes:{"2011":"node23","2026":"node8","future":"node9"}},
    {key:"dorm", label:"Общежития", nodes:{"2011":"node21","2026":"node6","future":"node14"}}
];

var ROOT_ID = "sfu-location-menu-desktop";
var STYLE_ID = "sfu-location-menu-style-desktop";


/* Удаляем только старую DESKTOP-версию */

var oldRoot = document.getElementById(ROOT_ID);
if (oldRoot) oldRoot.remove();

var oldStyle = document.getElementById(STYLE_ID);
if (oldStyle) oldStyle.remove();


/* ---------------- CSS ---------------- */

var style = document.createElement("style");
style.id = STYLE_ID;

style.textContent = `

#${ROOT_ID} {

    position: fixed;

    left: 78px;
    top: 165px;

    z-index: 999999;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 7px;

    font-family: Arial, sans-serif;
    font-size: 18px;
    line-height: 1;

    pointer-events: auto;
}


#${ROOT_ID} .sfu-location-item {

    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    padding: 5px 12px;

    border: 0;
    background: transparent;

    color: #242527;

    font: inherit;
    line-height: 1;

    white-space: nowrap;

    cursor: pointer;

    opacity: 0.65;

    appearance: none;
    -webkit-appearance: none;
}


#${ROOT_ID} .sfu-location-item[data-location="dashi"] {
    transform: translateX(-.75em);
}
#${ROOT_ID} .sfu-location-item[data-location="pyramid"] {
    transform: translateX(-.5em);
}
#${ROOT_ID} .sfu-location-item[data-location="well"] {
    transform: translateX(-.5em);
}

#${ROOT_ID} .sfu-location-item:hover {

    opacity: 1;
}


#${ROOT_ID} .sfu-location-item.active {

    opacity: 1;
    font-weight: 700;
}


#${ROOT_ID} .sfu-location-item.active::after {

    content: "";

    position: absolute;

    left: -9px;
    right: -9px;
    top: -5px;
    bottom: -5px;

    border: 3px solid #d8561f;
    border-radius: 50%;

    transform: rotate(-2deg);

    pointer-events: none;
}


/* DESKTOP показываем только от 1200px */

@media (max-width: 1199px) {

    #${ROOT_ID} {
        display: none !important;
    }

}

`;

document.head.appendChild(style);


/* ---------------- СОЗДАЁМ СПИСОК ---------------- */

var root = document.createElement("div");
root.id = ROOT_ID;

document.body.appendChild(root);


function cleanNodeId(id) {

    return String(id || "")
        .replace(/^#/, "")
        .trim();
}


function getCurrentNode() {

    try {

        if (window.pano && typeof pano.getCurrentNode === "function") {
            return cleanNodeId(pano.getCurrentNode());
        }

    } catch(e) {}

    return "";
}


function getState() {

    var node = getCurrentNode();

    for (var i = 0; i < LOCATIONS.length; i++) {

        var loc = LOCATIONS[i];

        for (var era in loc.nodes) {

            if (cleanNodeId(loc.nodes[era]) === node) {

                return {
                    location: loc,
                    era: era
                };

            }
        }
    }

    return {
        location: LOCATIONS[0],
        era: "2026"
    };
}


function openLocation(location) {

    var state = getState();

    var era = state.era || "2026";

    var node = location.nodes[era];

    if (!node) {
        node = location.nodes["2026"];
    }

    if (
        window.pano &&
        typeof pano.openNext === "function"
    ) {

        pano.openNext("{" + node + "}", "");

    }
}


function updateActive() {

    var state = getState();

    var buttons =
        root.querySelectorAll(".sfu-location-item");

    buttons.forEach(function(button) {

        if (
            button.dataset.location ===
            state.location.key
        ) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    });
}


LOCATIONS.forEach(function(location) {

    var button =
        document.createElement("button");

    button.type = "button";

    button.className =
        "sfu-location-item";

    button.dataset.location =
        location.key;

    button.textContent =
        location.label;


    button.addEventListener(
        "click",
        function(){

            openLocation(location);

        }
    );


    root.appendChild(button);

});


updateActive();


/* ---------------- PANO2VR EVENTS ---------------- */

try {

    if (
        window.pano &&
        typeof pano.addListener === "function"
    ) {

        pano.addListener(
            "changenode",
            updateActive
        );

        pano.addListener(
            "configloaded",
            updateActive
        );

        pano.addListener(
            "imagesready",
            updateActive
        );

    }

} catch(e) {}


})();
		el.appendChild(els);
		me._locations.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._locations.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._locations);
		el=me._left_panel_back=document.createElement('div');
		els=me._left_panel_back__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzM0LjczIDU1OC4xNyIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'0zIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNCwgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC7'+
			'0L7QuV8xLTIiPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDcuOTQgMzI1IDAgMzM0LjczIDExNC4xNyAyOTYuNTUgMTE0LjE3IDIxMS40OSA0ODQuMTcgMjI2IDQ5NC4xNyAyMzAgNTI0LjE3IDE3NyA1NTguMTcgMjAgNTE3LjE3IDIyIDIzOS4xNyAxNSAyMzYuMTcgMCA3Ljk0Ii8+CiAgPGxpbmUgeDE9IjM2LjUiIHkyPSIxOTMuNjciIHgyPSIzNi41IiB5MT0iNTEyLjY3IiBjbGFzcz0iY2xzLTUiLz4KICA8Zz4KICAgPGxpbmUgeDE9IjEyMi43IiB5Mj0iMTUyLjE3IiB4Mj0iMjIxLjAxIiB5MT0iMTUyLjE3IiBjbGFzcz0iY2xzLTQiLz4KICAgPHBvbHlnb24gY2xhc3M9Im'+
			'Nscy0yIiBwb2ludHM9IjIxNy43IDE1Ni4yNiAyMTcuMDIgMTU1LjUyIDIyMC42MyAxNTIuMTcgMjE3LjAyIDE0OC44MSAyMTcuNyAxNDguMDggMjIyLjEgMTUyLjE3IDIxNy43IDE1Ni4yNiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTExNS41Niw2OS43OXYtOS40MWgtMy44NnY5LjQxaC0yLjIydi0xMS40aDguMzF2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTIwLjU5LDY5Ljc5di0xMS40aDcuNTF2MS45OGgtNS4yOHYyLjY3aDQuNXYxLjk4aC00LjV2Mi43N2g1LjI4djEuOThoLTcuNTFaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTEzNC44'+
			'NSw2NS41aC0yLjE5djQuMjloLTIuMjJ2LTExLjRoNC40MmMyLjM3LDAsMy43NiwxLjYyLDMuNzYsMy41NXMtMS4zOSwzLjU1LTMuNzYsMy41NVptLS4xMS01LjEyaC0yLjA4djMuMTJoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU1cy0uNjQtMS41Ny0xLjY1LTEuNTdaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTE0OC4yLDY0LjU1Yy41LjUzLjcsMS4xNy43LDEuOTcsMCwyLTEuMzQsMy4yNy0zLjQ5LDMuMjdoLTQuNzd2LTExLjRoNC41OGMyLjE1LDAsMy41MiwxLjIyLDMuNTIsMy4xNCwwLDEuMDktLjQ2LDEuODktMS40MSwyLjQyLjQ1LjI0LjYyLjM3Ljg2LjYxWm0tMy4xNS'+
			'0xLjU1Yy45MSwwLDEuNDctLjUsMS40Ny0xLjMxcy0uNTYtMS4zMS0xLjQ3LTEuMzFoLTIuMTh2Mi42MmgyLjE4Wm0uMTQsNC44Yy45MSwwLDEuNDktLjU0LDEuNDktMS40MXMtLjU4LTEuMzktMS40OS0xLjM5aC0yLjMydjIuOGgyLjMyWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNTUuODEsNjkuNzloLTQuNDh2LTExLjRoMi4yMnY0LjI5aDIuMjZjMi4yMiwwLDMuNywxLjQ3LDMuNywzLjU1cy0xLjQ5LDMuNTUtMy43LDMuNTVabS0uMTgtNS4xMmgtMi4wOHYzLjE0aDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41N3MtLjY0LTEuNTctMS42NS0xLjU3Wm01LjExLDUuMTJ2LTEx'+
			'LjRoMi4yM3YxMS40aC0yLjIzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNzIuMTksNjkuNzl2LTcuMzFsLTQuNDMsNy4zMWgtMS45OHYtMTEuNGgyLjIydjcuM2w0LjQzLTcuM2gxLjk4djExLjRoLTIuMjNabS0yLjA4LTEyYy0xLjI2LDAtMi41My0uNTYtMi41OS0yLjI5aDEuNTdjLjA1LjcuNDUuOTksMS4wMi45OXMuOTgtLjI5LDEuMDItLjk5aDEuNTdjLS4wNiwxLjczLTEuMzMsMi4yOS0yLjU5LDIuMjlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTExNS43OCw4OC40N3YxLjM5aC0yLjIzdi0xLjM5Yy0zLjM5LS4xMy00LjgtMS44NC00LjgtNC43NHMxLjQxLTQuNT'+
			'ksNC44LTQuNzR2LTEuMTJoMi4yM3YxLjEyYzMuMzkuMTQsNC44MiwxLjg0LDQuODIsNC43NHMtMS40Miw0LjYxLTQuODIsNC43NFptLTIuMTktNy41OWMtMS45LjEtMi42MS45OS0yLjYxLDIuODVzLjcsMi43NywyLjYxLDIuODV2LTUuN1ptMi4xNiwwdjUuN2MxLjkyLS4wOCwyLjYyLS45OSwyLjYyLTIuODVzLS43LTIuNzUtMi42Mi0yLjg1WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xMjIuNTgsODkuNzl2LTExLjRoNy41MXYxLjk4aC01LjI4djIuNjdoNC41djEuOThoLTQuNXYyLjc3aDUuMjh2MS45OGgtNy41MVoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTM5Ljc4'+
			'LDkyLjMxdi0yLjUzaC02LjMydjIuNTNoLTIuMTV2LTQuNTFoMS4wN2MuOTQtMS40NiwxLjM2LTMuODcsMS4zNi02LjV2LTIuOTFoNi44N3Y5LjQxaDEuMzF2NC41MWgtMi4xNVptLTEuMzktMTEuOTRoLTIuNTF2MS42NWMwLDIuMjYtLjIyLDQuMTktMS4wMSw1Ljc4aDMuNTJ2LTcuNDNaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTE0My44Niw4OS43OXYtMTEuNGg3LjUxdjEuOThoLTUuMjh2Mi42N2g0LjV2MS45OGgtNC41djIuNzdoNS4yOHYxLjk4aC03LjUxWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNTguMTEsODUuNWgtMi4xOXY0LjI5aC0yLjIydi0xMS40aDQuND'+
			'JjMi4zNywwLDMuNzYsMS42MiwzLjc2LDMuNTVzLTEuMzksMy41NS0zLjc2LDMuNTVabS0uMTEtNS4xMmgtMi4wOHYzLjEyaDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41NXMtLjY0LTEuNTctMS42NS0xLjU3WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNjkuNTksODkuNzlsLS42Ny0yLjAyaC00LjA1bC0uNjksMi4wMmgtMi4zMmw0LjE1LTExLjRoMS43NGw0LjE2LDExLjRoLTIuMzJabS0yLjY2LTguMDRsLTEuNDQsNC4xNWgyLjgzbC0xLjM5LTQuMTVaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTE3OS44OCw4OS43OXYtOS40MWgtMi43MnYzLjMxYzAsNC43OS0x'+
			'LjE3LDYuMS0zLjU0LDYuMWgtLjg4di0xLjk4aC4zMmMxLjE0LDAsMS45NS0uNjcsMS45NS00LjI0di01LjE3aDcuMDl2MTEuNGgtMi4yMloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTg5LjQxLDg5Ljc5aC00LjQ4di0xMS40aDIuMjJ2NC4yOWgyLjI2YzIuMjIsMCwzLjcsMS40NywzLjcsMy41NXMtMS40OSwzLjU1LTMuNywzLjU1Wm0tLjE4LTUuMTJoLTIuMDh2My4xNGgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTdzLS42NC0xLjU3LTEuNjUtMS41N1oiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMjAxLjIyLDg5Ljc5di00Ljc3aC0zLjg2djQuNzdoLTIuMjJ2LT'+
			'ExLjRoMi4yMnY0LjY2aDMuODZ2LTQuNjZoMi4yMnYxMS40aC0yLjIyWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0yMTAuNzQsODkuNzloLTQuNDh2LTExLjRoMi4yMnY0LjI5aDIuMjZjMi4yMiwwLDMuNywxLjQ3LDMuNywzLjU1cy0xLjQ5LDMuNTUtMy43LDMuNTVabS0uMTgtNS4xMmgtMi4wOHYzLjE0aDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41N3MtLjY0LTEuNTctMS42NS0xLjU3Wm01LjExLDUuMTJ2LTExLjRoMi4yM3YxMS40aC0yLjIzWiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0yMjcuMTIsODkuNzl2LTcuMzFsLTQuNDMsNy4zMWgtMS45OHYtMTEuNGgy'+
			'LjIydjcuM2w0LjQzLTcuM2gxLjk4djExLjRoLTIuMjNabS0yLjA4LTEyYy0xLjI2LDAtMi41My0uNTYtMi41OS0yLjI5aDEuNTdjLjA1LjcuNDUuOTksMS4wMi45OXMuOTgtLjI5LDEuMDItLjk5aDEuNTdjLS4wNiwxLjczLTEuMzMsMi4yOS0yLjU5LDIuMjlaIiBjbGFzcz0iY2xzLTMiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Im03Ni4yMyw3Ny44NnYtNy41M2MyLjU4LS41MSw0LjUyLTIuNzgsNC41Mi01LjUsMC0zLjEtMi41MS01LjYxLTUuNjEtNS42MS0xLjU0LDAtMi45My42Mi0zLjk1LDEuNjJsLTcuMDctNC40Yy4wMy0uMjIuMDQtLjQ0LjA0LS42NywwLTMuMS0yLjUxLTUuNjEtNS'+
			'42MS01LjYxcy01LjYxLDIuNTEtNS42MSw1LjYxLDIuNTEsNS42MSw1LjYxLDUuNjFjMi4wOCwwLDMuOS0xLjE0LDQuODctMi44Mmw2LjU1LDQuMDhjLS4yOS42Ny0uNDQsMS40MS0uNDQsMi4xOSwwLDIuNzMsMS45NSw1LDQuNTIsNS41djcuNTNjLTIuNTguNTEtNC41MiwyLjc4LTQuNTIsNS41LDAsMy4xLDIuNTEsNS42MSw1LjYxLDUuNjFzNS42MS0yLjUxLDUuNjEtNS42MWMwLTIuNzMtMS45NS01LTQuNTItNS41IiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTY0LjE3LDc0LjFjMC0zLjEtMi41MS01LjYxLTUuNjEtNS42MXMtNS42MSwyLjUxLTUuNjEsNS42MWMwLDIuNzMsMS45NSw1'+
			'LDQuNTIsNS41djcuNDVjLTEuMzguMjctMi41OCwxLjA1LTMuNCwyLjEzbC02LjMtMy45M2MuMjEtLjU5LjMzLTEuMjMuMzMtMS44OSwwLTIuNzMtMS45NS01LTQuNTItNS41di03LjUzYzIuNTgtLjUxLDQuNTItMi43OCw0LjUyLTUuNSwwLTMuMS0yLjUxLTUuNjEtNS42MS01LjYxcy01LjYxLDIuNTEtNS42MSw1LjYxYzAsMi43MywxLjk1LDUsNC41Miw1LjV2Ny41M2MtMi41OC41MS00LjUyLDIuNzgtNC41Miw1LjUsMCwzLjEsMi41MSw1LjYxLDUuNjEsNS42MSwxLjY2LDAsMy4xNC0uNzIsNC4xNy0xLjg2bDYuNDcsNC4wM2MtLjEyLjQ1LS4xOC45Mi0uMTgsMS40MSwwLDMuMSwyLjUxLDUuNj'+
			'EsNS42MSw1LjYxczUuNjEtMi41MSw1LjYxLTUuNjFjMC0yLjczLTEuOTUtNS00LjUyLTUuNXYtNy40NWMyLjU4LS41MSw0LjUyLTIuNzgsNC41Mi01LjUiIGNsYXNzPSJjbHMtMyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._left_panel_back__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="left_panel_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 474px;';
		hs+='left : -33px;';
		hs+='position : absolute;';
		hs+='top : -153px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_panel_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_panel_back.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._left_panel_back);
		el=me._left_panel=document.createElement('div');
		els=me._left_panel__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgMzE4LjY1IDQ0Ni4wNiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIiBpZD0iX9Ch0LvQvtC5XzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'0zIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMCA2LjM0IDMwOS4zOSAwIDMxOC42NSA5MS4yNCAyODIuMzEgOTEuMjQgMjAxLjMzIDM4Ni45MiAyMTUuMTUgMzk0LjkyIDIx'+
			'OC45NSA0MTguODkgMTY4LjUgNDQ2LjA2IDE5LjA0IDQxMy4zIDIwLjk1IDE5MS4xMyAxNC4yOCAxODguNzMgMCA2LjM0Ii8+CiAgPGxpbmUgeDE9IjI5LjE3IiB5Mj0iMTU0Ljc3IiB4Mj0iMjkuMTciIHkxPSI0MDkuNyIgY2xhc3M9ImNscy00Ii8+CiAgPGc+CiAgIDxsaW5lIHgxPSI5OC4wNSIgeTI9IjEyMS42IiB4Mj0iMTc2LjYyIiB5MT0iMTIxLjYiIGNsYXNzPSJjbHMtNCIvPgogICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTczLjk4IDEyNC44NyAxNzMuNDMgMTI0LjI5IDE3Ni4zMiAxMjEuNiAxNzMuNDMgMTE4LjkyIDE3My45OCAxMTguMzQgMTc3LjQ5IDEyMS42IDE3My'+
			'45OCAxMjQuODciLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Im02MC45Miw2MS44NnYtNi4wMmMyLjA2LS40LDMuNjItMi4yMiwzLjYyLTQuNCwwLTIuNDgtMi4wMS00LjQ4LTQuNDgtNC40OC0xLjIzLDAtMi4zNC41LTMuMTUsMS4zbC01LjY1LTMuNTJjLjAyLS4xOC4wMy0uMzUuMDMtLjUzLDAtMi40OC0yLjAxLTQuNDgtNC40OC00LjQ4cy00LjQ4LDIuMDEtNC40OCw0LjQ4LDIuMDEsNC40OCw0LjQ4LDQuNDhjMS42NywwLDMuMTItLjkxLDMuODktMi4yNmw1LjI0LDMuMjZjLS4yMy41NC0uMzUsMS4xMy0uMzUsMS43NSwwLDIuMTgsMS41Niw0LDMuNjIsNC40djYuMDJjLTIuMDYuNC0zLjYy'+
			'LDIuMjItMy42Miw0LjQsMCwyLjQ4LDIuMDEsNC40OCw0LjQ4LDQuNDhzNC40OC0yLjAxLDQuNDgtNC40OGMwLTIuMTgtMS41NS00LTMuNjItNC40IiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTUxLjI4LDU4Ljg1YzAtMi40OC0yLjAxLTQuNDgtNC40OC00LjQ4cy00LjQ4LDIuMDEtNC40OCw0LjQ4YzAsMi4xOCwxLjU1LDMuOTksMy42Miw0LjR2NS45NWMtMS4xLjIyLTIuMDYuODQtMi43MiwxLjcxbC01LjA0LTMuMTRjLjE3LS40Ny4yNi0uOTguMjYtMS41MSwwLTIuMTgtMS41NS00LTMuNjItNC40di02LjAyYzIuMDYtLjQsMy42Mi0yLjIyLDMuNjItNC40LDAtMi40OC0yLjAxLTQuND'+
			'gtNC40OC00LjQ4cy00LjQ4LDIuMDEtNC40OCw0LjQ4YzAsMi4xOCwxLjU1LDMuOTksMy42Miw0LjR2Ni4wMmMtMi4wNi40LTMuNjIsMi4yMi0zLjYyLDQuNCwwLDIuNDgsMi4wMSw0LjQ4LDQuNDgsNC40OCwxLjMyLDAsMi41MS0uNTcsMy4zMy0xLjQ4bDUuMTcsMy4yMmMtLjA5LjM2LS4xNC43NC0uMTQsMS4xMiwwLDIuNDgsMi4wMSw0LjQ4LDQuNDgsNC40OHM0LjQ4LTIuMDEsNC40OC00LjQ4YzAtMi4xOC0xLjU1LTMuOTktMy42Mi00LjR2LTUuOTVjMi4wNi0uNCwzLjYyLTIuMjIsMy42Mi00LjQiIGNsYXNzPSJjbHMtMyIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZD0ibTg3LjQsNDguMDVo'+
			'Ny43M3Y5LjI0aC0xLjg5di03LjUzaC0zLjk1djcuNTNoLTEuODl2LTkuMjRaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTk3LjM4LDQ4LjA1aDYuMjJ2MS43MWgtNC4zM3YxLjg4aDMuMTh2MS42MWgtMy4xOHYyLjM0aDQuNDl2MS43MWgtNi4zOHYtOS4yNFoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTA1LjU0LDQ4LjA1aDMuNDdjLjY0LDAsMS4yMi4xMiwxLjcyLjM3LjUuMjUuOS42LDEuMTgsMS4wNS4yOC40NS40My45Ny40MywxLjU2cy0uMTQsMS4xMS0uNDMsMS41NmMtLjI4LjQ1LS42OC44LTEuMTgsMS4wNi0uNS4yNS0xLjA4LjM4LTEuNzIuMzhoLTEuNTh2My4yNm'+
			'gtMS44OXYtOS4yNFptMy40Nyw0LjMzYy40NCwwLC43OC0uMTIsMS4wMy0uMzcuMjUtLjI1LjM3LS41Ny4zNy0uOTdzLS4xMy0uNzEtLjM4LS45NWMtLjI1LS4yNC0uNTktLjM2LTEuMDItLjM2aC0xLjU4djIuNjZoMS41OFoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTIwLjcyLDUzLjE1Yy4yOS4zOS40My44Ni40MywxLjQyLDAsLjUyLS4xMy45OS0uMzgsMS40MS0uMjYuNDItLjYyLjc0LTEuMDguOTctLjQ2LjIzLS45OS4zNC0xLjU3LjM0aC00LjEydi05LjI0aDMuMjhjLjU2LDAsMS4wNi4xMSwxLjUxLjMzLjQ1LjIyLjguNTIsMS4wNC45MS4yNS4zOS4zNy44My4zNywxLjM0LDAs'+
			'LjY3LS4yMywxLjIzLS42OSwxLjY3LjUxLjE5LjkxLjQ3LDEuMi44NlptLTQuOS0zLjQ4djIuMTFoMS4zYy4zOCwwLC42OC0uMS44OS0uMjlzLjMxLS40NS4zMS0uNzgtLjEtLjU4LS4zMS0uNzctLjUxLS4yOC0uODktLjI4aC0xLjNabTMuMTIsNS42OGMuMjMtLjIxLjM1LS40OS4zNS0uODVzLS4xMi0uNjQtLjM1LS44NS0uNTYtLjMyLS45Ny0uMzJoLTIuMTZ2Mi4zMmgyLjE2Yy40MSwwLC43My0uMS45Ny0uMzFaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTEyMi44Myw0OC4wNWgxLjg5djMuMThoMS42OGMuNjUsMCwxLjI0LjEzLDEuNzUuMzkuNTEuMjYuOTEuNjEsMS4yLDEuMDcuMj'+
			'guNDYuNDMuOTguNDMsMS41N3MtLjE0LDEuMTQtLjQzLDEuNmMtLjI4LjQ2LS42OC44MS0xLjIsMS4wNnMtMS4xLjM4LTEuNzUuMzhoLTMuNTd2LTkuMjRabTMuNTcsNy41N2MuNDUsMCwuOC0uMTIsMS4wNi0uMzdzLjM5LS41OC4zOS0uOTktLjEzLS43NC0uMzktMS0uNjEtLjM4LTEuMDYtLjM4aC0xLjY4djIuNzRoMS42OFptNC44NC03LjU3aDEuODl2OS4yNGgtMS44OXYtOS4yNFoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTQzLjMxLDQ3Ljg4djkuNDFoLTEuODl2LTUuNzNsLTUuNDIsNS44OWgtLjYydi05LjQxaDEuODl2NS42N2w1LjQtNS44NGguNjNabS01LjQ1LTEuMzRjLS40'+
			'NS0uNDYtLjY3LTEuMDUtLjY3LTEuNzh2LS4yMWgxLjUxdi4yN2MwLC4zNC4wOC42LjI0Ljc4cy4zOC4yOC42Ny4yOC41MS0uMDkuNjctLjI4LjI0LS40NS4yNC0uNzh2LS4yN2gxLjV2LjIxYzAsLjczLS4yMiwxLjMyLS42NywxLjc4LS40NS40Ni0xLjAzLjY5LTEuNzQuNjlzLTEuMy0uMjMtMS43NS0uNjlaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTk3LjU3LDY2LjYzYzAsLjc3LS4xOSwxLjQ0LS41NywyLjAxLS4zOC41Ni0uOSwxLTEuNTcsMS4zLS42Ny4zLTEuNDQuNDctMi4zLjUxdjEuMTJoLTEuODl2LTEuMTJjLS44Ny0uMDQtMS42My0uMjEtMi4zLS41My0uNjYtLjMxLTEuMT'+
			'gtLjc1LTEuNTUtMS4zMi0uMzctLjU3LS41Ni0xLjI0LS41Ni0yLjAyLDAtMS4xNi40LTIuMDcsMS4yMS0yLjcyLjgxLS42NiwxLjg3LTEuMDIsMy4yLTEuMDd2LTEuMDJoMS44OXYxLjAyYy44Ny4wNCwxLjY0LjIxLDIuMy41MS42Ny4zLDEuMTkuNzQsMS41NywxLjMxLjM4LjU3LjU3LDEuMjQuNTcsMi4wMlptLTguODguMDFjMCwuNjguMjIsMS4yMS42NywxLjU4LjQ1LjM3LDEuMDcuNTcsMS44OC42MXYtNC40MmMtLjc5LjA0LTEuNDIuMjUtMS44Ny42NC0uNDUuMzktLjY4LjkyLS42OCwxLjZabTYuMzMsMS41OGMuNDYtLjM5LjY5LS45My42OS0xLjYycy0uMjMtMS4yMi0uNjgtMS42Yy0uNDUt'+
			'LjM3LTEuMDgtLjU3LTEuOS0uNnY0LjQyYy44LS4wMiwxLjQzLS4yMiwxLjg5LS42MVoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtOTkuMjgsNjIuMDVoNi4yMnYxLjcxaC00LjMzdjEuODhoMy4xOHYxLjYxaC0zLjE4djIuMzRoNC40OXYxLjcxaC02LjM4di05LjI0WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xMTYuMTQsNjkuNTh2My42OGgtMS44OXYtMS45N2gtNS43NXYxLjk3aC0xLjg5di0zLjY4aC43NGMuNC0uMzMuNjktLjk4Ljg3LTEuOTVzLjI3LTIuMzMuMjctNC4wNXYtMS41M2g2LjQzdjcuNTNoMS4yM1ptLTYuMTEtMi4yNWMtLjE0Ljk2LS4zNCwxLjcxLS42Mi'+
			'wyLjI1aDMuNjF2LTUuODJoLTIuNzZjLS4wMiwxLjQzLS4xLDIuNjItLjIzLDMuNThaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTExNy42OCw2Mi4wNWg2LjIydjEuNzFoLTQuMzN2MS44OGgzLjE4djEuNjFoLTMuMTh2Mi4zNGg0LjQ5djEuNzFoLTYuMzh2LTkuMjRaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTEyNS44NCw2Mi4wNWgzLjQ3Yy42NCwwLDEuMjIuMTIsMS43Mi4zNy41LjI1LjkuNiwxLjE4LDEuMDUuMjguNDUuNDMuOTcuNDMsMS41NnMtLjE0LDEuMTEtLjQzLDEuNTZjLS4yOC40NS0uNjguOC0xLjE4LDEuMDYtLjUuMjUtMS4wOC4zOC0xLjcyLjM4aC0xLjU4'+
			'djMuMjZoLTEuODl2LTkuMjRabTMuNDcsNC4zM2MuNDQsMCwuNzgtLjEyLDEuMDMtLjM3LjI1LS4yNS4zNy0uNTcuMzctLjk3cy0uMTMtLjcxLS4zOC0uOTVjLS4yNS0uMjQtLjU5LS4zNi0xLjAyLS4zNmgtMS41OHYyLjY2aDEuNThaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTEzOC42Miw3MC4wOWgtMy43OGwtLjUyLDEuMmgtMi4wM2w0LjEzLTkuNDFoLjYzbDQuMTIsOS40MWgtMi4wM2wtLjUyLTEuMlptLTEuODktNC42OGwtMS4yMywzLjEyaDIuNDZsLTEuMjMtMy4xMloiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTQ5Ljg0LDYyLjA1djkuMjRoLTEuODl2LTcuNTNoLT'+
			'IuNjZjLS4wMywxLjk3LS4xNiwzLjUxLS4zOCw0LjYzLS4yMywxLjEyLS41NSwxLjktLjk3LDIuMzYtLjQyLjQ2LS45Ni42OS0xLjYyLjY5LS4yNywwLS41NC0uMDUtLjgtLjE0di0xLjYxYy4wNi4wMi4xOC4wMy4zOC4wMy4zNywwLC42Ny0uMjEuOS0uNjMuMjMtLjQyLjQtMS4wNi41LTEuOTMuMTEtLjg2LjE3LTEuOTkuMTktMy4zOXYtMS43MWg2LjM2WiIgY2xhc3M9ImNscy0zIi8+CiAgIDxwYXRoIGQ9Im0xNTIuMSw2Mi4wNWgxLjg5djMuMThoMS42OGMuNjUsMCwxLjI0LjEzLDEuNzUuMzkuNTEuMjYuOTEuNjEsMS4yLDEuMDcuMjguNDYuNDMuOTguNDMsMS41N3MtLjE0LDEuMTQtLjQzLDEu'+
			'NmMtLjI4LjQ2LS42OC44MS0xLjIsMS4wNnMtMS4xLjM4LTEuNzUuMzhoLTMuNTd2LTkuMjRabTMuNTcsNy41N2MuNDUsMCwuOC0uMTIsMS4wNi0uMzdzLjM5LS41OC4zOS0uOTktLjEzLS43NC0uMzktMS0uNjEtLjM4LTEuMDYtLjM4aC0xLjY4djIuNzRoMS42OFoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTYwLjgsNjIuMDVoMS44OXYzLjU0aDQuMDl2LTMuNTRoMS44OXY5LjI0aC0xLjg5di0zLjk5aC00LjA5djMuOTloLTEuODl2LTkuMjRaIiBjbGFzcz0iY2xzLTMiLz4KICAgPHBhdGggZD0ibTE3MC45Miw2Mi4wNWgxLjg5djMuMThoMS42OGMuNjUsMCwxLjI0LjEzLDEuNzUuMz'+
			'kuNTEuMjYuOTEuNjEsMS4yLDEuMDcuMjguNDYuNDMuOTguNDMsMS41N3MtLjE0LDEuMTQtLjQzLDEuNmMtLjI4LjQ2LS42OC44MS0xLjIsMS4wNnMtMS4xLjM4LTEuNzUuMzhoLTMuNTd2LTkuMjRabTMuNTcsNy41N2MuNDUsMCwuOC0uMTIsMS4wNi0uMzdzLjM5LS41OC4zOS0uOTktLjEzLS43NC0uMzktMS0uNjEtLjM4LTEuMDYtLjM4aC0xLjY4djIuNzRoMS42OFptNC44NC03LjU3aDEuODl2OS4yNGgtMS44OXYtOS4yNFoiIGNsYXNzPSJjbHMtMyIvPgogICA8cGF0aCBkPSJtMTkxLjQsNjEuODh2OS40MWgtMS44OXYtNS43M2wtNS40Miw1Ljg5aC0uNjJ2LTkuNDFoMS44OXY1LjY3bDUuNC01'+
			'Ljg0aC42M1ptLTUuNDUtMS4zNGMtLjQ1LS40Ni0uNjctMS4wNS0uNjctMS43OHYtLjIxaDEuNTF2LjI3YzAsLjM0LjA4LjYuMjQuNzhzLjM4LjI4LjY3LjI4LjUxLS4wOS42Ny0uMjguMjQtLjQ1LjI0LS43OHYtLjI3aDEuNXYuMjFjMCwuNzMtLjIyLDEuMzItLjY3LDEuNzgtLjQ1LjQ2LTEuMDMuNjktMS43NC42OXMtMS4zLS4yMy0xLjc1LS42OVoiIGNsYXNzPSJjbHMtMyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._left_panel__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="left_panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 478px;';
		hs+='left : -52px;';
		hs+='position : absolute;';
		hs+='top : -158px;';
		hs+='visibility : inherit;';
		hs+='width : 355px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._left_panel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_panel.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._left_panel);
		me._desktop_ui.appendChild(me._container_2);
		me.divSkin.appendChild(me._desktop_ui);
		el=me._main=document.createElement('div');
		els=me._main__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="main";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 93px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 12px;';
		hs+='height: 12px;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";(function(){

/* =========================================================
НАСТРОЙКИ
========================================================= */

var LOCATIONS = [
    {"key":"library","nodes":{"2011":"node18","2026":"node1","future":"node10"}},
    {"key":"well","nodes":{"2011":"node20","2026":"node5","future":"node13"}},
    {"key":"dashi","nodes":{"2011":"node17","2026":"node2","future":"node24"}},
    {"key":"pyramid","nodes":{"2011":"node22","2026":"node7","future":"node15"}},
    {"key":"inig","nodes":{"2011":"node16","2026":"node3","future":"node11"}},
    {"key":"ifksit","nodes":{"2011":"node19","2026":"node4","future":"node12"}},
    {"key":"stadium","nodes":{"2011":"node23","2026":"node8","future":"node9"}},
    {"key":"dorm","nodes":{"2011":"node21","2026":"node6","future":"node14"}}
];

var AUDIO_FILES = {
    library: "audio/Библиотека.mp3",
    dashi: "audio/Даши.mp3",
    inig: "audio/ИниГ.mp3",
    ifksit: "audio/ИФКСиТ.mp3",
    well: "audio/Колодцы.mp3?v=c78436b7e12e",
    dorm: "audio/Общежития.mp3",
    pyramid: "audio/Пирамида.mp3?v=d345a7621828",
    stadium: "audio/Стадион.mp3?v=aeec0d9d5d80"
};

var ERAS = [
    {"key":"2011","label":"2011"},
    {"key":"2026","label":"2026"},
    {"key":"future","label":"Фантастическое\nбудущее"}
];

var START_ID = "sfu-start-screen";
var STYLE_ID = "sfu-main-style";
var YEAR_ROOT_ID = "sfu-year-switcher";

	/* SFU_RESPONSIVE_FRAME_V1: code-drawn, viewport-proportional dark edging. */
	(function installSfuResponsiveFrame() {
		var legacyIds = [
			'Svg 13', 'Svg 14', 'Svg 15', 'Svg 16',
			'tablet_Svg 13', 'tablet_Svg 14', 'tablet_Svg 15', 'tablet_Svg 16'
		];
		Array.prototype.forEach.call(me.divSkin.querySelectorAll('.ggskin_svg'), function (node) {
			if (legacyIds.indexOf(node.ggId) === -1) return;
			if (node.ggSubElement) node.ggSubElement.style.display = 'none';
			node.style.pointerEvents = 'none';
		});

		var previous = document.getElementById('sfu-responsive-frame');
		if (previous) previous.remove();
		var frame = document.createElement('div');
		frame.id = 'sfu-responsive-frame';
		frame.setAttribute('aria-hidden', 'true');
		frame.innerHTML =
			'<i class="sfu-frame-edge sfu-frame-top"></i>' +
			'<i class="sfu-frame-edge sfu-frame-right"></i>' +
			'<i class="sfu-frame-edge sfu-frame-bottom"></i>' +
			'<i class="sfu-frame-edge sfu-frame-left"></i>';
		me.divSkin.insertBefore(frame, me.divSkin.firstChild);

		var frameStyle = document.createElement('style');
		frameStyle.id = 'sfu-responsive-frame-style';
		frameStyle.textContent = `
#sfu-responsive-frame {
    display: none;
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
}

@media (min-width: 700px) {
    #sfu-responsive-frame {
        display: block;
        --sfu-frame-color: #232426;
        --sfu-frame-side: clamp(26px, 4.2vmin, 72px);
        --sfu-frame-top: clamp(30px, 5.4vmin, 92px);
        --sfu-frame-bottom: clamp(62px, 11vmin, 176px);
    }

    #sfu-responsive-frame .sfu-frame-edge {
        position: absolute;
        display: block;
        margin: 0;
        background: var(--sfu-frame-color);
        pointer-events: none;
    }

    #sfu-responsive-frame .sfu-frame-top {
        inset: 0 0 auto 0;
        height: var(--sfu-frame-top);
        clip-path: polygon(0 0, 100% 0, 100% 64%, 88% 76%, 75% 62%, 61% 78%, 46% 66%, 31% 82%, 16% 68%, 0 77%);
    }

    #sfu-responsive-frame .sfu-frame-bottom {
        inset: auto 0 0 0;
        height: var(--sfu-frame-bottom);
        clip-path: polygon(0 31%, 12% 22%, 25% 38%, 39% 23%, 55% 34%, 70% 18%, 86% 33%, 100% 24%, 100% 100%, 0 100%);
    }

    #sfu-responsive-frame .sfu-frame-left {
        inset: 0 auto 0 0;
        width: var(--sfu-frame-side);
        clip-path: polygon(0 0, 72% 0, 61% 18%, 80% 36%, 62% 54%, 78% 73%, 64% 100%, 0 100%);
    }

    #sfu-responsive-frame .sfu-frame-right {
        inset: 0 0 0 auto;
        width: var(--sfu-frame-side);
        clip-path: polygon(28% 0, 100% 0, 100% 100%, 36% 100%, 22% 78%, 39% 59%, 20% 40%, 38% 20%);
    }
}
`;
		document.head.appendChild(frameStyle);
	})();




	/* SFU_RESPONSIVE_DECOR_V3: code-drawn responsive line decorations. */
	(function installSfuResponsiveDecor() {
		var legacyIds = [
			'Svg 8', 'tablet_Svg 8', 'mobile_Svg 8',
			'tablet_Svg 7', 'mobile_Svg 7'
		];
		Array.prototype.forEach.call(me.divSkin.querySelectorAll('.ggskin_svg'), function (node) {
			if (legacyIds.indexOf(node.ggId) === -1) return;
			if (node.ggSubElement) node.ggSubElement.style.display = 'none';
			node.style.pointerEvents = 'none';
		});

		var oldDecor = document.getElementById('sfu-responsive-decor');
		if (oldDecor) oldDecor.remove();
		var oldDecorStyle = document.getElementById('sfu-responsive-decor-style');
		if (oldDecorStyle) oldDecorStyle.remove();

		var decor = document.createElement('div');
		decor.id = 'sfu-responsive-decor';
		decor.setAttribute('aria-hidden', 'true');
		decor.innerHTML =
			'<div class="sfu-decor-left">' +
				'<i class="sfu-line sfu-left-cross-h"></i>' +
				'<i class="sfu-line sfu-left-cross-v"></i>' +
				'<i class="sfu-line sfu-left-main"></i>' +
				'<i class="sfu-line sfu-left-diagonal"></i>' +
			'</div>' +
			'<div class="sfu-decor-bottom">' +
				'<i class="sfu-line sfu-bottom-first"></i>' +
				'<i class="sfu-line sfu-bottom-second"></i>' +
			'</div>';
		me.divSkin.insertBefore(decor, me.divSkin.firstChild);

		var decorStyle = document.createElement('style');
		decorStyle.id = 'sfu-responsive-decor-style';
		decorStyle.textContent = `
#sfu-responsive-decor {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    z-index: 2;
    --sfu-decor-color: #e2e1dd;
    --sfu-decor-stroke: clamp(1px, 0.1vmin, 2px);
}

#sfu-responsive-decor .sfu-line {
    position: absolute;
    display: block;
    margin: 0;
    background: var(--sfu-decor-color);
    pointer-events: none;
}

#sfu-responsive-decor .sfu-decor-left {
    display: none;
    position: absolute;
    left: clamp(175px, 19.5vw, 374px);
    top: -4px;
    width: clamp(250px, 34vmin, 305px);
    aspect-ratio: 305.11 / 142;
}

#sfu-responsive-decor .sfu-left-cross-h,
#sfu-responsive-decor .sfu-left-main,
#sfu-responsive-decor .sfu-left-diagonal {
    height: var(--sfu-decor-stroke);
}

#sfu-responsive-decor .sfu-left-cross-h {
    left: 0;
    top: 29.23%;
    width: 9%;
}

#sfu-responsive-decor .sfu-left-cross-v {
    left: 4.42%;
    top: 20.07%;
    width: var(--sfu-decor-stroke);
    height: 18.51%;
}

#sfu-responsive-decor .sfu-left-main {
    left: 12.25%;
    top: 29.23%;
    width: 87.59%;
}

#sfu-responsive-decor .sfu-left-diagonal {
    left: 62.44%;
    top: 0.35%;
    width: 54.97%;
    transform: rotate(57.21deg);
    transform-origin: left center;
}

#sfu-responsive-decor .sfu-decor-bottom {
    position: absolute;
    left: 0;
    bottom: clamp(5px, 1.2vmin, 12px);
    width: 100vw;
    height: var(--sfu-decor-stroke);
}

#sfu-responsive-decor .sfu-decor-bottom .sfu-line {
    top: 0;
    height: var(--sfu-decor-stroke);
}

#sfu-responsive-decor .sfu-bottom-first {
    left: 22.2%;
    width: 3.3%;
}

#sfu-responsive-decor .sfu-bottom-second {
    left: 46.8%;
    width: 7.6%;
}

@media (min-width: 700px) {
    #sfu-responsive-decor .sfu-decor-left {
        display: block;
    }

    #sfu-responsive-decor .sfu-decor-bottom {
        bottom: clamp(24px, 5.5vmin, 60px);
    }
}
`;
		document.head.appendChild(decorStyle);
	})();



	/* SFU_RESPONSIVE_ANCHORS_V22: viewport-anchored visual elements. */
	(function installSfuResponsiveAnchors() {
		var anchorIds = {
			'Svg 17': 'sfu-anchor-title-desktop',
			'tablet_Svg 17': 'sfu-anchor-title-tablet',
			'mobile_Svg 17': 'sfu-anchor-title-mobile',
			'mobile_location_title': 'sfu-anchor-title-mobile-text',
			'Svg 22': 'sfu-anchor-logo-mobile',
			'Svg 19': 'sfu-anchor-plane',
			'Container 2': 'sfu-anchor-locations-desktop',
			'Svg 6': 'sfu-anchor-lines-desktop',
			'tablet_Svg 6': 'sfu-anchor-lines-tablet',
			'mobile_Svg 6': 'sfu-anchor-lines-mobile',
			'Svg 5': 'sfu-anchor-stroke-desktop',
			'tablet_Svg 5': 'sfu-anchor-stroke-tablet',
			'mobile_Svg 5': 'sfu-anchor-stroke-mobile'
		};
		Array.prototype.forEach.call(me.divSkin.querySelectorAll('.ggskin'), function (node) {
			if (anchorIds[node.ggId]) node.id = anchorIds[node.ggId];
		});

		var oldStyle = document.getElementById('sfu-responsive-anchor-style');
		if (oldStyle) oldStyle.remove();
		var style = document.createElement('style');
		style.id = 'sfu-responsive-anchor-style';
		style.textContent = `
#sfu-anchor-title-desktop,
#sfu-anchor-title-tablet,
#sfu-anchor-title-mobile {
    position: fixed !important;
    left: auto !important;
    bottom: auto !important;
    transform-origin: right top !important;
    z-index: 20 !important;
}

#sfu-anchor-title-mobile-text {
    position: fixed !important;
    left: auto !important;
    bottom: auto !important;
    transform-origin: right top !important;
    z-index: 21 !important;
}

#sfu-anchor-plane {
    position: fixed !important;
    left: 28vw !important;
    right: auto !important;
    top: auto !important;
    bottom: clamp(32px, 5vh, 54px) !important;
    transform: none !important;
    z-index: 8 !important;
}

#sfu-anchor-lines-desktop,
#sfu-anchor-lines-tablet,
#sfu-anchor-lines-mobile {
    position: fixed !important;
    left: auto !important;
    top: 50% !important;
    bottom: auto !important;
    transform: translateY(-50%) !important;
    transform-origin: right center !important;
    z-index: 6 !important;
}


#sfu-anchor-stroke-desktop,
#sfu-anchor-stroke-tablet,
#sfu-anchor-stroke-mobile {
    position: fixed !important;
    left: auto !important;
    bottom: auto !important;
    z-index: 30 !important;
    pointer-events: none !important;
}

@media (min-width: 1200px) {
    #sfu-anchor-stroke-desktop {
        top: -54px !important;
        right: clamp(8px, .8vw, 16px) !important;
    }
}

@media (min-width: 700px) and (max-width: 1199px) {
    #sfu-anchor-stroke-tablet {
        top: -27px !important;
        right: 4px !important;
    }
}

@media (max-width: 699px) {
    #sfu-anchor-stroke-mobile {
        top: 26px !important;
        right: 13px !important;
    }
}

/* Scale the desktop controls with the viewport while preserving their anchors. */
@media (min-width: 1200px) {
    #sfu-anchor-locations-desktop {
        transform: scale(var(--sfu-desktop-control-scale, 1)) !important;
        transform-origin: -52px -158px !important;
        z-index: 20 !important;
    }
    #sfu-location-menu-desktop {
        transform: scale(var(--sfu-desktop-control-scale, 1)) !important;
        transform-origin: left top !important;
    }
    #sfu-year-switcher {
        transform: scale(var(--sfu-desktop-year-scale, 1.07)) !important;
        transform-origin: right bottom !important;
    }
    #sfu-audio-button {
        transform: scale(var(--sfu-desktop-control-scale, 1)) !important;
        transform-origin: left bottom !important;
    }
}

@media (min-width: 1600px) {
    #sfu-anchor-title-desktop {
        top: clamp(14px, 2vmin, 24px) !important;
        right: clamp(80px, 8vw, 150px) !important;
        transform: scale(1) !important;
    }
    #sfu-anchor-lines-desktop {
        right: clamp(-52px, -3vw, -36px) !important;
    }
}

@media (min-width: 1200px) and (max-width: 1599px) {
    #sfu-anchor-title-desktop {
        top: clamp(14px, 2vmin, 22px) !important;
        right: clamp(48px, 7vw, 105px) !important;
        transform: scale(.82) !important;
    }
    #sfu-anchor-lines-desktop {
        right: clamp(-48px, -3vw, -34px) !important;
        transform: translateY(-50%) scale(.86) !important;
    }
}

@media (min-width: 700px) and (max-width: 1199px) {
    #sfu-anchor-title-tablet {
        top: clamp(22px, 3vmin, 34px) !important;
        right: 12px !important;
        transform: scale(.82) !important;
    }
    #sfu-anchor-lines-tablet {
        right: -40px !important;
    }
}

@media (max-width: 699px) {
    #sfu-anchor-title-mobile {
        top: 18px !important;
        right: 9px !important;
        transform: scale(.9) !important;
    }
    #sfu-anchor-title-mobile-text {
        top: 40px !important;
        right: 18px !important;
        transform: scale(.9) !important;
        font-size: clamp(46px, 12vw, 52px) !important;
        line-height: .9 !important;
        letter-spacing: -.25px !important;
    }
    #sfu-anchor-lines-mobile {
        right: -40px !important;
    }
}

/* Keep the mobile location paper clear of the fixed SFU logo. */
@media (max-width: 389px) {
    #sfu-anchor-title-mobile,
    #sfu-anchor-title-mobile-text { transform: scale(.86) !important; }
}
@media (max-width: 374px) {
    #sfu-anchor-title-mobile,
    #sfu-anchor-title-mobile-text { transform: scale(.82) !important; }
}
@media (max-width: 359px) {
    #sfu-anchor-title-mobile,
    #sfu-anchor-title-mobile-text { transform: scale(.78) !important; }
}
@media (max-width: 349px) {
    #sfu-anchor-title-mobile,
    #sfu-anchor-title-mobile-text { transform: scale(.72) !important; }
}
@media (max-width: 329px) {
    #sfu-anchor-title-mobile,
    #sfu-anchor-title-mobile-text { transform: scale(.68) !important; }
}

/* Scale the complete SFU logo with the mobile viewport. */
#sfu-anchor-logo-mobile {
    position: fixed !important;
    left: 27px !important;
    top: 37px !important;
    right: auto !important;
    bottom: auto !important;
    transform: scale(.9) !important;
    transform-origin: left top !important;
    z-index: 22 !important;
}
@media (max-width: 389px) {
    #sfu-anchor-logo-mobile { transform: scale(.86) !important; }
}
@media (max-width: 374px) {
    #sfu-anchor-logo-mobile { transform: scale(.81) !important; }
}
@media (max-width: 359px) {
    #sfu-anchor-logo-mobile { transform: scale(.76) !important; }
}
@media (max-width: 349px) {
    #sfu-anchor-logo-mobile { transform: scale(.7) !important; }
}
@media (max-width: 329px) {
    #sfu-anchor-logo-mobile { transform: scale(.65) !important; }
}
`;
		document.head.appendChild(style);

		if (window.sfuDesktopControlScaleHandler) {
			window.removeEventListener('resize', window.sfuDesktopControlScaleHandler);
		}
		window.sfuDesktopControlScaleHandler = function () {
			var viewportWidth = window.innerWidth || document.documentElement.clientWidth || 1920;
			var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1080;
			var scale = Math.min(viewportWidth / 1920, viewportHeight / 1080);
			scale = Math.max(0.68, Math.min(1.30, scale));
			var displayScale = scale * 1.25;
			document.documentElement.style.setProperty('--sfu-desktop-control-scale', displayScale.toFixed(4));
			document.documentElement.style.setProperty('--sfu-desktop-year-scale', displayScale.toFixed(4));

			var panelAnchor = document.getElementById('sfu-anchor-locations-desktop');
			var locationsMenu = document.getElementById('sfu-location-menu-desktop');
			if (panelAnchor && locationsMenu) {
				var panelRect = panelAnchor.getBoundingClientRect();
				locationsMenu.style.left = (panelRect.left + 15 * displayScale) + 'px';
				locationsMenu.style.top = (panelRect.top + 6 * displayScale) + 'px';
			}
		};
		window.addEventListener('resize', window.sfuDesktopControlScaleHandler, { passive: true });
		window.sfuDesktopControlScaleHandler();
		requestAnimationFrame(window.sfuDesktopControlScaleHandler);
	})();


/* =========================================================
ОЧИСТКА СТАРОЙ ВЕРСИИ
========================================================= */

if (window.sfuMainCleanup) {
    try {
        window.sfuMainCleanup();
    } catch(e) {}
}

if (
    window.sfuAudioGuide &&
    window.sfuAudioGuide.audio
) {
    try {
        window.sfuAudioGuide.audio.pause();
    } catch(e) {}
}

var oldStart =
    document.getElementById(START_ID);

if (oldStart) {
    oldStart.remove();
}

var oldStyle =
    document.getElementById(STYLE_ID);

if (oldStyle) {
    oldStyle.remove();
}

var oldYearRoot =
    document.getElementById(YEAR_ROOT_ID);

if (oldYearRoot) {
    oldYearRoot.remove();
}


/* =========================================================
СТИЛИ
========================================================= */

var style =
    document.createElement("style");

style.id =
    STYLE_ID;

style.textContent = `

/* SFU_CERA_PRO_BOLD */
@font-face {
    font-family: 'Cera Pro';
    src: url('data:font/woff2;base64,d09GMgABAAAAALTgAA8AAAACgoQAALR8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGoFWG4OsDBzzZgZgAIo+EQgKhNVgg8c+C45CAAE2AiQDnQAEIAWTVQe/f1sVM5IG4kSWdF234S34I2qX7K425oFmdYW+wDaGZfavc0zgh8+haRUcYG7qYtSvN4tE36Td72b////////aZCI2PcnhJMtOwpfyFdrBaAcr68fWZ6BRuhsyCENYyahtV9CHKDk7xt6GdZNSOpRaOOUM85l3GHDT38gqZ7VKhiMbFoK+1AhTuVIMprFbi43Bx7KnWNkElBthJtwxKGYwWdy13m59wBjbmKg9dibuiA6r5f1uMaA0/0OlvlcPP5OOygNaZdGpTpUJM9U0it3jcHeQefQOvXY4Gsq2F3mvHjldKTSqTKfyC6e51u0nJsZ7ZL1toNN73fRalZXnxtnoAV0kLBJy85E+KRjqmUl5dNY4rWV7xu/ehDc4NPZ0EYuxuD38eS61ioiICBEv2spMMzOVTD6/aK/29n59+ItSSimliKgqqZIq2Vj9d9nOP0RERISIT5VUSZVs7kvdPz2inmSMysayIK9UC2GgRlBkJmQqS6rPwg3XpDnCU30Ev8TTp5h5ILdXkYV/vgoX7o7IBfEe+CiBqBfRL+IZbykZbxpH7vQqviXlf0my2Sruk7cDtQvaqWJwjeDofqvkRIvGXwLiuPUESrQlxtjiiCuunKd/ydPHWOjb/RcgFg6KCl0n4wvsquvqqggVoSJUQKhSowM3PD+3XvyNz1gUY81GbGzU6GEgOQVmg4lJhd2AMwArglNsDpHjEGcREz1E5BQGKhay/z83/38fiZ3ECXgphWBaSgXrbf2q+ejrmpuPnpv+6ObXeuqfEikBSkXxJAR5yD+Vcbhhu+3GG553Wy9nJZk5cSEibnA23KkMQVEUBYXtwoXKUBNyTH6ZuCAHerpz5JUNa9tcNvatsrJ1ete2CZWMcLMzbfOmro2vQiAVAq3RCuNIcEcV3G72gYKANTAILVqUrun94CCITsT/zuuVsu5GkfSH1Yz//zgE7Nz30xtFMxFsBWPRVsBLI0l2V6CCr9gC5///1qx7q7pX7q2CESRiSsTsvXoNNZMmNKEzYXeYc/iI9E+znzDzF2KOWEgcbyRieFVXGCfZE9ZleH6bPeedi1KnThEbg8oP/fm/qZJIBTEoK+biNlm2XkXtImIXGb5M86vwkyUkAQY7JEtsnMz87Fxn2WxT7eC8kNM6xAN6cT+/24QCvryk7ZA1yglFRohZNNaY1dMXcyAUevfSSbSujY5P0v//cmqXyx7vgGc6E+vWvgX0AmmXrQJpwW4929qBKTgwoZd46lSNPAEp9Q9MWv9YmSj+mUSu9Wjte993oqmBDxFGTkuxb8nk/zUtznM5cZzdVbe1kzGlm9JvCF8hIt9HmQzJC4qIGBic18vvvcE9DDogChZrO3blnxYExX/3B+y/7n5/w/EwN7wEYeFREMD/297fb0rblMkkh9IOpV1KmyCfo+iq0CAJwqObQiEUwmIEQn/3jVxgrIWZQNgcAws1hTpTox5eujbAP9pMNzj3KIqiaJqiaVThKoQ7kDyXOjW+xAkvY2nqzLD3FEtm8ICbP6WUUkoJAahiOh3hI4THWgaF0KX0f7g96JKMxw0O3KIoiqYpmqbpb+z8K0OGDBkyZMgQG1wIrtHR0dFRFEVRFD3waDQajeY2Nq4gCEIjWq1Wq5XNzu3o6Oio7bcoiqIoEPicgMiA6fSTBmQ+cxsbWxB0uVqtVquVG5xrFEXTFE3TNOUGB+5RFEVRNE3TDWCvz88pBx61KIqi0+n0FsDn91cSGFVhQUG7bppALIE8WhAuen8/2q+J755WMqFSGvHLiUua+gbp5dxJJvOv06r9spfAk1lwljCzmHlbNOhZgnKLFtsvyXm2pDhj6wdka0GTWXAWnUHHi5K+vjxxNk+JLC8eIP/EC46nsQ+9gFAeAlY3V3RTX3VVv1sddVd0PSDPf9140Xcs0evWbtNMTUABBkGASUIfJfyW//+mpi0eRzgC5IRZKCU4Eg6xaEJsXbRuYztz3x8M3rz5hLlYH+NjFhvykJtAKAFKA3ADKOVSvWM6PYMTJSdKdm63aJ2LzkXprnXfmYf2k9FNi9deia43TxAOFn+5UG37bWgvv0j3/7dlvWmXensB1TMLs98AFCQafQDOfRxEXe++109Vt6pr1C2toKZ3x9KCYFhLUA+7uqpaI9yBjwBjxOiHP0gMmGGIEGIsGYiDECMH+T9OAzuKnEQYO85t/vlnWc1OnUtKn1h2NWqFI2qc7emdTTxymWpGEpLijFuFDNHiNCoJh9AohHIQT9yb+vdax9P2QOhaG0/VVkASjnoEAhIgTQQ1/tdMxdIf9ZB65bgY+7O+1RMXocZrVzPZ5B5eXoL89kvO5iv2uEpP8yJUVkA7BYingF0A0gKCysvD/9/3W/7Obj41Ux4FAL2J3rv0p4miojintDCwhDg/2q/V2z87dx7atTD/gZdISSeuCbVGEtsjQWraoBeW/fbkxgCjGMorDMrL/vi8azirpH6uoQ2yEGQh+iIKc1BuRGV1uARghA/+MCwiIiLeid//n0muFrb3t65aq6piRIyIMcYYEVV9v6//J1LPb9L/W9ilY40xxqhRNb8iIiLiqiuO64qo/eMNsqnnY364aT1KGqRxYgT2S6bWkMfJTBx/u+pcigvdTWCKCgKVXQndwX9zY8K6Zdki2ARDc/Nu3n8XRZ7/vWMgH++w+YfY07Jomuzw8Pn6OdVLOvLmHgMABQDdI/kviCyEP/94bTkA/P3q90mX6uv996h/H68HPKEU4gSJBEWJgkXLBGXJgmWbDpphBmymOaC55sLmFQOMcfHgDF8CMCOWCs5U24HdbgeoO+wEdqddoO5yHmxrP0Jtm0LgrE0Lnt11A2dPveDZXx+QEEZiQwgwoaQdiV4gIgnjgTJpAggJ7V9CBOoNAPN//+Ttd5cHEvg0Wk0yX1poyQezfSUYshAFAL/mGACCGfCb7+0o4+PdgDLoxmwtBrE3Phn1Do78cO7byTbzm1Uu7eXQWS7ccrXVntot7jBacC359nNriB3OIyT0fWvOkxSAoTqhrmzymqI4ABhPILJEjJlpoZU22gkTUetbyFPipzGMXbMXvskMI63nrvVtsXXCqqy0I07ZB24t2newozO+S2/wJ6CAvPB7ffWL/1/95nfjfcDKVH59faEnToMLtv7Uy623TYN3rJAK+VMtfLQJJlzLejfcmvfu0O6lyXUVRPM+bVSo9fVG/jOPUWGjWh/U0ub+SuKRWHBuF3lJl3tl13DFt+tO3KW7daYzXe01XNt58w8b/yFHMz6NZxomDL1VohRm1g83hQfi5SJSQEIQAmmJPHl5kXl7La8x91VIV8XPxH+9t+QfiDYFwSJxIwIIN/iI7bzZk+De83QmJSGIetKAr+Czp3DXQYKEAzuXREWdEK2OswmV8QrSpo3qbQcwnyEQX8v9JMGLWggc/znfmnuqlP5HIdixvGE6BPL4T8Lsd+QU40XgJlcIxV/kg0UN/X79MLbhWCMFJQAw0hEcq25i6uSlHm5tHJX9Gp8AnWjZyU2mVqbYwemOwGY7ij4xy+WmDvUUDFjMmQnNXjb3Uqa1czMgomgkLTLRe5i3d/NtK0coNupOZJBOJPHW3JvMH9HXApNjCL++H+c7kp44ceJUIE4eSZLDHOgd7ktXd6LQ9gHbCZeSCG7vBQjtcCJkwYxYCMvQnzx3rJB6k1d2/ML4CZfFSsRKOdPWzAscsL6SD8pwG4d9acxSM5uBCLG+l5/M+xvBdaXB/PJJxvZQbmgE9t0SkgtGsF4pvtLgSkMrDa82ci02iSgpO/zVokbzpkRvizXKjU2dbJqiJDsRqQA4Jn630yXCRksba7nxzU4o7QFhrb8UWfViTNsjZdgQGHfUMQFYiXAXChPFaJPZlAr7O5DKsdJN+JTxOC898+W8nPxP9CQFXsWrSvFGy4zk+qbl9k5UdIvnfh7nV+JiLqbixR290qUcr75Lv4za4efKKMD/+PcznWoAlZLKgzKAI2NDh7bYpTgCfHMzAvaLXBzcsLikrw48irUgEn4ITZHMGh7tiSmN75CCLPxa6JNS2k1SkPOUQvzt4KwNkVVMHSKwrqJQI9GB26xUZ6yHg1bLbds2MbNF5ykUqgbaWGA69lSASDB3TgHPhHFkPnmHEb7cA1mnv9ICayVJOtBhirI+T3N5c6yV23pbvwDnsvNfZ0cDYDHcX4U5cgcQHWHgmQjrVHUI97Bd0QLSJhtCrITswjuCd+KLuLhR8Bu8OGxDR0U2bAnYRpQJIEuE36js5zFjYhsP4rZjO4bt/YPLTbk0wiUz0S77CqkZIN2sfNf5q9lXjN7c24SDTW+IeTIpmhz1oi2YAp/yXDRCZRO5FXhx/CQBnUL82iyDcoZgq+XsYNhFsReyX8oBCUcojulwBqdHTihMmLnjjWSDmKHAk29zLDDGJTMevvHxTICzVKJLw146wWURnnjInlOPwmeXtYhyGshp0c4T+byoHBb+fCidN+x0dJ0v9PwRLgBycaiXSPoYhC6Z5KUQPybeY+E+NrHjEDkuruMROMFQFvbQJW39povukxo7qhsK5VQpqq8aTJYGX25US9uQlXbZ64gTiV7MKFwGDhZDX0kcfQzOJsZex3bsOUH10rcTXf4VXOFJTqYanv6z2P8JgIUO4whgOFp3XHrer16XmIUV5TnhbMga2nyNQVsK3XJ4xze0wYhcw/MPFQiLEidBiGsEd+Kh9uV6G1I6Gh4L/M2DJgLIPx5As3lHrtXxc6GlZMUpCIb8MHJ/JSf6yNtclha1hvbQqBnunh9DiTZ1elGw3C4IHBy+X7Fj2MeKDZ7EHSirIqKunPDgSnCtX2/MPqghyU86FYr54oCWLHBpazDULy7Z2EXqg6G6NdH8xXG2BouYQJhtc7EnxJNj8g7lH11gZMHBQvFOnubhSe69q5tpG9GrMS5WnEszKPeTo198hWD1jnjChByTOBL2bdwXCWQCPru2k8hRg1RtxBDBeoYNXHaR7YUcITv+pjjptOisZ9UdRXWX6p6qFQz6NbaXNq3f6jXQgOGGjTZa441PXROcDBPglwrkXdhobaTeGXbga65VrvKrwrWLHVGW97wuW6Wzv9kd8/AZ57482b2KlTV20NJF9aV9F8//b34BQaGlLn3irWGpux+EUZIKqb7lkRdSGwXAW1+trqusV30yEgrmtrbt2aXdWuXMs6x5bfux3kcgJlKEpkKEu4KaWrxw+0tJXE6/2Uy0DXCb4XaC7eFuP7lD+I6WtN1gZdxVY3tNrN7MLJwtKcyWn5WH6wqi2V5rlQ3i4Ak8mwNI6dHcAIg6gMcC1CFt/hCwpwtYVbfCIYWb3a6ywiFXyKFaDvgFaf0tU9oeLofAezHI5MyQNTBg0B5xRatOLdUnEoiSHJJM5dyihsvZYst4W6UwU9+piFyJaJvJhvP9xI5+aBRN+mYru6+IgP2Mba+J5IjiFe01iMbQFK5wlFfgccOW8/QVLDyWYay67ei1arAmq/Jo94RolTDvZ04XiKDwHdCAIIVW/+VSAEpXcR34RTCDL5euTHn19Cym5NHgmcW7PwqENwmrWPHSdVetXrv5/bmDhL7zLxDEUDXXhT/iFVAfPS6d/irBX6Ol/a7KAfRrPbM8AgW/lMd7w6/y+Bd9Pffik360T/zt/Wr+aJTwhJ2XzQz3Gsq0MRV8XYg4ELV9BYS8bu4nYtzIjcmLHZLpZbp+i+KIEhxBQ2IRFr2y8MLR6q9KFmR2Z4t5Fs1Gx0RO5zyWlHCbI6qrNkSmGafZrEwbV9Gci/hqBWPY0sAZ51NUESgtrvIvKzM3c/pe06sP0F+z+2ljttyGaJp4NMlNlxdUXzJ7Csir7fc4Afnip+TCrrQ+6a2MWrU9hjZZveNZDO1nfchseY084WVVWGJV4iddyhml9BPsi0/LaiqpKuvMLK30c0SmDeSySFFG0UxIdEamtF7DUJOZV4tW3w17dRMDal41KFjG/NpfZhYyR3GeyMs2awXytIiHxGrJfk4jnAu7Xc1Aot4gkmWW1xiFLEZM6lGFag+vFdlyxLNtsO1otu/iaCTwZV3HUnpfzV2XpRFLA9mwA2ByMw9t2KZfh5tEIsYCDqoR30TESVInWULrN5NeBNyIdF1ULV0TKS8JLgmVmhwoxJQ0t5UomSyFxq4kc2e7mSsVfP+u5theU6u3OYvz+6k0W36lXWrpWg17Y9h6cYwmUMyZTulLmIXWCFLbNoun3a23mbaDvEQVkmhZxIlUck5kPR7KWAbaJW27/ZsUZaRsEHyBOt+j7hDvRmwyaYN0hyzYFlSNlhqa8FBcNzUaYI+KYdT2WvICzGwBcX8EUs/Y9p0rkE9KMavNwJSuxFqeUlQlUQe9AzcQWlTmD1YPRSCs44HWJYMb5rqNd+TPbrcUCS9Jir4iKeULKpdXCEn7iC6PHtMGTXVMG4FRaIutUNHKTKbiNv79QhMSkXJ+eze9y6lKdf5NQ2yoiIlYiCtPhUpddNUtGmZgToKUoO6CAGxX0TAmyVJ31Qbg8eWsbZM7H2upSGqwCRZYCgrZl2E7BF+Z2rbOu1u0cO2Orz3++tBuQIjM5v5mys5qequC7WvogcbQeP8dYt31aGsm/WTDZqsiwUp0tzlwLGuWD7ZH8Yoau4/uaDgPA+hyqkytYElmFJGXg0je3QRXBFYSbq3q0IkiPb6jqPPOK349rpbT8KTMBRHqBJzJ4R7muBrNz4FG6/aXemXMaLs8KD+gm3SPQk9uJRNJQZriQ4oalei2gSnponi8Sep3WVxW1QnVTeFQ5KJhr1afUOi8xo8tl5JX4cp5FCMNVmROxIdIfHfGVWuYErkJF1mc4I5QjXTCm3ywcMlWLZu34dsv8jXCvMdQaii6UcoTT0KEacCbGQStGHN0vy7gh4NlYnEIbca1UoEEOeDPITbRClY46UpWfrpotduwosAr24qRfXT7dyj0eff0Huqf/9FVZ32uinbGx2s0poRVUek0WORdLkm2zpxLJfq+ew4JztxpmcoubFgI6IAAR1Qo1UCSywq3YfZenBmqHHN+JPmJAAVDqIlVoazZ4hl2zZiTKieKOD2aFDzYxVDV3GGW/eybVko8ZjhbTBYmKnjQVxUofryMSTL9iFKaOoUX46ygBIsgYpcolexpZTXINJo2oc2SKUuTDjK8T7mp7xy3CISZ7CtcKYJZAiHPNt7t33UgTKYgvarYpq+t1kqlX7l2nhHdM6L/XnI95/u6Ej1Y/Id3Yay106XT0mBSywfCONqLcoKKX9Uwvn6wezQ0TkIOy5wU4cazeiVF0YRAM8VbyoaLV+Y90FhXzGo4el66jS9RN697ZGLEKhOJhXx3wsR6YpDYV+ObSE9btHA1zkq0uLvtVpd33aNGKJ5Znc8i3L0W3AZki1lqsbVW6kdgNeYFIXQMR/oH7S3AeO5eUWPDrH0nWtISgQ9z9kc5DH4zwRcCX1RQnqRWmAC3vYZWRlS027yn5HdVqSINbnK0NGAWv3YUmmbbQUlQAmhzS5bM+k7Vhjbl17v2ns67TFXoY6+bdp4IuMzUNx2Az8V+Rh+rK1wgY/xgG5cRU2K4Q4eZt4gFp6ljZJnGI+gWcg360RCi3XlXlwryaH+YyW5YJwcdNapdhLys/5an119ht/5tESt9bVJ7Phol0onB5qgWDHjuMInTTGfDXblKiQoe+M3SPwCVBXTRSVmuvbuAwSqln5upb3wVNmoTzSAiZo0sqzluh1waQpOIvcG6mgz1DuHG9j4sSRngmFuVqoVXGxpJRa+oJD/RB1obtRiIJn3QXM4/SZpbPzUcEbWmc0+2BERN5AHTcMsk4SmH8sbxwfNNgU4Z5U8UIKAqqIcsmCKESp+aUAN0fYU1GJpMlyFr3yCTDZCNShA2FaTNY7fFjnUXSbPbPkz7sf2ZzH2gSlAVqBpUg1SLZIa8gLyC1EEaIBZYE+wdrBnWgtDKyQcInxDaEawIXQhfUXSj+IHqFzs9dsXCfhnJvQ8gYMHAjwKKB5QIKAYoBYg0IDIQWWA2Mg8yH7IAihCKMIoIiigqB1WCkBSaDJpcEoUKUaoUlSpVBV0NQx+Gfkx1TE1MbURDYCMwYygmUBtEbwi9EfTG8DSO0QdwfQjqI2gfI/YJSp9i9hm0z3H1BViQhvchwhrHmMQ3xpgiMpU4nTQDm0malfF1LLzKYrrn6FgCXgZeHloFXhVeDVkvur514jIWzyFUFD7zq39EkppKlhJUBx3XMRP0TaYcaU3FYkyN2YbTmotlJK35WBJpLeRiEZ7FybfEOI6WcbWcwAqeVlNYi2srnR3opqGZjmMPnb1Ic+kcQbOQzgnezmAXJMcmK0HyUNnlU3AQFQq1/+wccoKz/ziL5ZyLNK5IYlem1lVuYClNpRuV4buVwO0E7iBzJ2d3kbmbs3vI3MvZfZDHWCohT7BUQf7BUg35F8tTLLV8PInlOZaXWF5jqcfSiMUCeYOlCfIWyzvIf1iaIe+x8KDvq+5D6X0svU+l97n0vpTZ19L7phA8KZBEQAoHMoR8Q0JSyEguBYCpQKcBTAc6A8xEZ4G50LnJ8JLhJyMAESQqBNFBVBiik6gIRFeIgorh4kDFcUnglXyRRHPSYMtkx5EtK1dOvrxCBcWKSpWUK6tU0V03ZFWB14NbDUHv4CGVm9BFA5BVT4tGjWjWjFatJ800NkXYhggbptMICaN0GYMYJ2oCahKXaQu66aUr+VMh6ApQg/BNwd1QirHh4YwMb3SETlQL70IT2nj0BRiDxCARsQtlQYYyL0W9uOe7kBtzwLBYg1c5IgxTIIxUJD/librWl0m6r9D7mkzfoPct0b4j2/ek+wG9H3+yI1DPEIA1FEwqFNph0kDIZCBksgYhmgWtiA4aO2QoKJGptEOGjhKZ7WaOrtqH7i2t4yYuISklLcMH5vMKigwAKyL0wh41vfrI8v+Ip66h6axVVlsjX4FCa5mss94GGxUpVmKTzbbYapvtdthltz322me/A+57qFyFSlWq1ahl9sIrdRpYNHmnWYtWbT5pZwVd4CvoBj/AL9ADpuwAxGR4WWwOb7ctjNrhHHsHJxc3D75QLCVlcqVKrfXqnWHZbNLCFzn8iIva63WG2113yfZmtg+//0QH+X9qgn/NQXkjpoUIz+YZpBCxuAAhAWHC5fdO1H9avHQ94ZUD/vXiSVX/9wrGrzaCgUjX/MnEiVPazFVtG4jH75p+856mM684jxK+bC0BenI0tgeRtfxyIXUDLL0mLNctTY4ET/rhVq3QcnZV5js5bCMXtfaq7847tWPKcSirMz8s5ZOTVPFK7+uhp0/sgaDIg0VfsqlIBMJ9ZivIpVxQlpWU+gHf0r8OYIpQwfvFGrFTN3Nb+0ORPzwT+4N3/tzvX0Q7ntAA9s8woeoh1IejTU7pdviuzNelmFD+pgBbMKGg+JhTDnCttBcJ26ZZkQxHehVy5Gsqu8j9cGFU0pcT51YiK/p3DEjvW3euLuUuF93qLHpBU2M5xfmpUxquL3KcZLTYftXgSR/DRLoc8igYfYNTR5at+50vkTgh6tebiURW1ijULRrf2A3lYn3uXodoEDaNARctHa0uZUrRtg38ii68+BEa2khBlwNpXocG0upiRPt8JBwVQAwdNpChv63JY8uUPcGjzCxHOm1OevD/XGh+g2vAJXYQ85yY0RzZ2CDjI5kYYnKoqcOZNsz04c0YwcwRzUoCQgv7cB4ZBT3KS6XRGUwi82T5i67v+6tPyb+H/ecq/NcXxjNMT5IVrVPbbUx2e21TAjMlJFOCMQHDBAAT0AtE0EUXY4xj3JKClhSxpHDlpN7NkpUYY5k9uW817vsJfpzo54l+jXALD4ZhV1kMyADykDwkYxWESk0FKmkoJQ2ipOGTNHCSjkzyAZIMNHJ4Bxt2vPMe33zHP/8j/MjEHpmoIwtyZOGNLLCRgTQiMCMFY6QBjKt6cUUTTDKuyAQVh3cIIwxppDsvc2X7uImQgIMka+hkeCAFA1/n4DSITQQ3jPRMF7Yo46NOkM5gfttoBaV3jPhwtUxOoBdx99nHx5+A8PqIiJwYcaxxErIBTdBAnzTADasBrLGdF6p1UV5gWIgTKkQed9lf/uaV4IIPEQKzMAQjKGZhyVLZOVC2DCMquz1UUgxpKUaqVbQHqs20MtOrgr/+0aZSJqEThmwokKTpIQ/bWkNcZxgyw7IogZcFb2XWMmuZNQEREAERIZEmTSEXUk0lkVwINmk6Cck2h94mVV966TmvvPbaC+rUq/eSBo0aaXAEvPyQ/JD8kPwiZZ6CSChnsacQKkol+RRESMmEn4Jo6dCnXft06Bgr63TqnC5dRyAcXxAqiLSSYeGCqSu5OFQQgeUsER36/PZ7evTMH3+mV+9TNquQFW7QW7x0VA/JZQtIhz6zeRbLrNbZbLPbj6hZmahM5IfkFyk1hSNNimHBKU2NYdkpTZBh+AwQgAAEIPqofhQ7i0iMxEiMxEiMxAwsDFmGapVapVYRmGlrem4GnAGiH6Vq+9CQsnu+N7lq1krQXv/X0V7XL196GWpkNDjrLMAAQQYJNVRf+3ZwjcbAwsDCoIXYRjc8HLLwNcPci7kXNsOLuW1mi7nU1UUocHLvibuNGAxGjgRIEzQB1OmjjAvBEKLKhd4QBu0sVq7QpMjD3LfqlhsB2mXlqOP7//JIodLoDCaLDXCOATISLnZdl8cXCGn+X96JVAZCMIJiOEHKFUqVWqPV6Q1Gk9litTucLrfHa9ykKTPmzGu4bVFgScuyVZF1bRu2aPd17EoYX3zz3U+//WEzpTzNVrvT5cNEMBaby3N0dvUUiCQERSuARuetbrrz4NHTRYzAEUgvP9VBjw7t0XHWfzgYUzYkjDDGBKZgKrbDJMCv/EJAVV5vFcJLgmFcDFD6MkSjUrSvKDneef8UU3EfUCXKKS5q8Pxx3tTzpmGqlM0/KytENmGr2CuI/43vhVqDkrr+4RcH4UYtwb7s/vPK/AeIT1+3Y4vbAjt2VXZIryO2X0vNRtkppuxUL4PGmFsnU4XnZ37RHSZr2GegjqMg09vXxhHFNSuJ+aL2euKSYsOKdtWnbbCsjvP37JRGVe/2Z1A9oVTh9gL9E0Azm9R5VUVKLLL1RlbAcgXjkbLiGiaJP3zPuJg3CBTmHPvSwq+XTSZBk+1WgHmLjruNMxOatpSCk5Ow6HzJ3SfstRL32HyO5KOhQ3qlOdNt9I20bKeIe1bAOHNAyZXn2ubu1v11OFW30xYP7CRVjLDIDQW9mUXdyoC61Nm7qsHp8LLJQdD/wk2zcUen5Jys0qGIRGqC6BUQNaZFdVAilhnYkxMTTgp2aQFtPuotxYytzvvCs2A6OoO5GToMjC/mg6IopK5gC/XFOqGKadtQ8+/+874O4AOX84Y63R5VwjHPybqfEpN+hOo5Q3+GzHwIYcURj32XSq1tNnnVb6SjJbEJvZeglCe6WolSZNjK7Vrr49RGXlNltreK38t+sAk6Ul7+hMN05CJNw6Ulv/crNJ6wh/1OQBtOOhijeC/f9BXW5pv/QLHn667Xc7OAOUx+f3fjw6+1qLqgvMlxsAGHYZx8TU+9Mclzze81OnovvV86GZ5OHtEvnYDxeZHDT7G1lJx3j6E2+/ymL10jbSoBcZBwV6tn9TQutiAXZae01Sj/T/8cpZk2AAuql1ksh0OFUbBvKx05URzKQl6qU++nd3cwgl3DOTKcEyM581SrzI0MCnEUlBJFhDiUQkjq1Elp2tGRGd+vc3ddRq60S13hS1/hy9xgHSqeiBG94K9nEOf0AQIgAIDbYR48m9/V9abYKv/QqiderENQ7eLyNOoKVbZjtWnYUjKpwufWcivsBLdMgPdHn4wQwFsWABDeBJC11R8BHyher5UV7fG9Zd4EYJp0K4DdgoifKNAIaMGHgPW2NQA2iT6RYnT7zeep68yDteasx8PMfadfv3A9y9anKH3qAH22mmweVjFixS2L7XQC4MGEKMvcx1dpV3CueMzb/23EURtwldXeyTzdtAHk881Qd53f+CEbuPYGWQ5AmQGgqJNsnpx+22yTsE3RZoacJIOhdxNfPQcjytsf0lJ4DHjcwm9ZlGEtQ97BEusm5a7ltgwd+X4LtTlRwGsNgiS58uEddEuttOOi7FrWM5dlK/UdRr0xWkmxTOfekEY0F/yeukdZZo2QlHY+TUFLWcNsuJ6ts/I5G+K6YZ1m5rMMWLjzm0YFwMYVAEz6DR9Pj7azrS+y7JZhFYXs+B9+PpyXJ1tdT6/nphqk0Gdm2fmgyZmX8uROE3ywtrk2Zk+2xrjJALp+7LjJxwBU0fCT1de/nS2QgV7ASzumL92ZMjsCd1iTFUzfO+MyL+tyugOLONrS+LWwFwiAiBREbNs3Fb0PQCjDOnQQiuLUaiXz+w34DQ1krgpCvgclkV5NVlcI6gopXSEYW27b4YYdljY9zhOUFzUt35LHLTAsOmLGYiGOgCPgEmTCXOkLw0MwYi1cBgpgrrUIGfSswEzeGWIu7brKMEYxxponUnA6sX5UODxh9rAKWXTueU3Na1pVMhiySHmr6WbxguZQvahByydrkILWKNoUBWK0eTRBJkZJIEZJGg6l+ELLEY2yJZts7vnCRgghiRUOP/8DAepfT683NQQok8l+IfM1zBxWpr2RvAczig5JZPTU5OEb+0rJ8ZynSrqg8twg3yuQPRFTvyu2UcstNQ1r7DtmEFHsWcFM3YtER+4lNLyiMYAXbCOH8yRaiznTMWfCtZSOuC6YMOKiH+uSfVuuyLrosA4h07QrZnbYZUPb/rqRm/Be2cmfMST+191ndpRTGp6bvg9eqdfJcIUYEJNUjKKfsnWbixq1Ckub/aV4X5UkGPbFC5l3fcT9tNzKkOtVkttWlNgjYFx4/SnkAu+PM0wE6hIaJ8LJzi3tWzVh5D60UHZ8VC3kfXLiDM8qRDO3wOO7O413YSvziBcIz93CquAUmB/cZwQbWPcdTIgC1l3imgvO/G+skAsMfvZdJAgdCMbbdIzXxBwCJudpWUnom2jwdAYUI8QxFecCdM2CaYSb+Sj3+KG5meUCrLbb2fBR1Z7aQCGLXKBfnN+NLzuFY3JgV8Zg70EmQKrB/QEEhEVDKFfv3GnwQa6Q19APY+GKpksmxVCCnSFMVRoine1ipolRwaRfDIl0qcoTwPtD1HOB94kqa15C/OehsKBHRVSFDm9cPkD1ojwpuC8TewcuSCFlqokKn3JaCKMRNQ+CfmmsT1op4t0zKmKrQIyOObQdk3h42tSkC8zxxj5zzAfcOXliZeaVHnSyoMOIcpBcDeaZuk3JEunSNIg7iik0fzd/zwnbw7J7KPNIJA27R60OzFTuJERFsa7enJPvSmiaRtz9HdVU3UMd6UaXgGgR8l5suLmTibg3ii4CZmVNf6XhKQ2V/NU/hFJaS0Cyva4z4L0E9TMywbU6xt4Y0WfJgzlc2vc2auw346SOlQxA05+WHNt2YBZ7a9p92iZaOqe5LQuH7pOu+F4jjEOcfFa+ySejJt8GxNjEllMcyQWqm5kJRRYmiMG9flfoT/TTczP/tsXaiVvkuNIkT1ww/ihkl3QdIjyuSmdSEouakYralOGiVqqhad87rOTGQ9/WGsarRuVG7oQFLj3ZVFEkmmr5uu+nl0nC68PEAI2kXKC74ZOBEqkdvYNkxKu3525EkahOBTVit0Rqv2q6rQuV/HXgnrHgARp5qOqRoE5J/SJodJY1F7EWRTGJVqq2haK9DvC45HR+0jPwHMwL4CVtryCvGeok6aKlm66ehai3PtBfiBwCF4hnP3u9YQYAEwE8GQB2T6UBdwYkCysbLg9KPrgCqIWQCoOL4C9KIAe7BFIphDKgsqiVoFWgVeGrgeqDbwC+BqxWYAe0U3bAD+/fyKa/bXYaemnAFJwqQVWpNu6pW3opiC6aIsBUNU1pCMkEXEkyTEIrSI0mkAtJhlAN+tSdFdF8QLIzYel+5rJKNPl73g25KSe83lQr7Njd2lTSG0kpgspzM6FzHhfIU3g8C/Y8RS8Q9eJCyEtF4l4ppLyK7jUcr08S3mhzU2/zpcc7aXHN+1v3fg96fFinPhKWj3H5BN2nOD4j7vMJ74tS9l91QPF1VN9CwnfEfT9ktfOt+xnifkH3Kx/CYLC6oCc6QTweC2+JAFcSiMdAMxlEUgBJBXoa8KYDLZN4FvVcDGRTyI2TB5yXRH7iBaAFseogXhhSJ3oRfHWhFcVfjHAOueI4JUAl4ctSKIdTgXJFopVCOaJ1o1eF1INeL/H6IPWjNwCpjl6DfE1ctcjXJt64BD8CQ5VRtT0AR1BlkKrp/TUIhITCIuq+kxOUTwHkVNB5GoidDvQzcM78W9dZZ1PPcx6Z855P/PwXmqoDlOuk4yLo1/Wh/6IXo+r6U9hfxS9BFRqJWiVlRbCFMmqWLPmg39BXKrWGbAMHzYY+OVusNjulhr729nhrI8/Qe0966qE//EUve9XrOjv7Jz2UGPqKk1ucAAOfHCGCFaxhYzT3Ip75Flho4UUWXbqvbWqZZVdYaZVVV1vfBtZY6xiRiQL4+RAd5O/JfP7VeTQzWP3tUIVIxBryaqFwiF9d/Lc+py/ZZ61sDgwh9CrytC3GfJniYqSbZ6dqzILiya7DclSOyM69uqaNqekdDLxYxCnQJd7aCe/ZL9HljDqyd17brISuAdF2N7biNMXeAYgz1NIpOAGDXVYjBeGF+4ZhmSXQc/0FaDk966j7POjyGJ7Sj/gjSXxy6aJnFt1OzwwVFeJ6MJbKlOlmAKF0mSBXU+0K79h8GyCsMof32DwgIXkDJoxx4KGI8Hyz2w303BFzO4N7hdlWIqdqTSW2eoccK3RzdDZw1DcSgVSsxDOs4TqinjpMlE/iJWEqMslle+vQIbOGoUicxn7zZVPe/67ezwtXWV1RR4YIxvBevGMp+YatHPSjvcPI80E0or4xHNq4U0hVvAQDa7UeKMsG1v2a2CadUt2WoFGdH3USuZ0Dt7Gle5XyvOJRTaHXlA75kLrTkwR2wX2iwHCC4Nk21h2ca6xJKYQ+CWRYcy4nCCdmhoddQXVgstiOJ2FSBe6+yCXKlEhjOrRWUFTiordFSbQQ0yW8ZbUHjTpMR76Q9fSMV462TxFJHrNldcv5wA0fvIFULuqOLlftGz9uTkn6ZQwOb13Od1gruVcZYddBFl+z9VSMCQ3STjgNoWCJ2NUJ1NoXk0k3zCguYUwdauZIiEVZOMJZxG9SMAIF64PUni0uJnkJD/1NuiejqN0Y7qSvn2UsjCcoF4VrW6mKRzRsbkWss12faugPg/4kSGBL4/M5seY8n+6+l3gWDlrF2jahLsaKKrCFrnWJfUFn+cAq1n3e736XIO6hHm1SdUzw3ZauJ4A8CqIA9j4VPOciUZNsckWcWAtzRavgrPo3ofKlJdS8+HC1G6lzsyvc3LVtQlX7YjTN3LH4ejZWyRITa1hiUvWaWLcmVqyptWpq/ciLI+H5DtM4nsWximQu7HNr6MS5kk7yF9BJz5588kMQK0oSnUT8ugT7M2b6cRPEJkgZRP2256z8l3ozQJA8Bp2IZZqa1YOsnX47xmfXeO2elL3jcaQTl5kiUAgQQNHgLDpoFezKCnb1/PTuNQFxAItO/v4CEOCL++4n7AiO3gyq3A3gozdVrbsBiEQh4vvdIxxc4NoivFrw5r4efhhcKoCVFJKOpWOBGzVFSaXlEi8RnGOCNwJHN8riJixqWgo28fzH0wMi59KcP2gYZkcQROFQY1gJehpr90ZF0BRcgkgp5OBLkCqIOALiGTu8dGsEN4CbAHQvmkY4iC/hl0DPoIziUIiKA1CQMjiFi03EJhjbkG2IYobsdjjIA8Mwkk+5yHAjJqsVCGK5OuGWLDwLATH++sYAd3XlQFiCG7mJxBIpQVIyWq5QqoBao9V59cZb77z3wUfL6NPvlkDEOOyfBEBKCaKAZuhUNn/iCVVkUXOYulAxF37KYJgLXFHaqoUcoV8uTKWStJ7lDC85O1XKS2VZqDjPFGWYosR5vKKIz8m6wVc5qyFNn+U1EQnzseidpxu/lIkoFUTNHinTiPErBX6OSo9RK3uXksJhvxRlrdJ83Y5CEAl+hOnD+3CvPHhWQ4FKvKSomLOkpUtFncCnq7m62qtv+JrJ9NJQDzt/BSNU74SBrMulQJjoyUDVkF4UiKDKZO8x8MZkx6Tey5Honm2yOsOuijsbMp5XBJlUe1KpZLr7DDl9VIsVjsF83y77YimJKae8OoIat93W2yLuCiXVrlqTIxutU7lqPprGWFp6xANt8ZpcfFh1bb6qlLZPfm90Hx671HTS+Ag5YY3lKnUIHEvEwqWuDMhVCWFx2Ztfh2H17hQip99ABlZLUFvT3A5JzwOTQVbZQjc8cXVFkg32XxX1gsP70SqOM3t7fwIFiKtYNdZ7lEW78j1I9zAVl6afEj8TquGXglQbRAZe7iEuOji/cfYMCyVMCJdeNlLm3xBwZcGXDS0PoWmIzQA3E7VZkGbDNQfS3AWp+cmRFhZwi+BaDGkJcktBLUNpOdYKtJWgVaRWI62By8dOvcFtWoPQcVQSF0alyFMR+rLfTrTCSUiV1ZwX4d1s+RKMWz694SZqiTjat0mL3N6ZKFe+8ldO4o0TmZIx2VHztHEiEApanIXAXrtLuMM3VWCUCrHW4pkYt41WjZQ2cKuJXBGDWrBKWNSGt3lhmqbt1rUXNnWwrpPcTmZpKe3G2zNs/2JDl/bDpH5aDVA6RL8hWg1TOsqwHbQapXSCVuPgm8IxOvME6W+nGwmpEtQSzBHBSVATJcW9c3W5ERapQWlq9/S5adMh7ZEwkhOvlMFoKWUA9EV5ULkpeYZRl/6brTSPWYiQUlACP88TPcQFWlNOfGzPKXMcMJybinINT6q6UTFbPM5DnCFRbnjYo8pZoZQJyulVT51a0n69QyhJzLbUoUe5f+ip1pNkcS06p5gvwrJ00tF7prIXNo/WbAtVtnPr4potpEUVUYzOV6PBniYyaj33/GRUHuYSQmZNYoGdTPVyI4SiKT+l1UsmR7bnuC6koB1lz/hc217hzqmbEQG//Kk9CFMXYpbgP64tSj9I6lhlbvn0YNVLI22eHRtyv0Q3ic0m2RHkWXgy1hnlybcNOZDqRIUlL0rdPvCeJpcgDoxZOBvnwxzye/MDniRTDyZm2TJQO7N3KHO7Fj3wWjVf1ZRFzQvRPGo84NwBe4F2/EVU4h9T+uuv88LJ73+HK34ZyQ6Ll1Eb54OdjdhQJy1yW7Ot1YyhqvE01J09yqrIvYuJSmJHjzqlMIuYUwDiWCRlNqELS2fXoOdcqgYmAmVneoj3tOI8NLU5lThFnPL0gP9KhC1mg0RRIsLiRrlpRboj5DVkhDti8FEGyGah4pyrgQoqFDzUC3BlQWHBpeOyRPDIL2AK8sPDasoq/wY/xtBL56LZt6dckdMOybTO06hb4YdU26FxAqup09XkDi05ITey5gbW3NaaW+cMECVyE7lZKDcRX5z76RGS5IM0jB1JyFtAvzcOLzhfz0YBBEQhHDb7iKE+EXjZe0a2o9jv2JwIcH0HqSnAplNgjMEjBJUKrs1pBiZ3bXAXOVBXqfTvLmECQPdZjLNenMFWtTE1xbbZ45ATzrmi1N1ROeCH0W+gVyyatbHqLnqaQUhMfGIKKl786YWJFlcMu17G+ie0enr+08deUi2W/7hiBzgFbFG7JY7Lzn958OdRNbh1/q+iqAul0X8lTv4r4ih+ce2tlxfw2lp0mX8zqu+ps8EW2+1x0DF3ud8jnmx5q1r793T894G2WtvdnkGYxEzMT5wiVV75py+s6KKLjxGntLIrqChFVSlrrK3OehtuoqkOdKzTUzHVY566aZqW+TRd82N6GwIlLiIommE5HkCECZKiGZYjAESYpGiG5UAYxUma5REVAMdjQtEMy/EAIorGDMvxBECECWVYjgcQYUIZR4QFHI+PMKEMy/EAIkwYlnI8gAhTNGFYjgcgBCMohkNuiNS8yrBsx/V8IZU2TMt2XM8QUmnTsh3XE2VVN23XV1ginq+NZTuu5wupLFs7rucbIZU21nE9X0iljXVeXbGx29uf5mXdbHf7YZzmZbNdd/thnObVetlsd/vBaJHZDEYJSPmA+O827tKoVwAZEI/tj2yJyC3pKxSBLcEenGoOiwkHvYRGD965kRlxfNYCFw8XgmEICCSElnTnNHWEOtBVULNw52/ADQNeREU8lVLjNVmaaE2oAacBbqJ87h65i9yEAaAHxDhypa2y8dRvpdXY0FwOuNBIHHq3hAWbYMc32ETeVGiUZTkYEqATMGvQLlKPxdupK8zpIOwLri9wX/LlQhJymk6j0SVg3mJ2NJ9Txdxsa1k7QBotRtcHmLVRK2xb1+KiAtDzS6g5kOpEJnSneg8SVIBpwTaCnIKWZRm43oVAMnxS9fcBvbKB2iJjC4oTXETU8mJOAx0Nr0e64POVano/mAYQ1Q7wO9/SINs9Y5j26B2ZsMEPuq4WN7IEGsAP+uo0DWOWU29Cf/qZQ+lY8n3P2x9mdN+dehcXIw3RUI+DOlHkZfVlhhw7RFZ/CuLOM2tDfBJE6EtuyZSpZaPmbKSNGjWHURhh5KPhwANPn7dkbJO6NOZNmvJWnRX69q1py//5nI505puWKnCoRibyJzYEtYUo9JdmIhYS6KRcZxV6eKY0rRviFeIb4hcSEBIUEhISGtI32v1jxQExSavLJCduvPg5qpKOJa8nU7VwKjO1wrxGqL6ytosA5RvA2Iil0sa6zSNMb1688fH1K/7NcBOAio5LSM6Nlk6wfiINMkTC7xpXJ/zx3GphuJj+YNlc5P9vwDMEpEH2BJPOZR7zWeD6LHzEUUZbynjLWO7EK1nZarZlTdNMu/7t2OT27tBmdjaVqcmLNORdWtOer/lVgFYiOuIqVK6bWnUG289IScaZJEuBQkVKKxVd1kPdjcIZ3pt5fSOsq1hk/DZ50sfDsouZPvcuNB7ZzwZhdf+wUi+3tiZUmXpPpoj+NitmnL0OJzK/xOO4Xm8wNuMr+tt4TXv4jzbdg5Z1+wUN8EcdB3I9/11lXohHbQnH/SmuKR78B+ue63Ae9rVnUiYUynf9a7nLm2j5K5hk0smQ3hDlvXD756e+rWo1q1v9lIO2ZVvXsG1rXMvaplknNfxNZngj27HRjW2c4Lf3tur3f2vv3x9uXvjiv0M+duLUmXPnu/NLtLqpqOqm7foQUy7Kqm7arggx5bKqm7YL4zQv67bvhwfEjN1+XlbrzXa3H8ZptZ43291+GcZpXtbNdrcfxmle1m2fW5R4Pr/Sxjqu5wuptHFc6/lCKm3ZxnE9X5AUzbAcT70xo2t3WqzWm+1uP4zTvFiu1pvtbjGM07xcrTfb3XA8nS/X2/1+EBXR9blUddN2fYipqnPTdn0JMeVSm7brQ0y51NazRUXX66dcatN2fYgpl6atXR9iylVdmrbrgyjJiqrpshtzKcKFECg0BovDh5hyUVZ103ZFiCmXVd20XRineVm3fT+IisDhYQSFxmBx+BBTVeem7foSYsqlNm3Xh5hyqa1niwIODx+CERSDxeEBicVYdR6QWGkx1nmACBPKOLohKOOlGCw2h8vjAxILqbSxTgASS6WNdRBTLrX1RDXD49MMi83h8vhjruvez/v9Z8y1z33e7x9z7XPf3z+ueyAi2QgnB3IjIZGkJB35IFo8Bo402QoUUaii1KhNp17DJkw54JjTABEmlHF+6E3UC6XUoSf6oDHNKNA3iSlpU/JmzC1esmzNLZtqavffcfLeh848G3Ptc9//FyBAp5cVlVqj1ekBSWk21nkBJBY11nlAYlFzElZ4fPwUzbAcLo8fWT3n7vuR1WvPue+HVNpY5/UtOXW+lsPl9nh9/jHXPs7rft7vGHPt87qf92OwMsTh/5d5s1z+0MN/c/jx3moQ2X0N+/w80XGKuLFd7we4gUiE42UYdTwxyzmamMQXUb9f6m4XWbcAy8RqApHW7EwkKq+jJS07faXT6EdGdVRAlWH+IgFerBMJPetUgEZAP9VxsLy4L38l7oiwlbe4mj1i1yzjLuNSO4Rnh9ozoFnGr6ytWXulucwObxzM63sVjwBULP5qMpKeAUVsqfZZXTeC+WnLYq+xLQDoEWAu7+KaO4AfnDgNwby/5URfcPNBcCMe42LCpNW3PVk7xPyM7BUTr8IFF6l6v6FPiy20fs/QE8B8q2WB1yGGANDoM+RnTld0CwDkJuDUmzSE/KS3dPEFlwToYYKL2LRgbEHO6YYyHYab9ioiwrLZLkRzfqe+8/EpwceSkPW91VrBjQQNnn8kTdVbo+o0OEJZwA58HdKkf6bgZqPQ7QXfxf5/xbW6tWDRa5nOm2bm/BK2peAtpEV92ZJlMw6mFoSRZemAQ4+qkzsnDDC86jUlViqulcRw5+nyoaDxwHNywdnFZKULEOtFOfVjXchNjC6FGIbp0GNXK9KF4MQVbzinnzZfizPDqnK/Q3n4MrqX9XJDHNcvn4jQ0KROyqDfKWEkM3e2ZIAbl2bW/HgbRQ/ROgzC8FoxCqcWeeTF9DACnGUVCGMNdrMfN5qLasZH4TRmIz9LZxAsCB1YSHOVy+WPt1EAgNHzyWhXptlPiSBa5PuuxQDLc98McF69XMxx820oLQkS8Q5qDd3WyZ2/r6mp/IYLSEN+7keZOOR3IHVWTifPU/Nq7kZfEpwxw1Hhogw36ddqFPNWugolGsV6bO346sd3LEWPPWyIxnONbmCvNIFbneOCt9VKqnmfnsKsJxdYr1nyRvTWF+v2zax7TbvK/M1OH25Nl1O8+Z8jg3A4msBVJhA7q0SgP9oh2i4XxbnshqlKPZXB7IPl2oJgS3rQHpwJBt25Irf581CBG8CzRSya/xYuic9rq1U3+jIk+CPYfTJSHojbFIh4AdRVhZlEP47JQzhrMzarSrbFNMZ7dQ5ApzHfOJOlyTHTfEutZlJsmz0OOeGcK0rdVa5KrVcsmrWxgm7QAxEkIRPyJ55iqnnNf/qFLRoYL2N8LeD5ar1LqumBsv67YDYaG77MIqSorAK3V6EZVWQu4s+kWkhkxHjYa5ccQbsHj6Kp8MoOPz5lIsBdgLsBDwIeBzwBeA7wCuBVwNuADwEfAb4AlE0OcIADHOAABzjA4QAHOOCAAw444IADnVUxbWrN0osErJ0XK2o+A6tvxKmocxYGVVgbo3xm1V4BL9/HCUBrlNcZThfsqxjnc7FoZO5H37fbzbv5208d0PwhdoEoPnWLDtL/4zdSwtSQ1OpUacqapnqbkjydv0N486e/0X1G95ndZ3Wf3f3bAqf73O7zus/f0utxvMc5NZEZA/+kX89e/s5oCvyXnp4tgE9f//RnRkE+WwITShO9JaaigXSixEeUG8+WrBflezMlIV8ikcRh4BEqUKKCUtM97QXF2ZGS3sJd7xkulCZzJRPix5t7PzbvD0oOyXJyfSUzMplIXHJWIym5PNKS2ZGV3PutvOSPf+jtQyVPzwofvJz93pt70cInz/3ah48/+4pmzz1UmEaf8a6e55nr9RL4ETVKHy2x5PoF8y5zpVEXvNBzCj+RCTgiBSOhIAu5xPym/PKZ1NKylQ2vim5VPWo8fHL/zSDpNBy1kskmuxxyyiWl7qtUq0GzT74mD4J0KNjahY0x3oQrWMkqpty1la181Xsxy1rWvu71YqBUxEQCdfKHOvVc9l803hQFZiu21Cq32GKn/Y45BQSkYRBAFoOgArLyEhCQtVduSJW5r1ylak1jV8y/Wad4M0AAsm4q0Fg+rF79vFhnWY/ouvdRW183Jn3U3O/2fZz+/fqNls2na9xtfcM2c17VR5bn4bS6BZs0xme2pj9bW2T9e7+RbIvqb7D9YkdhLthN2r2whznCnZ46ujU3RI1xK1HwAWn+0o3qar3HidL2MjqF9bIzpf0eF7eO3S5vXSM7T7o+dcN0DXZd5fbIHebux/aPO+TOsMTa42J6GIiPHem5XEn8l5iSSvuOMScxz4K4wPycYU0MuKJ4+ugFB3rl+nN5YeJLegvjTvp48RN3lwv0SoEpjSa+/iu+SEoAODSwcuQ2s/hyyiiXLzCOxXbu26SXHT95dSmC2pI4ke9mRoIAOtveIZAND6ZgOwzRn0GYipe0rcaaaktdSw1trTVVzcufZLIVb/OqVrf6XJefWzTsgOlYkXMMzNTVbxwTjD+75JYocZJkSZPHV9jPIs/0LUZMG3/jV1l1ZSmrqL7aqqqp1Cn3uN9pD3nYGU94ug+GBdu7ghRp7Lpw4ZZZaqVyq6wgdeVuJh20EpZJUNHSNmi6GeZaZrmVVltnvQ022mSLHXY57gQXnvkjSR13/hrSZ9FCFr6k0cdY8lLGHGvsccYdT49avXiKVW3nyvZo1atb/eks4XYG1td/v4/7lGqf9TwV1tXu/WhgOL5/HIQOcNCpyBL9BOR7Y6lyFW62zHIrrLTKave6zwMe9IhHPdl7fdhHo8yt+clTtLmyyquosqqqq6m2uupTBgGromYvlR1aaGONtfBrKtT5pBey57LAGbT0s6ctewUrCsHUzHk+VanNqw9fYdXXnZ4iJWmIGUmB4vjbggukc80qE9x5ZicEdZYZoJnTJnDjHCkPNLMrATWpdOybKTd6Ma1NU5y73A3ZLBYdI0rr0trQZ8hmM/uSi219njbWjGwOcy6luDbkpaXPkc2VFzNqAXn7pi+QzZMfq/gC87GpL5GdpiB2CQXl69u+Qna6qXGiFZzOd32N7AzT4pZYSH7+1zpkZ5oer6RC87e59VDnKATKgeTsK9TOsQcoqaWCRhkLoM42E4w3AwoA4084iONEgAgmEsRpokCEEw0imhgQ8RhAJDMQRDqD3twpwgai0RQLHG07Nk9evPnwpeO38z9q20wHdMBG0lXxMDksI3i24ztSjrHkFW0j6NHPxGk09u+p+iaw/kRnQIPwQkBiCB8qFwS4CAIdBP3647IbYpTRBOZ/sEMoVq9j0YSbJk8RXllgxeRVR1g7/fxzLo7237FlTOwGvzmrlvx7dowG9WetIMSoC0DUngWCjO/v+hEmIoZFjTQyEBH5nOcy18P3pJTcz+3u//3aT/3W9n5vR3/MLiAHW11V4XEEpEDxJAtdnyWCAcV3rZLiNQAuhkBD53BB1EJUfOuA8rY/Jh9CtA29H84XHMzDliLnq4nmBqmH+PNwRganLNYsPsjocwlIMGSQASPLMosPMiKws1LI9eU2cIkcuwdD4HUgSyOfvSxnedYQyuSlImNIWi6EiR9bQPzirCckdJgrVc0DnLWp9eP2QgfNzQEi+i3ptTppZ3mZ4mWZk4eA7A3zvJz1Kp+t3iPSLvT7Vl4BpEEuNZE2NCn/7hM4OMeTJZ8vYCFBmGD6pxMs2fETFET0O41Gde72b6eIcbROe5HXVoorleFfcwpRHk4yp53UfP1zXIBQOa52Urf19wsf5uboJNLLnf/PjBTU8YsTBQV5JfE3V8QPQQYh/MZU+BD5SoZf7wUPsS0e/mzygf+3IZeTgppcxCGYAG0UXDkCh91WgcsCAVseF7eqc4s6R7hwXUqL6hu/DU8ILmiz2dbBsZxD8aRYoIFMhGWlePUB+5srxwmFOp4SFmakTAj/5azm5fRaGpStn7WdApYK3uCl+XXK7Zb/l7PJVlx9/KLsHcgzJxCxaGeLLnWLeYRrFWQxr45L209rnLOzrPScp5+8EQ9m57pJWcUVmWOueYrMt8BCxUqUWmwREIeMjomFw8X+OU9/+iI9Wuh7H+lmm9GmSuSyyGxzxpOvwFTTTFdo5kcMUW87A+i9sB2o3zMcePzrDF+zeWZbar2dDjvroyc7gKh7cvRGfVESJFAoWtPmq+ZLwySUDBgx02JrbXfQaRAB0ybgpECkjs1SwfFIHAV9hky30Gpb7TdcBI8N23pumHpjkx6PKCqnZtBU8620GUqxeaO1mBOi24hEb00QkVHVMmGu5Sd64dH5VjIDFBun+JG8sFMchfiq71zNGb6ynS54ESdk3qMQT5W2a+vylOpMkTYVMBT0Vn5oqYaUnW8zMyZ8KicbTmpGFVk5xugY85wxco3iYsnQwOkgxFNL2Sk4QC2/qcsYKLVkSecbUJgsTWDbJR5PRLY9iI10Fr2si3yoo+gv+gWOCOD812gxL3ZUCN/RNBf7hY8RJowRxot9kqMjRH97GDbavXSe8FhRUpeo7nXc/mKf/NgO1o//tJ50eVFXIr/z7q7TDuGtGx8C5KNLUpi4XM8ntQJSLIroqi0aCVrp8yrmhkDliLN0q/DaMa+LlCH8X/9fqprze4rYTI4YTp/89OqG12Sm540xgl0QVIazbPFmqML+w3+W71jnRVlB3bRK51ygK/5sbXwTEYnDE4hRpH99RRxKdkCYx4OkSOeQ8IXD6nyrYQflBB6iDzsA5Y4qjPTaJvOe1ITlla7SZtrsyS3+r8oeLXVSq68FxbRSHQ3tEFeU0bFZIJSO7Uw5P/7iSUPTLOiQlZpjlh1Ixgnp/yCNeOheaoQcGMTqsj7uxOVfWJ8CbzQFNuCl10+wv/p77BXnoVpHXnNUasaZSvwbGIAkRiTJ0WiHC5XXNfctKuu6rnoTOtzgei6ZeuzbWoxd9HotL1fh271k6fq3RRNstrv94Xg6f8F+fXQFkjiIIE4OaFlwr8A9iK9ZkcW4JoPnh53HX2aCloGaw4CGtuz5Y7xkC6xQ2WMVz/jqUnpUTvQYJZcSM1bsOHHjgSBsBrBViOC+MHpji4lSbHFRiy8hWoklkWPx71OGWDB+mHVUjOit42Z4DArQe00BuPr2rHMjo0Py/0fJurWz+fN56g2xCRQiZxD2uHDLcGugAngWIKe5IXCYApjfYP97C+YkBHx+34WOEPCZ5agiLW3DBq1izWvbndjQPkMc64XmQOMRmMR07HENt/4OXvVD4KcXq7uHdu47ePT0zYdzrxZVrHLNoHfwXmHPhQ4DRGbFlgtXxFTQxDCjTLKL/RzhOCfMzJomy7awt3VJR7OyqjoaaKqnBMqM1/F/XdqZzqVxmucyD/IvZya58EpF2VK6y7TlACDSnxe6aP+39jzhaz7/Xh0gT5iGVfeQkkFfPkMg0pb2/oldB46cvHHn6YsFE/9yOc67j7vSogdbN5zvtoiqyqFK45yXtZxX1C5nfPpLE2lvuvwx2aWkVJWPJf8f4PON/3vbXfmfYut3tUpKKjFagX8sUjhrGKNVpYJCESmxArl4OJLQxKH85K1+ozvcG7z3zluvXJxtbvHny4cNK2ZMGdClTYsa+aQjgEkANe1XjzRSS6UGVShNMSLl2WymSdYTRW88FrtCFDnnojP3zDn9V7B7xR6A5vNXlgYw0wDkuYJ66VBOepqUI3tRMWJOQArazaL22xrowfz0jxAp6vM3rj3RJJNNARojXMd13TbeV9jnsEOOOOao40467ZQzzjrvnAsuuuyqK6654bpb/nJb2RKZKUWqzNGZ76DpslfPXFnbSaFdG2PWJv2ddPM24LBD63acHIur44RSKyTL2+jCnXCQXEvGYKqV1tie6XjGGWO8CcYax81ddC+9SSpkyfZlPzaBBaNKM5nV1ltlA1Nrh7+xrWN687a0dPxE3+0LNI7GjOJGXTwLS1zCYgGytBkAzHMAVl0GWPka4Jr/AXDnFwDAHdmAvXzGIQoM3p4aehxgYNjRQijBQkxQu3CUwnIFVMqMgAbrSFBEACTIIuy3DQRHxE0U4BXTGjwM4UzEeFMml7AQE4zfAFl1KRj0tRBBIqRgg2/r40PDBNVLTLaTQCE3gqMYEhGlgm0ZNaxgGIJGqJHjCAuHwD0RJTJvwkugWSBFSVSYhFc5Qh1xSHC6uTYSURzJtdVie5bcCoeyYkJC/Ql++SZ4OSDyJ5idecGJJJ3ICQsEi9ZHFU3q8CLFjI7Yjb4RLM1IiD0oIghO6RmhI1hLPTSyRtQW4YtEI2gyaXcE84oVk4WZSoks2NdCKe7nhw/kWX5gqChMMRcFJOUkqNSKU+1MWeDv6QkHdnxJDIz6tICU6jSxwZXHnvdVeDNd7Z8CRtyDhv41mRYJ3dT16Ug2R/XsoecUPsnG0YMKhEFdi/fijdvQFZrU8FzdqlfPr4a6mar+xM+nYrztegW+L6ox3W/KPGNJMcDVcXQ6NFnRGJgVWW12ZBkyUXQXgMFDdp/3W6ZenNQU7O6gLIZ7TvpYJJoCBg820XcNYSNRljf3QCn86UoFYHBCVbar6Re2XhoTAdyjKrHFPaynG0cAg/MUqg5vIvtU1UrFq6pMoCBkqu31PNHJMJySrvsUUy6OnO6K6cbwSoHqIup1YHVO85OHAqiB+pSAPhGHh/vxhh0Pw8Bfo4ozBEhfbYiAlzH0zQSao/w+u6sxudJKihXKK18Oz3DDACqoIllEox7fs6VAmdoAMiic+RO96BO/bk3lVSaU0opwwzK2x3ZuMEzNcd9MN6K5tr5FhqkDVw7uSuuJqnKjVzk3Xib6wkbXEKiJ0Ce8IGhIjWnKqqb1JIVPeIJqtldQ6sAFOgXzdpsLzwh4h1jCNcrAPE+ae0J0MkeliocooYn47Z0P1fjuh9OLOkWqNLkmrpdw0dfZbeZo/eAvbl71WbXWbZ4f94/Rg5hwKxU/Ni32Qt9M+yf01dMeLuFqpFSKy5REf9k8e/2oWmyNrruuLmWbZ/fqS5YoiLK30/5dh2aR0t7G9W3ObEGT6sHamEEpG4NBLNwvlkIjpKj+O9P+UqhIJAU57LpBpVZZxXP2lMoCcL3mW/tY3krOMS5LL72EkPOytEtdUUstkKl0Lcv0hc1L43JtcCoUvYNrzHFmbj0XVBSi2hFnMAFi4gjHfBwFfcvGjSOsYEU1ZrjlvRhX06qhEiPkqEcvuUY+13n+fmsN0s+bHCL/BE2ClFSivOtBwdoAEtCrCvrBQcV+gA5yn6LYLgOKKva5b/ex4POkbfPad5snibDQzcbzuTEYyTWkgwRynud5WmYhpviVP7Gc7SNfL9ezGJA0jXRPGXKqJU6b6xVbL+MD3P2ZewiYTXC3Vd03NGgDKFEnHZaET24OiExuJWBtMnppWm0wIFA5vCS9I2EtGFzyc9DgoTooq0/cRJrZ+6H147qWlYzfyHP5X0kXu9hh1Xwaowz3gUG0fU9Rz3u+j/JjeQqiYmPPx4G5snWKXba370V8C/j4xFmCaEjKw0/LQEo/f4pgK/ER17YqHEHG3b58Hq19PiuWv8n9DXK7fl/cpbtnc3V/gNwl6y7RilLwPyT958aPUkEOkNuH1M/cC3rovmDbbYQFAwlSyyMvzyIBInCNvnMEED6NL1AucyNSQ5oVjxd4W5DBleJWF6EO1C+WrgtvrXjMT3rUcSjKR+ibGFJLEjSpzbze0jZD3RiNpeysM03SeocQi6JMqFsrxw+g9p2ydm7VTPm+HNRMT62qLahMt5qqQafI/x8sAdY3Lx0HuFLM9zykuKVcoR0idzduCeJaW9PjUjGOSPvX7nN1DKTs7gJfjEf4uA/a/a+4v0ocuyBOcABzro90Yak8yETV7yH1FfaA4XQe7QRVTTF0Qcyv4VSNy1yP4yGBitAEkUdAaGCQA8prebI5IVfSTTDgEZ36odmxBv/mQL+21xN1c+EI5RqYt8lXm4mP3pRw378GzcsaY0hdA93L+Pbnr8fw90aNkkLV894OsajUc0QvD51OvblJUlC0ioMkZGHINsu1fr7z17HQLuhY0Vgb0jFh7V57ZVM5SKbzA/www3/ThkhgeVwpUlPTkTXPEM+6shavDRcp6Rg3PO4Ht3PxtQYNQbn8GWUI/ru3Rgx+PeM7s+BOmg5YupcE8KDslhRS67MaoLc6EbxYqCIvJE0taM0kA1nEb0dpUD8HQJhPenMxggBzTTCRfaQb2mvGR4xPYu9SDE9ZizoEM6KRnzWbA4fVlAnGsTbTJIsyfDjsYc5qqT7YAzBuDK8v1BRm00B2kR/mBJyAx80kfI4ftcXfaZT/v7OE8OVMjYD880u2pufwInSb2FW6kRqWW+4580mXbNcvk95Z6CVMBPJhQNwhkskVoV+teoSOcrod6VsZgbXLb960BNkZLBUH0sMa6RllX9A8SMCwgSZkBxnIx0ARPkHLpJ+Qf0Lh6rUcX2J+A2RJQy6MtlHCFssGNfl6pdVMT8bjybpofXegPaU5B7Ad6j8f9bBftl1u44Hzx6CSQ6z8GsyVtx2q+girG92R+/RveY7IGpcI78LH9bZnFF/uo5cm6AHSSCfkcWh+MZRSMcCxpep9AuZyHKdn4xsP1iWwB/UBAtrCUFX7LXeyRj90IXUXdYLXAktaTPR/Wst0sE4pFukNK/g7hNMOlwHNXzhDlccsaz0lnNbdblbcUY5e3wwP3kzYHSv6eie3JLGlGYWrRkrbbnz1c4D+yinbAZla71KpfGfF5GW9fSII92kJHg+2zWgzH21Spd4T+29RDFBGX2BAxqnKmhIy/xOTr5WGD5hfzR278T0TAgNtQhMCwej4a6Bp0YNmcDXpKqhhCVSIpG4gVZJALqpCmnD+OlKpH2l7CEZ642vY6MSc0wfGljxsQZp4CWavHlwddhVUcNAqLWXGRvoazT2YLEtKIKeO+RyErvVN31jZH+2hOJ3eNbupjUDoyb0KGZ60SpcWBhkM9DxMlt26O8zMt4Ka2RgN5W1JLx/avn6wakfa8MHyFfO2K4k24PQPi36UjZz6BEMIdMHZCGukwfSfnY3Fhm2LL1Bt7aqCyj4/vOX0Av3+Y1e+JJRHK740ohHp1nKra0YdqFkmO39oKYgxN0ebiK/ZsMgHrOQs6rSZWJxvsOOz08bcOFJWOzR1obCO0Nexa/Sx70+z+rlddfWb0RLWUUlh2AUZM6oa2fT5VspZieqaOo1yJZzpBEstVTpTOk26F1a86xvpJ1EH1ILX90SBH/Zhc1W1SJWSwL04qc9dOev3U3NURb2U8w8HRRgE5an1+ILy5wu+NKSkKu+s4O40XCw1CswLW87Zl/Lm1Fhiie7MjdhR0Qan0Rbdk2oMhhcaEc5J5avgZRTEjwTkdD4foaCiSmg7SnZGe4C32lBOiCaRcFLjt4KYWxOrxRvZn25dWV5t1M3YWC+b9NXe0X/rwu79HWQQflC/ayRc3DelknDWxD542fTikuKTLiTB4u+7UCY9kF77VelOnk99HT5OULfqHwF1TQdwEwyLCr4hmmBIBpJZnBE1ZCpCEiIGPzI4cY+8ClWQ+yo0RX7gmth6PEnMvRMiULERIo1Of7mOgJdq6/xdbINgGxLRRi/WyOpGI3BNupeAU92K9UC76dCVaY0JmAk4k0sscaxZyUkawHy1O/g/RnZz88MvqU/uMS7IfsERDwxceRT6rKzYUJWNFqc8bAqyhJ6GALCiFsJgfIaqcL3ZrsrtL/tkPFddCZT29MAkv6S/mlniIqion/yid9KM46pF8QRgvpcvY6DA2XtzejtmnJ6vQoA6fdtrxGtj9LyBnzLHYdahXteI1BAQlg+stvo27oUsY1HiNmcc3whWxDyQWkGoyoXoB56+Qxj6F33nbdCvAn369Zu8zqSRGJUoA/kF8g0Vk2fSCPI7kHk2y3wfMTOmf/gmc61BXm+o2oN283UiWeBO4zTIqFbFlFKrsc6HWvXGhi0jBJFG2t1tFC3RB+y1DrQ7B2pUHa5Ka+IxjhAlHCXDgFVHQUTqiolM2eRNrlkRZvsZVIW8IfOnmZcCPu/tnTDHP6wmGKYJMMJ8f+04HjNEm4tiPwkvFjRchiJw4Q8E59+o9y29WQ5KmKfCfXIqDM3YAW6Knk2Ac7qYTHCaDTur2YSTiE3zNZrknboDqCmSh2kSYGfVJRZ2Wj8Nf1iSLGKYiFAbWD5iwXz0m4xbDMNca+Be3agYk8lly8BuylVKJMTG3ACdfxTQsgcVS5/AyeP4wbUde1icOrtE6S0pFSixkTfwI/SyYdGLSpqV8gezs2YkFSZtg7rKrA07YjfFDnkuHjOyD597Flx7njJhEZHlCKolI3ScpCVrAKYFqVk0gMJLHTqg+0R+616D3MEkqIaC1GTplClzXurs/XmTi4tpVjJpggFH3DHZVdwwoCK9GYCX7SizpAyW+Z9LgFHXHwKnKLFKsIucKKRJ4JnqQhgmPZIs2e7I5DG5BEdauozLE7L6L8ge6X40GiLMfTkpmBpK+snRZAngcxACAwUqnTUFAsJCo3+TORvpSBUzwaycAFn9E66XubgOlJGrPjacFppMR5A2OeExBgFNHpMg6WZlRE3U4RI9roulUCwlDbXxa6ewsPigGxhGnrNPHAEDmyzlBavQnQY/0qN1PVHApvuu6tJpRsy9hquZziWd4jxE87JFVhCvDuzKn3K9tiNcM9HKPrITdlYGQOrNC78AZYcm00DzhsOZN6qsy5SBCsPS9NDpNL9jcGy7RdGhRvk8MwDCcOukNDBGDvKmLiIgLYEKLYfk0KrShZkvUSYZJum9qguYa5RkwGWoYBXWQp3tqFo1HXXJUE1NuXyg/Ci6HU5CcUGJl90O7yDGmOjZeXMbVHjLHehKL1/zlKy4RhdYBsO2V8RDvuzEdmW5nAqoyNsFrMSaH+h+coOG/Ju4UJ/XEx8TIVYSnylyoqF7+HubTYOqHWPNla0+z4w9ZVw7vw4noZTQNOqtDARkwRRrcVFs7KvbqlefGBPVojBY5M4tB0G/7ZQeYcoslAYWzetcITA1bgGIuRIIaDRaR0hiqPSQQLaONC+ThHnPWLrUy6Etm2JFhBi93Pr8H7RJHhz2kLQnUcSUYAUCdCs4yL6Hg1hP/qgJxu94O+mQ97tljdwDvwl9Dk4OmMSQmZlOO/vHQcF1w7d03KgKPK5vHJXDIpQUkj5pdkF30fdTNz7yEjFu4l6CF/9dwGal8FYNT+4avA3YhDOrEAUIatxScXBu7c0cZCjocxm14uWBQGqfsBFCD1W9YklamJGzJGP8STMjwIWObxY4YzaYCAnygidu2kaLmUQf+Q2rBmz4eXTLybjUkCB6FK/Z1v8FToXxQQg24hnXdeEXC/THjgNfFcs2a9iKMNQqF7qbdNaeeb9IfsP7o207MqTppEG7LcXLQbNvjGQHBM+x4KHsTKnjxR0rGtr7xNwq0U5INiqBHT4EPnBwQjNTQLfHj6aRF8PnNcruxNk2j7NPtjPrl8xa4RNhN5AfyoVL0Q8MHcBgFwd1sh8Ia4pnYE23wEITSL4QCb/3TSTww8002blp06nG59E9ilvSNpdVVYo0iQO2afyS5exqOcIsH/qWfMMgLtQXmcBu0RnefB7cJPQtsAJkL7jcQlhUylPvyvRLbMZmqIyD3rnReVR7YeW04R0Na/PezPOjMIQRCWCyNcnJSnVo+W7dJE2RHMHK0wtpBH/hofLrdypYp2Mkhba2vSDPo6nNpwpAwJjx1xkxzJeiLdxqFRNaS/TnHpeISVyjGtVo0tJ+SaRSV0n0W+cr+5OwrNk5v++Ny3MVzwsOFQ6/K/A5+4q6V8MOyTrP5hqflpJXzngINoMBl1vq/mgZUhQXrVLV681hNXuKnQuE/qcwdJsasVvBZ6x7AZxJGvnv+RiUwSMpPacACpRNKOqbiZmEbOzINISq6VI2mcYo/HuOaeEnRy5sYjFu7gpKmcADFJuMqsg4h6uxfUOLbeSxc5K9VWwj2nprS1+xSAESkxc/+1MznFVnlx4L3Ha0J/6a/iQfX6AZafEkfvaZfsAjqSs4D4jjUFG3ULQiNKmO8Guvc8zDY9P33pln6s3nf8gcLh+gcAan62eeRK/SuNFF/RpdIE8Sp6bdWmKb+fZ2kgRxC6T1LXJdhQC3zGt1bShU7CqaQBS/LEaHCuBbiiAI3pFE487EPtYwhficxiAPm4kVejAU+L+0P7B+sIXI16peZoJZBPsvtZav2oG5rVm1k055+F05Qhk472l8769Jn+oyBvZmQ5GnpSJnS2Ddwct+FKos2wbskjNb4HP7P/NS4b5wZhQAwrpOa3TZ1legfexYaTlA300NNBY0tMeSfTJpZZhErhpw45rB/dqHtSwTgbl77rYtlsjJSCWgYQ96UegU4Ufm6DvXWrHWObkzX4sdPbGVD7ckd/TCuIRGtU6ng8yPfVbH7iILSEwC47u1EdiVQ5O76aMsNQ1o6OSmeZoBttifx4n1eJmloSUPMg2dNf7iw9guQGGIrDloob0bvrQTEhO2EPlQPXS7JngkNVtqWQL255kwa5QVorEqGdw2NMwBNZ3M3lhVnwdG7y30QycQkE5qhcdLolr7hNivE0Q9SpCEXXiDTJmdf2w6oa0V+BTAOZPr8roPHsVAl4xn1ALolxgtSi30PKKirU87tRDB+PcCFJ1ztwnsxoge8vEA6xVuIXAHxpqBLUTJHgBCiw8ViBQtUbEuG2kLSiIs6WyYiytxL+8wcGmUrlHSvlLXEa+YHyx+wbxj92ao76nnhIdpLwlbXQCzkGq/UWVFi4sf0KlTL5889v6OtId08qJLflUBNFI3TPV1zXsecz5MKSzfljL61b3+1xQ0kTXDRzajLS0VRNE+km6C/a6EfqRVSoVkU0aOSdnSokjRmXlEC2BM0TKzMxDuDpNVej4n5tHL8BP3ThKaT3iYhroeNDImilj0i1vCnVJmmwEaYAsLaQvuxCeZfP4UhUkMbwcx4cY492XrJIODYzIeXCNIcQHW7XHpMmRtaMTmLH2IDK/Q+USGVEhDWf9q6ypulPs7i6cmasVGLI1VqsnOaSV1gQ8msTw2Ucfq6wWTUnLbBIPxsHe2IZ+28FkymhOYtCbHoDGByVqObVxyR49wuVL6CHvkySJLG6hGWLH9osbe/5z5ii+Y80k4jlk5hCg7owwdrY6YRY3Y4gqO1mqlEmC+bLt85E/UfCiruQS7TN8GDUx+CB98Ia56JArVj0rYsStKgOjn2DapMfImgnBeqUHNZ+rL1wFfGTgibvfaNdtES6/EaLZNey+ZeSowNL6fW2bSZjSuF9xVeJsdZYQh9Ef+4LYB7kNe/WzGnCCHwtQZHSLn781VLJzYRVabUC+pcJspdPnjru5ONy5jZMqUzqWBKluZclPznPmvmZO3ZwlSD7vMB8W2E4QMqmDki4LopVfUur7S2bXW7mk/sHuD6/7KEe5VFZc5GTz6kIPB8t7dc6hWlustt6ujq3BouUOplGJlc6W0jh15tFvC/YHOzyHky//IcErOfT14Np8mqqoXHyb7nAVSsbQvjgK/8+bKVokhjLVPt5JKLe0XxfNZLOjU2wpdUmPdyhSILwwV4QiT25F8SEDzTMs+4UyzYg6C90nKTATjlE4nXVEBymbVdqSQe2W5FaMZ6KojJFnIRd0jCfku2TUkTbbK7/ApQYdPjuBzamia2R5fnRmyrIgYEfBnZytIFT6SP4EvST3pZdqgV2INitI3Tz32mr2uAgIc3mmpzrZGwDfVkLftIUqyZn7jYI8+1mmKNp/MBgzDeeOwW+WgFDikUdKwRKqCifaYVLO7MGfqZahJn1zQNrKb2DC952MVWNHVhr131oKJLVckHjhBfvuU7Cj6904oSRWF3hUY7IeSpMX+PNj0/Z2Kh7PJLlt3mBpVoJ9R3x1J/28ZizWqRHYrmqxFn1n3EMwndcQyp0/at2+nAP0LtrUJkp12kczUX/VRS4ocDEuhTMizxmukT1SsMB/Oh2xLCQNNaan8bMpRcoLO2jg9so/ngGOhXNFstWXXeG1cVv7guhpIn2kEWlXUCFcqllpDaB7TphmQV2tKrsIQgzHjlGGNksJzsMnycfr1LKtjVFp3f09YFluJP1ErCgY7PyC5JI2rI8eOz5+iXGXbsvWtOoE33+HxqntNSxfhdbSTH7sLtjtWNsspFTcVaWjC88qBXYthc6EK5OO6EHYu7UkcJIEbQiNowxZCMwSf/VS2v36gUcdEXCIS0ajhLSMQO1aB4KplyBJyK8sQJ/s7itpq7VQw0Zfw5VOFdEOzTc14ZSEkULn8WVJCHh2UkmQRMPVo40lGCL5cUpwsBEt/ah6+yIcvUvypqqaUnuqHzDBkpuipKqjEx6nD8Qgcv1boWPIROpp6bPPKEjPTbTvVTLZRGL+8MlLNTKlszE/2JVV9SQXMz5a6wlCylhTVkgIYEkLaGMFS86AGRr44pNuyrmhzQFniq5tSTSvE3TMRIZdaDrA1B6Q2IM182DUsFU/rSv99+GorfpCslgn5+ZNNu08TBjyF8beEm6BksnQlWIWnosUsgR6G75OeAxyUzjEj4v/BGa5RDBZVgKXCf80BZ8RyZSF/AVfIM49SVdkj5t7RHvuebTlPSBosKygl/ChgTg4+r+OFaQj+mS17XKigp9QvLPmUhl/YJ7Ipp8+KMnRvHenfkxN2CoqbVJ70ziqp7MMNzpU5NJA4AHp49A2f9zSq8nDl0jFXU/bwn/PQPRXcw/MhSff9OtaRdALWCPZdcCA2UiBS1tfdeaRa5gpQPUvAEIDVtdIUGsACnMSH6uDJN8wQd9yKCO2HScyxA8Al0Kq8SRmFjQf2cK3SSYpE9W0YpAmNoSRZU7OLyQn02Qvbl3drn/1dvXf+m0qkqmvbVT7JaXg+W1NL6qN1dOFHqNp76ImrLC6ZKryWGaQmDWlbrPM73eOxqq0F1XVVjw4cdx17mT7hAk4miMPgwZ3XzIBqRMBH9eYlcz5Jk2hn4Dx/pGzyeaTivF8zC0Wz6ZfJ+Czyyq8X5KmvkYhzk93GggZuu9Z6vun2zSkPR6xsnAnO5D6tkiJ65EMQv99NHMcPVUsFOV2ystlHOglBlkUajTJDwmIY3SoGX+P4ETr7IPPdnxpjTXyfqBlVhMGbgbvtmI0hpQSuKDodTIZp1hIlTw1Zgj1jT4nZFQ1aoqkTLdoA8+tb882tDDkN1KXM1YKMnPKrl/lwiTqvtOKrV6V+rwcSEAL9bFCN5lE1Ul8/KXMe0j6u1ulpJwanUZOjD7UJRqzy/dNPqnYx1vzH0AXV4P5AGzI4zLC8Bhul0cwgNej6/NyrcgnOurkK50E05kCEKwT5U8PMQN5ZAMClhmSD6JTNzS6N90AfA2FmwVgtSUbzVFHj75iRXEzYabHOpth6p/x6mrJITb5lSS3/Fp21zHe6UKcPcBdgo+GwMcxX7Ys1o/qo7gv0uEhQwRXJ/ZYRhqRiHWZhgsAqIi37QtYiFY7Nqd5dbmM/wMplcBi5eVg8zcADCh3G/5bisUUZhA/slhmDq37WBDN5eigAGrMIzxvBKCyn4AK70h5GHGwwbnN63YPVeRVH9Jsq/W/kX4blfq3EP3rgKv34y2RYAuPR/jthJwhzVeKXJiCjV4cSp8ct1u6QASv1eBTO0ddluD6TzIanVCx2b8G7UusgowedlIxPSBxgb8YYBil9SNipyF5szTBGVAP8/tI5ot4tGXgvaT/k2v8uZV1YIfYF/lsEXJ1wTBgUuCOGuigYj5e2roxI8D+C/QEEaV/ht9Z1QLK6S2pBirjDLIEwEsi6Anp2bRLdtodvfAIc+3br2hYBG8HSBx4WlcojK/ilAi8Q3NlOWK3lDptETlK3hdAgoVv1m1tzeFsO9eQpnA9BeIGpjWAVu80lb9UpX/SSBXET3oe9Ja/mqpBO49P5TSvrytksJakglFknn71cPk5BPhGidPvpVgPYWQ1eVw/AGC4Jvli1GbrBMNttB2CTLTYm7ohcWXDfnRT0zTvHaW7uaeDKZJm8XVJYdc/dy4Wl7i6BV2p0lk3VRN82FwHNb2tR2rxtXjtCipePJyQ/Eu/4/WvnsfPSrPtXYThV21ozsi1JX2UedDy20w6cXUdPoaFNYT3Ee4Ex8E4kmOFu2V1u3xuQ2tJeXmkGIzxp1tsUHwGMWb2G6XEtq0Aowg6GICzyGrUQvp6gRwrfLjrpTYbks7zY51xlf/VpoQVef3Kn2ZeeI5+QChqEGg3YlvxEs17++nIKYa4c5ed1kk+/ktZY8aDuKWwuuKbK1BpfzZ3EzTM/AbZ6AD5QsPoH3q0TZ3finV1YJ0hWazdYpH+0OKeBbw0m1RxJZsOJfJa2k1kSJPGKrdyHoABofAV3v7PQGpXGVAXeVrM4ptWKkrklFv42Fk4VjHT+aw+3bEZr8Tqbb8bq+6+0ZKKnShwJoCOFtqadNpar7KPrzPVmnw7sY8Ry+OYw32TlCAVPYALmN1Hg0mZnj4jwt0Yhm0hmI9nUDDWlH2DqDttm90chM0LqSWaTAlY0gexfoSkXFih7xVRtL5zgK9wKudpHq163xbPIiM9KhxywUOLYLyj6eruVTZqeKOuwWANYJmekbhPSJcnW6gNwJ0aXyA+Z4HiK/M3dU5bC95A5ML77iiZVBW/wFQdtOui5QtVEIWDljihn+s2p3QIKKoh3CqIdSJq3pjCWYQuf0B8ZRJbXBHhgMCmbnKqempBN7KkGBMXptZghgCn9R/IdZBgluXV6u0Lx8CoDyDlYM3JffTOYNypmq5bSOuoPg7rDHWmBS0XstsCAesgAq4cG3tusAOvUGuhDmWvTxG/xwEw6+hmQvfkVxLRzqz2d/Errzlx7pbJ3QEcY+xXqmBYlR3DaEwDdzewcG4Kkh1WYa9bZgkaM70ZgBRJYIRRgIsTdtuvkH4pxdOs14J/nyRRFJNYzutt2Tfcfhg4nAcF4prchiqBIelRFeOYFH3meJWBFUkQRxYTIaZ5SoVea3A6yT2QE6PpgFBnKa7cUhhiHsM5qY+fa4bm+jtt6FtTvBQucRV4YDD6q0dj8ESNr2xlgtzswzJPnHxRj9R7VyFb/dFXCNRN+QMFx9fQoN8saK+StjU88f37BwVG+bnavs8um8+rKo88HzL6CEGQIgzheofHSuf7O2/ob1DLGFMwPqngzBPz/dd7/e4OMUB877PStvhTlHgmK9mHic47RSl646iz7g+BnZ6RnMmUS0GhbsaT8GiwGKke75Ob6LVa24noF05wVVpnSFgoKcKU2GafDeHvtDfMVttIrHSxgRUcv+yMepHadEubfmFO+WFHj62fBmjjqICTtnZP2BCE1G2GahMOKseXbaJT5fVG85PnxyYf5PM+hjniBFF1vzkVrfeOPiqQPlSqmHr2eX1ZVc2yt/4Kbx9WCLg8wSzdG0w+59GGdL2zdOZT81xSAxYe6tEqFv0dk6Dj6OoQvkLkU1DrDIx1c9yeJF9yzr7V17WDyTu/QAiejfiZnaYbb089MjZ5keFpSJJ6b1MUhRc+8IhFX6CbxXIrkWE4x+CBG/SBnKIF1JE0QPD6UlPPmPXlkUqqIGuJT2ZTjIhCjPqZYtzAnmxuNUDwJ4tV7FZ6Xf1R8/AYBtFE/k7vEF4QXB5hp3fujvdGYDY+PGGKQLGGAFb29SqPKz719/YHi0Ecx1CvSskCMGvqB/gFpIHt0Q/EefNQH1sjca3xve96DnvGyIgkhWLBJ9ody/L75Dnxfbx9moNs4zlwFbvb1Q4KRGxjOEED9GMskDQDl6n5s+YlGP7fiWANwMupjct2FLnpyivIekKHIQs3FFYoeg97OEoe0upjC9WV6YhQQo/5CyJNp4/Pis2VIjg9/CX3meWNcjlsw/ACINOkb1CILTyVxeYcqDrgQfgK2ayaScTWtuEqytRhmUK38U4AnEy/TX0GaWRldIniPzghfIkQXD2Vw0aguzhkJ43/H+Ct4Na0Ntk+JDuYWdwBRKj29fL0lh37BJkrM5rYPHGwEh6ORLpbdj2o1gX4hAv6xvq3wmnnVBgIwowo8uSW5FlKR4q2w0W6l9kG1yaQtFXgHUKqd+7AuF3YNNw81g42oo4Z9mIO/HfoNc6vQ3lY/2YqdbG6rBSe2PTJXm/YR9RpOW3Gj/EbXZdwDKtisqwfpzhW3t+q36G8H3vIZJsv0K1LxQ3/BgPnweb50mzT/UwC6hzIx6f7fR59xXoAUM/+dzIPVZ7dizmwFqPCbcqfA9Hv4IGk2DRQsSUXpjjnRtRQHoT3kMqJJi2+uhv0t1uUmHQLNm9pmMnjA0yDXUSnJNIPBJVGkbvxoaHEGwaXO9sOhZd9B3qxow25StF5HmxQyikBQGpOCF0aleGLiILF4Cj2cH/4Hl5TY4RpIWdQayqLq2C7hkn8URFDA99+FstBtNGcpLvP/C9GgkJynMRShCamCNun0lAkCKy6NnyH5KWhYDIW66Zx1FsUnDuJKJlAKG9Cq+2FW7dLH35+suusFYFV7PQjZkeymYjlxhHBGUuFAJ2fYVQn8Fw7Jt5UX7RWyicj+aCRfS6rV9ddR7IXYkE6bp2hdbkiLyl3th8NoWRrfQtoogyhsiqYUYGQpXRSULiA9WS6M21xcgNy3EGzZIHIBWoQQ1KY2VhMlZLUJQdh+ibSCf6v7K+gjNzPs71o+x94wo/X8GtNrY93ac6v/8KOLZiDy3w0CD+XmFJGYn+Od2G2XaTf3Dbzm/sLLMLui7Lg9IuKhJGepdr+j0JK4LrGnou154PnKUjw+sZ9QMo0eluOJ8f3EkhmsfJYyj1FWSElaNGrSrIyXb2w8FOebG697Bg2VhXm8i7nbt6LU1xSKkAHfhSHo2WS6l49n0FgwRVFp0XHbwmib6aDGoCA/xIF0YRNaR8Lw79BiWfB+giO7DgwY5fgxUSeMmOplVeXxewm4egSFiKTVmUdo1NWoq7t5jXHqlfdRdggCmTJuD6gSS/7G8tLhyAtxUtumYnmjtPGMx14fGHhrlB2gTuPVRaQnyu5Euc1FC4I6nVbCALXw4SuWlaYyK6KCtTcXn3/FqByaHDC3P3qaiqwX0NidCOkGUJRzfu5vHft/ji128Jq4TR3jC9O/QOvCW2tHS4TEOc9IbsPQtmVPbs82l+K34MEZifRW9NuUe1It+nUK+OlptnjCFs1WUrWsmiX9MTjyB0RQxnm6EQmLqba0vcoubFTPvMrW4rxoec0+bUK+Wg8M5ujiejEoyBjVMa+ytdwKi0Hu1SaIVI0ACb9Kv8cSXatU1rHqH+w2izCoss7TKku56TwL26vsQOir5LX1p41M9EzN0nWrw/AO6Yb3gpPl5oHVJhblVX2tlQbcLuWC+nC8wwsPww6sE8JytTcOANpMnYRDXsQMOzFasptmlS5OZUE0qxtLRjuYYTdxo4a3uwaSljHSogJmkj+lc/YRQqNPvkohtZPhdrXS1yPUe6ZCG/2Frsa4hfOjm509fbFUsSIUmF3Oy7fb88PzKJIdKDjsfZk0RaT7+h2OgUwURW4U5Tscg/1+nHzc5bjgmpfP9YLffYCqpD1/f9j+/P18iD+dPx02nd9+1q695XbL7e24JDEFvv30gZCmMLK9aSUp0+819kEvJ+G/i7T/3OfXGVYIwTPaZPItvlQyF2PJST+PMy8eYr24wKm16udrqeFjp01RVT/9xQy5HajpP8J/oJBLD/LqNQ04G/UzeYt8QWxJRY9xgL808+t5gAm3TxnoiSXSpmkYJyZhcnIpqmTSQPAsXqHY0y/2eEVygYV9GyHk1yzrjp/dXH92sfH9Sgi5LdZNAN6vjcHRu/jwJqW06IGBhSp0tYdfdazARo5QV/w8bLnCd00TQ1AO7H6gT9+kRy90KDvp0boX75wCZBoEy+42q3jJMyt9XxEeHccJ2zyGYXhgnMDhjYJLHqb7if0ZcTclpLIJdAN/jbJtuFiVqd5M/J2NOeDmNRDjtq79CeOKq1BAc98rVwC25kWx2YSrghjwEV0BD5uoay2dwWzwqX0NTB+4HzSQP6CsVtLfsarq/ogzojNg7DlWALDQDOxqsIIvYSZt9K3SRZUsFox18mGvRcPlm577H5gIZUYhh2Ok2nlyh8yCibhBGbNOZBHVWUd2sMzq3XNg9XvYIHzLoTRAKyysdI35OKAH5UCyXoOGIHtMJ5sD8RoWcMhwLbj5QLwBTm7fmF6Qk+p7gxz3yhJX+ZzBbIU6+FmRmBBkPK3e0PBr4KFpZivKfo2dzQtR/7ugIRdJdQL3c1lveaxHiYxgK+h8k5mAhuamZkL7bgPEph2d9R306Idvok/NTkT/czjQxNL42LFcmL/5SP7gRj84BL9qsxlPp9cygYiVlQB4HmOOVUgLRUVPMBPPmrfgoEvbC5hYmVMuZhtHRl+x0JVOmjoWev4ZsbJ3M+rHXisIeAuQsecLYjIFHyQdTju6vyIvDsK3DGjLjJlUo/UdOcyUJhdqjXM+O2VifIsJy7JYExJJi9uSLzm6/2J4YFjLrA51EbUhVPxsa4xw/AeJ+sfR4V/UHJB7zWuRjv8WcISjqP6MIsqkJK6A7ARSGUlAFY7JyorJiso0fZFWCfxOKhS96+ifMfRDCepLCmz1jvOyfbY7QqKv84BFzy4L43Kkj5hVHbOSSTM4oRq/b2oNKqf/7fHSnywu8J9B81F0l2E6A34H6ddSbqvyeyiGD4bIoTSiUZ0KvJRlSRJP65vh1vnA83GVSJIpxkfe3rYyxEgwOFdXD+kPhCCGWoKzHzDByuHvmRiCWIvTcnmfi7uo8JYk/Xe3zSqVeuQ7/9cXnwP6zFeihKoYyQkE2aDabHY4aBoJDsfeHzyslw9oLJZKl65PV0IpWH/Qx1un097vAeULWXuJtw/TkEWoq4dqBIB9WS3Baacbu3L4z04uNkxxF73tuz4r6TFbkmw5U5JhxRNbmMvhwJZfkvvoTeDyMOHwI2CpEdPxLz/eIxGWjYxPLMzutAurYTEaW3wvOjpNdfCWNurVr5RUVYhjBT/dscaJ84upCbs/vHa1L6nP601ZSnx+T5qDJLfNaOTg44MfJ6F+setdmGXWzyLV21oy5ff1rKGd05osmxo9TIva22++ZLhyGxQ6lutKJ24n5Tb3X0hEDnu2+mejCHKZXdawQRInwVnfmhOtE6y+SuD/zznmVZK3jP5xA9tL59BBWeNDGX7G7ojbiCftvrly9rcY55eW4Wne1NZCf2pZirMcTdA+SeAyLo0IPvxM56h3iOxxj1W5juq6+khzmlhgnwUnlBCi/ULREwJGdvMtocqRdH1LCMO17aKI+JxyTvp7+KDHbNo/c+vepg/Cc++6d6qD2PAHaTJ9HcLxjWTUvzq5wEz9/cuFSQy+2SfADJmCDqcKWsPAttDMARW8KoRWjPSKTahlZJJG/IsU7+gufFzaMf592kLaX36+76eb3gRRKbWekKK7aoRBABBtPC0IApXT/tTEWIdeDJbPD8f1xDNB0j78/t0R+TfK8W+k432c1/73Zfcv3viOdDxYxhF5CYBJvUe4jSLHpzHaDLf7HA7s/HgSMTGFPlXvc9gdEqsDbrtn5sR1p+AW2x9wcojo5Bjd/WtSMc8uUyLjxxLv1WEjxg8Twu1kal8xE2yUyWRoVogQB4tHJh/wqLhZ9HVqFoU++ToicxGLJ89uSaOMiXySN7SCn2pbn7saFaCH2tbnrPb3tFt5EqofIzUfx3ly7RLmYH0bpIfa6geY1ljc0s0neYy68A1+ErW3pKY05WuMEaarPqZcd3/nGq9BJxYrd5WkBwvWrXJElkhRXyAQalhnoJNHYkxeLdo+MyGWU82Eh+lpDy3WEWOgrjHTDkMU9okAk9zVTvAds0zlbPqrlfL+WUwSq0iTKZe+mETn9/hc42cKX30q3ezsWcOlNBc5OqTT5UhClx/SIyJr8w2NV/OvpihTqEwhDW8h42RympygCEXik9Qd4v6hEfJ6cmt0q0d3VV3XMULk3DHXt3r6XdOPZIEQyR6HR+TBKNcreELLCBGF00eFUS6oq/lhuSLB9d4+I3v0CouUCzD0z2K9r0nohMg6DlaoFeE1IJ1h2lQwd/juNlbC7F3Nb0uCTZy4cu6WDMI8RVyJTdfR0/C8NBFm/Rx6uNz6eiHb56Nud5re7LItvnxJ2QFnncMpkJ4fmLSPK4nki4Voe01yhsO3QffQ96AJci5rEEz+kSEK1hR1Pc3ZHIxbqnSl5u3+hZQThSeqtm6W8EUNjzGv83E+or0+SiK/sfMqfjFcdZoNy/Kq1OlN4ha28PhLQ2unNVlm60JDaHEZBTXetjyAsDv4AcgGx/KXWxMKsvqaIFUAnFwDrVas9Tzksjk2DOBHCCsDKPRIxtw6qpzaQ7kMp796JF2FTf9toPJNpyU/fdU86WZtaz9WfWRbUUg5Ud/IHdWXFaZggyrWr325U7+ALXD0QxcXpYW8Md/Ah9bcv3/Zh6XOdmVduNT1otC747182nUtCjnHH81ctDjPLH+lW8A6up0lLv6IQW2qxseK4Z6kmBWWLy9o5CitxoqARAKONwxH56WV7DwjvizBLjleHZQlsxV21r0YarcaQRBTJm2RMSLhYyZFE1UVSZ6ZradCcIuHDY2lmkkuQYlvpN16RiIfF3pZcpTdLRGtsd6Vq/gprSLIukyZzH4vXH4xe93dPwh0mvCczpx5F9vxxfeVQaTJzMyTBGGODScuZLIXTzKEWdKMWY4Xn1upz2TPRh2Wp65X9OgN9rVLQFNxSN4zL0/EFWDDf5cYMwRfeWHjB4wj6c4KfUrI+IvnrSEnMWL8ILFkEiXVMcFXKwTeaqRfp+43tG88/27vn6vOe61joha1BrUoINIyQZqhtxgguqC6ZluoaKel2lpARXKTrJq8oJrWo/gvjl/EKm2G7qioUWfb/hOis0Q3iSC8KtxZcjuhsI1xvsc6Emae70k2bOOgwN6SFeErKbCZgG38OFefSVUIczJidW3aEvlvlwKkzTq8rX2X9yi4CBGnCS7gxUNHsCrfMts/T6ckU+exhPMPbQ4CW7OXe8erb6M9Y3fZKTctlKtEKppohIRd2va2/FNcgrkY4qkso4SE3W1ylVnOv3NMyvKJOReOi1zYEi5jEnOVEE4am3rRihu26jCZFAcJF5KxuzpbmUw7B2DSPtu56XC3j03PvfbWhOvTpL/g6F9H1BrWfTY28a1c9ZHxy33DWazv8dP8IHkSYYbl5QC1HN83shksQIrzkRhmoreU5F/PianyGhp2U9xFikVGjw5T9c/w1wZYF+R1is4aJOt2FMiu+rVj1Z+yqD7tCBOZekKf3nmpi1H8PPNMXxczeXGG1dPN4vkPUGi7kjG7v8Jic8K2MVMqaBOiB+JYlCDtLsc3gbUET6sInNOI/zf22BdgiGOPDjK/W8lJD3k5b4Hppzz3bbD9KFmWWkldyU6PeLu6hl7Pgm9SRiFHibNImTfQa/vIa6sVUC3BOZ2bHfpiyofX+nJxii/JFZZ5OWTh1B3mC3pUvTWsPSSdzvyAArQlBQ4bP4grGcMofFCrHoC5+9kzRF+FBRZBIR81ojnxbNec/V0vsNk4cqTsPazhCyzN+dIGCL41fnBiVAX0poXr809h+kevmKOzp7AQeTlqKgPOdI2fcY+dhWEL5qeA560MROS34qOK+tzgCvDay1ymJyNfsH7mlyfi9QWQpHlnjc7Q++GCu9IBTA3TwjPu4tbaGCMc13L/t44OPp9V+Q6/lBr81vB1Hi/igkT1WOue+qCozkh8DjW/LE4+Wl+i0osUFn99pFtjLy0DszfkKZgz5jZbjtQqInGZTh+TysJaypaX7OnrkMoFiizO0X76yQEG9yjTP6HK9IEfPkJWrnP/GGWUKAnxrtAxgxOBPLKcnT4axhSOjCIocWIFWTWz/Op1myy/rzEDxm1Qcxj1dJkcx5JKVR9sVPYlVfO9KiiFGJWpXqW1hpFn1LIxLFz5tLPFhC/fIjR8TDe1s6IdP9al6CI0P8hCxV/4thrIZpUNBBr/MJjIZ75D38TetEd/pFiz97hZ63WKZHCnLybw/e99/DYVjVkaDIUwS1UJ8XtTkh27muJTSkOg4N3nB2r87hSZLzloO6cBlSATdEO7jmfmuiFBt0vWuhu3/cUytaXSoEVdPQ/9TYkOfrgF2vIkhm0+C81Xt6orDVqhbmUNJaS/niFekBBuM2lhYaU7m2HZkegmQ4cQzbiJ1owPoajCzR4v3zC3cjuN3WTd+GcUATGSpFSGm3R63CRrWRrQ1+3f8aTwkWypBe98t0rH0gnLWuP4ILfW7Hg4mSKsfh3BSsY65RsZRS9u1zW5yS/toaWsvNDnyjueaJeH27yAC+XfJF7h7hb89wgVIcAqEhj2l05/+K5PPP8YZQeq+vENRQdPn8/LayqaEVT9/aqyof5kxw3eJYCOKjKLQHVDGS1uf+4edAEX0p9R43BKpOqGRB0myKxA9HLICCu1I+1d/2tcf3DDhiQj8whgL9+pHLv0tamcb3IPgGWd/jlKCufQjZumjOgIZVQO9aHw8rtv0G8V/2v7UtNwSqUmzTncNPYYtkKNfgMBdGt8o9qMjV2NL6wKX2N0aQxv17W4OZOLxvFWjjgmlPSjPZM3PFHsQhO9Aji11Hz+8NGWyzrNl48efmZVh2w29p6bY8StI3vBqsi0smwj6AbT3JUfgID6oo4utAg9OzLXf+LleX0QJB7+0873UEDKn+2spqcfqffTnDcsk6z0IPksDPrqiy+dUKJ6fPcPIZoZG11zz9RWunfU7LRMKA8NWLWKGGO7aySn+e1pimJR8ZtPsgXiT4zOys74YMfgdZ8w8bS4ImJGP4OPLxSP2n9PAg1LxeHGMatJOz6EYHy6YfEpNErdODEKW2W78RSNDjfnEJNeh5oAncUqE00KHIJjfgs8Nmo0U3nDam7UUTV6HUYpofsjzOBHQqka9YN15UBaNLVoR+wksPwkbKInEHScMiGFab0dLp/HzRo1RucwWq3BzcCl6F73IV+Yv+Qdb0EyFnxCozin6OYVwF+TUdLNRseyceVYvO4detTjUZJ52FmqVWoTdAECXbaXFo2XIvGlidGRZ628LXF91we2kcNvuWPubSOqCp5uP8SlXzu8z8r6IskY1nupOljR9+L2PRTBfQcGrGwA2YhaCqPj1t+htxExblXHgovzaygc9xvl59jI8WnYfpUSdP/J2ZJBkQ336I0RiXEz3SIw1rCLW5Jnn12JlrwRH7dfI8TYrXnuvkqVZ2EbW4hp+r1c7kjHKSY6FbeCdeWFz2IOrDe3h6bT9CNWS19suS70hmVeTGSpdaToDXIuE/rq7bHP38m4Vr4csjmlcJl5v3srAeaMHxLqQ3DfttyMVeK921hXSR/72w5dMGGx/hBmyXkqiI2jdevJYr9tUvpv4/P8t6FxL9/YY+wW+DKVv16bMBi1iayc+N9mdNlN3wVmGtVwtyyhuksUqLlr2XYg/32u1Efl4fG94qnHSotX3n56a29gOTEj18X0Bm0sKyOA1ycvqKxE1MPm9Iqm7wH228VB+mHXCaghKpLSwB2ldTXqp41jka7KV8iUVd3XD3XVDGOG47ZX92vuNswlUKj/+ffaWrK1S92pHt1mF7Ly41LHqFArfBakUflcEpmxNuo3sjYMrY/jJyygYFZVo5rVQDbmjKKU9kV1jPqQwnfXtogMEeSfgkJJibFylQzb6Gjkb981hvvoOyQ3hFTdKshw3aDz7OH8KzaxZXZXH+r0nxvP/RTi8zU5pcj8ljJkxP60YeCln3/Rb9534OOGlWzwHu9rlel14YLU4i8mOBER1BBLSVEhmxWSd+etnLdQTqswyWJvBGlBp82u1HhfoKsV/YJMBu9cXL2IYkhuBdDU3stjM6NzS7fATCUb2lQa1I9ByUp/jFsINuScLiPjQryW8f0C8PP5K750fzinNB6K55SqIqnT7rnrGlX6ZIjMKW0Kj5/+7N9U2lEB1bcsJMQVs3lLQ5JKBbSxYSdhqTVdCpuU5dWAqNZA789TynbXV+6DdsSSaCv6s7shDT20+TKbJgrk2B995SMh+cJFDVm3K+w/LiVmFLp+lvvzzSfp7xNNPZaRDUf6oC5CN+2GM+ZBFZzqqzOGs5EgdorhUd5W8K8n68l01hDzHvMTjWs5yeCB2b4eJquwcXZPN5PbfYDCXliRlNRQ1EA/mKspnKldkQkqQQiSJua5VQgaCyukPfPQKcBTHf8i8DGj61Hr2P+vSVmo0dA7ojAnJvokb3Du+QmdFCn+b1Hd8znh2mGCQocnDWbHJGXckRIzIj/WxlWuvh+/emgzL7uSsZzl2+IswV9kekJVkxQ9SFEKOUUNUrQc3P2y1Q3Dxxzt0uWLLZRUE6wY+xrN0wpqX0PwTjjHSszNU5kpQFgQST8rVwK25P9qFU1V/WvdHzby0lxdRWM57n6jJpiu1mnxpyT9R5fpKHWP6XTN6O9/2Tc590w5N/m0d/ezUyvAnoUgJ0va0bsvimO219o798AtVa1wUs044/YCEfUSJb4rzTV0x804vBzQl75CMDMr3t9KY3P4u7f2Rzg/bmVm6jtq9bUd9UNqgp9T0HJG30C5qJw/8qLryJPLMPB9YVFZXq+vU+F4gkTSN/jzw6vt9FfLQCooBoQlzLzOK+T5FVrYpMSW7PhXCQgLyumD08pF5YWDF5QC2C1//jq+CJVPlSvdEm04k750R8o6pQelXeVKT793768xknhe6yjdqdwZr1cRShWsdmr4Q/WD8oMT9sbFsIPCzkEQSqkkNLSLSkbpsTBhJQifwv2fgxaV5RPl9t2l/V8N5hYWoV3NkfyhQt/MgjgnIVhztX7i8r7yaMHiLPgwsPgK0Rcw4f8qUF9WOvJfM4s1GnG6RqPBDx5LULnGhuEW31wuurPfPRoZer6pXbvyColTVBtvPTDMHnmDuxuJhqbDl+Q4O+V/pDqNmXbHKALYtmlXL0x296BgYD7Ch09JyQBmmt4DYpaK8dj4fnzJOEbo++V49LrIC8pF5TTRzLOQy5TsJMaMEVY5hFs0asIsB88WFpWd6+QnOrdNmK23y23ZcDgw7G2O1TMdzV4gthohTXEmEdPUfqngEo8fkBPHrdq9kFyuZn20AVOz/ah1cu7tNUy8eWZXtALDJw4SimdQEz6otQQwMWniG0Vv9AsGDuPWCpxZv2RCqrCNJaSaWG1NffGFRSVwovI6OnmNDTxbvXM7xW3YIwCE6PsKf7338qUhh2ckFjpbXjoQ35WyA0y7b8UO9VuQ9DkvGI+X+e12NvzB34N/d+O9g73AV/qOxHL4MN+OMd8cGA3gcgxZQNdqM0LpmQdK/XnfMHuW2+UY+pLxo1tVreqWD5LyneVKMDTXXtAeB8WdKDiRVJabz9xVmZsv0S3x0ph0gk2XgYq62tzaX9CvodyhKKF3yEuZhrzeb5/mIOsl3ObQIJjrGwdMPzk2aGS1XBJeRyEpGVca9nusVVQSebfFfqeUvT5mw7F1MaDffT1Uiee6QemgmGMGPVyKw2nJtVs7gsue/Tdo0mcn3OafK4S1QlEDpbzB3q5p71Ebu7W/E9eLwWhbUeQ6W7uzD/5z2X8tWkscDlCC9I0AuyA5aVU3MsqfqdZYDrffprzrhwAxamNVteFyGwgQFt48xF/84euVx9a7uiXd36BviRJ31ykFuFImnMvOXaOciM43vSmSgtCTCsNqFXb8VuPkExA4K/1VrXI8vXyFcvkpu85TK/fNDe9K/vhT+dfkn717n4i18p0LykSHS0rUuOgeyPpctHLDahVmHDjrt3VH5kCQ5NyZC+MuKv86+Kf22N+bekBHgqNt5hUF0uKYlpeMYFD5QWnYh4f/aY+5agwSuJKgqJEKObmotwbcpYkZaVHkPCXLKf9X+QHa43tipC28PEywT7nnwv9N5dmz/QdAuWGTpKUD6miRqP7ZdpTK3ZyZpxZI5ZnZxxdyAjmzA6KITINjx4IzG+4Cx7qK5y6Z6u3Tv8YX2nkqvqp9YiFTBXrTD86TDGHN1e88VaqU6U8hvEcLCUbO1OcA7h9MxcuVODi/8LQOdyLh4vX8qB935OL2tg8zeIaEf5ULSpS9SbHkXlxEH1eEb+xbpKx8BtOxQvVkIuZPZHIlhI2npGxm+rmdvPkYFEHP+DuR92Bk9vtK2uZPY84BPm6YT+fclfiSKSHvNtvvlHLXUYZXxUrDTor/8axuBBW/rfMo2lcgaCBkzxhcjfaf4skBT5IBT9zJZl+QBCvjiJ9LAAbMEkbcsnvGAhmg1U9UFVj4AvSMnmjGyilF4CXxIvSX3RorGton4wFWYYWv8dL5KpHcwilwGXXJfrkeSnL7yBih56f4YkKC4K2DD32ygTTr0flnGWvsyS3jkS62fnNBqNKbJFPAt3S7pO7bXFJ1lp6FNsAY7PyK8A4n2mJ3z48WByNvBvz+ulK6+RDUusZ/hjrGStisDh0tyh5pY0UwLo5mc0ke38IeqjebZnNIPo9DmbpAVnCxPPfrtu4gFYhtN1877roI9rx5e3hRerKhkYCJRidYqm2uTLWWYZv+LpfXxwaLVRiES0gBQh2k4GsAqEpnzMSj3gmX2zcei/tm3MhbYd+cUH+HhTbDLSgQ7Qxi8Igxvzm8cZbN5SCmdoHCKQvjovoZRoOmTmzp+QyM6w/OqAAftk7z3bhcnOpwkR0cgtd65T1hYzFn87IrcO0ya/gya5sSODDHrbHdVyfqJgyzgOCPgBR4b0q4kqCbxtVym2bOppFrz4tG3jqwf41JcmlbsUnFbYbG8x4PHr954DaPAMY481IDx15mHcPdXDJNrQzW9bE3vmJqzagQVTDqKsGAcTW7ul5Yv35/rxQCZHZ/oB+4HWWyA1QgHACNlpxLauq5w2Tk/uKYh3LDNyP7wBqvcctDORvn3ReQkJHLVnJHSA6gqrJ+8n4LWeGZaR9AIqSacwOiDSQPsSPUEQfONZ6WBp7nvOPtuvtrl763Q9d2YPpjanXeD9GcvbkWfkzKHuuuDAdFtzoFtaFb7t7DqvlWkBfKHQAS+dCp8OzLyFTdBhXEZW13nxQ2pq/x2PdGUe8+EOkqFv2Lc73zSHwgOCYmdxQiVO084hw6LXNI9MYdqyxNV1AF8cbexeJ85zxSG6EKdIdAZhUNfWPN/2a5GczsoTX/0hyKQAKyrEcv8pawFnaRj7RRICiLYIO8wh5EtT7xoQjMzvCN+JHnm9ofckYhzHujkplp0ZZUL4Ubqoq82GXEYzaUoe54Yv2t6yNSDsrX4f2zg4G1lq5gldpLIXh5/2251/SrmRDI9K89HptqeTApAVm/aB17+VIYy+698XDqwW5qbPKQAPxc2HSoZsfGf5JchlnSP2RfCOWOUSRXxYZCVDr93dIevTyZCNV05ScBV2jL2Ay2EVv5v7ySdECj6I7zdROGf0Tfs6D3ta5for+65l8ArNoIyRdty6zZWJNRg0tEp5PThunUQQ02WtR6SjbkTRJfDJe0pxey0Ofp2B8gHnRt2N4A3nc88obTKyWRFapw2n8Ow1fTnzN/VZAx6Hf4vIFI+qIiJr/p4R/+nRIflxgVgE9qCBTwcuXZWzk8c5jHHPs1fJ0c1q21T/ugF96LBft5VLjRi1eZU7e2h1KRAn/zWqfpDx07aNnu1mEZ3A0udzvPvJ1563RJfFkgZ8Wmn5YEhHZl1mRu5Yjt8l9zjhDPIwsVlO28jWfbjVrx9J4LmMyTXH7k/B4W23WKJNieiIB2+YkV8FUjB4OEfP1iMz3TfX3QeL/HDVf2MZMcPd3MD0U/ZcisTLJ5q/lKjzwyY+laCXYTgpNkotxTwvqBjQixPrX+VXxI7I0u8h+nS1C3VswEA6+WDaO3p3ldqSU52CzJRH0JR8TPEKzjSFyqdRfJk26cut8N/5+ijfob4nV6e+PiaqoZNTU2+1JPpI67FFi97+h0cJ5pb3JXE5VaXc2orgapFEZNtc12QS9ex13KRpb19MRRQVZodQ2jusZuy53kMtNxJAgciK10zjgdNmwnO4IrbgYvVyoqGQxd+ojGAeagIvcbOqxGwBAAv4VG+/pN7nyxdo1GMv8aOP/aVTyfq2GA/s3b1/MSDXAw1JpqpEHohys9N+BxdV6qMV19FwemPhlZt4efZ7mmQZCiTQk0IaNBk8grrAhZtYwWYtd2HjqdFLUxozeVyx2etTRSuUx31N2tlfexaJ81zqsgtZUaAiZAsYC4Kb3JRXykWN36P2L7cuApf0N6/yP+Gn30L9JslCe/TLQmigvBJX3eenFwUByIKPRoUvfpc6ug+vAeBKJBd4sZ0F7NJ8/Sg5Gp6qcMLA6i3VZEG7kfMope7o6+U9/ykhNYViqpCPc0rctbzUZWF1cK7GP98SiP3h8gbLhmTW7lPs/6WY7wwQb21+bzzH6agQYkUk3yMemK4PRJpqEjO0MyHpeuDEqdqDLREfDx6DMaaUUv7EeDfPrM12ZL2CueUhFFfOx+5szMx2Wyx98ydImS8WfwzGvZ+aziQOoonXH8CEKcvn+dDQTc7VnCyPwtGO9Ld29Hq1+vJDsLkSKJDKD6z/AqL3FbJRbhqwgEJTDuiCICJqdjDp+f302FRC0ByNPlZZsmtPXZ40PjwIxot1Ry+kA/OEfUQrNHW/Fgt0kAsCZ/2maK6ear4DsZhWakL9/D6NoFNulov+hSTDEJttHW6JdNHRmXrB82gnzzM18ET00FHwILgOhn6E/u+U0RC9JLZ/i3xpraXhB0M/GSYz/ZcNr0FDjGaVYMKUYxIP5GilAfAqxH9EGMjdTh5MHJ3pOMThAbrvBQkNq+mxXmfavRGvgtQOZHX85/BkOPloTgiXdKco8ibsYKzMLVHQ3W3eqoB83Ge/tUGthAfpWOZVbXWvln2lDGYOYgsOxgsk5MMTs6Upj+4ynweWEqpbOdaV+Iq5S9Wo2yJ65Ua3pUyp4JZW9CVfFPO0Bu+ZRMltzkOt/G87k/gKy7EmX5/El3xNaNzlXXTy9LAHG+cnW4K0WEl9vtdTG9NuRzh3Tb3TcaF7+bk8kPPhBevvUSZhV319XABN5RsVdB9QBqfBUsbzZn2YSOzICQDwxKYKX6Cnzu3E2wLAM54TXUcsMsg9WWkykZuvoIraKV9ZGkDuDbVnDc1HK72AGml/1u7mzYinB/6Lol6spQ8v0BPNHnba5+NyWTO7tpyc0ubzR3t0k/d4TsNHW5xY6znFjCeloYuHHNy7XyHMbVqBlxYEFwNAHzbGBQzXqDLMPlqLsEeVkWbJN+AX7m3FJYiUE+IMjKJnRyln1z1R9Vap78DNDVl+Ir9askQr8aLrU1L7U94c2UqKR+v1gG9xB+f4KAN7T9jHS+B+Wt96yJIKyNCPMIW592Rv6yfuz42HHQt5peidtlxTUJ/JrZwPmx9CD1XfmGbUBN+Y+kME7x+N1L3ezU8W5c5oXFDuOATjuEtl/eEhrn58mAovd4vqa0Jx+IvDle+DByz2UaFg3fYymxaMXb08HrXHryDJexnMM9/PXRddd47aom1wgPB6HbhWIzh010bZCkqpfbPrG1ec8afvX77t1WGb8eaj1DdRWQfKkKv58L2XsmFxLlTL1TWmdh1u8JpcgL3UrV48ehbddx6xOKdD4dyjEn5mONH+JSfR3EOUN1E5BBLoy1dNRKNddlWP6VmyBhRBqZS7EUeTyo1Dx/ndRyJs5daBJKFOYLSgUDB2oL279dRXsLzFb2hhSrntFax5AopHU5345qnj89ZI9L3TTGPnobWc4IiNqOKwR3wwO9MIr5YLXhMxrKpO0hxKyiqfkdVpZ3mJueaECchnl9+/YG5mWEALLMM2twvnPisQLBWcfyG5fVHjxjIF9mS7wsen55EuNc8cRKRv+RJPqxQwydsL8JHj1C17yzW/cIx5DBPZNBj7Tk+eZc7Ozi7vfjcOv3bGw/tDW0yJRs6GITZo5YSLdzEE+ncb+qnUcv7ZtxZpFuZcEi1+2xtbPUSZ16pnt6IcOzIVI8HkiQ8gWkvVP0+Elc/lVPEBWxiRwzlM6nFQkFms/6TTirSEAZt8ite+0REYbEOfSXVcZ1wf61HXgLFw4KSEeX5PmbdI4RK1tgFrKe/VbYXpvTjDzUuz5GIhSabOzKlFQhYdS1MupZjOJe/SQPT2XiGh4ekuf4PsiYm0ZoTa7WzzYG+WAM9cIq+DXBDpeQOCFlnTA1v8PS6g5z02ID4rSRF+zN729eMGRH5IvmC+SjcCVzRf0GHvSuu6684O2qdX3Pb06su1JTaRrwO8nVY+JTXthH0Fn33zIpX3r+/OejfmNlV9ZibthiZfejpjvLoizP5a9K9F+GeRbpg/7rt68PET5K5tCCDJiJxMzi3fqFPEe5fRvyqK6WafeRC7zE6DICvWsEGlzaQTLQJmPGCGzz35YSz8XINVDVTTdfGy50kYVCnoSJj446coVCznfeRTFw/E1mgLpnqmqVUs70KTU9Uy37lCv5OGTw5ZHIYESugI2yBe5GKf0eEaGuPFO1j8RSVEw6I8BYqgGZKo4QMDyhDacTkoaASO/PwMjJktFhBMYh498KvguLFUGH4p0k+ML67H9cj4Rzks0zz5dAf+G2pKpKhJsQ303k2tGmLtkvAYhel6c3C+t4McKYe2Tcc4pCTUu2HkKJXdnPeJoRyuvofsa/jVAOtwMvLEiEsqKb6qxChBLL+7NteWReXEcFDm+E8hYnuM0Lj1ABnta/cha03m1ieOuf5XT5MF9k64kLfrAEWs8VszDsXdJ8L02k+bNQnCdEkZ4woi1zxH6STnQrPS2tXiZ4jZFmzmv0n84Yfpwh28b17md2unP99tALeUTESBj68xBB5dS6DM3HVf1pFWpNQoLAINd1cvpf1/VeI/SZv8d/7uEVz/n7UTqdL6W7wRe0GRVSKRVJY3XLJhJXo9bq1hISEHrc3UsTQ7t8cafSTaqk9SYYQZ3MQYkxsJMxAmPVOeXT+wXY0evDgNSiaA9E6gsCO+7fH+1TxeNu9Y8cgTlvEsfdQj/Gp6xIdVcjQSHfIRa00R1Af6GjDHuabM/3JbNBaZGO4uwqdAXqCydZrLIpDX8fhqjx9dH2f1jCMg7tJvKnMkQGCGZhVM9TJDueL5kNi4sIbHsZ6XLg37qY6fPMENPtiYfpsre7NxMqbvIv8WjlF5oepUDAFNbqhU5130m05aS6qorlQJ43HvWHJlNxQ0KsjCJdxdo413MO4M+7xcId7zgDS6M0X+hMu6NA+qtOCCfywFT/tpHbnVCvuybBM4YozGVj166+oNx/GEWlXv0wCzeDJyeTq2OJ5Og0crg0Eh8lzK5RtG4xiCA2hmzdK6R68BEzc91BnnPlFEVBSoqGlCRdIEmlkBFFtZfFUFX9irkX8uMnPXBPykw/tZ6g4EA3OdRnz1cg8OQsihn9HhJ+icPnp+jNiiZ2kzbttwCFl1ZYPgPpDWTDcqpBxmEZdbRad2jkmpZHCtzM2ZYueVfH3w8zF7VPs16VoE9jkhUaZbhPihDD8CouSUDBIrGAX8QUuKpVXTKqJcdsXqJUboum2rZHU17vkdvJVM4s2tVB+DtItIuDuPwY6vYbAUGy36tObjRaI+0AJpKRL+1vaJ/e/wfhXEL732W5b125tVQZTCsxuE+qDChhOklDdtBsxR6yIUjfHx5rOedsRsLIt8vwpTVFcTHibNs586d8At1yGQTSpxfkFKjX4vEP28Z3DBxRHqEDhm9KpI9tnwGccTQh7+EB9E5IhCyyIbn+poCuCYAfbLJHYHC7aQkteww52ytCL3nS134TfKoWyGBOa+RtztvnrLfX90e1O9WRceywoQufE3PHCHYXLex88f6DZe6eGNmlK3FKHr42A31Gipmebvn0O45392BWRJk4/7ZPVg6ib/evA1gjHX1Ftqe+xxM5sdHBbwGrvvFbSG+X8O623QhwxrXen4oJdNskUR4+VQTrBt1G9bR27wSQtjPce7zMKBcJ50B/XzpAFoPsd42xptEP88Ge+lII3qlZ92lQ1xNpMj0djsemZTTxip//hwANGzy7iEAqJqPnt4+a3AeeF6BZyn7vtznD3wsWQHEfiu3/YdpQqBTK55vWXa26ESZ9H77y8uMbITJw3aiIiG6+hKHTDhYTsQYixHTFrNF9EIIZg+twFRAgudlrRI65ckj6GFDbe63Xu8O9NQibtd7d40NXU8WOXDspFOqHNJNqARlMKZNy/R5L1oC9zedrIRHkPY4wDv9fGUBEmC7K+6mv+tCo2qE9Ah1hwW/gdrjOwhUQl0EUsFsWPc0YECIc8R+2iTSloHNaR2xj8wD6V9ILWDIvfU96JjohOP0gqm/8WgkxaG4IPHb2vmewGQ+a2/qfuLCEBcf79hhw2HEdefgJRicBwfvwb8OI2rOnNm7KVjWd/ftLOKgaFOczvS0hM0P8ukMbQ1wdsv22+qapONRRD1VvrmrbsSHHhriwQ/4h6oa8ZlvqaZoRardc/5xpTLE7sTHfSSBzrvbUADi3hcw//iHtj7xjM78LPqIY2OhJKhy5Oc7fVMNEGHJmcRiBPCvI+DksLGa80ZQ31scvLQ64yAGg86X59sQcBMdDU0d3TEdpf5LTwUpbUMOCdTM/Z/l1jCH8ZC8NHBVuCKVxOfo1fCnOziF5qjhEVxJS+ID5rkwQWzUeNo48Zod1IcDxza6f09W20pDn3XrGTP1AK1hJD0PqhNbhSaHLUpeeJPwf1Ksv8No6n0sSGHYHbf0xMLjcbLXb3d5LvPw/SU62253O98UO1TtRjicdUfyY2gXe8bjjo03hRmd2UeaQCMQJy1eAIPBRl4oLnHBj0wgGKew1+BX8ehVbrnwm5l+fEyeQKzxgu4sO2RAnG91mt2DETgvHxCvBdInwR7LtR6my/ErqSs5RifMG6cwA9savDz8sT1f0yh6thR+TsceDwnBQdINzkMqfFHndqnKr2LXbD7Cg7/ni0OgWYGX+2vvOiCfgAmUXVcIgFEgHtMcYcvDqxnK48Tzz8UrP7gxBy21VBeFZ+O6B1IaMNW78BWRkp6jFcVHsrkjXOwfiHUGeSUx7KUzAV9EJEU1MFIfhfdFfWdXXa12qwGvXuO+S2/wL47a49QU+jVgHrGO/XprRNXrjacHJY3xXX/IqAVgj+U/6yj5CiHTLVm+W2uWhdrWq+ySN1dvdV0grVgaDVWrFW8WBt/K9mVDmPsC2HjnuJUEprClbICGxOyl0oauPKr4rgLj4kGjHxh2qJR/ix4vMiGhkY0bLVMP2oln1h6TR72uCDrzgrin4RF901DsKgAY3WPdo0bGNvvCuAxLmZfhFAWIBg8Z47aUXZHy9fh6z3PK/E5y8k/dOUze3WEGOSLiaIxnh3XZLu15QHs6MR1TMw9veyXcEqz/8j3ovaAQF5xreieQaJihixovvEmsyv3vrR2MAK4FH/0snBBND/pEOuPUr6fv9l6xckTQCVydAJJQR/leVxilrNsv8PrKu/zrlPOclRrdiTgGyG8h1DJ8N87YJScVEZgL6HsIn3swrn+jyEecZdXXkI2QwxnrNFXsA3EXoUwK3g/CuO3ojYDcQd/1JlgFUNeLz5rDcs7k64kxvPfU8JJybqLoVRnMxbhbh0ieEirFKvaGqMxGC1vVwug/jYIlDGHNp45VA1RFg+bjzJtxYmL2FodxrtXAAoqbB6HQ4NcJPKuPqZVWvqkLK6ebaMVybI07nEDU3IAF1Q+vKKPidh6axRLUK6MKw3cM98O5FXZlw1J0A60et+M9ZTVQXCHIAdqMJqy/KjIVeHmLcMmac7MU7RvIsUXEQ8/5QLF0NJdOS/e0dDWViLGQdQ0pbY8lD0kRk50k2LjfsdO0YtpaDkMeHZQXKZODQhsskqqmC572N4WZStClC1kSc5yTaecLoYhzygAvn68HxSYAig9c/hltD3D1e5QbnZ9p7STATjlZH1dRZhmIAQK5jayCK83VjZfI4PkEo3BqG7XMFRFVt5vMV9ScuwWxYqyPXFORxCgCQCyvaZLpZAW0z9SWFxiWMZ4PW08UccX2XE6Fl1tOlBPC4p5Gxb8MyGn7fIb9LGLZaSotVYFeaq9jqqlD6nfRzMbEhjLOhZA9olC0iPqsSjFNTa3mv136OSDw8yqcUBZASfM4MlUVcZc7BdtB+MdDAhG5F2OGSAmzKVpkK2XlEGoFMVyLA4rAZABBb/cnM69pGqjxYPgcah86gUdbJrJrAI0t2gIsxLHha5rmzHspOInC+2EgxphnrvDAFB9+Ucps58Jl98IMdjCyxrZdVz/Q/cZeoQPzaW2nblvjYZ3674K/eHx0MGJXIAO20rIcAyYFpeePxlaCJpctst34QsQBujo0BlS9OjJr28MlamTnbfTXqQqDpZDiJJnwUYf/IXKLmi9KkVDd1Fss5XYHviYuYr7KQ++E98LrsA28Ljg/HvpmEldf3lo86XRg1EjZUoK4QccSlpDiW6Dt3xPjUuI9959x/mKX3Bshj/Cc5rvVF8wSY/48fDDBj6dqibYHTm8wXTWxxtu8mdvf+plc1zl4LL+wD9BS9wxfTMVDhvoG4jdfCODW6+ZYf0FF+FObMQ9OxTj0d2FIve7FM/KthrHMMK4P82HFiIfM/ZUdieFLAe4ah9iqGUQESa1E/Op5nmL2kTgVqyVu3PXrTjMdw0L0smP1RnW3Dja7xOeyJzzfhI/ooJkltv1cEVMMAsHQ9dWJA+gDpa2H79CMxtHSqCffd6jv2BIz6oOQLY6meAUAKd2vfYUwuJJ8c5CDjDAxHgtkbTdrHUnHsnZFF43XrWTAajNjr6DpKtBk9N0XIxFwd4jLmzS3Lxp5KjWmolKh9pkd9oYUU0Wq8Yh041XrGeo5ZD4wGx6aV//PWeFO/gXm3zob6Dcy7ozm+P/80ASOnuHhCHwVDW1VuLQnZX4izH21fGUGb+dAzC1ZmI8sopFmN63twGiU0NOFRUgsrM4n6+hXL4zFidCbsHgHpNpMirQ8X0awYpaPHk/sb+285kOTe3S9n7wETI6ExD2iflRVrqvM8b6acVx+1jJ/GYT6gT8mY58Gah8j2WQ71YQPSmvBo5JJ4x+5UbUlFWRoT8M6K8fUwe9uTMh05/9vKgja5cJMOmtPOMZFHiZWBqRX6vKN1xtVNmVp/hF/nEqjXmb/PlJ233ykp62FoCA2hbuomfoPfnUxJXOHWRSn8t0I5SQTe3n3oX7WCUP96rjbctrjLw/ducX0mfHvYe9iPjO/B77nnN5+Flh9k7A9mBIqs7ZtxMl3nHGnAeulPg5mCiRxENgg42Y37xNphhOUfriMKW/HBX0kaT9jT6sYpGzsa55sIm2Uqna7WKUuA6UlWQHXzapyeO43U/61b0NSRfDejLQEMI+BREaThcKpBPlMwxpwnqBKMvg6dVOs9ohZFbBzIQ/02jCPlQ/nUc665Eha8IhiM+vfpLJcI/eJYC8HP+Izl9uJNQ5VUxqnqnAUo+tCBJo7ysbfoEzHVrswFjVOS3JQgk2TrOqKwFYOdtacoBRL93HECnA8cXeKxpuxejqECGkCpdIQG2v1PGp7kH90GP1hly/AyduzfAE+gt5LMLv5f18Ksl0WS7U3YTAa3qXjDXgV5lCIyPMMp+VlgpHSzgmpzVqKXntWkHZk1ks4jazP6aUPWEa16UKzvruY838B19SxwNBf2F18BEIgdryBkBgbzyagQxNmHUq0IlTBdIekrir0bE4fWc0Fx4L+qCL3a+JOM38a66oEC6kWW0pA86hX3AfXNF1/9lHxwJPnjf0klouaYFqpQO4HRABQCCbLD4B2n52ZHeQO+pnxgsHUeWn4Q9bgVFgJrylxO5zytTN1GIU9tMRFHc+Qm5tH7fv4h2SSRdqY7zVmLFd0F00AS/8S5+RBlDCWSheHcinlwT+SGcFxyiToCBaxvnKE2LNR/2bOMbiwSMoA0gQy+FoT8kvly/NP+W8kdjPwXjRZzKUfyK8kb8ZuuJ//lhaQpxGxtHcoe601poScmIOwjU9BuSa5TsIanSAyYVrteMDYmYXbUATLUhQHq3ESV6hAfpgneluahcTD+SA2dVDvSZoYfFE8qkfDSWo9CNWpJcQjo+HqUkypsASGdtQYyjjqBoQ5Q2HJOi5gu0yqzDqsvzkXo1avAtunRkuNZq7BAa5M2OE9aUJSVdFHmjVy0VI7R8XKEy4pRELGzHGZ29KS9ZQza6cjeZCDAJovGA67BRlqm0y0nd9CIayMhB4uJoj5ZarRQRJ/rWWwGWgQr1wDHVrBVdYuBYDtZx3RT7WEADD8bq1Jva2y9cgDnMa1mab0xWsUdPlDQiG0bG1Ns37lnmQfQuItnQlJw5wUUU80fVaAD2jUsIQ4MxOIU3Ma9wHxinpUuUAo2rRcAVIGJ9g3CRg22Q5hRmwbPBqwT8xIVck9UG5HuzORhJ3vhyBnsNyjcwjT1HWbIE711UFs3ssLQqglFgT38gcVIqzIYjBAvNEtLQWgiYOZbo20xpJuIKXcD2PhKPxUzBuR9M9Tq4l7HaJ5yIXHTDYeE9j/MTJpaEjwSFRLXmVMqIjGDLzLq4mADmNDvGlv/VCZNINtSoiyTYAhkWUYEFmRiaP68SLDtZVAS9D2utB9laRBysoKZ0n15kuRhbZZym6BBVuRfSJyFfRZrujqwwcmaDBzWEvgp6/Tcl3JyKMor0ejpnINnK3GqGk0lozEn9A1LPlREm3K7lmeSEbsVpetGe+ESw2vgM5eRZ2+Bll67fz4b7zHI+JH4+s5m7XgDyd4h5M+kdnIOc+zWs2o+dO72t5Srp6yUGSp/11aLd2e3XGof7ZkAvvI/z/QSPznUz7xKn/0wfBS8nvtM3EEZz2BpW2QNmuf4PR7o4vkz0wGHOV9T37ZNq3wb/7rf66Qj6QKTOqtsTg9SwIYMQKEHLNmBfU75Br6CbnDIWY/97ZypkhVL8USqCpX+VeUf1T5K80yNp85LZwUlXjB7LsP/PlsrS6ZsuXLkOWCaGaabaZY5ZptrnjbzLbTAIkssdsNByyy13AqftCudfmi12R3ONKC53Ixy+jJhfT8Us2PhbA7XnueQ7UiXk7OLq5u7hydfIBSJJdKOaxGTlIyWK5QqoNZodUFn8EYq3TCpWefr0ZNnHp0LLhZ71X1tCaPpsEjh5eY36AHN3qsU3jr8CZa6tKUvY5k0327+woO9EmjxoRkc84O9V3jlrXoNGjV57Y0jzMzrO75qTWtey1rXNrU9n/UL6ljnuqZd93qKSH9e/RvY4IYAv8SpYSWzOxHE2oIWMLP4vhQb1qWPaOYwZk3oiFhnhG9xOjuz0BNSb4TE8RgRiCJoluz/OVWlIwaj+dPFliNXnnwdFeikUJFiJUqVKde5Yvjnqrsq1bLmM+ydsoYbYaQ48RLUMOdOklypl5SU6clJ4WiOXL1LKaOl0PMiN7+QyiRbk674sDrJt/TISvcVOK18syxKfGvFKhglqu29u8Za66xXKeQWt9rgNhtV2WSzLbbaplqN2223w0671NptD+v3m7322e+Agw457Ig7HHXMcSfc6aS/u8vd7Ip4r/vgFV+4Ax5kxw6xy04du8lRm+xxXJEttsIq4mMel1gQXMUPjvf7oA/7qOX9uxV93Mo+aVX/aXX/bU2ftrbP3MRIKJwSC/q+Lf0AK1CUEPxwu2sJj1c4uZpLPBTHMrGIouq4oaep2Hq+POT7w4+RrxAauZ0l4zGSoyUSSqnEcn4tY54wvOzIzg2/wwlGmrgFEGEVhcfCE6CSUXz1W+dDTLnU1sdc+9zn/f7/sWYwyQUkzN9Gj0ARM+s8dnnXl3s/Yn3Iq95PV4GNUCKDTeVwZLFlkRX91kv0iNhg/HGUFqLqVXCn6Yp8TGDI1X5ZsYWHEM1Vj0YvY9AjAoOOdnFBqDx+Bg0hiB2Whc1kkxPJRkxcTfSr+0g03/L59EkhD3vTSrWe/H8dZj7JtQGVOpp9Ois9y6mfxTOtPnRmc0fd2fx4cY+9v842f/FtyYKhN6BHnNiJfL1P9URswKQPe0tR9Z5earDGkMYvWhITsYrMAXdkIhdsHZUDYNQl4b9EKYcyUu1Q5GroBe7UYMdIWr9aUH3bka3BHo6cyfYTAF3d6GePtwNizg8xcxCB5fVRBz5y0EcKFf8Yu2f9CH5RHAdiC3V0FFU+SLc83378lVcRa3AbHD0NelM29PS3tTNkl4+mrcZgSk6ULldd/BOuwChSdClucnDq8rO/1zhVDFCbG41MPZWUBXN8m7Wezq9i6DlFTMY1qaInGU/6a9uOPZZVJ4QySmkJPqSCIYLvHYQNSQUYn0kUH/WpoZzgp41HXhudod3ipfqFUCzlx4xDNDhiIj5l80Vsp+z7nuiKLudPWFGoTrVDdm0Ne7doz8WEf5C27/0u8Rfi/d8By9LXfdLKWQVnHZyLQq1/NpyNcney8vcqKpR7YAPqybi7kRcIeoUd2vhUxSNnXMyMCVeV6vfHKPPCMg62/4QTnMrc/+ZLWkbMqqwm62fFSB3BwnoqIG8paknHavhHdccE510hdK3kWhGjTjsdOwuV56B6xR19xUfUF7jaAyHPJcamd0LIXBjV9I69E4BLiDChjGtCKt0wYyUCRJhQxjUhlW6YsZIAIkwo45qQSjfMWMkAESaUcU1IpRtmrBSACBPKuCak0g0zVipAhAllXBNS6YYZqxhamBX3HzkJnQVoEGHGNSGjMgEiLJUZKwsgwozLqOwAUawcAAllXIvISZhxTZixctGGt/NxdAoPGs8H+OoxJ+fd3pw87KbMs8sZc7tWsYmZXsGeqnlsNW7SPBlBPU06beZgEsq4JqTSjZjZACJMKOOakEo3vphHWrUKeuiORs1N5C6yZGdmJaYmpFGtB0Rm4QeyU+midKGZAiDChDKuibc8RWMEjzKJuahQOvepY7UaBy6mlP7jA2G2rSbVPxnQ92aoqd4+buwSGlmgVKRRKpRCskx12VyJ7ggRMSVI608Eb65kNuZ2LSIwlc2pmkM7TYScFFILrW001H+zYhDKuDZG2Wz7vq7UpWHGmnXQIBoZF3m467pJa7H3dkV3hl2P+SKHY8VRaX0719J0I2a/AXHOOeecV94AIkwo49HKShNB69jD9Vrrh/1J5//lbGA7tz/e7mQRiH5u8fX2KtegBHv7rbl9uPyIBo/8/bxCng2XZxVKo7b+0rArBRwYgMDZn43Nl/aSVGHZkHxWt2hUz5kWiLlwvQZYcvNyYQWB6Oqsk+WD3SogvLhfwTz06g3QPGMXfSwzXPZQF2ODtBFI+B9EEY/cfP2hQyMHl1wZyF4fI6oo09W/efzxg7qP0l5jAuIb8yJDjhqIzXSgvK8A1mZCyFBDgTrK+2bbhN7kxO/PDYfCjI7G7y+BLOJ5OmOnsnz8XOnKf3B3UeZ178mJ4P3e9uvPEKExXf/wK9ndgxOsXn5sHVBjet2pmff8bPPunzNgDQGWRK3JmaXI5359hCZggAJQTCErIlDQclpIABMsJiQyBWB5XVzxdQQtg9kCA5YyOsjMNjPnATOYjcNsMoEZS7L+qeYKNgb+FA2zBTAMmBlMDAbAFIGZwWAYYmDYT1E/WwDDgJnBxGAATBGYGQwGU7J6c2i/Ko7OEPzr0ka9X+JQupMPjA2URoa/lphEOdlVeuOGKZESgCl6jUghcVbA8FY8jnJCwDCFJNYLWFgfzkz/ZTeBAt+HyVjHposHeLjvayKDE9U9YNfrogx8Qsrobz/9PnV4TlFV39kFDcdZjFwjp7MYvdgPM4uK/7qIJSq1R3YKUeXaIA2nelivMVdDLDGJx4RuSlRlBik4kUSoqdZVm5RRsQXBGWchGI2TSM4/k5wajhNzzHnTvpmQiIqadkrOFsTtLuTSkWbzDO6RCZ6yR/LeG2V+A07I1lWe7Wi7vp2VE+UxTFpXWVLHdtixF6IapJ9jX8775bowZoAKKVjOkmTfVhWyAytReZmG7KsobtpYZezATfQjg2XtQusolnFNcMFv+zUAAAA=') format('woff2');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
}

/* =========================================================
СТАРТОВЫЙ ЭКРАН
========================================================= */

#${START_ID} {

    position: fixed;

    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;

    z-index: 2147483647;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #242527;

    font-family: 'Pobeda', Arial, sans-serif;

    pointer-events: auto;

}


#${START_ID} .start-inner {

    display: flex;

    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 34px;

    padding: 30px;

    box-sizing: border-box;

}


#${START_ID} .start-title {

    font-family: 'Cera Pro', Arial, sans-serif !important;

    font-size: 64px;

    line-height: 1;

    font-weight: 700;

    color: #ffffff;

    text-align: center;

}


#${START_ID} .start-button {

    appearance: none;

    border: 2px solid #d8561f;

    outline: none;

    background: transparent;

    color: #ffffff;

    font-family: 'Pobeda', Arial, sans-serif !important;

    font-size: 34px;

    font-weight: 400;

    padding: 18px 44px;

    border-radius: 999px;

    cursor: pointer;

    transition:
        background-color .2s ease,
        color .2s ease,
        transform .2s ease;

}


#${START_ID} .start-button:hover {

    background: #d8561f;

    color: #ffffff;

    transform: scale(1.03);

}


/* =========================================================
ЛЕВАЯ ПЛАШКА С ЛОКАЦИЯМИ
========================================================= */

.locations_panel {

    transform-origin: left top !important;

}


/* =========================================================
ПРАВАЯ ПЛАШКА С НАЗВАНИЕМ ЛОКАЦИИ
========================================================= */

.location_title {

    transform-origin: right top !important;

}


/* =========================================================
ПЕРЕКЛЮЧАТЕЛЬ ГОДОВ
========================================================= */

#${YEAR_ROOT_ID} {

    position: fixed;

    right: 55px;
    bottom: 45px;

    width: 327px;
    height: 132px;

    z-index: 999999;

    pointer-events: auto;

    font-family: 'Pobeda', Arial, sans-serif;

    color: #242527;

    transform-origin: right bottom;

}


/* =========================================================
КНОПКИ ГОДОВ
========================================================= */

#${YEAR_ROOT_ID} .year-button {

    position: absolute;

    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    appearance: none;

    border: 0;
    outline: 0;

    margin: 0;
    padding: 0;

    background: #e2e1dd;

    cursor: pointer;

    color: #000000;

    font-family: 'Pobeda', sans-serif !important;

    font-weight: 400 !important;

    transition:
        background-color .15s ease,
        color .15s ease;

}


/* =========================================================
ФОРМА 2011
========================================================= */

#${YEAR_ROOT_ID} .year-button[data-era="2011"] {

    clip-path: polygon(
        32.099% 96.008%,
        11.736% 100%,
        0% 85.584%,
        0% 13.335%,
        32.099% 0%
    );

}


/* =========================================================
ФОРМА 2026
========================================================= */

#${YEAR_ROOT_ID} .year-button[data-era="2026"] {

    clip-path: polygon(
        32.099% 96.008%,
        64.223% 97.520%,
        64.239% 5.269%,
        32.099% 0%
    );

}


/* =========================================================
ФОРМА БУДУЩЕЕ
========================================================= */

#${YEAR_ROOT_ID} .year-button[data-era="future"] {

    clip-path: polygon(
        64.223% 97.520%,
        100% 86.808%,
        100% 11.483%,
        64.239% 5.269%
    );

}


/* =========================================================
АКТИВНЫЙ ГОД
========================================================= */

#${YEAR_ROOT_ID} .year-button.active {

    background: #d8561f;

    color: #ffffff;

}


#${YEAR_ROOT_ID} .year-button:not(.active):hover {

    background: #d3d2ce;

}


/* =========================================================
ТЕКСТ ГОДОВ
========================================================= */

#${YEAR_ROOT_ID} .year-label {

    position: absolute;

    z-index: 2;

    display: flex;

    align-items: center;
    justify-content: center;

    pointer-events: none;

    line-height: 1;

    white-space: nowrap;

}


/* 2011 */

#${YEAR_ROOT_ID}
.year-button[data-era="2011"]
.year-label {

    left: 26px;
    top: 28px;

    width: 64px;
    height: 54px;

    font-size: 47px;

}


/* 2026 */

#${YEAR_ROOT_ID}
.year-button[data-era="2026"]
.year-label {

    left: 123px;
    top: 28px;

    width: 70px;
    height: 54px;

    font-size: 47px;

}


/* БУДУЩЕЕ */

#${YEAR_ROOT_ID}
.year-button[data-era="future"]
.year-label {

    left: 213px;
    top: 24px;

    width: 112px;
    height: 60px;

    font-size: 20px;
    letter-spacing: -.7px;
    line-height: .9;
    white-space: pre-line;
    text-align: center;

}


/* =========================================================
СТРЕЛКИ
========================================================= */

#${YEAR_ROOT_ID} .year-arrow {

    position: absolute;

    z-index: 2;

    width: 22px;
    height: 10px;

    pointer-events: none;

}


#${YEAR_ROOT_ID} .year-arrow::before {

    content: "";

    position: absolute;

    left: 0;
    top: 4px;

    width: 20px;
    height: 1px;

    background: currentColor;

}


#${YEAR_ROOT_ID} .year-arrow::after {

    content: "";

    position: absolute;

    right: 0;
    top: 1px;

    width: 6px;
    height: 6px;

    border-top: 1px solid currentColor;
    border-right: 1px solid currentColor;

    transform: rotate(45deg);

}


/* 2011 */

#${YEAR_ROOT_ID}
.year-button[data-era="2011"]
.year-arrow {

    left: 43px;
    top: 94px;

}


/* 2026 */

#${YEAR_ROOT_ID}
.year-button[data-era="2026"]
.year-arrow {

    left: 146px;
    top: 94px;

}


/* БУДУЩЕЕ */

#${YEAR_ROOT_ID}
.year-button[data-era="future"]
.year-arrow {

    left: 258px;
    top: 94px;

}


/* =========================================================
РАЗДЕЛИТЕЛИ
========================================================= */

#${YEAR_ROOT_ID} .separator {

    position: absolute;

    z-index: 5;

    width: 1px;

    background: rgba(0,0,0,0.75);

    pointer-events: none;

}


#${YEAR_ROOT_ID} .separator.one {

    left: 104.92px;
    top: 0;

    height: 128px;

}


#${YEAR_ROOT_ID} .separator.two {

    left: 209.95px;
    top: 7px;

    height: 122px;

}


/* =========================================================
DESKTOP
1200 И БОЛЬШЕ
========================================================= */

@media (min-width:1200px) {

    .locations_panel {

        transform: scale(1) !important;

    }


    .location_title {

        transform: scale(1) !important;

    }


    #${YEAR_ROOT_ID} {

        right: 55px;
        bottom: 45px;

        transform: scale(1);

    }

}


/* =========================================================
TABLET
700–1199
========================================================= */

@media (min-width:700px) and (max-width:1199px) {

    .locations_panel {

        transform: scale(0.82) !important;

    }


    .location_title {

        transform: scale(0.82) !important;

    }


    #${YEAR_ROOT_ID} {

        right: 30px;
        bottom: 30px;

        transform: scale(0.85);

    }

}


/* =========================================================
MOBILE
МЕНЬШЕ 700
========================================================= */

@media (max-width:699px) {

    .locations_panel {

        transform: scale(0.62) !important;

    }


    /*
        НАЗВАНИЕ ЛОКАЦИИ
    */

    .location_title {

        transform-origin: right top !important;

        transform: scale(0.90) !important;

    }


    /*
        СТАРЫЙ DESKTOP/TABLET
        ПЕРЕКЛЮЧАТЕЛЬ ГОДОВ
    */

    #${YEAR_ROOT_ID} {

        display: none !important;

    }


    /*
        СТАРАЯ КНОПКА АУДИО.

        Именно этот ID мы увидели
        в DevTools:
        <button id="sfu-audio-button">

        На мобильном полностью скрываем.
    */

    #sfu-audio-button {

        display: none !important;

        visibility: hidden !important;

        opacity: 0 !important;

        pointer-events: none !important;

    }


    /*
        Если в Pano2VR остались старые
        audio_control, их тоже не показываем
        на мобильной версии.
    */

    .audio_control {

        display: none !important;

        visibility: hidden !important;

        opacity: 0 !important;

        pointer-events: none !important;

    }


    #${START_ID} .start-title {

        font-size: 42px;

    }


    #${START_ID} .start-button {

        font-size: 27px;

        padding: 15px 32px;

    }

}


/* =========================================================
АУДИО
========================================================= */

.audio_control {

    cursor: pointer;

}

`;

document.head.appendChild(
    style
);


/* =========================================================
АУДИО
========================================================= */

var GUIDE_VOLUME = 0.25;

var guideAudio =
    new Audio();

guideAudio.preload =
    "auto";

guideAudio.volume =
    GUIDE_VOLUME;

var MUSIC_VOLUME = 0.05;
var MUSIC_OVERLAP_SECONDS = 17;
var backgroundAudio = new Audio('audio/background-music.mp3');
var backgroundAudioNext = new Audio('audio/background-music.mp3');
var musicTracks = [backgroundAudio, backgroundAudioNext];
var musicContext = null;
var musicGains = null;
var musicActiveIndex = 0;
var musicOverlapStart = null;
var musicLoopTimer = null;

musicTracks.forEach(function (track) {
    track.preload = 'auto';
    track.loop = false;
});

function setMusicLevels(first, second) {
    if (musicGains) {
        musicGains[0].gain.value = MUSIC_VOLUME * first;
        musicGains[1].gain.value = MUSIC_VOLUME * second;
    } else {
        musicTracks[0].volume = MUSIC_VOLUME * first;
        musicTracks[1].volume = MUSIC_VOLUME * second;
    }
}

function prepareMusicMixer() {
    if (musicContext) return;
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        setMusicLevels(musicActiveIndex === 0 ? 1 : 0, musicActiveIndex === 1 ? 1 : 0);
        return;
    }
    try {
        musicContext = new AudioContextClass();
        musicGains = musicTracks.map(function (track) {
            var gain = musicContext.createGain();
            musicContext.createMediaElementSource(track).connect(gain);
            gain.connect(musicContext.destination);
            track.volume = 1;
            return gain;
        });
    } catch (error) {
        console.log('Фоновая музыка: используется громкость аудиоэлементов', error);
        musicGains = null;
    }
    setMusicLevels(musicActiveIndex === 0 ? 1 : 0, musicActiveIndex === 1 ? 1 : 0);
}

function finishMusicOverlap() {
    if (musicOverlapStart === null) return;
    var old = musicTracks[musicActiveIndex];
    var nextIndex = 1 - musicActiveIndex;
    old.pause();
    try { old.currentTime = 0; } catch (_) {}
    musicActiveIndex = nextIndex;
    musicOverlapStart = null;
    setMusicLevels(musicActiveIndex === 0 ? 1 : 0, musicActiveIndex === 1 ? 1 : 0);
}

function updateMusicOverlap() {
    if (!tourStarted || audioPausedByUser) return;
    var active = musicTracks[musicActiveIndex];
    var duration = active.duration;
    if (!isFinite(duration) || duration <= MUSIC_OVERLAP_SECONDS + 1) return;
    var remaining = duration - active.currentTime;
    if (musicOverlapStart === null && remaining <= MUSIC_OVERLAP_SECONDS && remaining > 0) {
        var next = musicTracks[1 - musicActiveIndex];
        try { next.currentTime = 0; } catch (_) {}
        musicOverlapStart = active.currentTime;
        next.play().catch(function (error) { console.log('Не удалось запустить переход музыки:', error); });
    }
    if (musicOverlapStart !== null) {
        var progress = Math.max(0, Math.min(1, (active.currentTime - musicOverlapStart) / MUSIC_OVERLAP_SECONDS));
        var levels = musicActiveIndex === 0 ? [1 - progress, progress] : [progress, 1 - progress];
        setMusicLevels(levels[0], levels[1]);
        if (active.ended || remaining <= 0.05 || progress >= 1) finishMusicOverlap();
    }
}

musicTracks.forEach(function (track) {
    track.addEventListener('ended', function () {
        if (!tourStarted || audioPausedByUser) return;
        if (musicOverlapStart !== null) {
            finishMusicOverlap();
        } else if (track === musicTracks[musicActiveIndex]) {
            track.currentTime = 0;
            track.play().catch(function () {});
        }
    });
});

function playBackgroundMusic() {
    if (!tourStarted || audioPausedByUser) return;
    prepareMusicMixer();
    if (musicContext && musicContext.state === 'suspended') musicContext.resume().catch(function () {});
    musicTracks[musicActiveIndex].play().catch(function (error) { console.log('Фоновая музыка не запущена:', error); });
    if (musicOverlapStart !== null) musicTracks[1 - musicActiveIndex].play().catch(function () {});
    if (!musicLoopTimer) musicLoopTimer = setInterval(updateMusicOverlap, 80);
}

function pauseBackgroundMusic() {
    musicTracks.forEach(function (track) { track.pause(); });
}

function notifyTourAudioState() {
    updateAudioControls();
    window.dispatchEvent(new Event('sfu-audio-state'));
}
function pauseTourAudio() {
    audioPausedByUser = true;
    guideAudio.pause();
    pauseBackgroundMusic();
    notifyTourAudioState();
}
function playTourAudio() {
    if (!tourStarted) return;
    audioPausedByUser = false;
    playBackgroundMusic();
    if (!guideAudio.ended) guideAudio.play().catch(function () {});
    notifyTourAudioState();
}

var currentAudioLocation =
    null;

var tourStarted =
    false;

var audioPausedByUser =
    false;


/* =========================================================
ТЕКУЩЕЕ СОСТОЯНИЕ
========================================================= */

function getCurrentState(){

    var currentNode = "";


    if (
        typeof player !== "undefined" &&
        typeof player.getCurrentNode === "function"
    ) {

        currentNode =
            player.getCurrentNode();

    }


    for (
        var i = 0;
        i < LOCATIONS.length;
        i++
    ){

        var location =
            LOCATIONS[i];


        if (
            location.nodes["2011"] ===
            currentNode
        ){

            return {
                location: location,
                era: "2011"
            };

        }


        if (
            location.nodes["2026"] ===
            currentNode
        ){

            return {
                location: location,
                era: "2026"
            };

        }


        if (
            location.nodes["future"] ===
            currentNode
        ){

            return {
                location: location,
                era: "future"
            };

        }

    }


    return {
        location: LOCATIONS[0],
        era: "2026"
    };

}


/* =========================================================
АДАПТИВНЫЙ ИНТЕРФЕЙС
========================================================= */

function hideResponsiveContainer(selector){

    document
        .querySelectorAll(selector)
        .forEach(function(element){

            element.style.setProperty(
                "display",
                "none",
                "important"
            );

            element.style.setProperty(
                "visibility",
                "hidden",
                "important"
            );

            element.style.setProperty(
                "pointer-events",
                "none",
                "important"
            );

        });

}


function showResponsiveContainer(selector){

    document
        .querySelectorAll(selector)
        .forEach(function(element){

            element.style.removeProperty(
                "display"
            );

            element.style.setProperty(
                "visibility",
                "visible",
                "important"
            );

            element.style.setProperty(
                "pointer-events",
                "none",
                "important"
            );

        });

}


function updateResponsiveUI(){

    var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;


    hideResponsiveContainer(
        ".desktop_ui"
    );

    hideResponsiveContainer(
        ".tablet_ui"
    );

    hideResponsiveContainer(
        ".mobile_ui"
    );


    if (width >= 1200){

        showResponsiveContainer(
            ".desktop_ui"
        );

        document.documentElement.setAttribute(
            "data-sfu-device",
            "desktop"
        );

    }


    else if (width >= 700){

        showResponsiveContainer(
            ".tablet_ui"
        );

        document.documentElement.setAttribute(
            "data-sfu-device",
            "tablet"
        );

    }


    else {

        showResponsiveContainer(
            ".mobile_ui"
        );

        document.documentElement.setAttribute(
            "data-sfu-device",
            "mobile"
        );

    }

}


/* =========================================================
ОТКРЫТИЕ НОДЫ
========================================================= */

function openNode(nodeId){

    if (
        !nodeId ||
        typeof player === "undefined" ||
        typeof player.openNext !== "function"
    ) {

        return;

    }


    player.openNext(
        "{" + nodeId + "}",
        ""
    );

}


/* =========================================================
ПЕРЕКЛЮЧЕНИЕ ГОДА
========================================================= */

function switchEra(era){

    var state =
        getCurrentState();


    if (
        !state ||
        !state.location
    ) {

        return;

    }


    var targetNode =
        state.location.nodes[era];


    if (!targetNode) {

        return;

    }


    if (
        state.era === era
    ){

        updateActiveEra();

        return;

    }


    openNode(
        targetNode
    );

}


/* =========================================================
СОЗДАЁМ DESKTOP/TABLET ПЕРЕКЛЮЧАТЕЛЬ ГОДОВ
========================================================= */

var yearRoot =
    document.createElement("div");

yearRoot.id =
    YEAR_ROOT_ID;

document.body.appendChild(
    yearRoot
);


ERAS.forEach(function(era){

    var button =
        document.createElement("button");

    button.type =
        "button";

    button.className =
        "year-button";

    button.dataset.era =
        era.key;


    var label =
        document.createElement("span");

    label.className =
        "year-label";

    label.textContent =
        era.label;


    var arrow =
        document.createElement("span");

    arrow.className =
        "year-arrow";


    button.appendChild(
        label
    );

    button.appendChild(
        arrow
    );


    button.addEventListener(
        "click",
        function(){

            switchEra(
                era.key
            );

        }
    );


    yearRoot.appendChild(
        button
    );

});


var separator1 =
    document.createElement("div");

separator1.className =
    "separator one";


var separator2 =
    document.createElement("div");

separator2.className =
    "separator two";


yearRoot.appendChild(
    separator1
);

yearRoot.appendChild(
    separator2
);


/* =========================================================
АКТИВНЫЙ ГОД
========================================================= */

function updateActiveEra(){

    var state =
        getCurrentState();


    var buttons =
        yearRoot.querySelectorAll(
            ".year-button"
        );


    buttons.forEach(function(button){

        button.classList.toggle(
            "active",
            button.dataset.era ===
            state.era
        );

    });

}


/* =========================================================
КНОПКИ АУДИО
========================================================= */

function updateAudioControls(){

    var controls =
        document.querySelectorAll(
            ".audio_control"
        );


    controls.forEach(function(control){

        var paused =
            audioPausedByUser;


        control.classList.toggle(
            "audio-paused",
            paused
        );


        control.classList.toggle(
            "audio-playing",
            !paused
        );


        control.setAttribute(
            "aria-pressed",
            paused ? "false" : "true"
        );

    });

}


/* =========================================================
ОБНОВЛЕНИЕ АУДИО
========================================================= */

function updateGuideAudio(){

    if (!tourStarted) {

        return;

    }


    var state =
        getCurrentState();


    if (
        !state ||
        !state.location
    ) {

        return;

    }


    var locationKey =
        state.location.key;


    var audioFile =
        AUDIO_FILES[locationKey];


    if (!audioFile) {

        return;

    }


    /*
        Если поменялся только год,
        аудио НЕ перезапускается.
    */

    if (
        currentAudioLocation ===
        locationKey
    ) {

        updateAudioControls();

        return;

    }


    currentAudioLocation =
        locationKey;


    guideAudio.pause();


    guideAudio.src =
        audioFile;


    guideAudio.currentTime =
        0;


    if (!audioPausedByUser) {

        guideAudio
            .play()
            .catch(function(error){

                console.log(
                    "Не удалось запустить аудио:",
                    error
                );

            });

    }


    updateAudioControls();

}


/* =========================================================
PLAY / PAUSE
========================================================= */

function toggleGuideAudio(){
    if (!tourStarted) return;
    if (audioPausedByUser) playTourAudio(); else pauseTourAudio();
}


/* =========================================================
ДОСТУП К АУДИО
========================================================= */

window.sfuAudioGuide = {
    audio: guideAudio,
    get backgroundAudio(){ return musicTracks[musicActiveIndex]; },
    isPaused: function(){return audioPausedByUser;},
    toggle: toggleGuideAudio,
    pause: pauseTourAudio,
    play: playTourAudio
};


/* =========================================================
СТАРТОВЫЙ ЭКРАН
========================================================= */

var startScreen =
    document.createElement("div");

startScreen.id =
    START_ID;


var startInner =
    document.createElement("div");

startInner.className =
    "start-inner";


var startTitle =
    document.createElement("div");

startTitle.className =
    "start-title";

startTitle.textContent =
    "ПЕРВЫЙ ФЕДЕРАЛЬНЫЙ";


var startButton =
    document.createElement("button");

startButton.type =
    "button";

startButton.className =
    "start-button";

startButton.textContent =
    "ЗАГРУЗИТЬ ТУР";


startInner.appendChild(
    startTitle
);

startInner.appendChild(
    startButton
);

startScreen.appendChild(
    startInner
);

document.body.appendChild(
    startScreen
);


/* =========================================================
ЗАПУСК ТУРА
========================================================= */

var startAlreadyPressed =
    false;


function startTour(){

    if (
        startAlreadyPressed
    ){

        return;

    }


    startAlreadyPressed =
        true;

    tourStarted =
        true;
    playBackgroundMusic();

    audioPausedByUser =
        false;


    openNode(
        "node1"
    );


    currentAudioLocation =
        "library";


    guideAudio.pause();

    guideAudio.src =
        AUDIO_FILES.library;

    guideAudio.currentTime =
        0;

    guideAudio.volume =
        GUIDE_VOLUME;


    var playPromise =
        guideAudio.play();


    if (
        playPromise !== undefined
    ) {

        playPromise.catch(
            function(error){

                console.log(
                    "Не удалось запустить аудиогид:",
                    error
                );

            }
        );

    }


    updateAudioControls();


    if (
        startScreen &&
        startScreen.parentNode
    ) {

        startScreen.remove();

    }

}


startButton.addEventListener(
    "pointerdown",
    startTour
);

startButton.addEventListener(
    "click",
    startTour
);


/* =========================================================
КЛИК ПО СТАРЫМ КНОПКАМ АУДИО
========================================================= */

function handleSkinClick(event){

    var target =
        event.target;


    if (!target) {

        return;

    }


    var audioButton =
        target.closest
        ? target.closest(".audio_control")
        : null;


    if (
        audioButton
    ){

        event.preventDefault();

        event.stopPropagation();

        toggleGuideAudio();

        return;

    }

}


document.addEventListener(
    "click",
    handleSkinClick,
    true
);


/* =========================================================
СОБЫТИЯ АУДИО
========================================================= */

function handleAudioStateChange(){

    updateAudioControls();

}


guideAudio.addEventListener(
    "play",
    handleAudioStateChange
);

guideAudio.addEventListener(
    "pause",
    handleAudioStateChange
);

guideAudio.addEventListener(
    "ended",
    handleAudioStateChange
);


/* =========================================================
ИЗМЕНЕНИЕ РАЗМЕРА
========================================================= */

var resizeTimer =
    null;


function handleResize(){

    clearTimeout(
        resizeTimer
    );


    resizeTimer =
        setTimeout(
            function(){

                updateResponsiveUI();

                updateActiveEra();

                updateAudioControls();

            },
            50
        );

}


window.addEventListener(
    "resize",
    handleResize
);


/* =========================================================
СОБЫТИЯ PANO2VR
========================================================= */

var panoChangeNodeHandler =
function(){

    updateActiveEra();

    updateGuideAudio();

};


var panoConfigLoadedHandler =
function(){

    updateResponsiveUI();

    updateActiveEra();

    updateAudioControls();

};


var panoImagesReadyHandler =
function(){

    updateResponsiveUI();

    updateActiveEra();

    updateAudioControls();

};


if (
    typeof player !== "undefined" &&
    typeof player.addListener === "function"
) {

    player.addListener(
        "changenode",
        panoChangeNodeHandler
    );

    player.addListener(
        "configloaded",
        panoConfigLoadedHandler
    );

    player.addListener(
        "imagesready",
        panoImagesReadyHandler
    );

}


/* =========================================================
ПЕРВИЧНАЯ НАСТРОЙКА
========================================================= */

function initialUpdate(){

    updateResponsiveUI();

    updateActiveEra();

    updateAudioControls();

}


initialUpdate();


setTimeout(
    initialUpdate,
    100
);

setTimeout(
    initialUpdate,
    500
);

setTimeout(
    initialUpdate,
    1000
);


/* =========================================================
CLEANUP
========================================================= */

window.sfuMainCleanup =
function(){
    pauseBackgroundMusic();
    if (musicLoopTimer) clearInterval(musicLoopTimer);
    if (musicContext) musicContext.close().catch(function(){});

    try {

        document.removeEventListener(
            "click",
            handleSkinClick,
            true
        );

    } catch(e) {}


    try {

        window.removeEventListener(
            "resize",
            handleResize
        );

    } catch(e) {}


    try {

        guideAudio.removeEventListener(
            "play",
            handleAudioStateChange
        );

        guideAudio.removeEventListener(
            "pause",
            handleAudioStateChange
        );

        guideAudio.removeEventListener(
            "ended",
            handleAudioStateChange
        );

    } catch(e) {}


    try {

        guideAudio.pause();

    } catch(e) {}


    try {

        var yr =
            document.getElementById(
                YEAR_ROOT_ID
            );

        if (yr) {

            yr.remove();

        }

    } catch(e) {}

};

})();
		el.appendChild(els);
		me._main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._main.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._main);
		el=me._gallery_engine=document.createElement('div');
		el.ggId="gallery_engine";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_engine.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery_engine.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._gallery_engine);
		el=me._gallery_photo_assets=document.createElement('div');
		el.ggId="gallery_photo_assets";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:none;';
		hs+='display:none!important;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_photo_assets.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery_photo_assets.ggUpdatePosition=function (useTransition) {
		}
		el=me._gallery_library_01=document.createElement('div');
		els=me._gallery_library_01__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_01__img.setAttribute('src',basePath + 'images/gallery_library_01.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_01";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_01.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_01);
		el=me._gallery_library_02=document.createElement('div');
		els=me._gallery_library_02__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_02__img.setAttribute('src',basePath + 'images/gallery_library_02.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_02";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_02.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_02);
		el=me._gallery_library_03=document.createElement('div');
		els=me._gallery_library_03__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_03__img.setAttribute('src',basePath + 'images/gallery_library_03.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_03";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_03.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_03);
		el=me._gallery_library_04=document.createElement('div');
		els=me._gallery_library_04__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_04__img.setAttribute('src',basePath + 'images/gallery_library_04.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_04";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_04.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_04.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_04);
		el=me._gallery_library_05=document.createElement('div');
		els=me._gallery_library_05__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_05__img.setAttribute('src',basePath + 'images/gallery_library_05.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_05";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_05.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_05.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_05);
		el=me._gallery_library_06=document.createElement('div');
		els=me._gallery_library_06__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_06__img.setAttribute('src',basePath + 'images/gallery_library_06.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_06";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_06";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_06.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_06.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_06);
		el=me._gallery_library_07=document.createElement('div');
		els=me._gallery_library_07__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_07__img.setAttribute('src',basePath + 'images/gallery_library_07.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_07";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_07";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_07.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_07.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_07);
		el=me._gallery_library_08=document.createElement('div');
		els=me._gallery_library_08__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_08__img.setAttribute('src',basePath + 'images/gallery_library_08.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_08";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_08";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_08.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_08.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_08);
		el=me._gallery_library_09=document.createElement('div');
		els=me._gallery_library_09__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_09__img.setAttribute('src',basePath + 'images/gallery_library_09.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_09";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_09";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_09.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_09.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_09);
		el=me._gallery_library_10=document.createElement('div');
		els=me._gallery_library_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_10__img.setAttribute('src',basePath + 'images/gallery_library_10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_10";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_10.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_10);
		el=me._gallery_library_11=document.createElement('div');
		els=me._gallery_library_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_11__img.setAttribute('src',basePath + 'images/gallery_library_11.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_11";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_11.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_11);
		el=me._gallery_library_12=document.createElement('div');
		els=me._gallery_library_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_12__img.setAttribute('src',basePath + 'images/gallery_library_12.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_12";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_12.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_12);
		el=me._gallery_library_13=document.createElement('div');
		els=me._gallery_library_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_13__img.setAttribute('src',basePath + 'images/gallery_library_13.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_13";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_13.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_13);
		el=me._gallery_library_14=document.createElement('div');
		els=me._gallery_library_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_library_14__img.setAttribute('src',basePath + 'images/gallery_library_14.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_library_14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_library_14";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_library_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_library_14.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_library_14);
		el=me._gallery_well_01=document.createElement('div');
		els=me._gallery_well_01__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_01__img.setAttribute('src',basePath + 'images/gallery_well_01.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_01";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_01.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_01);
		el=me._gallery_well_02=document.createElement('div');
		els=me._gallery_well_02__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_02__img.setAttribute('src',basePath + 'images/gallery_well_02.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_02";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_02.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_02);
		el=me._gallery_well_03=document.createElement('div');
		els=me._gallery_well_03__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_03__img.setAttribute('src',basePath + 'images/gallery_well_03.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_03";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_03.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_03);
		el=me._gallery_well_04=document.createElement('div');
		els=me._gallery_well_04__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_04__img.setAttribute('src',basePath + 'images/gallery_well_04.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_04";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_04.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_04.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_04);
		el=me._gallery_well_05=document.createElement('div');
		els=me._gallery_well_05__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_05__img.setAttribute('src',basePath + 'images/gallery_well_05.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_05";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_05.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_05.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_05);
		el=me._gallery_well_06=document.createElement('div');
		els=me._gallery_well_06__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_06__img.setAttribute('src',basePath + 'images/gallery_well_06.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_06";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_06";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_06.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_06.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_06);
		el=me._gallery_well_08=document.createElement('div');
		els=me._gallery_well_08__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_08__img.setAttribute('src',basePath + 'images/gallery_well_08.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_08";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_08";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_08.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_08.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_08);
		el=me._gallery_well_10=document.createElement('div');
		els=me._gallery_well_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_10__img.setAttribute('src',basePath + 'images/gallery_well_10.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_10";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_10.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_10);
		el=me._gallery_well_11=document.createElement('div');
		els=me._gallery_well_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_11__img.setAttribute('src',basePath + 'images/gallery_well_11.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_11";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_11.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_11);
		el=me._gallery_well_07=document.createElement('div');
		els=me._gallery_well_07__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_07__img.setAttribute('src',basePath + 'images/gallery_well_07.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_07";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_07";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_07.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_07.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_07);
		el=me._gallery_well_09=document.createElement('div');
		els=me._gallery_well_09__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_well_09__img.setAttribute('src',basePath + 'images/gallery_well_09.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_well_09";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_well_09";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_well_09.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_well_09.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_well_09);
		el=me._gallery_inig_01=document.createElement('div');
		els=me._gallery_inig_01__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_inig_01__img.setAttribute('src',basePath + 'images/gallery_inig_01.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_inig_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_inig_01";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_inig_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_inig_01.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_inig_01);
		el=me._gallery_inig_04=document.createElement('div');
		els=me._gallery_inig_04__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_inig_04__img.setAttribute('src',basePath + 'images/gallery_inig_04.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_inig_04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_inig_04";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_inig_04.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_inig_04.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_inig_04);
		el=me._gallery_inig_06=document.createElement('div');
		els=me._gallery_inig_06__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_inig_06__img.setAttribute('src',basePath + 'images/gallery_inig_06.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_inig_06";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_inig_06";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_inig_06.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_inig_06.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_inig_06);
		el=me._gallery_inig_02=document.createElement('div');
		els=me._gallery_inig_02__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_inig_02__img.setAttribute('src',basePath + 'images/gallery_inig_02.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_inig_02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_inig_02";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_inig_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_inig_02.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_inig_02);
		el=me._gallery_inig_03=document.createElement('div');
		els=me._gallery_inig_03__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_inig_03__img.setAttribute('src',basePath + 'images/gallery_inig_03.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_inig_03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_inig_03";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_inig_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_inig_03.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_inig_03);
		el=me._gallery_inig_05=document.createElement('div');
		els=me._gallery_inig_05__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_inig_05__img.setAttribute('src',basePath + 'images/gallery_inig_05.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_inig_05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_inig_05";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_inig_05.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_inig_05.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_inig_05);
		el=me._gallery_inig_07=document.createElement('div');
		els=me._gallery_inig_07__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_inig_07__img.setAttribute('src',basePath + 'images/gallery_inig_07.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_inig_07";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_inig_07";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_inig_07.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_inig_07.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_inig_07);
		el=me._gallery_ifksit_01=document.createElement('div');
		els=me._gallery_ifksit_01__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_ifksit_01__img.setAttribute('src',basePath + 'images/gallery_ifksit_01.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_ifksit_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_ifksit_01";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_ifksit_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_ifksit_01.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_ifksit_01);
		el=me._gallery_ifksit_02=document.createElement('div');
		els=me._gallery_ifksit_02__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_ifksit_02__img.setAttribute('src',basePath + 'images/gallery_ifksit_02.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_ifksit_02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_ifksit_02";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_ifksit_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_ifksit_02.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_ifksit_02);
		el=me._gallery_ifksit_03=document.createElement('div');
		els=me._gallery_ifksit_03__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_ifksit_03__img.setAttribute('src',basePath + 'images/gallery_ifksit_03.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_ifksit_03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_ifksit_03";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_ifksit_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_ifksit_03.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_ifksit_03);
		el=me._gallery_ifksit_04=document.createElement('div');
		els=me._gallery_ifksit_04__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_ifksit_04__img.setAttribute('src',basePath + 'images/gallery_ifksit_04.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_ifksit_04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_ifksit_04";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_ifksit_04.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_ifksit_04.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_ifksit_04);
		el=me._gallery_ifksit_05=document.createElement('div');
		els=me._gallery_ifksit_05__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_ifksit_05__img.setAttribute('src',basePath + 'images/gallery_ifksit_05.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_ifksit_05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_ifksit_05";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_ifksit_05.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_ifksit_05.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_ifksit_05);
		el=me._gallery_dorm_01=document.createElement('div');
		els=me._gallery_dorm_01__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_dorm_01__img.setAttribute('src',basePath + 'images/gallery_dorm_01.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_dorm_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_dorm_01";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_dorm_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_dorm_01.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_dorm_01);
		el=me._gallery_dorm_02=document.createElement('div');
		els=me._gallery_dorm_02__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_dorm_02__img.setAttribute('src',basePath + 'images/gallery_dorm_02.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_dorm_02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_dorm_02";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_dorm_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_dorm_02.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_dorm_02);
		el=me._gallery_dorm_03=document.createElement('div');
		els=me._gallery_dorm_03__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_dorm_03__img.setAttribute('src',basePath + 'images/gallery_dorm_03.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_dorm_03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_dorm_03";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_dorm_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_dorm_03.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_dorm_03);
		el=me._gallery_pyramid_01=document.createElement('div');
		els=me._gallery_pyramid_01__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_pyramid_01__img.setAttribute('src',basePath + 'images/gallery_pyramid_01.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pyramid_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_pyramid_01";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pyramid_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pyramid_01.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_pyramid_01);
		el=me._gallery_pyramid_03=document.createElement('div');
		els=me._gallery_pyramid_03__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_pyramid_03__img.setAttribute('src',basePath + 'images/gallery_pyramid_03.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pyramid_03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_pyramid_03";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pyramid_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pyramid_03.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_pyramid_03);
		el=me._gallery_pyramid_04=document.createElement('div');
		els=me._gallery_pyramid_04__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_pyramid_04__img.setAttribute('src',basePath + 'images/gallery_pyramid_04.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pyramid_04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_pyramid_04";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pyramid_04.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pyramid_04.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_pyramid_04);
		el=me._gallery_pyramid_06=document.createElement('div');
		els=me._gallery_pyramid_06__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_pyramid_06__img.setAttribute('src',basePath + 'images/gallery_pyramid_06.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pyramid_06";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_pyramid_06";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pyramid_06.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pyramid_06.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_pyramid_06);
		el=me._gallery_pyramid_08=document.createElement('div');
		els=me._gallery_pyramid_08__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_pyramid_08__img.setAttribute('src',basePath + 'images/gallery_pyramid_08.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pyramid_08";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_pyramid_08";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pyramid_08.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pyramid_08.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_pyramid_08);
		el=me._gallery_pyramid_02=document.createElement('div');
		els=me._gallery_pyramid_02__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_pyramid_02__img.setAttribute('src',basePath + 'images/gallery_pyramid_02.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pyramid_02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_pyramid_02";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pyramid_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pyramid_02.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_pyramid_02);
		el=me._gallery_pyramid_05=document.createElement('div');
		els=me._gallery_pyramid_05__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_pyramid_05__img.setAttribute('src',basePath + 'images/gallery_pyramid_05.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pyramid_05";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_pyramid_05";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pyramid_05.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pyramid_05.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_pyramid_05);
		el=me._gallery_pyramid_07=document.createElement('div');
		els=me._gallery_pyramid_07__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_pyramid_07__img.setAttribute('src',basePath + 'images/gallery_pyramid_07.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_pyramid_07";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_pyramid_07";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_pyramid_07.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_pyramid_07.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_pyramid_07);
		el=me._gallery_stadium_01=document.createElement('div');
		els=me._gallery_stadium_01__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_stadium_01__img.setAttribute('src',basePath + 'images/gallery_stadium_01.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_stadium_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_stadium_01";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_stadium_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_stadium_01.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_stadium_01);
		el=me._gallery_stadium_02=document.createElement('div');
		els=me._gallery_stadium_02__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_stadium_02__img.setAttribute('src',basePath + 'images/gallery_stadium_02.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_stadium_02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_stadium_02";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_stadium_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_stadium_02.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_stadium_02);
		el=me._gallery_stadium_03=document.createElement('div');
		els=me._gallery_stadium_03__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_stadium_03__img.setAttribute('src',basePath + 'images/gallery_stadium_03.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_stadium_03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_stadium_03";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_stadium_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_stadium_03.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_stadium_03);
		el=me._gallery_stadium_04=document.createElement('div');
		els=me._gallery_stadium_04__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_stadium_04__img.setAttribute('src',basePath + 'images/gallery_stadium_04.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_stadium_04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_stadium_04";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_stadium_04.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_stadium_04.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_stadium_04);
		el=me._gallery_dashi_01=document.createElement('div');
		els=me._gallery_dashi_01__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_dashi_01__img.setAttribute('src',basePath + 'images/gallery_dashi_01.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_dashi_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_dashi_01";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_dashi_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_dashi_01.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_dashi_01);
		el=me._gallery_dashi_02=document.createElement('div');
		els=me._gallery_dashi_02__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_dashi_02__img.setAttribute('src',basePath + 'images/gallery_dashi_02.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_dashi_02";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_dashi_02";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_dashi_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_dashi_02.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_dashi_02);
		el=me._gallery_dashi_03=document.createElement('div');
		els=me._gallery_dashi_03__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_dashi_03__img.setAttribute('src',basePath + 'images/gallery_dashi_03.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_dashi_03";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_dashi_03";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_dashi_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_dashi_03.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_dashi_03);
		el=me._gallery_dashi_04=document.createElement('div');
		els=me._gallery_dashi_04__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._gallery_dashi_04__img.setAttribute('src',basePath + 'images/gallery_dashi_04.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_dashi_04";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg gallery_dashi_04";
		el.ggType='svg';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_dashi_04.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gallery_dashi_04.ggUpdatePosition=function (useTransition) {
		}
		me._gallery_photo_assets.appendChild(me._gallery_dashi_04);
		me.divSkin.appendChild(me._gallery_photo_assets);
		"";(function(){

var BUTTON_ID = "sfu-audio-button";
var STYLE_ID = "sfu-audio-button-style";

var oldButton = document.getElementById(BUTTON_ID);
if (oldButton) oldButton.remove();

var oldStyle = document.getElementById(STYLE_ID);
if (oldStyle) oldStyle.remove();


if (
    !window.sfuAudioGuide ||
    !window.sfuAudioGuide.audio
) {
    console.log("Аудиогид ещё не создан");
    return;
}

var audio = window.sfuAudioGuide.audio;


/* =========================================================
   СТИЛИ
========================================================= */

var style = document.createElement("style");

style.id = STYLE_ID;

style.textContent = `

#${BUTTON_ID} {

    position: fixed;

    left: 20px;
    bottom: 20px;

    width: 20px;
    height: 20px;

    z-index: 2147483100;

    padding: 0;
    margin: 0;

    border: none;
    outline: none;

    border-radius: 50%;

    background: #e2e1dd;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

}


/* Audio paper backing: preserve button coordinates and icon size. */
@media(min-width:700px){
#${BUTTON_ID}{background:transparent;border-radius:0;isolation:isolate}
#${BUTTON_ID}::before{content:'';position:absolute;width:78px;height:66px;left:50%;top:50%;transform:translate(-50%,-50%);background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iX9Ch0LvQvtC5XzIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzAuMTUgNTkiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJf0KHQu9C+0LlfMS0yIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzAuMTUsM2MtMS4wOCwzLTQuNTksNTYtNC41OSw1Nkg5LjU0TDAsMGw3MC4xNSwzWiIvPgogIDwvZz4KPC9zdmc+') center / contain no-repeat;pointer-events:none;z-index:-1}
}

/* Иконка целиком */

#${BUTTON_ID} .sound-svg {

    width: 15px;
    height: 15px;

    display: block;

    opacity: 0.62;

    transition: opacity 0.25s ease;

}


#${BUTTON_ID}:hover .sound-svg {

    opacity: 1;

}


/* Общий стиль линий */

#${BUTTON_ID} .sound-svg path,
#${BUTTON_ID} .sound-svg line {

    fill: none;

    stroke: #d8561f;

    stroke-width: 2;

    stroke-linecap: round;
    stroke-linejoin: round;

}


/* Корпус динамика */

#${BUTTON_ID} .speaker-body {

    fill: #d8561f !important;

    stroke: none !important;

}


/* Скрываем элементы */

#${BUTTON_ID} .hidden {

    display: none;

}

`;

document.head.appendChild(style);


/* =========================================================
   СОЗДАЁМ КНОПКУ
========================================================= */

var button = document.createElement("button");

button.id = BUTTON_ID;
button.type = "button";


/* =========================================================
   SVG-ИКОНКА

   Аккуратный динамик:
   слева корпус,
   справа волны либо крестик.
========================================================= */

var svgNS = "http://www.w3.org/2000/svg";

var svg = document.createElementNS(svgNS, "svg");

svg.setAttribute("class", "sound-svg");
svg.setAttribute("viewBox", "0 0 32 32");


/* -------------------------
   КОРПУС ДИНАМИКА
------------------------- */

var speaker = document.createElementNS(svgNS, "path");

speaker.setAttribute("class", "speaker-body");

speaker.setAttribute(
    "d",
    "M5 13 H10 L16 8 V24 L10 19 H5 Z"
);

svg.appendChild(speaker);


/* =========================================================
   ВОЛНЫ ЗВУКА
========================================================= */

var wave1 = document.createElementNS(svgNS, "path");

wave1.setAttribute(
    "d",
    "M19 12.5 C21 14.2 21 17.8 19 19.5"
);

svg.appendChild(wave1);


var wave2 = document.createElementNS(svgNS, "path");

wave2.setAttribute(
    "d",
    "M22 9.5 C26 13 26 19 22 22.5"
);

svg.appendChild(wave2);


/* =========================================================
   КРЕСТИК MUTE
========================================================= */

var cross1 = document.createElementNS(svgNS, "line");

cross1.setAttribute("x1", "20");
cross1.setAttribute("y1", "12");

cross1.setAttribute("x2", "27");
cross1.setAttribute("y2", "20");

cross1.classList.add("hidden");


var cross2 = document.createElementNS(svgNS, "line");

cross2.setAttribute("x1", "27");
cross2.setAttribute("y1", "12");

cross2.setAttribute("x2", "20");
cross2.setAttribute("y2", "20");

cross2.classList.add("hidden");


svg.appendChild(cross1);
svg.appendChild(cross2);


button.appendChild(svg);

document.body.appendChild(button);


/* =========================================================
   ОБНОВЛЯЕМ ВИД
========================================================= */

window.addEventListener("sfu-audio-state", updateIcon);

function updateIcon(){

    if (window.sfuAudioGuide.isPaused()) {

        /* ПАУЗА:
           динамик + крестик */

        wave1.classList.add("hidden");
        wave2.classList.add("hidden");

        cross1.classList.remove("hidden");
        cross2.classList.remove("hidden");

    } else {

        /* ИГРАЕТ:
           динамик + звуковые волны */

        cross1.classList.add("hidden");
        cross2.classList.add("hidden");

        wave1.classList.remove("hidden");
        wave2.classList.remove("hidden");

    }

}


/* =========================================================
   КЛИК
========================================================= */

button.addEventListener("click", function(){

    /*
       НЕ выключаем громкость.

       Твой toggle() ставит Audio на pause(),
       а повторным нажатием продолжает с того же места.
    */

    window.sfuAudioGuide.toggle();

});


/* =========================================================
   СИНХРОНИЗАЦИЯ
========================================================= */

audio.addEventListener(
    "play",
    updateIcon
);

audio.addEventListener(
    "pause",
    updateIcon
);

audio.addEventListener(
    "ended",
    updateIcon
);


updateIcon();

})();
		"";(function(){

var BUTTON_ID = "sfu-audio-button";
var STYLE_ID = "sfu-audio-button-style";

var oldButton = document.getElementById(BUTTON_ID);
if (oldButton) oldButton.remove();

var oldStyle = document.getElementById(STYLE_ID);
if (oldStyle) oldStyle.remove();


if (
    !window.sfuAudioGuide ||
    !window.sfuAudioGuide.audio
) {
    console.log("Аудиогид ещё не создан");
    return;
}

var audio = window.sfuAudioGuide.audio;


/* =========================================================
   СТИЛИ
========================================================= */

var style = document.createElement("style");

style.id = STYLE_ID;

style.textContent = `

#${BUTTON_ID} {

    position: fixed;

    left: 80px;
    bottom: 50px;

    width: 52px;
    height: 52px;

    z-index: 2147483100;

    padding: 0;
    margin: 0;

    border: none;
    outline: none;

    border-radius: 50%;

    background: #e2e1dd;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

}


/* Audio paper backing: preserve button coordinates and icon size. */
@media(min-width:700px){
#${BUTTON_ID}{background:transparent;border-radius:0;isolation:isolate}
#${BUTTON_ID}::before{content:'';position:absolute;width:78px;height:66px;left:50%;top:50%;transform:translate(-50%,-50%);background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iX9Ch0LvQvtC5XzIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzAuMTUgNTkiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJf0KHQu9C+0LlfMS0yIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzAuMTUsM2MtMS4wOCwzLTQuNTksNTYtNC41OSw1Nkg5LjU0TDAsMGw3MC4xNSwzWiIvPgogIDwvZz4KPC9zdmc+') center / contain no-repeat;pointer-events:none;z-index:-1}
}

/* Иконка целиком */

#${BUTTON_ID} .sound-svg {

    width: 27px;
    height: 27px;

    display: block;

    opacity: 0.62;

    transition: opacity 0.25s ease;

}


#${BUTTON_ID}:hover .sound-svg {

    opacity: 1;

}


/* Общий стиль линий */

#${BUTTON_ID} .sound-svg path,
#${BUTTON_ID} .sound-svg line {

    fill: none;

    stroke: #d8561f;

    stroke-width: 2;

    stroke-linecap: round;
    stroke-linejoin: round;

}


/* Корпус динамика */

#${BUTTON_ID} .speaker-body {

    fill: #d8561f !important;

    stroke: none !important;

}


/* Скрываем элементы */

#${BUTTON_ID} .hidden {

    display: none;

}

`;

document.head.appendChild(style);


/* =========================================================
   СОЗДАЁМ КНОПКУ
========================================================= */

var button = document.createElement("button");

button.id = BUTTON_ID;
button.type = "button";


/* =========================================================
   SVG-ИКОНКА

   Аккуратный динамик:
   слева корпус,
   справа волны либо крестик.
========================================================= */

var svgNS = "http://www.w3.org/2000/svg";

var svg = document.createElementNS(svgNS, "svg");

svg.setAttribute("class", "sound-svg");
svg.setAttribute("viewBox", "0 0 32 32");


/* -------------------------
   КОРПУС ДИНАМИКА
------------------------- */

var speaker = document.createElementNS(svgNS, "path");

speaker.setAttribute("class", "speaker-body");

speaker.setAttribute(
    "d",
    "M5 13 H10 L16 8 V24 L10 19 H5 Z"
);

svg.appendChild(speaker);


/* =========================================================
   ВОЛНЫ ЗВУКА
========================================================= */

var wave1 = document.createElementNS(svgNS, "path");

wave1.setAttribute(
    "d",
    "M19 12.5 C21 14.2 21 17.8 19 19.5"
);

svg.appendChild(wave1);


var wave2 = document.createElementNS(svgNS, "path");

wave2.setAttribute(
    "d",
    "M22 9.5 C26 13 26 19 22 22.5"
);

svg.appendChild(wave2);


/* =========================================================
   КРЕСТИК MUTE
========================================================= */

var cross1 = document.createElementNS(svgNS, "line");

cross1.setAttribute("x1", "20");
cross1.setAttribute("y1", "12");

cross1.setAttribute("x2", "27");
cross1.setAttribute("y2", "20");

cross1.classList.add("hidden");


var cross2 = document.createElementNS(svgNS, "line");

cross2.setAttribute("x1", "27");
cross2.setAttribute("y1", "12");

cross2.setAttribute("x2", "20");
cross2.setAttribute("y2", "20");

cross2.classList.add("hidden");


svg.appendChild(cross1);
svg.appendChild(cross2);


button.appendChild(svg);

document.body.appendChild(button);


/* =========================================================
   ОБНОВЛЯЕМ ВИД
========================================================= */

window.addEventListener("sfu-audio-state", updateIcon);

function updateIcon(){

    if (window.sfuAudioGuide.isPaused()) {

        /* ПАУЗА:
           динамик + крестик */

        wave1.classList.add("hidden");
        wave2.classList.add("hidden");

        cross1.classList.remove("hidden");
        cross2.classList.remove("hidden");

    } else {

        /* ИГРАЕТ:
           динамик + звуковые волны */

        cross1.classList.add("hidden");
        cross2.classList.add("hidden");

        wave1.classList.remove("hidden");
        wave2.classList.remove("hidden");

    }

}


/* =========================================================
   КЛИК
========================================================= */

button.addEventListener("click", function(){

    /*
       НЕ выключаем громкость.

       Твой toggle() ставит Audio на pause(),
       а повторным нажатием продолжает с того же места.
    */

    window.sfuAudioGuide.toggle();

});


/* =========================================================
   СИНХРОНИЗАЦИЯ
========================================================= */

audio.addEventListener(
    "play",
    updateIcon
);

audio.addEventListener(
    "pause",
    updateIcon
);

audio.addEventListener(
    "ended",
    updateIcon
);


updateIcon();

})();
		"";window.sfuPaperGalleryAlbums={"library":{"title":"БИБЛИОТЕКА","assets":["gallery_library_01","gallery_library_02","gallery_library_03","gallery_library_04","gallery_library_05","gallery_library_06","gallery_library_07","gallery_library_08","gallery_library_09","gallery_library_10","gallery_library_11","gallery_library_12","gallery_library_13","gallery_library_14"]},"dashi":{"title":"«Трансформация»","assets":["gallery_dashi_01","gallery_dashi_02","gallery_dashi_03","gallery_dashi_04"]},"inig":{"title":"ИНиГ","assets":["gallery_inig_01","gallery_inig_02","gallery_inig_03","gallery_inig_04","gallery_inig_05","gallery_inig_06","gallery_inig_07"]},"ifksit":{"title":"Спорткомплекс","assets":["gallery_ifksit_01","gallery_ifksit_02","gallery_ifksit_03","gallery_ifksit_04","gallery_ifksit_05"]},"well":{"title":"«Колодцы»","assets":["gallery_well_01","gallery_well_02","gallery_well_03","gallery_well_04","gallery_well_05","gallery_well_06","gallery_well_07","gallery_well_08","gallery_well_09","gallery_well_10","gallery_well_11"]},"dorm":{"title":"ОБЩЕЖИТИЯ","assets":["gallery_dorm_01","gallery_dorm_02","gallery_dorm_03"]},"pyramid":{"title":"«Пирамида»","assets":["gallery_pyramid_01","gallery_pyramid_02","gallery_pyramid_03","gallery_pyramid_04","gallery_pyramid_05","gallery_pyramid_06","gallery_pyramid_07","gallery_pyramid_08"]},"stadium":{"title":"СТАДИОН","assets":["gallery_stadium_01","gallery_stadium_02","gallery_stadium_03","gallery_stadium_04"]}};
window.sfuPaperGalleryNodes={"node18":"library","node1":"library","node2":"dashi","node16":"inig","node3":"inig","node19":"ifksit","node4":"ifksit","node20":"well","node5":"well","node21":"dorm","node6":"dorm","node22":"pyramid","node7":"pyramid","node23":"stadium","node8":"stadium","node10":"library","node24":"dashi","node11":"inig","node12":"ifksit","node13":"well","node14":"dorm","node15":"pyramid","node9":"stadium"};
window.sfuPaperGalleryAlbums["library_2011"]=window.sfuPaperGalleryAlbums.library;
window.sfuPaperGalleryAlbums["library_2026"]=window.sfuPaperGalleryAlbums.library;
window.sfuPaperGalleryAlbums["well_2011"]=window.sfuPaperGalleryAlbums.well;
window.sfuPaperGalleryAlbums["well_2026"]=window.sfuPaperGalleryAlbums.well;
window.sfuPaperGalleryAlbums["inig_2026"]=window.sfuPaperGalleryAlbums.inig;
window.sfuPaperGalleryAlbums["inig_2011"]=window.sfuPaperGalleryAlbums.inig;
window.sfuPaperGalleryAlbums["ifksit_2026"]=window.sfuPaperGalleryAlbums.ifksit;
window.sfuPaperGalleryAlbums["ifksit_2011"]=window.sfuPaperGalleryAlbums.ifksit;
window.sfuPaperGalleryAlbums["dorm_2026"]=window.sfuPaperGalleryAlbums.dorm;
window.sfuPaperGalleryAlbums["dorm_2011"]=window.sfuPaperGalleryAlbums.dorm;
window.sfuPaperGalleryAlbums["pyramid_2011"]=window.sfuPaperGalleryAlbums.pyramid;
window.sfuPaperGalleryAlbums["pyramid_2026"]=window.sfuPaperGalleryAlbums.pyramid;
window.sfuPaperGalleryAlbums["stadium_2026"]=window.sfuPaperGalleryAlbums.stadium;
window.sfuPaperGalleryAlbums["stadium_2011"]=window.sfuPaperGalleryAlbums.stadium;
window.sfuPaperGalleryAlbums["dashi_2026"]=window.sfuPaperGalleryAlbums.dashi;
window.sfuPaperGalleryAlbums["library_future"]=window.sfuPaperGalleryAlbums.library;
window.sfuPaperGalleryAlbums["well_future"]=window.sfuPaperGalleryAlbums.well;
window.sfuPaperGalleryAlbums["dashi_future"]=window.sfuPaperGalleryAlbums.dashi;
window.sfuPaperGalleryAlbums["pyramid_future"]=window.sfuPaperGalleryAlbums.pyramid;
window.sfuPaperGalleryAlbums["inig_future"]=window.sfuPaperGalleryAlbums.inig;
window.sfuPaperGalleryAlbums["ifksit_future"]=window.sfuPaperGalleryAlbums.ifksit;
window.sfuPaperGalleryAlbums["stadium_future"]=window.sfuPaperGalleryAlbums.stadium;
window.sfuPaperGalleryAlbums["dorm_future"]=window.sfuPaperGalleryAlbums.dorm;
window.sfuPaperGalleryAlbums["images/IMG_1048.jpg"]=window.sfuPaperGalleryAlbums.library;
(function () {
  'use strict';
  if (window.sfuPaperGallery) return;
  var style = document.createElement('style');
  style.textContent = `
.gallery_hotspot{cursor:pointer!important;filter:drop-shadow(0 3px 5px #0005)}
.gallery_hotspot:focus-visible{outline:3px solid #d8561f;outline-offset:4px}
.gallery_hotspot > img{transform-origin:center;transition:transform 180ms ease}
@media(hover:hover) and (pointer:fine){.gallery_hotspot:hover > img{transform:scale(1.1)}}
.gallery_hotspot:focus-visible > img{transform:scale(1.1)}
@media(prefers-reduced-motion:reduce){.gallery_hotspot > img{transition:none}}

#sfu-paper-gallery{position:fixed;inset:0;z-index:2147483000;box-sizing:border-box;max-width:none;max-height:none;width:100%;height:100%;margin:0;padding:24px;border:0;background:#232426db;color:#242527;overflow:auto}
#sfu-paper-gallery[open]{display:flex;align-items:center;justify-content:center}
#sfu-paper-gallery::backdrop{background:#232426cc}
#sfu-paper-gallery *{box-sizing:border-box}
#sfu-paper-gallery .pg-paper{position:relative;width:min(980px,100%);padding:48px 70px 96px 55px;background:transparent;box-shadow:none;isolation:isolate}
#sfu-paper-gallery .pg-paper:before{content:'';position:absolute;inset:0;background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iX9Ch0LvQvtC5XzIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgODExLjYzIDQ5MiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNlMWUwZGM7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJf0KHQu9C+0LlfMS0yIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiPgogICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ijc4MS42MyA0OTIgODExLjYzIDIyNSA3MzIuNjMgMzcgMjQ2LjYzIDAgMjYuNjMgNiAwIDE0NS4xNiAzNy4zNiAzNTYuMjIgNDguNjMgNDYwIDI1NC42MyA0NjAgNzgxLjYzIDQ5MiIvPgogICAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjQzLjYzIDI1IDcuNjMgMjMxIDI1LjYzIDQzNC42MSA0NDAuMDcgNDM0LjYxIDc1Ny42MyA0NjAgNzkxLjU2IDMxOC45MiA3NTkuNjMgMTMwIDc5MS41NiAyNSA1NDguNzQgNi4wMSA0My42MyAyNSIvPgogIDwvZz4KPC9zdmc+') center / 100% 100% no-repeat;z-index:-1;pointer-events:none}
#sfu-paper-gallery .pg-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:14px}
#sfu-paper-gallery h2{font-family:Pobeda,'Arial Narrow',sans-serif;font-size:clamp(26px,5vw,44px);font-weight:400;line-height:1;margin:0;overflow-wrap:anywhere}
#sfu-paper-gallery button{flex-shrink:0;border:0;border-radius:0;background:#d8561f;color:#fff;padding:8px 16px;min-width:48px;min-height:48px;font:26px Arial,sans-serif;cursor:pointer;clip-path:polygon(3% 0,100% 4%,96% 100%,0 94%)}
#sfu-paper-gallery button:hover{background:#242527}
#sfu-paper-gallery button:focus-visible{outline:3px solid #242527;outline-offset:-5px}
#sfu-paper-gallery button:disabled{opacity:.3;cursor:default}
#sfu-paper-gallery .pg-stage{height:min(61vh,610px);min-height:120px;display:flex;align-items:center;justify-content:center;background:#e1e0dc;position:relative;touch-action:pan-y}
#sfu-paper-gallery img{display:block;width:100%;height:100%;object-fit:contain}
#sfu-paper-gallery .pg-message{position:absolute;padding:24px;text-align:center;color:#242527;font:16px/1.5 Arial,sans-serif;white-space:pre-line}
#sfu-paper-gallery .pg-foot{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:16px}
#sfu-paper-gallery .pg-count{font:16px Arial,sans-serif;text-align:center;white-space:pre-line}
@media(min-width:700px){#sfu-paper-gallery .pg-paper{display:grid;grid-template-columns:minmax(0,1fr);grid-template-rows:auto auto auto}#sfu-paper-gallery .pg-head{grid-column:1;grid-row:1}#sfu-paper-gallery .pg-stage{grid-column:1;grid-row:2;padding:0 60px}#sfu-paper-gallery .pg-foot{display:contents}#sfu-paper-gallery .pg-prev,#sfu-paper-gallery .pg-next{grid-column:1;grid-row:2;align-self:center;z-index:1}#sfu-paper-gallery .pg-prev{justify-self:start;margin-left:6px}#sfu-paper-gallery .pg-next{justify-self:end;margin-right:6px}#sfu-paper-gallery .pg-count{grid-column:1;grid-row:3;justify-self:center;margin-top:16px}}
@media(max-width:699px){#sfu-paper-gallery{padding:16px}#sfu-paper-gallery .pg-paper{padding:44px 32px 96px 26px;box-shadow:none}#sfu-paper-gallery .pg-paper:before{inset:0}#sfu-paper-gallery .pg-stage{height:48vh}}
`;
  document.head.appendChild(style);
  var dialog = document.createElement('dialog');
  dialog.id = 'sfu-paper-gallery';
  dialog.setAttribute('aria-labelledby', 'pg-title');
  dialog.innerHTML = '<section class="pg-paper"><header class="pg-head"><h2 id="pg-title">ФОТОГРАФИИ</h2><button type="button" class="pg-close" aria-label="Закрыть галерею">×</button></header><div class="pg-stage"><img alt=""><div class="pg-message" role="status"></div></div><footer class="pg-foot"><button type="button" class="pg-prev" aria-label="Предыдущее фото">←</button><div class="pg-count" aria-live="polite"></div><button type="button" class="pg-next" aria-label="Следующее фото">→</button></footer></section>';
  document.body.appendChild(dialog);
  var photo = dialog.querySelector('img'), message = dialog.querySelector('.pg-message');
  var count = dialog.querySelector('.pg-count'), prev = dialog.querySelector('.pg-prev'), next = dialog.querySelector('.pg-next');
  var list = [], index = 0, opener = null, startX = null, startY = null;
  function render() {
    prev.disabled = next.disabled = list.length < 2;
    photo.hidden = !list.length;
    photo.style.visibility = 'hidden';
    message.hidden = false;
    count.textContent = list.length ? (index + 1) + ' / ' + list.length : 'ФОТОГРАФИИ';
    if (!list.length) { photo.removeAttribute('src'); message.textContent = 'Фотографии пока не добавлены'; return; }
    message.textContent = 'Загрузка фотографии…';
    photo.alt = 'Фотография ' + (index + 1) + ' из ' + list.length;
    photo.src = list[index];
  }
  photo.onload = function () { message.hidden = true; photo.style.visibility = 'visible'; };
  photo.onerror = function () { message.hidden = false; message.textContent = 'Не удалось загрузить фотографию.\nПопробуйте следующий снимок.'; };
  function move(step) { if (list.length) { index = (index + step + list.length) % list.length; render(); } }
  function close() { dialog.close(); if (opener && opener.isConnected) opener.focus({preventScroll:true}); }
  function open(source, title, trigger) {
    var albums = window.sfuPaperGalleryAlbums || {};
    var key = String(source || '').trim();
    if ((!key || key.indexOf('$(') !== -1 || !albums[key]) && typeof player !== 'undefined' && typeof player.getCurrentNode === 'function') {
      key = (window.sfuPaperGalleryNodes || {})[player.getCurrentNode()] || '';
    }
    if (albums[key]) {
      source = albums[key].assets.map(function (id) {
        var asset = document.querySelector('.' + id);
        var img = asset && (asset.tagName === 'IMG' ? asset : asset.querySelector('img'));
        return img ? img.src : 'images/' + id + '.svg';
      }).join('|');
      if (!title || title.indexOf('$(') !== -1) title = albums[key].title;
    }
    list = String(source || '').split(/[|\n\r]+/).map(function (s) { return s.trim(); }).filter(function (s) {
      if (!s || s.indexOf('$(') !== -1) return false;
      try { return /^(https?:|file:)$/.test(new URL(s, document.baseURI).protocol); } catch (_) { return false; }
    });
    index = 0; opener = trigger || document.activeElement;
    dialog.querySelector('h2').textContent = title && title.indexOf('$(') === -1 ? title : 'ФОТОГРАФИИ';
    var host = document.fullscreenElement || document.body;
    if (!host.contains(dialog)) host.appendChild(dialog);
    if (!dialog.open) dialog.show();
    render(); dialog.querySelector('.pg-close').focus();
  }
  dialog.querySelector('.pg-close').onclick = close;
  prev.onclick = function () { move(-1); }; next.onclick = function () { move(1); };
  dialog.addEventListener('click', function (e) { if (e.target === dialog) close(); e.stopPropagation(); });
  dialog.addEventListener('cancel', function (e) { e.preventDefault(); close(); });
  dialog.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') { e.preventDefault(); move(e.key === 'ArrowLeft' ? -1 : 1); }
    e.stopPropagation();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && dialog.open) { e.preventDefault(); close(); } });
  dialog.querySelector('.pg-stage').addEventListener('pointerdown', function (e) { startX = e.clientX; startY = e.clientY; });
  dialog.querySelector('.pg-stage').addEventListener('pointerup', function (e) {
    if (startX !== null && Math.abs(e.clientX-startX)>50 && Math.abs(e.clientX-startX)>Math.abs(e.clientY-startY)) move(e.clientX<startX?1:-1);
    startX = startY = null;
  });
  function activate(button) {
    var root = button.closest('.sfu-gallery-hotspot');
    var source = root && root.querySelector('.sfu-gallery-source');
    var title = root && root.querySelector('.sfu-gallery-title');
    open(source ? source.textContent : '', title ? title.textContent : '', button);
  }
  // Pano2VR consumes touch events and suppresses the synthetic mouse click.
  // Handle taps on gallery buttons before they reach the panorama controls.
  var galleryTouch = null;
  document.addEventListener('touchstart', function (e) {
    var button = e.target.closest && e.target.closest('.gallery_hotspot');
    if (!button) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (e.touches.length !== 1) { galleryTouch = null; return; }
    var t = e.touches[0];
    galleryTouch = {button:button,id:t.identifier,x:t.clientX,y:t.clientY,time:Date.now(),moved:false};
  }, {capture:true,passive:false});
  document.addEventListener('touchmove', function (e) {
    if (!galleryTouch) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (e.touches.length !== 1) { galleryTouch.moved = true; return; }
    var t = e.touches[0];
    if (Math.abs(t.clientX-galleryTouch.x)>12 || Math.abs(t.clientY-galleryTouch.y)>12) galleryTouch.moved = true;
  }, {capture:true,passive:false});
  document.addEventListener('touchend', function (e) {
    if (!galleryTouch) return;
    e.preventDefault(); e.stopImmediatePropagation();
    var tap = galleryTouch; galleryTouch = null;
    var t = Array.prototype.find.call(e.changedTouches,function(t){return t.identifier===tap.id;});
    if (t && !tap.moved && Date.now()-tap.time<750 && Math.abs(t.clientX-tap.x)<=12 && Math.abs(t.clientY-tap.y)<=12 && tap.button.isConnected) activate(tap.button);
  }, {capture:true,passive:false});
  document.addEventListener('touchcancel', function () { galleryTouch = null; }, true);

  document.addEventListener('click', function (e) {
    var button = e.target.closest && e.target.closest('.gallery_hotspot');
    if (!button) return;
    e.preventDefault(); e.stopImmediatePropagation(); activate(button);
  }, true);
  document.addEventListener('keydown', function (e) {
    var button = e.target.closest && e.target.closest('.gallery_hotspot');
    if (button && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); e.stopImmediatePropagation(); activate(button); }
  }, true);
  function accessibleButtons() { document.querySelectorAll('.gallery_hotspot').forEach(function (b) {
    if (b.getAttribute('role') !== 'button') { b.setAttribute('role', 'button'); b.setAttribute('tabindex', '0'); b.setAttribute('aria-label', 'Открыть фотографии'); }
  }); }
  new MutationObserver(accessibleButtons).observe(document.body, {childList:true,subtree:true});
  accessibleButtons();
  window.sfuPaperGallery = {open:open,close:close};
})();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_gallery(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_gallery=document.createElement('div');
		el.ggId="ht_gallery";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot sfu-gallery-hotspot";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 900px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_gallery.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_gallery.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_gallery.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_gallery.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_gallery.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_gallery.ggUpdatePosition=function (useTransition) {
		}
		el=me._gallery_paper_button=document.createElement('div');
		els=me._gallery_paper_button__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzYgNzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSIjZDg1NjFmIiBkPSJNMTAgOSA3MCAxNCA2NiA3MyA1IDY2WiIvPgogPHBhdGggZmlsbD0iI2UxZTBkYyIgZD0iTTQgNCA2NiAxIDcyIDYyIDExIDY5WiIvPgogPGcgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iIzI0MjUyNyI+CiAgPHBhdGggZD0iTTE5IDE5IDU1IDE3IDU4IDQ5IDIyIDUyWiIvPgogIDxwYXRoIGQ9Im0yMyA0MyA5LTEzIDkgOCA2LTcgOSAxMyIvPgogIDxjaXJjbGUgY3g9IjQ2Ii'+
			'ByPSIzIiBjeT0iMjUiLz4KIDwvZz4KIDxwYXRoIGQ9Im0yNiA1OCAyMy0yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iI2Q4NTYxZiIvPgo8L3N2Zz4K';
		me._gallery_paper_button__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="gallery_paper_button";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg gallery_hotspot";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 76px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._gallery_paper_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._gallery_paper_button.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_gallery.appendChild(me._gallery_paper_button);
		el=me._gallery_photo_paths=document.createElement('div');
		els=me._gallery_photo_paths__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_photo_paths";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text sfu-gallery-source";
		el.ggType='text';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		hs+='display:none!important;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(36,37,39,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.url;
		el.appendChild(els);
		me._gallery_photo_paths.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._gallery_photo_paths.ggUpdatePosition=function (useTransition) {
		}
		me._ht_gallery.appendChild(me._gallery_photo_paths);
		el=me._gallery_photo_title=document.createElement('div');
		els=me._gallery_photo_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery_photo_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text sfu-gallery-title";
		el.ggType='text';
		hs ='';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:none;';
		hs+='display:none!important;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(36,37,39,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._gallery_photo_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._gallery_photo_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_gallery.appendChild(me._gallery_photo_title);
		me.__div = me._ht_gallery;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_gallery';
			hsinst = new SkinHotspotClass_ht_gallery(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_gallery']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_gallery'].length; i++) {
				hotspotTemplates['ht_gallery'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@font-face { font-family: "Pobeda"; src: url("data:font/woff2;base64,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") /* SFU_POBEDA_EMBEDDED_V1 */ format("woff2"); font-weight: 400; font-style: normal; font-display: block; } /* Let panorama hotspots receive clicks through empty responsive wrappers. */ .desktop_ui > *, .tablet_ui > *, .mobile_ui > * { pointer-events: auto; }'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};