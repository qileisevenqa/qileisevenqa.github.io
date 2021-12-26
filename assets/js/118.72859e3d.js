(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{331:function(v,_,n){"use strict";n.r(_);var e=n(1),p=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"content"},[n("p",[v._v("https://www.developsense.com/blog/2019/01/breaking-the-test-case-addiction-part-1/\n翻译： James Marcus Bach是软件测试人员、作家、培训师和顾问。他是探索性测试和上下文驱动的软件测试学派的支持者，并被认为开发了基于会话的测试")]),v._v(" "),n("p",[v._v("title: 打破测试用例的成瘾（第2部分）\n上次外出时，我正在与一个培训客户沟通，一位正在致力于确定测试用例测试人员。 在这里，我称她为弗里达。 她还有更多关于如何回应经理的问题。")]),v._v(" "),n("p",[v._v("如果您不在家时他们希望另一个测试人员进行测试该怎么办？")]),v._v(" "),n("p",[v._v("我问：“您的测试”还是“您的测试工作”？")]),v._v(" "),n("p",[v._v("据我所知，你的测试。弗里达说:“我不同意这种看法，但是我试图从他们的角度来看问题。")]),v._v(" "),n("p",[v._v("我想知道如果我们问他们“如果你想让另一个经理来做你的管理，而你又没有时间，会发生什么?”或者“如果您想让另一个程序员来做编程，而这个程序员又不在，会发生什么?”“在我看来，他们最不可能提出的建议就是一套管理案例或编程案例。那么为什么要执着于测试用例呢?")]),v._v(" "),n("p",[v._v("我不确定。我担心大多数时候，对测试用例的关注仅仅是由于无知。许多人实际上不知道其他任何思考测试的方法，并且从来没有尝试过。令人担忧的是，这似乎不仅适用于领导者，也适用于测试者。许多测试业务似乎是在神话、民间传说和惯性上蹒跚而行。")]),v._v(" "),n("p",[v._v("固执是过度的，强迫性的专注于某件事而不顾其他。对测试用例的关注转移了人们对其他重要事情的注意力:理解测试如何映射到任务;测试人员是否有足够的技能来理解和执行测试;学习来自于测试，然后反馈给更多的测试; 正规化是否为时过早甚至是必要的……")]),v._v(" "),n("p",[v._v("正如我上次所建议的，一个大问题是管理人员对测试用例的替代方案缺乏意识。缺乏意识会导致缺乏想象力，更糟糕的是，许多测试人员都遇到相同的问题，因此无助于打破循环。 经理为什么要不断要求测试用例?  因为测试人员一直在提供它们。 测试人员为什么继续提供它们？ 因为管理人员不断要求他们，因为测试人员不断提供他们……，而且这个周期还在继续。")]),v._v(" "),n("p",[v._v("这个循环还在继续，因为测试用例有一个吸引人的，甚至是诱人的方面:它们可以使测试看起来清晰。正如文卡泰什•拉奥(Venkatesh Rao)在这里优美地表述的那样，易读性“平息了由明显的混乱引发的焦虑”。")]),v._v(" "),n("p",[v._v("测试用例有助于将开发和测试的混乱、复杂、易变的环境变得清晰、可读、可理解和可量化。 测试用例要么失败（问题！），要么通过（没问题！）。测试用例使测试人员的行为看起来是可预测和清晰的，清晰到甚至可以用机器代替测试人员。在项目开始时，我们开发了782个测试用例。当我们完成了其中的527个，测试就完成了67.39% ！")]),v._v(" "),n("p",[v._v("许多人认为测试是死板的，逐步的，重复的，机械的按键操作，以证明产品可以工作。 我们所处的领域强调了这一点：一个重视程序编写的领域。如果你认为键盘操作就是它的全部功能，那么编写供人跟随的程序来控制测试是有一定意义的。")]),v._v(" "),n("p",[v._v("这些程序成为“您的测试”。我们将这些称为“您的检查”——其中检查是将决策规则应用于软件观察的机械过程。")]),v._v(" "),n("p",[v._v("另一方面，如果您愿意承认并接受测试是对产品、问题和风险的复杂的、认知的调查，那么您的测试就是另外一种表现。没有人能像你一样做这件事。没人能再做你以前做过的事。你自己永远不会以同样的方式做两次。如果经理想让人们在你不在的时候做“你的测试”，那么把它想成“对你一直在调查的事情进行调查”可能更实际、更有力。")]),v._v(" "),n("p",[v._v("调查是有组织的，可以被引导，但是好的调查是不能照本宣科的。这是因为在真正的调查过程中，你无法确定你将会发现什么，以及你将如何应对。检查可以通过算法实现; 围绕并包含检查的测试无法进行。")]),v._v(" "),n("p",[v._v("可以通过替代测试用例的许多因素来影响或指导调查：")]),v._v(" "),n("p",[v._v("清单\n覆盖范围\n数据表\n思维导图\n风险清单\n活动启发法\n用户故事和叙述\n现有的测试笔记或会话表\n自动检查的源代码\n会议章程\n情景剧本\n先前的测试报告\n来自现场的错误报告")]),v._v(" "),n("p",[v._v("上一次，我提到了几乎所有这些，因为测试人员可以在了解产品或功能时进行开发。 这不是巧合。 测试发生在学习，分析，探索，实验，发现和调查的纠结循环和螺旋状中，彼此相互反馈。 随着测试的进行，这些工件以及（更重要的是）它们代表的学习可以得到进一步发展，扩展，提炼，过度生产，搁置，废弃，回收，重新研究……")]),v._v(" "),n("p",[v._v("测试人员可以将这类工件用作已完成测试，已发现问题以及已发生的学习的证据。 测试人员也可以在测试报告中包含这些工件。")]),v._v(" "),n("p",[v._v("但是，如果您所处的环境必须为审计师或监管机构提供测试用例，那该怎么办？")]),v._v(" "),n("p",[v._v("好问题。 我们下次再谈。")]),v._v(" "),n("p",[v._v("我的个人主页：qaseven.cn")]),v._v(" "),n("p",[v._v("** qileilove@gmail.com **\n我的微信: 15619208923")])])}],!1,null,null,null);_.default=p.exports}}]);