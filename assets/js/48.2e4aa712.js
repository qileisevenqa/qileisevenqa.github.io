(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{261:function(e,t,s){"use strict";s.r(t);var a=s(1),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"修复测试沙漏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修复测试沙漏","aria-hidden":"true"}},[e._v("#")]),e._v(" 修复测试沙漏")]),e._v(" "),s("p",[e._v("自动化测试使创建新功能，修复错误和重构代码更加安全快捷。 在计划自动化测试时，我们构想出一个金字塔，它具有小型单元测试，一些设计合理的集成测试以及一些大型端到端测试的强大基础。 从“只说不做”到更多的端到端测试，测试应快速，可靠且特定。 但是，端到端测试通常很慢，不可靠且难以调试。\n随着软件项目的发展，我们测试分布的形状常常变得不理想，要么是繁重的工作（没有单元或中级集成测试），要么像沙漏。\n沙漏测试分布具有大量的单元测试，大量的端到端测试以及很少或没有中等集成测试。\nhttps://1.bp.blogspot.com/-0jbHAgLFogI/X48dTAJoekI/AAAAAAAAAbI/JV6oUPImdT8Ho5bPgOKVwVZDFVKWGwgcACLcBGAsYHQ/s320/Copy%2Bof%2BGoogle%2BTesting%2BBlog_%2BFixing%2Ba%2BTest%2BHourglass%2B-%2BEdited.jpg\n要将沙漏变回金字塔，以便您可以以可靠，可持续的方式测试组件的集成，您需要弄清楚如何构建被测系统和测试基础架构，以及如何改进系统的可测试性和测试代码 。")]),e._v(" "),s("p",[e._v("我参与了一个具有Web UI，服务器和许多后端的项目。 各个级别都有单元测试，覆盖面广，并且端到端测试集迅速增加。")]),e._v(" "),s("p",[e._v("端到端测试发现了单元测试遗漏的问题，但是它们运行缓慢，环境问题导致了错误的错误，包括测试数据损坏。 此外，某些功能区域很难测试，因为它们覆盖的范围比单元还多，但是需要系统内部难以设置的状态。\nhttps://1.bp.blogspot.com/-X-jZgQxi8OM/X48eq3zzDEI/AAAAAAAAAbk/8qL5-YDjupIKkDeqdVJxxjVPsrCE8XPlACLcBGAsYHQ/s16000/Copy%2Bof%2BGoogle%2BTesting%2BBlog_%2BFixing%2Ba%2BTest%2BHourglass%2B%25282%2529%2B-%2BEdited.jpg")]),e._v(" "),s("p",[e._v("我们最终找到了一个更好的测试体系结构，可以进行更快，更可靠的集成测试，但过程中仍存在一些错误。")]),e._v(" "),s("p",[e._v("用量角器编写的示例UI级端到端测试如下所示：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("describe('Terms of service are handled', () => {\n  it('accepts terms of service', async () => {\n    const user = getUser('termsNotAccepted');\n    await login(user);\n    await see(termsOfServiceDialog());\n    await click('Accept')\n    await logoff();\n    await login(user);\n    await not.see(termsOfServiceDialog());\n  });\n});\n\n")])])]),s("p",[e._v("该测试以用户身份登录，看到用户需要接受的服务条款对话框，接受它，然后注销并重新登录以确保不再提示用户。")]),e._v(" "),s("p",[e._v("此服务条款测试是可靠运行的挑战，因为一旦接受协议，后端服务器将没有RPC方法来撤消操作并“拒绝” TOS。 我们可以在每次测试中创建一个新用户，但这既耗时又难以清理。")]),e._v(" "),s("p",[e._v("在不进行端到端测试的情况下使服务条款功能可测试的第一个尝试是挂钩服务器RPC方法并在测试中设置期望值。 挂钩拦截RPC调用并提供预期的结果，而不是调用后端API。\nhttps://1.bp.blogspot.com/-BGOJjqQx95I/X5BYnaZ88CI/AAAAAAAAAb0/ktnX3SyprGoPklnpLjAo8vLGMmy7GTVegCLcBGAsYHQ/s16000/Copy%2Bof%2BGoogle%2BTesting%2BBlog_%2BFixing%2Ba%2BTest%2BHourglass%2B%25283%2529%2B-%2BEdited.jpg\n这种方法行得通。 该测试与后端RPC交互而没有真正调用它，但是它通过额外的逻辑使测试变得混乱。")]),e._v(" "),s("p",[e._v("describe('Terms of service are handled', () => {  it('accepts terms of service', async () => {    const user = getUser('someUser');    await hook('TermsOfService.Get()', true);    await login(user);    await see(termsOfServiceDialog());    await click('Accept')    await logoff();    await hook('TermsOfService.Get()', false);    await login(user);    await not.see(termsOfServiceDialog());  });});\n该测试达到了测试Web UI和服务器集成的目标，但这是不可靠的。 随着系统在负载下扩展，存在多个服务器进程，并且不能保证UI可以为所有RPC调用访问同一服务器，因此可以在一个服务器进程中设置挂钩，而在另一个服务器进程中访问UI。")]),e._v(" "),s("p",[e._v("钩子也不是在自然的系统边界上，这使得随着系统的发展和代码的重构它需要更多的维护。")]),e._v(" "),s("p",[e._v("测试架构的下一个设计是伪造最终处理服务条款的后端。\nhttps://1.bp.blogspot.com/-0tiG7Pt33G4/X5BaSNGZE4I/AAAAAAAAAcA/T7k2F4s_OPUmbP1rxXPLsqB6MjIyvdXJgCLcBGAsYHQ/s16000/Copy%2Bof%2BGoogle%2BTesting%2BBlog_%2BFixing%2Ba%2BTest%2BHourglass%2B%25284%2529%2B-%2BEdited.jpg\n伪造的实现可能非常简单：")]),e._v(" "),s("p",[e._v("public class FakeTermsOfService implements TermsOfService.Service {  private static final Map<String, Boolean> accepted = new ConcurrentHashMap<>();  @Override  public TosGetResponse get(TosGetRequest req) {    return accepted.getOrDefault(req.UserID(), Boolean.FALSE);  }  @Override  public void accept(TosAcceptRequest req) {    accepted.put(req.UserID(), Boolean.TRUE);  }}\n现在的测试已经没有期望的干扰了")]),e._v(" "),s("p",[e._v("describe('Terms of service are handled', () => {")]),e._v(" "),s("p",[e._v("it('accepts terms of service', async () => {\nconst user = getUser('termsNotAccepted');\nawait login(user);\nawait see(termsOfServiceDialog());\nawait click('Accept')\nawait logoff();\nawait login(user);\nawait not.see(termsOfServiceDialog());\n});\n});")]),e._v(" "),s("p",[e._v("因为fake将接受状态存储在内存中，所以不需要为下一次测试迭代重置状态;只要重新启动假服务器就足够了。\n这是可行的，但是当假冒和真实的后端混合在一起时会出现问题。 这是因为实际后端之间存在某种状态，该状态现在已与伪造后端不同步。")]),e._v(" "),s("p",[e._v("我们最终成功的集成测试体系结构是为除后端之一以外的所有后端提供伪实现，它们共享相同的内存状态。 在测试中的系统中包含一个真实的后端，因为它与Web UI紧密耦合。 它的依赖关系全都连接到伪造的后端。 这些是对整个被测系统的集成测试，但是它们删除了后端依赖性。 这些测试扩展了测试沙漏中的中等大小测试，从而使我们可以减少具有真实后端的端到端测试。")]),e._v(" "),s("p",[e._v("请注意，这些集成测试不仅是选项。 对于Web UI中的逻辑，我们可以编写页面级单元测试，从而使测试运行更快，更可靠。 但是，对于服务条款功能，我们希望一起测试Web UI和服务器逻辑，因此集成测试是一个很好的解决方案。\nhttps://1.bp.blogspot.com/-GXnIcmGOhow/X5BcZDzfURI/AAAAAAAAAcM/6ld2Xg__3V8nkXqDEnPeuibPqXU9KntcACLcBGAsYHQ/s16000/Copy%2Bof%2BGoogle%2BTesting%2BBlog_%2BFixing%2Ba%2BTest%2BHourglass%2B%25285%2529%2B-%2BEdited.jpg\n这导致在真实和伪造的后端系统上都可以未经修改地运行UI测试。")]),e._v(" "),s("p",[e._v("当使用伪造的后端运行时，测试更快，更可靠。 这样可以更轻松地添加测试场景，而这些场景可能很难设置真实的后端。 我们还删除了集成测试很好地复制的端到端测试，从而导致集成测试比端到端测试更多。\nhttps://1.bp.blogspot.com/-FGkMIpFMPXM/X5BcvmDCcjI/AAAAAAAAAcU/vNtCPcVc1EML3xZv5w1-7sSPlacRO9rvQCLcBGAsYHQ/s320/Copy%2Bof%2BGoogle%2BTesting%2BBlog_%2BFixing%2Ba%2BTest%2BHourglass%2B%25286%2529%2B-%2BEdited.jpg\n通过迭代，我们得出了用于集成测试的可持续测试架构。")]),e._v(" "),s("p",[e._v("如果您正面临一个测试沙漏，那么设计中等测试的测试体系可能就不那么明显了。 我建议进行试验，在定义明确的界面上划分系统，并确保新测试通过更快，更可靠地运行或解锁难于测试的区域来提供价值。")]),e._v(" "),s("p",[e._v("参考文献")]),e._v(" "),s("p",[e._v("拒绝更多端到端测试，迈克·瓦克（Mike Wacker），https：//testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html")]),e._v(" "),s("p",[e._v("Test Pyramid＆Antipatterns，Khushi，https://khushiy.com/2019/02/07/test-pyramid-antipatterns/")]),e._v(" "),s("p",[e._v("上厕所测试：假装更好的测试，乔纳森·洛克威和安德鲁·特伦克，https：//testing.googleblog.com/2013/06/testing-on-toilet-fake-your-way-to.html")]),e._v(" "),s("p",[e._v("在马桶上进行测试：知道您的测试双打，安德鲁·特伦克（Andrew Trenk），https：//testing.googleblog.com/2013/07/testing-on-toilet-know-your-test-doubles.html")]),e._v(" "),s("p",[e._v("Hermetic服务器，Chaitali Narla和Diego Salas，https：//testing.googleblog.com/2012/10/hermetic-servers.html")]),e._v(" "),s("p",[e._v("Google的软件工程，Titus Winters，Tom Manshreck，Hyrum Wright，https：//www.oreilly.com/library/view/software-engineering-at/9781492082781/")]),e._v(" "),s("h3",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author","aria-hidden":"true"}},[e._v("#")]),e._v(" author")]),e._v(" "),s("p",[e._v("石头 磊哥 seven 随便叫")]),e._v(" "),s("h3",{attrs:{id:"company"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#company","aria-hidden":"true"}},[e._v("#")]),e._v(" company")]),e._v(" "),s("p",[e._v("thoughtworks（离职了。。。。）")]),e._v(" "),s("p",[e._v("大家好，本人不才，目前依旧混迹于thoughtworks，做着一名看起来像全栈的QA，兴趣爱好前端，目前是thoughtworks 西安QA社区的leader，如果有兴趣分享话题，或者想加入tw，可以找我")]),e._v(" "),s("h3",{attrs:{id:"roles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#roles","aria-hidden":"true"}},[e._v("#")]),e._v(" roles")]),e._v(" "),s("p",[e._v("QA（营生） dev（front-end dev 兴趣爱好）")]),e._v(" "),s("h3",{attrs:{id:"联系方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#联系方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 联系方式")]),e._v(" "),s("p",[e._v("如果想转载或者高薪挖我 请直接联系我 哈哈")]),e._v(" "),s("h4",{attrs:{id:"wechat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wechat","aria-hidden":"true"}},[e._v("#")]),e._v(" wechat:")]),e._v(" "),s("p",[e._v("qileiwangnan")]),e._v(" "),s("h4",{attrs:{id:"email"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#email","aria-hidden":"true"}},[e._v("#")]),e._v(" email:")]),e._v(" "),s("p",[e._v("qileilove@gmail.com")])])}],!1,null,null,null);t.default=o.exports}}]);