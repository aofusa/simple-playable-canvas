(function(_){for(var r in _){_[r].__farm_resource_pot__='index_7a24.js';(globalThis || window || global)['35ffc07ebd23700c1a7371488188ea5e'].__farm_module_system__.register(r,_[r])}})({"036a65f8":function  (e,t,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setupCanvasGraphics",{enumerable:!0,get:function(){return l;}});let c=n("669f5ce6"),i=n("c3a1b855");async function r(e){let t=e.getContext("2d");if(!t)throw console.warn("not HTMLCanvasElement"),"initialize error: not HTMLCanvasElement";let n=await (0,c.loadImage)(c.Resources.BG);return console.log(n),{canvasContext:t,image:n,playable:new i.MovableObject(10,10,100,100)};}async function l(t){let n=1e3/e.meta.env.VITE_STANDARD_FPS,o=performance.now(),c=await r(t),i=e=>{let t=(e-o)/n;o=e,function(e,t){let n=e.canvasContext,o=e.image,c=e.playable;n.clearRect(0,0,n.canvas.width,n.canvas.height),n.drawImage(o,0,0,n.canvas.width,n.canvas.height),c.update(t),c.draw(n);}(c,t),requestAnimationFrame(i);};requestAnimationFrame(i);}},"669f5ce6":function  (e,n,o,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var o in n)Object.defineProperty(e,o,{enumerable:!0,get:n[o]});}(n,{Resources:function(){return t;},loadImage:function(){return u;}});let t={BG:e.meta.env.VITE_RESOURCE_BG};function u(e){return console.log("load image: ",e),new Promise((n,o)=>{let r=new Image;r.onload=()=>n(r),r.onerror=e=>o(e),r.src=e;});}},"7f44d301":function  (e,o,r,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"KeyState",{enumerable:!0,get:function(){return n;}});let n={right:!1,left:!1,up:!1,down:!1};document.addEventListener("keydown",function(e){("Right"===e.key||"ArrowRight"===e.key||"d"===e.key)&&(console.log("right press"),n.right=!0),("Left"===e.key||"ArrowLeft"===e.key||"a"===e.key)&&(console.log("left press"),n.left=!0),("Up"===e.key||"ArrowUp"===e.key||"w"===e.key)&&(console.log("up press"),n.up=!0),("Down"===e.key||"ArrowDown"===e.key||"s"===e.key)&&(console.log("down press"),n.down=!0);},!1),document.addEventListener("keyup",function(e){("Right"===e.key||"ArrowRight"===e.key||"d"===e.key)&&(console.log("right release"),n.right=!1),("Left"===e.key||"ArrowLeft"===e.key||"a"===e.key)&&(console.log("left release"),n.left=!1),("Up"===e.key||"ArrowUp"===e.key||"w"===e.key)&&(console.log("up release"),n.up=!1),("Down"===e.key||"ArrowDown"===e.key||"s"===e.key)&&(console.log("down release"),n.down=!1);},!1);},"c3a1b855":function  (t,e,i,h){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"MovableObject",{enumerable:!0,get:function(){return l;}});let s=i("7f44d301");class l{x;y;width;height;constructor(t,e,i,h){this.x=t,this.y=e,this.width=i,this.height=h;}update(t){s.KeyState.right&&(this.x+=1*t),s.KeyState.left&&(this.x-=1*t),s.KeyState.up&&(this.y-=1*t),s.KeyState.down&&(this.y+=1*t),console.log("dx: ",this.x,", dy: ",this.y);}draw(t){t.fillStyle="blue",t.fillRect(this.x,this.y,this.width,this.height);}}},"ec2bf3a9":function  (e,n,o,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});let c=o("036a65f8");!function(){let e=document.querySelector("#app-canvas");e?(console.log(e),(0,c.setupCanvasGraphics)(e)):console.warn("#app-canvas not found");}();},});
//# sourceMappingURL=index_7a24.1bc99346.js.map