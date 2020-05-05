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

var characterSelect = 0 ; 
var CharacterLayer = cc.Layer.extend({

    btnHome: null,
    btnReplay: null,
    character1: null,
    character2: null,
    character3: null,
    character4: null,
    character5: null,


    ctor: function () {

        this._super();
        console.log("init charactor layer");
        var instance = this;

        this.character1 = new cc.Sprite(res.character1);
        this.character2 = new cc.Sprite(res.character2);
        this.character3 = new cc.Sprite(res.character3);
        this.character4 = new cc.Sprite(res.character4);
        this.character5 = new cc.Sprite(res.character5);
        
        //characterSelect = 0;
        var blackLayer = new cc.Sprite(res.popupLayer);
        blackLayer.setScale(scale.x, scale.y);
        blackLayer.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(blackLayer, 0);

        var bang = new cc.Sprite(res.bgPopup);
        bang.setScale(scaleMin);
        bang.attr({
            x: size.width / 2,
            y: size.height / 2 - 20
        });
        this.addChild(bang, 1);

        var how = new cc.Sprite(res.txtCharacter);
        how.attr({
            x: bang.width / 2,
            y: bang.height / 1.3
        });
        bang.addChild(how, 1);


        this.btnReplay = new ccui.Button();
        this.btnReplay.loadTextureNormal(res.btnStart, ccui.Widget.LOCAL_TEXTURE);
        this.btnReplay.attr({
            x: bang.width / 2,
            y: 170

        });
        bang.addChild(this.btnReplay, 0);
        this.btnReplay.addClickEventListener(function () {
            gameScene.onPlay();
        });

        this.character = new cc.Sprite(res.character1);
        this.character.attr({
            x: bang.width / 2,
            y: bang.height / 2
        });
        bang.addChild(this.character, 1);
        this.character.setScale(0.85);

        this.btnHome = new ccui.Button();
        this.btnHome.loadTextureNormal(res.btnBack, ccui.Widget.LOCAL_TEXTURE);
        this.btnHome.attr({
            x: bang.width / 1.32,
            y: bang.height / 1.3

        });
        this.btnHome.setScale(0.85);
        bang.addChild(this.btnHome, 0);
        this.btnHome.addClickEventListener(function () {
            gameScene.onHome();
        });

        var next = new ccui.Button();
        next.loadTextureNormal(res.btnNext, ccui.Widget.LOCAL_TEXTURE);
        next.attr({
            x: bang.width / 1.68,
            y: 170

        });
        next.setScale(0.85);
        bang.addChild(next, 0);
        next.addClickEventListener(function () {
            instance.btnNext();
        
        });

        var previous = new ccui.Button();
        previous.loadTextureNormal(res.btnPrevious, ccui.Widget.LOCAL_TEXTURE);
        previous.attr({
            x: bang.width / 2.5,
            y: 170

        });
        previous.setScale(0.85);
        bang.addChild(previous, 0);
        previous.addClickEventListener(function () {
            instance.btnPrevious();
           
        });

        return true;
    },

    btnNext: function () {
        console.log("next");
        characterSelect++;

        switch (characterSelect) {
            // case 0:
            //     this.character1.setSpriteFrame(this.character1.getSpriteFrame());
            //     break;
            case 1:
                this.character.setSpriteFrame(this.character2.getSpriteFrame());
                break;
            case 2:
                this.character.setSpriteFrame(this.character3.getSpriteFrame());
                break;
            case 3:
                this.character.setSpriteFrame(this.character4.getSpriteFrame());
                break;
            case 4:
                this.character.setSpriteFrame(this.character5.getSpriteFrame());
                break;
              
        }
        if (characterSelect >= 4) {
            characterSelect = 4;
        }

    },
    btnPrevious: function () {
        characterSelect--;

        switch (characterSelect) {
            case 0:
                this.character.setSpriteFrame(this.character1.getSpriteFrame());
                break;
            case 1:
                this.character.setSpriteFrame(this.character2.getSpriteFrame());
                break;
            case 2:
                this.character.setSpriteFrame(this.character3.getSpriteFrame());
                break;
            case 3:
                this.character.setSpriteFrame(this.character4.getSpriteFrame());
                break;
            case 4:
                this.character.setSpriteFrame(this.character5.getSpriteFrame());
                break;

        }
        if (characterSelect <= 0) {
            characterSelect = 0;
        }
    },


});

CharacterLayer.create = function () {
    var popupCharactor = new CharacterLayer();

    return popupCharactor;
};
