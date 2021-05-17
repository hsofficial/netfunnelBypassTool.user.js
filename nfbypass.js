// ==UserScript==
// @name         netfunnel bypass tools
// @namespace    http://hscloud.co.kr/
// @version      0.1
// @description  disable netfunnel waitline - 넷퍼넬을 새치기해보세요
// @author       daumssi
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==



if (NetFunnel.TS_BYPASS == false) {

    NetFunnel.TS_BYPASS = true;

    var macro = setInterval(function() {

        if (NetFunnel.TS_BYPASS == false) {

            NetFunnel.TS_BYPASS = true;

        }

    }, 100);

}
