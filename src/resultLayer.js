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


var ResultLayer = cc.Layer.extend({

    lblScore: null,
    lblHighScore: null,
    star: null,
    star1: null,
    star2: null,
    star3: null,
    star0: null,
    txtWin : null , 
    txtLose : null ,
    imgTxt : null ,


    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        console.log("init result layer");

        this.star1 = new cc.Sprite(res.star1);
        this.star3 = new cc.Sprite(res.star3);
        this.star2 = new cc.Sprite(res.star2);
        this.star0 = new cc.Sprite(res.star0);

        this.txtLose = new cc.Sprite(res.txtLose);
        this.txtWin = new cc.Sprite(res.txtWin);

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


        var boxScore = new cc.Sprite(res.boxScore);
        boxScore.attr({
            x: bang.width / 3,
            y: bang.height / 2.5
        });
        bang.addChild(boxScore, 1);

        var boxHighScore = new cc.Sprite(res.boxHighScore);
        boxHighScore.attr({
            x: bang.width / 1.5,
            y: bang.height / 2.5
        });
        bang.addChild(boxHighScore, 1);

        this.imgTxt = new cc.Sprite(res.txtWin);
        this.imgTxt.attr({
            x: bang.width / 2,
            y: bang.height / 1.3
        });
        bang.addChild(this.imgTxt, 1);
        this.imgTxt.setScale(1.35);


        this.star = new cc.Sprite();
        this.star.attr({
            x: bang.width / 2,
            y: bang.height / 1.75
        });
        bang.addChild(this.star, 1);

        {
            this.lblScore = new cc.LabelTTF(gameScene._score.toString(), "Pony", 40);
            boxScore.addChild(this.lblScore, 10);
            this.lblScore.attr({
                x: boxScore.width / 2,
                y: boxScore.height / 10
            });

            this.lblHighScore = new cc.LabelTTF(gameScene._bestScore.toString(), "Pony", 40);
            boxHighScore.addChild(this.lblHighScore, 10);
            this.lblHighScore.attr({
                x: boxHighScore.width / 2,
                y: boxHighScore.height / 10
            });
        }

        this.btnReplay = new ccui.Button();
        this.btnReplay.loadTextureNormal(res.btnReplay, ccui.Widget.LOCAL_TEXTURE);
        this.btnReplay.attr({
            x: bang.width * 0.4,
            y: 130
        });
        bang.addChild(this.btnReplay, 0);
        this.btnReplay.addClickEventListener(function () {
            gameScene.onLevel();
        });

        this.btnHome = new ccui.Button();
        this.btnHome.loadTextureNormal(res.btnHome, ccui.Widget.LOCAL_TEXTURE);
        this.btnHome.attr({
            x: bang.width * 0.6,
            y: 130
        });
        bang.addChild(this.btnHome, 0);
        this.btnHome.addClickEventListener(function () {
            console.log("on home");

            gameScene.onHome();
        });


        return true;
    },

    onEnter: function () {
        this._super();
        this.lblScore.setString(gameScene._score.toString());
        this.lblHighScore.setString(gameScene._bestScore.toString());
    },

    updateLabel: function () {
        if (gameScene._score >= 0 && gameScene._score < 50) {
            this.star.setSpriteFrame(this.star0.getSpriteFrame());
            this.imgTxt.setSpriteFrame(this.txtLose.getSpriteFrame());
        } else if (gameScene._score >= 50 && gameScene._score < 80) {
            this.star.setSpriteFrame(this.star1.getSpriteFrame());
            this.imgTxt.setSpriteFrame(this.txtWin.getSpriteFrame());
        } else if (gameScene._score >= 80 && gameScene._score < 150) {
            this.star.setSpriteFrame(this.star2.getSpriteFrame());
            this.imgTxt.setSpriteFrame(this.txtWin.getSpriteFrame());
        } else if (gameScene._score >= 150) {
            this.star.setSpriteFrame(this.star3.getSpriteFrame());
            this.imgTxt.setSpriteFrame(this.txtWin.getSpriteFrame());
        }

        this.lblScore.setString(gameScene._score.toString());
        if (gameScene._score < 10) {
            this.lblScore.setString(("000" + gameScene._score.toString()));
        } else if (gameScene._score >= 10 && gameScene._score < 100) {
            this.lblScore.setString(("00" + gameScene._score.toString()));
        } else if (gameScene._score >= 100 && gameScene._score < 1000) { this.lblScore.setString("00" + parseInt(gameScene._score)); }
        else { this.lblScore.setString("0" + parseInt(gameScene._score)); }

        this.lblHighScore.setString(gameScene._bestScore.toString());
        if (gameScene._bestScore < 10) {
            this.lblHighScore.setString(("000" + gameScene._bestScore.toString()));
        } else if (gameScene._bestScore >= 10 && gameScene._bestScore < 100) {
            this.lblHighScore.setString(("00" + gameScene._bestScore.toString()));
        } else if (gameScene._bestScore >= 100 && gameScene._bestScore < 1000) { this.lblHighScore.setString("00" + parseInt(gameScene._bestScore)); }
        else { this.lblHighScore.setString("0" + parseInt(gameScene._bestScore)); }
    }
});

ResultLayer.create = function () {
    var popupHelp = new ResultLayer();
    // popupHelp.retain();
    // gameScene.addChild(hitEffect, 10);
    return popupHelp;
};
