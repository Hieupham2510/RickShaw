/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var res = {
    font: {
        type: "font",
        name: "Pony",
        srcs: ["res/fonts/Pony.ttf"]
    },


    bg: "res/bg/bg.png",
    decorTop: "res/bg/top.png",
    decorL: "res/bg/k2.png",
    decorR: "res/bg/k1.png",
    ground1: "res/bg/ground1.png",
    ground2: "res/bg/ground2.png",

    bgScore: "res/bg/bgScore.png",
    bgPopup: "res/bg/bgPopup.png",
    popupLayer: "res/bg/popupLayer.png",
    table: "res/bg/tableQuestion.png",

    logo : "res/bg/logo.png",
    titleGameOver : "res/bg/titleGameOver.png",
    titleHelp : "res/bg/titleHelp.png",

    btnPlay: "res/button/btnPlay.png",
    btnStart: "res/button/btnStart.png",
    btnReplay: "res/button/btnReplay.png",
    btnBack: "res/button/btnBack.png",
    btnHelp: "res/button/btnHelp.png",
    btnHome: "res/button/btnHome.png",
    btnSoundOn: "res/button/btnSoundOn.png",
    btnSoundOff: "res/button/btnSoundOff.png",
    btnNext: "res/button/btnNext.png",
    btnPrevious: "res/button/btnPrevious.png",
    btnLevel :"res/button/btnLevel.png",
    lock :"res/button/lock.png",

    ball: "res/item/bong.png",
    bar: "res/item/luc.png",
    progressBar: "res/item/progress.png",
    iconScore: "res/item/score.png",
    bgLevel: "res/item/muc.png",

    txtCharacter :"res/item/txtCharacter.png",
    txtWin :"res/item/txtWin.png",
    txtLose :"res/item/txtLose.png",
    txtHow : "res/item/how.png",
    txtHelp : "res/item/txtHelp.png",
    guide :"res/item/txtGuide.png",
    txtlvl : "res/item/txtSelectlvl.png",
  
    // character
    character1 : "res/item/character1.png",
    character2 : "res/item/character2.png",
    character3 : "res/item/character3.png",
    character4 : "res/item/character4.png",
    character5 : "res/item/character5.png",
    character6 : "res/item/character6.png",
    rickshaw :"res/item/rickshaw.png",
    arrow :"res/item/arrow.png",
    boxScore : "res/bg/boxScore.png",
    boxHighScore : "res/bg/boxHighScore.png",

    star0 :"res/item/star0.png",
    star1 :"res/item/star1.png",
    star2 :"res/item/star2.png",
    star3 :"res/item/star3.png",


    bgMusic : "res/sounds/bgMusic.mp3"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
