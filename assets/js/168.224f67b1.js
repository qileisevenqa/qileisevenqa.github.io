(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{381:function(v,_,n){"use strict";n.r(_);var p=n(1),e=Object(p.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("div",{staticClass:"content"},[n("p",[v._v("不确定在集成测试期间要检查什么，或者不确定是否将回归和用户接受度测试结合起来？了解这些功能测试类型涵盖的内容以及何时进行。")]),v._v(" "),n("p",[v._v("功能测试是软件测试难题中最大的部分。质量检查过程本质上是必需的，它应产生使客户感到满意的更高质量的产品。")]),v._v(" "),n("p",[v._v("功能测试的目的是确认软件是否按要求或验收标准中所述执行。这种类型的测试还可以验证该软件是否符合客户的期望。")]),v._v(" "),n("p",[v._v("虽然功能测试是软件质量保证中执行最多的类型，但实际上它包含几个不同的部分，每个部分都有不同的重点。每种功能测试类型都旨在确定应用程序是否满足需求-在客户前端和后端处理引擎上。")]),v._v(" "),n("p",[v._v("让我们讨论功能测试类型，它们的目标和发生顺序。我们还将使用功能测试示例来指导您完成整个过程，包括整个示例应用程序。本文介绍并包含以下类型的功能测试的测试用例：")]),v._v(" "),n("ul",[n("li",[v._v("功能测试")]),v._v(" "),n("li",[v._v("单元测试")]),v._v(" "),n("li",[v._v("用户故事测试")]),v._v(" "),n("li",[v._v("整合测试")]),v._v(" "),n("li",[v._v("接口测试")]),v._v(" "),n("li",[v._v("烟雾测试")]),v._v(" "),n("li",[v._v("回归测试")]),v._v(" "),n("li",[v._v("用户验收测试")])]),v._v(" "),n("p",[v._v("这个虚构的示例应用程序称为“ Return Me to Work”，它包括一个Web门户和一个移动应用程序。人力资源人员使用此Web门户应用程序来管理因传染性疾病而在长假后返回工作岗位的员工，并跟踪他们与其他员工的接触。人力资源可以使用门户网站查看每个员工的每日更新并监视任何问题，并为员工提供医疗，财务和其他护理需求。员工使用移动应用程序版本，通过该版本，他们可以填写每日调查表以检入并上传任何必要的医疗文件。调查回复自动上传到Web门户以供人事使用。员工保持其地址和联系信息为最新。")]),v._v(" "),n("p",[v._v("功能，单元和用户案例测试\n当QA测试人员评估新的应用程序功能时，大多数功能测试都会进行。有三种主要类型的功能测试以这种方式评估应用程序的功能：")]),v._v(" "),n("p",[v._v("单元测试。通过此类测试，质量检查工程师可以评估可能的最小代码段。当开发人员检入代码或将其编译以进行测试构建时，QA工程师可以编写手动的单元测试或使用测试自动化来执行它们。\n功能测试。这些测试从用户的角度评估代码更新或新功能。测试人员与软件进行交互，以查看代码的运行状况以及版本的改进之处。\n用户故事测试。这些面向业务的测试可帮助组织评估功能是否在用户期望的范围内按预期交付。\n这三种类型的功能测试均可以验证应用程序在功能上是否符合要求或接受标准。质量检查工程师将被测系统的每个独立部分视为单个故事或单个功能；他们不必担心一个组件如何与其他组件或整个组件交互。")]),v._v(" "),n("p",[v._v("这是“ Return Me to Work”应用程序的功能测试示例。通过移动应用程序提交每日调查时，开发过程可能包括上传考试或实验室结果。")]),v._v(" "),n("p",[v._v("单元，功能和用户案例测试用例\n测试方案：发送带有上载实验室结果的调查。")]),v._v(" "),n("p",[v._v("使用有效的员工凭据登录到移动应用程序。\n从下拉列表中选择以下每个答案：")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("温度\n总体健康\n选择上载按钮。\n在上载窗口中，选择要以PDF格式上载的文件。\n单击提交按钮。\n将打开“ 审阅提交”窗口。\n单击确定以上传结果。\n确保员工收到确认邮件，确认HR系统已成功收到实验室结果。\n选择“ 完成调查”按钮以提交所有调查答案。\n将打开“  审阅提交”窗口。 \n单击“ 确定”提交每日调查数据。\n员工返回到每日调查的登录页面。\n每日状态显示为已完成。\n注销移动应用程序。\n该功能测试示例将在填写每日健康状况调查时完成上载PDF文档的过程。当两个操作都成功并且没有错误弹出时，则测试通过。\n")])])]),n("p",[v._v("整合测试\n这种测试技术是一种评估应用程序工作流程中某个功能如何与其他功能交互的方法。通过集成测试，质量检查工程师可以检查该功能是否按预期影响了其他组件。")]),v._v(" "),n("p",[v._v("应用程序中的集成点各不相同，而且可能很复杂。应用程序功能无法单独运行还不够。具有复杂功能的应用程序或要集成的测试方案可能会使这些测试难以执行。例如，许多与医疗保健相关的应用程序同时具有医疗保健和财务功能。应用程序可能会将处方与财务应用程序代码联系起来，向患者发送处方并产生计费费用。所有这些单独的组件都必须彼此同步并在彼此之间传递数据，以使应用程序正常工作。")]),v._v(" "),n("p",[v._v("对于“让我重返工作岗位”，集成测试案例可能包括安排约会，事后跟进以及将医疗账单发送给患者的保险公司。在此测试方案中，员工已对病毒进行了阳性测试，并看过医生进行了后续咨询或检查。现在，员工需要药物，并且应用程序需要为员工的检查和处方支付健康保险费。")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("集成测试用例\n测试方案：诊断和后续医学检查，并向患者的健康保险公司收费。\n使用有效的员工凭据登录到移动应用程序。\n填写表明症状的问卷。\n该应用程序安排与员工的医疗服务提供者约会。\n患者参加约会，并使用该应用通过上传病毒检测文档指示诊断。\n员工从提供者上载便笺或报告。\n人力资源部门收到数据后，将员工置于工作场所，并发生以下情况：\n账单将发送给员工的健康保险公司以进行医疗任命和测试。\n该应用程序列出了该雇员工作7天的工作，然后重新发送了日常健康调查表。\n集成测试很复杂。此测试用例中没有任何一步意味着测试通过。相反，此测试技术可确保每个操作（例如员工上载医疗更新）都会触发应用程序执行适当的后续步骤。作为测试人员，我不仅要检查此工作流程，还要检查交互的功能方面。例如：\n")])])]),n("p",[v._v("软件系统是否为处方，测试和医疗预约费用生成准确的账单？\n系统是否生成了开票发票并将其发送到健康保险公司？\n处方顺序正确吗？\n系统是否已按日期和时间记录员工的体检结果，然后将患者设置为待命状态7天？\n7天后，员工是否收到了日常健康问卷？\n此方案包括测试发送出站数据的连接的API，以及财务报表和计算。测试工作是交付高质量，功能齐全的软件系统所不可或缺的。")]),v._v(" "),n("p",[v._v("接口测试\n通过接口测试，QA工程师可以评估API或其他后端数据交换连接。一些专家将接口测试与集成测试等同起来，但是由于其复杂性而与众不同。现代的Web和移动应用程序使用API​​交换入站和出站数据。众多开放源代码和专有工具可测试REST和SOAP API函数。")]),v._v(" "),n("p",[v._v("对于接口测试，不要简单地验证API端点是否正常运行；还测试他们是否可以安全地接收和发送数据。测试是否已将API安全性设置为仅允许并连接到授权的供应商或合作伙伴。")]),v._v(" "),n("p",[v._v("接口测试还应该检查流经连接的数据。确认收到正确的数据结构，并且该结构有效。循环开发和安全团队以帮助设置有效的接口测试。")]),v._v(" "),n("p",[v._v("作为“让我上班”的界面测试示例，请查看将处方单发送给药房的功能中的API端点安全性。")]),v._v(" "),n("p",[v._v("接口测试用例\n测试方案：针对特定患者，将处方单发送给药房。")]),v._v(" "),n("p",[v._v("人力资源人员登录到Web应用程序，并确认员工已提交其医疗约会表，包括处方单。\nHR收到确认回复，说明药房已收到特定员工的处方。\n当应用程序连接到药房时，测试人员应查看API请求和响应，以验证安全令牌已通过。确认处方信息-包括患者姓名，地址和医疗提供者-在整个交换过程中均准确无误。")]),v._v(" "),n("p",[v._v("要创建良好的阴性测试方案，请引入没有安全凭据的假药房。让该药房尝试连接到API以接收处方数据。该应用程序不应发送信息。走着瞧吧。系统是否向IT组发送警报？它会锁定整个应用程序吗？或更糟糕的是，它允许连接吗？")]),v._v(" "),n("p",[v._v("烟雾测试\n冒烟测试（也称为健全测试）旨在确保在更正式的测试开始之前应用程序处于适当的状态。通过烟雾测试，质量检查工程师检查应用程序是否按预期运行。当发布少量或紧急代码时，烟雾测试非常有用。例如，一位客户报告了一个严重错误，开发人员应尽快修复该错误。质量检查人员必须确认该修补程序在短时间内没有破坏任何其他现有功能。当严重缺陷导致计划外的开发项目时，冒烟或健全性测试可确保应用程序功能不会受到不利影响。")]),v._v(" "),n("p",[v._v("质量检查工程师经常使用自动烟雾测试脚本，但也可以是简短的手动测试套件。大多数烟雾测试套件的执行时间在一到两个小时之间。")]),v._v(" "),n("p",[v._v("让我们为“ 返回我的工作”提供一个烟雾测试示例。")]),v._v(" "),n("p",[v._v("烟雾测试案例\n测试方案：从HR Web应用程序的登录页面开始，然后处理员工健康测试和约会。")]),v._v(" "),n("p",[v._v("以有效的HR用户身份登录Web应用程序。\n选择在日常调查中报告感到不适的员工的记录。\n生成疾病测试并与患者提供者进行医疗预约。\n生成呼叫提醒以检查员工的状况。\n审核医疗文档，然后将其标记为已审核和批准。\n选择此选项可将开票发票发送给健康保险公司，以收取合格的医疗费用或预约。\n将患者工作状态更改为“暂停”。\n满足所有医疗要求后，将患者工作状态更新为“ 活动”。\n在设计烟雾测试时，测试人员必须确定哪些功能对客户至关重要。在我们的应用程序中，人力资源人员必须监视员工的医疗评估，安排约会，并确保及时处理账单或药房订单。人力资源角色还确保员工可以返回到活跃的工作状态。")]),v._v(" "),n("p",[v._v("回归测试\n回归测试就在计划发布之前进行。质量检查工程师重新运行测试，以确保所做的更改不会对应用程序产生不利影响。")]),v._v(" "),n("p",[v._v("回归测试的执行时间取决于开发方法。它可以短至一天或长达两周。回归测试套件包括所有功能测试方案，包括集成，界面和冒烟测试。")]),v._v(" "),n("p",[v._v("分配给执行的时间和测试套件的大小决定了团队可以完成多少回归测试。随着应用程序的老化，越来越多的功能测试不断累积。有时候，对于QA资源和允许的时间来说，测试执行太多了。发生这种情况时，规划回归测试至关重要。根据回归测试计划，确定哪些功能区域在版本中发生了变化，或者哪些对客户群最关键。一种方法是创建涵盖所有功能的多个回归测试套件，并轮流执行它们。例如，如果将回归测试套件分成几套，则每个版本执行一套。")]),v._v(" "),n("p",[v._v("从理论上讲，您想一直进行所有测试，但是对于许多应用程序开发团队而言，这是不现实的。如果您不能一次执行所有回归测试，则计划继续执行它们，并分散任务以确保覆盖范围。")]),v._v(" "),n("p",[v._v("回归测试用例\n测试场景：对于“让我上班”，回归测试套件包括在功能，集成，界面和冒烟测试期间执行的所有功能测试示例。在此示例测试套件中，请遵循相同的测试步骤来重新评估上述方案：")]),v._v(" "),n("p",[v._v("发送带有上载实验室结果的调查。\n向患者的健康保险公司确认病毒检测和后续医学检查，处方和账单。\n将处方单发送给特定患者的药房。\n用户验收测试\n用户验收测试（UAT）并不是要查找缺陷或失败的需求，而要满足客户的期望并改善用户体验。因此，使用UAT，测试人员不是质量检查专业人员。而是，这种测试方法通常依赖于产品团队或来自用户群的代表，他们可以验证软件是否按预期运行。")]),v._v(" "),n("p",[v._v("UAT经常发现缺少的功能要求或整个工作流程的各个部分。UAT揭示了客户，产品团队，开发人员和质量保证人员之间对要求或接受标准的理解或沟通不充分。如果功能要求不能完全满足客户的期望，则最终产品可能对用户不足。因此，客户和产品团队必须充分了解软件项目所涉及的业务流程和目标，并确保准确创建需求规格，验收标准和开发案例。")]),v._v(" "),n("p",[v._v("UAT通常以演示形式出现在冲刺的结尾。客户和产品团队的Sprint演示有助于确保在软件开发生命周期中没有任何要求被更改或遗漏。")]),v._v(" "),n("p",[v._v("如果可能，请在回归测试之前或之后执行UAT。UAT也可以在回归测试过程中发生，以节省时间，但是这种方法可能意味着多次报告缺陷。如果您同时执行回归和用户接受度测试，请确保QA和UAT测试人员进行协作，以避免创建重复的工作。")]),v._v(" "),n("p",[v._v("UAT套件通常会评估实际用户方案。这是“ 返回我上班”应用程序的UAT示例。")]),v._v(" "),n("p",[v._v("UAT测试用例\nUAT套件方案：填写员工表格并确认已收到。")]),v._v(" "),n("p",[v._v("以员工身份登录到移动应用程序。\n用有效数据填写日常健康调查表。\n每天上传早晨温度读数。\n签署证明您感觉健康并且能够工作的证明。\n提交问卷和证明。\n登录HR Web门户应用程序并查看患者记录，以确认收到问卷和证明。\n功能测试涉及很多领域，每种类型的功能测试旨在确认应用程序到达客户后是否按预期运行。甚至有上述功能测试类型的子集。例如，边界值测试可以适合功能测试和集成测试。")]),v._v(" "),n("p",[v._v("功能测试的美在于灵活的测试范围。您可以无休止地测试或快速检查某些内容。两种方法都可以根据应用程序及其客户的需求提供质量测试范围。但是，在进行功能测试时，请确保评估一些关键功能，这些功能可确保应用程序安全并按预期运行，然后逐个发布。")]),v._v(" "),n("p",[v._v("不仅仅是功能测试\n非功能测试也是软件质量成功的重要组成部分。质量检查工程师通过负载，压力和其他形式的性能测试来执行非功能测试。非功能测试还包括合规性测试，安全性测试，在某些情况下还包括可访问性测试。")])])}],!1,null,null,null);_.default=e.exports}}]);