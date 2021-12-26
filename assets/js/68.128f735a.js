(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{281:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"pythonapi测试自动化框架发出http请求-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pythonapi测试自动化框架发出http请求-2","aria-hidden":"true"}},[e._v("#")]),e._v(" PythonAPI测试自动化框架发出HTTP请求-2")]),e._v(" "),n("p",[e._v("Python API测试自动化框架(第2部分)发出HTTP请求\n了解被测API\n让我们更好地了解本教程中将使用的API。\n我们将使用people-api，这是一组使用Python Flask，SQLAlchemy开发的CRUD HTTP操作，并使用sqlite作为数据库，并表示具有名字，姓氏和ID的人员列表\n要从github设置克隆people-api存储库，然后通过运行以下命令激活pipenv：\n皮壳\n通过执行以下命令，确保所有依赖项都已安装在pipenv中：\npipenv安装\n完成后，通过执行以下命令来初始化数据库\npython build_database.py\n这将为本地sqlite数据库添加一些虚拟记录\n最后，通过执行并确保该服务在测试过程中保持运行，在本地启动HTTP服务\npython server.py\n从日志中我们可以看到本地服务已启动，您还将看到对服务器的任何请求的日志")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('* Serving Flask app "config" (lazy loading)\n * Environment: production\n   WARNING: This is a development server. Do not use it in a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: on\n * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)\n * Restarting with stat\n * Debugger is active!\n * Debugger PIN: 105-008-664\n\n')])])]),n("p",[e._v("让我们导航至http://0.0.0.0:5000以查看该应用程序，\n注意：要查看此API的规范，我们可以导航至http://0.0.0.0:5000/api/ui/#/\n如您所见，此API支持基本的CRUD操作（CREATE，READ，UPDATE，DELETE）\nhttps://automationhacks.io/assets/images/2020/11/swagger.png\n如果您想处理这些请求，我还在此回购协议中的postman文件夹下包括了一个postman集合，其中已经设置了所有这些基本操作。\nAPI支持创建人员，更新人员，删除人员并能够读取数据库中的一个或多个用户。 在编写测试时，我们将看到这些操作。\n第一次测试，通过GET API读取\n让我们看看如何创建一个基本测试以使用已经导入的请求模块通过python发出此HTTP请求\n该API的curl为：\ncurl --location --request GET 'http://0.0.0.0:5000//api/people' "),n("br"),e._v("\n--header 'Accept: application/json'\n下面的代码片段连接了一个基本的HTTP GET请求，然后断言该服务向我们返回了200个状态代码，并且返回的人员列表中有kent。\n注意，我们使用来自assertpy模块的assert_that来进行流畅的断言，来自这些断言的失败消息非常可读，我们将在以后的文章中讨论更多有关此的消息。 请确保使用pipenv install assertpy将其安装在virtualenv中\n如果您想处理这些请求，我还在此回购协议中的postman文件夹下包括了一个postman集合，其中已经设置了所有这些基本操作。\nAPI支持创建人员，更新人员，删除人员并能够读取数据库中的一个或多个用户。 在编写测试时，我们将看到这些操作。\n第一次测试，通过GET API读取\n让我们看看如何创建一个基本测试以使用已经导入的请求模块通过python发出此HTTP请求\n该API的curl为：\ncurl --location --request GET'http://0.0.0.0:5000//api/people'"),n("br"),e._v("\n--header'接受：application / json'\n下面的代码片段连接了一个基本的HTTP GET请求，然后断言该服务向我们返回了200个状态代码，并且返回的人员列表中有kent。\n注意，我们使用来自assertpy模块的assert_that来进行流畅的断言，来自这些断言的失败消息非常可读，我们将在以后的文章中讨论更多有关此的消息。 请确保使用pipenv install assertpy将其安装在virtualenv中")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import requests\nfrom assertpy.assertpy import assert_that\nfrom config import BASE_URI\n\ndef test_read_all_has_kent():\n    # We use requests.get() with url to make a get request\n    response = requests.get(BASE_URI)\n    # response from requests has many useful properties\n    # we can assert on the response status code\n    assert_that(response.status_code).is_equal_to(requests.codes.ok)\n    # We can get python dict as response by using .json() method\n    response_text = response.json()\n    first_names = [people['fname'] for people in response_text]\n    assert_that(first_names).contains('Kent')\n\n")])])]),n("p",[e._v("在上面，我们使用BASE_URI变量来获取要使用的基本api URL。 它存储在config.py文件中，如下所示：\nBASE_URI ='http://0.0.0.0:5000/api/people'\n使用POST方法创建人\n好了，现在我们已经处理了GET API的基本情况，让我们看看如何发出POST请求。\n通常在Rest API中，当您需要创建资源时，可以使用POST方法\n下面是发出请求的cURL，我们的python代码将提供相同的标头，正文和URL来满足请求")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("curl --location --request POST 'http://0.0.0.0:5000//api/people' \\\n--header 'Content-Type: application/json' \\\n--header 'Accept: application/json' \\\n--data-raw '{\n   \"fname\": \"TAU\",\n   \"lname\": \"User\"\n }'\n\n")])])]),n("p",[e._v("这是我们要自动化的完整流程：\n在数据库中创建一个新人\n使用GET API验证是否存在新创建的用户\n进行过滤以查找创建的数据是否存在于系统中的所有用户中")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("def test_new_person_can_be_added():\n    unique_last_name = create_new_person()\n\n    # After user is created, we read all the users and then use list comprehension to find if the\n    # created user is present in the response list\n    peoples = requests.get(BASE_URI).json()\n    is_new_user_created = search_created_user_in(peoples, unique_last_name)\n    assert_that(is_new_user_created).is_not_empty()\n\ndef create_new_person():\n    # Ensure a user with a unique last name is created everytime the test runs\n    # Note: json.dumps() is used to convert python dict to json string\n    unique_last_name = f'User {str(uuid4())}'\n    payload = dumps({\n        'fname': 'New',\n        'lname': unique_last_name\n    })\n\n    # Setting default headers to show that the client accepts json\n    # And will send json in the headers\n    headers = {\n        'Content-Type': 'application/json',\n        'Accept': 'application/json'\n    }\n\n    # We use requests.post method with keyword params to make the request more readable\n    response = requests.post(url=BASE_URI, data=payload, headers=headers)\n    assert_that(response.status_code, description='Person not created').is_equal_to(requests.codes.no_content)\n    return unique_last_name\n\ndef search_created_user_in(peoples, last_name):\n    return [person for person in peoples if person['lname'] == last_name]\n\n\n")])])]),n("p",[e._v("在这里Ln 2：调用create_new_person（），在此我们首先创建要作为请求的一部分传递的正文\n请注意，在Ln 14上，我们使用json模块中的dumps（）方法将python dict转换为json字符串（序列化），并使用str（uuid4（））在Ln 13上获得唯一的姓氏，以确保我们没有冲突的数据 在每次测试中\n最后，我们使用发出POST请求\n响应= request.post（url = BASE_URI，data = payload，headers = headers）\n然后使用search_created_user_in（）方法查看数据库中是否存在新创建的用户\n使用DELETE方法删除一个人\n我们将如何删除方法？\n在此API中，我们可以通过传入person_id来删除人员，在尝试删除操作之前创建自己的测试数据而不是使用任何现有数据始终是一个好习惯，因为这可能会导致不确定性测试\n所以这是流程：\n创建一个新人\n使用读取的API获取人员ID\n点击删除端点并断言\n由于我们已经有创建和读取用户的方法，因此剩下的唯一事情就是通过确保在API路径参数中传递person_id来实现DELETE操作。我们使用出色的f字符串创建我们的URL，然后使用 requests.delete（）方法。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("def test_created_person_can_be_deleted():\n    persons_last_name = create_new_person()\n\n    peoples = requests.get(BASE_URI).json()\n    newly_created_user = search_created_user_in(peoples, persons_last_name)[0]\n\n    delete_url = f'{BASE_URI}/{newly_created_user[\"person_id\"]}'\n    response = requests.delete(delete_url)\n    assert_that(response.status_code).is_equal_to(requests.codes.ok)\n")])])]),n("p",[e._v("奖金\n请注意，在断言中我们没有为状态代码指定数值，请求提供了一个查找字典，您可以在其中轻松使用语法等可读英语指定代码，这绝对比每次解析X在MDN上的含义都更好-Mozilla开发人员网络 😉\n换句话说，我们可以将其写成request.codes.ok而不是200\n结论\n这只是图书馆可以进行的请求的一种体验。 有关其提供的所有功能的更多详细信息，请阅读requests文档，希望这对您如何使用请求进行HTTP调用有一个好主意。 在下一篇文章中，我们将讨论有关使用JSON / XML数据类型和断言的更多信息。 敬请关注。 ⏰\n这是从MDN读取的Content-Type和Accept标头\n如果您认为这篇文章很有用，请与朋友或同事分享，如果您有想法，我很乐意在Twitter或评论中聊天。 直到下一次。 快乐的测试和编码。")]),e._v(" "),n("h3",{attrs:{id:"author"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[e._v("#")]),e._v(" author")]),e._v(" "),n("p",[e._v("石头 磊哥 seven 随便叫")]),e._v(" "),n("h3",{attrs:{id:"company"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[e._v("#")]),e._v(" company")]),e._v(" "),n("p",[e._v("thoughtworks（离职了。。。。）")]),e._v(" "),n("p",[e._v("大家好，本人不才，目前依旧混迹于thoughtworks，做着一名看起来像全栈的QA，兴趣爱好前端，目前是thoughtworks 西安QA社区的leader，如果有兴趣分享话题，或者想加入tw，可以找我")]),e._v(" "),n("h3",{attrs:{id:"roles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[e._v("#")]),e._v(" roles")]),e._v(" "),n("p",[e._v("QA（营生） dev（front-end dev 兴趣爱好）")]),e._v(" "),n("h3",{attrs:{id:"联系方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系方式")]),e._v(" "),n("p",[e._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),e._v(" "),n("h4",{attrs:{id:"wechat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[e._v("#")]),e._v(" wechat:")]),e._v(" "),n("p",[e._v("qileiwangnan")]),e._v(" "),n("h4",{attrs:{id:"email"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[e._v("#")]),e._v(" email:")]),e._v(" "),n("p",[e._v("qileilove@gmail.com")])])}],!1,null,null,null);t.default=a.exports}}]);