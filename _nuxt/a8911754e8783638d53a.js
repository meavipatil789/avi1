(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{181:function(t,e,n){"use strict";n.d(e,"a",function(){return r});n(29);var r={mounted:function(){"namso-gen.com"!==window.location.hostname&&null!==this.$route.name&&(window.location="/404.html")}}},233:function(t,e,n){"use strict";n.r(e);var r=n(212),o={head:{titleTemplate:"Lorem Ipsum Generator - %s",meta:[{hid:"description",name:"description",content:"Random lorem ipsum generator."},{hid:"og:title",name:"og:title",content:"NamsoGen's Lorem Ipsum Generator"},{hid:"og:description",name:"og:description",content:"Random lorem ipsum generator."}]},mixins:[n(181).a],data:function(){return{count:5,paragraphs:[]}},computed:{lorem:function(){return new r.LoremIpsum({sentencesPerParagraph:{max:8,min:4},wordsPerSentence:{max:16,min:8}})}},methods:{generate:function(){this.clear();for(var t=0;t<this.count;t++)this.paragraphs.push(this.lorem.generateParagraphs(2))},clear:function(){this.paragraphs=[]}}},c=n(6),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-70-screen"},[t._m(0),t._v(" "),n("form",{staticClass:"mt-10 w-full lg:w-1/2 mx-auto",attrs:{action:"/",method:"get"},on:{submit:function(e){return e.preventDefault(),t.generate(e)}}},[n("div",[n("label",{staticClass:"block cursor-pointer relative"},[n("span",{staticClass:"text-gray-600 font-medium text-xs absolute bg-white px-3 pt-1 ml-2 -mt-3 uppercase"},[t._v("Paragraphs")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.count,expression:"count",modifiers:{number:!0}}],staticClass:"form-input w-full block",attrs:{type:"number"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),t._m(1)]),t._v(" "),t.paragraphs.length?n("div",{staticClass:"mt-10 bg-gray-100 p-3 rounded border border-gray-200"},t._l(t.paragraphs,function(e,r){return n("p",{key:r,staticClass:"mb-3"},[t._v(t._s(e))])}),0):t._e(),t._v(" "),t._m(2),t._v(" "),n("input",{attrs:{type:"hidden",name:"IL_IN_TAG",value:"2"}})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-3xl font-bold text-gray-700"},[this._v("Lorem Ipsum Generator")]),this._v(" "),e("p",{staticClass:"my-3"},[this._v("Generate random lorem ipsum placeholder text")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-6"},[e("button",{staticClass:"inline-block shadow-md bg-teal-600 text-white font-medium rounded py-3 px-8 hover:bg-teal-500 focus:bg-teal-700 focus:outline-none",attrs:{type:"submit"}},[this._v("\n                Generate\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex py-2"},[e("input",{attrs:{type:"hidden",name:"IL_IN_ARTICLE"}})])}],!1,null,null,null);e.default=component.exports}}]);