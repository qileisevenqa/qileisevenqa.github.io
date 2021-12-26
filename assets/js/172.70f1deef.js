(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{385:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"测试10年，10节课–第8课"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试10年，10节课–第8课","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试10年，10节课–第8课")]),t._v(" "),e("p",[t._v("读者您好，有趣的是，有许多不同的方法可以绕过身份验证。 幸运的是，我开始尝试通过静态代码分析绕过身份验证。这篇文章讨论了如何通过静态代码分析绕过身份验证。")]),t._v(" "),e("p",[t._v("我正在寻找一个好的大型平台进行测试。 因此，我一直在考虑可以弄坏自己的网站。 最后，我想出了一个非常受欢迎和有吸引力的旅游胜地的在线预订网站。 作为参考，我们在此博客文章中将其称为redacted.com。")]),t._v(" "),e("p",[t._v("让我们深入探讨如何实现这一目标。")]),t._v(" "),e("p",[t._v("不知何故，我个人最喜欢的漏洞是身份验证绕过。 另外，在这一类别中，OTP旁路是我最喜欢的。 因此，我有个人检查清单来查找OTP绕过漏洞的灰色区域。 我将掩盖我在redacted.com中找到旁路的过程中尝试过的清单中的两点。")]),t._v(" "),e("p",[t._v("让我们讨论第一个是拦截响应。")]),t._v(" "),e("p",[t._v("在Burp套件中，我配置为拦截请求和响应。 在这种方法中，黑客通常检查服务器响应中是否存在错误的OTP，然后尝试模拟响应以获取正确的OTP。 因此，我尝试使用无效的OTP并将该请求发送给中继器以检查响应。 我从服务器收到{“ status”：true，“ data”：{“ valid”：false}}对于无效OTP的响应。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/1384/1*iE9AOx-saO_iB78KshJ0bg.png",alt:"https://miro.medium.com/max/1384/1*iE9AOx-saO_iB78KshJ0bg.png"}})]),t._v(" "),e("p",[t._v("在下一次尝试中，我尝试使用{“ status”：true，“ data”：{“ valid”：true}}更改响应，并使用burp suite转发请求。 坏运气 ：（")]),t._v(" "),e("p",[t._v("我无法通过截获响应并将其转发来绕过身份验证。")]),t._v(" "),e("p",[t._v("之后，我尝试再次拦截对OTP的请求，这一次，我尝试使用正确的OTP来检查服务器响应，以防出现正确的OTP。 我输入了正确的OTP，捕获了请求，将请求发送到转发器，并验证了正确的OTP的响应。 响应如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n   "status":true,\n   "data":{\n      "valid":true,\n      "token":"*******************",\n      "name":"username"\n   }\n}\n')])])]),e("p",[t._v("通过查看响应，我想到的第一件事是这是一个基于令牌的请求，每个请求都会对其进行验证。 因此，由于现在我需要找出基于令牌的应用程序弱点来绕过OTP，因此我的测试范围将扩大。 但是，我绕过OTP漏洞的清单还有一点是静态分析。 在这一点上，我基本上开始挖掘HTML，JS文件，以查看身份验证是否存在任何编码缺陷。")]),t._v(" "),e("p",[t._v("我发现有一个功能可以用来验证OTP。 该函数如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("if(IsJsonString(res))\n{\n       otp = JSON.parse(result);\n       if(otp['status'])\n       {\n          if(otp['data']['valid'])\n          {\n             token = otp['data']['token'];\n             name = otp['data']['name'];\n             if(token.length>0 && name.length>0)\n             {\n                set_user_login(name,token);\n                alert(\"Login\");\n             }\n             else\n             {\n                alert(\"please try again after some time.\");\n             }\n          }\nelse\n{\n   alert(\"Incorrect OTP.\");\n}\n")])])]),e("p",[t._v("通过分析此代码，我了解到该功能仅在验证请求中令牌的长度和名称。 它没有验证完整的令牌。 检查条件：if（token.length> 0 && name.length> 0）。")]),t._v(" "),e("p",[t._v('在第二次尝试中，我输入了错误的OTP，捕获了请求，转发了请求，捕获了响应，并将响应从\n{“ status”：true，“ data”：{“ valid”：false}}更新为{“ status” ：true，“数据”：{"status":true,"data":{"valid":true,"token":"test","name":"username"}}')]),t._v(" "),e("p",[t._v("BINGO…我能够成功登录。 这是我的第一个静态代码分析错误。 我迅速编写了步骤，并以适当的POC向相关方报告。")]),t._v(" "),e("p",[t._v("以下是帮助读者和新社区成员如何根据发现撰写报告的报告。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://miro.medium.com/max/1400/1*FERCSHHwbiy5hRIgDVrTFQ.png",alt:""}})]),t._v(" "),e("p",[t._v("几个小时后，我得到了公司关于这个漏洞的确认。公司也对我入选名人堂的努力表示感谢。")]),t._v(" "),e("p",[t._v("结论:\n总是尝试寻找不同的攻击向量。即使你在一个方法上失败了，尝试寻找不同的方法。做你自己的检查表，找出错误，并每天改进它。最后，没有一个应用程序是没有bug的……对吧?😃")]),t._v(" "),e("p",[t._v("感谢你的阅读。")]),t._v(" "),e("p",[t._v("如果你喜欢，请鼓掌。")]),t._v(" "),e("h3",{attrs:{id:"author"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[t._v("#")]),t._v(" author")]),t._v(" "),e("p",[t._v("石头 磊哥 seven 随便叫")]),t._v(" "),e("h3",{attrs:{id:"company"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[t._v("#")]),t._v(" company")]),t._v(" "),e("p",[t._v("thoughtworks")]),t._v(" "),e("p",[t._v("大家好，本人不才，目前依旧混迹于thoughtworks，做着一名看起来像全栈的QA，兴趣爱好前端，目前是thoughtworks 西安QA社区的leader，如果有兴趣分享话题，或者想加入tw，可以找我")]),t._v(" "),e("h3",{attrs:{id:"roles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[t._v("#")]),t._v(" roles")]),t._v(" "),e("p",[t._v("QA（营生） dev（front-end dev 兴趣爱好）")]),t._v(" "),e("h3",{attrs:{id:"联系方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系方式")]),t._v(" "),e("p",[t._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),t._v(" "),e("h4",{attrs:{id:"wechat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[t._v("#")]),t._v(" wechat:")]),t._v(" "),e("p",[t._v("qileiwangnan")]),t._v(" "),e("h4",{attrs:{id:"email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[t._v("#")]),t._v(" email:")]),t._v(" "),e("p",[t._v("qileilove@gmail.com")])])}],!1,null,null,null);a.default=r.exports}}]);