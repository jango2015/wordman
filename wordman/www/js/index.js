/*
 * Copyright (c) 2014, B3log Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview index.
 *
 * @author <a href="mailto:LLY219@gmail.com">Liyuan Li</a>
 * @author <a href="http://88250.b3log.org">Liang Ding</a>
 * @version 1.0.0.2, May 17, 2014
 * @since 1.0.0
 */
var app = {
    initialize: function() {
        this.bindEvents();

        // 初始化词库，第一次打开应用时将导入词库
        clazz.initClasses();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        document.addEventListener("backbutton", this.onBackKeyDown, false);

        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

    },
    onBackKeyDown: function() {
        alert('111');

//    notification.confirm('按确定退出程序!', // message
//            onConfirm, // callback to invoke with index of button pressed
//            '确定要退出程序吗?', // title
//            '确定,取消' // buttonLabels
//            );
    }
};

function onConfirm(button) {
    if (button == 1) {
        app.exitApp();
    }
}
