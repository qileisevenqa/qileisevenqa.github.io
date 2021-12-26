(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{378:function(a,e,t){"use strict";t.r(e);var n=t(1),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("p",[a._v("#测试数据管理策略")]),a._v(" "),t("p",[a._v("你好 所有的读者,")]),a._v(" "),t("p",[a._v("今天我将讨论在运行自动化测试时处理测试数据的一些不同方法和权衡。")]),a._v(" "),t("h2",{attrs:{id:"database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[a._v("#")]),a._v(" Database")]),a._v(" "),t("p",[a._v("在使用SQL、mysql或postgresql脚本运行测试之前注入数据是最常见的方法之一。因此，您可以注入测试所需的数据并跳过所有设置，这不是所有场景的目标，对吗?")]),a._v(" "),t("p",[a._v("对于实际需要测试数据创建的场景，则不需要使用这种脚本。例如，在javascript中，你可以添加一个设置/数据管理类，一个@BeforeAll，然后像这样:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('var mysql = require(\'mysql\');\nvar con = mysql.createConnection({\n     host: "localhost",\n     user: "root",\n     password: "12345",\n     database: "javatpoint"\n});  \n\ncon.connect(function(err) {\n     if (err) throw err;\n       console.log("Connected!");\n       var sql = "INSERT INTO employees (id, name, age, city) VALUES (\'1\', \'Ajeet Kumar\', \'27\', \'Allahabad\')"; \n       con.query(sql, function (err, result) {\n     if (err) throw err;\n       console.log("1 record inserted");  \n     });\n});\n\n')])])]),t("p",[a._v("然后您可以使用@TearDown和@AfterAll函数来删除在测试期间使用的创建的数据。")]),a._v(" "),t("h2",{attrs:{id:"文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件")]),a._v(" "),t("p",[a._v("例如，如果您正在运行一些API测试，您可能希望为每个场景注入静态数据。您可以创建一个json文件，并添加将在自动化过程中使用的所有字段和值")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' { \n   name: "John", \n   age: 31, \n   city: "New York" \n},\n{\n   name: "Rafa", \n   age: 29, \n   city: "London" \n}\n')])])]),t("p",[a._v("然后您可以加载此文件以在测试期间使用。您可以预先创建此数据，但随后您需要确保该数据始终存在，否则您需要再次创建(在测试期间或手动创建)。")]),a._v(" "),t("h2",{attrs:{id:"objects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objects","aria-hidden":"true"}},[a._v("#")]),a._v(" Objects")]),a._v(" "),t("p",[a._v("您可以使用自动测试所需的数据来创建对象，例如，您可以使用Javascript创建字典：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('\nvar dict = {\n  FirstName: "Rafa",\n  Age: 30,\n  Country: "UK"\n};\n\n')])])]),t("p",[a._v("然后再次需要确保将在运行时创建此数据，可能是在@BeforeAll函数或Setup类中，或者这可能是您已经在环境中创建的，并且需要确保将 运行测试时请在那里，否则您需要重新创建它。")]),a._v(" "),t("h2",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),t("p",[a._v("如果您可以控制数据库或QA环境的部署，那么这意味着您还可以在运行测试时操纵数据库。")]),a._v(" "),t("p",[a._v("如果使用docker创建环境，则可以添加卷，甚至可以使用docker-compose为数据库添加seed。")]),a._v(" "),t("h3",{attrs:{id:"volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume","aria-hidden":"true"}},[a._v("#")]),a._v(" Volume")]),a._v(" "),t("p",[a._v("与将数据持久保存在容器的可写层中相比，卷通常是更好的选择，因为卷不会增加使用卷的容器的大小，并且卷的内容存在于给定容器的生命周期之外。")]),a._v(" "),t("p",[a._v("您可以将数据库（json文件，.db）完全推送到docker容器：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" docker run -it --name my-directory-test -v /hostvolume:/containervolume centos /bin/bash\n")])])]),t("h3",{attrs:{id:"seed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seed","aria-hidden":"true"}},[a._v("#")]),a._v(" Seed")]),a._v(" "),t("p",[a._v("编写一个小的脚本，该脚本生成随机的和变化的数据并将其写入数据库。 然后，您可以将此脚本包装到自己的Docker映像中，以便通过docker-compose自动执行它们。")]),a._v(" "),t("p",[a._v("在此示例中，我使用的是mongoDB数据库：\ndocker-compose.yml")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("version: '1.0'\n\nservices:\n\n  mongodb:\n    image: mongo\n    container_name: mongo\n    ports:\n      - 27017:27017\n\n\n  mongo-seed:\n    build: .\n    environment:\n      - MONGODB_HOST=mongo\n      - MONGODB_PORT=27017\n    volumes:\n      - ./config/db-seed:/data\n    depends_on:\n      - mongo\n    command: [\n      \"mongoimport --host mongo --port 27017 --db testautomation --mode upsert --type json --file data.json --jsonArray\"\n      ]\n\n")])])]),t("p",[a._v("data.json")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('[\n  {\n    "name": "Peter Parker",\n    "email": "spiderman@gmail.com",\n    "age": 28\n  },\n  {\n    "name": "Bruce Wayne",\n    "email": "batman@gmail.com",\n    "age": 48\n   }\n]\n')])])]),t("h2",{attrs:{id:"scenarios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scenarios","aria-hidden":"true"}},[a._v("#")]),a._v(" Scenarios")]),a._v(" "),t("p",[a._v("如果您使用的是Gherkin语法，则意味着您也可以在场景中间添加数据，然后在自动化过程中使用它们。 因此，类似：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Scenario: Correct number of movies found by superhero\nGiven I have the following movies\n| Batman Begins | Batman |\n| Wonder Woman | Wonder Woman |\n| Wonder Woman 1984 | Wonder Woman |\nWhen I search for movies by superhero Wonder Woman\nThen I find 2 movies\n")])])]),t("p",[a._v("然后，您可以从步骤定义中获取此数据，并在测试中使用。")]),a._v(" "),t("p",[a._v("您可能还有其他方式来创建和管理测试数据，但是无论您决定采用哪种方法，都要确保方案是独立的，以及之后是否可以清理环境数据（除非您现在暂时决定在环境中保存静态数据） ），然后将其清洁。")]),a._v(" "),t("h3",{attrs:{id:"author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[a._v("#")]),a._v(" author")]),a._v(" "),t("p",[a._v("石头 磊哥 seven 随便叫")]),a._v(" "),t("h3",{attrs:{id:"company"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[a._v("#")]),a._v(" company")]),a._v(" "),t("p",[a._v("thoughtworks")]),a._v(" "),t("p",[a._v("大家好，本人不才，目前依旧混迹于thoughtworks，做着一名看起来像全栈的QA，兴趣爱好前端，目前是thoughtworks 西安QA社区的leader，如果有兴趣分享话题，或者想加入tw，可以找我")]),a._v(" "),t("h3",{attrs:{id:"roles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[a._v("#")]),a._v(" roles")]),a._v(" "),t("p",[a._v("QA（营生） dev（front-end dev 兴趣爱好）")]),a._v(" "),t("h3",{attrs:{id:"联系方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 联系方式")]),a._v(" "),t("p",[a._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),a._v(" "),t("h4",{attrs:{id:"wechat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[a._v("#")]),a._v(" wechat:")]),a._v(" "),t("p",[a._v("qileiwangnan")]),a._v(" "),t("h4",{attrs:{id:"email"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[a._v("#")]),a._v(" email:")]),a._v(" "),t("p",[a._v("qileilove@gmail.com")])])}],!1,null,null,null);e.default=r.exports}}]);