(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{279:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"jmeter-中-graphql-的深入研究"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmeter-中-graphql-的深入研究","aria-hidden":"true"}},[t._v("#")]),t._v(" JMeter 中 GraphQL 的深入研究")]),t._v(" "),e("p",[t._v("JMeter 中 GraphQL 的深入研究\n随着 JMeter 5.4最新版本的发布，您可以使用 GraphQL HTTP Sampler 进行 GraphQL 性能测试。本博客深入研究 JMeter 5.4中的 GraphQL。你可以查看我之前发布的关于 JMeter 顶级特性的文章。\nWhat is GraphQL? 什么是 GraphQL？\n下面是从 graphql. org 复制的文本\nGraphQL 是用于 api 的查询语言，也是用于使用现有数据完成这些查询的运行时。提供了 API 中数据的完整且易于理解的描述，让客户能够精确地询问他们需要什么，仅此而已，让 API 随着时间的推移更容易发展，并支持强大的开发工具。\n是 Facebook 在2012年开发的。2015年公开宣布了这一消息。几年前，这个项目转移到了由 Linux 基金会托管的 GraphQL 基金会。")]),t._v(" "),e("p",[t._v("您可能熟悉 ReST api，它是一种架构模式，经常超过获取或低于获取数据。GraphQL 获取正确的数量。ReST 和 GraphQL 有很多不同之处，快速互联网搜索可以帮助你理解它们之间的区别。\n使用 ReST，您可能最终会使用多个请求来获取所需的数据。例如，如果您正在开发冰淇淋在线商店，以获取新到的、不含乳制品的和各种口味的冰淇淋，那么您需要开发多个 HTTP 请求。\n"),e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_1536+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/ReST.png",alt:""}})]),t._v(" "),e("p",[t._v("如果您希望获取所有不含乳制品的新到达文件和所有风味的文件，那么您需要发送多个 HTTP GET 请求，这不是最佳方式。\n输入 GraphQL。\n通过只发送一个查询，您将能够获取正确数量的数据，而无需前后反复。\n下面是一个虚构的 GraphQL 查询，可以获取新来者的免费乳制品，所有 falvor 的名字和 id。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("query {\n  newarrivals {\n    dairyfree {\n      allflavors {\n        name\n        id\n      }\n    }\n  }\n}\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_1536+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/GraphQL-1.png",alt:""}}),t._v("\n以下是你将得到的回应:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n\t"data": {\n\t\t"allflavors": {\n\t\t\t"name": "lemonbar",\n\t\t\t"id": "p101"\n\t\t}\n\t}\n}\t\n')])])]),e("p",[t._v("在 JMeter 5.4之前")]),t._v(" "),e("p",[t._v("如您所知，在 JMeter 5.4中，我们获得了一个新的 GraphQL HTTP Sampler 来测试 GraphQL 查询的性能。但是如果没有这个 GraphQL HTTP 采样器，您可以使用 HTTP 采样器发送 GraphQL 请求。\n"),e("img",{attrs:{src:"https://github.com/QAInsights/GraphQL-JMeter-Examples",alt:""}})]),t._v(" "),e("p",[t._v("让我们看看《星球大战》 GraphQL 演示项目。")]),t._v(" "),e("p",[t._v("要使用 HTTP 请求检索字符信息，下面是您应该使用的设置。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('HTTP Method: POST\n\nPOST payload:\n{\n\t"query": "{\\n  hero {\\n    name\\n  }\\n}\\n"\n}\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_734+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-9.png",alt:""}})]),t._v(" "),e("p",[t._v("GraphQL 中有三种操作类型: 查询、变异和订阅。\nJMeter 5.4 深入研究 JMeter 5.4中的 GraphQL\n在 JMeter 5.4中使用 GraphQL 的等效查询是:\n方法: GET\n查询: Query = Query + { + hero + { + name + apparsin + } + }")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_1064+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-10.png",alt:""}})]),t._v(" "),e("p",[t._v("这两种情况下的结果都是:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "data": {\n        "hero": {\n            "name": "R2-D2"\n        }\n    }\n}\n')])])]),e("p",[t._v("在 GraphQL HTTP Request 中，您可以选择输入典型的参数，如 Protocol、 Server Name 或 IP、 Port 等。它继承了 HTTP 请求采样器的属性。您还将获得与 GraphQL 相关的字段，如 operationname、 Query 和 Variables。\n"),e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_1034+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-11.png",alt:""}})]),t._v(" "),e("p",[t._v("在 GraphQL HTTP Request 中，有两个 HTTP 方法: GET 和 POST。\n"),e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_1040+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-12.png",alt:""}})]),t._v(" "),e("p",[t._v("此外，您不能在 GraphQL 中获得 Parameters 和 Body Data，而是可以利用 Query 和 Variables。文件上传选项也在这里无关。\n在“高级”选项卡中，您看不到来自 HTML 文件的嵌入式资源。\n在 GraphQL HTTP 请求中，查询是强制的，变量和操作名称是可选的。\nGraphQL 查询示例")]),t._v(" "),e("p",[t._v("现在让我们看一些 JMeter 5.4中使用星球大战 GraphQL 的例子。您可以按照下面提到的说明来设置项目。\n要启动服务器，您可以遵循以下命令。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://github.com/apollographql/starwars-server\ncd starwars-server\nnpm install\t\n")])])]),e("p",[t._v("如果一切顺利，你就可以启动游乐场 http://localhost:8080/graphql 服务器了\n你会得到《星球大战》的文档和模式。编写查询时，理解模式非常重要。\n烟雾测试，让我们检索一个字符。复制粘贴下面的查询，然后在浏览器中按 CTRL + ENTER 键。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{\n  hero {\n    name\n  }\n}\n")])])]),e("p",[t._v("在右边，您将得到如下所示的输出。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "data": {\n    "hero": {\n      "name": "R2-D2"\n    }\n  }\n}\t\n')])])]),e("p",[t._v("在 JMeter 中，我们通过右键单击 Thread Group > Add > Sampler > GraphQL HTTP Request 来添加 GraphQL HTTP 请求，如下所示。")]),t._v(" "),e("p",[t._v("如下所示，在 GraphQL HTTP Request 中填写详细信息。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_1068+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-17.png",alt:""}})]),t._v(" "),e("p",[t._v("添加一个“查看结果树”监听器，然后点击“运行”。您将得到如下所示的输出。\n"),e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_862+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-18.png",alt:""}}),t._v("\n恭喜! 您已经完成了 JMeter 中的 GraphQL 测试计划设计。\n让我们看一个小小的复杂查询，它检索一个 ID 为2000的 driod 信息。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("query {\n  droid(id: 2000){\n    id\n    name\n    friends{\n      name\n    }\n    appearsIn\n    primaryFunction\n  }\n}\n")])])]),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_868+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-19.png",alt:""}}),t._v("\n现在，让我们使用 GraphQL 中的变量。通过使用变量，您可以跨多个客户机重用它。\n例如，如果要为 Search 查询声明一些动态字符串，可以使用下面的查询。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("query search($keyword: String) {\n  search(text: $keyword) {\n    __typename\n  }\n}\n")])])]),e("p",[t._v("在变量中，粘贴下面的代码。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "keyword": "an"\n}\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_880+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-20.png",alt:""}})]),t._v(" "),e("p",[t._v("输出")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_880+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-20.png",alt:""}})]),t._v(" "),e("p",[t._v("现在，让我们看一个名称操作的例子。如果有多个查询，可以指示 JMeter 告诉您要发送哪个查询。\n在下面的查询中，我们试图获取一个字符和搜索输出，在这里我们分别将它们标记为 heroSearch 和 textSearch。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('query textSearch {\n  search(text: "an") {\n    __typename\n  }\n}\nquery heroSearch {\n  hero {\n    name\n  }\n}\n')])])]),e("p",[t._v("如果您按原样发送此查询而没有指定 operationname，JMeter 将抛出以下错误。\n"),e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_1536+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-21.png",alt:""}}),t._v("\n当有多个查询时，必须指定操作名称。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_1058+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-22.png",alt:""}}),t._v("\n输出\n"),e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_862+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-23.png",alt:""}})]),t._v(" "),e("p",[t._v("到目前为止，我们已经看到了查询的例子。现在，让我们看看关于突变。")]),t._v(" "),e("p",[t._v("如果要更新或更改对象，应该发送“变异”请求。在这个星球大战的例子中，我们将改变评论。\n查询")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {\n  createReview(episode: $ep, review: $review) {\n    stars\n    commentary\n  }\n}\n  "ep": "JEDI",\n  "review": {\n    "stars": 5,\n    "commentary": "This is a great movie!"\n  }\n}\n')])])]),e("p",[e("img",{attrs:{src:"https://cdn.shortpixel.ai/spai/w_916+q_lossy+ret_img+to_webp/https://qainsights.com/wp-content/uploads/2020/12/image-24.png",alt:""}})]),t._v(" "),e("p",[t._v("重要提示: JMeter 还不支持订阅操作。\n在我的 GitHub repo 中还有更多的例子，请检查并奖励一个 STAR。")]),t._v(" "),e("p",[t._v("Pros 优点\nGraphQL HTTP Request is a part of JMeter Core. No need to install it from JMeter Plugins Manager GraphQL HTTP Request 是 JMeter Core 的一部分，不需要从 JMeter 插件管理器安装它\nSupports Query and Mutations 支持查询和突变\nCon 反对\nDoesn’t support Subscriptions yet 还不支持订阅\nFinal Words 临终遗言\nGraphQL in JMeter enables you to test the performance of GraphQL APIs without worrying about formatting the JSON and sniffing the HTTP traffic. But if you are comfortable in using HTTP Sampler, you can use. GraphQL provides a comfort and easy way to maintain the test plan.\nJMeter 中的 GraphQL 使您能够测试 GraphQL api 的性能，而不用担心格式化 JSON 和嗅探 HTTP 流量。但是如果你喜欢使用 HTTP 采样器，你可以使用。GraphQL 为维护测试计划提供了一种舒适和简单的方法。")]),t._v(" "),e("h3",{attrs:{id:"author"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[t._v("#")]),t._v(" author")]),t._v(" "),e("p",[t._v("石头 磊哥 seven 随便叫")]),t._v(" "),e("h3",{attrs:{id:"company"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[t._v("#")]),t._v(" company")]),t._v(" "),e("p",[t._v("thoughtworks（离职了。。。。）")]),t._v(" "),e("p",[t._v("大家好，本人不才，目前依旧混迹于thoughtworks，做着一名看起来像全栈的QA，兴趣爱好前端，目前是thoughtworks 西安QA社区的leader，如果有兴趣分享话题，或者想加入tw，可以找我")]),t._v(" "),e("h3",{attrs:{id:"roles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[t._v("#")]),t._v(" roles")]),t._v(" "),e("p",[t._v("QA（营生） dev（front-end dev 兴趣爱好）")]),t._v(" "),e("h3",{attrs:{id:"联系方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 联系方式")]),t._v(" "),e("p",[t._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),t._v(" "),e("h4",{attrs:{id:"wechat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[t._v("#")]),t._v(" wechat:")]),t._v(" "),e("p",[t._v("qileiwangnan")]),t._v(" "),e("h4",{attrs:{id:"email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[t._v("#")]),t._v(" email:")]),t._v(" "),e("p",[t._v("qileilove@gmail.com")])])}],!1,null,null,null);a.default=r.exports}}]);