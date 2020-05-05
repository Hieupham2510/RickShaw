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

var PopupLevel = cc.Layer.extend({

    arrLock: [],
    arrMenu1: [],
    arrMenu2: [],
    arrMenu3: [],
    arrMenu4: [],

    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        console.log("init Popup level");

        var bang = new cc.Sprite(res.bgPopup);
        bang.attr({
            x: size.width / 2,
            y: size.height / 2 - 20
        });
        this.addChild(bang, 1);

        var how = new cc.Sprite(res.txtlvl);
        how.attr({
            x: bang.width / 2,
            y: bang.height / 1.3
        });
        bang.addChild(how, 1);

        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 5; j++) {
                let level = i * 5 + j;
                var btnMusicNormal = new cc.Sprite(res.btnLevel);
                var btnMusicSeleced = new cc.Sprite(res.btnLevel);
                btnMusicSeleced.setScale(0.9);
                btnMusicSeleced.setOpacity(200);
                var btnMusicDisable = new cc.Sprite(res.btnLevel);
                var btnLevel = new cc.MenuItemSprite(btnMusicNormal, btnMusicSeleced, btnMusicDisable, function () {
                    // this.onButtonEffect();
                    // flareEffect(flare, this, this.onNewGame);
                    gameScene.levelSelect = level + 1;
                    gameScene.onCharactor();

                    console.log("level :", gameScene.levelSelect);
                }.bind(this));


                var text = new cc.LabelTTF((level + 1).toString(), res.font.srcs[0], 32);
                //  text.setFontFillColor(new cc.Color(69, 69, 68, 255));
                btnLevel.addChild(text);
                text.attr({
                    x: btnLevel.width / 2,
                    y: text.height / 2 + 5
                });

                if (i == 0) {

                    this.arrMenu1.push(btnLevel);
                }
                else if (i == 1) {

                    this.arrMenu2.push(btnLevel);
                } else if (i == 2) {
                    this.arrMenu3.push(btnLevel);

                } else {
                    this.arrMenu4.push(btnLevel);
                }
            }
        }

        var menu1 = new cc.Menu(this.arrMenu1[0], this.arrMenu1[1], this.arrMenu1[2], this.arrMenu1[3], this.arrMenu1[4]);
        menu1.alignItemsHorizontallyWithPadding(15);
        menu1.x = bang.width / 2;
        menu1.y = bang.height / 1.85 + this.arrMenu1[0].height / 2 + 10;
        bang.addChild(menu1, 1);

        var menu = new cc.Menu(this.arrMenu2[0], this.arrMenu2[1], this.arrMenu2[2], this.arrMenu2[3], this.arrMenu2[4]);
        menu.alignItemsHorizontallyWithPadding(15);
        menu.x = bang.width / 2;
        menu.y = bang.height / 1.85 - this.arrMenu1[0].height / 2;
        bang.addChild(menu, 1);

        var menu2 = new cc.Menu(this.arrMenu3[0], this.arrMenu3[1], this.arrMenu3[2], this.arrMenu3[3], this.arrMenu3[4]);
        menu2.alignItemsHorizontallyWithPadding(15);
        menu2.x = bang.width / 2;
        menu2.y = bang.height / 1.85 - this.arrMenu1[0].height * 1.68;
        bang.addChild(menu2, 1);

        var menu3 = new cc.Menu(this.arrMenu4[0], this.arrMenu4[1], this.arrMenu4[2], this.arrMenu4[3], this.arrMenu4[4]);
        menu3.alignItemsHorizontallyWithPadding(15);
        menu3.x = bang.width / 2;
        menu3.y = bang.height / 1.85 - this.arrMenu1[0].height * 2.85;

        bang.addChild(menu3, 1);


        return true;
    }
});

PopupLevel.create = function () {
    var popupLevel = new PopupLevel();
    // popupLevel.retain();
    // gameScene.addChild(hitEffect, 10);
    return popupLevel;
};
