(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{319:function(v,a,_){"use strict";_.r(a);var t=_(1),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("div",{staticClass:"content"},[_("h2",{attrs:{id:"颠覆自动化测试金字塔"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#颠覆自动化测试金字塔","aria-hidden":"true"}},[v._v("#")]),v._v(" 颠覆自动化测试金字塔")]),v._v(" "),_("p",[v._v("概要:\n一个成长中的公司被指派从头开始开发一个测试自动化程序，改变它的编码实践，并建立一个持续的测试工具链。Martin Ivison详细描述了他们是如何做到的，包括意识到实施传统的测试金字塔行不通-必须将其颠倒过来。他们发现，小即是美，便宜即是好，文化的改变很重要。")]),v._v(" "),_("h2",{attrs:{id:"自动化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自动化","aria-hidden":"true"}},[v._v("#")]),v._v(" 自动化")]),v._v(" "),_("p",[v._v("我在求职面试中听到的故事很普遍，但很有趣：该公司已经从一个单人的地下室运营成长为酿酒厂直接面向消费者销售的市场领导者。 但是，由于每年交易额超过10亿美元，该公司的系统在体系结构，基础结构和代码质量方面一直存在长期困扰。 而且，任何进展都受到一个人手动测试所有内容的瓶颈的限制。")]),v._v(" "),_("p",[v._v("我被要求建立一个功能完善的QA部门，并启动一个测试自动化项目。两年过去了，我们现在可以总结和分享我们的经验。我们发现，小是美，廉价是好，文化变革至关重要。")]),v._v(" "),_("h2",{attrs:{id:"愿景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#愿景","aria-hidden":"true"}},[v._v("#")]),v._v(" 愿景")]),v._v(" "),_("p",[v._v("尽管有一些急需解决的问题，但我们首先花一些时间讨论测试自动化的长期目标，以确保我们朝着正确的方向运行。")]),v._v(" "),_("p",[v._v("作为竞争激烈的公司，我们自然渴望速度，灵活性和可扩展性。 但是更具体地讲，我们需要考虑两个非常不同的因素来进行扩展：技术角度和文化角度。")]),v._v(" "),_("p",[v._v("从技术上讲，我们设想了三层测试自动化（单元，集成和系统测试），并在持续集成和部署流程中嵌入了松散耦合的低成本工具链。")]),v._v(" "),_("p",[v._v("可以说，非技术角度更难：我们需要引入一种文化，即开发人员测试他们自己的代码，以及产品所有者投入时间来构建框架。 我们还需要一个质量保证团队，该团队可以在工作敏捷的团队中促进和推动端到端的质量流程，同时能够编写代码并构建其他工具。")]),v._v(" "),_("p",[v._v("非技术角度可能更困难:我们需要引入一种文化，让开发人员测试他们自己的代码，让产品所有者投入时间构建框架。我们还需要一个QA团队，它能够在工作的敏捷团队中培养和推动端到端质量流程，同时能够编写代码并构建其他工具。")]),v._v(" "),_("p",[v._v("我们不希望做的是消除手动测试。 取而代之的是，我们将把测试的注意力集中在高价值的活动上，例如评估原型和通过复杂的场景进行测试，当然，还可以让测试人员自由地进行自动化。")]),v._v(" "),_("p",[v._v("从零开始，我们了解到我们将要做的是多年的旅程。")]),v._v(" "),_("h2",{attrs:{id:"从零开始"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从零开始","aria-hidden":"true"}},[v._v("#")]),v._v(" 从零开始")]),v._v(" "),_("p",[v._v("最初的情况令人沮丧。 该系统的大多数基于大约150万行旧式ColdFusion代码，而没有任何单元或集成测试。 代码更改是在本地计算机上手动进行系统测试的，然后合并到母版中，并且每晚进行部署直接用于生产，而无需进一步测试。 通过ping和一些针对Web服务的简单脚本测试来监视生产运行状况。 而且，尽管团队已经开始涉足更现代的框架（包括Rails，Angular，Node和Serverless），但使用框架本地测试功能仍处于起步阶段。")]),v._v(" "),_("p",[v._v("考虑这些选择后，很明显，我们将不得不降低或颠倒测试金字塔。")]),v._v(" "),_("p",[v._v("虽然通常使用代码自底向上构建测试功能（编写单元测试，然后集成和编写集成测试，然后进一步集成并编写系统测试），但我们正在使用现有的无测试系统。 为了逐步降低风险，我们必须从最重要的系统更改开始，从系统级别的顶层开始，然后在较低的层级回填。")]),v._v(" "),_("p",[v._v("在我们的案例中，主要风险是由生产平台的夜间测试部署造成的。 由于我们无法将测试嵌入到旧代码中，因此我们必须创建一个独立的测试应用程序，以监视整个系统的重要功能。")]),v._v(" "),_("p",[v._v("最低可行产品（MVP）套件涵盖了我们主要的创收业务流程和应用程序（订单，购物车，销售点和俱乐部处理）。 它基于Selenium并用Ruby编写，利用SitePrism进行页面对象管理和Capybara 。 测试在BrowserStack上运行，并计划在部署后以及Jenkins每天的不同时间运行。")]),v._v(" "),_("p",[v._v("第一道防线在三周内投入生产，我们达到了预期的覆盖范围，以在三个月后将我们的业务风险降至最低，即大约需要200个小时的努力。")]),v._v(" "),_("p",[v._v("获得牵引力：API\n我们的下一个目标是开始测试API。 在此级别上进行测试将更强大，并且可以使我们以更低的测试维护需求来扩展我们的覆盖范围。")]),v._v(" "),_("p",[v._v("幸运的是，我们的系统中有很大一部分都与基本的HTTP调用进行通信或响应。 使用Postman ，我们发现我们几乎可以完全模拟许多核心应用程序的业务流程。 使用JavaScript，我们为测试编写了脚本，以创建自己的数据并可以在任何环境中灵活地工作。 我们始终将目光放在生产上，因此我们使用Postman Monitors来运行连续计划的生产测试，该测试与我们的DevOps工具（ VictorOps ， Github ， Jira和Slack ）无缝集成。")]),v._v(" "),_("p",[v._v("此举还有其他好处。 一方面，我们能够使用Postman的HTTP调用流程为我们的应用程序快速建模和构建JMeter负载测试，可用于按需从BlazeMeter进行测试。 为了减少额外的工作，我们创建了性能测试功能的开始。")]),v._v(" "),_("p",[v._v("其次，随着我们对新的QA人员的培训和招聘，Postman中JS的低门槛使得它成为我们测试人员学习如何编写自动化代码的完美入口技术。它还很快在QA和开发人员之间建立了一种通用语言。我们都理解集成层，并一起工作来实现自动化。这也促进了关于我们缺少单元测试的讨论，并鼓励开发人员采取行动来重构复杂的代码并提高代码质量。")]),v._v(" "),_("p",[v._v("第三，我们为未来的持续集成和交付（CI / CD）过程打开了战略可能性。 Postman（通过其CLI工具 Newman ）和我们的Ruby Selenium测试都可以在持续交付工具(如CircleCI或AWS CodePipeline)上运行，同时运行我们的单元测试。")]),v._v(" "),_("p",[v._v("这个里程碑标志着一年的结束，在这期间，我们看到报告的生产bug持续减少。此时的固定成本是QA中增加的两名员工的支出，而在工装方面的支出可以忽略不计。")]),v._v(" "),_("h2",{attrs:{id:"第二年：e2e链"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二年：e2e链","aria-hidden":"true"}},[v._v("#")]),v._v(" 第二年：E2E链")]),v._v(" "),_("p",[v._v("第二年我们解决了最大的障碍:平台代码单体。 因为该平台实际上是将具有不同需求的许多应用程序集成到一个大堆栈中，所以部署它是一个复杂的过程，无法即时完成。 为了解决这个问题，我们启动了两项计划：通过新的API层将前端与共享后端分离； 并推动使用Docker容器化组件，将其与CircleCI集成，并通过Amazon EKS流畅地部署它们。")]),v._v(" "),_("p",[v._v("对于新的API层，我们重构了代码以清晰地分离前端和后端。这样做的直接好处是，我们现在可以使用现有的API工具对其进行测试，并迅速扩大我们的覆盖率。我们还可以插入新的测试工具和方法。通过添加linting (Codacy)和单元测试框架(Testbox for ColdFusion)，以及对每个代码更改强制进行单元测试，重构变得更加安全。")]),v._v(" "),_("p",[v._v("同时，前端在Angular上进行了重构 。 这意味着我们现在可以将嵌入式测试框架用于单元测试和集成测试（ Mocha ， Chai和Protractor ）。 在这里，我们进一步利用了那些最重要的文化优势：基于我们在postman中的JS经验，QA团队能够轻松地拥有这些测试并编写脚本。")]),v._v(" "),_("p",[v._v("经过两年的努力，来自生产的bug信号已经下降到边缘水平，没有任何额外的固定成本。另一方面，将我们所有的应用程序开放到CI/CD，使我们能够重新考虑测试环境，并为第三年的完全连续测试打开了大门。")]),v._v(" "),_("p",[v._v("我们的愿景是使用我们不断增长的应用程序容器集合来开始为自动化测试构建定制的环境。然后部署工具链可以引导所有的变更，这样变更的影响范围和相关的风险就决定了测试的范围和广度。我们的想法是，我们的三层测试覆盖现在允许我们将简单的变更直接推进到生产环境中，而风险较大的变更将转移到准备环境中进行更深入的手工测试和我们新开发的负载测试。")]),v._v(" "),_("h2",{attrs:{id:"建立倒金字塔"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建立倒金字塔","aria-hidden":"true"}},[v._v("#")]),v._v(" 建立倒金字塔")]),v._v(" "),_("p",[v._v("最后，我们可以回顾一下我们作为一个团队在构建这个倒金字塔过程中学到的一些重要的东西。")]),v._v(" "),_("p",[v._v("因为我们没有机会以正确的方式把它建立起来，我们不得不从顶端开始，并希望下面的构建块将会随着我们开车向下移动以适应新的过程。如果没有团队的支持和持续的学习，这几乎是不可能的，这使得这种变化的文化方面非常重要。我们通过在集成层中为开发人员和QA人员创建一个公共的平台，并使用JavaScript使用一种公共语言来实现这一点。这有助于向两个方向辐射思维和实践，并且是开发一个持续测试过程的必要部分。")]),v._v(" "),_("p",[v._v("此外，在任何项目中，对风险、价值和维护成本保持敏锐的眼光都是有帮助的。对于系统级测试，我们首先用一个相对较小的套件(少于20个场景)来保护生产中的赚钱流，然后就停止了，因为GUI测试是出了名的脆弱和维护成本高昂。稍后，在构建API层、添加框架和重构代码时，我们填充了更健壮的底层测试。")]),v._v(" "),_("p",[v._v("最后，我们发现在容易集成工具的时代，降低成本是完全可行的策略。我们将低成本的工具串成松散耦合的链，在这些链中，各个部分被增量地添加到一个不断增长的功能映射中，而不是预先寻找单一的提交解决方案。我们的大多数工具都是开源的，其余的是基于云的服务，当竞争对手提供更划算的解决方案时，这些服务很容易被淘汰。")]),v._v(" "),_("p",[v._v("与所有的测试工作一样，不存在放之四海而皆准的解决方案。从团队中获得支持是至关重要的，因为当每个人都理解并支持整体目标时，他们将找出实现目标的最佳方法——即使这意味着将传统实践颠倒过来。")]),v._v(" "),_("p",[v._v("我的个人主页：qaseven.cn")]),v._v(" "),_("p",[v._v("** qileilove@gmail.com **\n我的微信: 15619208923")])])}],!1,null,null,null);a.default=e.exports}}]);