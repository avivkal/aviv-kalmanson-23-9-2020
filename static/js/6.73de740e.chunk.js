(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[6],{149:function(e,t,a){"use strict";a.d(t,"e",(function(){return v})),a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return y})),a.d(t,"a",(function(){return T})),a.d(t,"d",(function(){return E}));var n=a(21),r=a.n(n),c=a(217),i=a(34),o=a(10),s=a(13),u=a.n(s),l=a(50),m=a(14),f=a(4),d=a(17),p=a(29),v=function(e){return{type:o.a.SET_FAVORITE_CITY_DETAILS,payload:e}},h=function(){return{type:o.a.FIRST_TIME_FINISHED_FAVORITES}},y=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a,n,i,o,s,v,y,E;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(Object(d.c)()),a=Object(l.a)(),n=[],!Object(m.a)(a)){e.next=13;break}i=Object(c.a)(a);try{for(i.s();!(o=i.n()).done;)s=o.value,n.push(u.a.all([u.a.get("forecasts/v1/daily/5day/"+s.key+f.a),u.a.get("currentconditions/v1/"+s.key+f.a)]))}catch(r){i.e(r)}finally{i.f()}return v=p.a.getState().home.unit,e.next=9,u.a.all(n);case 9:for(y=e.sent,E=0;E<y.length;E++)a[E].fiveDaysForecast=v===f.b?Object(m.g)(y[E][0].data.DailyForecasts):y[E][0].data.DailyForecasts,a[E].currentStateOfWeather=y[E][1].data[0].WeatherText,a[E].currentTemp=v===f.b?Math.floor(y[E][1].data[0].Temperature.Metric.Value):Math.floor(y[E][1].data[0].Temperature.Imperial.Value),a[E].icon=y[E][1].data[0].WeatherIcon<10?"0"+y[E][1].data[0].WeatherIcon:y[E][1].data[0].WeatherIcon;t(Object(d.d)(a)),t(h());case 13:t(Object(d.b)());case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=p.a.getState().favorites.favorites.filter((function(t){return t.key!==e}));return Object(l.b)(t),{type:o.a.REMOVE_FROM_FAVORITES,favorites:t}},T=function(){var e=Object(l.a)(),t=p.a.getState().home.current,a=[];return Object(m.a)(e)?a=e.concat(t):a.push(t),Object(l.b)(a),{type:o.a.ADD_TO_FAVORITES,favorites:a}}},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},174:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),i=a(391),o=(a(150),a(14)),s=function(e){var t=e.today,a=e.index,n=e.currentDay,s=e.unit;return r.a.createElement(i.a,{className:"col-xl-2 cards-style"},r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,{className:"cards-title"},c.d[(t+a)%7]),r.a.createElement("div",{className:"cards-text card-margin"},n.Temperature.Minimum.Value,"  - ",n.Temperature.Maximum.Value," \xb0",s,r.a.createElement("div",{className:"row icons-day-night justify-content-center"},r.a.createElement("span",{className:"d-flex justify-content-start span-width"},"Day:"),r.a.createElement("img",{className:"icons-images",src:"".concat(c.j).concat(Object(o.f)(n.Day.Icon)).concat(c.k),alt:"weather icon day"})),r.a.createElement("div",{className:"row icons-day-night justify-content-center"},r.a.createElement("span",{className:"d-flex justify-content-start span-width"},"Night:"),r.a.createElement("img",{className:"icons-images",src:"".concat(c.j).concat(Object(o.f)(n.Night.Icon)).concat(c.k),alt:"weather icon night"})))))},u=a(72),l=(a(151),function(e){var t=e.currentFavorite,a=t.currentTemp,n=t.cityName,o=t.currentStateOfWeather,s=t.icon,l=e.click,m=e.unit;return r.a.createElement(i.a,{className:"col-lg-2 favorites-cards",onClick:l,as:u.a},r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,{className:"cards-text"},n),r.a.createElement("div",{className:"cards-text"},a," \xb0",m,r.a.createElement("div",{className:"current-state"},o),r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"icons-images",src:"".concat(c.j).concat(s).concat(c.k),alt:"weather icon day"})))))});a(152),t.a=function(e){var t=e.favorites,a=e.click,n=e.today,c=e.current,i=e.unit;return e.isFav?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},Object(o.a)(t)?t.map((function(e){return r.a.createElement(l,{key:e.key,currentFavorite:e,click:function(){return a(e)},currentTemp:e.currentTemp,unit:i})})):r.a.createElement("h1",{className:"text-".concat(e.darkModeText,"-mode-active no-favorites-h1")},"You don't have any favorites currently"))):r.a.createElement("div",{className:"row justify-content-center"},Object(o.a)(c.fiveDaysForecast)&&c.fiveDaysForecast.map((function(e,t){return r.a.createElement(s,{currentDay:e,today:n,index:t,unit:i,key:e.Date})})))}},387:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(23),c=a(25),i=a(24),o=a(0),s=a.n(o),u=a(35),l=(a(52),a(176)),m=a(17),f=a(149),d=a(174),p=a(4),v=a(110),h=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).handleClickOnCard=function(t){e.props.history.push(p.i),e.props.clearText(),e.props.setFavoriteCityDetails(t)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.firstTimeFavorites&&this.props.firstLoadFavorites()}},{key:"render",value:function(){var e=this;return this.props.loading?s.a.createElement(v.a,{animation:"border",className:"spinner"}):s.a.createElement("div",{className:this.props.darkModeText},s.a.createElement(l.CSSTransitionGroup,{transitionName:"cards",transitionAppear:!0,transitionAppearTimeout:1e3,transitionEnterTimeout:1e3,transitionLeaveTimeout:1e3},s.a.createElement(d.a,{click:function(t){return e.handleClickOnCard(t)},unit:this.props.unit,favorites:this.props.favorites,darkModeText:this.props.darkModeText,isFav:!0})))}}]),a}(o.Component);t.default=Object(u.b)((function(e){return{favorites:e.favorites.favorites,current:e.home.current,unit:e.home.unit,firstTimeFavorites:e.favorites.firstTimeFavorites,darkModeText:e.home.darkModeText,loading:e.loading.loading}}),(function(e){return{setFavoriteCityDetails:function(t){return e(f.e(t))},clearText:function(){return e(m.a())},firstTimeFinishedFavorites:function(){return e(f.c())},updateFavorites:function(t){return e(m.d(t))},firstLoadFavorites:function(){return e(f.b())}}}))(h)}}]);
//# sourceMappingURL=6.73de740e.chunk.js.map