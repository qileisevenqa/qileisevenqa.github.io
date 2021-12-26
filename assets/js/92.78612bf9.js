(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{305:function(e,t,n){"use strict";n.r(t);var a=n(1),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"从-cypress-测试中调用-graphql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从-cypress-测试中调用-graphql","aria-hidden":"true"}},[e._v("#")]),e._v(" 从 Cypress 测试中调用 GraphQL")]),e._v(" "),n("h2",{attrs:{id:"把所有的-todos-都取出来"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#把所有的-todos-都取出来","aria-hidden":"true"}},[e._v("#")]),e._v(" 把所有的 todos 都取出来")]),e._v(" "),n("p",[e._v("首先，让我们看看我们的 Cypress 测试如何获取所有 todo 项。例如，这允许我们确认应用程序所显示的内容。让我们使用 cy.request 命令获取这些项。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cypress/integration/request-spec.js\n\nit('fetches all items', () => {\n  cy.request({\n    method: 'POST',\n    url: 'http://localhost:3000/',\n    body: {\n      operationName: 'allTodos',\n      query: `\n        query allTodos {\n          allTodos {\n            id,\n            title,\n            completed\n          }\n        }\n      `,\n    },\n  })\n})\n")])])]),n("p",[e._v("提示: 如果您不确定 body 对象，请查看应用程序正在进行的网络调用，并从那里复制 GraphQL 查询。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://glebbahmutov.com/blog/images/request-graphql/all-todos.png",alt:""}}),e._v("\n从响应对象中，我们可以得到 todos 列表，并确认它们的数量和其他细节。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cy.request({ ... })\n  .its('body.data.allTodos')\n  .should('have.length', 2)\n")])])]),n("p",[e._v("注意，如果您不知道项目的精确数量，但是应该在 > = 0的项目使用.Gte 断言")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cy.request({ ... })\n  .its('body.data.allTodos')\n  .should('have.length.gte', 0)\n")])])]),n("p",[e._v("使用应用程序客户端\n与直接使用 cy.request 不同，我们可以使用应用程序使用的同一个 GraphQL 客户端获取项目！只需确保将“ cache”设置为 false，以避免应用程序和测试运行程序客户端的内存缓存之间出现竞争条件。")]),e._v(" "),n("p",[e._v("假设这是一个源文件，其中导出了 GraphQL 客户机")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("src/graphql-client.js\n\n// imports and init code\nexport const client = new ApolloClient({\n  link: concat(operationNameLink, httpLink),\n  fetchOptions: {\n    mode: 'no-cors',\n  },\n  cache: new InMemoryCache(),\n})\n")])])]),n("p",[e._v("然后，我们可以通过从 spec 文件导入 GraphQL 客户机创建一个实例。注意: 这将从应用程序的 GraphQL 客户端实例中创建一个单独的客户端实例。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { gql } from '@apollo/client'\nimport { client } from '../../src/graphql-client'\n\nit('fetches all items using application client', () => {\n  // make a GraphQL query using the app's client\n  // https://www.apollographql.com/docs/react/data/queries/\n  const query = gql`\n    query allTodos {\n      allTodos {\n        id\n        title\n        completed\n      }\n    }\n  `\n\n  // use https://on.cypress.io/wrap to let the Cypress test\n  // wait for the promise returned by the \"client.query\" to resolve\n  cy.wrap(\n    client.query({\n      query,\n      // it is important to AVOID any caching here\n      // and fetch the current server data\n      fetchPolicy: 'no-cache',\n    }),\n  )\n    .its('data.allTodos')\n    .should('have.length', 2)\n})\n")])])]),n("p",[e._v("测试通过了")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://glebbahmutov.com/blog/images/request-graphql/client.png",alt:""}})]),e._v(" "),n("p",[e._v("使用加载的 GraphQL 客户机请求待办事项列表")]),e._v(" "),n("p",[e._v("添加项目")]),e._v(" "),n("p",[e._v("使用 GraphQL 客户机，甚至在应用程序和 specs 之间共享查询都非常方便。例如，让我们创建一个条目，然后确认它在应用程序中是可见的。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cypress/integration/request-spec.js\n\nimport { gql } from '@apollo/client'\nimport { client } from '../../src/graphql-client'\n\nit('creates one item', () => {\n  const random = Cypress._.random(1e5)\n  const title = `test ${random}`\n  cy.log(`Adding item ${title}`)\n    .then(() => {\n      const query = gql`\n        mutation AddTodo($title: String!) {\n          createTodo(title: $title, completed: false) {\n            id\n          }\n        }\n      `\n\n      // by returning the promise returned by the \"client.query\"\n      // call from the .then callback, we force the test to wait\n      // and yield the result to the next Cypress command or assertion\n      return client.query({\n        query,\n        variables: {\n          title,\n        },\n        // it is important to AVOID any caching here\n        // and fetch the current server data\n        fetchPolicy: 'no-cache',\n      })\n    })\n    // use zero timeout to avoid \"cy.its\" retrying\n    // since the response object is NOT going to change\n    .its('data.createTodo', { timeout: 0 })\n    .should('have.property', 'id')\n\n  // the item we have created should be shown in the list\n  cy.visit('/')\n  cy.contains('.todo', title)\n})\n")])])]),n("p",[n("img",{attrs:{src:"https://glebbahmutov.com/blog/images/request-graphql/created.png",alt:""}}),e._v("\n使用 GraphQL 变异创建一个项目")]),e._v(" "),n("p",[e._v("如果 spec 文件从应用程序的源文件导入 GraphQL 客户机，那么它将创建自己的实例，独立于应用程序在 iframe 中创建的 GraphQL 客户机。这有一些优点，例如，上面的测试可以在 cy.visit 命令加载应用程序之前执行 GraphQL 变异。但是如果你想在应用程序和 spec 之间共享 GraphQL 客户端，有一种方法:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export const client = new ApolloClient({\n  ...\n}\n\nif (window.Cypress) {\n  window.graphqlClient = client\n}\n")])])]),n("p",[e._v("我们将应用程序创建的客户机引用设置为窗口对象的属性。从规范中，我们可以获取这个属性并使用它来侦查和存根客户机方法调用。下面是一个典型的测试:")]),e._v(" "),n("p",[e._v("访问该页面。应用程序创建一个 GraphQL 客户端对象并将其设置为window.graphqlClient value.")]),e._v(" "),n("p",[e._v("因此，我们可以直接重试，直到我们使用cy.visit('/').should('have.property', 'graphqlClient') assertion. 断言\n一旦我们有了对象引用，我们就可以使用cy.spy and 及cy.stub to observe / stub the calls the application is making.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("   it('adds a todo', () => {\n  // set up the spy on \"client.mutate\" method\n  cy.visit('/')\n    .should('have.property', 'graphqlClient')\n    .then((client) => {\n      cy.spy(client, 'mutate').as('mutate')\n    })\n  // have the application make the call by using the UI\n  cy.get('.new-todo').type('Test!!!!{enter}')\n  // confirm the call has happened with expected variables\n  cy.get('@mutate')\n    .should('have.been.calledOnce')\n    .its('firstCall.args.0.variables')\n    .should('deep.include', {\n      title: 'Test!!!!',\n    })\n    .and('have.property', 'id')\n})\n")])])]),n("p",[n("img",{attrs:{src:"https://glebbahmutov.com/blog/images/request-graphql/spy1.png",alt:""}})]),e._v(" "),n("p",[e._v("别名\n提示: 我们使用 cy.as 命令给了间谍一个化名“ mutate”。后面的“ this [ alias name ]”语法使用测试上下文获取这些别名。因为(名称)命令已经结束。Cypress 强制所有命令逐个运行，因此我们可以使用“ this [ alias name ]”语法从。后面的(function (){ ... })回调函数。作为命令。")]),e._v(" "),n("p",[e._v("it('adds a todo (alias)', () => {\n// set up the spy on \"client.mutate\" method\ncy.visit('/')\n.should('have.property', 'graphqlClient')\n.then((client) => {\n// once the \".as\" command finishes\n// we can access the spy using the \"this.mutate\" property\ncy.spy(client, 'mutate').as('mutate')\n})\n// have the application make the call by using the UI\ncy.get('.new-todo')\n.type('Test!!!!{enter}')\n// note the \"function () { ... }\" syntax is used to\n// make sure the \"this\" points at the test context object\n.then(function () {\n// confirm the call has happened with expected variables\n// by now the client.mutate has been called,\n// and the alias has been set (no retries for here)\nexpect(this.mutate).to.have.been.calledOnce\nexpect(this.mutate.firstCall.args[0].variables)\n.to.deep.include({\ntitle: 'Test!!!!',\n})\n.and.to.have.property('id')\n})\n})")]),e._v(" "),n("p",[e._v("由于预期(this.mutate)。不要重试，确保只有在客户端调用确定之后才使用它。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://glebbahmutov.com/blog/images/request-graphql/spy2.png",alt:""}}),e._v("\n删除所有待办事项")]),e._v(" "),n("p",[e._v("对于端到端测试，一个非常常见的问题是在测试之前清除现有的数据。假设您有一个 GraphQL 端点，您可以获得所有 Todo 项目？你会怎样删除它们呢？如果你没有变异“删除所有的 x”，那么你需要一个一个地删除每个项目。")]),e._v(" "),n("p",[e._v("下面是如何做到这一点: 首先，让我们编写一个可重用的方法，并将其放在 utils.js 文件中。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import { gql } from '@apollo/client'\nimport { client } from '../../src/graphql-client'\n\nexport function deleteAll() {\n  // fetches all todo items, grabs their IDs, and deletes them\n  cy.log('**deleteAll**')\n    .then(() =>\n      client.query({\n        // it is important to AVOID any caching here\n        // and fetch the current server data\n        fetchPolicy: 'no-cache',\n        query: gql`\n          query getAllTodos {\n            allTodos {\n              id\n            }\n          }\n        `,\n      }),\n    )\n    .its('data.allTodos')\n    // from each item, grab just the property \"id\"\n    .then((items) => Cypress._.map(items, 'id'))\n    .then((ids) => {\n      if (!ids.length) {\n        cy.log('Nothing to delete')\n        return\n      }\n      cy.log(`Found **${ids.length}** todos`)\n\n      // delete all items one by one\n      ids.forEach((id) => {\n        const mutation = gql`\n            mutation deleteTodo {\n              removeTodo(id: \"${id}\") {\n                id\n              }\n            }\n          `\n        cy.log(`deleting item id:**${id}**`).then(\n          () =>\n            client.mutate({\n              mutation,\n            }),\n          { log: false },\n        )\n      })\n    })\n}\n")])])]),n("p",[e._v("我们可以在每次测试之前或者任何时候使用这个方法:")]),e._v(" "),n("p",[e._v("import { deleteAll } from './utils'")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("describe('Delete items', () => {\n  beforeEach(deleteAll)\n\n  it('deletes all items by making GraphQL calls', () => {\n    cy.intercept({\n      method: 'POST',\n      url: '/',\n      headers: {\n        'x-gql-operation-name': 'allTodos',\n      },\n    }).as('allTodos')\n\n    cy.visit('/')\n    cy.wait('@allTodos').its('response.body.data.allTodos').should('be.empty')\n    cy.get('.todo').should('have.length', 0)\n  })\n})\n")])])]),n("p",[n("img",{attrs:{src:"https://glebbahmutov.com/blog/images/request-graphql/delete-all.gif",alt:""}}),e._v("\n逐一删除每个项目")]),e._v(" "),n("p",[e._v("您可以在下面的视频中看到使用 GraphQL 调用删除所有项目")]),e._v(" "),n("p",[e._v("https://youtu.be/l7E7K7x7V8g")]),e._v(" "),n("h3",{attrs:{id:"author"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[e._v("#")]),e._v(" author")]),e._v(" "),n("p",[e._v("石头 磊哥 seven 随便叫")]),e._v(" "),n("h3",{attrs:{id:"company"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[e._v("#")]),e._v(" company")]),e._v(" "),n("p",[e._v("HSBC\n大家好，我已经加入了HSBC")]),e._v(" "),n("h3",{attrs:{id:"roles"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[e._v("#")]),e._v(" roles")]),e._v(" "),n("p",[e._v("QA（营生） dev（front-end dev 兴趣爱好）")]),e._v(" "),n("h3",{attrs:{id:"联系方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系方式")]),e._v(" "),n("p",[e._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),e._v(" "),n("h4",{attrs:{id:"wechat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[e._v("#")]),e._v(" wechat:")]),e._v(" "),n("p",[e._v("qileiwangnan")]),e._v(" "),n("h4",{attrs:{id:"email"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[e._v("#")]),e._v(" email:")]),e._v(" "),n("p",[e._v("qileilove@gmail.com")])])}],!1,null,null,null);t.default=s.exports}}]);