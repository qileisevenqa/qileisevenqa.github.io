(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{307:function(v,_,t){"use strict";t.r(_);var a=t(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("p",[v._v("软件测试的世界在过去的十年中已经取得了显著的进步。每隔几个月，就会出现一些新的工具或流程来让它变得更好。但是，当应用程序跨越分布式系统(如微服务体系结构)时，如何有效和充分地测试应用程序仍然是一个挑战")]),v._v(" "),t("p",[v._v("本文讨论面向微服务体系结构的软件测试的设计原则和最佳实践。")]),v._v(" "),t("h2",{attrs:{id:"理解微服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解微服务","aria-hidden":"true"}},[v._v("#")]),v._v(" 理解微服务")]),v._v(" "),t("p",[v._v("架构很重要，因为它影响产品的质量。最值得注意的是，它影响软件交付速度、可维护性、可扩展性和可测试性。")]),v._v(" "),t("p",[v._v("Chris Richardson 在他的书《 Microservices Patterns 》中提到了定义微服务架构的三个方面，这本书的灵感来自 Martin Abbott 和 Michael Fisher 的三维可扩展模型——比例立方体。它提出了三种方法来扩展应用程序:")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog.testproject.io/wp-content/uploads/2021/09/Screen-Shot-2021-09-12-at-11.22.43-AM.png",alt:""}})]),v._v(" "),t("p",[v._v("X 轴可伸缩性或水平伸缩性 ---在负载均衡器后运行应用程序的多个相同实例\nY 轴可扩展性或功能分解 --- 将整体式应用分解为具有有限上下文的细粒度、松散耦合的元素\nZ 轴可伸缩性或数据分区 ---  伸缩应用程序，基于数据分区，其中每个实例负责一个数据子集")]),v._v(" "),t("p",[v._v("驱动微服务体系结构的关键因素是模块性和可伸缩性。随着微服务数量的增加、异步消息传递、缓存等的引入，架构的复杂性也在增加。")]),v._v(" "),t("p",[v._v("测试应用程序的最初重点主要是以交付为中心(正确地将应用程序转移到生产环境) ，然而，一旦应用程序启动，开发和生产相关活动之间的区别就变得模糊了。")]),v._v(" "),t("h2",{attrs:{id:"这很有挑战性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#这很有挑战性","aria-hidden":"true"}},[v._v("#")]),v._v(" 这很有挑战性")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog.testproject.io/wp-content/uploads/2021/09/Screen-Shot-2021-09-12-at-11.06.37-AM-1536x805.png",alt:""}})]),v._v(" "),t("p",[v._v("对更快的软件交付的日益关注已经将整体发展为微型服务。软件测试和可观察性也越来越受到重视，这提倡更多的测试自动化。然而，设计一个具有高自动化测试覆盖率的有效测试策略具有深刻的挑战性。")]),v._v(" "),t("p",[v._v("虽然 Mike Cohn 的测试金字塔被广泛用作构建微服务测试策略的最佳实践，但实现仍然远远不够理想。最常见的挑战仍然是在测试设计阶段——在正确的位置实现适当的测试集")]),v._v(" "),t("p",[v._v("以下是我们经常从开发团队那里听到的一些抱怨:")]),v._v(" "),t("p",[v._v("这些都很好，但除非经过综合测试，否则不能确定")]),v._v(" "),t("p",[v._v("微服务中最大的问题之一是与许多粒度有限的服务进行集成测试。团队需要对上下文中的所有服务有全面的了解。它要求团队之间加强协调，并成为软件交付速度的瓶颈。")]),v._v(" "),t("p",[v._v("stub很好，但我们不能相信那些")]),v._v(" "),t("p",[v._v("为了减轻集成测试的麻烦，团队经常开始使用更多的mock测试。虽然它消除了对其他团队的依赖性，但是mock和stub的使用通常会变得非常困难，很难管理。")]),v._v(" "),t("p",[v._v("更重要的是，在许多情况下，测试存根的有效性缺乏反馈回路。集成服务实现的工作方式与存根不同，最终会走在端到端测试的道路上。\n辩论——建立正确的事物还是建立正确的事物")]),v._v(" "),t("p",[v._v("团队通常面临的另一个挑战是正确地实现分层测试套件。许多开发团队拥有实现测试策略所需的技能和能力，但是测试通常没有在正确的地方实现。因此，向右测试阶段变得更重，并产生反模式。我们越是向右倾斜，测试就越昂贵、脆弱和不确定性。")]),v._v(" "),t("p",[v._v("是否有必要关注测试的金字塔依从性或测试的有效性是工程师们经常争论的一个共同话题。这场争论更多的是关于短期利益还是长期利益。")]),v._v(" "),t("p",[v._v("尽管实现更低级别的测试在开发时间方面代价高昂，但从长远来看，它会带来巨大的回报——减少技术债务，对应用程序组件有良好的了解，以及高度的可维护性。")]),v._v(" "),t("p",[v._v("我知道哪里出了问题，但不知道在哪里出了问题")]),v._v(" "),t("p",[v._v("这些测试往往无法追溯到问题的根本原因。在许多情况下，将应用程序日志和测试报告作为单个可视化中测试失败的证据进行聚合是一个挑战，这使得反馈不完整。它需要额外的努力来追溯问题的根源。")]),v._v(" "),t("p",[v._v("此外，反应式微服务体系结构中的许多通信都是以异步消息驱动的方式进行的，这给跟踪事件的后续影响增加了更多的麻烦。")]),v._v(" "),t("p",[v._v("我们的测试环境不是产品的复制品")]),v._v(" "),t("p",[v._v("根据设计原则，微服务比单体系统更容易进行隔离测试——它们更小，更集中。但是，当我们需要建立一个新的测试环境时，这就成了一场噩梦。")]),v._v(" "),t("p",[v._v("它需要有许多服务部署、数据库旋转、启动新的消息传递系统、负载均衡器、服务网关等等。当团队缺乏为测试目的而开发随需应变环境的能力时，在代码转移到前 prod 或 prod 之前，很有可能会忽略某些方面。")]),v._v(" "),t("p",[v._v("有志者事竟成\n是的，实现有效的微服务测试策略是困难的，但并非不可能。现代技术影响者已经广泛依赖于微服务架构。在互联网上有数百个关于这个主题的案例研究。以下是我的观点")]),v._v(" "),t("p",[v._v("坚持基本原则")]),v._v(" "),t("p",[v._v("虽然我们应该拥抱新的工具和技术以保持与软件交付速度的相关性，但我们应该坚持基本原则。Lisa Crispin 和 Janet Gregory 的书《敏捷测试》描述了 Brian Marick 的测试象限的一个修改，这个修改有助于对不同类型的测试进行分类。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog.testproject.io/wp-content/uploads/2021/09/Screen-Shot-2021-09-12-at-11.57.37-AM-1536x661.png",alt:""}})]),v._v(" "),t("p",[v._v("这种分类是开始隔离测试并将其放入适当的测试阶段的最佳方法之一。在这个象限的底部，测试是面向技术的——这些测试的规模很小，范围仅限于单元/组件。这些都是测试自动化的最佳候选者。")]),v._v(" "),t("p",[v._v("上半部分更侧重于商业功能——范围要大得多。通常，这些测试用于确定特性准备就绪情况。")]),v._v(" "),t("p",[v._v("了解「大局」")]),v._v(" "),t("p",[v._v("比例立方体模型不仅可以有效地理解微服务原理，而且可以为微服务测试策略的设计提供参考。在高层次上，测试目标需要与比例尺立方体的三个轴对齐:")]),v._v(" "),t("p",[v._v("Y 轴试验---测试微型服务的功能分解。这些测试通常是单元测试、组件测试、合同测试和集成测试。较低级别的测试依赖于测试双打(stub和mock) ，而较高级别的测试更多是端到端的，通常在集成环境下工作")]),v._v(" "),t("p",[v._v("X 轴测试 ---  测试水平伸缩能力。通常，性能、负载、压力测试和混沌工程有助于评估应用程序的自动缩放和自愈特性")]),v._v(" "),t("p",[v._v("Z 轴测试 --- 测试跨数据分区的应用程序行为一致性。这些测试通常评估应用程序将请求路由到包含数据的适当服务器的能力。通过将请求路由到不同的服务器集，这些测试提供了关于数据一致性和 SLA 遵从性的洞察力")]),v._v(" "),t("p",[v._v("朝着正确的方向前进")]),v._v(" "),t("p",[v._v("对基本原理和大局的良好理解有助于创建正确的测试策略。然后是可靠的测试设计原则，它需要纪律，团队成员之间以及团队以外的人之间不断的沟通。更好的测试设计需要技术和文化的改变。")]),v._v(" "),t("p",[v._v("低水平的测试成本更低")]),v._v(" "),t("p",[v._v("这个想法需要进入团队的 DNA ——低层次的测试成本更低，反馈速度更快。这些测试结果可以在函数/单元/组件级别上显示应用程序的问题——因此，修复起来要容易得多。")]),v._v(" "),t("p",[v._v("坚持测试金字塔有助于获得低成本的测试，以及比任何更高级别更低的修复缺陷的成本。因此，理解并坚持这种模式是至关重要的。")]),v._v(" "),t("p",[v._v("代码覆盖率是不够的")]),v._v(" "),t("p",[v._v("将代码覆盖率视为应用程序中单元测试的质量通常是一种常见的说法。但是仅仅代码覆盖是不确定的。我们可以通过单元测试实现100% 的代码覆盖率，但是缺少功能行为的代码。因此，虽然代码覆盖率仍然需要被视为衡量质量的关键指标之一，但是单元测试的范围需要超出这个范围。")]),v._v(" "),t("p",[v._v("单元测试需要更具功能性")]),v._v(" "),t("p",[v._v("它的设计需要超越排列的思维，并采用更加现实的面向业务的测试方法。这个过程很复杂，并且需要开发人员和团队中的质量倡导者之间的密切协调。")]),v._v(" "),t("p",[v._v("使用stub-使stub可靠")]),v._v(" "),t("p",[v._v("缺少测试存根的反馈回路是自动化测试中的一个常见问题。团队在开始的时候充满热情地使用存根，最终对这些失去信心。使存根不可靠的两个主要原因:")]),v._v(" "),t("p",[v._v("业务场景的多样性变得势不可挡,\n缺乏针对实际系统的优化和验证存根的进程")]),v._v(" "),t("p",[v._v("团队应该专注于实现一个创新的存根解决方案，该方案依赖于静态和动态stub策略的混合。它还需要有一个可以更改(或者至少突出显示)的自动定期验证系统当存根过时的时候。这个场景是契约测试的候选方案之一——这个过程使您对无缝集成更有信心，并有助于实现可靠的存根")]),v._v(" "),t("p",[v._v("随着测试自动化程度的提高，最大的障碍之一是缺乏计划。对于快节奏的交付模型，大多数团队没有单独的测试计划阶段。这个差距导致实现中出现许多反模式。敏捷是关于测试和学习的。团队必须从一开始就有一个计划和强大的测量能力。\n不断的度量有助于诊断过程中的问题并减轻这些问题。我们不能预测从一开始会发生什么，但是度量可以突出代码冗余、测试比例、偏差和测试中的差距。保持对测试自动化设计的密切控制有助于拥有一个健壮的、可伸缩的和可靠的框架。")]),v._v(" "),t("p",[v._v("知道哪里出了问题")]),v._v(" "),t("p",[v._v("其中一个需要注意的因素，在自动化测试框架设计是它的可追溯性。自动化测试必须有一种方法，或者在单个测试报告管道中引入应用程序日志和测试结果，或者可以跟踪测试生命周期中的所有事件和后续影响的唯一标识符。它将有助于提高测试的可观察性和减少测试分析工作")]),v._v(" "),t("p",[v._v("它是关于对话和互动的")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://blog.testproject.io/wp-content/uploads/2021/09/Screen-Shot-2021-09-15-at-11.42.14-AM.png",alt:""}})]),v._v(" "),t("p",[v._v("敏捷就是对话，更快的反馈循环，所以必须是测试。在整合不同组成部分时，这是一个问题——整合各方之间缺乏自动交互过程。消费者驱动的契约测试有助于弥合提供者和消费者系统之间的鸿沟。")]),v._v(" "),t("p",[v._v("这些测试自动向提供者共享消费者期望——一个决定性的反馈循环，防止各方之间破坏集成。它也是stub验证的解决方案，因为消费者期望在提供者端得到验证。")]),v._v(" "),t("p",[v._v("点击一下按钮就可以启动一个环境")]),v._v(" "),t("p",[v._v("缩放比例立方体的 x 轴缩放涉及到水平能力——微服务设计最关键的方面之一。大多数现代微型服务系统是集装箱化的应用。")]),v._v(" "),t("p",[v._v("在新的基础设施上部署应用程序需要自动化，以便团队可以根据需要启动或降低新的环境。这种自动化有助于以成本优化的方式加快测试周期。")]),v._v(" "),t("h3",{attrs:{id:"author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[v._v("#")]),v._v(" author")]),v._v(" "),t("p",[v._v("石头 磊哥 seven 随便叫")]),v._v(" "),t("h3",{attrs:{id:"company"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[v._v("#")]),v._v(" company")]),v._v(" "),t("p",[v._v("HSBC\n大家好，我已经加入了HSBC")]),v._v(" "),t("h3",{attrs:{id:"roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[v._v("#")]),v._v(" roles")]),v._v(" "),t("p",[v._v("QA（营生） dev（front-end dev 兴趣爱好）")]),v._v(" "),t("h3",{attrs:{id:"联系方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[v._v("#")]),v._v(" 联系方式")]),v._v(" "),t("p",[v._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),v._v(" "),t("h4",{attrs:{id:"wechat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[v._v("#")]),v._v(" wechat:")]),v._v(" "),t("p",[v._v("qileiwangnan")]),v._v(" "),t("h4",{attrs:{id:"email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[v._v("#")]),v._v(" email:")]),v._v(" "),t("p",[v._v("qileilove@gmail.com")])])}],!1,null,null,null);_.default=e.exports}}]);