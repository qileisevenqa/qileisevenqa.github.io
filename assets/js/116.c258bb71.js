(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{329:function(v,_,t){"use strict";t.r(_);var a=t(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"适用于可扩展测试自动化框架的简洁编码实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#适用于可扩展测试自动化框架的简洁编码实践","aria-hidden":"true"}},[v._v("#")]),v._v(" 适用于可扩展测试自动化框架的简洁编码实践")]),v._v(" "),t("p",[v._v("概要:")]),v._v(" "),t("pre",[t("code",[v._v("许多组织都希望通过设计和开发测试自动化框架来扩展他们的自动化能力。然而，我们经常放弃良好的编码实践，而倾向于尽可能快地工作。我们需要像对待其他应用程序开发项目一样对待这个项目。为了构建可伸缩的测试自动化框架，需要记住以下三个最重要的干净编码实践。\n")])]),v._v(" "),t("p",[v._v("作为测试或SDET软件开发工程师，我可以参与软件及其测试的开发。 看到当今有多少软件组织将测试自动化作为他们的敏捷和DevOps旅程的一部分，这让我感到非常着迷和激动。")]),v._v(" "),t("p",[v._v("正如我所看到的，自动化测试不再只是一种探索的选择，而是必不可少的。 而且这种趋势将继续上升。 在产品生命周期中进行自动化的早期测试并经常进行自动化测试，不仅有助于我们更快地发现错误，而且在很大程度上节省了时间和成本。 因此，组织期望其SDET或测试自动化架构师设计和开发健壮，可维护的智能测试自动化框架。")]),v._v(" "),t("p",[v._v("但是，由于缺乏远见，许多自动化测试计划都失败了。 SDET需要自问，我正在开发的测试自动化框架是否可重用，可维护，可配置，可理解和可扩展？")]),v._v(" "),t("p",[v._v("通常，无论何时要求我们从头开始实施框架或适应现有框架中的新要求（有时在很短的时间范围内），为了快速实施更改，我们都会忘记考虑最佳方案编码惯例或最简洁的编码方法。 我们会在没有任何适当文档的情况下尽快进行更改。")]),v._v(" "),t("p",[v._v("结果，更改被合并到主分支，随着框架的增长，这在其他团队成员中也成为一种常见的实践。当需要扩展自动化框架以覆盖更多的项目，需要添加更多的功能，或者从框架中使用的工具迁移到新工具时，它将成为整个团队的巨额技术债务。这导致团队不得不花费更多的时间来理解和调试代码，并由于糟糕的设计和持久的反模式而进行更多的返工。")]),v._v(" "),t("p",[v._v("在开发自动化框架时，我们需要像对待其他任何应用程序开发项目一样对待它，并将其代码编写为生产代码。")]),v._v(" "),t("p",[v._v("为了构建一个可伸缩的测试自动化框架，我们需要记住这三个最重要的干净的编码实践。")]),v._v(" "),t("h2",{attrs:{id:"包括适当的文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包括适当的文档","aria-hidden":"true"}},[v._v("#")]),v._v(" 包括适当的文档")]),v._v(" "),t("p",[v._v("在测试自动化框架开发项目中工作的程序员不太可能独自编写代码。在一个由多人添加和更新自动化代码的环境中，包括适当的文档不仅可以帮助您组织自己的代码，还可以帮助您的同事理解您的代码实际上想要表达的内容。稍后，如果您离开团队，或者有人想要使用您的代码添加功能，那么他们可以很容易地调试、更新、执行单元测试和分析结果。")]),v._v(" "),t("p",[v._v("在我之前的一个项目中，我的同事收到了一个要求，要求将一个新的测试管理工具集成到一个已经有另一个测试管理工具的测试自动化框架中。尽管新实现简单而直接，但他花了大量时间来调试和理解如何将现有工具集成到框架中，这都是因为缺少注释、文档和一致的命名约定。")]),v._v(" "),t("h2",{attrs:{id:"避免代码重复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#避免代码重复","aria-hidden":"true"}},[v._v("#")]),v._v(" 避免代码重复")]),v._v(" "),t("p",[v._v("假设一个项目团队要求您使用您的框架添加一个新功能，该功能将允许他们测试web服务并生成报告。在web服务编码部分完成之后，现在您正在考虑编写代码来生成报告。但在此之前，您是否考虑过框架当前的报告功能将能够处理此需求的可能性?如果没有，那么您就设置了代码复制的情况。")]),v._v(" "),t("p",[v._v("随着框架的增长，不必要的代码重复将导致更多的返工，维护成本将开始增加。在一个地方修复报告生成代码中的错误要比遍历整个框架、调试和修改代码要容易得多。")]),v._v(" "),t("h2",{attrs:{id:"保持代码简单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保持代码简单","aria-hidden":"true"}},[v._v("#")]),v._v(" 保持代码简单")]),v._v(" "),t("p",[v._v("编码时，尽量不要使事情复杂化。 使其尽可能简单（易读）！")]),v._v(" "),t("p",[v._v("我已经观察到，许多经验丰富的新手都喜欢在类或函数级别添加代码。 如果您要在功能级别上编写三百行代码，那么您可能正在穿越危险区域，在该区域中，代码的易懂性和质量开始崩溃。 同样，如果您的类由三十个方法组成，则可能不是出于单一目的，而是需要细分为较小的类，并且，如果需要，这些类需要分组在不同的程序包中。")]),v._v(" "),t("p",[v._v("我注意到许多程序员，无论是有经验的还是新手，都不断地在类或函数级别上添加代码，，而没有完全理解类或函数最初应该传达的信息。如果您在功能级别上编写了300行代码，那么您可能正在穿越危险区域，在该区域中，代码的易懂性和质量开始崩溃。 同样，如果您的类由三十个方法组成，则可能不是出于单一目的，而是需要细分为较小的类，并且，如果需要，这些类需要分组在不同的程序包中。")]),v._v(" "),t("p",[v._v("您的代码应严格遵守“ 单一职责原则” ，该 原则 规定，每个模块，功能或类都应对软件功能的单个部分负责。 稍后，如果您有测试特定功能的新要求，则将预先了解将受到影响的程序包，类，模块和功能。")]),v._v(" "),t("p",[v._v("当我成长为热爱自动化的SDET时，我意识到，当您在框架团队中工作时，不仅要取用不同团队的需求并使它们工作。 我们还需要从一开始就考虑干净的编码原则。")]),v._v(" "),t("p",[v._v("最好检查彼此的代码，并确保在批准和合并代码之前遵循了最佳编程实践。 这样，我们将为可扩展和可维护的健壮框架奠定基础。")]),v._v(" "),t("p",[v._v("我的个人主页：qaseven.cn")]),v._v(" "),t("p",[v._v("** qileilove@gmail.com **\n我的微信: 15619208923 期待认识更多的朋友")])])}],!1,null,null,null);_.default=e.exports}}]);