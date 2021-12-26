(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{303:function(e,v,_){"use strict";_.r(v);var n=_(1),i=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("div",{staticClass:"content"},[_("p",[e._v('view: post\nlayout: post                          # Only in unique we use the "layout: post"\nlang: zh                              # Lang is required\nauthor:\ntitle: 49个自动化测试中最常见的selenium异常\ndescription:\nexcerpt:\ncover: true\ncoverAlt: /home.jpg\ndemo:\ncategories:')]),e._v(" "),_("ul",[_("li",[e._v("Agile QA\ntags:")]),e._v(" "),_("li",[e._v("Agile_QA")]),e._v(" "),_("li",[e._v("Agile testing")]),e._v(" "),_("li",[e._v("QA\ncreated_at: 2019-12-26 09:00\nupdated_at: 2016-11-26 09:00\nmeta:\n# If you have cover image")]),e._v(" "),_("li",[e._v("property: og:image\ncontent: /autores/my.jpeg")]),e._v(" "),_("li",[e._v("name: twitter:image\ncontent: /autores/my.jpeg")])]),e._v(" "),_("hr"),e._v(" "),_("h1",{attrs:{id:"_49个自动化测试中最常见的selenium异常"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_49个自动化测试中最常见的selenium异常","aria-hidden":"true"}},[e._v("#")]),e._v(" 49个自动化测试中最常见的selenium异常")]),e._v(" "),_("p",[e._v("开发人员总是在编写代码时考虑到不同的场景，但是在某些情况下，实现并不像预期的那样工作。同样的原则也适用于测试代码，这些代码主要用于测试现有的产品功能，发现bug，并使产品100%没有bug。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://www.lambdatest.com/blog/wp-content/uploads/2020/03/Image.jpg",alt:"Image"}})]),e._v(" "),_("p",[e._v("正确地说，真理永远比小说更陌生，当您执行Selenium测试自动化时，您会目睹很多“陌生的事物”。 在执行测试代码时遇到的这些事情或场景可能不是很常见，但是测试实现应该足够健壮以应对此类场景。 这些场景被恰当地称为例外，在使用Selenium进行自动浏览器测试时，您会遇到许多此类例外。")]),e._v(" "),_("p",[e._v("Selenium异常广泛用于处理错误情况并避免Web应用程序故障。 尽管在所有Selenium WebDriver代码中都可能发生许多Selenium异常，但某些Selenium异常特定于框架支持的编程语言，例如 Java，C＃，Python等。此博客介绍了常见的Selenium异常以及特定于语言的异常，它是详尽的列表，当您在代码中遇到异常时可能会有所帮助。")]),e._v(" "),_("p",[e._v("表中的内容")]),e._v(" "),_("p",[e._v("selenium异常简介")]),e._v(" "),_("p",[e._v("selenium异常的类别")]),e._v(" "),_("p",[e._v("selenium例外备忘单")]),e._v(" "),_("p",[e._v("常见的selenium异常")]),e._v(" "),_("p",[e._v("Java中的Selenium异常")]),e._v(" "),_("p",[e._v("C＃中的selenium异常")]),e._v(" "),_("p",[e._v("处理selenium异常")]),e._v(" "),_("p",[e._v("到本博客结尾，您将获得有关执行自动浏览器测试相关方案时经常使用的Selenium异常的完整介绍。")]),e._v(" "),_("p",[e._v("硒异常简介")]),e._v(" "),_("p",[e._v("异常（也称为故障）是在程序执行过程中发生的前所未有的事件。 发生异常时，正常程序的执行将停止，并执行相应的异常处理程序。 如果没有异常处理程序来处理该特定异常，程序将返回引发异常的调用函数，最终导致程序终止。")]),e._v(" "),_("p",[e._v("由于Selenium测试自动化是在不同的目标平台，设备和Web浏览器上执行的； 测试代码的行为可能会因浏览器类型或浏览器版本而异。 例如，某些属性可能是浏览器特定的，并且如果在执行自动浏览器测试的浏览器中不存在特定属性，则会引发异常。 通用属性名称也可以是特定于浏览器的，如果目标浏览器上没有相同的属性，则可能导致Selenium异常，例如NoSuchAttributeException。")]),e._v(" "),_("p",[e._v("正确处理异常是一个好习惯，因为未处理的异常会导致程序失败，从而最终影响产品体验。 异常对象包含有关异常类型，调用堆栈和其他有用信息的信息，这些信息将有助于调试并使代码更安全。")]),e._v(" "),_("p",[e._v("硒自动化的11个最佳单元测试框架")]),e._v(" "),_("p",[e._v("硒异常类别")]),e._v(" "),_("p",[e._v("Selenium异常分为两大类-已检查的异常和未检查的异常。 根据捕获异常的时间（即编译时间或运行时）对这些异常进行分类。")]),e._v(" "),_("p",[e._v("A.检查异常")]),e._v(" "),_("p",[e._v("Selenium测试自动化中的检查异常是在测试代码实现过程中处理的，例如 NoSuchAttributeException等。检查异常的处理发生在编译时本身。")]),e._v(" "),_("p",[e._v("如果某些方法引发了检查的异常，则最好定义一个处理该特定异常的处理程序。")]),e._v(" "),_("p",[e._v("B.未检查的异常")]),e._v(" "),_("p",[e._v("Selenium测试自动化中未检查的异常会在运行时发生，并且比被检查的异常会产生严重的影响。 例如 ElementNotVisibleException，MoveTargetOutOfBoundsException等。")]),e._v(" "),_("p",[e._v("Java中的异常可以选中或取消选中，而C ++中的所有异常都选中。 在与浏览器自动测试相关的场景中，经常会遇到未经检查的异常，因为这些测试涉及Web浏览器和操作系统的不同组合和版本。")]),e._v(" "),_("p",[e._v("另请阅读：使用Selenium WebDriver测试自动化的22条实用技巧")]),e._v(" "),_("p",[e._v("硒例外备忘单")]),e._v(" "),_("p",[e._v("在本地或远程Selenium网格上执行自动浏览器测试时，您会遇到不同类型的异常。 一些Selenium异常特定于用于编写Selenium测试自动化方案的编程语言。")]),e._v(" "),_("p",[e._v("常见的硒异常")]),e._v(" "),_("p",[e._v("以下是所有Selenium WebDriver代码中可能发生的一些常见Selenium异常。")]),e._v(" "),_("p",[e._v("ElementClickInterceptedException")]),e._v(" "),_("p",[e._v("由于以某种方式隐藏了接收到Click命令的元素，因此无法正确执行Element Click命令。")]),e._v(" "),_("p",[e._v("ElementNotInteractableException")]),e._v(" "),_("p",[e._v("即使目标Web元素存在于DOM上，但与该元素的交互将击中另一个Web元素，也会引发此“ ElementNotInteractableException” Selenium异常。")]),e._v(" "),_("p",[e._v("ElementNotSelectableException")]),e._v(" "),_("p",[e._v("当目标元素存在于DOM上但由于无法选择而无法与之交互时，就会发生此Selenium异常。 例如，与脚本元素进行交互时将抛出此异常。")]),e._v(" "),_("p",[e._v("ElementNotVisibleException")]),e._v(" "),_("p",[e._v("Selenium异常的最常见类型，即使存在web元素但不可见，也将引发该异常。 由于该元素不可见，因此无法与该元素进行任何交互。")]),e._v(" "),_("p",[e._v("在Selenium测试自动化中通常会遇到这种情况，其中Web元素上的相关操作（点击，阅读等）例如 尝试了按钮，标签等，但是该元素从视图中隐藏了。 另一个示例是HTML中定义的具有隐藏类型的元素。")]),e._v(" "),_("p",[e._v("ErrorInResponseException")]),e._v(" "),_("p",[e._v("当服务器端发生某些问题或错误时，将抛出此Selenium异常。 如果用户名和访问密钥的错误组合用于访问基于云的远程Selenium Grid，与远程Web驱动程序服务器进行通信或与Firefox扩展（或Chrome附加组件）进行通信，则可能会发生这种情况。")]),e._v(" "),_("p",[e._v("服务器端错误的一些常见响应代码是：")]),e._v(" "),_("p",[e._v("401 –未经授权")]),e._v(" "),_("p",[e._v("400 – BadRequest")]),e._v(" "),_("p",[e._v("500内部服务器错误")]),e._v(" "),_("p",[e._v("409 –冲突")]),e._v(" "),_("p",[e._v("403 –禁止")]),e._v(" "),_("p",[e._v("405 – MethodNotAllowed")]),e._v(" "),_("p",[e._v("ImeActivationFailedException")]),e._v(" "),_("p",[e._v("如果IME（输入法引擎）的激活由于某种原因失败，则抛出此异常。")]),e._v(" "),_("p",[e._v("解决此问题的理想方法是检查计算机上是否有IME支持。")]),e._v(" "),_("p",[e._v("ImeNotAvailableException")]),e._v(" "),_("p",[e._v("如果IME（输入法引擎）不可用，则抛出此Selenium异常。 如果在测试计算机上没有IME支持，则会为每个与IME相关的方法抛出ImeNotAvailableException。")]),e._v(" "),_("p",[e._v("InsecureCertificateException")]),e._v(" "),_("p",[e._v("过期或无效的TLS证书的使用导致用户代理引发证书警告。")]),e._v(" "),_("p",[e._v("NoSuchFrameException")]),e._v(" "),_("p",[e._v("当要切换到的帧不存在时，将引发NoSuchFrameException Selenium异常。")]),e._v(" "),_("p",[e._v("为避免此类Selenium异常，建议在自动浏览器测试代码中添加有关切换到框架的方式的健全性检查。 检查使用的帧索引是否正确。 可以添加几毫秒（ms）的额外等待时间，以确保完成帧加载。")]),e._v(" "),_("p",[e._v("NoSuchWindowException")]),e._v(" "),_("p",[e._v("当切换到的窗口目标不存在时，抛出此异常。 通过使用window_handles可以解决这些情况，以便获得当前的活动窗口集。 窗口句柄可用于对窗口句柄执行适当的操作。")]),e._v(" "),_("p",[e._v("RemoteDriverServerException")]),e._v(" "),_("p",[e._v("当浏览器功能的错误组合/字段导致服务器不发送响应时，将引发此异常。 为避免此类Selenium异常，从（平台+浏览器），（平台+浏览器+浏览器版本）等的有效组合的角度彻底检查Selenium浏览器功能非常重要。")]),e._v(" "),_("p",[e._v("ScreenshotException")]),e._v(" "),_("p",[e._v("顾名思义，当无法进行屏幕捕获时会抛出此Selenium异常。这种情况很可能出现在网页/ Web应用程序中，其中敏感信息例如 用户输入用户名，密码，银行信息等。 在这种情况下，由于屏幕截图限制，无法捕获屏幕截图")]),e._v(" "),_("p",[e._v("在此，屏幕快照限制会阻止捕获或记录屏幕。")]),e._v(" "),_("p",[e._v("SessionNotCreatedException")]),e._v(" "),_("p",[e._v("当新会话的创建不成功时，将发生此异常。")]),e._v(" "),_("p",[e._v("InvalidArgumentException")]),e._v(" "),_("p",[e._v("当传递的参数无效或格式错误时，将引发InvalidArgumentException异常。")]),e._v(" "),_("p",[e._v("更好的做法是使用Selenium测试自动化代码中的适当等待时间（以毫秒为单位）来验证是否加载了被测网页。")]),e._v(" "),_("p",[e._v("InvalidCookieDomainException")]),e._v(" "),_("p",[e._v("当尝试添加cookie的URL /域与当前URL不同时，将抛出此Selenium异常。")]),e._v(" "),_("p",[e._v("要处理此异常，您应该导航到必须在其中添加Cookie的正确URL。")]),e._v(" "),_("p",[e._v("InvalidCoordinatesException")]),e._v(" "),_("p",[e._v("将错误的坐标提供给交互操作时，将引发此特定异常。")]),e._v(" "),_("p",[e._v("这也意味着，依赖于鼠标位置（例如单击）的动作之前没有进行移动操作，或者为移动操作提供了无效的坐标。")]),e._v(" "),_("p",[e._v("InvalidElementStateException")]),e._v(" "),_("p",[e._v("当命令无法完成时会抛出此Selenium异常，因为该元素处于无效状态或未启用该元素来执行该操作。 如果在不可编辑且不可重置的Web元素上尝试执行诸如清除元素之类的操作，可能会导致这种情况。")]),e._v(" "),_("p",[e._v("要在Selenium测试自动化中处理此类异常，建议在对该元素执行所需的操作之前等待该元素被启用。")]),e._v(" "),_("p",[e._v("InvalidSelectorException")]),e._v(" "),_("p",[e._v("如果在不同版本之间更改了选择器名称，则可能会意外使用无效或不正确的选择器来定位Web元素。 如果用于查找Web元素的选择器未返回WebElement，则抛出InvalidSelectorException。")]),e._v(" "),_("p",[e._v("当XPath表达式是选择器并且XPath无效时，通常会发生这种情况。 这导致无法找到所需的Web元素。")]),e._v(" "),_("p",[e._v("InvalidSessionIdException")]),e._v(" "),_("p",[e._v("如果在Selenium测试自动化实现中使用的会话ID无效，即不在当前活动会话列表中，则抛出此异常。 如果会话处于非活动状态或从未存在过，则可能发生这种情况。")]),e._v(" "),_("p",[e._v("InvalidSwitchToTargetException")]),e._v(" "),_("p",[e._v("如果要切换到的框架或窗口目标无效，则会出现此Selenium异常。在切换到该框架之前，请使用“检查工具”验证目标框架的XPath，这一点很重要。")]),e._v(" "),_("p",[e._v("JavascriptException")]),e._v(" "),_("p",[e._v("执行JavaScript代码时出现问题时，抛出此异常。")]),e._v(" "),_("p",[e._v("NoAlertPresentException")]),e._v(" "),_("p",[e._v("当切换到屏幕上尚不存在的警报时，会发生这种情况。 处理警报的理想方法是检查警报是否存在，然后在Alert（）类上调用所需的操作。")]),e._v(" "),_("p",[e._v("MoveTargetOutOfBoundsException")]),e._v(" "),_("p",[e._v("如果提供给ActionChains（）move方法的目标超出范围（即无效或超出文档/网页），则抛出Selenium异常。")]),e._v(" "),_("p",[e._v("在调用ActionChains（）类的move方法之前，应该始终检查我们尝试移动的位置，并仅在屏幕上存在该位置时才执行该操作。")]),e._v(" "),_("p",[e._v("NoSuchAttributeException")]),e._v(" "),_("p",[e._v("这是在执行自动浏览器测试时肯定会遇到的少数Selenium异常之一。 如果找不到元素的属性，则抛出NoSuchAttributeException。")]),e._v(" "),_("p",[e._v("要处理此异常，应该为执行测试的浏览器检查属性的存在。 同一属性的不同属性名称可能因浏览器而异，处理效率低下可能导致此异常。")]),e._v(" "),_("p",[e._v("避免发生此异常的另一种方法是通过基于DOM上元素的新详细信息来更改属性。")]),e._v(" "),_("p",[e._v("NoSuchCookieException")]),e._v(" "),_("p",[e._v("当当前浏览上下文的活动文档的关联cookie中不存在与给定路径名匹配的cookie时，就会发生这种Selenium异常。")]),e._v(" "),_("p",[e._v("NoSuchElementException")]),e._v(" "),_("p",[e._v("当用于访问元素的定位器无效或试图对不在DOM上的元素执行操作时，将引发NoSuchElementException。 在这两种情况下，都不会找到该元素。")]),e._v(" "),_("p",[e._v("要处理此Selenium异常，应检查选择器是否正确，如果正确，则还需要额外等待以确保WebElement的外观。")]),e._v(" "),_("p",[e._v("StaleElementReferenceException")]),e._v(" "),_("p",[e._v("当对元素的引用不在页面的DOM上时，就会发生Selenium异常。 简而言之，该元素已腐烂或陈旧。")]),e._v(" "),_("p",[e._v("此特定Selenium异常的某些可能原因是：")]),e._v(" "),_("p",[e._v("该元素可能在刷新的iFrame中。")]),e._v(" "),_("p",[e._v("该页面可能已刷新，并且要访问的元素不再是当前页面的一部分。")]),e._v(" "),_("p",[e._v("由于元素已定位，因此可以删除该元素并将其重新添加到屏幕。")]),e._v(" "),_("p",[e._v("处理此异常的可能解决方案是使用动态XPath在循环中查找所需的元素，并在找到元素后中断循环。")]),e._v(" "),_("p",[e._v("TimeoutException")]),e._v(" "),_("p",[e._v("当当前正在执行的命令未在预期的时间范围内完成时，就会发生TimeoutException。")]),e._v(" "),_("p",[e._v("解决此异常的可能解决方案是增加命令完成执行的等待时间。 但是，应为等待时间选择理想值，否则可能会延迟进一步执行。")]),e._v(" "),_("p",[e._v("UnableToSetCookieException")]),e._v(" "),_("p",[e._v("在Selenium WebDriver无法设置cookie的情况下，会发生此Selenium异常。")]),e._v(" "),_("p",[e._v("可以添加额外的等待时间，以便为域加载Cookie。")]),e._v(" "),_("p",[e._v("UnexpectedAlertPresentException")]),e._v(" "),_("p",[e._v("当出现意外警报时会发生。 发生此异常的常见原因是由于页面上出现模态窗口/弹出窗口而导致Selenium WebDriver命令被阻止。")]),e._v(" "),_("p",[e._v("UnexpectedTagNameException")]),e._v(" "),_("p",[e._v("如果支持类无法找到所需的Web元素，则会发生此Selenium异常。")]),e._v(" "),_("p",[e._v("UnknownMethodException")]),e._v(" "),_("p",[e._v("这是常见的Selenium异常之一，当请求的命令能够匹配已知URL但无法匹配该URL的方法时，就会发生这种异常。")]),e._v(" "),_("p",[e._v("要处理此异常，您应该检查与URL一起传递的方法是否有效。")]),e._v(" "),_("p",[e._v("WebDriverException")]),e._v(" "),_("p",[e._v("这是由于Selenium WebDriver和目标Web浏览器的绑定不兼容而发生的基本WebDriver异常。")]),e._v(" "),_("p",[e._v("要处理此异常，您应该下载与相应的Web浏览器兼容的Selenium WebDriver库。")]),e._v(" "),_("p",[e._v("Java中的Selenium异常")]),e._v(" "),_("p",[e._v("一些Selenium异常特定于用于测试自动化的特定编程语言。 除了上一节中介绍的Selenium中的常见异常外，以下是特定于Java语言的Selenium异常：")]),e._v(" "),_("p",[e._v("ConnectionClosedException")]),e._v(" "),_("p",[e._v("与Selenium WebDriver的连接丢失时，将引发此异常。")]),e._v(" "),_("p",[e._v("ErrorHandler.UnknownServerException")]),e._v(" "),_("p",[e._v("服务器返回错误而没有堆栈跟踪时，它将用作占位符。")]),e._v(" "),_("p",[e._v("JsonException")]),e._v(" "),_("p",[e._v("当您能够获得未创建会话的会话功能时，将引发此异常。")]),e._v(" "),_("p",[e._v("NoSuchSessionException")]),e._v(" "),_("p",[e._v("在执行WebDriver.quit（）之后调用命令时，将抛出此Selenium异常。 由于WebDriver实例不再存在，因此对该特定WebDriver实例的任何操作都将返回此异常。")]),e._v(" "),_("p",[e._v("NotFoundException")]),e._v(" "),_("p",[e._v("当DOM上不存在任何元素时，将发生此异常。")]),e._v(" "),_("p",[e._v("ScriptTimeoutException")]),e._v(" "),_("p",[e._v("当ASync脚本的执行未在给定的时间限制内完成时，将引发该错误。")]),e._v(" "),_("p",[e._v("UnhandledAlertException")]),e._v(" "),_("p",[e._v("此Selenium异常是WebDriver异常的子类。 即使存在警报，WebDriver也无法执行警报操作时，将引发该事件。")]),e._v(" "),_("p",[e._v("UnreachableBrowserException")]),e._v(" "),_("p",[e._v("UnreachableBrowserException表示与由自动化测试代码控制的Web浏览器通信时出现问题。 也可能是由于与Selenium服务器通信时出现问题。")]),e._v(" "),_("p",[e._v("如果远程Selenium WebDriver或Selenium网格的服务器地址无效，则会发生这种情况。 浏览器实例也有可能在Selenium测试自动化周期中死亡。")]),e._v(" "),_("p",[e._v("UnsupportedCommandException")]),e._v(" "),_("p",[e._v("当远程Selenium WebDriver发送的命令无效时，抛出此异常。")]),e._v(" "),_("p",[e._v("NoSuchContextException")]),e._v(" "),_("p",[e._v("此异常在移动测试中发生，并由ContextAware.context（String）引发")]),e._v(" "),_("p",[e._v("NotConnectedException")]),e._v(" "),_("p",[e._v("当在规定的时间段内尝试连接后，对特定主机或远程Selenium网格的尝试失败时，将引发此Selenium异常。")]),e._v(" "),_("p",[e._v("SeleniumException")]),e._v(" "),_("p",[e._v("顾名思义，当Selenium命令失败时，会抛出Selenium异常。")]),e._v(" "),_("p",[e._v("UnableToCreateProfileException")]),e._v(" "),_("p",[e._v("当使用某些自定义配置文件打开要执行Selenium测试自动化的浏览器，但WebDriver或浏览器在支持该配置文件时出现问题时，将发生UnableToCreateProfileException。")]),e._v(" "),_("p",[e._v("要处理此异常，建议检查安装的Selenium WebDriver版本以及Web浏览器支持的配置文件。")]),e._v(" "),_("p",[e._v("UrlChecker.TimeoutException")]),e._v(" "),_("p",[e._v("当浏览器尝试一定时间后无法打开被测URL时，抛出此异常。")]),e._v(" "),_("p",[e._v("要处理此Selenium异常，必须在尝试在浏览器（测试中）中打开URL之前检查URL的正确性。")]),e._v(" "),_("p",[e._v("C＃中的硒异常")]),e._v(" "),_("p",[e._v("特定于C＃的Selenium异常是：")]),e._v(" "),_("p",[e._v("DriverServiceNotFoundException")]),e._v(" "),_("p",[e._v("当在其上执行自动浏览器测试的元素不可见时，将抛出DriverServiceNotFoundException类下的异常。")]),e._v(" "),_("p",[e._v("要处理此异常，仅在确认Web元素的存在可见性之后，您可以等待页面完全加载并执行Selenium WebDriver命令。")]),e._v(" "),_("p",[e._v("WebDriverTimeoutException")]),e._v(" "),_("p",[e._v("WebDriverTimeoutException类表示执行操作时发生错误时引发的异常。")]),e._v(" "),_("p",[e._v("奖励积分，我们在此提供一个韵母号码")]),e._v(" "),_("p",[e._v("XPathLookupException")]),e._v(" "),_("p",[e._v("XPath查找过程中发生错误时引发的Selenium异常。")]),e._v(" "),_("p",[e._v("常见的JavaScript错误以及如何处理")]),e._v(" "),_("p",[e._v("处理硒异常")]),e._v(" "),_("p",[e._v("Selenium异常的处理方式因一种编程语言而异。 但是，最重要的是应该处理硒异常，因为该异常提供了非常关键的信息。")]),e._v(" "),_("p",[e._v("以下是在流行的编程语言中如何处理Selenium异常的简要要点：")]),e._v(" "),_("p",[e._v("Python –如果您使用Python进行自动浏览器测试，则selenium.common.exceptions中提供了异常类，应在使用该包中的任何命令之前将其导入。")]),e._v(" "),_("p",[e._v("异常是使用try ... except块进行处理的，其中try块使您能够测试代码是否存在错误，except块可以帮助您处理错误，并且无论try块是否引发错误，都将执行可选的finally块。")]),e._v(" "),_("p",[e._v("Java – Selenium异常是使用try-catch方法在Java中处理的。 try块是该块的开始，catch块包含解决异常的实现。 catch块放置在try块的末尾。")]),e._v(" "),_("p",[e._v("与Python一样，您也可以使用finally关键字创建一个代码块，无论是否发生异常，该代码块都会执行。")]),e._v(" "),_("p",[e._v("C＃–与Java一样，Selenium异常使用try-catch语句处理。 try块包含可能导致异常的代码。 在成功执行代码或引发异常之前，将执行try块下的代码。 catch块包含不同异常的处理程序。")]),e._v(" "),_("p",[e._v("另请阅读：Selenium自动化中的常见挑战及其解决方法？")]),e._v(" "),_("p",[e._v("总而言之")]),e._v(" "),_("p",[e._v("异常在开发中很常见，但必须谨慎处理。 了解不同的Selenium异常很重要，因为这有助于开发更强大的自动浏览器测试脚本。")]),e._v(" "),_("p",[e._v("Selenium测试自动化中的异常处理有助于识别与浏览器/平台/设备有关的跨浏览器兼容性问题。")]),e._v(" "),_("p",[e._v("您用来处理Selenium异常的机制有哪些，请在注释部分保留您的经验……")])])}],!1,null,null,null);v.default=i.exports}}]);