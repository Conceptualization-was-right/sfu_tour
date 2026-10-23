// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: orangetry gallery 56.ggsk
// Generated 2026-10-20T17:22:55

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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExODggMzIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMzNDEgMTEzNy41MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMyNDcgMTM3MC42OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExNTEgMzIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDcxMyAyMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm'+
			'9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZTFlMGRjOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI0IDguNTEgMCAyMTkgMjkxIDIwNC4zIDQzNCAyMDMuNTIgNjMyIDE4MS44NiA3MTMgMTc3Ljk5IDcwMiAwIDI0IDguNTEiLz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy0zIiB5Mj0iMzkuNSIgeDI9IjIxMC41MyIgeTE9IjM5LjUiIHgxPSIxNTAuNSIvPgogICA8cG9seWdvbiBj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDc4LjgyIDE0LjAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPS'+
			'JtNy4xNCwxMS40OVYyLjA4aC0yLjcydjMuMzFjMCw0Ljc5LTEuMTcsNi4xLTMuNTQsNi4xaC0uODh2LTEuOThoLjMyYzEuMTQsMCwxLjk1LS42NywxLjk1LTQuMjRWLjFoNy4wOXYxMS40aC0yLjIyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xOC45LDEwLjM5Yy0uNzcuNzctMS43MywxLjItMy4wNCwxLjJzLTIuMjktLjQzLTMuMDYtMS4yYy0xLjE0LTEuMTQtMS4xNS0yLjQyLTEuMTUtNC41OXMuMDItMy40NiwxLjE1LTQuNTljLjc3LS43NywxLjc1LTEuMiwzLjA2LTEuMnMyLjI3LjQzLDMuMDQsMS4yYzEuMTQsMS4xNCwxLjE3LDIuNDIsMS4xNyw0LjU5cy0uMDMsMy40Ni0xLjE3'+
			'LDQuNTlabS0xLjYyLTcuNzljLS4zMi0uMzctLjgyLS42MS0xLjQyLS42MXMtMS4xLjI0LTEuNDQuNjFjLS40Mi40OC0uNTQsMS4wMi0uNTQsMy4ycy4xMywyLjcxLjU0LDMuMTljLjM0LjM3LjgzLjYyLDEuNDQuNjJzMS4xLS4yNiwxLjQyLS42MmMuNDItLjQ4LjU2LTEuMDEuNTYtMy4xOXMtLjE0LTIuNzItLjU2LTMuMloiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMjIuMzcsMTEuNDlWLjFoMi4yMnYxMS40aC0yLjIyWm02LjI0LDBsLTQtNS45N0wyOC4yOS4xaDIuNjZsLTMuODMsNS4zNSw0LjIxLDYuMDVoLTIuNzJaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTM5LjQ3LD'+
			'ExLjQ5bC0uNjctMi4wMmgtNC4wNWwtLjY5LDIuMDJoLTIuMzJMMzUuODkuMWgxLjc1bDQuMTYsMTEuNGgtMi4zMlptLTIuNjYtOC4wNGwtMS40NCw0LjE1aDIuODNsLTEuMzktNC4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNTAuNjksMTQuMDJ2LTIuNTNoLTcuNDlWLjFoMi4yM3Y5LjQxaDMuODZWLjFoMi4yMnY5LjQxaDEuMzN2NC41MWgtMi4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjEuMDEsMTEuNDl2LTcuMzFsLTQuNDMsNy4zMWgtMS45OVYuMWgyLjIzdjcuM0w2MS4yNS4xaDEuOTh2MTEuNGgtMi4yMloiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBk'+
			'PSJtNjcuNzEsMTEuNDloLTIuNjRsMi4zNS00Ljc0Yy0xLjItLjU0LTEuOTUtMS42Ni0xLjk1LTMuMTEsMC0yLjE4LDEuNTUtMy41NSwzLjc1LTMuNTVoNC40MnYxMS40aC0yLjIydi00LjI5aC0xLjgybC0xLjg3LDQuMjlabTMuNy05LjQ0aC0yLjA4Yy0uOTksMC0xLjY1LjYyLTEuNjUsMS41N3MuNjYsMS42MiwxLjY1LDEuNjJoMi4wOHYtMy4xOVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzYuNDUsNy4xNXYtMi4zN2gyLjM3djIuMzdoLTIuMzdabTAsNC4zNHYtMi4zN2gyLjM3djIuMzdoLTIuMzdaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDk1LjYgMTU2LjMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L'+
			'7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTQ4LjY4LDEzMy42YzAsNi45LTEuNTEsMTIuMzItNC41MSwxNi4yOC0zLjAxLDMuOTYtOC4yNSw1Ljk0LTE1LjczLDUuOTRoLTcuNDhjLTcuNDgsMC0xMi43Ni0xLjk4LTE1Ljg0LTUuOTRzLTQuNjItOS4zOC00LjYyLTE2LjI4VjIyLjk0YzAtNy4wNCwxLjU0LTEyLjU0LDQuNjItMTYuNVMxMy40OC41LDIwLjk2LjVoNy40OGM3LjQ4LDAsMTIuNzIsMS45OCwxNS43Myw1Ljk0LDMsMy45Niw0LjUxLDkuNDYsNC41MSwxNi41djExMC42NlptLTYuNi0xMTEuOThjMC0zLjgxLS45OS03LjE4LTIu'+
			'OTctMTAuMTItMS45OC0yLjkzLTUuMzItNC40LTEwLjAxLTQuNGgtOS4wMmMtNC43LDAtOC4wMywxLjQ3LTEwLjAxLDQuNC0xLjk4LDIuOTQtMi45Nyw2LjMxLTIuOTcsMTAuMTJ2MTEzLjA4YzAsMy44Mi45OSw3LjE5LDIuOTcsMTAuMTIsMS45OCwyLjk0LDUuMzEsNC40LDEwLjAxLDQuNGg5LjAyYzQuNjksMCw4LjAzLTEuNDYsMTAuMDEtNC40LDEuOTgtMi45MywyLjk3LTYuMywyLjk3LTEwLjEyVjIxLjYyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im05NS4xLDEuODJ2MTUyLjY4aC02LjZWOC40MmgtMTguOTJWMS44MmgyNS41MloiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDM4MS45IDcyNi4zNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQogICAgPC9zdHlsZT4KID'+
			'wvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxnPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0zNzkuOSw4My4zNWMtNjIuNDYsMjkuMzItODEsMjguNTktODYsMjItNi44NC05LjAxLDcuOTYtMzMuODcsMjItNDgsMTMuMjctMTMuMzUsMzIuMDYtMjMuMzMsMzUtMjAsMy4zLDMuNzQtMTEuOTgsMjUuOC0zMSw0MS0zMC44MiwyNC42NC03Ni45NywzNS43LTg3LDIyLTYuMDgtOC4zLDYuMDYtMjYuODIsMy0yNS00NC41LDI2LjUtMTAwLjUsNzMuNS0xNzkuNSwxNzkuNS0xMS4wNywxNC44NS0zNy4xNyw1NS45Ny0zMS41LDg2LjUsMS45MSwx'+
			'MC4yNyw0LjcxLDI1LjQsMTUsMzEsMzUuMzksMTkuMjgsMTQ1LjQxLTgxLjg1LDEzMC0xMTMtNy40NC0xNS4wNC00NC4yNi0xNC4wNS02OS02LTY2LjU5LDIxLjY3LTExOC4wNSwxMTguMDEtOTIsMjAyLDIxLjAyLDY3Ljc4LDg5LjExLDExNi41MywxNjksMTE5Ii8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTMxLjE2LDI4MS43NWM0MS40OS00Ny42OSw3NC45MS04My43LDk2LjU4LTEwNi42MiwxMi4zNC0xMy4wNSw3My4zNi03Ny4zNiw5OS4zOS0xNDcuNTIsMy44NS0xMC4zOCw3LjIyLTIxLjY1LDQuMTQtMjQuNzctNi41OC02LjY5LTM4LjU5LDI4LjM0LTQ5Ljg1LDQwLjY3LTI3Ljc2LD'+
			'MwLjM5LTc2Ljg5LDk1LjIxLTE0NC4wMSwyNDEuNjgiLz4KICA8L2c+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzQuOSw3MjQuMzVjMjMuMjMtMTcuOTUsNTIuMTctMzcuNjEsODctNTYsMzguMjgtMjAuMjEsNzMuOTYtMzMuNzYsMTA0LTQzIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMwNS4xMSAxNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjI4MS41IiB5MT0iMTQxLjUiIHgxPSIxOTAuNSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjU0Ljc5IiB4Mj0iMTMuNSIgeTE9IjI4LjUiIHgxPSIxMy41Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNDEuNSIgeDI9IjI3LjQ3IiB5MT0iNDEuNSIgeDE9Ii41Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNDEuNSIgeDI9IjMwNC42MSIgeTE9IjQxLjUiIHgxPSIzNy4zOSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExMS4yOCAzMzkuNzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIzMzkuMjYiIHgyPSIxMTAuNzgiIHkxPSIyODQuMjYiIHgxPSIuNSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjIxOC45NiIgeDI9IjI3IiB5MT0iMTkwLjc2IiB4MT0iMjciLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIyMDQuODYiIHgyPSIxMi45IiB5MT0iMjA0Ljg2IiB4MT0iNDEuMSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9Ijc4LjA3IiB4Mj0iMjYuNzkiIHkxPSI0OS44NyIgeDE9IjI2Ljc5Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNjMuOTciIHgyPSIxMi42'+
			'OSIgeTE9IjYzLjk3IiB4MT0iNDAuODkiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI5MS41OSIgeDI9IjI3IiB5MT0iMTYxLjMyIiB4MT0iMjciLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjI3IiB5MT0iMzYuNDEiIHgxPSIyNyIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDEzMi42IDE0Ni42IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogMy42cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+Ci'+
			'A8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xMzAuOCwxLjhjLTIwLjg2LDEzLjkzLTQ3LjAyLDM0LjI5LTczLDYzQzMxLjQzLDkzLjkzLDEzLjYyLDEyMi40MiwxLjgsMTQ0LjgiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDIzOS42OCAxNTYuMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjEwMC4xMiIgeTE9IjE1NS43MyIgeDE9IjEwMC4xMiIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9Ijg5LjIzIiB4Mj0iMjM5LjE4IiB5MT0iODkuMjMiIHgxPSI1MC42MiIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9Ijg5LjMzIiB4Mj0iMjYuMDEiIHkxPSI4OS4zMyIgeDE9Ii41Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iMTAyLjA5IiB4Mj0iMTMuMjYiIHkxPSI3Ni41NyIgeDE9IjEzLjI2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDM2IDcwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxjaXJjbGUgY2'+
			'xhc3M9ImNscy0xIiByPSIxNyIgY3g9IjE3LjUiIGN5PSIxNy41Ii8+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIHI9IjE3IiBjeD0iMTgiIGN5PSIzNSIvPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiByPSIxNyIgY3g9IjE4LjUiIGN5PSI1Mi41Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDY4My43OCAxLjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIxIiB4Mj0iNjIuODMiIHkxPSIxIiB4MT0iLjUiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjY4My4yOCIgeTE9Ii41IiB4MT0iNTIzLjQxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='left : 13px;';
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
        translateY(260px);

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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDEyMC42IDE4Mi4zMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggY2xhc3M9Im'+
			'Nscy0xIiBkPSJtMzMuOTEsMTU5Ljc4di05LjQxaC0zLjg2djkuNDFoLTIuMjJ2LTExLjRoOC4zMXYxMS40aC0yLjIyWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMzguOTQsMTU5Ljc4di0xMS40aDcuNTF2MS45OGgtNS4yOHYyLjY3aDQuNXYxLjk4aC00LjV2Mi43N2g1LjI4djEuOThoLTcuNTFaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im01My4yLDE1NS40OWgtMi4xOXY0LjI5aC0yLjIydi0xMS40aDQuNDJjMi4zNywwLDMuNzYsMS42MiwzLjc2LDMuNTVzLTEuMzksMy41NS0zLjc2LDMuNTVabS0uMTEtNS4xMmgtMi4wOHYzLjEyaDIuMDhjMS4wMSwwLDEuNjUtLjYy'+
			'LDEuNjUtMS41NXMtLjY0LTEuNTctMS42NS0xLjU3WiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjYuNTUsMTU0LjU1Yy41LjUzLjcsMS4xNy43LDEuOTcsMCwyLTEuMzQsMy4yNy0zLjQ5LDMuMjdoLTQuNzd2LTExLjRoNC41OGMyLjE1LDAsMy41MiwxLjIyLDMuNTIsMy4xNCwwLDEuMDktLjQ2LDEuODktMS40MSwyLjQyLjQ1LjI0LjYyLjM3Ljg2LjYxWm0tMy4xNS0xLjU1Yy45MSwwLDEuNDctLjUsMS40Ny0xLjMxcy0uNTYtMS4zMS0xLjQ3LTEuMzFoLTIuMTh2Mi42MmgyLjE4Wm0uMTQsNC44Yy45MSwwLDEuNDktLjU0LDEuNDktMS40MXMtLjU4LTEuMzktMS40OS0xLjM5aC0yLj'+
			'MydjIuOGgyLjMyWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzQuMTYsMTU5Ljc4aC00LjQ4di0xMS40aDIuMjJ2NC4yOWgyLjI2YzIuMjIsMCwzLjcsMS40NywzLjcsMy41NXMtMS40OSwzLjU1LTMuNywzLjU1Wm0tLjE4LTUuMTJoLTIuMDh2My4xNGgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTdzLS42NC0xLjU3LTEuNjUtMS41N1ptNS4xMSw1LjEydi0xMS40aDIuMjN2MTEuNGgtMi4yM1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTkwLjU1LDE1OS43OHYtNy4zMWwtNC40Myw3LjMxaC0xLjk4di0xMS40aDIuMjJ2Ny4zbDQuNDMtNy4zaDEuOTh2MTEuNGgt'+
			'Mi4yM1ptLTIuMDgtMTJjLTEuMjYsMC0yLjUzLS41Ni0yLjU5LTIuMjloMS41N2MuMDUuNy40NS45OSwxLjAyLjk5cy45OC0uMjksMS4wMi0uOTloMS41N2MtLjA2LDEuNzMtMS4zMywyLjI5LTIuNTksMi4yOVoiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTcuMDMsMTc4LjQ3djEuMzloLTIuMjN2LTEuMzljLTMuMzktLjEzLTQuOC0xLjg0LTQuOC00Ljc0czEuNDEtNC41OSw0LjgtNC43NHYtMS4xMmgyLjIzdjEuMTJjMy4zOS4xNCw0LjgyLDEuODQsNC44Miw0Ljc0cy0xLjQyLDQuNjEtNC44Miw0Ljc0Wm0tMi4xOS03LjU5Yy0xLjkuMS0yLjYxLjk5LTIuNj'+
			'EsMi44NXMuNywyLjc3LDIuNjEsMi44NXYtNS43Wm0yLjE2LDB2NS43YzEuOTItLjA4LDIuNjItLjk5LDIuNjItMi44NXMtLjctMi43NS0yLjYyLTIuODVaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xMy44MiwxNzkuNzh2LTExLjRoNy41MXYxLjk4aC01LjI4djIuNjdoNC41djEuOThoLTQuNXYyLjc3aDUuMjh2MS45OGgtNy41MVoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTMxLjAzLDE4Mi4zMXYtMi41M2gtNi4zMnYyLjUzaC0yLjE1di00LjUxaDEuMDdjLjk0LTEuNDYsMS4zNi0zLjg3LDEuMzYtNi41di0yLjkxaDYuODd2OS40MWgxLjMxdjQuNTFoLTIuMTVabS0x'+
			'LjM5LTExLjk0aC0yLjUxdjEuNjVjMCwyLjI2LS4yMiw0LjE5LTEuMDEsNS43OGgzLjUydi03LjQzWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMzUuMSwxNzkuNzh2LTExLjRoNy41MXYxLjk4aC01LjI4djIuNjdoNC41djEuOThoLTQuNXYyLjc3aDUuMjh2MS45OGgtNy41MVoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTQ5LjM2LDE3NS40OWgtMi4xOXY0LjI5aC0yLjIydi0xMS40aDQuNDJjMi4zNywwLDMuNzYsMS42MiwzLjc2LDMuNTVzLTEuMzksMy41NS0zLjc2LDMuNTVabS0uMTEtNS4xMmgtMi4wOHYzLjEyaDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41NX'+
			'MtLjY0LTEuNTctMS42NS0xLjU3WiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjAuODMsMTc5Ljc4bC0uNjctMi4wMmgtNC4wNWwtLjY5LDIuMDJoLTIuMzJsNC4xNS0xMS40aDEuNzRsNC4xNiwxMS40aC0yLjMyWm0tMi42Ni04LjA0bC0xLjQ0LDQuMTVoMi44M2wtMS4zOS00LjE1WiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzEuMTIsMTc5Ljc4di05LjQxaC0yLjcydjMuMzFjMCw0Ljc5LTEuMTcsNi4xLTMuNTQsNi4xaC0uODh2LTEuOThoLjMyYzEuMTQsMCwxLjk1LS42NywxLjk1LTQuMjR2LTUuMTdoNy4wOXYxMS40aC0yLjIyWiIvPgogICAgPHBhdGggY2xhc3M9'+
			'ImNscy0xIiBkPSJtODAuNjYsMTc5Ljc4aC00LjQ4di0xMS40aDIuMjJ2NC4yOWgyLjI2YzIuMjIsMCwzLjcsMS40NywzLjcsMy41NXMtMS40OSwzLjU1LTMuNywzLjU1Wm0tLjE4LTUuMTJoLTIuMDh2My4xNGgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTdzLS42NC0xLjU3LTEuNjUtMS41N1oiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTkyLjQ3LDE3OS43OHYtNC43N2gtMy44NnY0Ljc3aC0yLjIydi0xMS40aDIuMjJ2NC42NmgzLjg2di00LjY2aDIuMjJ2MTEuNGgtMi4yMloiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTEwMS45OSwxNzkuNzhoLTQuNDh2LTExLj'+
			'RoMi4yMnY0LjI5aDIuMjZjMi4yMiwwLDMuNywxLjQ3LDMuNywzLjU1cy0xLjQ5LDMuNTUtMy43LDMuNTVabS0uMTgtNS4xMmgtMi4wOHYzLjE0aDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41N3MtLjY0LTEuNTctMS42NS0xLjU3Wm01LjExLDUuMTJ2LTExLjRoMi4yM3YxMS40aC0yLjIzWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTE4LjM3LDE3OS43OHYtNy4zMWwtNC40Myw3LjMxaC0xLjk4di0xMS40aDIuMjJ2Ny4zbDQuNDMtNy4zaDEuOTh2MTEuNGgtMi4yM1ptLTIuMDgtMTJjLTEuMjYsMC0yLjUzLS41Ni0yLjU5LTIuMjloMS41N2MuMDUuNy40NS45OSwxLjAyLjk5'+
			'cy45OC0uMjksMS4wMi0uOTloMS41N2MtLjA2LDEuNzMtMS4zMywyLjI5LTIuNTksMi4yOVoiLz4KICAgPC9nPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTA3LjU4LDc1LjJ2LTIwLjQ0YzctMS4zNywxMi4yOC03LjU0LDEyLjI4LTE0Ljk0LDAtOC40MS02LjgyLTE1LjIzLTE1LjIzLTE1LjIzLTQuMTgsMC03Ljk3LDEuNjgtMTAuNzIsNC40MWwtMTkuMi0xMS45NmMuMDctLjYuMTEtMS4yLjExLTEuODEsMC04LjQxLTYuODItMTUuMjMtMTUuMjMtMTUuMjNzLTE1LjIzLDYuODItMTUuMjMsMTUuMjMsNi44MiwxNS4yMywxNS4yMywxNS4yM2M1LjY2LDAsMTAuNi0zLj'+
			'A5LDEzLjIyLTcuNjdsMTcuNzksMTEuMDhjLS43NywxLjgzLTEuMiwzLjg0LTEuMiw1Ljk0LDAsNy40LDUuMjgsMTMuNTcsMTIuMjgsMTQuOTR2MjAuNDRjLTcsMS4zNy0xMi4yOCw3LjU0LTEyLjI4LDE0Ljk0LDAsOC40MSw2LjgyLDE1LjIzLDE1LjIzLDE1LjIzczE1LjIzLTYuODIsMTUuMjMtMTUuMjNjMC03LjQtNS4yOC0xMy41Ny0xMi4yOC0xNC45NCIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC44Myw2NC45OGMwLTguNDEtNi44Mi0xNS4yMy0xNS4yMy0xNS4yM3MtMTUuMjMsNi44Mi0xNS4yMywxNS4yM2MwLDcuNCw1LjI4LDEzLjU3LDEyLjI4LDE0Ljk0djIwLjIzYy0zLjc1'+
			'Ljc0LTcuMDEsMi44NS05LjIzLDUuOGwtMTcuMTItMTAuNjZjLjU3LTEuNi44OS0zLjMzLjg5LTUuMTMsMC03LjQtNS4yOC0xMy41Ny0xMi4yOC0xNC45NHYtMjAuNDRjNy0xLjM3LDEyLjI4LTcuNTQsMTIuMjgtMTQuOTQsMC04LjQxLTYuODItMTUuMjMtMTUuMjMtMTUuMjNTLjc0LDMxLjQxLjc0LDM5LjgyYzAsNy40LDUuMjgsMTMuNTcsMTIuMjgsMTQuOTR2MjAuNDRjLTcsMS4zNy0xMi4yOCw3LjU0LTEyLjI4LDE0Ljk0LDAsOC40MSw2LjgyLDE1LjIzLDE1LjIzLDE1LjIzLDQuNSwwLDguNTQtMS45NSwxMS4zMi01LjA0bDE3LjU3LDEwLjk0Yy0uMzIsMS4yMi0uNDgsMi41LS40OCwzLjgyLD'+
			'AsOC40MSw2LjgyLDE1LjIzLDE1LjIzLDE1LjIzczE1LjIzLTYuODIsMTUuMjMtMTUuMjNjMC03LjQtNS4yOC0xMy41Ny0xMi4yOC0xNC45NHYtMjAuMjNjNy0xLjM3LDEyLjI4LTcuNTQsMTIuMjgtMTQuOTQiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 26px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExODggMzIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMzNDEgMTEzNy41MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMyNDcgMTM3MC42OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExNTEgMzIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDcxMyAyMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm'+
			'9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZTFlMGRjOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI0IDguNTEgMCAyMTkgMjkxIDIwNC4zIDQzNCAyMDMuNTIgNjMyIDE4MS44NiA3MTMgMTc3Ljk5IDcwMiAwIDI0IDguNTEiLz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy0zIiB5Mj0iMzkuNSIgeDI9IjIxMC41MyIgeTE9IjM5LjUiIHgxPSIxNTAuNSIvPgogICA8cG9seWdvbiBj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDc4LjgyIDE0LjAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPS'+
			'JtNy4xNCwxMS40OVYyLjA4aC0yLjcydjMuMzFjMCw0Ljc5LTEuMTcsNi4xLTMuNTQsNi4xaC0uODh2LTEuOThoLjMyYzEuMTQsMCwxLjk1LS42NywxLjk1LTQuMjRWLjFoNy4wOXYxMS40aC0yLjIyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xOC45LDEwLjM5Yy0uNzcuNzctMS43MywxLjItMy4wNCwxLjJzLTIuMjktLjQzLTMuMDYtMS4yYy0xLjE0LTEuMTQtMS4xNS0yLjQyLTEuMTUtNC41OXMuMDItMy40NiwxLjE1LTQuNTljLjc3LS43NywxLjc1LTEuMiwzLjA2LTEuMnMyLjI3LjQzLDMuMDQsMS4yYzEuMTQsMS4xNCwxLjE3LDIuNDIsMS4xNyw0LjU5cy0uMDMsMy40Ni0xLjE3'+
			'LDQuNTlabS0xLjYyLTcuNzljLS4zMi0uMzctLjgyLS42MS0xLjQyLS42MXMtMS4xLjI0LTEuNDQuNjFjLS40Mi40OC0uNTQsMS4wMi0uNTQsMy4ycy4xMywyLjcxLjU0LDMuMTljLjM0LjM3LjgzLjYyLDEuNDQuNjJzMS4xLS4yNiwxLjQyLS42MmMuNDItLjQ4LjU2LTEuMDEuNTYtMy4xOXMtLjE0LTIuNzItLjU2LTMuMloiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMjIuMzcsMTEuNDlWLjFoMi4yMnYxMS40aC0yLjIyWm02LjI0LDBsLTQtNS45N0wyOC4yOS4xaDIuNjZsLTMuODMsNS4zNSw0LjIxLDYuMDVoLTIuNzJaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTM5LjQ3LD'+
			'ExLjQ5bC0uNjctMi4wMmgtNC4wNWwtLjY5LDIuMDJoLTIuMzJMMzUuODkuMWgxLjc1bDQuMTYsMTEuNGgtMi4zMlptLTIuNjYtOC4wNGwtMS40NCw0LjE1aDIuODNsLTEuMzktNC4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNTAuNjksMTQuMDJ2LTIuNTNoLTcuNDlWLjFoMi4yM3Y5LjQxaDMuODZWLjFoMi4yMnY5LjQxaDEuMzN2NC41MWgtMi4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjEuMDEsMTEuNDl2LTcuMzFsLTQuNDMsNy4zMWgtMS45OVYuMWgyLjIzdjcuM0w2MS4yNS4xaDEuOTh2MTEuNGgtMi4yMloiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBk'+
			'PSJtNjcuNzEsMTEuNDloLTIuNjRsMi4zNS00Ljc0Yy0xLjItLjU0LTEuOTUtMS42Ni0xLjk1LTMuMTEsMC0yLjE4LDEuNTUtMy41NSwzLjc1LTMuNTVoNC40MnYxMS40aC0yLjIydi00LjI5aC0xLjgybC0xLjg3LDQuMjlabTMuNy05LjQ0aC0yLjA4Yy0uOTksMC0xLjY1LjYyLTEuNjUsMS41N3MuNjYsMS42MiwxLjY1LDEuNjJoMi4wOHYtMy4xOVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzYuNDUsNy4xNXYtMi4zN2gyLjM3djIuMzdoLTIuMzdabTAsNC4zNHYtMi4zN2gyLjM3djIuMzdoLTIuMzdaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDk1LjYgMTU2LjMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L'+
			'7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTQ4LjY4LDEzMy42YzAsNi45LTEuNTEsMTIuMzItNC41MSwxNi4yOC0zLjAxLDMuOTYtOC4yNSw1Ljk0LTE1LjczLDUuOTRoLTcuNDhjLTcuNDgsMC0xMi43Ni0xLjk4LTE1Ljg0LTUuOTRzLTQuNjItOS4zOC00LjYyLTE2LjI4VjIyLjk0YzAtNy4wNCwxLjU0LTEyLjU0LDQuNjItMTYuNVMxMy40OC41LDIwLjk2LjVoNy40OGM3LjQ4LDAsMTIuNzIsMS45OCwxNS43Myw1Ljk0LDMsMy45Niw0LjUxLDkuNDYsNC41MSwxNi41djExMC42NlptLTYuNi0xMTEuOThjMC0zLjgxLS45OS03LjE4LTIu'+
			'OTctMTAuMTItMS45OC0yLjkzLTUuMzItNC40LTEwLjAxLTQuNGgtOS4wMmMtNC43LDAtOC4wMywxLjQ3LTEwLjAxLDQuNC0xLjk4LDIuOTQtMi45Nyw2LjMxLTIuOTcsMTAuMTJ2MTEzLjA4YzAsMy44Mi45OSw3LjE5LDIuOTcsMTAuMTIsMS45OCwyLjk0LDUuMzEsNC40LDEwLjAxLDQuNGg5LjAyYzQuNjksMCw4LjAzLTEuNDYsMTAuMDEtNC40LDEuOTgtMi45MywyLjk3LTYuMywyLjk3LTEwLjEyVjIxLjYyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im05NS4xLDEuODJ2MTUyLjY4aC02LjZWOC40MmgtMTguOTJWMS44MmgyNS41MloiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDM4MS45IDcyNi4zNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQogICAgPC9zdHlsZT4KID'+
			'wvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxnPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0zNzkuOSw4My4zNWMtNjIuNDYsMjkuMzItODEsMjguNTktODYsMjItNi44NC05LjAxLDcuOTYtMzMuODcsMjItNDgsMTMuMjctMTMuMzUsMzIuMDYtMjMuMzMsMzUtMjAsMy4zLDMuNzQtMTEuOTgsMjUuOC0zMSw0MS0zMC44MiwyNC42NC03Ni45NywzNS43LTg3LDIyLTYuMDgtOC4zLDYuMDYtMjYuODIsMy0yNS00NC41LDI2LjUtMTAwLjUsNzMuNS0xNzkuNSwxNzkuNS0xMS4wNywxNC44NS0zNy4xNyw1NS45Ny0zMS41LDg2LjUsMS45MSwx'+
			'MC4yNyw0LjcxLDI1LjQsMTUsMzEsMzUuMzksMTkuMjgsMTQ1LjQxLTgxLjg1LDEzMC0xMTMtNy40NC0xNS4wNC00NC4yNi0xNC4wNS02OS02LTY2LjU5LDIxLjY3LTExOC4wNSwxMTguMDEtOTIsMjAyLDIxLjAyLDY3Ljc4LDg5LjExLDExNi41MywxNjksMTE5Ii8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTMxLjE2LDI4MS43NWM0MS40OS00Ny42OSw3NC45MS04My43LDk2LjU4LTEwNi42MiwxMi4zNC0xMy4wNSw3My4zNi03Ny4zNiw5OS4zOS0xNDcuNTIsMy44NS0xMC4zOCw3LjIyLTIxLjY1LDQuMTQtMjQuNzctNi41OC02LjY5LTM4LjU5LDI4LjM0LTQ5Ljg1LDQwLjY3LTI3Ljc2LD'+
			'MwLjM5LTc2Ljg5LDk1LjIxLTE0NC4wMSwyNDEuNjgiLz4KICA8L2c+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzQuOSw3MjQuMzVjMjMuMjMtMTcuOTUsNTIuMTctMzcuNjEsODctNTYsMzguMjgtMjAuMjEsNzMuOTYtMzMuNzYsMTA0LTQzIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMwNS4xMSAxNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjI4MS41IiB5MT0iMTQxLjUiIHgxPSIxOTAuNSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjU0Ljc5IiB4Mj0iMTMuNSIgeTE9IjI4LjUiIHgxPSIxMy41Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNDEuNSIgeDI9IjI3LjQ3IiB5MT0iNDEuNSIgeDE9Ii41Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNDEuNSIgeDI9IjMwNC42MSIgeTE9IjQxLjUiIHgxPSIzNy4zOSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExMS4yOCAzMzkuNzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIzMzkuMjYiIHgyPSIxMTAuNzgiIHkxPSIyODQuMjYiIHgxPSIuNSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjIxOC45NiIgeDI9IjI3IiB5MT0iMTkwLjc2IiB4MT0iMjciLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIyMDQuODYiIHgyPSIxMi45IiB5MT0iMjA0Ljg2IiB4MT0iNDEuMSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9Ijc4LjA3IiB4Mj0iMjYuNzkiIHkxPSI0OS44NyIgeDE9IjI2Ljc5Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNjMuOTciIHgyPSIxMi42'+
			'OSIgeTE9IjYzLjk3IiB4MT0iNDAuODkiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI5MS41OSIgeDI9IjI3IiB5MT0iMTYxLjMyIiB4MT0iMjciLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjI3IiB5MT0iMzYuNDEiIHgxPSIyNyIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDEzMi42IDE0Ni42IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogMy42cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+Ci'+
			'A8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xMzAuOCwxLjhjLTIwLjg2LDEzLjkzLTQ3LjAyLDM0LjI5LTczLDYzQzMxLjQzLDkzLjkzLDEzLjYyLDEyMi40MiwxLjgsMTQ0LjgiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDIzOS42OCAxNTYuMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjEwMC4xMiIgeTE9IjE1NS43MyIgeDE9IjEwMC4xMiIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9Ijg5LjIzIiB4Mj0iMjM5LjE4IiB5MT0iODkuMjMiIHgxPSI1MC42MiIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9Ijg5LjMzIiB4Mj0iMjYuMDEiIHkxPSI4OS4zMyIgeDE9Ii41Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iMTAyLjA5IiB4Mj0iMTMuMjYiIHkxPSI3Ni41NyIgeDE9IjEzLjI2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMyNi44NiAxMzQuMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'00IHsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNXB4OwogICAgICB9CgogICAgICAuY2xzLTQsIC5jbHMtNSB7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm9rZS13aWR0aDogLjhweDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDE5LjYyIDkwLjMg'+
			'MCAzMjYuODYgMTcuMTcgMzI2Ljg2IDExNi44MSAyMTQuMTcgMTMwLjU4IDEwMS40OSAxMjguNzQgMzguMzYgMTM0LjI2IDAgMTE1LjE5IDAgMTkuNjIiLz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy01IiB5Mj0iMTAwLjI5IiB4Mj0iNjQuNTEiIHkxPSIxMDAuMjkiIHgxPSI0My41NiIvPgogICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjEuODYgMTAzLjU2IDYxLjMyIDEwMi45OCA2NC4yIDEwMC4zIDYxLjMyIDk3LjYxIDYxLjg2IDk3LjAzIDY1LjM4IDEwMC4zIDYxLjg2IDEwMy41NiIvPgogIDwvZz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy01IiB5Mj0iMTAwLjI5Ii'+
			'B4Mj0iMTczLjU5IiB5MT0iMTAwLjI5IiB4MT0iMTUyLjY1Ii8+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxNzAuOTQgMTAzLjU2IDE3MC40IDEwMi45OCAxNzMuMjkgMTAwLjMgMTcwLjQgOTcuNjEgMTcwLjk0IDk3LjAzIDE3NC40NiAxMDAuMyAxNzAuOTQgMTAzLjU2Ii8+CiAgPC9nPgogIDxnPgogICA8bGluZSBjbGFzcz0iY2xzLTUiIHkyPSIxMDAuMjkiIHgyPSIyNzguNjciIHkxPSIxMDAuMjkiIHgxPSIyNTcuNzMiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI3Ni4wMyAxMDMuNTYgMjc1LjQ4IDEwMi45OCAyNzguMzcgMTAwLjMgMjc1LjQ4IDk3'+
			'LjYxIDI3Ni4wMyA5Ny4wMyAyNzkuNTQgMTAwLjMgMjc2LjAzIDEwMy41NiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNDQuNjEsNjguOXYxMy41NmgtMTUuNTV2LTIwLjI0bDEzLjQyLTIwLjA5di0yLjU2YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2My4xOWgtMi4xM3YtMi43N2MwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMD'+
			'gsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2wtMTMuNDIsMjAuMDl2MTcuNDdoMTEuMjl2LTExLjQzaDIuMTNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTYxLjU4LDc1LjcyYzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjkyLTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYs'+
			'My4wNSwxLjQ2LDUuMzN2MzUuNzFabS0yLjEzLTM2LjE0YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2MzYuNDljMCwxLjIzLjMyLDIuMzIuOTYsMy4yNy42NC45NSwxLjcyLDEuNDIsMy4yMywxLjQyaDIuOTFjMS41MSwwLDIuNTktLjQ3LDMuMjMtMS40Mi42NC0uOTUuOTYtMi4wMy45Ni0zLjI3di0zNi40OVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNjkuNDYsMzMuMTl2NDkuMjdoLTIuMTN2LTQ3LjE0aC02LjExdi0yLjEzaDguMj'+
			'RaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTgwLjY3LDMzLjE5djQ5LjI3aC0yLjEzdi00Ny4xNGgtNi4xMXYtMi4xM2g4LjI0WiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTQzLjYxLDY4Ljl2MTMuNTZoLTE1LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjct'+
			'MS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xNjAuNTgsNzUuNzJjMCwyLjIzLS40OSwzLjk4LTEuNDYsNS4yNS0uOTcsMS4yOC0yLjY2LDEuOTItNS4wOCwxLjkyaC0yLjQxYy0yLjQxLDAtNC4xMi0uNjQtNS4xMS0xLjkyLS45OS0xLjI4LTEuNDktMy4wMy0xLjQ5LTUuMjV2LTM1LjcxYzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0xLjkyaDIuND'+
			'FjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YzNS43MVptLTIuMTMtMzYuMTRjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3YzNi40OWMwLDEuMjMuMzIsMi4zMi45NiwzLjI3LjY0Ljk1LDEuNzIsMS40MiwzLjIzLDEuNDJoMi45MWMxLjUxLDAsMi41OS0uNDcsMy4yMy0xLjQyLjY0LS45NS45Ni0yLjAzLjk2LTMuMjd2LTM2LjQ5WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xNzguNTQs'+
			'NjguOXYxMy41NmgtMTUuNTV2LTIwLjI0bDEzLjQyLTIwLjA5di0yLjU2YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2My4xOWgtMi4xM3YtMi43N2MwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2wtMTMuNDIsMjAuMDl2MTcuNDdoMTEuMjl2LTExLjQzaDIuMTNaIi8+CiAgIDxwYXRoIGNsYX'+
			'NzPSJjbHMtMyIgZD0ibTE4OC44Myw0OS4yM2MyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMydjE5LjI0YzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjkyLTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2gtMi4xM3YtMy4xOWMw'+
			'LTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djkuNjZoNi44OVptNC40LDYuODJjMC0xLjIzLS4zMi0yLjMxLS45Ni0zLjIzcy0xLjcyLTEuMzgtMy4yMy0xLjM4aC03LjF2MjQuNjRjMCwxLjIzLjMyLDIuMzIuOTYsMy4yNy42NC45NSwxLjcyLDEuNDIsMy4yMywxLjQyaDIuOTFjMS41MSwwLDIuNTktLjQ3LDMuMjMtMS40Mi42NC0uOTUuOTYtMi4wMy45Ni0zLjI3di0yMC4wMloiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD'+
			'0ibTIyNS40NCw0NS41N3Y5LjAyaDMuMTdjMS41NiwwLDIuNjcuNDEsMy4zMSwxLjI0LjY0LjgzLjk3LDEuOTYuOTcsMy40djEyLjE5YzAsMS40Ny0uMzIsMi42Mi0uOTcsMy40NS0uNjQuODMtMS43NSwxLjI0LTMuMzEsMS4yNGgtNC41NXYtMzEuOTJoOC40NnYxLjM4aC03LjA4Wm0wLDEwLjR2MTguNzJoMy4zNmMuOTgsMCwxLjY4LS4zLDIuMDktLjkuNDEtLjYuNjItMS4yOS42Mi0yLjA5di0xMi43YzAtLjgtLjIxLTEuNS0uNjItMi4xMnMtMS4xMS0uOTItMi4wOS0uOTJoLTMuMzZaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD0ibTI0Ni41MSw0NC4xOWwtMy43NywyOC4zOGMtLjE1LDEu'+
			'MS0uNTYsMS45Ny0xLjIyLDIuNi0uNjYuNjMtMS42Ni45NC0zLjAxLjk0aC0xLjI0di0xLjM4aDEuNDNjLjg2LDAsMS41LS4yNCwxLjkxLS43MXMuNjctMS4wNS43Ni0xLjczbC44My02LjM1aC0zLjU0di0uMDVsLTMuMzEtMjEuNzFoMS40M2wzLjA4LDIwLjM4aDIuNThsMi42Ny0yMC4zOGgxLjQzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0yNTYuNzIsNzQuNzNoMS40N3Y1LjM4aC0xLjJsLS4zMi00aC05LjQzbC0uMzIsNGgtMS4ybC4wNS01LjM4Yy43NywwLDEuMzItLjE4LDEuNjYtLjUzLjM0LS4zNS41Mi0uOTMuNTUtMS43MmwxLjItMjguMjloNy41NHYzMC41NFptLTEuMzgsMH'+
			'YtMjkuMTZoLTQuNzhsLTEuMiwyNi45MWMtLjAzLDEuMS0uMzQsMS44Ni0uOTIsMi4yNWg2LjlaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD0ibTI3MS4wNyw0NC4xOWwtMy43NywyOC4zOGMtLjE1LDEuMS0uNTYsMS45Ny0xLjIyLDIuNi0uNjYuNjMtMS42Ni45NC0zLjAxLjk0aC0xLjI0di0xLjM4aDEuNDNjLjg2LDAsMS41LS4yNCwxLjkxLS43MXMuNjctMS4wNS43Ni0xLjczbC44My02LjM1aC0zLjU0di0uMDVsLTMuMzEtMjEuNzFoMS40M2wzLjA4LDIwLjM4aDIuNThsMi42Ny0yMC4zOGgxLjQzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0yOTAuOCw3NC43M3Y1LjM4aC0x'+
			'LjJsLS4zMi00aC0xNS45NnYtMzEuOTJoMS4zOHYzMC41NGg1LjU3di0zMC41NGgxLjM4djMwLjU0aDUuNTJ2LTMwLjU0aDEuMzh2MzAuNTRoMi4yNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJtMzAxLjAyLDQ0LjE5djEuMzhoLTcuMDh2OS4wMmg1LjM0djEuMzhoLTUuMzR2MTguNzdoNy4wOHYxLjM4aC04LjQ2di0zMS45Mmg4LjQ2WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0zMTEuOTIsNDQuMTl2MS4zOGgtNy4wOHY5LjAyaDUuMzR2MS4zOGgtNS4zNHYxOC43N2g3LjA4djEuMzhoLTguNDZ2LTMxLjkyaDguNDZaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExMi44IDEyMS42IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMyNDI1Mjc7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBzdHJva2Utd2lkdGg6IDBweDsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy00IH'+
			'sKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMCAwIDExMi44IDguMTkgMTEyLjggMTA3LjgzIC4xMiAxMjEuNiAwIDAiLz4KICA8Zz4K'+
			'ICAgPGxpbmUgY2xhc3M9ImNscy00IiB5Mj0iOTEuMzEiIHgyPSI2NC42MiIgeTE9IjkxLjMxIiB4MT0iNDMuNjciLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYxLjk3IDk0LjU4IDYxLjQzIDk0IDY0LjMxIDkxLjMyIDYxLjQzIDg4LjYzIDYxLjk3IDg4LjA1IDY1LjQ5IDkxLjMyIDYxLjk3IDk0LjU4Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xMS4zOCwzNi41OXY5LjAyaDMuMTdjMS41NiwwLDIuNjcuNDEsMy4zMSwxLjI0cy45NywxLjk2Ljk3LDMuNHYxMi4xOWMwLDEuNDctLjMyLDIuNjItLjk3LDMuNDVzLTEuNzUsMS4yNC0zLjMxLD'+
			'EuMjRoLTQuNTV2LTMxLjkyaDguNDZ2MS4zOGgtNy4wOFptMCwxMC40djE4LjcyaDMuMzZjLjk4LDAsMS42OC0uMywyLjA5LS45LjQxLS42LjYyLTEuMjkuNjItMi4wOXYtMTIuN2MwLS44LS4yMS0xLjUtLjYyLTIuMTJzLTEuMTEtLjkyLTIuMDktLjkyaC0zLjM2WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0zMi40NSwzNS4yMWwtMy43NywyOC4zOGMtLjE1LDEuMS0uNTYsMS45Ny0xLjIyLDIuNi0uNjYuNjMtMS42Ni45NC0zLjAxLjk0aC0xLjI0di0xLjM4aDEuNDNjLjg2LDAsMS41LS4yNCwxLjkxLS43MXMuNjctMS4wNS43Ni0xLjczbC44My02LjM1aC0zLjU0di0uMDVsLTMuMzEt'+
			'MjEuNzFoMS40M2wzLjA4LDIwLjM4aDIuNThsMi42Ny0yMC4zOGgxLjQzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im00Mi42Niw2NS43NWgxLjQ3djUuMzhoLTEuMmwtLjMyLTRoLTkuNDNsLS4zMiw0aC0xLjJsLjA1LTUuMzhjLjc3LDAsMS4zMi0uMTgsMS42Ni0uNTMuMzQtLjM1LjUyLS45My41NS0xLjcybDEuMi0yOC4yOWg3LjU0djMwLjU0Wm0tMS4zOCwwdi0yOS4xNmgtNC43OGwtMS4yLDI2LjkxYy0uMDMsMS4xLS4zNCwxLjg2LS45MiwyLjI1aDYuOVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNTcuMDIsMzUuMjFsLTMuNzcsMjguMzhjLS4xNSwxLjEtLjU2LDEuOT'+
			'ctMS4yMiwyLjYtLjY2LjYzLTEuNjYuOTQtMy4wMS45NGgtMS4yNHYtMS4zOGgxLjQzYy44NiwwLDEuNS0uMjQsMS45MS0uNzFzLjY3LTEuMDUuNzYtMS43M2wuODMtNi4zNWgtMy41NHYtLjA1bC0zLjMxLTIxLjcxaDEuNDNsMy4wOCwyMC4zOGgyLjU4bDIuNjctMjAuMzhoMS40M1oiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNzYuNzUsNjUuNzV2NS4zOGgtMS4ybC0uMzItNGgtMTUuOTZ2LTMxLjkyaDEuMzh2MzAuNTRoNS41N3YtMzAuNTRoMS4zOHYzMC41NGg1LjUydi0zMC41NGgxLjM4djMwLjU0aDIuMjVaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTg2Ljk2LDM1LjIx'+
			'djEuMzhoLTcuMDh2OS4wMmg1LjM0djEuMzhoLTUuMzR2MTguNzdoNy4wOHYxLjM4aC04LjQ2di0zMS45Mmg4LjQ2WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im05Ny44NiwzNS4yMXYxLjM4aC03LjA4djkuMDJoNS4zNHYxLjM4aC01LjM0djE4Ljc3aDcuMDh2MS4zOGgtOC40NnYtMzEuOTJoOC40NloiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDEwNC44NyAxMjkuMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjQyNTI3OwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgIC'+
			'AgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNzVweDsKICAgICAgfQoKICAgICAgLmNscy0zLCAuY2xzLTQgewogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMCAwIDEwNC43NCA3LjYgMTA0Ljg3'+
			'IDEyOS4yIC4wOCAxMjcuNDkgMCAwIi8+CiAgPGc+CiAgIDxsaW5lIGNsYXNzPSJjbHMtNCIgeTI9Ijk4LjkyIiB4Mj0iNjQuMjkiIHkxPSI5OC45MiIgeDE9IjQzLjM0Ii8+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2MS42NCAxMDIuMTggNjEuMSAxMDEuNiA2My45OCA5OC45MiA2MS4xIDk2LjIzIDYxLjY0IDk1LjY1IDY1LjE2IDk4LjkyIDYxLjY0IDEwMi4xOCIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMzQuMyw2Ny41MnYxMy41NmgtMTUuNTV2LTIwLjI0bDEzLjQyLTIwLjA5di0yLjU2YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNj'+
			'QtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2My4xOWgtMi4xM3YtMi43N2MwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2wtMTMuNDIsMjAuMDl2MTcuNDdoMTEuMjl2LTExLjQzaDIuMTNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTUxLjI3LDc0LjM0YzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjky'+
			'LTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2MzUuNzFabS0yLjEzLTM2LjE0YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTEsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2MzYuNDljMCwxLjIzLjMyLDIuMz'+
			'IuOTYsMy4yNy42NC45NSwxLjcyLDEuNDIsMy4yMywxLjQyaDIuOTFjMS41MSwwLDIuNTktLjQ3LDMuMjMtMS40Mi42NC0uOTUuOTYtMi4wMy45Ni0zLjI3di0zNi40OVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNjkuMjQsNjcuNTJ2MTMuNTZoLTE1LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUxLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwy'+
			'LjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im03OS41Myw0Ny44NWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMydjE5LjI0YzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjkyLTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di'+
			'0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2gtMi4xM3YtMy4xOWMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djkuNjZoNi44OVptNC40LDYuODJjMC0xLjIzLS4zMi0yLjMxLS45Ni0zLjIzLS42NC0uOTItMS43Mi0xLjM4LTMuMjMtMS4zOGgtNy4xdjI0LjY0YzAsMS4yMy4zMiwy'+
			'LjMyLjk2LDMuMjcuNjQuOTUsMS43MSwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMjAuMDJaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDEwOS4zOSAxMzQuMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgIC'+
			'AgICAgc3Ryb2tlOiAjMDAwOwogICAgICAgIHN0cm9rZS13aWR0aDogLjc1cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy00IHsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICMyNDI1Mjc7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuOHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjAgMTkuNjIgOTAuMyAwIDEwOS4z'+
			'IDEuMzggMTA5LjM5IDEyOC44NyAxMDEuNDkgMTI4Ljc0IDM4LjM2IDEzNC4yNiAwIDExNS4xOSAwIDE5LjYyIi8+CiAgPGc+CiAgIDxsaW5lIGNsYXNzPSJjbHMtNCIgeTI9IjEwMC4yOSIgeDI9IjY0LjUxIiB5MT0iMTAwLjI5IiB4MT0iNDMuNTYiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYxLjg2IDEwMy41NiA2MS4zMiAxMDIuOTggNjQuMiAxMDAuMyA2MS4zMiA5Ny42MSA2MS44NiA5Ny4wMyA2NS4zOCAxMDAuMyA2MS44NiAxMDMuNTYiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTQ0LjYxLDY4Ljl2MTMuNTZoLTE1LjU1di0yMC4yNG'+
			'wxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im02MS41OCw3NS43'+
			'MmMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIuNDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjM1LjcxWm0tMi4xMy0zNi4xNGMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUxLDAtMi41OS40Ny0zLjIzLDEuND'+
			'ItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djM2LjQ5YzAsMS4yMy4zMiwyLjMyLjk2LDMuMjcuNjQuOTUsMS43MiwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMzYuNDlaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTY5LjQ2LDMzLjE5djQ5LjI3aC0yLjEzdi00Ny4xNGgtNi4xMXYtMi4xM2g4LjI0WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im04MC42NywzMy4xOXY0OS4yN2gtMi4xM3YtNDcuMTRoLTYuMTF2LTIuMTNoOC4yNFoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDY4My43OCAxLjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIxIiB4Mj0iNjIuODMiIHkxPSIxIiB4MT0iLjUiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjY4My4yOCIgeTE9Ii41IiB4MT0iNTIzLjQxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDM2IDcwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxjaXJjbGUgY2'+
			'xhc3M9ImNscy0xIiByPSIxNyIgY3g9IjE3LjUiIGN5PSIxNy41Ii8+CiAgPGNpcmNsZSBjbGFzcz0iY2xzLTEiIHI9IjE3IiBjeD0iMTgiIGN5PSIzNSIvPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiByPSIxNyIgY3g9IjE4LjUiIGN5PSI1Mi41Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMzNC43MyA1NTguMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'0zIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNCwgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC7'+
			'0L7QuV8xLTIiPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDcuOTQgMzI1IDAgMzM0LjczIDExNC4xNyAyOTYuNTUgMTE0LjE3IDIxMS40OSA0ODQuMTcgMjI2IDQ5NC4xNyAyMzAgNTI0LjE3IDE3NyA1NTguMTcgMjAgNTE3LjE3IDIyIDIzOS4xNyAxNSAyMzYuMTcgMCA3Ljk0Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy01IiB5Mj0iMTkzLjY3IiB4Mj0iMzYuNSIgeTE9IjUxMi42NyIgeDE9IjM2LjUiLz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy00IiB5Mj0iMTUyLjE3IiB4Mj0iMjIxLjAxIiB5MT0iMTUyLjE3IiB4MT0iMTIyLjciLz4KICAgPHBvbHlnb24gY2xhc3M9Im'+
			'Nscy0yIiBwb2ludHM9IjIxNy43IDE1Ni4yNiAyMTcuMDIgMTU1LjUyIDIyMC42MyAxNTIuMTcgMjE3LjAyIDE0OC44MSAyMTcuNyAxNDguMDggMjIyLjEgMTUyLjE3IDIxNy43IDE1Ni4yNiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTE1LjU2LDY5Ljc5di05LjQxaC0zLjg2djkuNDFoLTIuMjJ2LTExLjRoOC4zMXYxMS40aC0yLjIyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xMjAuNTksNjkuNzl2LTExLjRoNy41MXYxLjk4aC01LjI4djIuNjdoNC41djEuOThoLTQuNXYyLjc3aDUuMjh2MS45OGgtNy41MVoiLz4KICAgPHBhdGggY2xhc3M9ImNs'+
			'cy0zIiBkPSJtMTM0Ljg1LDY1LjVoLTIuMTl2NC4yOWgtMi4yMnYtMTEuNGg0LjQyYzIuMzcsMCwzLjc2LDEuNjIsMy43NiwzLjU1cy0xLjM5LDMuNTUtMy43NiwzLjU1Wm0tLjExLTUuMTJoLTIuMDh2My4xMmgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTVzLS42NC0xLjU3LTEuNjUtMS41N1oiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTQ4LjIsNjQuNTVjLjUuNTMuNywxLjE3LjcsMS45NywwLDItMS4zNCwzLjI3LTMuNDksMy4yN2gtNC43N3YtMTEuNGg0LjU4YzIuMTUsMCwzLjUyLDEuMjIsMy41MiwzLjE0LDAsMS4wOS0uNDYsMS44OS0xLjQxLDIuNDIuNDUuMjQuNjIuMz'+
			'cuODYuNjFabS0zLjE1LTEuNTVjLjkxLDAsMS40Ny0uNSwxLjQ3LTEuMzFzLS41Ni0xLjMxLTEuNDctMS4zMWgtMi4xOHYyLjYyaDIuMThabS4xNCw0LjhjLjkxLDAsMS40OS0uNTQsMS40OS0xLjQxcy0uNTgtMS4zOS0xLjQ5LTEuMzloLTIuMzJ2Mi44aDIuMzJaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE1NS44MSw2OS43OWgtNC40OHYtMTEuNGgyLjIydjQuMjloMi4yNmMyLjIyLDAsMy43LDEuNDcsMy43LDMuNTVzLTEuNDksMy41NS0zLjcsMy41NVptLS4xOC01LjEyaC0yLjA4djMuMTRoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU3cy0uNjQtMS41Ny0xLjY1LTEuNTda'+
			'bTUuMTEsNS4xMnYtMTEuNGgyLjIzdjExLjRoLTIuMjNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE3Mi4xOSw2OS43OXYtNy4zMWwtNC40Myw3LjMxaC0xLjk4di0xMS40aDIuMjJ2Ny4zbDQuNDMtNy4zaDEuOTh2MTEuNGgtMi4yM1ptLTIuMDgtMTJjLTEuMjYsMC0yLjUzLS41Ni0yLjU5LTIuMjloMS41N2MuMDUuNy40NS45OSwxLjAyLjk5cy45OC0uMjksMS4wMi0uOTloMS41N2MtLjA2LDEuNzMtMS4zMywyLjI5LTIuNTksMi4yOVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTE1Ljc4LDg4LjQ3djEuMzloLTIuMjN2LTEuMzljLTMuMzktLjEzLTQuOC0xLjg0LTQuOC'+
			'00Ljc0czEuNDEtNC41OSw0LjgtNC43NHYtMS4xMmgyLjIzdjEuMTJjMy4zOS4xNCw0LjgyLDEuODQsNC44Miw0Ljc0cy0xLjQyLDQuNjEtNC44Miw0Ljc0Wm0tMi4xOS03LjU5Yy0xLjkuMS0yLjYxLjk5LTIuNjEsMi44NXMuNywyLjc3LDIuNjEsMi44NXYtNS43Wm0yLjE2LDB2NS43YzEuOTItLjA4LDIuNjItLjk5LDIuNjItMi44NXMtLjctMi43NS0yLjYyLTIuODVaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTEyMi41OCw4OS43OXYtMTEuNGg3LjUxdjEuOThoLTUuMjh2Mi42N2g0LjV2MS45OGgtNC41djIuNzdoNS4yOHYxLjk4aC03LjUxWiIvPgogICA8cGF0aCBjbGFzcz0iY2xz'+
			'LTMiIGQ9Im0xMzkuNzgsOTIuMzF2LTIuNTNoLTYuMzJ2Mi41M2gtMi4xNXYtNC41MWgxLjA3Yy45NC0xLjQ2LDEuMzYtMy44NywxLjM2LTYuNXYtMi45MWg2Ljg3djkuNDFoMS4zMXY0LjUxaC0yLjE1Wm0tMS4zOS0xMS45NGgtMi41MXYxLjY1YzAsMi4yNi0uMjIsNC4xOS0xLjAxLDUuNzhoMy41MnYtNy40M1oiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTQzLjg2LDg5Ljc5di0xMS40aDcuNTF2MS45OGgtNS4yOHYyLjY3aDQuNXYxLjk4aC00LjV2Mi43N2g1LjI4djEuOThoLTcuNTFaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE1OC4xMSw4NS41aC0yLjE5djQuMjloLT'+
			'IuMjJ2LTExLjRoNC40MmMyLjM3LDAsMy43NiwxLjYyLDMuNzYsMy41NXMtMS4zOSwzLjU1LTMuNzYsMy41NVptLS4xMS01LjEyaC0yLjA4djMuMTJoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU1cy0uNjQtMS41Ny0xLjY1LTEuNTdaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE2OS41OSw4OS43OWwtLjY3LTIuMDJoLTQuMDVsLS42OSwyLjAyaC0yLjMybDQuMTUtMTEuNGgxLjc0bDQuMTYsMTEuNGgtMi4zMlptLTIuNjYtOC4wNGwtMS40NCw0LjE1aDIuODNsLTEuMzktNC4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTc5Ljg4LDg5Ljc5di05LjQxaC0yLjcy'+
			'djMuMzFjMCw0Ljc5LTEuMTcsNi4xLTMuNTQsNi4xaC0uODh2LTEuOThoLjMyYzEuMTQsMCwxLjk1LS42NywxLjk1LTQuMjR2LTUuMTdoNy4wOXYxMS40aC0yLjIyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xODkuNDEsODkuNzloLTQuNDh2LTExLjRoMi4yMnY0LjI5aDIuMjZjMi4yMiwwLDMuNywxLjQ3LDMuNywzLjU1cy0xLjQ5LDMuNTUtMy43LDMuNTVabS0uMTgtNS4xMmgtMi4wOHYzLjE0aDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41N3MtLjY0LTEuNTctMS42NS0xLjU3WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0yMDEuMjIsODkuNzl2LTQuNzdoLTMuOD'+
			'Z2NC43N2gtMi4yMnYtMTEuNGgyLjIydjQuNjZoMy44NnYtNC42NmgyLjIydjExLjRoLTIuMjJaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTIxMC43NCw4OS43OWgtNC40OHYtMTEuNGgyLjIydjQuMjloMi4yNmMyLjIyLDAsMy43LDEuNDcsMy43LDMuNTVzLTEuNDksMy41NS0zLjcsMy41NVptLS4xOC01LjEyaC0yLjA4djMuMTRoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU3cy0uNjQtMS41Ny0xLjY1LTEuNTdabTUuMTEsNS4xMnYtMTEuNGgyLjIzdjExLjRoLTIuMjNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTIyNy4xMiw4OS43OXYtNy4zMWwtNC40Myw3LjMx'+
			'aC0xLjk4di0xMS40aDIuMjJ2Ny4zbDQuNDMtNy4zaDEuOTh2MTEuNGgtMi4yM1ptLTIuMDgtMTJjLTEuMjYsMC0yLjUzLS41Ni0yLjU5LTIuMjloMS41N2MuMDUuNy40NS45OSwxLjAyLjk5cy45OC0uMjksMS4wMi0uOTloMS41N2MtLjA2LDEuNzMtMS4zMywyLjI5LTIuNTksMi4yOVoiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTc2LjIzLDc3Ljg2di03LjUzYzIuNTgtLjUxLDQuNTItMi43OCw0LjUyLTUuNSwwLTMuMS0yLjUxLTUuNjEtNS42MS01LjYxLTEuNTQsMC0yLjkzLjYyLTMuOTUsMS42MmwtNy4wNy00LjRjLjAzLS4yMi4wNC0uNDQuMDQtLjY3LDAtMy'+
			'4xLTIuNTEtNS42MS01LjYxLTUuNjFzLTUuNjEsMi41MS01LjYxLDUuNjEsMi41MSw1LjYxLDUuNjEsNS42MWMyLjA4LDAsMy45LTEuMTQsNC44Ny0yLjgybDYuNTUsNC4wOGMtLjI5LjY3LS40NCwxLjQxLS40NCwyLjE5LDAsMi43MywxLjk1LDUsNC41Miw1LjV2Ny41M2MtMi41OC41MS00LjUyLDIuNzgtNC41Miw1LjUsMCwzLjEsMi41MSw1LjYxLDUuNjEsNS42MXM1LjYxLTIuNTEsNS42MS01LjYxYzAtMi43My0xLjk1LTUtNC41Mi01LjUiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNjQuMTcsNzQuMWMwLTMuMS0yLjUxLTUuNjEtNS42MS01LjYxcy01LjYxLDIuNTEtNS42MSw1LjYx'+
			'YzAsMi43MywxLjk1LDUsNC41Miw1LjV2Ny40NWMtMS4zOC4yNy0yLjU4LDEuMDUtMy40LDIuMTNsLTYuMy0zLjkzYy4yMS0uNTkuMzMtMS4yMy4zMy0xLjg5LDAtMi43My0xLjk1LTUtNC41Mi01LjV2LTcuNTNjMi41OC0uNTEsNC41Mi0yLjc4LDQuNTItNS41LDAtMy4xLTIuNTEtNS42MS01LjYxLTUuNjFzLTUuNjEsMi41MS01LjYxLDUuNjFjMCwyLjczLDEuOTUsNSw0LjUyLDUuNXY3LjUzYy0yLjU4LjUxLTQuNTIsMi43OC00LjUyLDUuNSwwLDMuMSwyLjUxLDUuNjEsNS42MSw1LjYxLDEuNjYsMCwzLjE0LS43Miw0LjE3LTEuODZsNi40Nyw0LjAzYy0uMTIuNDUtLjE4LjkyLS4xOCwxLjQxLD'+
			'AsMy4xLDIuNTEsNS42MSw1LjYxLDUuNjFzNS42MS0yLjUxLDUuNjEtNS42MWMwLTIuNzMtMS45NS01LTQuNTItNS41di03LjQ1YzIuNTgtLjUxLDQuNTItMi43OCw0LjUyLTUuNSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExODggMzIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMzNDEgMTEzNy41MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMyNDcgMTM3MC42OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludH'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDY4My43OCAxLjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIxIiB4Mj0iNjIuODMiIHkxPSIxIiB4MT0iLjUiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjY4My4yOCIgeTE9Ii41IiB4MT0iNTIzLjQxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDI2OC4yMSAxNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjI0NC42MSIgeTE9IjE0MS41IiB4MT0iMTUzLjYxIi8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNDEuNSIgeDI9IjI2Ny43MSIgeTE9IjQxLjUiIHgxPSIuNSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExNTEgMzIwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9Ij'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMyMDggMTc5Mi4zNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMCwwdj'+
			'E3OTIuMzZoMzIwOFYwSDBabTI1NjAuODEsMTIyMC41MWwtMzg0LjgtMzQuNS0zMTAuNCw2OC42Ny01NjUuMjgtODcuODctMTQ4Ljc2LDcxLjIxLTM5My4zOS02NS4zOS0zNi41MywxNC44OC05Ny42NS00Mi4zOFY0NDIuMjZsMzIuMDMtMS45NSwyOTIuMzUtMjQuNjQsMTEyMi4xOSw1MC43Niw1MTEuNDMsNDcuNzctMjEuMTksNzA2LjNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDcxMyAyMTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm'+
			'9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZTFlMGRjOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI0IDguNTEgMCAyMTkgMjkxIDIwNC4zIDQzNCAyMDMuNTIgNjMyIDE4MS44NiA3MTMgMTc3Ljk5IDcwMiAwIDI0IDguNTEiLz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy0zIiB5Mj0iMzkuNSIgeDI9IjIxMC41MyIgeTE9IjM5LjUiIHgxPSIxNTAuNSIvPgogICA8cG9seWdvbiBj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDc4LjgyIDE0LjAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPS'+
			'JtNy4xNCwxMS40OVYyLjA4aC0yLjcydjMuMzFjMCw0Ljc5LTEuMTcsNi4xLTMuNTQsNi4xaC0uODh2LTEuOThoLjMyYzEuMTQsMCwxLjk1LS42NywxLjk1LTQuMjRWLjFoNy4wOXYxMS40aC0yLjIyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xOC45LDEwLjM5Yy0uNzcuNzctMS43MywxLjItMy4wNCwxLjJzLTIuMjktLjQzLTMuMDYtMS4yYy0xLjE0LTEuMTQtMS4xNS0yLjQyLTEuMTUtNC41OXMuMDItMy40NiwxLjE1LTQuNTljLjc3LS43NywxLjc1LTEuMiwzLjA2LTEuMnMyLjI3LjQzLDMuMDQsMS4yYzEuMTQsMS4xNCwxLjE3LDIuNDIsMS4xNyw0LjU5cy0uMDMsMy40Ni0xLjE3'+
			'LDQuNTlabS0xLjYyLTcuNzljLS4zMi0uMzctLjgyLS42MS0xLjQyLS42MXMtMS4xLjI0LTEuNDQuNjFjLS40Mi40OC0uNTQsMS4wMi0uNTQsMy4ycy4xMywyLjcxLjU0LDMuMTljLjM0LjM3LjgzLjYyLDEuNDQuNjJzMS4xLS4yNiwxLjQyLS42MmMuNDItLjQ4LjU2LTEuMDEuNTYtMy4xOXMtLjE0LTIuNzItLjU2LTMuMloiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMjIuMzcsMTEuNDlWLjFoMi4yMnYxMS40aC0yLjIyWm02LjI0LDBsLTQtNS45N0wyOC4yOS4xaDIuNjZsLTMuODMsNS4zNSw0LjIxLDYuMDVoLTIuNzJaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTM5LjQ3LD'+
			'ExLjQ5bC0uNjctMi4wMmgtNC4wNWwtLjY5LDIuMDJoLTIuMzJMMzUuODkuMWgxLjc1bDQuMTYsMTEuNGgtMi4zMlptLTIuNjYtOC4wNGwtMS40NCw0LjE1aDIuODNsLTEuMzktNC4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNTAuNjksMTQuMDJ2LTIuNTNoLTcuNDlWLjFoMi4yM3Y5LjQxaDMuODZWLjFoMi4yMnY5LjQxaDEuMzN2NC41MWgtMi4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjEuMDEsMTEuNDl2LTcuMzFsLTQuNDMsNy4zMWgtMS45OVYuMWgyLjIzdjcuM0w2MS4yNS4xaDEuOTh2MTEuNGgtMi4yMloiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBk'+
			'PSJtNjcuNzEsMTEuNDloLTIuNjRsMi4zNS00Ljc0Yy0xLjItLjU0LTEuOTUtMS42Ni0xLjk1LTMuMTEsMC0yLjE4LDEuNTUtMy41NSwzLjc1LTMuNTVoNC40MnYxMS40aC0yLjIydi00LjI5aC0xLjgybC0xLjg3LDQuMjlabTMuNy05LjQ0aC0yLjA4Yy0uOTksMC0xLjY1LjYyLTEuNjUsMS41N3MuNjYsMS42MiwxLjY1LDEuNjJoMi4wOHYtMy4xOVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzYuNDUsNy4xNXYtMi4zN2gyLjM3djIuMzdoLTIuMzdabTAsNC4zNHYtMi4zN2gyLjM3djIuMzdoLTIuMzdaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExMi44OCA5NS4yNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICAgIHN0cm9rZS13aWR0aDogLjVweDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTMgewogICAgICAgIHN0cm9rZT'+
			'ogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGxpbmUgY2xhc3M9ImNscy0zIiB5Mj0iOTMuMjYiIHgyPSIxMTIuMzgiIHkxPSIzMC4yNiIgeDE9IjExMi4zOCIvPgog'+
			'IDxnPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im02LjMuNDJ2MTkuNDNoLS44NFYxLjI2SDEuNzN2MTguNTloLS44NFYuNDJoNS40WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xMy40NC40MmMuOTUsMCwxLjYyLjI1LDIuMDIuNzZzLjU5LDEuMi41OSwyLjF2OC4zN2MwLC45LS4yLDEuNi0uNTksMi4xLS4zOS41LTEuMDYuNzYtMi4wMi43NmgtMi4wNHY1LjM1aC0uODRWLjQyaDIuODhabTEuNzYsMi42OWMwLS40OS0uMTMtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NmgtMi4xNnYxMi4zOGgyLjE2Yy42LDAsMS4wMi0uMTgsMS4yNy0uNTUuMjUtLjM2LjM4LS'+
			'43OS4zOC0xLjI3VjMuMTFaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTI1Ljc2LDE3LjE5YzAsLjg4LS4xOSwxLjU3LS41NywyLjA3cy0xLjA1Ljc2LTIsLjc2aC0uNjRjLS45NSwwLTEuNjItLjI1LTIuMDItLjc2cy0uNTktMS4xOS0uNTktMi4wN1YzLjExYzAtLjkuMi0xLjYuNTktMi4xczEuMDYtLjc2LDIuMDItLjc2aC42NGMuOTUsMCwxLjYyLjI1LDIsLjc2cy41NywxLjIuNTcsMi4xdjE0LjA4Wm0tLjg0LTE0LjI1YzAtLjQ5LS4xMy0uOTEtLjM4LTEuMjktLjI1LS4zNy0uNjgtLjU2LTEuMjctLjU2aC0uODRjLS42LDAtMS4wMi4xOS0xLjI3LjU2LS4yNS4zNy0uMzguOC0uMzgs'+
			'MS4yOXYxNC4zOWMwLC40OS4xMy45MS4zOCwxLjI5LjI1LjM3LjY4LjU2LDEuMjcuNTZoLjg0Yy42LDAsMS4wMi0uMTksMS4yNy0uNTYuMjUtLjM3LjM4LS44LjM4LTEuMjlWMi45NFoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMzkuMTcuNDJ2MTkuNDNoLTkuMjdWLjQyaC44NHYxOC41OWgzLjM5Vi40MmguODR2MTguNTloMy4zNlYuNDJoLjg0WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im00OS4zMS40MnYxOS40M2gtLjg0VjEuMjZoLTMuMDVsLS43MywxNi4zOGMtLjA2LDEuNDctLjc3LDIuMjEtMi4xMywyLjIxaC0uNDh2LS44NGguMzljLjQ5LDAsLjgzLS4xMSwxLjAyLS'+
			'4zMi4yLS4yMS4zMS0uNTYuMzUtMS4wNWwuNzMtMTcuMjJoNC43M1oiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNTkuMywxNy4xOWMwLC44OC0uMTksMS41Ny0uNTcsMi4wN3MtMS4wNS43Ni0yLC43NmgtLjY0Yy0uOTUsMC0xLjYyLS4yNS0yLjAyLS43Ni0uMzktLjUtLjU5LTEuMTktLjU5LTIuMDdWMy4xMWMwLS45LjItMS42LjU5LTIuMS4zOS0uNSwxLjA2LS43NiwyLjAyLS43NmguNjRjLjk1LDAsMS42Mi4yNSwyLC43NnMuNTcsMS4yLjU3LDIuMXYxNC4wOFptLS44NC0xNC4yNWMwLS40OS0uMTMtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NmgtLjg0Yy0uNiww'+
			'LTEuMDIuMTktMS4yNy41Ni0uMjUuMzctLjM4LjgtLjM4LDEuMjl2MTQuMzljMCwuNDkuMTMuOTEuMzgsMS4yOS4yNS4zNy42OC41NiwxLjI3LjU2aC44NGMuNiwwLDEuMDItLjE5LDEuMjctLjU2LjI1LS4zNy4zOC0uOC4zOC0xLjI5VjIuOTRaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTY4LjYuNDJ2Ljg0aC00LjMxdjUuNDloMy4yNXYuODRoLTMuMjV2MTEuNDJoNC4zMXYuODRoLTUuMTVWLjQyaDUuMTVaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTYuNjYsMjUuNDJ2MTkuNDNoLS44NHYtMTIuMjZIMS43M3YxMi4yNmgtLjg0di0xOS40M2guODR2Ni4zM2g0LjA5di02Lj'+
			'MzaC44NFoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTAuMjcsNDQuODVsMi4yMS0xOS40M2gyLjU4bDIuMjEsMTkuNDNoLS44N2wtLjQ4LTQuMjZoLTQuMzFsLS40OCw0LjI2aC0uODdabTEuNDMtNS4xaDQuMTJsLTEuNTEtMTMuNWgtMS4wNmwtMS41NCwxMy41WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0yNS40MiwzNy4wMWguODR2NS4xOGMwLC44OC0uMTksMS41Ny0uNTcsMi4wNy0uMzguNS0xLjA1Ljc2LTIsLjc2aC0uNjRjLS45NSwwLTEuNjItLjI1LTIuMDItLjc2LS4zOS0uNS0uNTktMS4xOS0uNTktMi4wN3YtMTQuMDhjMC0uOS4yLTEuNi41OS0yLjEuMzktLjUs'+
			'MS4wNi0uNzYsMi4wMi0uNzZoLjY0Yy45NSwwLDEuNjIuMjUsMiwuNzYuMzguNS41NywxLjIuNTcsMi4xdjMuMTZoLS44NHYtMy4zM2MwLS40OS0uMTMtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NmgtLjg0Yy0uNiwwLTEuMDIuMTktMS4yNy41Ni0uMjUuMzctLjM4LjgtLjM4LDEuMjl2MTQuMzljMCwuNDkuMTMuOTEuMzgsMS4yOS4yNS4zNy42OC41NiwxLjI3LjU2aC44NGMuNiwwLDEuMDItLjE5LDEuMjctLjU2LjI1LS4zNy4zOC0uOC4zOC0xLjI5di01LjMyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0zNi4zMSwyNi4yNmgtMy4xNHYxOC41OWgtLjg0di0xOC'+
			'41OWgtMy4xMXYtLjg0aDcuMDh2Ljg0WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im00NS4yNSw0Mi4xOWMwLC44OC0uMTksMS41Ny0uNTcsMi4wN3MtMS4wNS43Ni0yLC43NmgtLjY0Yy0uOTUsMC0xLjYyLS4yNS0yLjAyLS43Ni0uMzktLjUtLjU5LTEuMTktLjU5LTIuMDd2LTE0LjA4YzAtLjkuMi0xLjYuNTktMi4xLjM5LS41LDEuMDYtLjc2LDIuMDItLjc2aC42NGMuOTUsMCwxLjYyLjI1LDIsLjc2cy41NywxLjIuNTcsMi4xdjE0LjA4Wm0tLjg0LTE0LjI1YzAtLjQ5LS4xMy0uOTEtLjM4LTEuMjktLjI1LS4zNy0uNjgtLjU2LTEuMjctLjU2aC0uODRjLS42LDAtMS4wMi4xOS0xLjI3'+
			'LjU2LS4yNS4zNy0uMzguOC0uMzgsMS4yOXYxNC4zOWMwLC40OS4xMy45MS4zOCwxLjI5LjI1LjM3LjY4LjU2LDEuMjcuNTZoLjg0Yy42LDAsMS4wMi0uMTksMS4yNy0uNTYuMjUtLjM3LjM4LS44LjM4LTEuMjl2LTE0LjM5WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im01NC41NCwyNS40MnYxOS40M2gtLjg0di05Ljg4aC0yLjIxbC0xLjc0LDkuODhoLS44N2wxLjc2LTEwYy0uNi0uMTctMS4wMi0uNDktMS4yNy0uOTctLjI1LS40OC0uMzgtMS4wNy0uMzgtMS43OHYtMy44NGMwLS45LjItMS42LjU5LTIuMS4zOS0uNSwxLjA2LS43NiwyLjAyLS43NmgyLjk0Wm0tLjg0Ljg0aC0yLjIxYy'+
			'0uNiwwLTEuMDIuMTktMS4yNy41Ni0uMjUuMzctLjM4LjgtLjM4LDEuMjl2NC4xN2MwLC40OS4xMy45MS4zOCwxLjI3cy42OC41NSwxLjI3LjU1aDIuMjF2LTcuODRaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTY5LjQ0LDQ0LjAxdjMuMjhoLS43M2wtLjItMi40NGgtOS43MnYtMTkuNDNoLjg0djE4LjU5aDMuMzl2LTE4LjU5aC44NHYxOC41OWgzLjM2di0xOC41OWguODR2MTguNTloMS4zN1oiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzcuODEsMjUuNDJ2Ljg0aC00LjMxdjUuNDloMy4yNXYuODRoLTMuMjV2MTEuNDJoNC4zMXYuODRoLTUuMTV2LTE5LjQzaDUuMTVaIi8+'+
			'CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTg2LjYsMjUuNDJ2Ljg0aC00LjMxdjUuNDloMy4yNXYuODRoLTMuMjV2MTEuNDJoNC4zMXYuODRoLTUuMTV2LTE5LjQzaDUuMTVaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTEuNzMsNTEuMjZ2NS40OWgxLjkzYy45NSwwLDEuNjIuMjUsMi4wMi43NnMuNTksMS4xOS41OSwyLjA3djcuNDJjMCwuOS0uMiwxLjYtLjU5LDIuMXMtMS4wNi43Ni0yLjAyLjc2SC44OXYtMTkuNDNoNS4xNXYuODRIMS43M1ptMCw2LjMzdjExLjRoMi4wNGMuNiwwLDEuMDItLjE4LDEuMjctLjU1LjI1LS4zNi4zOC0uNzkuMzgtMS4yN3YtNy43M2MwLS40OS0uMT'+
			'MtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NkgxLjczWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xNi43MSw1MC40MmwtMi4zLDE3LjI4Yy0uMDkuNjctLjM0LDEuMi0uNzQsMS41OC0uNC4zOC0xLjAxLjU3LTEuODMuNTdoLS43NnYtLjg0aC44N2MuNTIsMCwuOTEtLjE0LDEuMTYtLjQzLjI1LS4yOS40MS0uNjQuNDYtMS4wNWwuNS0zLjg2aC0yLjE2di0uMDNsLTIuMDItMTMuMjJoLjg3bDEuODgsMTIuNGgxLjU3bDEuNjItMTIuNGguODdaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTI1LjA5LDY5LjAxaC45djMuMjhoLS43M2wtLjItMi40NGgtNS43'+
			'NGwtLjIsMi40NGgtLjczbC4wMy0zLjI4Yy40NywwLC44LS4xMSwxLjAxLS4zMi4yMS0uMjEuMzItLjU2LjM0LTEuMDVsLjczLTE3LjIyaDQuNTl2MTguNTlabS0uODQsMHYtMTcuNzVoLTIuOTFsLS43MywxNi4zOGMtLjAyLjY3LS4yMSwxLjEzLS41NiwxLjM3aDQuMloiLz4KICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMzUuOTgsNTAuNDJsLTIuMywxNy4yOGMtLjA5LjY3LS4zNCwxLjItLjc0LDEuNTgtLjQuMzgtMS4wMS41Ny0xLjgzLjU3aC0uNzZ2LS44NGguODdjLjUyLDAsLjkxLS4xNCwxLjE2LS40My4yNS0uMjkuNDEtLjY0LjQ2LTEuMDVsLjUtMy44NmgtMi4xNnYtLjAzbC0yLjAyLT'+
			'EzLjIyaC44N2wxLjg4LDEyLjRoMS41N2wxLjYyLTEyLjRoLjg3WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im01MC4xNSw2OS4wMXYzLjI4aC0uNzNsLS4yLTIuNDRoLTkuNzJ2LTE5LjQzaC44NHYxOC41OWgzLjM5di0xOC41OWguODR2MTguNTloMy4zNnYtMTguNTloLjg0djE4LjU5aDEuMzdaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTU4LjUyLDUwLjQydi44NGgtNC4zMXY1LjQ5aDMuMjV2Ljg0aC0zLjI1djExLjQyaDQuMzF2Ljg0aC01LjE1di0xOS40M2g1LjE1WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im02Ny4zMSw1MC40MnYuODRoLTQuMzF2NS40OWgz'+
			'LjI1di44NGgtMy4yNXYxMS40Mmg0LjMxdi44NGgtNS4xNXYtMTkuNDNoNS4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJtNy4zMyw3Ni4yNmgtMy4xNHYxOC41OWgtLjg0di0xOC41OUguMjV2LS44NGg3LjA4di44NFoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJtMTYuMDEsNzkuMjhjMCwxLjUzLS42MiwyLjQ5LTEuODUsMi44OC42NS4xNywxLjEyLjQ4LDEuNDEuOTQuMjkuNDYuNDMsMS4wOC40MywxLjg2djcuMDNjMCwuOS0uMiwxLjYtLjU5LDIuMXMtMS4wNi43Ni0yLjAyLjc2aC0yLjcydi0xOS40M2gyLjcyYy45NSwwLDEuNjIuMjUsMi4wMi43NnMuNTksMS4xOS41OS'+
			'wyLjA3djEuMDRabS0zLjQ0LDIuNDZjLjksMCwxLjU1LS4yMiwxLjk3LS42NnMuNjMtMS4wNy42My0xLjg5di0xLjA5YzAtLjQ5LS4xMy0uOTEtLjM4LTEuMjktLjI1LS4zNy0uNjgtLjU2LTEuMjctLjU2aC0xLjk5djUuNDloMS4wNFptMi42LDMuM2MwLS44Mi0uMTktMS40My0uNTctMS44M3MtMS4wMi0uNi0xLjkyLS42aC0xLjE1djExLjM3aDEuOTljLjYsMCwxLjA0LS4xOSwxLjM0LS41Ni4zLS4zNy40LS43OS4zMS0xLjI2di03LjExWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im0yNS43LDkyLjE5YzAsLjg4LS4xOSwxLjU3LS41NywyLjA3cy0xLjA1Ljc2LTIsLjc2aC0uNjRjLS45'+
			'NSwwLTEuNjItLjI1LTIuMDItLjc2cy0uNTktMS4xOS0uNTktMi4wN3YtMTQuMDhjMC0uOS4yLTEuNi41OS0yLjFzMS4wNi0uNzYsMi4wMi0uNzZoLjY0Yy45NSwwLDEuNjIuMjUsMiwuNzZzLjU3LDEuMi41NywyLjF2MTQuMDhabS0uODQtMTQuMjVjMC0uNDktLjEzLS45MS0uMzgtMS4yOS0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZoLS44NGMtLjYsMC0xLjAyLjE5LTEuMjcuNTYtLjI1LjM3LS4zOC44LS4zOCwxLjI5djE0LjM5YzAsLjQ5LjEzLjkxLjM4LDEuMjkuMjUuMzcuNjguNTYsMS4yNy41NmguODRjLjYsMCwxLjAyLS4xOSwxLjI3LS41Ni4yNS0uMzcuMzgtLjguMzgtMS4yOXYtMTQuMz'+
			'laIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTM0LjY2LDc1LjQyaC44NHYxOS40M2gtLjg0di0xMy40N2wtMy45OCwzLjk4djkuNDloLS44NHYtMTkuNDNoLjg0djguODVsMy45OC0zLjk4di00Ljg3Wm0tLjY0LTIuNzd2Ljg3aC0yLjcydi0uODdoMi43MloiLz4KICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJtNTAuMTIsNzkuMjhjMCwxLjUzLS42MiwyLjQ5LTEuODUsMi44OC42NS4xNywxLjEyLjQ4LDEuNDEuOTQuMjkuNDYuNDMsMS4wOC40MywxLjg2djcuMDNjMCwuOS0uMiwxLjYtLjU5LDIuMS0uMzkuNS0xLjA2Ljc2LTIuMDIuNzZoLTIuNzJ2LTE5LjQzaDIuNzJjLjk1LDAsMS42'+
			'Mi4yNSwyLjAyLjc2LjM5LjUuNTksMS4xOS41OSwyLjA3djEuMDRabS0zLjQ0LDIuNDZjLjksMCwxLjU1LS4yMiwxLjk3LS42NnMuNjMtMS4wNy42My0xLjg5di0xLjA5YzAtLjQ5LS4xMy0uOTEtLjM4LTEuMjktLjI1LS4zNy0uNjgtLjU2LTEuMjctLjU2aC0xLjk5djUuNDloMS4wNFptMi42LDMuM2MwLS44Mi0uMTktMS40My0uNTctMS44My0uMzgtLjQtMS4wMi0uNi0xLjkyLS42aC0xLjE1djExLjM3aDEuOTljLjYsMCwxLjA0LS4xOSwxLjM0LS41NnMuNC0uNzkuMzEtMS4yNnYtNy4xMVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJtNTYuNzUsODEuNzJjLjk1LDAsMS42Mi4yNiwyLj'+
			'AyLjc3LjM5LjUxLjU5LDEuMjEuNTksMi4wOXY3LjQ1YzAsLjg4LS4yLDEuNTctLjU5LDIuMDdzLTEuMDYuNzYtMi4wMi43NmgtMi43N3YtMTkuNDNoLjg0djYuM2gxLjkzWm0xLjc2LDIuNzJjMC0uNDktLjEzLS45MS0uMzgtMS4yOS0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZoLTIuMDR2MTEuNDJoMi4wNGMuNiwwLDEuMDItLjE5LDEuMjctLjU2LjI1LS4zNy4zOC0uOC4zOC0xLjI5di03LjczWm00LjA5LTkuMDJ2MTkuNDNoLS44NHYtMTkuNDNoLjg0WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im02Ny43LDc2LjI2djUuNDloMS45M2MuOTUsMCwxLjYyLjI1LDIuMDIuNzZzLjU5LDEu'+
			'MTkuNTksMi4wN3Y3LjQyYzAsLjktLjIsMS42LS41OSwyLjFzLTEuMDYuNzYtMi4wMi43NmgtMi43N3YtMTkuNDNoNS4xNXYuODRoLTQuMzFabTAsNi4zM3YxMS40aDIuMDRjLjYsMCwxLjAyLS4xOCwxLjI3LS41NXMuMzgtLjc5LjM4LTEuMjd2LTcuNzNjMC0uNDktLjEzLS45MS0uMzgtMS4yOS0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZoLTIuMDRaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTgyLjE1LDkyLjE5YzAsLjg4LS4xOSwxLjU3LS41NywyLjA3cy0xLjA1Ljc2LTIsLjc2aC0uNjRjLS45NSwwLTEuNjItLjI1LTIuMDItLjc2LS4zOS0uNS0uNTktMS4xOS0uNTktMi4wN3YtMT'+
			'QuMDhjMC0uOS4yLTEuNi41OS0yLjEuMzktLjUsMS4wNi0uNzYsMi4wMi0uNzZoLjY0Yy45NSwwLDEuNjIuMjUsMiwuNzZzLjU3LDEuMi41NywyLjF2MTQuMDhabS0uODQtMTQuMjVjMC0uNDktLjEzLS45MS0uMzgtMS4yOS0uMjUtLjM3LS42OC0uNTYtMS4yNy0uNTZoLS44NGMtLjYsMC0xLjAyLjE5LTEuMjcuNTYtLjI1LjM3LS4zOC44LS4zOCwxLjI5djE0LjM5YzAsLjQ5LjEzLjkxLjM4LDEuMjkuMjUuMzcuNjguNTYsMS4yNy41NmguODRjLjYsMCwxLjAyLS4xOSwxLjI3LS41Ni4yNS0uMzcuMzgtLjguMzgtMS4yOXYtMTQuMzlaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0ibTg5LjE3'+
			'LDc1LjQyYy45NSwwLDEuNjIuMjUsMi4wMi43Ni4zOS41LjU5LDEuMi41OSwyLjF2OC4zN2MwLC45LS4yLDEuNi0uNTksMi4xLS4zOS41LTEuMDYuNzYtMi4wMi43NmgtMi4wNHY1LjM1aC0uODR2LTE5LjQzaDIuODhabTEuNzYsMi42OWMwLS40OS0uMTMtLjkxLS4zOC0xLjI5LS4yNS0uMzctLjY4LS41Ni0xLjI3LS41NmgtMi4xNnYxMi4zOGgyLjE2Yy42LDAsMS4wMi0uMTgsMS4yNy0uNTUuMjUtLjM2LjM4LS43OS4zOC0xLjI3di04LjcxWiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDk1LjYgMTU2LjMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L'+
			'7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTQ4LjY4LDEzMy42YzAsNi45LTEuNTEsMTIuMzItNC41MSwxNi4yOC0zLjAxLDMuOTYtOC4yNSw1Ljk0LTE1LjczLDUuOTRoLTcuNDhjLTcuNDgsMC0xMi43Ni0xLjk4LTE1Ljg0LTUuOTRzLTQuNjItOS4zOC00LjYyLTE2LjI4VjIyLjk0YzAtNy4wNCwxLjU0LTEyLjU0LDQuNjItMTYuNVMxMy40OC41LDIwLjk2LjVoNy40OGM3LjQ4LDAsMTIuNzIsMS45OCwxNS43Myw1Ljk0LDMsMy45Niw0LjUxLDkuNDYsNC41MSwxNi41djExMC42NlptLTYuNi0xMTEuOThjMC0zLjgxLS45OS03LjE4LTIu'+
			'OTctMTAuMTItMS45OC0yLjkzLTUuMzItNC40LTEwLjAxLTQuNGgtOS4wMmMtNC43LDAtOC4wMywxLjQ3LTEwLjAxLDQuNC0xLjk4LDIuOTQtMi45Nyw2LjMxLTIuOTcsMTAuMTJ2MTEzLjA4YzAsMy44Mi45OSw3LjE5LDIuOTcsMTAuMTIsMS45OCwyLjk0LDUuMzEsNC40LDEwLjAxLDQuNGg5LjAyYzQuNjksMCw4LjAzLTEuNDYsMTAuMDEtNC40LDEuOTgtMi45MywyLjk3LTYuMywyLjk3LTEwLjEyVjIxLjYyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im05NS4xLDEuODJ2MTUyLjY4aC02LjZWOC40MmgtMTguOTJWMS44MmgyNS41MloiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDM4MS45IDcyNi4zNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQogICAgPC9zdHlsZT4KID'+
			'wvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxnPgogICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0zNzkuOSw4My4zNWMtNjIuNDYsMjkuMzItODEsMjguNTktODYsMjItNi44NC05LjAxLDcuOTYtMzMuODcsMjItNDgsMTMuMjctMTMuMzUsMzIuMDYtMjMuMzMsMzUtMjAsMy4zLDMuNzQtMTEuOTgsMjUuOC0zMSw0MS0zMC44MiwyNC42NC03Ni45NywzNS43LTg3LDIyLTYuMDgtOC4zLDYuMDYtMjYuODIsMy0yNS00NC41LDI2LjUtMTAwLjUsNzMuNS0xNzkuNSwxNzkuNS0xMS4wNywxNC44NS0zNy4xNyw1NS45Ny0zMS41LDg2LjUsMS45MSwx'+
			'MC4yNyw0LjcxLDI1LjQsMTUsMzEsMzUuMzksMTkuMjgsMTQ1LjQxLTgxLjg1LDEzMC0xMTMtNy40NC0xNS4wNC00NC4yNi0xNC4wNS02OS02LTY2LjU5LDIxLjY3LTExOC4wNSwxMTguMDEtOTIsMjAyLDIxLjAyLDY3Ljc4LDg5LjExLDExNi41MywxNjksMTE5Ii8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTMxLjE2LDI4MS43NWM0MS40OS00Ny42OSw3NC45MS04My43LDk2LjU4LTEwNi42MiwxMi4zNC0xMy4wNSw3My4zNi03Ny4zNiw5OS4zOS0xNDcuNTIsMy44NS0xMC4zOCw3LjIyLTIxLjY1LDQuMTQtMjQuNzctNi41OC02LjY5LTM4LjU5LDI4LjM0LTQ5Ljg1LDQwLjY3LTI3Ljc2LD'+
			'MwLjM5LTc2Ljg5LDk1LjIxLTE0NC4wMSwyNDEuNjgiLz4KICA8L2c+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzQuOSw3MjQuMzVjMjMuMjMtMTcuOTUsNTIuMTctMzcuNjEsODctNTYsMzguMjgtMjAuMjEsNzMuOTYtMzMuNzYsMTA0LTQzIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMwNS4xMSAxNDIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvt'+
			'C5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjI4MS41IiB5MT0iMTQxLjUiIHgxPSIxOTAuNSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjU0Ljc5IiB4Mj0iMTMuNSIgeTE9IjI4LjUiIHgxPSIxMy41Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNDEuNSIgeDI9IjI3LjQ3IiB5MT0iNDEuNSIgeDE9Ii41Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNDEuNSIgeDI9IjMwNC42MSIgeTE9IjQxLjUiIHgxPSIzNy4zOSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExMS4yOCAzMzkuNzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMmUxZGQ7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0L'+
			'vQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIzMzkuMjYiIHgyPSIxMTAuNzgiIHkxPSIyODQuMjYiIHgxPSIuNSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjIxOC45NiIgeDI9IjI3IiB5MT0iMTkwLjc2IiB4MT0iMjciLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIyMDQuODYiIHgyPSIxMi45IiB5MT0iMjA0Ljg2IiB4MT0iNDEuMSIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9Ijc4LjA3IiB4Mj0iMjYuNzkiIHkxPSI0OS44NyIgeDE9IjI2Ljc5Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNjMuOTciIHgyPSIxMi42'+
			'OSIgeTE9IjYzLjk3IiB4MT0iNDAuODkiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI5MS41OSIgeDI9IjI3IiB5MT0iMTYxLjMyIiB4MT0iMjciLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSIuNSIgeDI9IjI3IiB5MT0iMzYuNDEiIHgxPSIyNyIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDEzMi42IDE0Ni42IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogMy42cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+Ci'+
			'A8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xMzAuOCwxLjhjLTIwLjg2LDEzLjkzLTQ3LjAyLDM0LjI5LTczLDYzQzMxLjQzLDkzLjkzLDEzLjYyLDEyMi40MiwxLjgsMTQ0LjgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=-839;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 121px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -177px;';
		hs+='visibility : inherit;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDIzMiA1Mi4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjY2M1NzIyOwogICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDsKICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kOwogICAgICAgIHN0cm9rZS13aWR0aDogNHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZW'+
			'ZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMjMwLDUuMDljLTQ3LjIzLTEuMjktODAuNzgtMi4zOS05OS0zLDAsMC03Ni4wNC0yLjU2LTEyMCwyMC0yLjQsMS4yMy05LjE3LDQuNy05LDksLjE2LDQuMDksNi41Miw2LjksOSw4LDI2Ljc2LDExLjgzLDk1LDExLDk1LDExLDI2LjQ1LS4yNyw1OS44OC41Myw5Mi04LDkuMjQtMi40NSwxOC45OS01Ljg1LDE5LTEwLDAtMi42LTMuODEtNS4xNS0xMi04LTExLjE2LTMuODgtMzIuMDEtOC44NS02OC03Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDIxNS44NSA1NTguMDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNjYzU3MjI7CiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kOwogICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+Ci'+
			'A8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0yMTAuNDQsMmMtMjMuNjQsMzEuMTgtNDguOTQsNjguNzktNzMsMTEzLTIwLjU5LDM3Ljg0LTM2LjU1LDczLjY4LTQ5LDEwNiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTU1LjQ0LDMwNUM3LjU2LDUxMC4yLS4xMyw1NTUuMzQsMi40NCw1NTZjNS44OCwxLjUxLDk0LjkxLTIyMi41NSwxNjYtMjY0LDcuNTYtNC40MSwyOC42OS0xNi43MywzOS05LDguODgsNi42Niw2LjgyLDI1LjM5LDQsMzMtMTAsMjctMjEuMzgsNDQuNjctMzMsNTUiLz4KIDwv'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMyNi44NiAxMzQuMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'00IHsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNXB4OwogICAgICB9CgogICAgICAuY2xzLTQsIC5jbHMtNSB7CiAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ6IDEwOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlOiAjMjQyNTI3OwogICAgICAgIHN0cm9rZS13aWR0aDogLjhweDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDE5LjYyIDkwLjMg'+
			'MCAzMjYuODYgMTcuMTcgMzI2Ljg2IDExNi44MSAyMTQuMTcgMTMwLjU4IDEwMS40OSAxMjguNzQgMzguMzYgMTM0LjI2IDAgMTE1LjE5IDAgMTkuNjIiLz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy01IiB5Mj0iMTAwLjI5IiB4Mj0iNjQuNTEiIHkxPSIxMDAuMjkiIHgxPSI0My41NiIvPgogICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNjEuODYgMTAzLjU2IDYxLjMyIDEwMi45OCA2NC4yIDEwMC4zIDYxLjMyIDk3LjYxIDYxLjg2IDk3LjAzIDY1LjM4IDEwMC4zIDYxLjg2IDEwMy41NiIvPgogIDwvZz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy01IiB5Mj0iMTAwLjI5Ii'+
			'B4Mj0iMTczLjU5IiB5MT0iMTAwLjI5IiB4MT0iMTUyLjY1Ii8+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxNzAuOTQgMTAzLjU2IDE3MC40IDEwMi45OCAxNzMuMjkgMTAwLjMgMTcwLjQgOTcuNjEgMTcwLjk0IDk3LjAzIDE3NC40NiAxMDAuMyAxNzAuOTQgMTAzLjU2Ii8+CiAgPC9nPgogIDxnPgogICA8bGluZSBjbGFzcz0iY2xzLTUiIHkyPSIxMDAuMjkiIHgyPSIyNzguNjciIHkxPSIxMDAuMjkiIHgxPSIyNTcuNzMiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjI3Ni4wMyAxMDMuNTYgMjc1LjQ4IDEwMi45OCAyNzguMzcgMTAwLjMgMjc1LjQ4IDk3'+
			'LjYxIDI3Ni4wMyA5Ny4wMyAyNzkuNTQgMTAwLjMgMjc2LjAzIDEwMy41NiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNDQuNjEsNjguOXYxMy41NmgtMTUuNTV2LTIwLjI0bDEzLjQyLTIwLjA5di0yLjU2YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2My4xOWgtMi4xM3YtMi43N2MwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMD'+
			'gsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2wtMTMuNDIsMjAuMDl2MTcuNDdoMTEuMjl2LTExLjQzaDIuMTNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTYxLjU4LDc1LjcyYzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjkyLTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYs'+
			'My4wNSwxLjQ2LDUuMzN2MzUuNzFabS0yLjEzLTM2LjE0YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2MzYuNDljMCwxLjIzLjMyLDIuMzIuOTYsMy4yNy42NC45NSwxLjcyLDEuNDIsMy4yMywxLjQyaDIuOTFjMS41MSwwLDIuNTktLjQ3LDMuMjMtMS40Mi42NC0uOTUuOTYtMi4wMy45Ni0zLjI3di0zNi40OVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNjkuNDYsMzMuMTl2NDkuMjdoLTIuMTN2LTQ3LjE0aC02LjExdi0yLjEzaDguMj'+
			'RaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTgwLjY3LDMzLjE5djQ5LjI3aC0yLjEzdi00Ny4xNGgtNi4xMXYtMi4xM2g4LjI0WiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTQzLjYxLDY4Ljl2MTMuNTZoLTE1LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjct'+
			'MS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xNjAuNTgsNzUuNzJjMCwyLjIzLS40OSwzLjk4LTEuNDYsNS4yNS0uOTcsMS4yOC0yLjY2LDEuOTItNS4wOCwxLjkyaC0yLjQxYy0yLjQxLDAtNC4xMi0uNjQtNS4xMS0xLjkyLS45OS0xLjI4LTEuNDktMy4wMy0xLjQ5LTUuMjV2LTM1LjcxYzAtMi4yNy41LTQuMDUsMS40OS01LjMzLjk5LTEuMjgsMi43LTEuOTIsNS4xMS0xLjkyaDIuND'+
			'FjMi40MSwwLDQuMTEuNjQsNS4wOCwxLjkyLjk3LDEuMjgsMS40NiwzLjA1LDEuNDYsNS4zM3YzNS43MVptLTIuMTMtMzYuMTRjMC0xLjIzLS4zMi0yLjMyLS45Ni0zLjI3LS42NC0uOTUtMS43Mi0xLjQyLTMuMjMtMS40MmgtMi45MWMtMS41MiwwLTIuNTkuNDctMy4yMywxLjQyLS42NC45NS0uOTYsMi4wNC0uOTYsMy4yN3YzNi40OWMwLDEuMjMuMzIsMi4zMi45NiwzLjI3LjY0Ljk1LDEuNzIsMS40MiwzLjIzLDEuNDJoMi45MWMxLjUxLDAsMi41OS0uNDcsMy4yMy0xLjQyLjY0LS45NS45Ni0yLjAzLjk2LTMuMjd2LTM2LjQ5WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xNzguNTQs'+
			'NjguOXYxMy41NmgtMTUuNTV2LTIwLjI0bDEzLjQyLTIwLjA5di0yLjU2YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2My4xOWgtMi4xM3YtMi43N2MwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2wtMTMuNDIsMjAuMDl2MTcuNDdoMTEuMjl2LTExLjQzaDIuMTNaIi8+CiAgIDxwYXRoIGNsYX'+
			'NzPSJjbHMtMyIgZD0ibTE4OC44Myw0OS4yM2MyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMydjE5LjI0YzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjkyLTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2gtMi4xM3YtMy4xOWMw'+
			'LTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djkuNjZoNi44OVptNC40LDYuODJjMC0xLjIzLS4zMi0yLjMxLS45Ni0zLjIzcy0xLjcyLTEuMzgtMy4yMy0xLjM4aC03LjF2MjQuNjRjMCwxLjIzLjMyLDIuMzIuOTYsMy4yNy42NC45NSwxLjcyLDEuNDIsMy4yMywxLjQyaDIuOTFjMS41MSwwLDIuNTktLjQ3LDMuMjMtMS40Mi42NC0uOTUuOTYtMi4wMy45Ni0zLjI3di0yMC4wMloiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD'+
			'0ibTIyNS40NCw0NS41N3Y5LjAyaDMuMTdjMS41NiwwLDIuNjcuNDEsMy4zMSwxLjI0LjY0LjgzLjk3LDEuOTYuOTcsMy40djEyLjE5YzAsMS40Ny0uMzIsMi42Mi0uOTcsMy40NS0uNjQuODMtMS43NSwxLjI0LTMuMzEsMS4yNGgtNC41NXYtMzEuOTJoOC40NnYxLjM4aC03LjA4Wm0wLDEwLjR2MTguNzJoMy4zNmMuOTgsMCwxLjY4LS4zLDIuMDktLjkuNDEtLjYuNjItMS4yOS42Mi0yLjA5di0xMi43YzAtLjgtLjIxLTEuNS0uNjItMi4xMnMtMS4xMS0uOTItMi4wOS0uOTJoLTMuMzZaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD0ibTI0Ni41MSw0NC4xOWwtMy43NywyOC4zOGMtLjE1LDEu'+
			'MS0uNTYsMS45Ny0xLjIyLDIuNi0uNjYuNjMtMS42Ni45NC0zLjAxLjk0aC0xLjI0di0xLjM4aDEuNDNjLjg2LDAsMS41LS4yNCwxLjkxLS43MXMuNjctMS4wNS43Ni0xLjczbC44My02LjM1aC0zLjU0di0uMDVsLTMuMzEtMjEuNzFoMS40M2wzLjA4LDIwLjM4aDIuNThsMi42Ny0yMC4zOGgxLjQzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0yNTYuNzIsNzQuNzNoMS40N3Y1LjM4aC0xLjJsLS4zMi00aC05LjQzbC0uMzIsNGgtMS4ybC4wNS01LjM4Yy43NywwLDEuMzItLjE4LDEuNjYtLjUzLjM0LS4zNS41Mi0uOTMuNTUtMS43MmwxLjItMjguMjloNy41NHYzMC41NFptLTEuMzgsMH'+
			'YtMjkuMTZoLTQuNzhsLTEuMiwyNi45MWMtLjAzLDEuMS0uMzQsMS44Ni0uOTIsMi4yNWg2LjlaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD0ibTI3MS4wNyw0NC4xOWwtMy43NywyOC4zOGMtLjE1LDEuMS0uNTYsMS45Ny0xLjIyLDIuNi0uNjYuNjMtMS42Ni45NC0zLjAxLjk0aC0xLjI0di0xLjM4aDEuNDNjLjg2LDAsMS41LS4yNCwxLjkxLS43MXMuNjctMS4wNS43Ni0xLjczbC44My02LjM1aC0zLjU0di0uMDVsLTMuMzEtMjEuNzFoMS40M2wzLjA4LDIwLjM4aDIuNThsMi42Ny0yMC4zOGgxLjQzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0yOTAuOCw3NC43M3Y1LjM4aC0x'+
			'LjJsLS4zMi00aC0xNS45NnYtMzEuOTJoMS4zOHYzMC41NGg1LjU3di0zMC41NGgxLjM4djMwLjU0aDUuNTJ2LTMwLjU0aDEuMzh2MzAuNTRoMi4yNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy00IiBkPSJtMzAxLjAyLDQ0LjE5djEuMzhoLTcuMDh2OS4wMmg1LjM0djEuMzhoLTUuMzR2MTguNzdoNy4wOHYxLjM4aC04LjQ2di0zMS45Mmg4LjQ2WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Im0zMTEuOTIsNDQuMTl2MS4zOGgtNy4wOHY5LjAyaDUuMzR2MS4zOGgtNS4zNHYxOC43N2g3LjA4djEuMzhoLTguNDZ2LTMxLjkyaDguNDZaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDEwOS4zOSAxMzQuMjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIgewogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNjYzU3MjI7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgIC'+
			'AgICAgc3Ryb2tlOiAjMDAwOwogICAgICAgIHN0cm9rZS13aWR0aDogLjc1cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy00IHsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICMyNDI1Mjc7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuOHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0iX9Ch0LvQvtC5XzEtMiI+CiAgPHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjAgMTkuNjIgOTAuMyAwIDEwOS4z'+
			'IDEuMzggMTA5LjM5IDEyOC44NyAxMDEuNDkgMTI4Ljc0IDM4LjM2IDEzNC4yNiAwIDExNS4xOSAwIDE5LjYyIi8+CiAgPGc+CiAgIDxsaW5lIGNsYXNzPSJjbHMtNCIgeTI9IjEwMC4yOSIgeDI9IjY0LjUxIiB5MT0iMTAwLjI5IiB4MT0iNDMuNTYiLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYxLjg2IDEwMy41NiA2MS4zMiAxMDIuOTggNjQuMiAxMDAuMyA2MS4zMiA5Ny42MSA2MS44NiA5Ny4wMyA2NS4zOCAxMDAuMyA2MS44NiAxMDMuNTYiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTQ0LjYxLDY4Ljl2MTMuNTZoLTE1LjU1di0yMC4yNG'+
			'wxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im02MS41OCw3NS43'+
			'MmMwLDIuMjMtLjQ5LDMuOTgtMS40Niw1LjI1LS45NywxLjI4LTIuNjYsMS45Mi01LjA4LDEuOTJoLTIuNDFjLTIuNDEsMC00LjEyLS42NC01LjExLTEuOTItLjk5LTEuMjgtMS40OS0zLjAzLTEuNDktNS4yNXYtMzUuNzFjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwyLjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjM1LjcxWm0tMi4xMy0zNi4xNGMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUxLDAtMi41OS40Ny0zLjIzLDEuND'+
			'ItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djM2LjQ5YzAsMS4yMy4zMiwyLjMyLjk2LDMuMjcuNjQuOTUsMS43MiwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMzYuNDlaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTY5LjQ2LDMzLjE5djQ5LjI3aC0yLjEzdi00Ny4xNGgtNi4xMXYtMi4xM2g4LjI0WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im04MC42NywzMy4xOXY0OS4yN2gtMi4xM3YtNDcuMTRoLTYuMTF2LTIuMTNoOC4yNFoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDEwNC44NyAxMjkuMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMjQyNTI3OwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgIC'+
			'AgICBzdHJva2U6ICMwMDA7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAuNzVweDsKICAgICAgfQoKICAgICAgLmNscy0zLCAuY2xzLTQgewogICAgICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMCAwIDEwNC43NCA3LjYgMTA0Ljg3'+
			'IDEyOS4yIC4wOCAxMjcuNDkgMCAwIi8+CiAgPGc+CiAgIDxsaW5lIGNsYXNzPSJjbHMtNCIgeTI9Ijk4LjkyIiB4Mj0iNjQuMjkiIHkxPSI5OC45MiIgeDE9IjQzLjM0Ii8+CiAgIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI2MS42NCAxMDIuMTggNjEuMSAxMDEuNiA2My45OCA5OC45MiA2MS4xIDk2LjIzIDYxLjY0IDk1LjY1IDY1LjE2IDk4LjkyIDYxLjY0IDEwMi4xOCIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMzQuMyw2Ny41MnYxMy41NmgtMTUuNTV2LTIwLjI0bDEzLjQyLTIwLjA5di0yLjU2YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNj'+
			'QtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTIsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2My4xOWgtMi4xM3YtMi43N2MwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2wtMTMuNDIsMjAuMDl2MTcuNDdoMTEuMjl2LTExLjQzaDIuMTNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTUxLjI3LDc0LjM0YzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjky'+
			'LTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2MzUuNzFabS0yLjEzLTM2LjE0YzAtMS4yMy0uMzItMi4zMi0uOTYtMy4yNy0uNjQtLjk1LTEuNzItMS40Mi0zLjIzLTEuNDJoLTIuOTFjLTEuNTEsMC0yLjU5LjQ3LTMuMjMsMS40Mi0uNjQuOTUtLjk2LDIuMDQtLjk2LDMuMjd2MzYuNDljMCwxLjIzLjMyLDIuMz'+
			'IuOTYsMy4yNy42NC45NSwxLjcyLDEuNDIsMy4yMywxLjQyaDIuOTFjMS41MSwwLDIuNTktLjQ3LDMuMjMtMS40Mi42NC0uOTUuOTYtMi4wMy45Ni0zLjI3di0zNi40OVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNjkuMjQsNjcuNTJ2MTMuNTZoLTE1LjU1di0yMC4yNGwxMy40Mi0yMC4wOXYtMi41NmMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUxLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djMuMTloLTIuMTN2LTIuNzdjMC0yLjI3LjUtNC4wNSwxLjQ5LTUuMzMuOTktMS4yOCwy'+
			'LjctMS45Miw1LjExLTEuOTJoMi40MWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMzdjIuNzdsLTEzLjQyLDIwLjA5djE3LjQ3aDExLjI5di0xMS40M2gyLjEzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im03OS41Myw0Ny44NWMyLjQxLDAsNC4xMS42NCw1LjA4LDEuOTIuOTcsMS4yOCwxLjQ2LDMuMDUsMS40Niw1LjMydjE5LjI0YzAsMi4yMy0uNDksMy45OC0xLjQ2LDUuMjUtLjk3LDEuMjgtMi42NiwxLjkyLTUuMDgsMS45MmgtMi40MWMtMi40MSwwLTQuMTItLjY0LTUuMTEtMS45Mi0uOTktMS4yOC0xLjQ5LTMuMDMtMS40OS01LjI1di'+
			'0zNS43MWMwLTIuMjcuNS00LjA1LDEuNDktNS4zMy45OS0xLjI4LDIuNy0xLjkyLDUuMTEtMS45MmgyLjQxYzIuNDEsMCw0LjExLjY0LDUuMDgsMS45Mi45NywxLjI4LDEuNDYsMy4wNSwxLjQ2LDUuMzN2Mi43N2gtMi4xM3YtMy4xOWMwLTEuMjMtLjMyLTIuMzItLjk2LTMuMjctLjY0LS45NS0xLjcyLTEuNDItMy4yMy0xLjQyaC0yLjkxYy0xLjUyLDAtMi41OS40Ny0zLjIzLDEuNDItLjY0Ljk1LS45NiwyLjA0LS45NiwzLjI3djkuNjZoNi44OVptNC40LDYuODJjMC0xLjIzLS4zMi0yLjMxLS45Ni0zLjIzLS42NC0uOTItMS43Mi0xLjM4LTMuMjMtMS4zOGgtNy4xdjI0LjY0YzAsMS4yMy4zMiwy'+
			'LjMyLjk2LDMuMjcuNjQuOTUsMS43MSwxLjQyLDMuMjMsMS40MmgyLjkxYzEuNTEsMCwyLjU5LS40NywzLjIzLTEuNDIuNjQtLjk1Ljk2LTIuMDMuOTYtMy4yN3YtMjAuMDJaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDExMi44IDEyMS42IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMyNDI1Mjc7CiAgICAgIH0KCiAgICAgIC5jbHMtMSwgLmNscy0yIHsKICAgICAgICBzdHJva2Utd2lkdGg6IDBweDsKICAgICAgfQoKICAgICAgLmNscy0zIHsKICAgICAgICBzdHJva2U6ICMwMDA7CiAgICAgIH0KCiAgICAgIC5jbHMtMywgLmNscy00IH'+
			'sKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2NjNTcyMjsKICAgICAgfQoKICAgICAgLmNscy00IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2Utd2lkdGg6IC44cHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMS0yIj4KICA8cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMCAwIDExMi44IDguMTkgMTEyLjggMTA3LjgzIC4xMiAxMjEuNiAwIDAiLz4KICA8Zz4K'+
			'ICAgPGxpbmUgY2xhc3M9ImNscy00IiB5Mj0iOTEuMzEiIHgyPSI2NC42MiIgeTE9IjkxLjMxIiB4MT0iNDMuNjciLz4KICAgPHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjYxLjk3IDk0LjU4IDYxLjQzIDk0IDY0LjMxIDkxLjMyIDYxLjQzIDg4LjYzIDYxLjk3IDg4LjA1IDY1LjQ5IDkxLjMyIDYxLjk3IDk0LjU4Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xMS4zOCwzNi41OXY5LjAyaDMuMTdjMS41NiwwLDIuNjcuNDEsMy4zMSwxLjI0cy45NywxLjk2Ljk3LDMuNHYxMi4xOWMwLDEuNDctLjMyLDIuNjItLjk3LDMuNDVzLTEuNzUsMS4yNC0zLjMxLD'+
			'EuMjRoLTQuNTV2LTMxLjkyaDguNDZ2MS4zOGgtNy4wOFptMCwxMC40djE4LjcyaDMuMzZjLjk4LDAsMS42OC0uMywyLjA5LS45LjQxLS42LjYyLTEuMjkuNjItMi4wOXYtMTIuN2MwLS44LS4yMS0xLjUtLjYyLTIuMTJzLTEuMTEtLjkyLTIuMDktLjkyaC0zLjM2WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0zMi40NSwzNS4yMWwtMy43NywyOC4zOGMtLjE1LDEuMS0uNTYsMS45Ny0xLjIyLDIuNi0uNjYuNjMtMS42Ni45NC0zLjAxLjk0aC0xLjI0di0xLjM4aDEuNDNjLjg2LDAsMS41LS4yNCwxLjkxLS43MXMuNjctMS4wNS43Ni0xLjczbC44My02LjM1aC0zLjU0di0uMDVsLTMuMzEt'+
			'MjEuNzFoMS40M2wzLjA4LDIwLjM4aDIuNThsMi42Ny0yMC4zOGgxLjQzWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im00Mi42Niw2NS43NWgxLjQ3djUuMzhoLTEuMmwtLjMyLTRoLTkuNDNsLS4zMiw0aC0xLjJsLjA1LTUuMzhjLjc3LDAsMS4zMi0uMTgsMS42Ni0uNTMuMzQtLjM1LjUyLS45My41NS0xLjcybDEuMi0yOC4yOWg3LjU0djMwLjU0Wm0tMS4zOCwwdi0yOS4xNmgtNC43OGwtMS4yLDI2LjkxYy0uMDMsMS4xLS4zNCwxLjg2LS45MiwyLjI1aDYuOVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNTcuMDIsMzUuMjFsLTMuNzcsMjguMzhjLS4xNSwxLjEtLjU2LDEuOT'+
			'ctMS4yMiwyLjYtLjY2LjYzLTEuNjYuOTQtMy4wMS45NGgtMS4yNHYtMS4zOGgxLjQzYy44NiwwLDEuNS0uMjQsMS45MS0uNzFzLjY3LTEuMDUuNzYtMS43M2wuODMtNi4zNWgtMy41NHYtLjA1bC0zLjMxLTIxLjcxaDEuNDNsMy4wOCwyMC4zOGgyLjU4bDIuNjctMjAuMzhoMS40M1oiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNzYuNzUsNjUuNzV2NS4zOGgtMS4ybC0uMzItNGgtMTUuOTZ2LTMxLjkyaDEuMzh2MzAuNTRoNS41N3YtMzAuNTRoMS4zOHYzMC41NGg1LjUydi0zMC41NGgxLjM4djMwLjU0aDIuMjVaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTg2Ljk2LDM1LjIx'+
			'djEuMzhoLTcuMDh2OS4wMmg1LjM0djEuMzhoLTUuMzR2MTguNzdoNy4wOHYxLjM4aC04LjQ2di0zMS45Mmg4LjQ2WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im05Ny44NiwzNS4yMXYxLjM4aC03LjA4djkuMDJoNS4zNHYxLjM4aC01LjM0djE4Ljc3aDcuMDh2MS4zOGgtOC40NnYtMzEuOTJoOC40NloiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDIyMiA5OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiBub25lOwogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDRweDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz'+
			'4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC70L7QuV8xLTIiPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTI4LDMyYy0yLjEzLTMuNzUtNC43Ni03LjgyLTgtMTJDMTMuODksMTIuMTIsNy40Nyw2LjI1LDIsMmM3Mi42NywyMSwxNDUuMzMsNDIsMjE4LDYzLTE2LjUzLDIuOTMtMzMuOTEsNi41NC01MiwxMS0yNS42OCw2LjMzLTQ5LjM4LDEzLjUxLTcxLDIxLTIuMjQtNC42NS01LjQzLTEwLjIzLTEwLTE2LTYuMjUtNy45MS0xMi44Ni0xMy4zOC0xOC0xNy0xNS4zMyw0LTMwLjY3LDgtNDYsMTJsOC00NywxODIsMzVINjkiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI1'+
			'MS42MSIgeDI9IjI3LjMyIiB5MT0iMzMiIHgxPSI0MiIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjY4LjM2IiB4Mj0iMjUuMTUiIHkxPSIzNSIgeDE9IjUyIi8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNzMuODIiIHgyPSIzMS4zNiIgeTE9IjM1LjEzIiB4MT0iNjIuODciLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI2OS43MSIgeDI9IjQ3LjExIiB5MT0iMzgiIHgxPSI3MiIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjY2LjQ2IiB4Mj0iNTkuNTYiIHkxPSIzOC44IiB4MT0iODEuOTgiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI2MiIgeDI9Ijc1IiB5MT0iND'+
			'EuMzEiIHgxPSI5MS4zMiIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjYzLjEyIiB4Mj0iODYuMDMiIHkxPSI0Mi41MSIgeDE9IjEwMS4yNyIvPgogIDxsaW5lIGNsYXNzPSJjbHMtMSIgeTI9IjYyIiB4Mj0iOTkuMjgiIHkxPSI0NC42IiB4MT0iMTEyLjE0Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNjMuMTIiIHgyPSIxMTEiIHkxPSI0Ni43MyIgeDE9IjEyMy4yIi8+CiAgPGxpbmUgY2xhc3M9ImNscy0xIiB5Mj0iNjMuMTIiIHgyPSIxMjMuMiIgeTE9IjQ4LjciIHgxPSIxMzMuNDQiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI2My4zNiIgeDI9IjEzMy40NCIgeTE9IjUw'+
			'LjQiIHgxPSIxNDIuMjciLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI2My4xMiIgeDI9IjE0Ni40MSIgeTE9IjUzLjMiIHgxPSIxNTIuNDYiLz4KICA8bGluZSBjbGFzcz0iY2xzLTEiIHkyPSI2My42MiIgeDI9IjE1OC4yMiIgeTE9IjU0LjkyIiB4MT0iMTYzLjciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_19__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 19";
		el.ggDx=-28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 731px;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 144px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
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
		el=me._left_panel=document.createElement('div');
		els=me._left_panel__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDIiIGlkPSJf0KHQu9C+0LlfMiIgdmlld0JveD0iMCAwIDMzNC43MyA1NTguMTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2UyZTFkZDsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzI0MjUyNzsKICAgICAgfQoKICAgICAgLmNscy'+
			'0zIHsKICAgICAgICBmaWxsOiAjMjMyNDI2OwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIHN0cm9rZTogIzI0MjUyNzsKICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7CiAgICAgIH0KCiAgICAgIC5jbHMtNCwgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIHN0cm9rZTogI2NjNTcyMjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxnIGRhdGEtbmFtZT0i0KHQu9C+0LkgMSIgaWQ9Il/QodC7'+
			'0L7QuV8xLTIiPgogIDxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDcuOTQgMzI1IDAgMzM0LjczIDExNC4xNyAyOTYuNTUgMTE0LjE3IDIxMS40OSA0ODQuMTcgMjI2IDQ5NC4xNyAyMzAgNTI0LjE3IDE3NyA1NTguMTcgMjAgNTE3LjE3IDIyIDIzOS4xNyAxNSAyMzYuMTcgMCA3Ljk0Ii8+CiAgPGxpbmUgY2xhc3M9ImNscy01IiB5Mj0iMTkzLjY3IiB4Mj0iMzYuNSIgeTE9IjUxMi42NyIgeDE9IjM2LjUiLz4KICA8Zz4KICAgPGxpbmUgY2xhc3M9ImNscy00IiB5Mj0iMTUyLjE3IiB4Mj0iMjIxLjAxIiB5MT0iMTUyLjE3IiB4MT0iMTIyLjciLz4KICAgPHBvbHlnb24gY2xhc3M9Im'+
			'Nscy0yIiBwb2ludHM9IjIxNy43IDE1Ni4yNiAyMTcuMDIgMTU1LjUyIDIyMC42MyAxNTIuMTcgMjE3LjAyIDE0OC44MSAyMTcuNyAxNDguMDggMjIyLjEgMTUyLjE3IDIxNy43IDE1Ni4yNiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTE1LjU2LDY5Ljc5di05LjQxaC0zLjg2djkuNDFoLTIuMjJ2LTExLjRoOC4zMXYxMS40aC0yLjIyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xMjAuNTksNjkuNzl2LTExLjRoNy41MXYxLjk4aC01LjI4djIuNjdoNC41djEuOThoLTQuNXYyLjc3aDUuMjh2MS45OGgtNy41MVoiLz4KICAgPHBhdGggY2xhc3M9ImNs'+
			'cy0zIiBkPSJtMTM0Ljg1LDY1LjVoLTIuMTl2NC4yOWgtMi4yMnYtMTEuNGg0LjQyYzIuMzcsMCwzLjc2LDEuNjIsMy43NiwzLjU1cy0xLjM5LDMuNTUtMy43NiwzLjU1Wm0tLjExLTUuMTJoLTIuMDh2My4xMmgyLjA4YzEuMDEsMCwxLjY1LS42MiwxLjY1LTEuNTVzLS42NC0xLjU3LTEuNjUtMS41N1oiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTQ4LjIsNjQuNTVjLjUuNTMuNywxLjE3LjcsMS45NywwLDItMS4zNCwzLjI3LTMuNDksMy4yN2gtNC43N3YtMTEuNGg0LjU4YzIuMTUsMCwzLjUyLDEuMjIsMy41MiwzLjE0LDAsMS4wOS0uNDYsMS44OS0xLjQxLDIuNDIuNDUuMjQuNjIuMz'+
			'cuODYuNjFabS0zLjE1LTEuNTVjLjkxLDAsMS40Ny0uNSwxLjQ3LTEuMzFzLS41Ni0xLjMxLTEuNDctMS4zMWgtMi4xOHYyLjYyaDIuMThabS4xNCw0LjhjLjkxLDAsMS40OS0uNTQsMS40OS0xLjQxcy0uNTgtMS4zOS0xLjQ5LTEuMzloLTIuMzJ2Mi44aDIuMzJaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE1NS44MSw2OS43OWgtNC40OHYtMTEuNGgyLjIydjQuMjloMi4yNmMyLjIyLDAsMy43LDEuNDcsMy43LDMuNTVzLTEuNDksMy41NS0zLjcsMy41NVptLS4xOC01LjEyaC0yLjA4djMuMTRoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU3cy0uNjQtMS41Ny0xLjY1LTEuNTda'+
			'bTUuMTEsNS4xMnYtMTEuNGgyLjIzdjExLjRoLTIuMjNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE3Mi4xOSw2OS43OXYtNy4zMWwtNC40Myw3LjMxaC0xLjk4di0xMS40aDIuMjJ2Ny4zbDQuNDMtNy4zaDEuOTh2MTEuNGgtMi4yM1ptLTIuMDgtMTJjLTEuMjYsMC0yLjUzLS41Ni0yLjU5LTIuMjloMS41N2MuMDUuNy40NS45OSwxLjAyLjk5cy45OC0uMjksMS4wMi0uOTloMS41N2MtLjA2LDEuNzMtMS4zMywyLjI5LTIuNTksMi4yOVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTE1Ljc4LDg4LjQ3djEuMzloLTIuMjN2LTEuMzljLTMuMzktLjEzLTQuOC0xLjg0LTQuOC'+
			'00Ljc0czEuNDEtNC41OSw0LjgtNC43NHYtMS4xMmgyLjIzdjEuMTJjMy4zOS4xNCw0LjgyLDEuODQsNC44Miw0Ljc0cy0xLjQyLDQuNjEtNC44Miw0Ljc0Wm0tMi4xOS03LjU5Yy0xLjkuMS0yLjYxLjk5LTIuNjEsMi44NXMuNywyLjc3LDIuNjEsMi44NXYtNS43Wm0yLjE2LDB2NS43YzEuOTItLjA4LDIuNjItLjk5LDIuNjItMi44NXMtLjctMi43NS0yLjYyLTIuODVaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTEyMi41OCw4OS43OXYtMTEuNGg3LjUxdjEuOThoLTUuMjh2Mi42N2g0LjV2MS45OGgtNC41djIuNzdoNS4yOHYxLjk4aC03LjUxWiIvPgogICA8cGF0aCBjbGFzcz0iY2xz'+
			'LTMiIGQ9Im0xMzkuNzgsOTIuMzF2LTIuNTNoLTYuMzJ2Mi41M2gtMi4xNXYtNC41MWgxLjA3Yy45NC0xLjQ2LDEuMzYtMy44NywxLjM2LTYuNXYtMi45MWg2Ljg3djkuNDFoMS4zMXY0LjUxaC0yLjE1Wm0tMS4zOS0xMS45NGgtMi41MXYxLjY1YzAsMi4yNi0uMjIsNC4xOS0xLjAxLDUuNzhoMy41MnYtNy40M1oiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTQzLjg2LDg5Ljc5di0xMS40aDcuNTF2MS45OGgtNS4yOHYyLjY3aDQuNXYxLjk4aC00LjV2Mi43N2g1LjI4djEuOThoLTcuNTFaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE1OC4xMSw4NS41aC0yLjE5djQuMjloLT'+
			'IuMjJ2LTExLjRoNC40MmMyLjM3LDAsMy43NiwxLjYyLDMuNzYsMy41NXMtMS4zOSwzLjU1LTMuNzYsMy41NVptLS4xMS01LjEyaC0yLjA4djMuMTJoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU1cy0uNjQtMS41Ny0xLjY1LTEuNTdaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTE2OS41OSw4OS43OWwtLjY3LTIuMDJoLTQuMDVsLS42OSwyLjAyaC0yLjMybDQuMTUtMTEuNGgxLjc0bDQuMTYsMTEuNGgtMi4zMlptLTIuNjYtOC4wNGwtMS40NCw0LjE1aDIuODNsLTEuMzktNC4xNVoiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtMTc5Ljg4LDg5Ljc5di05LjQxaC0yLjcy'+
			'djMuMzFjMCw0Ljc5LTEuMTcsNi4xLTMuNTQsNi4xaC0uODh2LTEuOThoLjMyYzEuMTQsMCwxLjk1LS42NywxLjk1LTQuMjR2LTUuMTdoNy4wOXYxMS40aC0yLjIyWiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0xODkuNDEsODkuNzloLTQuNDh2LTExLjRoMi4yMnY0LjI5aDIuMjZjMi4yMiwwLDMuNywxLjQ3LDMuNywzLjU1cy0xLjQ5LDMuNTUtMy43LDMuNTVabS0uMTgtNS4xMmgtMi4wOHYzLjE0aDIuMDhjMS4wMSwwLDEuNjUtLjYyLDEuNjUtMS41N3MtLjY0LTEuNTctMS42NS0xLjU3WiIvPgogICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Im0yMDEuMjIsODkuNzl2LTQuNzdoLTMuOD'+
			'Z2NC43N2gtMi4yMnYtMTEuNGgyLjIydjQuNjZoMy44NnYtNC42NmgyLjIydjExLjRoLTIuMjJaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTIxMC43NCw4OS43OWgtNC40OHYtMTEuNGgyLjIydjQuMjloMi4yNmMyLjIyLDAsMy43LDEuNDcsMy43LDMuNTVzLTEuNDksMy41NS0zLjcsMy41NVptLS4xOC01LjEyaC0yLjA4djMuMTRoMi4wOGMxLjAxLDAsMS42NS0uNjIsMS42NS0xLjU3cy0uNjQtMS41Ny0xLjY1LTEuNTdabTUuMTEsNS4xMnYtMTEuNGgyLjIzdjExLjRoLTIuMjNaIi8+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTIyNy4xMiw4OS43OXYtNy4zMWwtNC40Myw3LjMx'+
			'aC0xLjk4di0xMS40aDIuMjJ2Ny4zbDQuNDMtNy4zaDEuOTh2MTEuNGgtMi4yM1ptLTIuMDgtMTJjLTEuMjYsMC0yLjUzLS41Ni0yLjU5LTIuMjloMS41N2MuMDUuNy40NS45OSwxLjAyLjk5cy45OC0uMjksMS4wMi0uOTloMS41N2MtLjA2LDEuNzMtMS4zMywyLjI5LTIuNTksMi4yOVoiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0ibTc2LjIzLDc3Ljg2di03LjUzYzIuNTgtLjUxLDQuNTItMi43OCw0LjUyLTUuNSwwLTMuMS0yLjUxLTUuNjEtNS42MS01LjYxLTEuNTQsMC0yLjkzLjYyLTMuOTUsMS42MmwtNy4wNy00LjRjLjAzLS4yMi4wNC0uNDQuMDQtLjY3LDAtMy'+
			'4xLTIuNTEtNS42MS01LjYxLTUuNjFzLTUuNjEsMi41MS01LjYxLDUuNjEsMi41MSw1LjYxLDUuNjEsNS42MWMyLjA4LDAsMy45LTEuMTQsNC44Ny0yLjgybDYuNTUsNC4wOGMtLjI5LjY3LS40NCwxLjQxLS40NCwyLjE5LDAsMi43MywxLjk1LDUsNC41Miw1LjV2Ny41M2MtMi41OC41MS00LjUyLDIuNzgtNC41Miw1LjUsMCwzLjEsMi41MSw1LjYxLDUuNjEsNS42MXM1LjYxLTIuNTEsNS42MS01LjYxYzAtMi43My0xLjk1LTUtNC41Mi01LjUiLz4KICAgPHBhdGggY2xhc3M9ImNscy0zIiBkPSJtNjQuMTcsNzQuMWMwLTMuMS0yLjUxLTUuNjEtNS42MS01LjYxcy01LjYxLDIuNTEtNS42MSw1LjYx'+
			'YzAsMi43MywxLjk1LDUsNC41Miw1LjV2Ny40NWMtMS4zOC4yNy0yLjU4LDEuMDUtMy40LDIuMTNsLTYuMy0zLjkzYy4yMS0uNTkuMzMtMS4yMy4zMy0xLjg5LDAtMi43My0xLjk1LTUtNC41Mi01LjV2LTcuNTNjMi41OC0uNTEsNC41Mi0yLjc4LDQuNTItNS41LDAtMy4xLTIuNTEtNS42MS01LjYxLTUuNjFzLTUuNjEsMi41MS01LjYxLDUuNjFjMCwyLjczLDEuOTUsNSw0LjUyLDUuNXY3LjUzYy0yLjU4LjUxLTQuNTIsMi43OC00LjUyLDUuNSwwLDMuMSwyLjUxLDUuNjEsNS42MSw1LjYxLDEuNjYsMCwzLjE0LS43Miw0LjE3LTEuODZsNi40Nyw0LjAzYy0uMTIuNDUtLjE4LjkyLS4xOCwxLjQxLD'+
			'AsMy4xLDIuNTEsNS42MSw1LjYxLDUuNjFzNS42MS0yLjUxLDUuNjEtNS42MWMwLTIuNzMtMS45NS01LTQuNTItNS41di03LjQ1YzIuNTgtLjUxLDQuNTItMi43OCw0LjUyLTUuNSIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs+='height : 474px;';
		hs+='left : -33px;';
		hs+='position : absolute;';
		hs+='top : -153px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
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

    font-family: 'Pobeda', Arial, sans-serif !important;

    font-size: 64px;

    line-height: 1;

    font-weight: 400;

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

    left: 119px;
    top: 28px;

    width: 70px;
    height: 54px;

    font-size: 47px;

}


