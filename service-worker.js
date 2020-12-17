/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d444336b092786c169a88162406d2814"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "2e32267dd174aadebff64f8f62ecf334"
  },
  {
    "url": "assets/css/0.styles.eef050b4.css",
    "revision": "4ae8c7c0d2876775c1abf3b9f0c20443"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.049577ca.js",
    "revision": "3b8cb4475cbfa90c8812eb432454fefb"
  },
  {
    "url": "assets/js/10.48854263.js",
    "revision": "c29f07604ebf642c9199d5865831eb93"
  },
  {
    "url": "assets/js/100.0ed7d505.js",
    "revision": "cf50996b936f8b7b48138c43b7dfce50"
  },
  {
    "url": "assets/js/101.67167d91.js",
    "revision": "0ba8fa134841c9f2ede751223c323f30"
  },
  {
    "url": "assets/js/102.88d03ee4.js",
    "revision": "a03ae37b608205d59a737e332736dab6"
  },
  {
    "url": "assets/js/103.19263bad.js",
    "revision": "c77989220030d61f49ff5e0efe288291"
  },
  {
    "url": "assets/js/104.43a920be.js",
    "revision": "9067d0a0396aff93cfccb0c55dbff577"
  },
  {
    "url": "assets/js/105.0ea8d296.js",
    "revision": "90f7c1fb3bf622dc32fe5bf9801bc2b9"
  },
  {
    "url": "assets/js/106.757f21d9.js",
    "revision": "893f1efc5ac9afe14875a600bcde9275"
  },
  {
    "url": "assets/js/107.0694cf9d.js",
    "revision": "6f9205b3bb9291d1f3565a51560886df"
  },
  {
    "url": "assets/js/108.80d4df6a.js",
    "revision": "a653d1ec0ae041c0838bca9cff06c248"
  },
  {
    "url": "assets/js/109.d4313749.js",
    "revision": "3e416ee5e3435c6c047556fd9c6ec486"
  },
  {
    "url": "assets/js/11.9ce5aa47.js",
    "revision": "f0e7c9c897f352c179f4a76f285099d2"
  },
  {
    "url": "assets/js/110.dc095e6f.js",
    "revision": "6330b6588fc022b39d9fa311a51cd257"
  },
  {
    "url": "assets/js/111.2a8948b5.js",
    "revision": "2fe645dbba1e92b03bd81607e9fe1bc4"
  },
  {
    "url": "assets/js/112.310875a6.js",
    "revision": "913256190d6041eb66fbb60d1535163b"
  },
  {
    "url": "assets/js/113.e8ce2f67.js",
    "revision": "1eb08be5f5f0133c37f4f980e1fadd46"
  },
  {
    "url": "assets/js/114.c8119083.js",
    "revision": "39e7811c32d72e8644eeaac3ade3596c"
  },
  {
    "url": "assets/js/115.8463e297.js",
    "revision": "93caf8034c657ad002967fb12b33ed7e"
  },
  {
    "url": "assets/js/116.cac16a04.js",
    "revision": "c2633cd12f2b49b01454647421aa7c27"
  },
  {
    "url": "assets/js/117.c545b648.js",
    "revision": "2a90b7f2f3d8ed714c67c7b5b8210f11"
  },
  {
    "url": "assets/js/118.8ecfe14e.js",
    "revision": "44fb4fb581f149ac5bff53047d40ba2d"
  },
  {
    "url": "assets/js/119.6235f16b.js",
    "revision": "2b5414eece84cd2a12b7a28e26a5d574"
  },
  {
    "url": "assets/js/12.22dc2157.js",
    "revision": "2998a33a7b2684ef31d0df8487523012"
  },
  {
    "url": "assets/js/120.5132ff5b.js",
    "revision": "91ea6cc8227149015f8860438a8ce238"
  },
  {
    "url": "assets/js/121.ee3f07ce.js",
    "revision": "256741c1837d1be094c81e804bfa350a"
  },
  {
    "url": "assets/js/122.8e7d0749.js",
    "revision": "b169abe9f37785a63b56a97e1760c5d2"
  },
  {
    "url": "assets/js/123.422a9d1f.js",
    "revision": "06870a59366899159ff0f1f670df500b"
  },
  {
    "url": "assets/js/124.7321db03.js",
    "revision": "95f65fc19fffd0a8ad958f84239f90a0"
  },
  {
    "url": "assets/js/125.db87c26d.js",
    "revision": "47f8710e543991491115bcd8c95a18b1"
  },
  {
    "url": "assets/js/126.d393c9cd.js",
    "revision": "44cee913e1f6527412c1be678ee0ee6c"
  },
  {
    "url": "assets/js/127.ddb47328.js",
    "revision": "b46b95b243c11f229b053c55e226fd0a"
  },
  {
    "url": "assets/js/128.361dd0de.js",
    "revision": "0e618528dbdadb80a88067382c3fbd3f"
  },
  {
    "url": "assets/js/129.0d93a8e4.js",
    "revision": "ed3ddec4503ff5cb8d58f45635c5c34c"
  },
  {
    "url": "assets/js/13.949cbefc.js",
    "revision": "aed2c0571fe6deea7c4dbe8f856da155"
  },
  {
    "url": "assets/js/130.ad7f2978.js",
    "revision": "d2ddb49468535a40046e43e6e7445958"
  },
  {
    "url": "assets/js/131.7ec0b890.js",
    "revision": "16d89597d8c6f2e66ba653ae1920af2b"
  },
  {
    "url": "assets/js/132.b7c43fee.js",
    "revision": "de199f37d80708f9d1ca5dbe83760b5f"
  },
  {
    "url": "assets/js/133.bbfd94b1.js",
    "revision": "903a2ab1f76716988129f678704f6a91"
  },
  {
    "url": "assets/js/134.d1e3b957.js",
    "revision": "285fd0e863a7b621161f5723f44b9a8f"
  },
  {
    "url": "assets/js/135.18344be6.js",
    "revision": "294b5426aabe44faef4b638ec6f26bdf"
  },
  {
    "url": "assets/js/136.72cc944d.js",
    "revision": "7cd4a2529ed752d405aa3fca80e7ab35"
  },
  {
    "url": "assets/js/137.cf3d86f2.js",
    "revision": "8600a944c8196426146d36697c03cb93"
  },
  {
    "url": "assets/js/138.8ac62702.js",
    "revision": "269bb23908c8dc9415de11a1100f4dfb"
  },
  {
    "url": "assets/js/139.4b7bf259.js",
    "revision": "0d782afaa162aa2846673d29eb0b4686"
  },
  {
    "url": "assets/js/14.74d39783.js",
    "revision": "1ce1c11255b33182ea28c945bb54701f"
  },
  {
    "url": "assets/js/140.d0792e80.js",
    "revision": "cf0f486841976a10c2fd0dbba68ab906"
  },
  {
    "url": "assets/js/141.b110480d.js",
    "revision": "88b9e9bac6020d69948f408b04135be7"
  },
  {
    "url": "assets/js/142.e5f54b98.js",
    "revision": "6f94beac37bf5203a628eb51aac0e725"
  },
  {
    "url": "assets/js/143.30581e47.js",
    "revision": "ec50825fb68d7b95e09d011c66ace8a1"
  },
  {
    "url": "assets/js/144.f751a50d.js",
    "revision": "401369d2f5a662f827353efe470bc45d"
  },
  {
    "url": "assets/js/145.0b4c7316.js",
    "revision": "66f07bd6387d06484c70d37d275b084f"
  },
  {
    "url": "assets/js/146.a70368c3.js",
    "revision": "2579547d41238ff395010fa1a5fa4c84"
  },
  {
    "url": "assets/js/147.1d875131.js",
    "revision": "2502d86a035c9d4a1ffc7670199031dd"
  },
  {
    "url": "assets/js/148.04c2e20b.js",
    "revision": "a7101f1a4f43f72f48508d53e5e1fe84"
  },
  {
    "url": "assets/js/149.7154cd2e.js",
    "revision": "85e3723a6236ec33a693f6ae27996243"
  },
  {
    "url": "assets/js/15.f87ba54c.js",
    "revision": "e27402bdcf5c654ca742bd91e078a7da"
  },
  {
    "url": "assets/js/150.636f1c8c.js",
    "revision": "731e9b051b0ffde380594b24144b9a71"
  },
  {
    "url": "assets/js/151.5f65b5f1.js",
    "revision": "eb9a25c98e6a3708a5bc570b07ef8626"
  },
  {
    "url": "assets/js/152.1707d2fa.js",
    "revision": "e76357995b69283e0c0d451e18c5c3f9"
  },
  {
    "url": "assets/js/153.d777e893.js",
    "revision": "28998b4114d741f0f814c015ed203f99"
  },
  {
    "url": "assets/js/154.ac57f969.js",
    "revision": "99de9cdf8c52789a055cca9e058e36ce"
  },
  {
    "url": "assets/js/155.d2f8ab13.js",
    "revision": "705b6c887249b3f0dd2910977e860006"
  },
  {
    "url": "assets/js/156.ce4e0fa0.js",
    "revision": "7301514db37b963890803db2dcd29d6a"
  },
  {
    "url": "assets/js/157.ddf05223.js",
    "revision": "d8eff6d9ef2c6921234b14377f59b9b7"
  },
  {
    "url": "assets/js/158.c47e89bc.js",
    "revision": "cad773da87d3eeefb8deb5d6030bb71d"
  },
  {
    "url": "assets/js/159.ea2dbe4a.js",
    "revision": "7d3a7088cfab06a8445e4bf2efad8427"
  },
  {
    "url": "assets/js/16.7d53733f.js",
    "revision": "d666a6c1800716193490a9c891d22d56"
  },
  {
    "url": "assets/js/160.e2c23f9d.js",
    "revision": "ad04c56637f80f9a58cb47c77ff3e6b8"
  },
  {
    "url": "assets/js/161.e1228667.js",
    "revision": "3be67720974481d63a25b2b11fd38f10"
  },
  {
    "url": "assets/js/162.df61ccb3.js",
    "revision": "d41b478daf38015034c5bfa47efaaa8a"
  },
  {
    "url": "assets/js/163.beea2bf6.js",
    "revision": "460ca37d4f8d1eee150010581b62d683"
  },
  {
    "url": "assets/js/164.a3398a0d.js",
    "revision": "4779cec01efe5eae9573d2b10755d874"
  },
  {
    "url": "assets/js/165.0304d79e.js",
    "revision": "c116070a11bafe62009f8f6757b3e00a"
  },
  {
    "url": "assets/js/166.a28f694f.js",
    "revision": "f3f8f991fb23a68a84ea1188fd0fe3d8"
  },
  {
    "url": "assets/js/17.4bd7bfb7.js",
    "revision": "19ccc84e426f497f6e83f095c917828b"
  },
  {
    "url": "assets/js/18.364a1c7a.js",
    "revision": "f5ce0fd7a3f7aa37356b53a0bbf83911"
  },
  {
    "url": "assets/js/19.1087666b.js",
    "revision": "fcd16dd36399eb780caac97a5433e18b"
  },
  {
    "url": "assets/js/2.8ffb7ac8.js",
    "revision": "914bf41b5190d2c86861cdf49d029d4e"
  },
  {
    "url": "assets/js/20.32414a86.js",
    "revision": "621d6b2eb4bae2f291d41f945f02dd55"
  },
  {
    "url": "assets/js/21.df70e842.js",
    "revision": "e029fa2db762acab90b9723290c7a306"
  },
  {
    "url": "assets/js/22.1a7bb308.js",
    "revision": "a642d3b25ba6745bfb619068bedb136e"
  },
  {
    "url": "assets/js/23.cb78472b.js",
    "revision": "232a11adfb97ad466b18cdf796ed98c5"
  },
  {
    "url": "assets/js/24.50e9f515.js",
    "revision": "7b029478e5a711b1c360f13a597f0db8"
  },
  {
    "url": "assets/js/25.46b3ab9e.js",
    "revision": "a01ddbaddc53c7c43d7f5718981bae67"
  },
  {
    "url": "assets/js/26.a300c330.js",
    "revision": "79ef55a48e526997d020513f3761428c"
  },
  {
    "url": "assets/js/27.aa95a34a.js",
    "revision": "64c3e65d1a7eb0f00b367d351a59b411"
  },
  {
    "url": "assets/js/28.1379fba5.js",
    "revision": "c156b5c9f6df0246d277e21fe4c5a515"
  },
  {
    "url": "assets/js/29.ed2fd094.js",
    "revision": "5f294ebe4a8e2e1ddf2980a54610f72c"
  },
  {
    "url": "assets/js/3.72f65101.js",
    "revision": "ebcef5c89d22286cdc45be055b0c4c44"
  },
  {
    "url": "assets/js/30.1cf5c075.js",
    "revision": "7e31f15fd5d5d7ab84ca97f9f6d87d0c"
  },
  {
    "url": "assets/js/31.707ee8c1.js",
    "revision": "f8a9ba600cfccdc9e5296c4a65ed8e17"
  },
  {
    "url": "assets/js/32.a1e118bf.js",
    "revision": "c82abeb3819a5815013376ba375747c1"
  },
  {
    "url": "assets/js/33.1efd9ba9.js",
    "revision": "abc35194ebca792366cab49e5ef3c1ff"
  },
  {
    "url": "assets/js/34.c63a4348.js",
    "revision": "cfd9056743ef6efe33cdbf112faba4c8"
  },
  {
    "url": "assets/js/35.29df7e7f.js",
    "revision": "5fa1892963d321a3ff7a8b1c2a4cd398"
  },
  {
    "url": "assets/js/36.f6c19814.js",
    "revision": "d526d19632f1ec5da6c2527bde2b1884"
  },
  {
    "url": "assets/js/37.d7303ce2.js",
    "revision": "95525baf3d1acb1a4c7f9e683241b14e"
  },
  {
    "url": "assets/js/38.020f5be5.js",
    "revision": "e6e0ea4fa0f5b0bbc2152f2604a0b55c"
  },
  {
    "url": "assets/js/39.dad9d02b.js",
    "revision": "37c2c0da9269bb0242edd27cb2307944"
  },
  {
    "url": "assets/js/4.98ee0f72.js",
    "revision": "82ded80f01c656dd63c3bb13857d3855"
  },
  {
    "url": "assets/js/40.5383bc0d.js",
    "revision": "e27eb602c7363e8d122a053c83eec4ac"
  },
  {
    "url": "assets/js/41.0cfbba1b.js",
    "revision": "e40c4ad2a07e74a3999211c01c9b2867"
  },
  {
    "url": "assets/js/42.bf609825.js",
    "revision": "7b2840f9f5ec3f3e06900c2ca98478e6"
  },
  {
    "url": "assets/js/43.45ebe9aa.js",
    "revision": "bfd432b4e8155b9e5034f29708989fd0"
  },
  {
    "url": "assets/js/44.5cd54b32.js",
    "revision": "39ba7a2597dca042f09f4e109e4dee02"
  },
  {
    "url": "assets/js/45.1ef9b3cb.js",
    "revision": "84345127e888b254768fbc9efc04ba03"
  },
  {
    "url": "assets/js/46.3148ea93.js",
    "revision": "77073f1426228bd374bced3b23ec331d"
  },
  {
    "url": "assets/js/47.f1d2ad80.js",
    "revision": "b1dbb1413e6dd8f341337832f1a6bf41"
  },
  {
    "url": "assets/js/48.7ee981d3.js",
    "revision": "0e1d08c323928116cb34dd24b0615917"
  },
  {
    "url": "assets/js/49.9325b620.js",
    "revision": "7b2ff24e797de71ebcf95e9aca4e9395"
  },
  {
    "url": "assets/js/5.74a1453c.js",
    "revision": "9803b1505f053295002d209957ac4619"
  },
  {
    "url": "assets/js/50.8191273b.js",
    "revision": "6d7e41cb2413e5b32b8cf50b485c2ed0"
  },
  {
    "url": "assets/js/51.1905650f.js",
    "revision": "f16a3da188312979c844dc03dc959178"
  },
  {
    "url": "assets/js/52.859eb9d4.js",
    "revision": "33fe4e2783a6391c240d01652c52ed0c"
  },
  {
    "url": "assets/js/53.a01394ca.js",
    "revision": "b373fa1b7a6ec012d1040010df4fb9fe"
  },
  {
    "url": "assets/js/54.206663ab.js",
    "revision": "726f06505b24a898bcd45c3e83803be4"
  },
  {
    "url": "assets/js/55.13b28eff.js",
    "revision": "e111a7ac84f3714d16900fca3e068906"
  },
  {
    "url": "assets/js/56.1896aa15.js",
    "revision": "8f4d7f602cb66f858872aa971cdb3918"
  },
  {
    "url": "assets/js/57.9785a32f.js",
    "revision": "885c8a411b530bc335ea28acdee45626"
  },
  {
    "url": "assets/js/58.16cd3343.js",
    "revision": "6ec7786c5f7916f48aded341c24f6cb3"
  },
  {
    "url": "assets/js/59.67f52775.js",
    "revision": "0e9674f4d3df93101cce8f587c08f300"
  },
  {
    "url": "assets/js/6.ca7c455c.js",
    "revision": "f6d5a56040d06f15f33677223ef109c2"
  },
  {
    "url": "assets/js/60.8b66bf77.js",
    "revision": "a1e19379033a9bc5fdb7a7aade7494e7"
  },
  {
    "url": "assets/js/61.02694cc9.js",
    "revision": "f0dc21beb7dffb6072d846f1cd1c8b14"
  },
  {
    "url": "assets/js/62.e7862ae3.js",
    "revision": "ceefeef2dafae87c1a2cfe4552e5636e"
  },
  {
    "url": "assets/js/63.620ed18b.js",
    "revision": "f90f2cc9501a96c67af3fa806c5bf4d8"
  },
  {
    "url": "assets/js/64.b9a2251c.js",
    "revision": "0b3ac51be26b11ee74d9d619fe9004ab"
  },
  {
    "url": "assets/js/65.d309c587.js",
    "revision": "e9033133e1c1ef20381d8bbc16c86ce2"
  },
  {
    "url": "assets/js/66.65b51604.js",
    "revision": "83a3720d3e6d6ad99fd6cbb199f3ac41"
  },
  {
    "url": "assets/js/67.f614a457.js",
    "revision": "03e211dd5bbd53edde6bf05d576caf47"
  },
  {
    "url": "assets/js/68.7452b1cf.js",
    "revision": "31424a6e0dba8f12cc3e00f51fe8694b"
  },
  {
    "url": "assets/js/69.64ed24e7.js",
    "revision": "b8b85338d1d87099c52f1c1597aa361e"
  },
  {
    "url": "assets/js/7.cc0a13af.js",
    "revision": "296b93a17ec23c7a141cb5365130715b"
  },
  {
    "url": "assets/js/70.d37f2f64.js",
    "revision": "8a973d1853dd6e0dff7c485edacc62ad"
  },
  {
    "url": "assets/js/71.1fb6ca09.js",
    "revision": "bf599e57d3c058631d935c1b8ac1fc02"
  },
  {
    "url": "assets/js/72.e9f60484.js",
    "revision": "2be1b0f936201fc90e0f4dc7edba10b1"
  },
  {
    "url": "assets/js/73.9a9e6723.js",
    "revision": "8e358b63701a5a000d1a33fe8384fe86"
  },
  {
    "url": "assets/js/74.6e6b7f30.js",
    "revision": "3a250e4443a0ed9cbcdd2624981082b2"
  },
  {
    "url": "assets/js/75.b8a72f5e.js",
    "revision": "194270055eb43f9adadaa33a173fc979"
  },
  {
    "url": "assets/js/76.9174198c.js",
    "revision": "0056a76dd53929a7c1e49b20ee3ff933"
  },
  {
    "url": "assets/js/77.1c1cf2e9.js",
    "revision": "cd71d51fc23dae5fe2909214ba7a7d67"
  },
  {
    "url": "assets/js/78.873a9560.js",
    "revision": "318eac31c701e1d2c95ec16f71542faf"
  },
  {
    "url": "assets/js/79.d35f6998.js",
    "revision": "0701187c3e2a3bd4cea5e1550d4e874f"
  },
  {
    "url": "assets/js/80.23ab2c66.js",
    "revision": "3869f279696e756c6e594005683921e9"
  },
  {
    "url": "assets/js/81.428c01d9.js",
    "revision": "77415662ea41278a3c012156f35c8db3"
  },
  {
    "url": "assets/js/82.0c235cf8.js",
    "revision": "41ff64937cf7c6a6b29001267516768c"
  },
  {
    "url": "assets/js/83.2bbc4a5d.js",
    "revision": "f26b25be8661c2d554a12597812c4714"
  },
  {
    "url": "assets/js/84.48d501f7.js",
    "revision": "4ac823a74bb622a7e2892a8841655294"
  },
  {
    "url": "assets/js/85.a0ba885f.js",
    "revision": "4ffc6e503ea663571fda2bb8f6b74f98"
  },
  {
    "url": "assets/js/86.116736b7.js",
    "revision": "7c8e9b66cc6e49a1eb60e9daa50901af"
  },
  {
    "url": "assets/js/87.f88368f4.js",
    "revision": "faea746ba58bdf34ea02291ef6947151"
  },
  {
    "url": "assets/js/88.63943748.js",
    "revision": "3d3404a488588f8b3dc392b8678b15cb"
  },
  {
    "url": "assets/js/89.b70acf17.js",
    "revision": "b0841e67b745f0f199a69020f7c26aff"
  },
  {
    "url": "assets/js/9.bc7d0b68.js",
    "revision": "45669e55334d54a33d303d6b945242ae"
  },
  {
    "url": "assets/js/90.3f329063.js",
    "revision": "d46f0f72056ccfef5e88d6819dd6115d"
  },
  {
    "url": "assets/js/91.9eed0707.js",
    "revision": "cc6d9289f871d924ae853f0771269129"
  },
  {
    "url": "assets/js/92.561e0342.js",
    "revision": "6f14991fe51c31bf950481ee63458328"
  },
  {
    "url": "assets/js/93.f43c923d.js",
    "revision": "25fed32e0f9d450ce832312f040b5090"
  },
  {
    "url": "assets/js/94.be385517.js",
    "revision": "b84801eab77f086595ff27cac1c33187"
  },
  {
    "url": "assets/js/95.abe60e70.js",
    "revision": "9da0dd26fd4923fd6e2b44e4a9fdd664"
  },
  {
    "url": "assets/js/96.9bfc7c10.js",
    "revision": "0bee1228e9df39382f50d18358893b4b"
  },
  {
    "url": "assets/js/97.3165cb4b.js",
    "revision": "fd6c4822dfe180d0361047ebd3841263"
  },
  {
    "url": "assets/js/98.b90d6014.js",
    "revision": "2a424b4c188d3cfbb6b4674b0cb7fcc2"
  },
  {
    "url": "assets/js/99.b8c165fa.js",
    "revision": "866919438db64f69760e24d57ce8f199"
  },
  {
    "url": "assets/js/app.53d27c9c.js",
    "revision": "7168016716d8a40d73a789dd4ebf2012"
  },
  {
    "url": "authors/index.html",
    "revision": "f33051270130bdf05e25b1fa9d004447"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "60767854c4af6f94717d0a8e128ae38c"
  },
  {
    "url": "autores/my.jpeg",
    "revision": "7ac45e8c4a326ab2c378264e2930ca73"
  },
  {
    "url": "categories/Agile_QA.html",
    "revision": "2126489243d00e53267017ce3ce4ac36"
  },
  {
    "url": "categories/automation_test.html",
    "revision": "1f8a5afb67bf2507b186d3db7dd112ef"
  },
  {
    "url": "categories/index.html",
    "revision": "188befabdbd6beba06546f711a54db1a"
  },
  {
    "url": "categories/performance_test.html",
    "revision": "ed9e84b5bfd2236cc7cd0af6b9e6a04c"
  },
  {
    "url": "categories/Quality.html",
    "revision": "9440be0969e1193a3e38c47aa933ca05"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "4753beecb9cae1f8b03a515343ee6f62"
  },
  {
    "url": "contact/index.html",
    "revision": "5548197ae47605524f49b36f2b548735"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "home2.jpg",
    "revision": "8da1f8f48dfa28cc9a9d2591199ee65b"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "images/avatar-mvp.png",
    "revision": "366c424916a0114a37233c40ef00c476"
  },
  {
    "url": "images/cb1.jpg",
    "revision": "6e0a0ab9d32f406ebab38e67bf890bb2"
  },
  {
    "url": "images/cb10.png",
    "revision": "3d970be7b183236bad2e624db2c948c2"
  },
  {
    "url": "images/cb11.png",
    "revision": "5c0c802f4618666030d588f4f2fb615d"
  },
  {
    "url": "images/cb2.png",
    "revision": "8b4dbd7ad33754f04e74dfba739a3f7a"
  },
  {
    "url": "images/cb3.png",
    "revision": "1e55913db3136d9de585d35822170c85"
  },
  {
    "url": "images/cb4.png",
    "revision": "61d8d4c351bec1bc8bac76020a0bc87f"
  },
  {
    "url": "images/cb5.png",
    "revision": "7361d0b1fbb9338695db9622cf8d384f"
  },
  {
    "url": "images/cb6.png",
    "revision": "01522388774d8faebb6ab9d5f0485d99"
  },
  {
    "url": "images/cb7.png",
    "revision": "92bcc395dfc2bd8cbc6642b7f1cf24dd"
  },
  {
    "url": "images/cb8.png",
    "revision": "ebe5888499bb123c2cb326a1e86f9de1"
  },
  {
    "url": "images/cb9.png",
    "revision": "49a7bbb04d7f94434b213d893ada2f57"
  },
  {
    "url": "images/chess-mvp.jpg",
    "revision": "004f7d5b619b3ad188dcaace6706b790"
  },
  {
    "url": "images/facebook.jpeg",
    "revision": "0498c5e490afd782f86f0424397313bd"
  },
  {
    "url": "images/feedback-mvp.png",
    "revision": "b930e31192da7d0abe09d6fbb1bf3751"
  },
  {
    "url": "images/google.jpg",
    "revision": "291ff21b433bfb16c41c5274c3291712"
  },
  {
    "url": "images/kick_off.png",
    "revision": "eb41b3356431500a825275ae2836805c"
  },
  {
    "url": "images/mircosoft.jpg",
    "revision": "58cd2bf1525ee096b7777d3de6e154eb"
  },
  {
    "url": "images/pair code 2.jpg",
    "revision": "575ff8b4167effd00165675b0553c46c"
  },
  {
    "url": "images/pair_with_BA.png",
    "revision": "547f2dd0a93d5c1cde53e5da80563085"
  },
  {
    "url": "images/pair_with_dev.png",
    "revision": "eaac0705fc428c7d0d86b9ea85cffa3e"
  },
  {
    "url": "images/performance_alay.png",
    "revision": "967b68503cd83ccbb4191d4599aa953d"
  },
  {
    "url": "images/posts/2016/8/Agile-QA.png",
    "revision": "7bc0e9216fe468436e8c30165bfa0776"
  },
  {
    "url": "images/posts/2018/9/aaa-as-sd,w_680.png",
    "revision": "57b2ee795a972abf9b84173193dcdf93"
  },
  {
    "url": "images/posts/2018/9/aaa-as-sd.png",
    "revision": "57b2ee795a972abf9b84173193dcdf93"
  },
  {
    "url": "images/posts/2018/9/qaquilty,w_680.png",
    "revision": "e7412de4614843a1921493f3b3c9e59e"
  },
  {
    "url": "images/posts/2018/9/qaquilty.png",
    "revision": "e7412de4614843a1921493f3b3c9e59e"
  },
  {
    "url": "images/pyramid.png",
    "revision": "a55436ff603f8988c9030f773c06c8a9"
  },
  {
    "url": "images/qa_capablities.png",
    "revision": "271d1df1b381e20bb5b6917dee9e74bf"
  },
  {
    "url": "images/qa_learn_dev1.jpg",
    "revision": "968b1b79b4f3145c4ce50d028f9bb6c4"
  },
  {
    "url": "images/qa_learn_dev2.jpg",
    "revision": "79c4da4bc65dd8c0e66e8effd345e8d1"
  },
  {
    "url": "images/qa_learn_dev3.jpg",
    "revision": "44e441a4be91a747e79d749c088d8e9a"
  },
  {
    "url": "images/qa_learn_dev4.jpg",
    "revision": "30517936087709742e385b22f7d30774"
  },
  {
    "url": "images/qa_learn_dev5.jpeg",
    "revision": "3295240a84a6178c0946c06b0a655322"
  },
  {
    "url": "images/qa_learn_dev6.jpeg",
    "revision": "909adbceb78deac11d2265e2031df5a3"
  },
  {
    "url": "images/qa_learn_dev7.jpeg",
    "revision": "905dcd2916c0e2229532c3df5d3a67e8"
  },
  {
    "url": "images/qa_skills.png",
    "revision": "ea30e7bc5bdfe5f5fb7e7c11fc949d9a"
  },
  {
    "url": "images/QA_TW.jpg",
    "revision": "ce95df29327c0cff0455cfbaab763ebf"
  },
  {
    "url": "images/qa.gif",
    "revision": "646b3fc209ec9d9663c16e64bf16de69"
  },
  {
    "url": "images/report.png",
    "revision": "ddeaf118f885da1a746e8f71765e7608"
  },
  {
    "url": "images/sign_off.png",
    "revision": "e20105c3c6041737696e8f7b9574269c"
  },
  {
    "url": "images/test_test.png",
    "revision": "e5765737786b92c71b2b442149ab5ff8"
  },
  {
    "url": "images/testwork1.jpg",
    "revision": "75402c798a858088677b357e3af1ce2b"
  },
  {
    "url": "images/testwork2.png",
    "revision": "128730a7c80ed28d85a007e29f4ef363"
  },
  {
    "url": "images/testwork3.jpg",
    "revision": "7a2394041a59163e34bf211d7f5a08bc"
  },
  {
    "url": "images/testwork4.jpg",
    "revision": "44c56425ff64c507c5305cdfa5e2f81f"
  },
  {
    "url": "images/thoughtworks.jpg",
    "revision": "44d4b1eab1ad8cb1f0efb401ea102607"
  },
  {
    "url": "images/twqa.jpg",
    "revision": "aa1e44b7f08fd7fb275aa4627054bb20"
  },
  {
    "url": "images/wt1.jpg",
    "revision": "4f837659036f6cd049328dbd085fc191"
  },
  {
    "url": "images/wt11.jpg",
    "revision": "ae860a9e0a1c84e6bf3af5dc9303a00d"
  },
  {
    "url": "images/wt12.jpg",
    "revision": "174a03f0b0cd97aec86c1291604d1003"
  },
  {
    "url": "images/wt2.jpg",
    "revision": "fe80cd645b97d47cf67a399d55fb5ee1"
  },
  {
    "url": "images/wt3.jpg",
    "revision": "1077e25fc3fc6a6bef050af0d348f161"
  },
  {
    "url": "images/wt4.jpg",
    "revision": "40a2ca713b0a86758e6b30fe662611f4"
  },
  {
    "url": "images/wt5.jpg",
    "revision": "39b83928ef315b683a1615e9b14155cb"
  },
  {
    "url": "images/wt6.jpg",
    "revision": "61c9945b03022f77ce4ef7d47a1c91e2"
  },
  {
    "url": "images/wt7.jpg",
    "revision": "845469907107858b888183f31b064221"
  },
  {
    "url": "images/wt8.jpg",
    "revision": "30ee3e706deda787b135132ca00fd72f"
  },
  {
    "url": "images/wt9.jpg",
    "revision": "99f56795924f77553e2669383a44e69a"
  },
  {
    "url": "index.html",
    "revision": "15d18abbcae0a175d975f92dfca63f7d"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "posts/10 Years in Testing, 10 lessons – Lesson 6.html",
    "revision": "adba5063c98647827a2ecc75f3f9a83d"
  },
  {
    "url": "posts/10 Years in Testing, 10 lessons – Lesson 7.html",
    "revision": "836d2a7f947dce9cd55024e930a890cb"
  },
  {
    "url": "posts/10 Years in Testing, 10 lessons – Lesson 8.html",
    "revision": "b5a60ffdd95dda6e7891bf44de0617b1"
  },
  {
    "url": "posts/10-best-practices-qa-teams-deliver-quality-software-fast.html",
    "revision": "cea4b2beef69bed182615aa32a00d16d"
  },
  {
    "url": "posts/10-Years-in-Testing-10-lessons–Lesson-1.html",
    "revision": "35e5c84e393f416b0d12c0dbab19b902"
  },
  {
    "url": "posts/10-Years-in-Testing-10-lessons–Lesson-2.html",
    "revision": "f5076dfb4dabf48d207f72ed64c0d412"
  },
  {
    "url": "posts/10-Years-in-Testing-10-lessons–Lesson-3.html",
    "revision": "231b5717f2f0911d6a1e323dffdc5ee9"
  },
  {
    "url": "posts/10-Years-in-Testing-10-lessons–Lesson-4.html",
    "revision": "91c94e2f29e9ce77109efb37798d93f2"
  },
  {
    "url": "posts/10-Years-in-Testing-10-lessons–Lesson-5.html",
    "revision": "5e7e049de7045b8e29c136cb945f5442"
  },
  {
    "url": "posts/10大远程测试挑战（以及如何克服挑战).html",
    "revision": "516f6a47b8c590531095b4b1835cd809"
  },
  {
    "url": "posts/19个最佳跨浏览器测试技巧，可加快发布速度.html",
    "revision": "e77a199627a30bb29969acc6789e9fe2"
  },
  {
    "url": "posts/2019_test_trend.html",
    "revision": "59e935a4359dc6b257bcdaa7804f5c3f"
  },
  {
    "url": "posts/202010/9个最好的Selenium报告工具.html",
    "revision": "8f48430d1d5676f15b8b145088ea4f77"
  },
  {
    "url": "posts/202010/Selenium IDE —无需编码的端到端测试.html",
    "revision": "ebbf3d035b5624771978a9be871a65e4"
  },
  {
    "url": "posts/202010/Selenium_4_Selenium_WebDriver的新特性.html",
    "revision": "a2c58c95cc575624d958479398ab1626"
  },
  {
    "url": "posts/202010/人类测试AI的指南.html",
    "revision": "a1b0d3d6ce98eaddb0ac4a9df9e02909"
  },
  {
    "url": "posts/202010/你真的会用Thread.sheep()吗 copy.html",
    "revision": "55d5fdce1d300a94f2374a96afe9fc40"
  },
  {
    "url": "posts/202010/如何使用Selenium WebDriver执行本地化测试？.html",
    "revision": "5ef570f640b45910c743368a05261f1f"
  },
  {
    "url": "posts/202010/如何安装Selenium 4 copy.html",
    "revision": "8945d1887f0db15da17cc7cb0e984410"
  },
  {
    "url": "posts/202010/如何安装Selenium 4.html",
    "revision": "3173265b5e07191a90799f8cb36accb8"
  },
  {
    "url": "posts/202010/自定义测试自动化框架:定义特性第2部分.html",
    "revision": "c2577c36cd91d63224113edfb2733a48"
  },
  {
    "url": "posts/202011/10种Selenium自定义功能可简化Web测试.html",
    "revision": "3505a9847d72a802d7282ee6d3e1b2c2"
  },
  {
    "url": "posts/202011/2020年适用于PC的8种最佳Android模拟器.html",
    "revision": "12b04cf7af4b660b631afa756f908c86"
  },
  {
    "url": "posts/202011/SELENIUM 4 模拟地理位置信息.html",
    "revision": "b81f07028e7f4d8651f2501b9217ef3b"
  },
  {
    "url": "posts/202011/什么时候根本原因分析不是根本原因分析？.html",
    "revision": "efdee1d3d32ac56a680f64fee6ff1b80"
  },
  {
    "url": "posts/202011/介绍Cerberus开源测试自动化框架.html",
    "revision": "bb24c8a7724830711eac3da3ba5d965a"
  },
  {
    "url": "posts/202011/作为一个测试自动化工程师，10个可行的技巧.html",
    "revision": "16887e651aba411089f731fd9ce1bd1b"
  },
  {
    "url": "posts/202011/修复测试沙漏.html",
    "revision": "6db2593ceae59c6dc20c655f583ad7d7"
  },
  {
    "url": "posts/202011/写好bug report的14个技巧.html",
    "revision": "461d00eef6d1958829dddbe42805786a"
  },
  {
    "url": "posts/202011/前端性能测试实践.html",
    "revision": "9dd58e9d4284d4e44487b6dfe2eaa3e6"
  },
  {
    "url": "posts/202011/在Selenium中找到XPath的10个最佳Chrome扩展.html",
    "revision": "510d76fba38060dbdebc7b710517437b"
  },
  {
    "url": "posts/202011/基于风险的测试的个人方法.html",
    "revision": "49bb5f553126265a6fbda5bde5f7101d"
  },
  {
    "url": "posts/202011/如何从手动测试过渡到测试自动化.html",
    "revision": "9ed548cb424d466b189f27215b83100d"
  },
  {
    "url": "posts/202011/如何使用selenium处理iFrame.html",
    "revision": "214738e23e036731aa490ec58fd2c44c"
  },
  {
    "url": "posts/202011/如何处理第三方集成的自动化测试.html",
    "revision": "49202cfe6b4affc1ba4fdb239e7f86e6"
  },
  {
    "url": "posts/202011/如何提高您的安全测试技能.html",
    "revision": "f0c71104c7dfda7409754550f79e1cf4"
  },
  {
    "url": "posts/202011/学习PYTHON测试自动化.html",
    "revision": "e23a3dd6684bd19a643d03cc9fa9add1"
  },
  {
    "url": "posts/202011/您听说过“脆弱测试”吗？.html",
    "revision": "0efdd9ca26542064482c740ef6f388ef"
  },
  {
    "url": "posts/202011/成对或全对测试技术的基础.html",
    "revision": "3938021c22f79d1223f7b6b6153d2f0b"
  },
  {
    "url": "posts/202011/我在测试自动化方面最大的错误.html",
    "revision": "7291506a64bc22b6faec60d1859f8e13"
  },
  {
    "url": "posts/202011/探索安全-威胁风险模型.html",
    "revision": "acf2ce56392f1db5045ec587e4e88f29"
  },
  {
    "url": "posts/202011/漏洞扫描器有什么用？.html",
    "revision": "9407cfe30293d3f78c35851002a2d5a2"
  },
  {
    "url": "posts/202011/瀑布法、敏捷法、 Scrum 法、看板法.html",
    "revision": "9eb9b5799eed2bf1429ea516a91a1b55"
  },
  {
    "url": "posts/202011/选择Selenium WebDriver进行自动化测试的13个原因.html",
    "revision": "8029e039f0e5f1c28274f6008b9ef52c"
  },
  {
    "url": "posts/202011/高效连续测试策略的4个要素.html",
    "revision": "8e408c9b5888b6539d52f7a1ad102061"
  },
  {
    "url": "posts/202012/devops测试流水线.html",
    "revision": "0d5b7b53b9d499b45a9a7a060d3ecf40"
  },
  {
    "url": "posts/202012/JMeter 中 GraphQL 的深入研究.html",
    "revision": "2cb8f5b4edb6f0a570f958fc35adf6d7"
  },
  {
    "url": "posts/202012/PythonAPI测试自动化框架使用assertpy添加流畅断言.html",
    "revision": "bda4e97bdf8cfea6b51d8467ea202691"
  },
  {
    "url": "posts/202012/PythonAPI测试自动化框架发出HTTP请求-2.html",
    "revision": "65b7e38c1795ee0d199b7ca1f04055bf"
  },
  {
    "url": "posts/202012/为什么自动化测试应该是原子性.html",
    "revision": "00f4e297e9b0b03c2bc318b265526c4a"
  },
  {
    "url": "posts/202012/使用 SuperTest、 Mocha 和 Chai 进行非常简单的 API 测试.html",
    "revision": "d4828c30ea07711d11e670e9a84b0a0d"
  },
  {
    "url": "posts/202012/使用NightWatchJS运行首次测试.html",
    "revision": "5faaaa8bb4810371cced58fd3c2cb902"
  },
  {
    "url": "posts/202012/使用Nock进行集成测试中的模拟依赖项.html",
    "revision": "204ec72eec4835fe6546dd27ed5ed82d"
  },
  {
    "url": "posts/202012/处理端到端测试的测试数据的4种方法.html",
    "revision": "ed6d44a8ce86d81515a0b46af752966e"
  },
  {
    "url": "posts/202012/如何在没有测试的应用程序上构建测试自动化.html",
    "revision": "53ba033bf2a58c9d9415f4f528de3f58"
  },
  {
    "url": "posts/202012/测试自动化中的风险超出了显而易见的范围.html",
    "revision": "9e35f5db10beead419231ca279c834cf"
  },
  {
    "url": "posts/2020年Selenium自动化的顶级Python测试框架.html",
    "revision": "1138425354f7e36cde799744a072978f"
  },
  {
    "url": "posts/3个关于质量的视觉模型.html",
    "revision": "9ff89722e2dca362e7702d4ba7b16085"
  },
  {
    "url": "posts/49个自动化测试中最常见的selenium异常.html",
    "revision": "cd9d2583712483efaa928726b7d82e0c"
  },
  {
    "url": "posts/aaa-as-sd.html",
    "revision": "4f1c1a8c7fce3365db604a379001c7ca"
  },
  {
    "url": "posts/aaa.html",
    "revision": "1f36690b9d983d677741d8c344a7dfd6"
  },
  {
    "url": "posts/Agile-QA.html",
    "revision": "0930b73367723cfabfeaadec02313286"
  },
  {
    "url": "posts/AI_automation.html",
    "revision": "74ef1da6feb0c891c22ef1972b3d9e51"
  },
  {
    "url": "posts/automation_blog1.html",
    "revision": "ee29836b74a326ff31382184d2a4d20c"
  },
  {
    "url": "posts/automation_refactor.html",
    "revision": "7966cc934b490d0e820165da795ef92f"
  },
  {
    "url": "posts/break_test.html",
    "revision": "f1fa64db9728d7bac5fca03e7a93b6ea"
  },
  {
    "url": "posts/break_test2.html",
    "revision": "bdf3ee6a759a68c927af4a51bf5636e0"
  },
  {
    "url": "posts/break_test3.html",
    "revision": "bfa8aceb52ff875c3f72bf092336f462"
  },
  {
    "url": "posts/break_test4.html",
    "revision": "ac32d444cd9c9b950596b92eaa57999d"
  },
  {
    "url": "posts/break_test5.html",
    "revision": "075c3d3510926f3f9a44e9f895792b60"
  },
  {
    "url": "posts/buildkite.html",
    "revision": "1f36690b9d983d677741d8c344a7dfd6"
  },
  {
    "url": "posts/cross_broswer_test.html",
    "revision": "3def8260e65e8a773a78875164eff8c1"
  },
  {
    "url": "posts/dont-care-user.html",
    "revision": "fddd58e921136b95de426d9307e563db"
  },
  {
    "url": "posts/how_to_test_web.html",
    "revision": "7a0f5d435cc8f1c833136006fc6d06ce"
  },
  {
    "url": "posts/index.html",
    "revision": "69fb2b5b364d500b9f4d7594263df748"
  },
  {
    "url": "posts/Inverting_test_prymind.html",
    "revision": "f6d221093fdd338456fc8835254b3649"
  },
  {
    "url": "posts/lighthouse.html",
    "revision": "1f36690b9d983d677741d8c344a7dfd6"
  },
  {
    "url": "posts/mobile_testing.html",
    "revision": "94255eec0d6389c2337eb4d07dfca162"
  },
  {
    "url": "posts/puppeteer拦截请求.html",
    "revision": "895665229d18f41888a9298ed580351e"
  },
  {
    "url": "posts/python_tools.html",
    "revision": "15fc277d41aa3e222e44967c8c63ba01"
  },
  {
    "url": "posts/qa_conf.html",
    "revision": "1ab4b4eb5c1a666c47be6a9553974c6a"
  },
  {
    "url": "posts/qa_learn_dev.html",
    "revision": "e0cec0c5f14e2e768139fdc504d4cfae"
  },
  {
    "url": "posts/qa_mvp.html",
    "revision": "3ffc87f43b426d8961c38be3bec4543f"
  },
  {
    "url": "posts/qaquilty.html",
    "revision": "d1e4b89d3f198ecfb2340bf2eedd8d8b"
  },
  {
    "url": "posts/QA的5个SMART目标.html",
    "revision": "61e5056480deab84a577a8393adba2fc"
  },
  {
    "url": "posts/reuse-test.html",
    "revision": "1f36690b9d983d677741d8c344a7dfd6"
  },
  {
    "url": "posts/Selenium‌ ‌C#‌‌ Page‌ ‌Object‌ ‌Model‌ Tutorial With‌ ‌Examples‌.html",
    "revision": "4c96c5849c17b0cbcf16084d521058f4"
  },
  {
    "url": "posts/selenium_best_practice_1.html",
    "revision": "06ed040854acffc3e818cd5d3a017623"
  },
  {
    "url": "posts/selenium_best_practice_2.html",
    "revision": "0c23491d02addd3b185af67412f4ce68"
  },
  {
    "url": "posts/selenium_best_practice.html",
    "revision": "f135319cb72e3e036aa7cb7ad0567c21"
  },
  {
    "url": "posts/Selenium测试自动化的27个最佳实践.html",
    "revision": "87a3c1d79822b8241deb851dfbfe3366"
  },
  {
    "url": "posts/shift_security_test.html",
    "revision": "1e6846359c6f14f8c501af528f4f2f91"
  },
  {
    "url": "posts/start_your_automation.html",
    "revision": "a0a7804ab0b52d068cd477ecc0f2c928"
  },
  {
    "url": "posts/System_Testing_in_Automated_Infrastructure.html",
    "revision": "34c3c27122e1063e26592173b04b9cdc"
  },
  {
    "url": "posts/test_work.html",
    "revision": "f91ec0c0df0a86df4f6970e95e10fb65"
  },
  {
    "url": "posts/test-less-and-think-more.html",
    "revision": "2029f1119c5fb44f7e3251f9c59464a6"
  },
  {
    "url": "posts/the_error_will_be_good.html",
    "revision": "1fd10f1062cb8eafe09b8ce9fcf4ba1c"
  },
  {
    "url": "posts/TOP机器人过程自动化RPA工具.html",
    "revision": "f7698b3b8cc6619cf70a43b317601248"
  },
  {
    "url": "posts/upcoming-software-testing-trends-in-2020.html",
    "revision": "fd576bb9c9796e274df30f3452f42668"
  },
  {
    "url": "posts/use_sauce_lab_test.html",
    "revision": "5e07978c3400725898505e12b6ad9381"
  },
  {
    "url": "posts/webdiriverio.html",
    "revision": "f56e34d35037893e29b11d322ddfc6f3"
  },
  {
    "url": "posts/不要以质量赌博.html",
    "revision": "31f6ed5c64bdebe3202caecdaf0b54c9"
  },
  {
    "url": "posts/使用Python进行API测试.html",
    "revision": "8a4582a91709ba2acf5070ddbf4b66dd"
  },
  {
    "url": "posts/使用Python进行API结果校验.html",
    "revision": "7f2ddf3518a97658031fb15f42b422e1"
  },
  {
    "url": "posts/使用功能测试框架自动化测试数据仓库.html",
    "revision": "c6c10dde5251132232768af658f0559f"
  },
  {
    "url": "posts/关于探索性测试的端到端指南.html",
    "revision": "5856fc1ee0d27332a8a9d89527c4457a"
  },
  {
    "url": "posts/出租车和送货应用程序质量检查自动化简要指南.html",
    "revision": "588f9a238261d0406cfab14038de6fd5"
  },
  {
    "url": "posts/利用selenium与owasp zap 集成实现自动化安全测试.html",
    "revision": "04d8e2f9a9167679ab94935c06125770"
  },
  {
    "url": "posts/可视化测试策略.html",
    "revision": "6f19ba3fdc388ae9286b276cff5debfa"
  },
  {
    "url": "posts/如何使用GOST + SAFe来提高公司的敏捷性.html",
    "revision": "516bbac73bcc73f5edd77d0489ab3ba3"
  },
  {
    "url": "posts/如何使用Selenium Automation测试PDF文件.html",
    "revision": "6d17ea7575e6cab949e2c5ddbd925d8b"
  },
  {
    "url": "posts/如何制定云测试策略.html",
    "revision": "9e35ae5faf0dc41f97fec41eb7b2ee76"
  },
  {
    "url": "posts/如何在多种环境中运行cypress测试.html",
    "revision": "7e25997553412490bfe297788e32f8a9"
  },
  {
    "url": "posts/如何建立测试自动化策略.html",
    "revision": "6b7e18ae57d82865f887089d88f9e6da"
  },
  {
    "url": "posts/如何自动化Salesforce应用程序.html",
    "revision": "4aace2d9a09d2cd6bc486e4b6cdc77cc"
  },
  {
    "url": "posts/审查代码有风险吗.html",
    "revision": "0e7425ee57b0119c1fc9546fb05782cb"
  },
  {
    "url": "posts/成功进行软件风险评估的5个阶段.html",
    "revision": "603f96b740b13b04628bfdb1276fe28e"
  },
  {
    "url": "posts/探索更完整的前端测试策略.html",
    "revision": "d471229e50a602283b812ed9f327a801"
  },
  {
    "url": "posts/本地化测试不足的危险.html",
    "revision": "7dfd2975cd669c12307142e1c1c1b491"
  },
  {
    "url": "posts/测试数据管理策略.html",
    "revision": "1f50c606a8f9afd65554c3b041be00b0"
  },
  {
    "url": "posts/渗透测试.html",
    "revision": "9eb6d0eabfee2a975248c9cd5e3d49cb"
  },
  {
    "url": "posts/端到端测试的4种处理测试数据的方法.html",
    "revision": "7bbff0c7c7a7f7c6eb3a02ae0bcf710f"
  },
  {
    "url": "posts/解释常见的功能测试类型，并提供示例.html",
    "revision": "33f1396e66827cd118c868721574f51a"
  },
  {
    "url": "posts/负载测试：Jmeter vs Gatling.html",
    "revision": "35d6e7966db6e7271c33ff843f26dc05"
  },
  {
    "url": "posts/负载测试：Jmeter vs K6.html",
    "revision": "cefd030b3180520f538fa7f7687410ae"
  },
  {
    "url": "posts/迁移到Selenium 4:下面是发生的变化.html",
    "revision": "1ac3899aaa466d191a2210a3c8d23e8f"
  },
  {
    "url": "posts/通过OTP绕过帐户.html",
    "revision": "c77d324809206e2fd7f81b318748be3b"
  },
  {
    "url": "posts/高效测试自动化的16种selenium最佳实践.html",
    "revision": "c547d0c68162abf02cedd10347e5dbe6"
  },
  {
    "url": "posts/高质量PageObject的6条规则.html",
    "revision": "93150a071e110d3021afa67ad7653fd4"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
