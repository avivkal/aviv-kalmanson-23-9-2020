(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[1],{10:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={UPDATE_TEXT:"UPDATE_TEXT",UPDATE_SEARCH:"UPDATE_SEARCH",SET_CURRENT_CITY_DETAILS:"SET_CURRENT_CITY_DETAILS",TOGGLE:"TOGGLE",UPDATE_FORECAST:"UPDATE_FORECAST",ADD_TO_FAVORITES:"ADD_TO_FAVORITES",SET_FAVORITE_CITY_DETAILS:"SET_FAVORITE_CITY_DETAILS",FIRST_TIME_FINISHED:"FIRST_TIME_FINISHED",CLEAR:"CLEAR",REMOVE_FROM_FAVORITES:"REMOVE_FROM_FAVORITES",TOGGLE_DARK_MODE:"TOGGLE_DARK_MODE",CLOSE_MODAL:"CLOSE_MODAL",OPEN_MODAL:"OPEN_MODAL",UPDATE_FAVORITES:"UPDATE_FAVORITES",FIRST_TIME_FINISHED_FAVORITES:"FIRST_TIME_FINISHED_FAVORITES",LOADING:"LOADING",FINISHED_LOADING:"FINISHED_LOADING"}},107:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(16),u=r.n(c),o=(r(80),r(22)),i=r(23),s=r(25),l=r(24),d=(r(52),r(27)),f=r(6),m=(r(81),r(111)),p=r(109),O=r(112),T=r(35),E=r(17),v=r(41),b=r(14),h=r(4),A=function(e){Object(s.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).toggleHandle=function(){var t,r,n,a=e.props.unit;a===h.b?(t=h.g,r=Object(b.b)(e.props.current.currentTemp),n=Object(b.e)()):(t=h.b,r=Object(b.c)(e.props.current.currentTemp),n=Object(b.d)()),Object(b.h)(e.props.favorites,e.props.current)||e.props.toggle(r,t,Object(b.g)(e.props.current.fiveDaysForecast,a)),e.props.updateFavorites(n)},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return a.a.createElement(m.a,{collapseOnSelect:!0,expand:"lg",bg:this.props.darkMode?"light":"dark",variant:this.props.darkMode?"light":"dark"},a.a.createElement(m.a.Brand,{as:d.b,to:h.i},"Herolo Weather Task"),a.a.createElement(p.a,{style:{backgroundColor:"#343A40",border:"1px solid #343A40"},onClick:function(){e.toggleHandle()},variant:"secondary"},a.a.createElement("span",{className:this.props.unit===h.b?"active":null},"\xb0C "),a.a.createElement("span",null,"/"),a.a.createElement("span",{className:this.props.unit===h.g?"active":null}," \xb0F")),a.a.createElement(p.a,{style:{backgroundColor:"#343A40",border:"1px solid #343A40",marginLeft:"10px"},onClick:function(){e.props.toggleDarkMode()},variant:"secondary"},"Dark Mode"),a.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(m.a.Collapse,{id:"responsive-navbar-nav"},a.a.createElement(O.a,{className:"ml-auto"},a.a.createElement(O.a.Link,{as:d.b,to:h.i},"Home"),a.a.createElement(O.a.Link,{as:d.b,to:h.h},"Favorites "))))}}]),r}(n.Component),I=Object(T.b)((function(e){return{darkMode:e.home.darkmode,unit:e.home.unit,current:e.home.current,favorites:e.favorites.favorites}}),(function(e){return{toggle:function(t,r,n){return e(v.e(t,r,n))},toggleDarkMode:function(){return e(v.f())},updateFavorites:function(t){return e(E.d(t))}}}))(A),g=r(110),y=a.a.lazy((function(){return Promise.all([r.e(0),r.e(3),r.e(5)]).then(r.bind(null,390))})),_=a.a.lazy((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,387))})),D=function(e){Object(s.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(d.a,null,a.a.createElement(I,null),a.a.createElement(n.Suspense,{fallback:a.a.createElement(g.a,{animation:"border",className:"spinner"})},a.a.createElement(f.c,null,a.a.createElement(f.a,{path:h.i,exact:!0,component:y}),a.a.createElement(f.a,{path:h.h,exact:!0,component:_})))))}}]),r}(n.Component),S=r(29),j=r(13),F=r.n(j),M=function(e){Object(s.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(i.a)(r,[{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),r}(n.Component);F.a.defaults.baseURL="https://dataservice.accuweather.com/",u.a.render(a.a.createElement(M,null,a.a.createElement(T.a,{store:S.a},a.a.createElement(D,null))),document.getElementById("root"))},14:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return c})),r.d(t,"h",(function(){return o})),r.d(t,"i",(function(){return u})),r.d(t,"g",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"a",(function(){return f}));var n=r(4),a=function(e){return(1.8*e+32).toFixed(1)},c=function(e){return((e-32)/1.8).toFixed(1)},u=function(e,t){var r=t.find((function(t){return t.text===e}));return void 0===r?t[0].key:r.key},o=function(e,t){return!(!Array.isArray(t)||!t.length)&&void 0!==t.find((function(t){return e.key===t.key}))},i=function(e){return f(e)&&e.map((function(e){return e.Temperature.Minimum.Unit===n.g?(e.Temperature.Minimum.Value=c(e.Temperature.Minimum.Value),e.Temperature.Maximum.Value=c(e.Temperature.Maximum.Value),e.Temperature.Minimum.Unit=n.b,e.Temperature.Maximum.Unit=n.b):(e.Temperature.Minimum.Value=a(e.Temperature.Minimum.Value),e.Temperature.Maximum.Value=a(e.Temperature.Maximum.Value),e.Temperature.Minimum.Unit=n.g,e.Temperature.Maximum.Unit=n.g),e})),e},s=function(){var e=JSON.parse(localStorage.getItem("favorites"));return f(e)&&e.map((function(e){return e.currentTemp=c(e.currentTemp),e.fiveDaysForecast=i(e.fiveDaysForecast),e})),e},l=function(){var e=JSON.parse(localStorage.getItem("favorites"));return f(e)&&e.map((function(e){return e.currentTemp=a(e.currentTemp),e.fiveDaysForecast=i(e.fiveDaysForecast),e})),e},d=function(e){return e<10?"0"+e:e},f=function(e){return void 0!==e&&null!==e&&e.length>0}},17:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return i}));var n=r(10),a=r(50),c=function(){return{type:n.a.CLEAR}},u=function(e){return Object(a.b)(e),{type:n.a.UPDATE_FAVORITES,favorites:e}},o=function(){return{type:n.a.LOADING}},i=function(){return{type:n.a.FINISHED_LOADING}}},29:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(3),a=r(4),c={current:{},firstTime:!0,unit:a.b,darkmode:!1,darkModeText:a.l},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_CITY_DETAILS":return Object(n.a)(Object(n.a)({},e),{},{current:{key:t.cityKey,cityName:t.cityName,currentTemp:t.currentTemp,currentStateOfWeather:t.currentStateOfWeather,fiveDaysForecast:t.fiveDaysForecast,icon:t.icon}});case"FIRST_TIME_FINISHED":return Object(n.a)(Object(n.a)({},e),{},{firstTime:!1});case"SET_FAVORITE_CITY_DETAILS":return Object(n.a)(Object(n.a)({},e),{},{current:Object(n.a)({},t.payload)});case"TOGGLE":return Object(n.a)(Object(n.a)({},e),{},{unit:t.unit,current:Object(n.a)(Object(n.a)({},e.current),{},{currentTemp:t.currentTemp,fiveDaysForecast:t.fiveDaysForecast})});case"TOGGLE_DARK_MODE":return Object(n.a)(Object(n.a)({},e),{},{darkmode:!e.darkmode,darkModeText:e.darkModeText===a.l?a.c:a.l});default:return e}},o={firstTimeFavorites:!0,favorites:[]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIRST_TIME_FINISHED_FAVORITES":return Object(n.a)(Object(n.a)({},e),{},{firstTimeFavorites:!1});case"REMOVE_FROM_FAVORITES":case"ADD_TO_FAVORITES":case"UPDATE_FAVORITES":return Object(n.a)(Object(n.a)({},e),{},{favorites:t.favorites});default:return e}},s={searchText:"",searchArr:[]},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR":return Object(n.a)(Object(n.a)({},e),{},{searchArr:[],searchText:""});case"UPDATE_TEXT":return Object(n.a)(Object(n.a)({},e),{},{searchText:t.val});case"UPDATE_SEARCH":return Object(n.a)(Object(n.a)({},e),{},{searchArr:t.arr});default:return e}},d={modalTitle:"",modalText:"",show:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLOSE_MODAL":return Object(n.a)(Object(n.a)({},e),{},{show:!1});case"OPEN_MODAL":return Object(n.a)(Object(n.a)({},e),{},{show:!0,modalTitle:t.title,modalText:t.text});default:return e}},m=r(26),p=r(69),O={loading:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(n.a)(Object(n.a)({},e),{},{loading:!0});case"FINISHED_LOADING":return Object(n.a)(Object(n.a)({},e),{},{loading:!1});default:return e}},E=Object(m.c)({home:u,favorites:i,search:l,modal:f,loading:T}),v=Object(m.d)(E,Object(m.a)(p.a))},36:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return c}));var n=r(10),a=function(){return{type:n.a.CLOSE_MODAL}},c=function(e,t){return{type:n.a.OPEN_MODAL,title:e,text:t}}},4:function(e,t,r){"use strict";r.d(t,"j",(function(){return n})),r.d(t,"k",(function(){return a})),r.d(t,"a",(function(){return c})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return i})),r.d(t,"i",(function(){return s})),r.d(t,"h",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"l",(function(){return f})),r.d(t,"b",(function(){return m})),r.d(t,"g",(function(){return p}));var n="https://www.accuweather.com/images/weathericons/",a=".svg",c="?apikey=eubH33xl3udPrlkaN4qNXhTGkbkYhpWD",u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o="215854",i="Tel Aviv",s="/aviv-kalmanson-23-9-2020",l="/aviv-kalmanson-23-9-2020/favorites",d="dark",f="light",m="C",p="F"},41:function(e,t,r){"use strict";r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return O})),r.d(t,"d",(function(){return E})),r.d(t,"a",(function(){return T})),r.d(t,"e",(function(){return v})),r.d(t,"f",(function(){return b}));var n=r(21),a=r.n(n),c=r(34),u=r(10),o=r(29),i=r(14),s=r(13),l=r.n(s),d=r(4),f=r(17),m=r(36),p=function(e,t,r){var n=o.a.getState().home.unit,a=e[1].data[0].WeatherIcon<10?"0"+e[1].data[0].WeatherIcon:e[1].data[0].WeatherIcon,c=n===d.b?Math.floor(e[1].data[0].Temperature.Metric.Value):Math.floor(e[1].data[0].Temperature.Imperial.Value),s=e[1].data[0].WeatherText,l=n===d.b?Object(i.g)(e[0].data.DailyForecasts):e[0].data.DailyForecasts;return{type:u.a.SET_CURRENT_CITY_DETAILS,data:e,cityKey:t,cityName:r,icon:a,currentTemp:c,currentStateOfWeather:s,fiveDaysForecast:l}},O=function(){return{type:u.a.FIRST_TIME_FINISHED}},T=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(Object(f.c)()),e.next=4,l.a.all([l.a.get("forecasts/v1/daily/5day/"+d.e+d.a),l.a.get("currentconditions/v1/"+d.e+d.a)]);case 4:r=e.sent,t(p(r,d.e,d.f)),t(O()),t(Object(f.b)()),navigator.geolocation.getCurrentPosition(function(){var e=Object(c.a)(a.a.mark((function e(r){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.coords,e.next=3,l.a.get("locations/v1/cities/geoposition/search".concat(d.a,"&q=").concat(n.latitude,"%2C").concat(n.longitude));case 3:c=e.sent,t(E(c.data.Key,c.data.EnglishName)),t(O());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){t(Object(m.b)("Note","Access denied to your location! No worries, we will use Tel Aviv as default."))}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t(Object(m.b)("Error",e.t0.toString()));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},E=function(e,t){return function(){var r=Object(c.a)(a.a.mark((function r(n){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n(Object(f.c)()),r.next=4,l.a.all([l.a.get("forecasts/v1/daily/5day/"+e+d.a),l.a.get("currentconditions/v1/"+e+d.a)]);case 4:c=r.sent,n(p(c,e,t)),n(Object(f.a)()),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),n(Object(m.b)("Error",r.t0.toString()));case 12:n(Object(f.b)());case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},v=function(e,t,r){return{type:u.a.TOGGLE,unit:t,currentTemp:e,fiveDaysForecast:r}},b=function(){return o.a.getState().home.darkModeText===d.l?document.body.style.backgroundColor="#343A40":document.body.style.backgroundColor="white",{type:u.a.TOGGLE_DARK_MODE}}},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n=function(){return JSON.parse(localStorage.getItem("favorites"))},a=function(e){localStorage.setItem("favorites",JSON.stringify(e))}},52:function(e,t,r){},75:function(e,t,r){e.exports=r(107)},80:function(e,t,r){}},[[75,2,4]]]);
//# sourceMappingURL=main.896d674d.chunk.js.map