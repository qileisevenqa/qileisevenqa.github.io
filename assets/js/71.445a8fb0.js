(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{284:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("API 测试并不复杂。学习如何使用 SuperTest、 Mocha 和 Chai 快速建立可靠的自动化测试套件。\n如果必须为API创建自动化测试，则很可能会使用或探索Postman。 有充分的理由，Postman可能是最著名的API开发和测试工具。 对于开发人员和测试人员而言，这是一个出色的工具，可以用来创建文档并演示您的应用程序API应该如何工作。")]),t._v(" "),s("p",[t._v("使用Postman为构建测试套件以检查API是否按预期工作提供了一个很好的起点。 但是，根据您的测试用例和API端点，您可能会遇到Postman的限制：")]),t._v(" "),s("p",[t._v("因为Postman做了很多事情，所以如果您只想做API测试，它的界面可能会感到混乱并且有些肿。")]),t._v(" "),s("p",[t._v("一旦开始测试多个API终结点，为每个事件组织不同的场景就会有些混乱。")]),t._v(" "),s("p",[t._v("如果要在持续集成环境中使用Postman，则必须使用Newman（Postman的命令行助手）。 虽然这两种工具在技术上应该相同，但它们仍然是单独的工具，您可能会发现测试结果不同的问题。")]),t._v(" "),s("p",[t._v("如果您有多个团队成员就API测试和文档进行协作，那么对于小型组织而言，Postman的价格可能会有些偏高，因为这是每位用户每月的费用。")]),t._v(" "),s("p",[t._v("我最近从事了一个使用Postman进行API文档和测试的项目。 团队开始直接体验这些痛苦点中的大多数，因此我们着手寻找更好的解决方案，以使团队在继续构建API时构建自动化测试。 该团队没有专门的测试人员，因此开发团队负责测试自动化。")]),t._v(" "),s("p",[t._v("由于当前的开发人员对JavaScript感到满意，因此我们开始寻找JavaScript工具来帮助完成这些工作。 经过一番试验后，我们找到了一套不错的工具组合，这些工具使我们的API测试变得毫不费力地构建且易于维护。 实施这些测试工具后，我们的自动化覆盖范围猛增。\n用于运行API测试的JavaScript工具")]),t._v(" "),s("p",[t._v("被测试的应用程序是一个Node.js应用程序，因此我们想找到在该环境中运行良好的测试工具。 值得庆幸的是，Node.js生态系统不乏可满足您所有测试需求的出色工具。 您将找到一个库或框架来运行从基本单元测试到端到端测试以及介于两者之间的所有内容。")]),t._v(" "),s("p",[t._v("在我们可以选择的情况下，我们的重点是找到已经使用了一段时间的易于使用，经过测试的库。 团队的愿望之一就是找到稳定的工具，任何JavaScript开发人员都可以轻松使用。 在修改了一些著名的库之后，我们发现了一些合适的库。")]),t._v(" "),s("p",[t._v("超级测试")]),t._v(" "),s("p",[t._v("SuperTest提供了用于测试HTTP请求的高级抽象-非常适合API。 如果您有运行HTTP服务器的Node.js应用程序（例如Express应用程序），则可以直接使用SuperTest发出请求，而无需运行服务器。 SuperTest的优点之一是，尽管它可以运行测试而无需任何其他工具，但它可以与其他测试框架很好地集成在一起，正如您将在下面看到的那样。")]),t._v(" "),s("p",[t._v("摩卡咖啡")]),t._v(" "),s("p",[t._v("Mocha是最著名的JavaScript测试框架之一，可同时在Node.js和浏览器上运行，使其对于测试异步功能非常有用。 关于Mocha的一件很酷的事情是，它允许您以不同的样式编写测试，例如BDD（它，描述等）和TDD（套件，测试等）。 Mocha非常适合SuperTest，可帮助您以团队首选的方式组织测试。")]),t._v(" "),s("p",[t._v("hai")]),t._v(" "),s("p",[t._v("Chai是一个断言库，您可以将其与其他测试框架（如Mocha）配对。 尽管并不是编写测试套件所必需的，但它为您的测试提供了更具表现力和可读性的样式。 像Mocha一样，Chai允许您选择BDD样式（期望）或TDD样式（声明）断言，以便您可以将库与大多数框架组合在一起而不会发生冲突。")]),t._v(" "),s("p",[t._v("使用这三个工具，您可以轻松为API创建快速，稳定和可维护的自动化测试套件。")]),t._v(" "),s("p",[t._v("发挥这些工具的作用")]),t._v(" "),s("p",[t._v("为了演示SuperTest，Mocha和Chai如何协同工作，我们将使用这些工具为名为Airport Gap的应用程序自动化一些测试。 Airport Gap应用程序提供了RESTful API，以帮助其他人使用它来提高其API自动化测试技能。")]),t._v(" "),s("p",[t._v("请记住，Airport Gap应用程序不是Node.js应用程序，因此本文不会显示如何使用这些测试工具直接与Node.js集成。 但是，您仍然可以使用它们为任何可访问的API构建测试。 本文将在单独的代码存储库中创建测试，但是如果您有Node.js应用程序，则这些工具将与您的测试代码以及​​该应用程序一起使用效果最佳。")]),t._v(" "),s("p",[t._v("首先，在一个空目录内创建一个新项目，并通过运行npm init -y初始化它，以创建一个默认的package.json文件。 现在，您不必编辑此文件。 初始化项目后，您可以使用以下命令设置最新版本的SuperTest，Mocha和Chai库：\nnpm install --save supertest mocha chai")]),t._v(" "),s("p",[t._v("这就是开始为API创建自动化测试所需的全部。 首先，为Airport Gap应用程序创建您的第一个API测试。")]),t._v(" "),s("p",[t._v("Airport Gap文档显示了可用于测试的所有可用端点。 让我们从返回所有可用机场GET / airports的端点开始。 该端点一次返回一个由30个机场组成的分页列表，因此验证此方法有效的一种快速方法是创建一个调用该端点并返回30个结果列表的测试。")]),t._v(" "),s("p",[t._v("在项目目录中创建一个名为airport.test.js的新文件，您将使用该文件编写测试代码。 您可以根据自己的喜好命名该测试文件，但是将.test.js作为文件名的一部分可以使测试套件扩展时更容易执行测试。 在新文件中，让我们编写第一个API测试。 这是代码，之后我们将说明发生了什么：")]),t._v(" "),t._m(1),s("p",[t._v("如果您熟悉JavaScript，即使您从未使用过项目中的任何库，也可以阅读该测试。")]),t._v(" "),s("p",[t._v("首先，测试会加载SuperTest库并将其分配给变量请求。 SuperTest库返回一个可用于初始化HTTP服务器的函数。 如果您不直接使用Node.js应用程序，那么您还可以使用想要使用的主机的URL传递字符串，这就是我们在本文中要做的。")]),t._v(" "),s("p",[t._v("请注意，指定的主机是API的基本URL，包括/ api子目录。 使用基本URL可以使您向API端点发出请求，而不必每次都写完整的URL，这将在以后在测试场景中使用SuperTest时看到。")]),t._v(" "),s("p",[t._v("下一个加载的库来自Chai。 由于Chai允许您同时使用TDD和BDD断言样式，因此您需要指定要使用的样式。 对于这些示例，我们将使用Expect接口使用BDD样式。 如果您喜欢应使用BDD接口或使用TDD样式进行声明，则可以轻松使用Chai进行切换。 这是我们选择图书馆的原因之一，因为它可以容纳任何团队不同的口味。")]),t._v(" "),s("p",[t._v("加载所需的库之后，现在您将进入测试场景的核心。 遵循BDD样式，测试使用Mocha的describe接口对测试场景进行分组。 describe函数接受字符串作为测试的描述，并接受定义测试用例的函数。 与Chai一样，如果您愿意，可以使用TDD界面。 您无需加载任何Mocha库，因为我们将使用Mocha的运行程序来执行测试。")]),t._v(" "),s("p",[t._v("Mocha的it功能是定义单个测试方案的地方。 与describe函数类似，第一个参数是描述测试用例的字符串，第二个参数是为测试步骤编写代码的函数。 注意，我们将异步函数用作第二个参数。 在测试内部，您将使用SuperTest发出请求，该请求将返回一个Promise。 使用async和await可以使您解决诺言，从而更清晰地获得API响应，而不是通过链接来解决诺言。")]),t._v(" "),s("p",[t._v("测试方案有两个步骤。 首先，您使用SuperTest的request函数通过get函数调用API。 此功能需要至少一个参数-您的请求的URL。 由于我们使用Airport Gap API的基本URL初始化了请求函数，因此在发出请求时无需编写整个URL。 您只需要端点即可，SuperTest会自动将其附加到您的基本URL。")]),t._v(" "),s("p",[t._v("如前所述，get函数返回一个promise，因此要干净地解决它，可以使用await关键字。 SuperTest向您的主机和端点发出请求，并将响应保存在response变量中，您将使用该变量运行测试的断言。 SuperTest从API请求中获取许多信息，例如主体，标头，状态代码等等。")]),t._v(" "),s("p",[t._v("有了API响应，您最终可以做出断言，以确保API能够按预期工作。 该测试使用带有期望函数的Chai以及to和eql链式方法来构造您的断言。 Chai有很多方法可以建立断言，因此值得一读的是哪些方法可以帮助您根据需要创建测试。")]),t._v(" "),s("p",[t._v("该测试包含两个断言。 首先，测试使用response.status验证API请求的状态码是否为200（即请求成功）。 下一个断言查看响应正文（response.body），并检查数据键是否包含30个项目。 SuperTest非常聪明，可以检查响应中的内容类型，并将信息适当地解析为JavaScript对象。 由于您不必担心解析响应，因此它使验证JSON API变得更加容易。")]),t._v(" "),s("p",[t._v("测试已全部设置并准备执行。 要使用Mocha运行测试，可以使用安装软件包时随附的mocha可执行文件。 使用它的最简单方法是使用npx命令，该命令将在项目中找到可执行文件。 打开您的终端并运行以下命令：")]),t._v(" "),t._m(2),s("p",[t._v("如果一切正常，Mocha将执行您的测试并显示您的测试结果。 默认的报告程序显示测试描述，并按describe方法分组，并显示每个测试的结果和执行时间。")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("您已经使用SuperTest，Mocha和Chai编写并执行了第一个API测试！ 在不到十行的代码中（不计空白行），您已经有了一个自动测试，可以验证您可以随时重新运行的API请求。 没有比这更简单的了。")]),t._v(" "),s("p",[t._v("运行POST请求测试")]),t._v(" "),s("p",[t._v("让我们编写另一个测试，这次检查对API的POST请求的工作方式。 POST / airports / distance端点允许您发送两个机场代码，并以不同的长度单位返回它们之间的距离。 让我们看看SuperTest如何处理请求。 在airport.test.js中的现有测试下，创建一个新的测试用例：")]),t._v(" "),t._m(4),s("p",[t._v("该测试比第一个示例更长，但是我们使用SuperTest，Mocha和Chai库的大多数方式是相似的，因此我们将不对该测试进行详细介绍。 让我们集中讨论确实发生变化的部分。")]),t._v(" "),s("p",[t._v("第一个区别是您向API发出请求的方式。 由于此端点是POST请求，因此将使用post函数。 该功能与get相同，仅需指定API的端点。 但是，您可以将send函数链接到您的请求以提交任何必需的参数。 由于我们正在测试JSON API，因此您可以将常规JavaScript对象与参数一起使用，SuperTest会发送正确的请求正文。")]),t._v(" "),s("p",[t._v("另一个区别是用来验证API响应包含特定密钥的断言之一。 在这里，我们使用Chai的include和keys方法来确认响应中是否包含具有计算出的距离的键。 您可以检查整个API响应主体，但出于本文的目的，我们将进行一些抽查。 我们还根据该测试的实际值进行验证，但这也只是出于演示目的。 如果您的API数据可以轻松更改，则可能不希望运行此类断言。")]),t._v(" "),s("p",[t._v("现在您已经看到了这些测试中的更改，是时候执行它们以确保所有功能都按预期运行了。 您可以像以前一样运行测试：")]),t._v(" "),t._m(5),s("p",[t._v("现在，您有两个测试方案，如果一切正确，则将针对不同的API请求和端点获得两个成功的测试结果。")]),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("到目前为止显示的示例针对公共API端点进行了测试。 如果您有需要身份验证的API，该怎么办？ Airport Gap API具有一些需要身份验证的终结点。 这些受保护的端点需要以标头形式传递的API令牌。 例如，一个需要身份验证的端点是POST / favorites API端点。 该端点允许Airport Gap用户将自己喜欢的机场保存到其帐户中，以便以后查找。")]),t._v(" "),s("p",[t._v("让我们开始创建一些测试以验证此行为。 首先，我们将涵盖测试用例，以验证POST / favorites端点不允许没有令牌的访问。 在确认Airport Gap API不允许访问之后，我们将编写一个访问同一终结点的测试，这次使用身份验证令牌。")]),t._v(" "),s("p",[t._v("为了保持测试套件的井井有条，请在项目目录中创建一个名为“ favourites.test.js”的新文件。 在这个新文件中，让我们首先编写测试方案，以确保未经身份验证的用户无法访问此端点：")]),t._v(" "),t._m(7),s("p",[t._v("到目前为止，您应该已经熟悉了测试结构。 我们正在加载SuperTest和Chai库，创建一个新的测试组并设置一个测试方案以验证端点是否需要身份验证。 POST / favorites端点需要airport_id参数，并且还接受可选的note参数，我们将在请求中使用这两个参数。 在没有有效令牌的情况下向Airport Gap API中的受保护端点发出请求时，API返回401响应，这就是我们在此处检查的内容。")]),t._v(" "),s("p",[t._v("运行此新测试方案，以确保其按预期工作：")]),t._v(" "),t._m(8),s("p",[t._v("您将看到此测试用例现在熟悉的结果：")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("下一个示例遵循使用多个经过身份验证的API端点的端到端流。 该测试首先在用户帐户中创建一个新的收藏机场。 然后，它通过API请求更新新创建的记录，并验证返回的数据。 最后，测试将删除该记录，我们将验证是否不再找到该记录。")]),t._v(" "),s("p",[t._v("在收藏夹.test.js文件中，在现有场景下添加新的测试用例：")]),t._v(" "),t._m(10),s("p",[t._v("使用request函数发出的API请求看起来都一样，除了我们之前未使用的新部分。 要将身份验证令牌作为标头作为请求的一部分发送，您可以将set函数链接到您的请求。 该函数使用两个参数。 第一个参数是请求标头的名称，第二个参数是您要发送给该标头的服务器的值。 对于Airport Gap API，它期望找到值为Bearer token = "),s("token",[t._v("的Authorization标头。")])],1),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("清理东西")]),t._v(" "),s("p",[t._v("尽管当前的测试相对简短且简单，但是您现在可以开始采取一些步骤来组织和清理测试套件。 尝试让一些组织进入您的代码库，然后使其失控，这是一个好习惯。")]),t._v(" "),s("p",[t._v("您可能已经注意到的第一件事是，我们正在进行一些复制。我们有两个具有相同设置的独立文件来加载库。 对于这些基本示例，这没什么大不了的。 但是，假设您继续扩展此测试套件并拥有更多文件。 如果必须更改设置（例如为API使用不同的基本URL），则必须逐一检查并手动进行调整。 最好将它放在一个地方。")]),t._v(" "),s("p",[t._v("您可以使用可以放置在项目目录根目录中的配置文件开始组织测试设置。 配置文件可以导出测试套件中使用的一些常用功能，您可以在需要的地方包括这些功能。 这样，您可以将一些设置和配置放在一个地方。")]),t._v(" "),s("p",[t._v("为此，请在您的项目目录中创建一个名为config.js的新文件。 在此文件中，您可以移动每个测试套件中使用的通用设置并导出以下功能：")]),t._v(" "),t._m(12),s("p",[t._v("现在，您可以使用以下配置替换两个测试文件开头的设置：\n您的测试应与此更改相同，并且通过将基本设置整合到一个地方，您的测试套件将变得更加易于维护。 如果您需要设置其他库或以其他方式配置现有功能，则只需在配置文件中执行一次即可。")]),t._v(" "),s("p",[t._v("最后一件事是使从命令行执行测试更加容易。 键入npx mocha * .test.js很容易，但是我们可以通过添加快速命令来执行测试来简化它。 打开package.json文件并找到脚本键。 默认情况下，它包含一个测试命令，该命令不执行任何操作。 用Mocha命令替换测试键的值（不再需要npx命令）：")]),t._v(" "),t._m(13),s("p",[t._v("进行此更改后，执行测试所需要做的就是运行npm test命令。 尽管此更改现在不能节省大量时间，但它在其他方面有所帮助。 无论使用哪种测试工具，大多数JavaScript项目都使用npm test命令作为执行测试的标准方法，因此加入您团队的任何人都可以快速启动并运行。 另一个好处是，如果将来您必须包括其他命令行标志，它将使您的测试命令保持不变。")]),t._v(" "),s("p",[t._v("如果您想查看本文中显示的项目的源代码，可以在GitHub上找到它：https：//github.com/dennmart/dead_simple_api_testing。\n概要")]),t._v(" "),s("p",[t._v("由于许多Web应用程序都依赖API进行工作，因此您需要确保这些系统始终能够按预期运行。 一个快速，稳定的自动化测试套件将确保为您的业务的重要部分提供动力的API在它们成长和扩展时继续起作用。")]),t._v(" "),s("p",[t._v("如果您的团队使用JavaScript（这很可能是因为它是当今最常用的编程语言之一），那么您将不必离开现有的工具集和环境来创建测试。 您可以找到许多测试框架和库来为您的API构建测试自动化。")]),t._v(" "),s("p",[t._v("在本文中，您看到了三种工具的组合，可让您快速构建强大的API自动测试套件。 SuperTest使您可以轻松地发出任何HTTP请求。 Mocha测试框架以团队喜欢的方式组织和运行测试，无论是TDD还是BDD风格。 Chai的断言与Mocha非常吻合，可以验证您的API响应。 这三者共同构成了一个可维护且快速的测试套件。")]),t._v(" "),s("p",[t._v("但是，这些并不是您可以使用的唯一工具。 如本文所述，如果要围绕JavaScript构建测试自动化，则可以有很多选择。 如果您不喜欢Mocha，则可以使用类似Jest或Jasmine的框架。 如果Chai不是您的首选（双关语），那么其他声明库（如should.js或意外的库）也可以很好地工作。")]),t._v(" "),s("p",[t._v("API测试不必很复杂。 毕竟，API唯一要做的就是接收请求并发送回响应。 使用一些工具，您可以创建一个简单而功能强大的测试套件，以确保您的API尽可能可靠，以使您的应用程序平稳运行。")]),t._v(" "),s("p",[t._v("您和您的团队如何处理API测试？ 您遇到了哪些问题或痛点？ 在下面留下您的评论，让我知道！")]),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("石头 磊哥 seven 随便叫")]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("thoughtworks（离职了。。。。）")]),t._v(" "),s("p",[t._v("大家好，本人不才，目前依旧混迹于thoughtworks，做着一名看起来像全栈的QA，兴趣爱好前端，目前是thoughtworks 西安QA社区的leader，如果有兴趣分享话题，或者想加入tw，可以找我")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("QA（营生） dev（front-end dev 兴趣爱好）")]),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("qileiwangnan")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("qileilove@gmail.com")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"使用-supertest、-mocha-和-chai-进行非常简单的-api-测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-supertest、-mocha-和-chai-进行非常简单的-api-测试","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 SuperTest、 Mocha 和 Chai 进行非常简单的 API 测试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('const request = require("supertest")("https://airportgap.dev-tester.com/api");\nconst expect = require("chai").expect;\n\ndescribe("GET /airports", function () {\n  it("returns all airports, limited to 30 per page", async function () {\n    const response = await request.get("/airports");\n\n    expect(response.status).to.eql(200);\n    expect(response.body.data.length).to.eql(30);\n  });\n});\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npx mocha airports.test.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://dev-tester.com/content/images/2020/09/api_testing_1.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('describe("POST /airports/distance", function () {\n  it("calculates the distance between two airports", async function () {\n    const response = await request\n      .post("/airports/distance")\n      .send({ from: "KIX", to: "SFO" });\n\n    expect(response.status).to.eql(200);\n\n    const attributes = response.body.data.attributes;\n    expect(attributes).to.include.keys("kilometers", "miles", "nautical_miles");\n    expect(attributes.kilometers).to.eql(8692.066508240026);\n    expect(attributes.miles).to.eql(5397.239853492001);\n    expect(attributes.nautical_miles).to.eql(4690.070954910584);\n  });\n});\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npx mocha airports.test.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://dev-tester.com/content/images/2020/09/api_testing_2.png",alt:""}}),this._v("\n测试经过身份验证的端点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('const request = require("supertest")("https://airportgap.dev-tester.com/api");\nconst expect = require("chai").expect;\n\ndescribe("POST /favorites", function () {\n  it("requires authentication", async function () {\n    const response = await request.post("/favorites").send({\n      airport_id: "JFK",\n      note: "My usual layover when visiting family",\n    });\n\n    expect(response.status).to.eql(401);\n  });\n});\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("npx mocha favorites.test.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://dev-tester.com/content/images/2020/09/api_testing_3.png",alt:""}}),this._v("\n现在，您已经验证了未经身份验证的API的工作原理，下面我们将进行更长的流程，以使用身份验证令牌发出类似的请求。 如果您有Airport Gap帐户，则可以在帐户页面中找到您的API令牌，并通过在代码中进行设置或通过环境变量直接在测试中使用它。 我们将使用环境变量将敏感键保留在代码库之外。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('it("allows an user to save and delete their favorite airports", async function () {\n  // Check that a user can create a favorite.\n  const postResponse = await request\n    .post("/favorites")\n    .set("Authorization", `Bearer token=${process.env.AIRPORT_GAP_TOKEN}`)\n    .send({\n      airport_id: "JFK",\n      note: "My usual layover when visiting family",\n    });\n\n  expect(postResponse.status).to.eql(201);\n  expect(postResponse.body.data.attributes.airport.name).to.eql("John F Kennedy International Airport");\n  expect(postResponse.body.data.attributes.note).to.eql("My usual layover when visiting family");\n\n  const favoriteId = postResponse.body.data.id;\n\n  // Check that a user can update the note of the created favorite.\n  const putResponse = await request\n    .put(`/favorites/${favoriteId}`)\n    .set("Authorization", `Bearer token=${process.env.AIRPORT_GAP_TOKEN}`)\n    .send({\n      note: "My usual layover when visiting family and friends",\n    });\n\n  expect(putResponse.status).to.eql(200);\n  expect(putResponse.body.data.attributes.note).to.eql("My usual layover when visiting family and friends");\n\n  // Check that a user can delete the created favorite.\n  const deleteResponse = await request\n    .delete(`/favorites/${favoriteId}`)\n    .set("Authorization", `Bearer token=${process.env.AIRPORT_GAP_TOKEN}`);\n\n  expect(deleteResponse.status).to.eql(204);\n\n  // Verify that the record was deleted.\n  const getResponse = await request\n    .get(`/favorites/${favoriteId}`)\n    .set("Authorization", `Bearer token=${process.env.AIRPORT_GAP_TOKEN}`);\n\n  expect(getResponse.status).to.eql(404);\n});\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("设置完此端到端测试后，让我们执行它，看看它如何进行。\n"),e("img",{attrs:{src:"https://dev-tester.com/content/images/2020/09/api_testing_4.png",alt:""}}),this._v("\n通过此测试，您可以更清楚地了解SuperTest对发出各种HTTP请求的有效程度。 在这里，您可以看到可以使用的不同HTTP方法，以及如何链接不同的方法（例如send和set）如何使您传递API请求所需的所有数据。 该测试可以通过几种方式进行改进，例如在执行过程中出现错误时清理帐户收藏夹，但我们将其作为练习留给读者。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('const request = require("supertest")("https://airportgap.dev-tester.com/api");\nconst expect = require("chai").expect;\n\nmodule.exports = {\n  request,\n  expect,\n};\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n  "scripts": {\n    "test": "mocha *.test.js"\n  },\n  // The rest of your configuration remains the same.\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"author"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[this._v("#")]),this._v(" author")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"company"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[this._v("#")]),this._v(" company")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"roles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[this._v("#")]),this._v(" roles")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"联系方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 联系方式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"wechat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[this._v("#")]),this._v(" wechat:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[this._v("#")]),this._v(" email:")])}],!1,null,null,null);e.default=r.exports}}]);