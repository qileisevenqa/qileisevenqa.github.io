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
    "revision": "15b8d7cb45d7d24cfa1746d591ff33bf"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "5686eb328cf458ec3fa42614f4e07fdf"
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
    "url": "assets/js/100.89072a8f.js",
    "revision": "eab21f294b12eeb4773ed5ee29344fc9"
  },
  {
    "url": "assets/js/101.6df01df9.js",
    "revision": "fa8f4d3c2bc30b90e7dbe462120bb6d2"
  },
  {
    "url": "assets/js/102.8b3778fc.js",
    "revision": "a4aad0e8207d67ae5b205225fc9ae75c"
  },
  {
    "url": "assets/js/103.cf80daa0.js",
    "revision": "8b3abd1c2ff39dd8ac34cf69f769d715"
  },
  {
    "url": "assets/js/104.7f5cfbc5.js",
    "revision": "a5cc4d087b70ac654b414db4958ab919"
  },
  {
    "url": "assets/js/105.1a41d040.js",
    "revision": "c2224d38d580508e1ceabea9f9d5b4e1"
  },
  {
    "url": "assets/js/106.894aaceb.js",
    "revision": "beb8b31790301fc8bb447e28653fee7a"
  },
  {
    "url": "assets/js/107.b1cee0a0.js",
    "revision": "0bb30e63e3edb94c24d9de482e93021b"
  },
  {
    "url": "assets/js/108.e43497ce.js",
    "revision": "b17ecdc12e650bd8510777bbc7687f1a"
  },
  {
    "url": "assets/js/109.760e3a23.js",
    "revision": "10f979acc70c428cb308f6fce5d1a89d"
  },
  {
    "url": "assets/js/11.9ce5aa47.js",
    "revision": "f0e7c9c897f352c179f4a76f285099d2"
  },
  {
    "url": "assets/js/110.8b1a1236.js",
    "revision": "6c4ea8be2372f0a3424c1ec33f399b8a"
  },
  {
    "url": "assets/js/111.189aaa3c.js",
    "revision": "bcf8892f77797f8a8dfa098b5f062f92"
  },
  {
    "url": "assets/js/112.031d8a39.js",
    "revision": "07b24b4bbbbe001daae79c4b99628c00"
  },
  {
    "url": "assets/js/113.2a90f4bc.js",
    "revision": "a6aa4f7d4cb8c52e9aace7435b9d1580"
  },
  {
    "url": "assets/js/114.3e29483f.js",
    "revision": "41043a2f08aa4c2d7b5c2386daf1d525"
  },
  {
    "url": "assets/js/115.7245418c.js",
    "revision": "53d6fb2bfd9b078d7233fe2b9ad62db2"
  },
  {
    "url": "assets/js/116.c258bb71.js",
    "revision": "704f805389f99f1ee392f92ad46fd174"
  },
  {
    "url": "assets/js/117.f9999e64.js",
    "revision": "1e1428252ad9587ac8e19d9cf491e7ee"
  },
  {
    "url": "assets/js/118.72859e3d.js",
    "revision": "5a165d4997ffccab2baf68a1a7240341"
  },
  {
    "url": "assets/js/119.c6c61956.js",
    "revision": "b713de9a45be439ca2a5da7d2cd6a977"
  },
  {
    "url": "assets/js/12.22dc2157.js",
    "revision": "2998a33a7b2684ef31d0df8487523012"
  },
  {
    "url": "assets/js/120.5771f6ae.js",
    "revision": "a6e383c4312277bf1133edf6b2b0b6b7"
  },
  {
    "url": "assets/js/121.f4fb9923.js",
    "revision": "f74902306b149aaf5e6b39391fcf0393"
  },
  {
    "url": "assets/js/122.bc231bfa.js",
    "revision": "e53466b169bc2d423fb79eae32d715b2"
  },
  {
    "url": "assets/js/123.158cf659.js",
    "revision": "56fb4deacdb1ee2d1e66ceac3a912eec"
  },
  {
    "url": "assets/js/124.02ee2194.js",
    "revision": "6e7f03c73460b0ebfd020ef25a757b6b"
  },
  {
    "url": "assets/js/125.4cf4e2c9.js",
    "revision": "c2257150a8303941f9b9280c18892db7"
  },
  {
    "url": "assets/js/126.b1eb1604.js",
    "revision": "9bdb3c674308de8ab2c41460e9d7be1d"
  },
  {
    "url": "assets/js/127.42ad2b47.js",
    "revision": "f99275e3b75007f288bb7576593f3ccc"
  },
  {
    "url": "assets/js/128.b4ee2e7f.js",
    "revision": "37b90c68f874e06b767bf55c2165a6a5"
  },
  {
    "url": "assets/js/129.635692e9.js",
    "revision": "baef4bf9e435bfbd589c9c714d108464"
  },
  {
    "url": "assets/js/13.949cbefc.js",
    "revision": "aed2c0571fe6deea7c4dbe8f856da155"
  },
  {
    "url": "assets/js/130.3ccb6e65.js",
    "revision": "d38814b067eff808a77f1a991754c69a"
  },
  {
    "url": "assets/js/131.edf8785d.js",
    "revision": "edb2055444c528f0c51f082524c81143"
  },
  {
    "url": "assets/js/132.09cf4f81.js",
    "revision": "7d4066397086a04e739f9a24839ecac8"
  },
  {
    "url": "assets/js/133.922daf3e.js",
    "revision": "0ccdded3b5e9f99d54f26c3857830d96"
  },
  {
    "url": "assets/js/134.ff091517.js",
    "revision": "61572cf8764387fab23e9d44629198dd"
  },
  {
    "url": "assets/js/135.41b865a7.js",
    "revision": "4390aa28524bf4ae9e75fd24a4e83af8"
  },
  {
    "url": "assets/js/136.b47439aa.js",
    "revision": "904b7914c6f7adbb3be34ea59268846b"
  },
  {
    "url": "assets/js/137.ba3b5abe.js",
    "revision": "cc51ebe0aef83b130de8032dbb1e016c"
  },
  {
    "url": "assets/js/138.a73c97ff.js",
    "revision": "b5ef714b72320d6d2c59a72702b47ca8"
  },
  {
    "url": "assets/js/139.991c72ef.js",
    "revision": "04d9d4a641c98081421ecb9c6c71d0e6"
  },
  {
    "url": "assets/js/14.74d39783.js",
    "revision": "1ce1c11255b33182ea28c945bb54701f"
  },
  {
    "url": "assets/js/140.6882aef7.js",
    "revision": "e215b8ee99ece12b223eaece40cc82b4"
  },
  {
    "url": "assets/js/141.4ca11626.js",
    "revision": "35ec05f3a7b9e461aef59357e8c67ff3"
  },
  {
    "url": "assets/js/142.1855583f.js",
    "revision": "9b516640a8d206a79aae602511080229"
  },
  {
    "url": "assets/js/143.bb5a5eef.js",
    "revision": "3f80ea5077c7fa8c907bf655cc7b5f34"
  },
  {
    "url": "assets/js/144.f93cd7db.js",
    "revision": "1a3827da1ee2b0daa3d095f18b3c0f6a"
  },
  {
    "url": "assets/js/145.e799e1fe.js",
    "revision": "ba3aa2bd62b5a4a491bba564c72604cb"
  },
  {
    "url": "assets/js/146.289485e5.js",
    "revision": "e8e6fc30bebc2c078332c75dfd944f8b"
  },
  {
    "url": "assets/js/147.116d14ca.js",
    "revision": "ad559d3e9d5009771ea6e571623ac768"
  },
  {
    "url": "assets/js/148.df20648f.js",
    "revision": "f7dc1e5418737f9c86a0e619446ca04e"
  },
  {
    "url": "assets/js/149.25a21e39.js",
    "revision": "5c6022770c89a82b1899359a85119b7c"
  },
  {
    "url": "assets/js/15.f87ba54c.js",
    "revision": "e27402bdcf5c654ca742bd91e078a7da"
  },
  {
    "url": "assets/js/150.181ec5c4.js",
    "revision": "e5d44580d8d0fc03957b0be8f6849502"
  },
  {
    "url": "assets/js/151.ca39578e.js",
    "revision": "74af1f33802d16da540d0f325b186ed3"
  },
  {
    "url": "assets/js/152.fb478ca0.js",
    "revision": "14c6f36d7117bd4dcaa388bd1107ee54"
  },
  {
    "url": "assets/js/153.a2e13ef0.js",
    "revision": "c38492102b90a87576c6493fbeac2718"
  },
  {
    "url": "assets/js/154.1d947248.js",
    "revision": "fc7903b93d4e4d0a3725a506dc7be2ea"
  },
  {
    "url": "assets/js/155.b7dd0ad0.js",
    "revision": "536f8954e14f908428713a70deda435e"
  },
  {
    "url": "assets/js/156.29d62a38.js",
    "revision": "a4969bbc21ed79ba0046116d338fa320"
  },
  {
    "url": "assets/js/157.d2e78a0e.js",
    "revision": "1742afd8651a603d506c88d57866a80c"
  },
  {
    "url": "assets/js/158.4d8fded2.js",
    "revision": "8163685daffb2e809dd2a0466eca44b6"
  },
  {
    "url": "assets/js/159.b75edb71.js",
    "revision": "ef657441851b37d2012a4330a3c58a21"
  },
  {
    "url": "assets/js/16.7d53733f.js",
    "revision": "d666a6c1800716193490a9c891d22d56"
  },
  {
    "url": "assets/js/160.95457737.js",
    "revision": "433109b2aedab25c4b1855e198595097"
  },
  {
    "url": "assets/js/161.718d2a68.js",
    "revision": "0ee0090dcee492df8e5f0e35bde87947"
  },
  {
    "url": "assets/js/162.9224c1f2.js",
    "revision": "2ce10f4da37b629b595b69fa2c32f422"
  },
  {
    "url": "assets/js/163.dbfa40ee.js",
    "revision": "0f3e2f4e979fcaa4fd4c00f563242a3c"
  },
  {
    "url": "assets/js/164.bd7ad716.js",
    "revision": "61841059fb94decbe8555ea521b4b4d5"
  },
  {
    "url": "assets/js/165.c37947ac.js",
    "revision": "204ab542abf77a98f3ab4b74396aee40"
  },
  {
    "url": "assets/js/166.ae3cbd4d.js",
    "revision": "77b2915dcea2081ee98c8f8d4f7d1490"
  },
  {
    "url": "assets/js/167.9674bc97.js",
    "revision": "9e9569cfc2b9fa0bfb516cd4d7a4a7e4"
  },
  {
    "url": "assets/js/168.224f67b1.js",
    "revision": "5c295ae86e19e7b8b726e47e1ec6b304"
  },
  {
    "url": "assets/js/169.60b0add8.js",
    "revision": "89c07dc1975353488ca9b1e1d039b59b"
  },
  {
    "url": "assets/js/17.4bd7bfb7.js",
    "revision": "19ccc84e426f497f6e83f095c917828b"
  },
  {
    "url": "assets/js/170.04a5d8a2.js",
    "revision": "f35c12e097e04b66379e1c77a4c694d3"
  },
  {
    "url": "assets/js/171.3d24c124.js",
    "revision": "16349fe81cf83447f8dc5954ecedf2c8"
  },
  {
    "url": "assets/js/172.70f1deef.js",
    "revision": "b4cf4773ff47b5a3596efba69854dbd3"
  },
  {
    "url": "assets/js/173.8aac40d5.js",
    "revision": "deaf4d04325dd341b01b773dd5c8f958"
  },
  {
    "url": "assets/js/174.100043f1.js",
    "revision": "e49ce572c98252a313504bb529965a14"
  },
  {
    "url": "assets/js/175.9bce1f40.js",
    "revision": "2a237902656e9271daa161ecf9f2a286"
  },
  {
    "url": "assets/js/176.f57b1ec2.js",
    "revision": "d6f39befa92f718c2718fe859ff1322b"
  },
  {
    "url": "assets/js/177.bd11609d.js",
    "revision": "9c295f88c931d3d7771d8fd630101d11"
  },
  {
    "url": "assets/js/178.6cde88fe.js",
    "revision": "fb70c6d547ffb50ee19cfac2181206c1"
  },
  {
    "url": "assets/js/179.c6556c3e.js",
    "revision": "a19633017c9a3546a428fa3b4bd79c58"
  },
  {
    "url": "assets/js/18.364a1c7a.js",
    "revision": "f5ce0fd7a3f7aa37356b53a0bbf83911"
  },
  {
    "url": "assets/js/180.8f661fe6.js",
    "revision": "2fb89aadd86155380ae4773be22b5ac8"
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
    "url": "assets/js/32.6cb23a99.js",
    "revision": "7ae7015fa7ababdbd0a04f786101f993"
  },
  {
    "url": "assets/js/33.f6aa3340.js",
    "revision": "cdcffbfde0f04a718cc929159e38f57a"
  },
  {
    "url": "assets/js/34.274ba06d.js",
    "revision": "60d140d9aa2d9f3274735d200eb9d0f1"
  },
  {
    "url": "assets/js/35.a4abf573.js",
    "revision": "a7c96ce2b5758efee51c6afd0426ed92"
  },
  {
    "url": "assets/js/36.b0bb1a8c.js",
    "revision": "51960f1d58c6365e423c34f8dc92dddc"
  },
  {
    "url": "assets/js/37.a76af20e.js",
    "revision": "769b5b25c1a7062498e300c4b112ea31"
  },
  {
    "url": "assets/js/38.9cfafe24.js",
    "revision": "23c80921ae22b809b136b2b07101ba15"
  },
  {
    "url": "assets/js/39.2cfff7e8.js",
    "revision": "1d5df415a71fe17b38404f4fb41d4f64"
  },
  {
    "url": "assets/js/4.98ee0f72.js",
    "revision": "82ded80f01c656dd63c3bb13857d3855"
  },
  {
    "url": "assets/js/40.229f5d3d.js",
    "revision": "7650b815e028c6f0865a65dfa50a3ff0"
  },
  {
    "url": "assets/js/41.f09ea6ba.js",
    "revision": "05673cc24184ee6978e099f303f0d04b"
  },
  {
    "url": "assets/js/42.b1c288ed.js",
    "revision": "d547d548b1a940d45e96cf0ef85644ac"
  },
  {
    "url": "assets/js/43.399440ed.js",
    "revision": "4e23bb913cab0f8fc5e3d7fa06755257"
  },
  {
    "url": "assets/js/44.2353b402.js",
    "revision": "09e96d7efa974f58450f23e717d12abb"
  },
  {
    "url": "assets/js/45.c46ff05f.js",
    "revision": "a40f7025d085e9835404bed04617b34b"
  },
  {
    "url": "assets/js/46.acb62d8d.js",
    "revision": "89fbbf97d5547e9c4894e7af6e8fb4c8"
  },
  {
    "url": "assets/js/47.28fa9043.js",
    "revision": "a798c15e33b38d5be55bc53fbd97730b"
  },
  {
    "url": "assets/js/48.2e4aa712.js",
    "revision": "43ed0ac09c25664c11f4388a0990e2fe"
  },
  {
    "url": "assets/js/49.c5b98afb.js",
    "revision": "b0c84ef954f82a8e42a86805cd0ed674"
  },
  {
    "url": "assets/js/5.69a15828.js",
    "revision": "1f1c59889ce8f90159d389b00dbedc68"
  },
  {
    "url": "assets/js/50.efed2333.js",
    "revision": "23d1673765f157e55aa789b843eeeea7"
  },
  {
    "url": "assets/js/51.d0145f09.js",
    "revision": "32f2dac48c25960789a9e8f1ccd2a5bb"
  },
  {
    "url": "assets/js/52.51d6927e.js",
    "revision": "e14645507d5fd7af15acb93d69932123"
  },
  {
    "url": "assets/js/53.1504af38.js",
    "revision": "18c4a70f1f800d6bfd7624b78986f74e"
  },
  {
    "url": "assets/js/54.d4e577ae.js",
    "revision": "509f1244ca711f1e89db32314590a904"
  },
  {
    "url": "assets/js/55.1f9c27b0.js",
    "revision": "ffae4f2af1a942e45e2ab58383f87c63"
  },
  {
    "url": "assets/js/56.8dd81906.js",
    "revision": "27eaf865f791b2e952356bb3153eec72"
  },
  {
    "url": "assets/js/57.235aa13f.js",
    "revision": "997d05ea74ac37aea43a316d7e0131b0"
  },
  {
    "url": "assets/js/58.86ab6cec.js",
    "revision": "20e1300acf16db24300000c5d8b2a70e"
  },
  {
    "url": "assets/js/59.b35b7555.js",
    "revision": "fc6b03450c544c3ee8f35f2c87de4f23"
  },
  {
    "url": "assets/js/6.ca7c455c.js",
    "revision": "f6d5a56040d06f15f33677223ef109c2"
  },
  {
    "url": "assets/js/60.d23c6e8e.js",
    "revision": "dc6256d781fabb629df5ee8d25b7475f"
  },
  {
    "url": "assets/js/61.6ed29488.js",
    "revision": "f82e57c4f3c720a7a5341ab86640a3a8"
  },
  {
    "url": "assets/js/62.b06ce067.js",
    "revision": "fcba8f1416882903a5051b1ad589dacf"
  },
  {
    "url": "assets/js/63.53c47f8c.js",
    "revision": "79b2218a02ae6074375a42b29249540c"
  },
  {
    "url": "assets/js/64.a07662b1.js",
    "revision": "47f524d83b107fa09f8eebf2c0d527da"
  },
  {
    "url": "assets/js/65.666dc5d8.js",
    "revision": "355cfa2b2b1784ed72380575653144a0"
  },
  {
    "url": "assets/js/66.41eed6c1.js",
    "revision": "9a7e50cfbe9febfb6a30b03831ab0387"
  },
  {
    "url": "assets/js/67.0884e779.js",
    "revision": "fc75f4674a99eb1c3b0b4ad83e231c68"
  },
  {
    "url": "assets/js/68.128f735a.js",
    "revision": "934886c2b522f4d1d7d099ae7385f639"
  },
  {
    "url": "assets/js/69.09d1f95e.js",
    "revision": "f8ebb985e6efe57ea144e6201d4ce61d"
  },
  {
    "url": "assets/js/7.cc0a13af.js",
    "revision": "296b93a17ec23c7a141cb5365130715b"
  },
  {
    "url": "assets/js/70.e94b7664.js",
    "revision": "cda1d31fa9c13fd9e36a09d19da102c3"
  },
  {
    "url": "assets/js/71.445a8fb0.js",
    "revision": "ec5c363ec37a6cfe016a54f6bd999209"
  },
  {
    "url": "assets/js/72.f8d8cccd.js",
    "revision": "aad97625326691211fa642a5f8d32126"
  },
  {
    "url": "assets/js/73.85b678ef.js",
    "revision": "b0703fede880228ecf2fa77ed1de6968"
  },
  {
    "url": "assets/js/74.a5352a2b.js",
    "revision": "ed93ea1321525d3cd68775cdaed4b481"
  },
  {
    "url": "assets/js/75.477396c4.js",
    "revision": "39429458e8e5d92ef5e55dd125e0e457"
  },
  {
    "url": "assets/js/76.98b2b77d.js",
    "revision": "f790170c67bbd7ac4760b85460081c0a"
  },
  {
    "url": "assets/js/77.53678b71.js",
    "revision": "e7701a1969fd48e19b685c79e2a72b6e"
  },
  {
    "url": "assets/js/78.14c0b510.js",
    "revision": "d00747397a855015afc58d2ebe57d4a7"
  },
  {
    "url": "assets/js/79.9c97255b.js",
    "revision": "86b3e60b9e7602c5ea6f85fd35d3743b"
  },
  {
    "url": "assets/js/80.ac99d13c.js",
    "revision": "ca77b31f1d796f5a8f12611610ed4896"
  },
  {
    "url": "assets/js/81.96d4efe5.js",
    "revision": "abbfeff3fb60fba06272da7730b0c8b6"
  },
  {
    "url": "assets/js/82.9d7ee1d5.js",
    "revision": "df8574a356a4f4255c25da365bfc480c"
  },
  {
    "url": "assets/js/83.a396d08d.js",
    "revision": "c8372c2da5d92a285dab015e1bf13fc2"
  },
  {
    "url": "assets/js/84.72e01c42.js",
    "revision": "97d7023f984f770b2b76ed00e8ac56a8"
  },
  {
    "url": "assets/js/85.7548261b.js",
    "revision": "e340307e9aa4c9fd7c6524bcc6b28f43"
  },
  {
    "url": "assets/js/86.bf4bb84b.js",
    "revision": "5a9a6f334bc4be020f2a909d83d28637"
  },
  {
    "url": "assets/js/87.94fd6a22.js",
    "revision": "c18fe26f3f0e18410d534d712dfa2ac4"
  },
  {
    "url": "assets/js/88.c9f369c3.js",
    "revision": "d53b1c2cf2eb921fe9d475207baf8d8f"
  },
  {
    "url": "assets/js/89.3cae8c82.js",
    "revision": "fd559a25caf3844d9f712b0a80ce415a"
  },
  {
    "url": "assets/js/9.bc7d0b68.js",
    "revision": "45669e55334d54a33d303d6b945242ae"
  },
  {
    "url": "assets/js/90.cda0ddf8.js",
    "revision": "d46f0f72056ccfef5e88d6819dd6115d"
  },
  {
    "url": "assets/js/91.8596c56d.js",
    "revision": "8fc09637c11a7ef96fce6919519e468e"
  },
  {
    "url": "assets/js/92.78612bf9.js",
    "revision": "598e11ac4f00a2768a78291ef1b23179"
  },
  {
    "url": "assets/js/93.a5f9769b.js",
    "revision": "1a88ca810d28f4f62679142669dcfa8f"
  },
  {
    "url": "assets/js/94.65ab03b6.js",
    "revision": "1a38d4192c7616846176721878e7cad9"
  },
  {
    "url": "assets/js/95.3bf11943.js",
    "revision": "eaba79d4f1cd2d3493152b9aab588971"
  },
  {
    "url": "assets/js/96.c6f01a4e.js",
    "revision": "556a76ab85c6a66484dc6800f8d7b309"
  },
  {
    "url": "assets/js/97.da276862.js",
    "revision": "b88712b1f6166d8e2ebc44865df8fc31"
  },
  {
    "url": "assets/js/98.76da3e3c.js",
    "revision": "1f98a5fdc372b1e847e5701e336413e7"
  },
  {
    "url": "assets/js/99.653d9f9a.js",
    "revision": "300fc6d4b1a293bdac16c915d52b174c"
  },
  {
    "url": "assets/js/app.152cc865.js",
    "revision": "18f077dbe45bf447ab4559cc4d5e2869"
  },
  {
    "url": "authors/index.html",
    "revision": "f3a0ee825c3ffc96577f51a79dff8d54"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "a7c8b641b14f4e20a939552104f23731"
  },
  {
    "url": "autores/my.jpeg",
    "revision": "7ac45e8c4a326ab2c378264e2930ca73"
  },
  {
    "url": "categories/Agile_QA.html",
    "revision": "8f82237692cfb6c894cadd4beeedf736"
  },
  {
    "url": "categories/automation_test.html",
    "revision": "1833ed6f809c75fb67ced42b81a0945a"
  },
  {
    "url": "categories/index.html",
    "revision": "8426cbc04c7f6da1b5599eeeeb5120d2"
  },
  {
    "url": "categories/performance_test.html",
    "revision": "2a9140e9b0997efe46499e11ece518ae"
  },
  {
    "url": "categories/Quality.html",
    "revision": "d551bc9bbb55b5545d734cb6046eb17a"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "0adc3175df103279346d2cce6c35f103"
  },
  {
    "url": "contact/index.html",
    "revision": "54100bc6eab983d2c3298dea7d951d80"
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
    "url": "images/security.png",
    "revision": "7b00121cf2b49497c5061097b2c671c2"
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
    "revision": "ad77c9163a66779577dee81fd4fa4039"
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
    "url": "posts/202010/3个关于质量的视觉模型.html",
    "revision": "6e374e06494b082cdb710f4602837a2b"
  },
  {
    "url": "posts/202010/9个最好的Selenium报告工具.html",
    "revision": "a1fb8f9560593703a64e73abf6f0608a"
  },
  {
    "url": "posts/202010/Selenium IDE —无需编码的端到端测试.html",
    "revision": "75fe8250347d8a5739f0351327d1aebd"
  },
  {
    "url": "posts/202010/Selenium_4_Selenium_WebDriver的新特性.html",
    "revision": "120d3b10fad3ddb1a9632822eda41473"
  },
  {
    "url": "posts/202010/人类测试AI的指南.html",
    "revision": "6a06ff1899e124eb4aa80187aa115717"
  },
  {
    "url": "posts/202010/你真的会用Thread.sheep()吗 copy.html",
    "revision": "5d91857e054d0125ec52d37dc371dc67"
  },
  {
    "url": "posts/202010/如何使用Selenium WebDriver执行本地化测试？.html",
    "revision": "488d857c27896ddbed4cbc85afc60369"
  },
  {
    "url": "posts/202010/如何安装Selenium 4 copy.html",
    "revision": "68df1411bfea5325432b1e89f22cf9dd"
  },
  {
    "url": "posts/202010/如何安装Selenium 4.html",
    "revision": "ed14b0243c7169dd86c9dafcf3954b49"
  },
  {
    "url": "posts/202010/自定义测试自动化框架:定义特性第2部分.html",
    "revision": "1c5333c31493712be25a4f7c94a952de"
  },
  {
    "url": "posts/202011/10种Selenium自定义功能可简化Web测试.html",
    "revision": "3ceb6b3fbde0403063ba82003c420ab8"
  },
  {
    "url": "posts/202011/2020年适用于PC的8种最佳Android模拟器.html",
    "revision": "3836a8c916df0a978ff94a810e99ce9c"
  },
  {
    "url": "posts/202011/SELENIUM 4 模拟地理位置信息.html",
    "revision": "e18aee265949c05b3df4996d8d60086a"
  },
  {
    "url": "posts/202011/什么时候根本原因分析不是根本原因分析？.html",
    "revision": "2d251bea746ef7c64a13b7be60957cdf"
  },
  {
    "url": "posts/202011/介绍Cerberus开源测试自动化框架.html",
    "revision": "6b93061b251acc9878d893aa141889cb"
  },
  {
    "url": "posts/202011/作为一个测试自动化工程师，10个可行的技巧.html",
    "revision": "77c64623da6ab4a089c6908f50c49604"
  },
  {
    "url": "posts/202011/修复测试沙漏.html",
    "revision": "24c2548853a428d2bf07d45a565e0c1a"
  },
  {
    "url": "posts/202011/写好bug report的14个技巧.html",
    "revision": "553a3806310562e68a3c24250963990d"
  },
  {
    "url": "posts/202011/前端性能测试实践.html",
    "revision": "116b6aaec0eaa8cbcc7fdd31d5fabd89"
  },
  {
    "url": "posts/202011/在Selenium中找到XPath的10个最佳Chrome扩展.html",
    "revision": "2565a0b44c556e783e6e9e461dd85852"
  },
  {
    "url": "posts/202011/基于风险的测试的个人方法.html",
    "revision": "3f441791ac0ec160beff8bf1e13d597e"
  },
  {
    "url": "posts/202011/如何从手动测试过渡到测试自动化.html",
    "revision": "974b33dcc7befb07f60cc71e701953cd"
  },
  {
    "url": "posts/202011/如何使用selenium处理iFrame.html",
    "revision": "6fd74cfa1aa948f01a6c32c8a1dd2dc1"
  },
  {
    "url": "posts/202011/如何处理第三方集成的自动化测试.html",
    "revision": "6b435998d9bd7a51231895006ecd5868"
  },
  {
    "url": "posts/202011/如何提高您的安全测试技能.html",
    "revision": "7bf41102aaac5f5c362b2384aa2c078c"
  },
  {
    "url": "posts/202011/学习PYTHON测试自动化.html",
    "revision": "e4943c008fa6930326e9905ec2af29e8"
  },
  {
    "url": "posts/202011/您听说过“脆弱测试”吗？.html",
    "revision": "0c75b9c06920de85e1650cdce08a6cb5"
  },
  {
    "url": "posts/202011/成对或全对测试技术的基础.html",
    "revision": "07b8fd915c8718df9ae8056c92bb0911"
  },
  {
    "url": "posts/202011/我在测试自动化方面最大的错误.html",
    "revision": "0bee655359445095ca30def85b796485"
  },
  {
    "url": "posts/202011/探索安全-威胁风险模型.html",
    "revision": "aead8fcba12e326e56790d9214a3f9eb"
  },
  {
    "url": "posts/202011/漏洞扫描器有什么用？.html",
    "revision": "c7f7eac5a3dbdd38d91c52ceb546cf5e"
  },
  {
    "url": "posts/202011/瀑布法、敏捷法、 Scrum 法、看板法.html",
    "revision": "c0c9f29e738b614d10f9aeabcdbf2029"
  },
  {
    "url": "posts/202011/选择Selenium WebDriver进行自动化测试的13个原因.html",
    "revision": "fd68852676581b804d15d6adf5b97607"
  },
  {
    "url": "posts/202011/高效连续测试策略的4个要素.html",
    "revision": "11253895709e1846d1bed1ec19f75b90"
  },
  {
    "url": "posts/202012/devops测试流水线.html",
    "revision": "86e383e235c277060b54d5fbe398e4bd"
  },
  {
    "url": "posts/202012/JMeter 中 GraphQL 的深入研究.html",
    "revision": "9feedbabb647acf6448d0abc484fe899"
  },
  {
    "url": "posts/202012/PythonAPI测试自动化框架使用assertpy添加流畅断言.html",
    "revision": "ef054750b597a6fe78ad2bbd256f502c"
  },
  {
    "url": "posts/202012/PythonAPI测试自动化框架发出HTTP请求-2.html",
    "revision": "5186ba89386f429e340243ea019b7577"
  },
  {
    "url": "posts/202012/为什么自动化测试应该是原子性.html",
    "revision": "d1c323f3ef4722ebff2fdfddc314415b"
  },
  {
    "url": "posts/202012/使用 SuperTest、 Mocha 和 Chai 进行非常简单的 API 测试.html",
    "revision": "f37b55ea228e3db70e5e7bde783c5338"
  },
  {
    "url": "posts/202012/使用NightWatchJS运行首次测试.html",
    "revision": "fc764550814191117ea195c6380f0694"
  },
  {
    "url": "posts/202012/使用Nock进行集成测试中的模拟依赖项.html",
    "revision": "6835cf183516399ffc9073de0c08d817"
  },
  {
    "url": "posts/202012/处理端到端测试的测试数据的4种方法.html",
    "revision": "d6ccf2fe4dac5621038e9ca71adfe6c2"
  },
  {
    "url": "posts/202012/如何在没有测试的应用程序上构建测试自动化.html",
    "revision": "8b5124a8b095d635b9be750655d55c16"
  },
  {
    "url": "posts/202012/测试自动化中的风险超出了显而易见的范围.html",
    "revision": "e72f1c7aee683283105cf5f9df0de8d7"
  },
  {
    "url": "posts/202108/10 Years in Testing, 10 lessons – Lesson 6.html",
    "revision": "641bbaee0d2cdceaab0840b61d58bdc2"
  },
  {
    "url": "posts/202108/10 Years in Testing, 10 lessons – Lesson 7.html",
    "revision": "0fef82924bd9278fc647cdb36c761fa6"
  },
  {
    "url": "posts/202108/10 Years in Testing, 10 lessons – Lesson 8.html",
    "revision": "55e1a4c8a61ef21f5d74038d21a4b478"
  },
  {
    "url": "posts/202108/10-best-practices-qa-teams-deliver-quality-software-fast.html",
    "revision": "ca82cec679a0f53dc5a54973092dac67"
  },
  {
    "url": "posts/202108/10-Years-in-Testing-10-lessons–Lesson-1.html",
    "revision": "18e472ca1e1ae519128d773789ad4f71"
  },
  {
    "url": "posts/202108/10-Years-in-Testing-10-lessons–Lesson-2.html",
    "revision": "a55c9e9db1be9b431d313472c635b7fa"
  },
  {
    "url": "posts/202108/10-Years-in-Testing-10-lessons–Lesson-3.html",
    "revision": "5030715c31a8e81325db0a38315c8ba0"
  },
  {
    "url": "posts/202108/10-Years-in-Testing-10-lessons–Lesson-4.html",
    "revision": "becda9345cc47c9ed8435a29eb175f0a"
  },
  {
    "url": "posts/202108/10-Years-in-Testing-10-lessons–Lesson-5.html",
    "revision": "6e090237ad06b66da5b62fab27b8a864"
  },
  {
    "url": "posts/202108/10大远程测试挑战（以及如何克服挑战).html",
    "revision": "d32463657fcde4d438a28c3d6930c6ff"
  },
  {
    "url": "posts/202108/19个最佳跨浏览器测试技巧，可加快发布速度.html",
    "revision": "65dea9db33e5bee2a4e743eb6b4e66e2"
  },
  {
    "url": "posts/202108/2019_test_trend.html",
    "revision": "06e5c2b23a8e6b4f58c42fb5af4ec869"
  },
  {
    "url": "posts/202108/2020年Selenium自动化的顶级Python测试框架.html",
    "revision": "1b32fc2dcf73ca471b602987ffb54adb"
  },
  {
    "url": "posts/202108/49个自动化测试中最常见的selenium异常.html",
    "revision": "cfa7f23e40e48c0b807b7cba4d6c9a09"
  },
  {
    "url": "posts/202110/从 Cypress 测试中调用 GraphQL copy.html",
    "revision": "035146f23ed1639327ff720c538a239b"
  },
  {
    "url": "posts/202110/从 Cypress 测试中调用 GraphQL.html",
    "revision": "c66406b583aa77425a363e5c1c21c22c"
  },
  {
    "url": "posts/202110/区块链101: 绝对初学者的快速入门.html",
    "revision": "e9149301d34a46d8a031d6507ee26fdb"
  },
  {
    "url": "posts/202110/测试 Microservices 的最佳实践 copy.html",
    "revision": "e5cb2872d18a4672fefb075512410beb"
  },
  {
    "url": "posts/202112/2021 devops 发展趋势.html",
    "revision": "3cfd3839a3576254a40de19bec5ea530"
  },
  {
    "url": "posts/202112/API 安全测试.html",
    "revision": "e9d23bec22df78785d25df4dc33ff905"
  },
  {
    "url": "posts/202112/RPA_vs_DPA_vs_BPA 过程自动化技术综述.html",
    "revision": "18ccc9b6b2329188dbadbe4e73da7e16"
  },
  {
    "url": "posts/202112/一个A到Z的Lighthouse教程来衡量网页质量.html",
    "revision": "db91e4e5218ae08e7c3e47685924f965"
  },
  {
    "url": "posts/202112/使用locust in python:介绍、关联变量和基本断言.html",
    "revision": "0167c34ad59f7c9c609bca429ddedfb4"
  },
  {
    "url": "posts/202112/学习selenium并成为测试专家的5个最佳方法.html",
    "revision": "86c93fd267c7591d16d071dfa80c0c01"
  },
  {
    "url": "posts/202112/简单5个步骤快速选择你的自动化测试工具.html",
    "revision": "f19873c43b74e1015efc44cd635d27ae"
  },
  {
    "url": "posts/202112/远程质量保证团队测试管理的5个关键.html",
    "revision": "fbd74d105368a2513d6c561aa68100bf"
  },
  {
    "url": "posts/202112/采用人工智能，质量保证如何革新.html",
    "revision": "c815c7025bfa16826942720fc8b5d017"
  },
  {
    "url": "posts/aaa-as-sd.html",
    "revision": "6e01999da07124b98d55b6e091e89d24"
  },
  {
    "url": "posts/aaa.html",
    "revision": "b70c3c0616997db479bee277a15a9261"
  },
  {
    "url": "posts/Agile-QA.html",
    "revision": "375539f69bee8008baf1e6ee20db694e"
  },
  {
    "url": "posts/AI_automation.html",
    "revision": "249028a0ee48ebc3919d3b53b1ea31db"
  },
  {
    "url": "posts/automation_blog1.html",
    "revision": "f247267ab79a6a3da5ec2e76135281d2"
  },
  {
    "url": "posts/automation_refactor.html",
    "revision": "9805baccf515e468373e3aa59a35001b"
  },
  {
    "url": "posts/break_test.html",
    "revision": "a47b105452d036fdffbbdf8bfbc84b55"
  },
  {
    "url": "posts/break_test2.html",
    "revision": "47b8a6f4b842fc026ec5cd99fc53a631"
  },
  {
    "url": "posts/break_test3.html",
    "revision": "a3df3acea7f2da018c8fe11e2444ee12"
  },
  {
    "url": "posts/break_test4.html",
    "revision": "8e90daadcb002d24879ea36fe09d2ee0"
  },
  {
    "url": "posts/break_test5.html",
    "revision": "23127c07b28a32afa2648ecba5c772ec"
  },
  {
    "url": "posts/buildkite.html",
    "revision": "b70c3c0616997db479bee277a15a9261"
  },
  {
    "url": "posts/cross_broswer_test.html",
    "revision": "75ca682cbbf369941f806748f33ac8ac"
  },
  {
    "url": "posts/dont-care-user.html",
    "revision": "d79d61fc1e458644a850d4ec2c35a6a5"
  },
  {
    "url": "posts/how_to_test_web.html",
    "revision": "46e98558a4d7f6cf91bf77b9578398f7"
  },
  {
    "url": "posts/index.html",
    "revision": "dcdda147ae7e7184be74c5b67121852b"
  },
  {
    "url": "posts/Inverting_test_prymind.html",
    "revision": "288fc93b22cac2c76e4da31bf9e4e95b"
  },
  {
    "url": "posts/lighthouse.html",
    "revision": "b70c3c0616997db479bee277a15a9261"
  },
  {
    "url": "posts/mobile_testing.html",
    "revision": "7725103e56703603576dfc65977d0d1f"
  },
  {
    "url": "posts/puppeteer拦截请求.html",
    "revision": "59478885748d4ea3ae4deea334c70acf"
  },
  {
    "url": "posts/python_tools.html",
    "revision": "c68dcf70a5f3b7558398d0b86cc25ecf"
  },
  {
    "url": "posts/qa_conf.html",
    "revision": "03b1da4aca5d0b521df6433fc73c826a"
  },
  {
    "url": "posts/qa_learn_dev.html",
    "revision": "d7061bb63a245208afaf8aa7937000a3"
  },
  {
    "url": "posts/qa_mvp.html",
    "revision": "cd3ce269e3ff75361bec4b2710c95d7b"
  },
  {
    "url": "posts/qaquilty.html",
    "revision": "0e2e18de538ae6f6a4fc8602b88fb984"
  },
  {
    "url": "posts/QA的5个SMART目标.html",
    "revision": "5657d2cf19f1867cf83d1599a5dd0193"
  },
  {
    "url": "posts/reuse-test.html",
    "revision": "b70c3c0616997db479bee277a15a9261"
  },
  {
    "url": "posts/Selenium‌ ‌C#‌‌ Page‌ ‌Object‌ ‌Model‌ Tutorial With‌ ‌Examples‌.html",
    "revision": "f16eebf59c0f96b398d002c0aa6b77b6"
  },
  {
    "url": "posts/selenium_best_practice_1.html",
    "revision": "1dcb9a007ca981457546e0607ca00890"
  },
  {
    "url": "posts/selenium_best_practice_2.html",
    "revision": "51639dfcf40f1191a8ed7535820f189c"
  },
  {
    "url": "posts/selenium_best_practice.html",
    "revision": "1ee0e93b58d50e0b9835f20b781a363c"
  },
  {
    "url": "posts/Selenium测试自动化的27个最佳实践.html",
    "revision": "dbc8315f1d2accf61de46ec8d679371c"
  },
  {
    "url": "posts/shift_security_test.html",
    "revision": "7a4c80ff40bfd5f8706063c2665e8b47"
  },
  {
    "url": "posts/start_your_automation.html",
    "revision": "a3b82aa947f4ef9405a8c7055f35abe7"
  },
  {
    "url": "posts/System_Testing_in_Automated_Infrastructure.html",
    "revision": "fd480efb725feea8c0dddd6b697e42c3"
  },
  {
    "url": "posts/test_work.html",
    "revision": "49cea927bf0b096ee94e340a42719147"
  },
  {
    "url": "posts/test-less-and-think-more.html",
    "revision": "01fe8674280eaeb7e987340cd44970ac"
  },
  {
    "url": "posts/the_error_will_be_good.html",
    "revision": "81843b0532b5935dd1614d8c1a79a582"
  },
  {
    "url": "posts/TOP机器人过程自动化RPA工具.html",
    "revision": "403f962864328ceaa5b851ac0aaaacfa"
  },
  {
    "url": "posts/upcoming-software-testing-trends-in-2020.html",
    "revision": "e74fd710b19e76bc0526f2dba97c59ad"
  },
  {
    "url": "posts/use_sauce_lab_test.html",
    "revision": "801d6ab53d4eda1b5db73366af14354b"
  },
  {
    "url": "posts/webdiriverio.html",
    "revision": "27cf874c87d74480a5f0a694f8fa341b"
  },
  {
    "url": "posts/不要以质量赌博.html",
    "revision": "20d4e71ee99fe421422ac3dd828f85c6"
  },
  {
    "url": "posts/什么是 iOS 测试框架.html",
    "revision": "7b1d920a9e4a2d84eecd513a0d15c922"
  },
  {
    "url": "posts/使用Python进行API测试.html",
    "revision": "5385f3d6e551d86edb165b3aacd7bd16"
  },
  {
    "url": "posts/使用Python进行API结果校验.html",
    "revision": "887a1bc0dd501a113b5bba1c6a5299a0"
  },
  {
    "url": "posts/使用功能测试框架自动化测试数据仓库.html",
    "revision": "ed88c1e5a131ea95abd519ee230ef34f"
  },
  {
    "url": "posts/关于探索性测试的端到端指南.html",
    "revision": "9944c7b9df8bf499fcd5249f0ca58b1c"
  },
  {
    "url": "posts/出租车和送货应用程序质量检查自动化简要指南.html",
    "revision": "bd953dd5e8d9172db76b98e8ad067e49"
  },
  {
    "url": "posts/利用selenium与owasp zap 集成实现自动化安全测试.html",
    "revision": "fe17ea5daa8359c57353a875c8f67c3b"
  },
  {
    "url": "posts/可视化测试策略.html",
    "revision": "7d15b5eab8a69ad05d52df10f5557634"
  },
  {
    "url": "posts/如何使用GOST + SAFe来提高公司的敏捷性.html",
    "revision": "cff8e4aec52e09ac2699a86da6562ef5"
  },
  {
    "url": "posts/如何使用Selenium Automation测试PDF文件.html",
    "revision": "a996333a0ca914009b99dc69c65052b0"
  },
  {
    "url": "posts/如何制定云测试策略.html",
    "revision": "50a41a24bc7ecf1d5147605e5ad9acf7"
  },
  {
    "url": "posts/如何在多种环境中运行cypress测试.html",
    "revision": "2150e2a37fc10f55e8ae190f877193ff"
  },
  {
    "url": "posts/如何建立测试自动化策略.html",
    "revision": "35ce0a00e396b44ed7fe46f674a5467b"
  },
  {
    "url": "posts/如何自动化Salesforce应用程序.html",
    "revision": "f4b3737154bd8aac7e81bfca6cb43080"
  },
  {
    "url": "posts/审查代码有风险吗.html",
    "revision": "3ed2f1c48a26eaf6f87edbe3347f7a58"
  },
  {
    "url": "posts/成功进行软件风险评估的5个阶段.html",
    "revision": "d1044af9f7228b3aa03932d274736476"
  },
  {
    "url": "posts/探索更完整的前端测试策略.html",
    "revision": "9e54d6e29b8909b547023393cf42e37e"
  },
  {
    "url": "posts/本地化测试不足的危险.html",
    "revision": "c5d6a0dc22adba9706e675bc4b0063f9"
  },
  {
    "url": "posts/测试数据管理策略.html",
    "revision": "168a1235de1e316426b306a25652212a"
  },
  {
    "url": "posts/渗透测试.html",
    "revision": "1c8e069ede4f6ad9ff44fd6d972659ec"
  },
  {
    "url": "posts/端到端测试的4种处理测试数据的方法.html",
    "revision": "8a0ffc2f9fa4c6205ac7f52dd683d476"
  },
  {
    "url": "posts/解释常见的功能测试类型，并提供示例.html",
    "revision": "12c048d2661f2a9c3e9d4e05cb6c9e02"
  },
  {
    "url": "posts/负载测试：Jmeter vs Gatling.html",
    "revision": "352157805b336bca91ed7c7234011722"
  },
  {
    "url": "posts/负载测试：Jmeter vs K6.html",
    "revision": "8c071dc1c1e8adfe32cf687929d9193b"
  },
  {
    "url": "posts/迁移到Selenium 4:下面是发生的变化.html",
    "revision": "51f5f02130cbb95788a92428a5587237"
  },
  {
    "url": "posts/通过OTP绕过帐户.html",
    "revision": "2f8934b8ec0d20074d07b1f238f15ba6"
  },
  {
    "url": "posts/高效测试自动化的16种selenium最佳实践.html",
    "revision": "7062f78f7702c8cd09c192bf328cc7cf"
  },
  {
    "url": "posts/高质量PageObject的6条规则.html",
    "revision": "e5902f2c1d6c86f141fc634c4f6b5242"
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
