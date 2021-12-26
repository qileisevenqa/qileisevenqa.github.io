(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{268:function(v,_,t){"use strict";t.r(_);var a=t(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"如何处理第三方集成的自动化测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何处理第三方集成的自动化测试","aria-hidden":"true"}},[v._v("#")]),v._v(" 如何处理第三方集成的自动化测试")]),v._v(" "),t("p",[v._v("如何处理第三方集成的自动化测试\n为第三方服务编写自动化测试可能会非常痛苦。 这里有一些策略可以使您和您的团队更轻松一些。\n如今，在大多数软件应用程序中，您可能会发现它与各种外部服务集成在一起。 您将很难找到一个没有连接到另一个系统进行支付处理，分析，社交媒体集成等功能的应用程序。 利用其他人的服务来增强应用程序的能力可以帮助您更快，更轻松地建立愿景。")]),v._v(" "),t("p",[v._v("现在是构建软件开发人员的绝佳时机，因为您不必从头开始做所有事情。 除了项目的独特业务价值之外，您还可以找到合适的服务来完成您需要的事情，并且只需很少的工作即可插入。 不幸的是，测试人员没有那么容易。")]),v._v(" "),t("p",[v._v("应用程序的每个添加部分都提供了另​​一个故障点，甚至使最稳定的测试环境也变得复杂。 通常，您将无法对这些系统进行任何超出其界面允许范围的控制。 这种局限性使您对最终的情况了解最少。 充其量，您将拥有一些状态代码和一些数据子集，它们可能会或可能不会为您提供完整的故事。\n涉及第三方集成的自动化测试可能会成为噩梦。 如果您自动化了涉及这些集成的任何事情，那么当事情无法按预期进行时，您很可能会遇到问题。 这些服务为消费者提供的信息很少，您可能会花费大量时间挠头，想知道出了什么问题。")]),v._v(" "),t("p",[v._v("与自动化和第三方服务打交道时，并不是所有的东西都会丢失。 您可以使用一些适合您项目需求和目标的策略来解决这些问题和局限性。\n两种通过第三方集成处理自动化测试的策略")]),v._v(" "),t("p",[v._v("对于涉及外部服务的任何自动化测试，通常可以归结为两种不同的策略：")]),v._v(" "),t("p",[v._v("living test，您可以在测试过程中使用任何集成，就像在通常的实际使用情况下一样。")]),v._v(" "),t("p",[v._v("mock，您可以在其中拦截和模拟这些集成通常提供的任何响应。")]),v._v(" "),t("p",[v._v("这些策略不是唯一可以使用的策略，但是它们是您在测试自动化项目中会遇到的最常见的策略。 每种方法都有其优缺点，包括何时最好使用一种方法。 以下是有关每种策略的优势以及可能阻碍您进步的一些信息。\nliving test")]),v._v(" "),t("p",[v._v("当您创建访问应用程序集成的自动化测试（例如端到端测试）时，通过典型的用户流程将使您的测试受益。 您的自动化程序会检查您的系统是否可以与应用程序正常运行所依赖的任何其他服务一起正常工作。 如果您的应用程序在没有集成的情况下无法正常工作且没有后备功能，则这一点尤其重要。")]),v._v(" "),t("p",[v._v("使用实时测试的主要缺点是这些集成的可靠性。 不幸的是，没有第三方服务能够保证100％的正常运行时间和可靠性，尤其是那些涉及基础架构之外的服务的第三方服务。 系统与系统之间可能会出现许多问题，除了重新运行测试之外，您将无能为力。 这是端到端测试往往会偶尔失败的主要原因之一。")]),v._v(" "),t("p",[v._v("实时测试还会显着降低测试速度，因为它们将不得不发出请求并等待响应。 如今在大多数应用程序中，这涉及通过API发出HTTP请求。 即使有了快速的网络连接，您也必须处理延迟。 您进行的服务调用次数可能会增加测试执行时间。\nmock")]),v._v(" "),t("p",[v._v("模拟通过产生您的测试用例所需的快速，可靠的响应来解决大多数实时测试的缺点。 为外部服务设置模拟响应时，您的测试会绕过该交互，并返回一个预定的响应，您的测试可以像访问该服务一样使用该响应。 模拟程序很快，并且总是返回相同的结果，因此您不必担心间歇性的网络问题或第三方服务问题。")]),v._v(" "),t("p",[v._v("但是，如果使用不正确，模拟可能会导致值得信赖的测试套件。 由于您的模拟程序避免访问外部服务，因此您的测试不会知道集成是否有所更改。 这种意识的缺乏会导致误报。 您的测试通过了，但实际上，您的应用程序在正常情况下会停止运行。")]),v._v(" "),t("p",[v._v("假设您有一个集成，希望返回一个带有名为“数据”的键的JSON对象。 您可以在测试中创建模拟的响应，该响应始终为对象返回相同的结构。 但是，如果第三方服务更改了响应，则该响应将不再包含“数据”键，并且您的自动化操作将不知道该键。 您的自动化测试将继续通过该模拟，但您的应用程序将在实际使用中爆炸。\n您应该使用哪种策略？")]),v._v(" "),t("p",[v._v("只要您知道并准备处理每个人都遇到的问题，这两种策略就可以很好地发挥作用。 但是，理想的方法是在工作流程中同时使用两者。 根据您现有的项目和基础架构，您可以通过几种方法进行设置。")]),v._v(" "),t("p",[v._v("同时使用实时测试和模拟策略的一种标准解决方案是允许您的自动化测试在任何给定时间之间进行切换。 例如，您可以添加一个命令行标志，以在执行时激活或停用测试中的任何模拟，或者您可以使用内置了此功能的模拟库。 这项技术需要一些预先设置，但是一旦实施，任何人都可以使用他们需要的任何策略。")]),v._v(" "),t("p",[v._v("一些团队使用另一种进行不同组测试的方法-一些进行实时测试，一些进行模拟-并且在开发和测试工作流的其他点运行它们。 例如，当一个自动测试套件在工作日对代码存储库进行新提交之后运行时，我与一个团队一起使用模拟进行了测试，以保持反馈循环的速度。 到了晚上，他们有一个计划的工作，针对实时集成运行测试套件。 他们还在sprint的测试周期结束时使用了实时测试策略。")]),v._v(" "),t("p",[v._v("同时使用实时测试和模拟可将您的项目设置为覆盖彼此的弱点，同时使您能够利用彼此的长处。 这是两全其美。\n您的优先事项比策略更重要")]),v._v(" "),t("p",[v._v("无论选择哪种策略或如何在工作流程中进行设置，请始终牢记在项目中进行测试的优先级。 不要选择一个，因为它听起来更好，或者给两者均等的时间。 了解测试您的应用程序并根据需要调整策略的更重要的事情。")]),v._v(" "),t("p",[v._v("假设您注意到应用程序中相当数量的错误是由第三方集成引起的问题引起的-意外数据被返回，响应缓慢且不稳定，依此类推。 在这种情况下，您应该更多地关注实时测试。 此策略可以帮助您解决这些问题，并修复不可避免的情况下，受测应用程序如何处理这些情况。")]),v._v(" "),t("p",[v._v("另一方面，如果您的第三方集成是可靠的，但是您的应用程序在处理来自这些服务的响应时经常遇到问题，那么您不需要经常直接针对集成执行测试。 您可能可以在非高峰时间进行最少的实时测试，并在更改引入应用程序时使用模拟程序来捕获错误。")]),v._v(" "),t("p",[v._v("考虑一下您要通过自动化测试和第三方集成解决的问题。 质量检查发现哪些错误最多？ 应用程序的用户在哪里报告问题？ 跟踪这些信息和发现模式将帮助您更好地制定自动化策略。")]),v._v(" "),t("p",[v._v("概要")]),v._v(" "),t("p",[v._v("在为您的应用程序插入任何数量的服务的当今时代，确保这些集成的部分和谐地协同工作变得越来越具有挑战性。 作为测试人员，围绕这些服务进行稳定的自动化测试几乎是不可能的。")]),v._v(" "),t("p",[v._v("您有不同的策略来构建涉及第三方集成的测试，但它们通常可以归结为两种：测试实际的集成或模拟服务的响应。 每种策略都有其优势，但在测试套件中使用它们时也要记住一些缺点。")]),v._v(" "),t("p",[v._v("使用第三方集成进行实时测试将使它们在现实世界中正常工作。 不幸的是，它们可能很慢且易碎。 模拟这些集成可通过避开集成并保持测试快速稳定来纠正问题。 但是，这可能导致误报，因为您的测试不会知道另一边是否有任何变化。")]),v._v(" "),t("p",[v._v("理想情况下，您将根据需要将这两种策略结合使用。 您可以设置一个环境，使测试人员可以在运行测试套件时轻松地在实时测试和模拟之间切换。 能够在适当的时候选择其中一种策略，使您可以充分利用彼此提供的优势，同时最大程度地减少其劣势。")]),v._v(" "),t("p",[v._v("但是，请不要对任何一种策略一视同仁。 决定如何设置流程的方法取决于团队的要求和项目。 如果您的集成行为方式是错误的主要来源，请关注实时测试。 如果您的应用程序对这些服务响应的处理经常失败，则可以最大程度地减少实时测试，并更频繁地使用模拟。")]),v._v(" "),t("p",[v._v("选择最有效的解决方案将确保您的自动化继续平稳运行，即使您不得不处理其他无法控制的系统也是如此。")]),v._v(" "),t("p",[v._v("您和您的团队采用什么方法来测试与其他服务集成的应用程序？ 在下面的评论部分与他人分享您的策略！")]),v._v(" "),t("h3",{attrs:{id:"author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[v._v("#")]),v._v(" author")]),v._v(" "),t("p",[v._v("石头 磊哥 seven 随便叫")]),v._v(" "),t("h3",{attrs:{id:"company"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[v._v("#")]),v._v(" company")]),v._v(" "),t("p",[v._v("thoughtworks（离职了。。。。）")]),v._v(" "),t("p",[v._v("大家好，本人不才，目前依旧混迹于thoughtworks，做着一名看起来像全栈的QA，兴趣爱好前端，目前是thoughtworks 西安QA社区的leader，如果有兴趣分享话题，或者想加入tw，可以找我")]),v._v(" "),t("h3",{attrs:{id:"roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[v._v("#")]),v._v(" roles")]),v._v(" "),t("p",[v._v("QA（营生） dev（front-end dev 兴趣爱好）")]),v._v(" "),t("h3",{attrs:{id:"联系方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[v._v("#")]),v._v(" 联系方式")]),v._v(" "),t("p",[v._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),v._v(" "),t("h4",{attrs:{id:"wechat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[v._v("#")]),v._v(" wechat:")]),v._v(" "),t("p",[v._v("qileiwangnan")]),v._v(" "),t("h4",{attrs:{id:"email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[v._v("#")]),v._v(" email:")]),v._v(" "),t("p",[v._v("qileilove@gmail.com")])])}],!1,null,null,null);_.default=e.exports}}]);