/* БУДУЩЕЕ */

#${YEAR_ROOT_ID}
.year-button[data-era="future"]
.year-label {

    left: 208px;
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
#${BUTTON_ID}::before{content:'';position:absolute;width:78px;height:66px;left:50%;top:50%;transform:translate(-50%,-50%);background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iX9Ch0LvQvtC5XzIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzAuMTUgNTkiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNlMWUwZGM7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJf0KHQu9C+0LlfMS0yIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzAuMTUsM2MtMS4wOCwzLTQuNTksNTYtNC41OSw1Nkg5LjU0TDAsMGw3MC4xNSwzWiIvPgogIDwvZz4KPC9zdmc+') center / contain no-repeat;pointer-events:none;z-index:-1}
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
#${BUTTON_ID}::before{content:'';position:absolute;width:78px;height:66px;left:50%;top:50%;transform:translate(-50%,-50%);background:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iX9Ch0LvQvtC5XzIiIGRhdGEtbmFtZT0i0KHQu9C+0LkgMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNzAuMTUgNTkiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNlMWUwZGM7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAwcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSJf0KHQu9C+0LlfMS0yIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzAuMTUsM2MtMS4wOCwzLTQuNTksNTYtNC41OSw1Nkg5LjU0TDAsMGw3MC4xNSwzWiIvPgogIDwvZz4KPC9zdmc+') center / contain no-repeat;pointer-events:none;z-index:-1}
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
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzYgNzYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBmaWxsPSIjZDg1NjFmIiBkPSJNMTAgOSA3MCAxNCA2NiA3MyA1IDY2WiIvPgogPHBhdGggZmlsbD0iI2UxZTBkYyIgZD0iTTQgNCA2NiAxIDcyIDYyIDExIDY5WiIvPgogPGcgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjQiIHN0cm9rZT0iIzI0MjUyNyI+CiAgPHBhdGggZD0iTTE5IDE5IDU1IDE3IDU4IDQ5IDIyIDUyWiIvPgogIDxwYXRoIGQ9Im0yMyA0MyA5LTEzIDkgOCA2LTcgOSAxMyIvPgogIDxjaXJjbGUgcj0iMyIgY3'+
			'g9IjQ2IiBjeT0iMjUiLz4KIDwvZz4KIDxwYXRoIHN0cm9rZS13aWR0aD0iMiIgZD0ibTI2IDU4IDIzLTIiIHN0cm9rZT0iI2Q4NTYxZiIvPgo8L3N2Zz4K';
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
	style.appendChild(document.createTextNode('@font-face { font-family: "Pobeda"; src: url("assets/_Pobeda.woff2") format("woff2"); font-weight: 400; font-style: normal; font-display: block; } /* Let panorama hotspots receive clicks through empty responsive wrappers. */ .desktop_ui > *, .tablet_ui > *, .mobile_ui > * { pointer-events: auto; }'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};