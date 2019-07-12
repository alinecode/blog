(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{323:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-必须要说"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-必须要说","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 必须要说")]),t._v(" "),a("h3",{attrs:{id:"_1-1-开发背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-开发背景","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 开发背景")]),t._v(" "),a("p",[t._v("博主使用"),a("code",[t._v("Vue")]),t._v("开发的"),a("a",{attrs:{href:"https://godbmw.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("个人博客"),a("OutboundLink")],1),t._v("，博文使用"),a("code",[t._v("markdown")]),t._v("语法编写，然后交给前端渲染。为了更方便的进行说明和讲解，"),a("strong",[t._v("需要前端支持"),a("code",[t._v("LaTex")]),t._v("的数学公式，并且渲染好看的样式")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-效果展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-效果展示","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 效果展示")]),t._v(" "),a("p",[t._v("数学公式分为行内公式和跨行公式，当然都需要支持和渲染。")]),t._v(" "),a("p",[t._v("我准备了 3 条公式，分别是行内公式、跨行公式和超长的跨行公式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$\\alpha+\\beta=\\gamma$\n\n$$\\alpha+\\beta=\\gamma$$\n\n$$\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}\\int_{0}^{1}f(x)dx \\sum_{1}^{2}$$\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("这篇测试文章的地址是:"),a("a",{attrs:{href:"https://godbmw.com/passage/12",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("https://godbmw.com/passage/12")]),a("OutboundLink")],1),t._v("。效果图如下所示：\n"),a("img",{attrs:{src:"https://static.godbmw.com/images/%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA%E4%B8%8E%E8%BF%90%E8%90%A5/MathJax%EF%BC%9A%E8%AE%A9%E5%89%8D%E7%AB%AF%E6%94%AF%E6%8C%81%E6%95%B0%E5%AD%A6%E5%85%AC%E5%BC%8F/1.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_2-使用-mathjax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-mathjax","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 使用 MathJax")]),t._v(" "),a("h3",{attrs:{id:"_2-1-引入-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-引入-cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 引入 CDN")]),t._v(" "),a("p",[t._v("在使用 MathJax 之前，需要通过 CDN 引入, 在"),a("code",[t._v("<body>")]),t._v("标签中添加：\n"),a("code",[t._v('<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"><\/script>')]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-配置-mathjax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置-mathjax","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 配置 MathJax")]),t._v(" "),a("p",[t._v("将 MathJax 的配置封装成一个函数：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isMathjaxConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 防止重复调用Config，造成性能损耗")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("initMathjaxConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MathJax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MathJax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    showProcessingMessages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关闭js加载过程信息")]),t._v("\n    messageStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不显示信息")]),t._v("\n    jax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input/TeX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"output/HTML-CSS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tex2jax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      inlineMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\("')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//行内公式选择符")]),t._v("\n      displayMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\["')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//段内公式选择符")]),t._v("\n      skipTags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"script"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"noscript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"textarea"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//避开某些标签")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTML-CSS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      availableFonts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"STIX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TeX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可选字体")]),t._v("\n      showMathMenu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关闭右击菜单显示")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  isMathjaxConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h3",{attrs:{id:"_2-3-使用-mathjax-渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-使用-mathjax-渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 使用 MathJax 渲染")]),t._v(" "),a("p",[t._v("MathJax 提供了"),a("code",[t._v("window.MathJax.Hub.Queue")]),t._v("来执行渲染。在执行完文本获取操作后，进行渲染操作：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isMathjaxConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果：没有配置MathJax")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initMathjaxConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果，不传入第三个参数，则渲染整个document")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为使用的Vuejs，所以指明#app，以提高速度")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MathJax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Typeset"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  MathJax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Hub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"_2-4-修改默认样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-修改默认样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 修改默认样式")]),t._v(" "),a("p",[a("code",[t._v("MathJax")]),t._v("默认样式在被鼠标"),a("code",[t._v("focus")]),t._v("的时候，会有蓝色边框出现。对于超长的数学公式，x 方向也会溢出。")]),t._v(" "),a("p",[t._v("添加以下样式代码，覆盖原有样式，从而解决上述问题：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* MathJax v2.7.5 from 'cdnjs.cloudflare.com' */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".mjx-chtml")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".MJXc-display")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"_3-注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 注意事项")]),t._v(" "),a("h3",{attrs:{id:"_3-1-不要使用npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-不要使用npm","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 不要使用"),a("code",[t._v("npm")])]),t._v(" "),a("p",[a("strong",[t._v("不要使用 npm，会有报错，google 了一圈也没找到解决方案，github 上源码地址有对应的"),a("code",[t._v("issue")]),t._v("还没解决")]),t._v("。")]),t._v(" "),a("p",[t._v("博主多次尝试也没有找到解决方法，坐等版本更新和大神指点。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-动态数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-动态数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 动态数据")]),t._v(" "),a("p",[t._v("在 SPA 单页应用中，数据是通过"),a("code",[t._v("Ajax")]),t._v("获取的。此时，"),a("strong",[t._v("需要在数据获取后，再执行渲染")]),t._v("。")]),t._v(" "),a("p",[t._v("如果习惯"),a("code",[t._v("es5")]),t._v("，可以在回调函数中调用"),a("code",[t._v("window.MathJax.Hub.Queue")]),t._v("。但是更推荐"),a("code",[t._v("es6")]),t._v("，配合"),a("code",[t._v("Promise")]),t._v("和"),a("code",[t._v("async/await")]),t._v("来避免“回调地域”。")]),t._v(" "),a("h3",{attrs:{id:"_3-3-版本问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-版本问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.3 版本问题")]),t._v(" "),a("p",[t._v("对于不同版本或者不同 CDN 的"),a("code",[t._v("MathJax")]),t._v("，第二部分的样式覆盖的"),a("code",[t._v("class")]),t._v("名称不同。比如在"),a("code",[t._v("cdnboot")]),t._v("的"),a("code",[t._v("v2.7.0")]),t._v("版本中，样式覆盖的代码应该是下面这段：")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* MathJax v2.7.0 from 'cdn.bootcss.com' */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".MathJax")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".MathJax_Display")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"_4-更多资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-更多资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 更多资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.linpx.com/p/front-end-integration-mathjaxjs-configuration.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端整合 MathjaxJS 的配置笔记"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.mathjax.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mathjax 官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mathjax-chinese-doc.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mathjax 中文文档"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);