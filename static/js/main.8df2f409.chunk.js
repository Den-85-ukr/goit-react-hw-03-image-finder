(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={App:"App_App__1oiZO",Loader:"App_Loader__2IXQl",ButtonContainer:"App_ButtonContainer__NdZhK"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2XXks",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__IudHd"}},14:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3rluN",Modal:"Modal_Modal__1g6hY"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2zQUu"}},26:function(e,t,a){e.exports={Button:"Button_Button__3aj6O"}},31:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),l=(a(31),a(15)),i=a(4),s=a(5),u=a(7),h=a(6),m=a(24),d=a.n(m),g=a(8),p=a.n(g),b=a(0),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:p.a.Searchbar,children:Object(b.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:p.a.SearchForm_button,children:Object(b.jsx)("span",{className:p.a.SearchForm_button__label,children:"Search"})}),Object(b.jsx)("input",{value:this.state.query,onChange:this.handleChange,className:p.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),f=a(12),y=a.n(f),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.imgURL,a=e.alt,n=e.largeImage,r=e.onToggle;return Object(b.jsx)("li",{className:y.a.ImageGalleryItem,onClick:function(){return r(n,a)},children:Object(b.jsx)("img",{src:t,alt:a,className:y.a.ImageGalleryItem_image})})}}]),a}(n.Component),O=a(25),_=a.n(O),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.onToggleModal;return Object(b.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.tags,r=e.webformatURL,o=e.largeImageURL;return Object(b.jsx)(v,{imgURL:r,largeImage:o,alt:n,onToggle:a},t)}))})}}]),a}(n.Component);S.defaultProp={images:[]};var x=S,I=a(26),w=a.n(I),C=function(e){var t=e.loadMore;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(b.jsx)("button",{tupe:"button",className:w.a.Button,onClick:t,children:"Load more"})},k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pagePx:"",id:""},e.showScroll=function(){document.documentElement.scrollTop>40?e.setState({id:"myBtn"}):e.setState({id:""})},e.topButtonClick=function(){window.scrollTo(0,0)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.showScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.showScroll)}},{key:"render",value:function(){return Object(b.jsx)("button",{tupe:"button",onClick:this.topButtonClick,id:this.state.id,title:"Go to top",children:"Top \u2191"})}}]),a}(n.Component),M=a(13),L=a.n(M);L.a.defaults.baseURL="https://pixabay.com/api/";var N={fetchImages:function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,o=e.pageSize,c=void 0===o?12:o;return L.a.get("?key=".concat("20406911-f22ead56d7a6718c622225634","&q=").concat(a,"&pageSize=").concat(c,"&page=").concat(r)).then((function(e){return e.data.hits}))}},G=a(14),F=a.n(G),Q=document.querySelector("#modal-root"),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlay=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children;return Object(o.createPortal)(Object(b.jsx)("div",{className:F.a.Overlay,onClick:this.handleOverlay,children:Object(b.jsx)("div",{className:F.a.Modal,children:e})}),Q)}}]),a}(n.Component),T=a(10),A=a.n(T),E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,selectImage:{},error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),N.fetchImages(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(l.a)(e.images),Object(l.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(t,a){e.setState((function(e){return{showModal:!e.showModal,selectImage:{url:t,alt:a}}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.images,n=e.isLoading,r=e.error,o=e.selectImage,c=o.url,l=o.alt,i=a.length>0&&!n;return Object(b.jsxs)("div",{className:A.a.App,children:[t&&Object(b.jsx)(B,{onClose:this.toggleModal,children:Object(b.jsx)("img",{src:c,alt:l})}),r&&Object(b.jsxs)("p",{children:["Uups Error! ",r.message]}),Object(b.jsx)(j,{onSubmit:this.onChangeQuery}),Object(b.jsx)(x,{images:a,onToggleModal:this.toggleModal}),n&&Object(b.jsx)("div",{className:A.a.Loader,children:Object(b.jsx)(d.a,{type:"TailSpin",color:"#3f51b5",height:80,width:80})}),i&&Object(b.jsxs)("div",{className:A.a.ButtonContainer,children:[Object(b.jsx)(C,{loadMore:this.fetchImages}),Object(b.jsx)(k,{})]})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2vYEt",SearchForm:"Searchbar_SearchForm__vlWvG",SearchForm_button:"Searchbar_SearchForm_button__1QRgj",SearchForm_button__label:"Searchbar_SearchForm_button__label__mxDlK",SearchForm_input:"Searchbar_SearchForm_input__1VvIM"}}},[[71,1,2]]]);
//# sourceMappingURL=main.8df2f409.chunk.js.map