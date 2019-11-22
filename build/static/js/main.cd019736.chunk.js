(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(44)},29:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);n(45);var r,a,o=n(0),c=n.n(o),s=n(19),u=n.n(s),l=n(48),i=n(2),m=n(3),h=n(5),p=n(4),d=n(6),f={API_ENDPOINT:"http://localhost:8000/api",REACT_APP_API_BASE:"https://learn-spanish-med-terms-api.herokuapp.com/api"},E=n(20),g=n.n(E),b={saveAuthToken:function(e){window.localStorage.setItem(f.TOKEN_KEY,e)},getAuthToken:function(){return window.localStorage.getItem(f.TOKEN_KEY)},clearAuthToken:function(){window.localStorage.removeItem(f.TOKEN_KEY)},hasAuthToken:function(){return!!b.getAuthToken()},parseJwt:function(e){return g()(e)},parseAuthToken:function(){var e=b.getAuthToken();return e?b.parseJwt(e):void 0},_getMsUntilExpiry:function(e){return 1e3*e.exp-Date.now()},queueCallbackBeforeExpiry:function(e){var t=b._getMsUntilExpiry(b.parseAuthToken());r=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry:function(){clearTimeout(r)}},v=b,y={postUser:function(e){return fetch("".concat(f.API_ENDPOINT,"/user"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},postLogin:function(e){var t=e.username,n=e.password;return fetch("".concat(f.API_ENDPOINT,"/auth/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:n})}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},refreshToken:function(){return fetch("".concat(f.API_ENDPOINT,"/auth/token"),{method:"PUT",headers:{authorization:"Bearer ".concat(v.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}},k=null,w=["mousedown","mousemove","keypress","scroll","touchstart"],N={setIdleCallback:function(e){k=e},resetIdleTimer:function(e){clearTimeout(a),a=setTimeout(k,3e5)},regiserIdleTimerResets:function(){w.forEach(function(e){return document.addEventListener(e,N.resetIdleTimer,!0)})},unRegisterIdleResets:function(){clearTimeout(a),w.forEach(function(e){return document.removeEventListener(e,N.resetIdleTimer,!0)})}},O=N,j=c.a.createContext({user:{},error:null,setError:function(){},clearError:function(){},setUser:function(){},processLogin:function(){},processLogout:function(){}}),x=j,S=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).setError=function(e){console.error(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.setUser=function(e){n.setState({user:e})},n.processLogin=function(e){v.saveAuthToken(e);var t=v.parseAuthToken();n.setUser({id:t.user_id,name:t.name,username:t.sub}),O.regiserIdleTimerResets(),v.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})},n.processLogout=function(){v.clearAuthToken(),v.clearCallbackBeforeExpiry(),O.unRegisterIdleResets(),n.setUser({})},n.logoutBecauseIdle=function(){v.clearAuthToken(),v.clearCallbackBeforeExpiry(),O.unRegisterIdleResets(),n.setUser({idle:!0})},n.fetchRefreshToken=function(){y.refreshToken().then(function(e){v.saveAuthToken(e.authToken),v.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})}).catch(function(e){n.setError(e)})};var r={user:{},error:null},a=v.parseAuthToken();return a&&(r.user={id:a.user_id,name:a.name,username:a.sub}),n.state=r,O.setIdleCallback(n.logoutBecauseIdle),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.hasAuthToken()&&(O.regiserIdleTimerResets(),v.queueCallbackBeforeExpiry(function(){e.fetchRefreshToken()}))}},{key:"componentWillUnmount",value:function(){O.unRegisterIdleResets(),v.clearCallbackBeforeExpiry()}},{key:"render",value:function(){var e={user:this.state.user,error:this.state.error,setError:this.setError,clearError:this.clearError,setUser:this.setUser,processLogin:this.processLogin,processLogout:this.processLogout};return c.a.createElement(j.Provider,{value:e},this.props.children)}}]),t}(o.Component),T=c.a.createContext({language:null,score:0,words:[],currentWord:{},error:null,setLanguage:function(){},setWords:function(){},setCurrentWord:function(){},setScore:function(){},setError:function(){},clearError:function(){}}),I=T,C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).setLanguage=function(e){n.setState({language:e})},n.setWords=function(e){n.setState({words:e})},n.setCurrentWord=function(e){n.setState({currentWord:e})},n.setScore=function(e){n.setState({score:e})},n.setError=function(e){console.error(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.state={language:null,score:0,words:[],currentWord:{},error:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={language:this.state.language,score:this.state.score,words:this.state.words,currentWord:this.state.currentWord,error:this.state.error,setScore:this.setScore,setLanguage:this.setLanguage,setWords:this.setWords,setCurrentWord:this.setCurrentWord,setError:this.setError,clearError:this.clearError};return c.a.createElement(T.Provider,{value:e},this.props.children)}}]),t}(o.Component),L=n(50),A=n(49),B=n(46),P=(n(29),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleLogoutClick=function(){n.context.processLogout()},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"renderLogoutLink",value:function(){return c.a.createElement("div",null,c.a.createElement("span",{className:"username"},this.context.user.name),c.a.createElement("nav",null,c.a.createElement(B.a,{onClick:this.handleLogoutClick,to:"/login",className:"navLink basicBtn"},"Logout")))}},{key:"renderLoginLink",value:function(){return c.a.createElement("nav",null,c.a.createElement(B.a,{className:"navLink basicBtn",to:"/login"},"Login"),c.a.createElement(B.a,{className:"navLink basicBtn",to:"/register"},"Sign up"))}},{key:"render",value:function(){return c.a.createElement("header",{className:"mainHeader"},c.a.createElement("h1",{className:"mainTitle"},c.a.createElement(B.a,{className:"header",to:"/"},"Learn Spanish Medical Terms")),c.a.createElement("div",{className:"navLinks"},v.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink()))}}]),t}(o.Component));P.contextType=x;var W=P,R=n(12),D=n(47);function _(e){var t=e.component,n=Object(R.a)(e,["component"]),r=t;return c.a.createElement(A.a,Object.assign({},n,{render:function(e){return c.a.createElement(x.Consumer,null,function(t){return t.user.id?c.a.createElement(r,e):c.a.createElement(D.a,{to:{pathname:t.user.idle?"/login":"/register",state:{from:e.location}}})})}}))}function q(e){var t=e.component,n=Object(R.a)(e,["component"]),r=t;return c.a.createElement(A.a,Object.assign({},n,{render:function(e){return c.a.createElement(x.Consumer,null,function(t){return t.user.id?c.a.createElement(D.a,{to:"/"}):c.a.createElement(r,e)})}}))}var U=n(14),M=n.n(U);n(33);function F(e){var t=e.className,n=Object(R.a)(e,["className"]);return c.a.createElement("label",Object.assign({className:M()("Label",t)},n))}var z=c.a.forwardRef(function(e,t){var n=e.className,r=Object(R.a)(e,["className"]);return c.a.createElement("input",Object.assign({className:M()("Input",n),type:"text",ref:t},r))});function Y(e){var t=e.className,n=Object(R.a)(e,["className"]);return c.a.createElement("span",Object.assign({className:M()("Required",t)},n),"*")}n(34);var J=c.a.forwardRef(function(e,t){var n=e.className,r=Object(R.a)(e,["className"]);return c.a.createElement("button",Object.assign({className:M()("Button",n),ref:t},r))}),K=(n(35),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.name,a=t.username,o=t.password;y.postUser({name:r.value,username:a.value,password:o.value}).then(function(e){r.value="",a.value="",o.value="",n.props.onRegistrationSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("div",{className:"box"},c.a.createElement("form",{className:"registration",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",{className:"alertMsg"},e)),c.a.createElement("div",{className:"formItem"},c.a.createElement(F,{htmlFor:"registration-name-input"},"Enter your name",c.a.createElement(Y,null)),c.a.createElement("br",null),c.a.createElement(z,{className:"formBox",ref:this.firstInput,id:"registration-name-input",name:"name",required:!0})),c.a.createElement("div",{className:"formItem"},c.a.createElement(F,{htmlFor:"registration-username-input"},"Choose a username",c.a.createElement(Y,null)),c.a.createElement(z,{className:"formBox",id:"registration-username-input",name:"username",required:!0})),c.a.createElement("div",{className:"formItem"},c.a.createElement(F,{htmlFor:"registration-password-input"},"Choose a password",c.a.createElement(Y,null)),c.a.createElement(z,{className:"formBox",id:"registration-password-input",name:"password",type:"password",required:!0})),c.a.createElement("footer",{className:"formFooter"},c.a.createElement(J,{type:"submit",className:"basicBtn"},"Sign up")," ",c.a.createElement("br",null),c.a.createElement(B.a,{to:"/login",className:"already"},"Already have an account?"))))}}]),t}(o.Component));K.defaultProps={onRegistrationSuccess:function(){}};var H=K,G=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleRegistrationSuccess=function(){n.props.history.push("/login")},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("p",{className:"descriptionLine"},"Practice learning a language with the spaced repetition technique."),c.a.createElement("h2",null,"Sign up"),c.a.createElement(H,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),t}(o.Component);G.defaultProps={history:{push:function(){}}};var Q=G,Z=(n(36),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.username,a=t.password;n.setState({error:null}),y.postLogin({username:r.value,password:a.value}).then(function(e){r.value="",a.value="",n.context.processLogin(e.authToken),n.props.onLoginSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("div",{className:"box"},c.a.createElement("form",{className:"LoginForm",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",{className:"alertMsg2"},e)),c.a.createElement("div",{className:"formItem"},c.a.createElement(F,{htmlFor:"login-username-input"},"Username"," "),c.a.createElement(z,{className:"formBox",ref:this.firstInput,id:"login-username-input",name:"username",required:!0})),c.a.createElement("div",{className:"formItem"},c.a.createElement(F,{htmlFor:"login-password-input"},"Password"," "),c.a.createElement(z,{className:"formBox",id:"login-password-input",name:"password",type:"password",required:!0})),c.a.createElement(J,{className:"basicBtn",type:"submit"},"Login")))}}]),t}(o.Component));Z.defaultProps={onLoginSuccess:function(){}},Z.contextType=x;var $=Z,V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).handleLoginSuccess=function(){var e=n.props,t=e.location,r=e.history,a=(t.state||{}).from||"/";r.push(a)},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h2",null,"Login"),c.a.createElement($,{onLoginSuccess:this.handleLoginSuccess}))}}]),t}(o.Component);V.defaultProps={location:{},history:{push:function(){}}};var X=V,ee=n(8),te=n.n(ee),ne=n(11),re={getLanguage:function(){var e=Object(ne.a)(te.a.mark(function e(){var t,n;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f.API_ENDPOINT,"/language"),{headers:{authorization:"Bearer ".concat(v.getAuthToken())}});case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),getLanguageHead:function(){var e=Object(ne.a)(te.a.mark(function e(){var t,n;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(f.API_ENDPOINT,"/language/head"),{headers:{authorization:"Bearer ".concat(v.getAuthToken())}});case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0);case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),postGuessWord:function(){var e=Object(ne.a)(te.a.mark(function e(t){var n,r,a,o;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={guess:t},a={method:"POST",body:JSON.stringify(r),headers:{"content-type":"application/json",authorization:"Bearer ".concat(v.getAuthToken())}},e.prev=2,e.next=5,fetch("".concat(f.API_ENDPOINT,"/language/guess"),a);case 5:return o=e.sent,e.next=8,o.json();case 8:n=e.sent,e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),new Error(e.t0);case 14:return console.log(n),e.abrupt("return",n);case 16:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}()},ae=(n(39),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={error:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ne.a)(te.a.mark(function e(){var t,n;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.getLanguage();case 2:t=e.sent,n=t.language,console.log(n),this.context.setScore(n.total_score),this.context.setLanguage(n.name);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.context.score,t=this.context.language;return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",null,c.a.createElement("div",{className:"upperSection"},c.a.createElement("h2",{className:"languageTitle"},t),c.a.createElement("p",{className:"currentScore"},"Your overall score: ",e),c.a.createElement(B.a,{to:"/"},c.a.createElement("button",{className:"basicBtn btnB"},"Study Mode")),c.a.createElement(B.a,{to:"/learn"},c.a.createElement("button",{className:"basicBtn btnB"},"Quiz Mode")))))}}]),t}(o.Component));ae.contextType=I;var oe=ae,ce=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).seePrevious=function(){n.state.currentWordIndex>0&&n.setState({currentWordIndex:n.state.currentWordIndex-1})},n.seeNext=function(){n.state.currentWordIndex<n.context.words.length-1&&n.setState({currentWordIndex:n.state.currentWordIndex+1})},n.state={currentWordIndex:0,error:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(ne.a)(te.a.mark(function e(){var t,n;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.getLanguage();case 2:t=e.sent,n=t.words,this.context.setWords(n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.context.words.map(function(e,t){return c.a.createElement("li",{className:"pCard",key:t},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"leftSide"},c.a.createElement("h3",{className:"vocabItem"},e.original),c.a.createElement("h4",{className:"vocabAnswer"},e.translation)),c.a.createElement("div",{className:"rightSide"},c.a.createElement("p",{className:"tallyTop"},"YOUR TALLY"),c.a.createElement("p",{className:"tallyParag"},"Correct"),c.a.createElement("p",{className:"tallyCount"},e.correct_count),c.a.createElement("p",{className:"tallyParag"},"Incorrect"),c.a.createElement("p",{className:"tallyCount"},e.incorrect_count))))})[this.state.currentWordIndex];return c.a.createElement("div",{className:"practiceCards",id:"practiceCards"},c.a.createElement("p",{className:"mode"},"STUDY CARDS"),e,c.a.createElement("button",{className:"basicBtn btnB prev",onClick:this.seePrevious},"Previous"),c.a.createElement("button",{className:"basicBtn btnB next",onClick:this.seeNext},"Next"))}}]),t}(c.a.Component);ce.contextType=I;var se=ce,ue=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(oe,null),c.a.createElement(se,null))}}]),t}(o.Component),le=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleNext=function(){n.setState({answerSubmitted:!1}),n.componentDidMount()},n.state={currentWord:"",correctTally:0,incorrectTally:0,totalScore:0,answerSubmitted:!1,answeredCorrectly:!1,correctAnswer:"",error:null},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(){var e=Object(ne.a)(te.a.mark(function e(t){var n,r;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.state.answerSubmitted){e.next=11;break}return n=t.target.guessInput.value,e.next=5,re.postGuessWord(n);case 5:r=e.sent,this.processFeedback(r),document.getElementById("wordInput").reset(),e.next=14;break;case 11:window.alert("Please click 'Next' to continue."),document.getElementById("wordInput").reset();case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"processFeedback",value:function(e){this.setState({correctTally:e.wordCorrectCount,incorrectTally:e.wordIncorrectCount,totalScore:e.totalScore,answeredCorrectly:e.isCorrect,correctAnswer:e.answer,answerSubmitted:!0}),this.context.setScore(e.totalScore)}},{key:"chooseMessage",value:function(){return this.state.answerSubmitted&&this.state.answeredCorrectly?'Yes, the answer is "'.concat(this.state.correctAnswer,'"!'):this.state.answerSubmitted&&!this.state.answeredCorrectly?'Incorrect. The answer is "'.concat(this.state.correctAnswer,'".'):" "}},{key:"componentDidMount",value:function(){var e=Object(ne.a)(te.a.mark(function e(){var t;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.getLanguageHead();case 2:t=e.sent,this.setState({currentWord:t.nextWord,correctTally:t.wordCorrectCount,incorrectTally:t.wordIncorrectCount,totalScore:t.totalScore});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.chooseMessage(),n=this.state.answerSubmitted?c.a.createElement("span",{id:"feedback"},c.a.createElement("em",null,t),c.a.createElement("button",{onClick:this.handleNext,className:"basicBtn btnB",id:"proceed"},"Next")):"";return c.a.createElement("div",{className:"quizCards",id:"quizCards"},c.a.createElement("p",{className:"mode"},"QUIZ MODE"),c.a.createElement("div",{className:"qCard",key:"index"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"leftSide"},c.a.createElement("h3",{className:"vocabItem2"},this.state.currentWord),c.a.createElement("form",{id:"wordInput",onSubmit:function(t){return e.handleSubmit(t)}},c.a.createElement("label",{htmlFor:"guessInput",className:"quizInputLabel"},"What's the translation for this word?"),c.a.createElement("br",null),c.a.createElement("input",{type:"text",className:"answerBox2",placeholder:"type answer here",id:"guessInput",name:"guessInput","aria-label":"guess box for quiz words","aria-required":"true","aria-describedby":"quizCards",required:!0}),c.a.createElement("button",{type:"submit",className:"basicBtn",id:"submitAnswer"},"Submit your answer"))),c.a.createElement("div",{className:"rightSide"},c.a.createElement("p",{className:"tallyTop"},"YOUR TALLY"),c.a.createElement("p",{className:"tallyParag"},"Correct"),c.a.createElement("p",{className:"tallyCount"},this.state.correctTally),c.a.createElement("p",{className:"tallyParag"},"Incorrect"),c.a.createElement("p",{className:"tallyCount"},this.state.incorrectTally)))),c.a.createElement("div",{className:"messageHolder"},c.a.createElement("p",null,n,c.a.createElement("span",{style:{visibility:"hidden",fontSize:"3.2rem"}},"l"))))}}]),t}(c.a.Component);le.contextType=I;var ie=le,me=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(oe,null),c.a.createElement(ie,null))}}]),t}(o.Component),he=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h2",null,"404 - Page not found"),c.a.createElement("p",null,"Try going back to your previous page."))}}]),t}(o.Component);n(40);function pe(){return c.a.createElement("footer",{className:"mainFooter"},c.a.createElement("p",{className:"footerText"},"Created by ",c.a.createElement("a",{className:"footerLink",href:"https://thinkful-ei-gecko.github.io/portfolio-wireframe-badri/",target:"_blank",rel:"noopener noreferrer"},"Badri Narayana Tulsiram")," || ",c.a.createElement("a",{className:"footerLink",href:"https://flashcabaja64.github.io/portfolio/",target:"_blank",rel:"noopener noreferrer"},"Hubert Yang")," || Laura Elias"))}n(41);var de=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.hasError;return c.a.createElement("div",{className:"App"},c.a.createElement(W,null),c.a.createElement("main",null,e&&c.a.createElement("p",null,"There was an error! Oh no!"),c.a.createElement(L.a,null,c.a.createElement(_,{exact:!0,path:"/",component:ue}),c.a.createElement(_,{path:"/learn",component:me}),c.a.createElement(q,{path:"/register",component:Q}),c.a.createElement(q,{path:"/login",component:X}),c.a.createElement(A.a,{component:he}))),c.a.createElement(pe,null))}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}]),t}(o.Component);n(42),n(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(l.a,null,c.a.createElement(S,null,c.a.createElement(C,null,c.a.createElement(de,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.cd019736.chunk.js.map