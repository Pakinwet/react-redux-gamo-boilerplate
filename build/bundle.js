!function(e){function t(t){for(var o,i,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)i=u[f],r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={1:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([413,0]),n()}({121:function(e,t,n){"use strict";n.r(t);var o=n(78),r=n.n(o),a=n(168),i=n.n(a).a.prototype.computeMatch,u=function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return t.some(function(t){var a=t.path?r()(n,t):o.length?o[o.length-1].match:i(n);return a&&(o.push({route:t,match:a}),t.routes&&e(t.routes,n,o)),a}),o},c=n(2),s=n.n(c),l=n(167),f=n.n(l),p=n(166),d=n.n(p),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?s.a.createElement(f.a,null,e.map(function(e,n){return s.a.createElement(d.a,{key:e.key||n,path:e.path,exact:e.exact,strict:e.strict,render:function(n){return s.a.createElement(e.component,h({},n,t,{route:e}))}})})):null};n.d(t,"matchRoutes",function(){return u}),n.d(t,"renderRoutes",function(){return y})},124:function(e,t,n){"use strict";t.__esModule=!0;t.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),t.addEventListener=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},t.removeEventListener=function(e,t,n){return e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},t.getConfirmation=function(e,t){return t(window.confirm(e))},t.supportsHistory=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},t.supportsPopStateOnHashChange=function(){return-1===window.navigator.userAgent.indexOf("Trident")},t.supportsGoWithoutReloadUsingHash=function(){return-1===window.navigator.userAgent.indexOf("Firefox")},t.isExtraneousPopstateEvent=function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")}},164:function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=l(n(3)),a=l(n(8)),i=n(87),u=n(31),c=l(n(86)),s=n(124);function l(e){return e&&e.__esModule?e:{default:e}}var f={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+(0,u.stripLeadingSlash)(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:u.stripLeadingSlash,decodePath:u.addLeadingSlash},slash:{encodePath:u.addLeadingSlash,decodePath:u.addLeadingSlash}},p=function(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)},d=function(e){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,t>=0?t:0)+"#"+e)};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(s.canUseDOM,"Hash history needs a DOM");var t=window.history,n=(0,s.supportsGoWithoutReloadUsingHash)(),l=e.getUserConfirmation,h=void 0===l?s.getConfirmation:l,y=e.hashType,v=void 0===y?"slash":y,b=e.basename?(0,u.stripTrailingSlash)((0,u.addLeadingSlash)(e.basename)):"",m=f[v],w=m.encodePath,g=m.decodePath,O=function(){var e=g(p());return(0,r.default)(!b||(0,u.hasBasename)(e,b),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+e+'" to begin with "'+b+'".'),b&&(e=(0,u.stripBasename)(e,b)),(0,i.createLocation)(e)},_=(0,c.default)(),P=function(e){o(N,e),N.length=t.length,_.notifyListeners(N.location,N.action)},j=!1,E=null,x=function(){var e=p(),t=w(e);if(e!==t)d(t);else{var n=O(),o=N.location;if(!j&&(0,i.locationsAreEqual)(o,n))return;if(E===(0,u.createPath)(n))return;E=null,R(n)}},R=function(e){j?(j=!1,P()):_.confirmTransitionTo(e,"POP",h,function(t){t?P({action:"POP",location:e}):C(e)})},C=function(e){var t=N.location,n=k.lastIndexOf((0,u.createPath)(t));-1===n&&(n=0);var o=k.lastIndexOf((0,u.createPath)(e));-1===o&&(o=0);var r=n-o;r&&(j=!0,L(r))},T=p(),M=w(T);T!==M&&d(M);var S=O(),k=[(0,u.createPath)(S)],L=function(e){(0,r.default)(n,"Hash history go(n) causes a full page reload in this browser"),t.go(e)},A=0,H=function(e){1===(A+=e)?(0,s.addEventListener)(window,"hashchange",x):0===A&&(0,s.removeEventListener)(window,"hashchange",x)},q=!1,N={length:t.length,action:"POP",location:S,createHref:function(e){return"#"+w(b+(0,u.createPath)(e))},push:function(e,t){(0,r.default)(void 0===t,"Hash history cannot push state; it is ignored");var n=(0,i.createLocation)(e,void 0,void 0,N.location);_.confirmTransitionTo(n,"PUSH",h,function(e){if(e){var t=(0,u.createPath)(n),o=w(b+t);if(p()!==o){E=t,function(e){window.location.hash=e}(o);var a=k.lastIndexOf((0,u.createPath)(N.location)),i=k.slice(0,-1===a?0:a+1);i.push(t),k=i,P({action:"PUSH",location:n})}else(0,r.default)(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),P()}})},replace:function(e,t){(0,r.default)(void 0===t,"Hash history cannot replace state; it is ignored");var n=(0,i.createLocation)(e,void 0,void 0,N.location);_.confirmTransitionTo(n,"REPLACE",h,function(e){if(e){var t=(0,u.createPath)(n),o=w(b+t);p()!==o&&(E=t,d(o));var r=k.indexOf((0,u.createPath)(N.location));-1!==r&&(k[r]=t),P({action:"REPLACE",location:n})}})},go:L,goBack:function(){return L(-1)},goForward:function(){return L(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=_.setPrompt(e);return q||(H(1),q=!0),function(){return q&&(q=!1,H(-1)),t()}},listen:function(e){var t=_.appendListener(e);return H(1),function(){H(-1),t()}}};return N}},165:function(e,t,n){"use strict";t.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=f(n(3)),i=f(n(8)),u=n(87),c=n(31),s=f(n(86)),l=n(124);function f(e){return e&&e.__esModule?e:{default:e}}var p=function(){try{return window.history.state||{}}catch(e){return{}}};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.default)(l.canUseDOM,"Browser history needs a DOM");var t=window.history,n=(0,l.supportsHistory)(),f=!(0,l.supportsPopStateOnHashChange)(),d=e.forceRefresh,h=void 0!==d&&d,y=e.getUserConfirmation,v=void 0===y?l.getConfirmation:y,b=e.keyLength,m=void 0===b?6:b,w=e.basename?(0,c.stripTrailingSlash)((0,c.addLeadingSlash)(e.basename)):"",g=function(e){var t=e||{},n=t.key,o=t.state,r=window.location,i=r.pathname+r.search+r.hash;return(0,a.default)(!w||(0,c.hasBasename)(i,w),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+i+'" to begin with "'+w+'".'),w&&(i=(0,c.stripBasename)(i,w)),(0,u.createLocation)(i,o,n)},O=function(){return Math.random().toString(36).substr(2,m)},_=(0,s.default)(),P=function(e){r(q,e),q.length=t.length,_.notifyListeners(q.location,q.action)},j=function(e){(0,l.isExtraneousPopstateEvent)(e)||R(g(e.state))},E=function(){R(g(p()))},x=!1,R=function(e){x?(x=!1,P()):_.confirmTransitionTo(e,"POP",v,function(t){t?P({action:"POP",location:e}):C(e)})},C=function(e){var t=q.location,n=M.indexOf(t.key);-1===n&&(n=0);var o=M.indexOf(e.key);-1===o&&(o=0);var r=n-o;r&&(x=!0,k(r))},T=g(p()),M=[T.key],S=function(e){return w+(0,c.createPath)(e)},k=function(e){t.go(e)},L=0,A=function(e){1===(L+=e)?((0,l.addEventListener)(window,"popstate",j),f&&(0,l.addEventListener)(window,"hashchange",E)):0===L&&((0,l.removeEventListener)(window,"popstate",j),f&&(0,l.removeEventListener)(window,"hashchange",E))},H=!1,q={length:t.length,action:"POP",location:T,createHref:S,push:function(e,r){(0,a.default)(!("object"===(void 0===e?"undefined":o(e))&&void 0!==e.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var i=(0,u.createLocation)(e,r,O(),q.location);_.confirmTransitionTo(i,"PUSH",v,function(e){if(e){var o=S(i),r=i.key,u=i.state;if(n)if(t.pushState({key:r,state:u},null,o),h)window.location.href=o;else{var c=M.indexOf(q.location.key),s=M.slice(0,-1===c?0:c+1);s.push(i.key),M=s,P({action:"PUSH",location:i})}else(0,a.default)(void 0===u,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o}})},replace:function(e,r){(0,a.default)(!("object"===(void 0===e?"undefined":o(e))&&void 0!==e.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var i=(0,u.createLocation)(e,r,O(),q.location);_.confirmTransitionTo(i,"REPLACE",v,function(e){if(e){var o=S(i),r=i.key,u=i.state;if(n)if(t.replaceState({key:r,state:u},null,o),h)window.location.replace(o);else{var c=M.indexOf(q.location.key);-1!==c&&(M[c]=i.key),P({action:"REPLACE",location:i})}else(0,a.default)(void 0===u,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)}})},go:k,goBack:function(){return k(-1)},goForward:function(){return k(1)},block:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=_.setPrompt(e);return H||(A(1),H=!0),function(){return H&&(H=!1,A(-1)),t()}},listen:function(e){var t=_.appendListener(e);return A(1),function(){A(-1),t()}}};return q}},166:function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=s(n(3)),a=s(n(8)),i=s(n(2)),u=s(n(1)),c=s(n(78));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){return 0===i.default.Children.count(e)},p=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=l(this,e.call.apply(e,[this].concat(a))),o.state={match:o.computeMatch(o.props,o.context.router)},l(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:o({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},t.prototype.computeMatch=function(e,t){var n=e.computedMatch,o=e.location,r=e.path,i=e.strict,u=e.exact,s=e.sensitive;if(n)return n;(0,a.default)(t,"You should not use <Route> or withRouter() outside a <Router>");var l=t.route,f=(o||l.location).pathname;return r?(0,c.default)(f,{path:r,strict:i,exact:u,sensitive:s}):l.match},t.prototype.componentWillMount=function(){(0,r.default)(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),(0,r.default)(!(this.props.component&&this.props.children&&!f(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),(0,r.default)(!(this.props.render&&this.props.children&&!f(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")},t.prototype.componentWillReceiveProps=function(e,t){(0,r.default)(!(e.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),(0,r.default)(!(!e.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),this.setState({match:this.computeMatch(e,t.router)})},t.prototype.render=function(){var e=this.state.match,t=this.props,n=t.children,o=t.component,r=t.render,a=this.context.router,u=a.history,c=a.route,s=a.staticContext,l={match:e,location:this.props.location||c.location,history:u,staticContext:s};return o?e?i.default.createElement(o,l):null:r?e?r(l):null:n?"function"==typeof n?n(l):f(n)?null:i.default.Children.only(n):null},t}(i.default.Component);p.propTypes={computedMatch:u.default.object,path:u.default.string,exact:u.default.bool,strict:u.default.bool,sensitive:u.default.bool,component:u.default.func,render:u.default.func,children:u.default.oneOfType([u.default.func,u.default.node]),location:u.default.object},p.contextTypes={router:u.default.shape({history:u.default.object.isRequired,route:u.default.object.isRequired,staticContext:u.default.object})},p.childContextTypes={router:u.default.object.isRequired},t.default=p},167:function(e,t,n){"use strict";t.__esModule=!0;var o=c(n(2)),r=c(n(1)),a=c(n(3)),i=c(n(8)),u=c(n(78));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){(0,i.default)(this.context.router,"You should not use <Switch> outside a <Router>")},t.prototype.componentWillReceiveProps=function(e){(0,a.default)(!(e.location&&!this.props.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),(0,a.default)(!(!e.location&&this.props.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')},t.prototype.render=function(){var e=this.context.router.route,t=this.props.children,n=this.props.location||e.location,r=void 0,a=void 0;return o.default.Children.forEach(t,function(t){if(o.default.isValidElement(t)){var i=t.props,c=i.path,s=i.exact,l=i.strict,f=i.sensitive,p=i.from,d=c||p;null==r&&(a=t,r=d?(0,u.default)(n.pathname,{path:d,exact:s,strict:l,sensitive:f}):e.match)}}),r?o.default.cloneElement(a,{location:n,computedMatch:r}):null},t}(o.default.Component);s.contextTypes={router:r.default.shape({route:r.default.object.isRequired}).isRequired},s.propTypes={children:r.default.node,location:r.default.object},t.default=s},168:function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=c(n(3)),a=c(n(8)),i=c(n(2)),u=c(n(1));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=s(this,e.call.apply(e,[this].concat(a))),o.state={match:o.computeMatch(o.props.history.location.pathname)},s(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{router:o({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},t.prototype.computeMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}},t.prototype.componentWillMount=function(){var e=this,t=this.props,n=t.children,o=t.history;(0,a.default)(null==n||1===i.default.Children.count(n),"A <Router> may have only one child element"),this.unlisten=o.listen(function(){e.setState({match:e.computeMatch(o.location.pathname)})})},t.prototype.componentWillReceiveProps=function(e){(0,r.default)(this.props.history===e.history,"You cannot change <Router history>")},t.prototype.componentWillUnmount=function(){this.unlisten()},t.prototype.render=function(){var e=this.props.children;return e?i.default.Children.only(e):null},t}(i.default.Component);l.propTypes={history:u.default.object.isRequired,children:u.default.node},l.contextTypes={router:u.default.object},l.childContextTypes={router:u.default.object.isRequired},t.default=l},171:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n.n(o),a=n(2),i=n.n(a),u=n(1),c=n.n(u),s=n(165),l=n.n(s),f=n(37).a;function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=p(this,e.call.apply(e,[this].concat(a))),o.history=l()(o.props),p(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){r()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},t.prototype.render=function(){return i.a.createElement(f,{history:this.history,children:this.props.children})},t}(i.a.Component);d.propTypes={basename:c.a.string,forceRefresh:c.a.bool,getUserConfirmation:c.a.func,keyLength:c.a.number,children:c.a.node};var h=d,y=n(164),v=n.n(y);function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=b(this,e.call.apply(e,[this].concat(a))),o.history=v()(o.props),b(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){r()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},t.prototype.render=function(){return i.a.createElement(f,{history:this.history,children:this.props.children})},t}(i.a.Component);m.propTypes={basename:c.a.string,getUserConfirmation:c.a.func,hashType:c.a.oneOf(["hashbang","noslash","slash"]),children:c.a.node};var w=m,g=n(8),O=n.n(g),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function P(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var j=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},E=function(e){function t(){var n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=o=P(this,e.call.apply(e,[this].concat(a))),o.handleClick=function(e){if(o.props.onClick&&o.props.onClick(e),!e.defaultPrevented&&0===e.button&&!o.props.target&&!j(e)){e.preventDefault();var t=o.context.router.history,n=o.props,r=n.replace,a=n.to;r?t.replace(a):t.push(a)}},P(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["replace","to","innerRef"]);O()(this.context.router,"You should not use <Link> outside a <Router>");var r=this.context.router.history.createHref("string"==typeof t?{pathname:t}:t);return i.a.createElement("a",_({},o,{onClick:this.handleClick,href:r,ref:n}))},t}(i.a.Component);E.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},E.defaultProps={replace:!1},E.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired};var x=E,R=n(84).a,C=n(55).a,T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var S=function(e){var t=e.to,n=e.exact,o=e.strict,r=e.location,a=e.activeClassName,u=e.className,c=e.activeStyle,s=e.style,l=e.isActive,f=e.ariaCurrent,p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","ariaCurrent"]);return i.a.createElement(C,{path:"object"===(void 0===t?"undefined":M(t))?t.pathname:t,exact:n,strict:o,location:r,children:function(e){var n=e.location,o=e.match,r=!!(l?l(o,n):o);return i.a.createElement(x,T({to:t,className:r?[u,a].filter(function(e){return e}).join(" "):u,style:r?T({},s,c):s,"aria-current":r&&f},p))}})};S.propTypes={to:x.propTypes.to,exact:c.a.bool,strict:c.a.bool,location:c.a.object,activeClassName:c.a.string,className:c.a.string,activeStyle:c.a.object,style:c.a.object,isActive:c.a.func,ariaCurrent:c.a.oneOf(["page","step","location","true"])},S.defaultProps={activeClassName:"active",ariaCurrent:"true"};var k=S,L=n(83).a,A=n(82).a,H=n(81).a,q=n(80).a,N=n(36).a,U=n(79).a;n.d(t,"BrowserRouter",function(){return h}),n.d(t,"HashRouter",function(){return w}),n.d(t,"Link",function(){return x}),n.d(t,"MemoryRouter",function(){return R}),n.d(t,"NavLink",function(){return k}),n.d(t,"Prompt",function(){return L}),n.d(t,"Redirect",function(){return A}),n.d(t,"Route",function(){return C}),n.d(t,"Router",function(){return f}),n.d(t,"StaticRouter",function(){return H}),n.d(t,"Switch",function(){return q}),n.d(t,"matchPath",function(){return N}),n.d(t,"withRouter",function(){return U})},174:function(e,t){},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.goToPage=void 0;var o=n(56);t.goToPage=function(e){return function(t){return t((0,o.push)("/"+e))}}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),u=(r=i)&&r.__esModule?r:{default:r},c=n(50),s=n(62);var l={goToPage:function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(175)).goToPage};var f=(0,s.connect)(function(e){return{}},function(e){return{actions:(0,c.bindActionCreators)(l,e)}})(o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),a(t,[{key:"render",value:function(){var e=this;return u.default.createElement(u.default.Fragment,null,u.default.createElement("h1",null,"Page2"),u.default.createElement("button",{onClick:function(){return e.props.actions.goToPage("")}},"Go Home"))}}]),t}())||o;t.default=f},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),i=(o=a)&&o.__esModule?o:{default:o};var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r(t,[{key:"render",value:function(){return i.default.createElement("h1",null,"Hello, Page1")}}]),t}();t.default=u},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(2),u=(r=i)&&r.__esModule?r:{default:r},c=n(50);var s={};var l=(0,n(62).connect)(function(e){return{}},function(e){return{actions:(0,c.bindActionCreators)(s,e)}})(o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),a(t,[{key:"render",value:function(){return u.default.createElement("h1",null,"Hello, React")}}]),t}())||o;t.default=l},186:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(2),a=s(r),i=n(121),u=n(171),c=s(n(123));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(c.default,{title:"React Redux boilerplate"}),a.default.createElement("header",{className:"main-header"},a.default.createElement("nav",null,a.default.createElement("ul",{className:"navigation"},a.default.createElement("li",null,a.default.createElement(u.NavLink,{activeClassName:"active",exact:!0,to:"/"},"Home")),a.default.createElement("li",null,a.default.createElement(u.NavLink,{activeClassName:"active",to:"/page1"},"Page1")),a.default.createElement("li",null,a.default.createElement(u.NavLink,{activeClassName:"active",to:"/page2"},"Page2"))))),(0,i.renderRoutes)(this.props.route.routes))}}]),t}();t.default=l},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Page2=t.Page1=t.Home=t.App=void 0;var o=u(n(186)),r=u(n(178)),a=u(n(177)),i=u(n(176));function u(e){return e&&e.__esModule?e:{default:e}}t.App=o.default,t.Home=r.default,t.Page1=a.default,t.Page2=i.default},188:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(187),r=[{component:o.App,routes:[{path:"/",exact:!0,component:o.Home},{path:"/page1",component:o.Page1},{path:"/page2",component:o.Page2}]}];t.default=r},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"ADD_TODO":return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e),[{id:e.reduce(function(e,t){return Math.max(t.id,e)},-1)+1,todo:t.data}]);case"DELETE_TODO":return e.filter(function(e){return e.id!==t.id});default:return e}}},190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(50),a=n(56),i=n(189),u=(o=i)&&o.__esModule?o:{default:o};t.default=(0,r.combineReducers)({router:a.routerReducer,todo:u.default})},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(50),r=n(56),a=u(n(126)),i=(n(125),u(n(190)));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var n=[a.default,(0,r.routerMiddleware)(t)];return(0,o.createStore)(i.default,e,o.applyMiddleware.apply(void 0,n))}},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o=n(2))&&"object"==typeof o&&"default"in o?o.default:o,a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component);t.AppContainer=u,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){}},198:function(e,t,n){"use strict";e.exports=n(197)},199:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},200:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=f(n(2)),r=n(198),a=n(62),i=n(56),u=n(121),c=n(61),s=f(n(191)),l=f(n(188));function f(e){return e&&e.__esModule?e:{default:e}}var p=window.__INITIAL_STATE__,d=(0,c.createHashHistory)(),h=(0,s.default)(p,d);t.default=(0,r.hot)(e)(function(){return o.default.createElement(a.Provider,{store:h},o.default.createElement(i.ConnectedRouter,{history:d},(0,u.renderRoutes)(l.default)))})}).call(this,n(199)(e))},211:function(e,t,n){"use strict";var o=i(n(2)),r=n(127),a=i(n(200));function i(e){return e&&e.__esModule?e:{default:e}}n(174);var u=document.getElementById("app");(0,r.render)(o.default.createElement(a.default,null),u)},413:function(e,t,n){n(163),e.exports=n(211)},78:function(e,t,n){"use strict";t.__esModule=!0;var o,r=n(116),a=(o=r)&&o.__esModule?o:{default:o};var i={},u=0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"==typeof t&&(t={path:t});var n=t,o=n.path,r=void 0===o?"/":o,c=n.exact,s=void 0!==c&&c,l=n.strict,f=void 0!==l&&l,p=n.sensitive,d=function(e,t){var n=""+t.end+t.strict+t.sensitive,o=i[n]||(i[n]={});if(o[e])return o[e];var r=[],c={re:(0,a.default)(e,r,t),keys:r};return u<1e4&&(o[e]=c,u++),c}(r,{end:s,strict:f,sensitive:void 0!==p&&p}),h=d.re,y=d.keys,v=h.exec(e);if(!v)return null;var b=v[0],m=v.slice(1),w=e===b;return s&&!w?null:{path:r,url:"/"===r&&""===b?"/":b,isExact:w,params:y.reduce(function(e,t,n){return e[t.name]=m[n],e},{})}}}});