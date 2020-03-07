// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://studyh5.zhihuishu.com/videoStudy.html*
// @grant        none
// ==/UserScript==
(function() {
    // 'use strict';
    var currentTime = ''
    function func(){
        var ans = document.getElementsByClassName('topic-item')
        if(ans.length > 0){
            ans[0].click()
            var btns = document.getElementsByClassName('btn')
            for(var el of btns)
                if(el.innerText == '关闭')
                    el.click()
        }
        var playButton = document.getElementById('playButton')
        var progress = document.getElementsByClassName('progress-num')
        var playList = document.getElementsByClassName('clearfix video')
        var flag = false
        for(var el of playList){
            if(el.className == 'clearfix video current_play'){
                var finish = el.getElementsByClassName('time_icofinish')
                if(finish.length > 0){
                    flag = true
                    document.getElementById('nextBtn').click()
                    break
                }
            }
        }
        if(flag || progress.length < 1) return
        var proValue = progress[0].innerText
        proV.innerText = '进度：' + proValue
        if(/^(\d*)%$/.exec(proValue)[1] > 80){
            document.getElementById('nextBtn').click()
        }

        if(playButton.className == 'playButton')
            playButton.click()

    }
    var box = document.createElement('div')
    box.id = 'toolBox'
    var proV = document.createElement('div')
    box.appendChild(proV)
    box.style = `
        position: fixed;
        background: rgb(225,225,225,0.1);
        top: 0px;
        left: 0px;
        width: 100px;
        height: 100px;
        z-index: 999;
        backdrop-filter: blur(5px);
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    document.body.appendChild(box)
    var inter = setInterval(func, 1000)
    // Your code here...
})();

