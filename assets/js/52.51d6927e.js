(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{265:function(v,_,t){"use strict";t.r(_);var a=t(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"基于风险的测试的个人方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于风险的测试的个人方法","aria-hidden":"true"}},[v._v("#")]),v._v(" 基于风险的测试的个人方法")]),v._v(" "),t("p",[v._v("我开始跟踪组织的平均检测缺陷（MTTD）缺陷，并立即注意到打开的大多数缺陷都是在我们两周的冲刺中被发现的。 有趣的是……我觉得数据有一个更大的故事要讲，所以我稍作研究。 我发现的内容实际上很有趣，但是我相信大多数读者都可以认同这一点：测试人员没有稳定的用户故事和缺陷可以在整个sprint中进行测试。 这是盛宴（冲刺结束时）或饥荒（冲刺开始时）。 当我开始思考如何解决此问题时，我想起了瀑布测试的日子以及如何利用风险来确定首先要测试的内容。 我想知道如何在敏捷组织中使用基于风险的测试。\n基于风险的测试很简单，测试案例的风险越大，我在执行阶段将给予它更高的优先级。 但是，在执行期间对测试进行优先级排序只是我组织要解决的问题的一半。 如果团队直到冲刺结束才进行测试，我们仍然会看到类似的结果。 为了真正看到测试结果的左移（更快地发现缺陷），整个团队需要确定围绕风险的工作优先级。")]),v._v(" "),t("p",[v._v("注意：我们在专门负责测试的团队中设有“测试人员”。 意味着开发人员将完成工作，而测试人员将对其进行测试。 在测试不是角色而是每个人都拥有的职能的团队中，这个概念仍然很重要，因为无论“测试者”是谁，都应尽早确定高风险工作的优先级。")]),v._v(" "),t("p",[v._v("因此，我着手更改上述MTTD指标中注意到的结果。 以下是我关于我们如何实施基于风险的测试和计划的思考过程和历程。\n基于风险的测试与基于风险的计划")]),v._v(" "),t("p",[v._v("在本文中，我将参考基于风险的测试（RBT）和基于风险的计划（RBP）。 为了确保我们都说相同的语言，让我快速定义每种语言。")]),v._v(" "),t("p",[v._v("简而言之，RBP可以解释为在测试时理解并分析用户故事或缺陷发生不良事件的可能性，然后尽可能早地在冲刺中优先考虑该故事。")]),v._v(" "),t("p",[v._v("另一方面，RBT可以解释为理解和分析测试期间发生不良事件的可能性，然后在执行的早期对测试进行优先级排序。 测试用例（或您要执行的任何测试手段）识别出缺陷的可能性越大，则在测试执行中应越早进行。")]),v._v(" "),t("p",[v._v("免责声明：如果您的组织不编写/执行测试用例，则同样可以应用于测试场景，功能映射，思维导图等。战略目标是尽早在Sprint中执行高风险工作。\nRTT和RTP提供什么价值？")]),v._v(" "),t("p",[v._v("我们组织的一个主要目标是尽快为客户提供高质量和有吸引力的产品。 在客户面前展示一些东西，收集反馈并提供产品的增量改进就是“敏捷”的全部意义！ 当我考虑到各个专家要求团队进行“额外”分析时，我意识到整个软件开发生命周期实际上确实存在增值，而不仅仅是工程方面。")]),v._v(" "),t("p",[v._v("在功能级别，识别风险有助于我们的产品管理团队更清楚地了解产品风险，例如“产品发布日期是否处于危险之中？” 如果团队在功能级别上了解风险，则可以提前确定故事的优先级，因此在可能的情况下首先处理高风险故事。 当我们接近功能完成时，这限制了最后一分钟的“陷阱”。")]),v._v(" "),t("p",[v._v("在用户故事级别，了解风险可以帮助团队在冲刺中首先关注高风险故事。 如果工作尽早得到测试，并且发现了问题，那么这些问题推迟产品发布的风险就较小，因为团队可以在相同的冲刺中快速修复它们。 而在sprint的后面发现的那些相同缺陷可能会对产品部署日期造成更高的风险，因为团队可能没有足够的时间来修复它们。")]),v._v(" "),t("p",[v._v("在测试级别，识别风险使测试人员可以在冲刺中更早地执行高风险测试，从而识别缺陷并减少用户故事的反馈回路。 在某些情况下，用户故事不会被确定为团队的高风险，但是测试人员会理解容易出现缺陷的区域，并根据他们的知识将测试用例确定为高风险。 无论哪种方式，这种优先级排序都可以尽快弥补测试中的缺陷。\n"),t("img",{attrs:{src:"https://theqaconnection.files.wordpress.com/2020/07/image-11.png",alt:""}}),v._v("\n风险类型")]),v._v(" "),t("p",[v._v("对我的组织内部风险意味着什么有一个共同的了解，对于确保我们都相应地确定优先级至关重要。 如果您从事银行业，那么您面临的风险可能与我从事在线博彩网站/应用程序的风险完全不同。 风险可以分为两类：产品风险和技术风险。 两者都不比另一个重要，但是，识别和减轻风险可能看起来有些不同。")]),v._v(" "),t("p",[v._v("对我来说，产品风险是指与客户流，可用性或其他与UI相关的事物相关的风险。 这些都是产品及其与客户互动的风险。")]),v._v(" "),t("p",[v._v("顾名思义，技术风险是指性能/安全性，与遗留代码的集成或加密挑战等方面出现的技术问题。 这些风险不一定要在需求中指出，而要在开发计划中确定。\n"),t("img",{attrs:{src:"https://theqaconnection.files.wordpress.com/2020/07/image-12.png",alt:""}}),v._v("\n实施基于风险的计划")]),v._v(" "),t("p",[v._v("如果您在我的博文中到目前为止做的如此，您可能会对我如何与团队一起进行风险分析感到好奇。 我将在下面分享我的旅程。")]),v._v(" "),t("p",[v._v("了解您的功能流程")]),v._v(" "),t("p",[v._v("在向团队介绍风险分析之前，我想先了解功能进入客户手中的整个流程。 这有助于我了解团队中的人员可以增加其对该功能以及相关风险的整体了解的各种接触点。 如上所述，产品风险可能在需求中得到了很好的定义，而技术风险可能是我们的开发负责人在进行功能规划时可能会发现的。")]),v._v(" "),t("p",[v._v("确定可以讨论和考虑风险的地方")]),v._v(" "),t("p",[v._v("在我的下图（用户故事的风险分析）中，您可以看到在我的组织中，我们进行了功能移交会议，架构师，技术团队负责人，QA工程师和产品负责人将详细介绍该功能。 在此会议期间，这些人将对该功能获得产品和技术上的了解。 在我看来，这是团队第一次可以讨论风险，尤其是产品风险。")]),v._v(" "),t("p",[v._v("接下来，整个团队都有机会一起浏览该功能。 在此会议期间，团队将确定该功能的每个用户故事。 我立即将这次会议确定为一个接触点，应考虑并充实产品和技术风险。 在团队确定功能用户故事时，团队还应考虑以下问题以进行风险识别：")]),v._v(" "),t("p",[v._v("这个故事的风险几率是多少")]),v._v(" "),t("p",[v._v("这种风险如何影响客户")]),v._v(" "),t("p",[v._v("到现在，团队将对与每个用户故事相关的风险有扎实且有据可查的了解。 我的最后任务是考虑所有这些数据如何结合在一起，以便我们通过向左推测试来减轻这种风险：这种前期分析如何导致开发人员首先处理高风险故事。\n优先考虑高风险工作")]),v._v(" "),t("p",[v._v("因为那里有数据可以帮助推动计划，所以我们现在可以将风险最高的故事放在迭代开始的优先级。 我承认有时有依赖项约束禁止这样做。 在这些情况下，我们在确定这些依赖关系的同时尽可能地确定了优先级。\n实施基于风险的测试\n"),t("img",{attrs:{src:"https://theqaconnection.files.wordpress.com/2020/07/image-13.png",alt:""}}),v._v("\n我想考虑的下一部分是RBT。 如上所述，基于风险的计划只是成功的一半。 我还需要考虑一下如何让测试人员首先将风险较高的工作放在优先位置。")]),v._v(" "),t("p",[v._v("了解您的测试流程")]),v._v(" "),t("p",[v._v("我很快意识到RBT的起点与RBP相似。 首先，我必须确保我了解我们团队的测试自然流程。 具体来说，测试人员如何确保他们对要执行测试的用户故事或缺陷有深入的了解。 此外，测试人员将如何在测试中实际识别风险？")]),v._v(" "),t("p",[v._v("我得出的结论是信任。 相信我们已经聘请了合适的人员来工作，他们了解我们的应用程序如何工作以及易发风险的领域。 “测试者”不应拥有风险的识别； 应该是团队的努力。 鉴于以上列出的所有步骤，团队互动已融入流程中。\n"),t("img",{attrs:{src:"https://theqaconnection.files.wordpress.com/2020/07/image-14.png",alt:""}}),v._v("\n评估风险")]),v._v(" "),t("p",[v._v("最后，一旦识别出风险，下一步就是评估风险概率。 为此，团队将概述每种测试方案失败的可能性以及该失败对最终用户的影响。")]),v._v(" "),t("p",[v._v("优先考虑高风险工作")]),v._v(" "),t("p",[v._v("一旦测试人员对高风险测试用例有了一个很好的了解，就可以从那里对它们进行优先级排序，这样就可以在我们的测试执行开始时执行了。\n自动化")]),v._v(" "),t("p",[v._v("在考虑风险时，自动化执行是要考虑的另一部分。 特别是回归执行。 评估哪些测试用例或模块/组件容易出现故障或缺陷，并确保您首先执行这些脚本。 一些组织可能会将其自动化执行时间缩短到几分钟，并且优先考虑高风险区域可能不会买很多东西。 但是，对于执行时间在几小时内的应用程序，这绝对可以增强您缩短反馈循环的能力。")]),v._v(" "),t("p",[v._v("结论")]),v._v(" "),t("p",[v._v("几个月前，我向组织提出了上述想法，我们在团队中实施了这些更改。 这是我想与您分享的实施方案的一些重要内容。")]),v._v(" "),t("p",[v._v("充分利用Scrum Masters-SM已成为此过程的重要组成部分。 为了确保他们感到舒适，我概述了他们可以用来向团队挑逗风险的一系列问题。 在人们仍然习惯于评估风险之初，这一点很重要。 如果您也想使用这些问题，我会在这篇文章的底部列出了这些问题。")]),v._v(" "),t("p",[v._v("培训风险–是的，大多数人都将风险理解为一个概念，但是他们知道风险与工作之间的真正联系吗？ 为了确保他们能做到，请对每个人进行有关RBT和RBP以及正确评估风险的培训。")]),v._v(" "),t("p",[v._v("保持迭代–我的组织有多个Scrum团队，每个团队的工作方式略有不同。 这对于改进流程非常有用，因为我们可以不断观察每个团队的工作方式，并从中汲取最大的优势，以供其他团队学习。 推出后，请花几个月的时间，并从所有人那里获得反馈。")]),v._v(" "),t("p",[v._v("风险分析不仅应该在开发方面进行–随着您的团队变得越来越好，您应该注意到您的产品负责人或业务分析师在编写需求时正在考虑风险。 目标是预先减轻风险！\n基于风险的测试问题")]),v._v(" "),t("p",[v._v("我们是否在较低的环境中拥有测试数据来测试功能的所有场景？")]),v._v(" "),t("p",[v._v("以1-5的比例，此功能或故事的可测试性是什么？")]),v._v(" "),t("p",[v._v("1表示可测试性低，5表示可测试性高")]),v._v(" "),t("p",[v._v("如果回答1、2或3：提出问题以进一步挖掘：")]),v._v(" "),t("p",[v._v("为什么故事或功能无法测试？")]),v._v(" "),t("p",[v._v("我们需要什么来使故事或功能可测试？")]),v._v(" "),t("p",[v._v("AC是否可以测试，并且明确吗？")]),v._v(" "),t("p",[v._v("我们是否需要后端流程来促进测试？ 如果是这样，是否确定了后端流程？")]),v._v(" "),t("p",[v._v("我们是否有明确定义的UX设计？ （UX在此阶段是否可用？）")]),v._v(" "),t("p",[v._v("如果回答4或5：")]),v._v(" "),t("p",[v._v("分数为4意味着您拥有所需的东西，但也许您正在测试一项新功能，因此每个细节都不清楚。")]),v._v(" "),t("p",[v._v("得分为5分意味着该功能的测试很可能是根据另一个功能进行建模的。 AC的定义非常明确。")]),v._v(" "),t("p",[v._v("该功能是否可以少量部署？")]),v._v(" "),t("p",[v._v("一次部署所有功能的风险更高。")]),v._v(" "),t("p",[v._v("我们是在接触产品或技术层面的风险吗？")]),v._v(" "),t("p",[v._v("如果是这样，对测试有何影响？")]),v._v(" "),t("p",[v._v("社区：您还要求其他哪些问题来评估风险？")]),v._v(" "),t("h3",{attrs:{id:"author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[v._v("#")]),v._v(" author")]),v._v(" "),t("p",[v._v("石头 磊哥 seven 随便叫")]),v._v(" "),t("h3",{attrs:{id:"company"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[v._v("#")]),v._v(" company")]),v._v(" "),t("p",[v._v("thoughtworks（离职了。。。。）")]),v._v(" "),t("p",[v._v("大家好，本人不才，目前依旧混迹于thoughtworks，做着一名看起来像全栈的QA，兴趣爱好前端，目前是thoughtworks 西安QA社区的leader，如果有兴趣分享话题，或者想加入tw，可以找我")]),v._v(" "),t("h3",{attrs:{id:"roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[v._v("#")]),v._v(" roles")]),v._v(" "),t("p",[v._v("QA（营生） dev（front-end dev 兴趣爱好）")]),v._v(" "),t("h3",{attrs:{id:"联系方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[v._v("#")]),v._v(" 联系方式")]),v._v(" "),t("p",[v._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),v._v(" "),t("h4",{attrs:{id:"wechat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[v._v("#")]),v._v(" wechat:")]),v._v(" "),t("p",[v._v("qileiwangnan")]),v._v(" "),t("h4",{attrs:{id:"email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[v._v("#")]),v._v(" email:")]),v._v(" "),t("p",[v._v("qileilove@gmail.com")])])}],!1,null,null,null);_.default=e.exports}}]);