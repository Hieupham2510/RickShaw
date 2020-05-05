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

var gameBall;

var GameLayer = cc.Layer.extend({

    lblScore: null,

    nContent: null,

    car: null,

    ballState: 0,

    ngangs: [],

    minHeight: 0,
    heightSpace: 0,

    isTouching: false,
    touchingTime: -1,
    character1: null,
    character2: null,
    character3: null,
    character4: null,
    character5: null,
    progressBar: null,
    timeProgress: null,
    carEnemy: null,
    rope: null,
    lblNum1: null,
    lblNum2: null,
    lblRes1: null,
    lblRes2: null,
    lblRes3: null,
    num1: null,
    num2: null,
    res1: null,
    res2: null,
    res3: null,
    doneTurn: null,
    rickshaw: null,
    POSWIN: null,
    POSLOSE: null,
    winflag: null,
    trueAnswer: null,
    afterScore: null,
    lblQuesMark: null,
    Result: null,
    timeInit: null,
    randomPhepTinh: null,



    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        console.log("init game layer");


        this.nContent = new cc.Node();
        this.addChild(this.nContent, 1);



        this.character1 = new cc.Sprite(res.character1);
        this.character2 = new cc.Sprite(res.character2);
        this.character3 = new cc.Sprite(res.character3);
        this.character4 = new cc.Sprite(res.character4);
        this.character5 = new cc.Sprite(res.character5);

        let self = this;
        if (cc.sys.capabilities.hasOwnProperty('touches')) {
            console.log("adđ touch  ne");
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                swallowTouches: true,
                onTouchBegan: function (touch, event) {
                    // console.log("touch ne");
                    if (gameScene.gameState == 1 && self.randPos != null && self.randPos != undefined) {
                        if (self.lblRes1 != null && self.lblRes2 != null && self.lblRes3 != null && self.lblRes1 != undefined && self.lblRes2 != undefined && self.lblRes3 != undefined) {
                            switch (self.randPos) {
                                case 1:
                                    if (self.checkPositionMatch(self.lblRes1, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = false;
                                        console.log("SAI");
                                    }
                                    if (self.checkPositionMatch(self.lblRes2, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = false;
                                        console.log("SAI");

                                    }
                                    if (self.checkPositionMatch(self.lblRes3, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = true;
                                        console.log("DUNG");
                                    }
                                    break;

                                case 2:
                                    if (self.checkPositionMatch(self.lblRes1, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = true;
                                        console.log("DUNG");

                                    }
                                    if (self.checkPositionMatch(self.lblRes2, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = false;
                                        console.log("SAI");

                                    }
                                    if (self.checkPositionMatch(self.lblRes3, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = false;
                                        console.log("SAI");
                                    }
                                    break;

                                case 3:
                                    if (self.checkPositionMatch(self.lblRes1, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = false;
                                        console.log("SAI");
                                    }
                                    if (self.checkPositionMatch(self.lblRes2, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = true;
                                        console.log("DUNG");
                                    }
                                    if (self.checkPositionMatch(self.lblRes3, touch.getLocation())) {
                                        self.isTouching = true;
                                        self.doneTurn = true;
                                        self.trueAnswer = false;
                                        console.log("SAI");
                                    }
                                    break;

                            }
                        }

                        self.touchingTime = 0;
                        return true;
                    }
                    return false;
                },
                onTouchEnded: function (touch, event) {
                    console.log("touch ne");
                    if (gameScene.gameState == 1) {
                        self.isTouching = false;
                        return true;
                    }
                    return false;
                },
                onTouchCancelled: function (touch, event) {
                    console.log("touch ne");
                    if (gameScene.gameState == 1) {
                        self.isTouching = false;
                        return true;
                    }
                    return false;
                }
            }, this);
        }
        else {
            console.log("adđ mouse  ne");
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: function (event) {
                    console.log("touch ne");
                    if (gameScene.gameState == 1) {
                        self.isTouching = true;
                        self.touchingTime = 0;
                        return true;
                    }
                    return false;

                },
                onMouseMove: function (event) {
                },
                onMouseUp: function (event) {
                    if (gameScene.gameState == 1) {
                        self.isTouching = false;
                        return true;
                    }
                    return false;
                }
            }, this);
        }

        return true;
    },

    onEnter: function () {
        this._super();
        this.scheduleUpdate();

        console.log("onGameLayer enter");
    },

    onExit: function () {
        this._super();
        var that = this;
        var cal = function () {
            that.unscheduleUpdate();
        };
        console.log("onGameLayer exit");
    },

    initGame: function () {
        this.removeAllChildren();
        this.nContent.y = 0;

        this.POSWIN = size.width / 2.5;
        this.POSLOSE = size.width / 1.65;
        this.winflag = false;
        this.trueAnswer = false;
        this.timeInit = 0;
        this.randomPhepTinh = 0;

        this.timeProgress = 100;
        gameScene.gameState = 10;
        gameScene._score = 0;
        gameScene._level = 0;
        this.Result = 0;

        console.log("level", gameScene.levelSelect);

        var bgGameLayer = new cc.Sprite(res.popupLayer);
        bgGameLayer.setScale(scaleMin);
        bgGameLayer.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(bgGameLayer, 0);

        let bgBar = new cc.Sprite(res.progressBar);
        bgBar.setScale(scaleMin);
        bgBar.attr({
            x: size.width / 2,
            y: size.height / 1.15
        });
        this.addChild(bgBar, 100);

        this.progressBar = new ccui.LoadingBar(res.bar);
        this.progressBar.setPercent(100);
        this.progressBar.attr({
            x: bgBar.width / 2,
            y: bgBar.height / 2
        });
        bgBar.addChild(this.progressBar, 100);
        this.progressBar.setPercent(100);

        this.nodeCar = new cc.Sprite(res.rickshaw);
        this.nodeCar.attr({
            x: size.width / 2,
            y: size.height / 3
        });
        this.addChild(this.nodeCar, 1);
        this.nodeCar.setScale(0.6);

        this.arrow = new cc.Sprite(res.arrow);
        this.arrow.attr({
            x: size.width / 2,
            y: size.height / 2.15
        });
        this.addChild(this.arrow, 20);
        this.arrow.setScale(1.75);


        this.table = new cc.Sprite(res.table);
        this.table.attr({
            x: size.width / 2,
            y: size.height / 1.5
        });
        this.addChild(this.table, 20);
        // this.table.setScale(0.8);

        this.lblNum1 = new cc.LabelTTF("", "Pony", 38);
        this.table.addChild(this.lblNum1, 100);
        this.lblNum1.attr({
            x: this.table.width / 6,
            y: this.table.height / 1.65
        });

        this.lblSgin = new cc.LabelTTF("", "Pony", 38);
        this.table.addChild(this.lblSgin, 100);
        this.lblSgin.attr({
            x: this.table.width / 3.25,
            y: this.table.height / 1.65
        });

        this.lblNum2 = new cc.LabelTTF("", "Pony", 38);
        this.table.addChild(this.lblNum2, 100);
        this.lblNum2.attr({
            x: this.table.width / 2.25,
            y: this.table.height / 1.65
        });

        this.lblEqual = new cc.LabelTTF("", "Pony", 38);
        this.table.addChild(this.lblEqual, 100);
        this.lblEqual.attr({
            x: this.table.width / 1.65,
            y: this.table.height / 1.65
        });

        this.lblQuesMark = new cc.LabelTTF("", "Pony", 38);
        this.table.addChild(this.lblQuesMark, 100);
        this.lblQuesMark.attr({
            x: this.table.width / 1.24,
            y: this.table.height / 1.65
        });

        this.lblRes1 = new cc.LabelTTF("", "Pony", 40);
        this.table.addChild(this.lblRes1, 100);
        this.lblRes1.attr({
            x: this.table.width / 5.5,
            y: this.table.height / 9
        });

        this.lblRes2 = new cc.LabelTTF("", "Pony", 40);
        this.table.addChild(this.lblRes2, 100);
        this.lblRes2.attr({
            x: this.table.width / 2,
            y: this.table.height / 9
        });

        this.lblRes3 = new cc.LabelTTF("", "Pony", 40);
        this.table.addChild(this.lblRes3, 100);
        this.lblRes3.attr({
            x: this.table.width / 1.2,
            y: this.table.height / 9
        });

        this.carEnemy = new cc.Sprite(res.character6);
        this.carEnemy.attr({
            x: this.nodeCar.width * 1.1,
            y: this.nodeCar.height / 3
        });
        this.nodeCar.addChild(this.carEnemy, 20);
        this.carEnemy.setScale(0.85);

        this.car = new cc.Sprite();
        if (characterSelect == 0) {
            this.car.setSpriteFrame(this.character1.getSpriteFrame());
        }
        if (characterSelect == 1) {
            this.car.setSpriteFrame(this.character2.getSpriteFrame());
        }
        if (characterSelect == 2) {
            this.car.setSpriteFrame(this.character3.getSpriteFrame());
        }
        if (characterSelect == 3) {
            this.car.setSpriteFrame(this.character4.getSpriteFrame());
        }
        if (characterSelect == 4) {
            this.car.setSpriteFrame(this.character5.getSpriteFrame());
        }

        this.car.setScale(0.85);
        this.car.attr({
            x: 0 - 120,
            y: this.nodeCar.height / 3
        });
        this.nodeCar.addChild(this.car, 10);
        this.car.setFlippedX(360);
        this.initMath();
        gameScene.gameState = 1;
    },

    randResPos: function (res) {
        res2 = res + this.getRandomBw(1, 10);
        res3 = res + this.getRandomBw(1, 10);
        this.randPos = this.getRandomBw(1, 3);
        switch (this.randPos) {
            case 1:
                this.lblRes1.setString(res2);
                this.lblRes2.setString(res3);
                this.lblRes3.setString(res);
                break;
            case 2:
                this.lblRes1.setString(res);
                this.lblRes2.setString(res2);
                this.lblRes3.setString(res3);
                break;
            case 3:
                this.lblRes1.setString(res3);
                this.lblRes2.setString(res);
                this.lblRes3.setString(res2);
                break;

            default:
                break;
        }
    },

    initMath: function () {
        setTimeout(() => {
            this.lblQuesMark.setString("?");
            this.lblEqual.setString("=");

            this.setLevelMath();
            this.lblNum1.setString(this.num1);
            this.lblNum2.setString(this.num2);
            switch (this.randomPhepTinh) {
                case 1:
                    this.lblSgin.setString("+");
                    var res = this.num1 + this.num2;
                    this.randResPos(res);
                    break;
                case 2:
                    if (this.num1 >= this.num2) {
                        this.lblSgin.setString("-");
                        var res = this.num1 - this.num2;
                        this.randResPos(res);
                    } else {
                        this.lblSgin.setString("+");
                        var res = this.num1 + this.num2;
                        this.randResPos(res);
                    }
                    break;
                case 3:
                    if (this.num1 < 11) {
                        this.lblSgin.setString("x");
                        var res = this.num1 * this.num2;
                        this.randResPos(res);
                    } else {
                        this.lblSgin.setString("+");
                        var res = this.num1 + this.num2;
                        this.randResPos(res);
                    }

                    break;
                case 4:
                    if (this.num1 % this.num2 == 0) {
                        this.lblSgin.setString(":");
                        var res = this.num1 / this.num2;
                        this.randResPos(res);
                    } else {
                        this.lblSgin.setString("+");
                        var res = this.num1 + this.num2;
                        this.randResPos(res);
                    }

                    break;

            }
            this.Result = res;

        }, this.timeInit);
        this.doneTurn = false;


    },

    setLevelMath: function () {
        if (gameScene.levelSelect == 1) {
            this.num1 = this.getRandomBw(1, 10);
            this.num2 = this.getRandomBw(1, 9);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 2) {
            this.num1 = this.getRandomBw(1, 20);
            this.num2 = this.getRandomBw(1, 20);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 3) {
            this.num1 = this.getRandomBw(1, 30);
            this.num2 = this.getRandomBw(1, 30);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 4) {
            this.num1 = this.getRandomBw(1, 40);
            this.num2 = this.getRandomBw(1, 40);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 5) {
            this.num1 = this.getRandomBw(1, 50);
            this.num2 = this.getRandomBw(1, 50);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 6) {
            this.num1 = this.getRandomBw(1, 60);
            this.num2 = this.getRandomBw(1, 60);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 7) {
            this.num1 = this.getRandomBw(1, 70);
            this.num2 = this.getRandomBw(1, 70);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 8) {
            this.num1 = this.getRandomBw(1, 80);
            this.num2 = this.getRandomBw(1, 80);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 9) {
            this.num1 = this.getRandomBw(1, 90);
            this.num2 = this.getRandomBw(1, 90);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 10) {
            this.num1 = this.getRandomBw(1, 100);
            this.num2 = this.getRandomBw(1, 100);
            this.randomPhepTinh = this.getRandomBw(1, 2);
        }
        if (gameScene.levelSelect == 11) {
            this.num1 = this.getRandomBw(1, 100);
            this.num2 = this.getRandomBw(1, 100);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 12) {
            this.num1 = this.getRandomBw(1, 120);
            this.num2 = this.getRandomBw(1, 120);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 13) {
            this.num1 = this.getRandomBw(1, 130);
            this.num2 = this.getRandomBw(1, 130);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 14) {
            this.num1 = this.getRandomBw(1, 140);
            this.num2 = this.getRandomBw(1, 140);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 15) {
            this.num1 = this.getRandomBw(1, 150);
            this.num2 = this.getRandomBw(1, 150);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 16) {
            this.num1 = this.getRandomBw(1, 160);
            this.num2 = this.getRandomBw(1, 160);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 17) {
            this.num1 = this.getRandomBw(1, 170);
            this.num2 = this.getRandomBw(1, 170);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 18) {
            this.num1 = this.getRandomBw(1, 180);
            this.num2 = this.getRandomBw(1, 180);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 19) {
            this.num1 = this.getRandomBw(1, 190);
            this.num2 = this.getRandomBw(1, 190);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
        if (gameScene.levelSelect == 20) {
            this.num1 = this.getRandomBw(1, 200);
            this.num2 = this.getRandomBw(1, 200);
            this.randomPhepTinh = this.getRandomBw(1, 4);
        }
    },

    reloadMinHeight: function () {
        this.minHeight = gameBall.y + gameBall.getHeightHalp() * 8;
    },
    getRandomBw: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    countScore: function () {
        if (this.afterScore == gameScene._score) {
            gameScene._bestScore = this.afterScore;
        }
        if (this.afterScore < gameScene._score) {
            if (gameScene._score < gameScene._bestScore) {
                gameScene._bestScore = gameScene._bestScore;
            } else {
                gameScene._bestScore = gameScene._score;
            }

        }
        if (this.afterScore > gameScene._score) {
            gameScene._bestScore = this.afterScore;
        }
    },

    update: function (dt) {
        if (gameScene.gameState == 1) {
            this.timeProgress -= 1 / 30;
            this.progressBar.setPercent(this.timeProgress);
            if (this.winflag == false) {
                this.timeInit = 1000;
                this.nodeCar.x += 0.10;
                if (this.doneTurn == true) {
                    this.lblQuesMark.setString(this.Result);
                    this.lblRes1.setString("");
                    this.lblRes2.setString("");
                    this.lblRes3.setString("");
                    this.initMath();
                    if (this.trueAnswer == true) {
                        this.nodeCar.x -= 20;
                        gameScene._score += 10;
                        console.log("score :", gameScene._score)
                    } else return;
                }
            }

            if (this.nodeCar.x <= this.POSWIN) {
                this.nodeCar.x = this.POSWIN;
                this.nodeCar.x += 0;
                this.winflag = true;
                console.log("WIN GAME");
                this.progressBar.setPercent(0);
            }

            if (this.nodeCar.x >= this.POSLOSE) {
                this.nodeCar.x = this.POSLOSE;
                this.nodeCar.x += 0;
                this.winflag = true;
                console.log("LOSE GAME");
                this.progressBar.setPercent(0);
            }

            if (this.progressBar.getPercent() == 0) {
                this.winflag = true;
                this.countScore();
                gameScene.gameState = 0;
                gameScene.onEndGame();
            }
        }


    },

    checkPositionMatch: function (obj, touchPos) {
        var nodeSpaceLocation = obj.getParent().convertToNodeSpace(touchPos);
        if (cc.rectContainsPoint(obj.getBoundingBox(), nodeSpaceLocation)) {
            return true;
        } else {
            return false;
        }
    },
});

GameLayer.create = function () {
    var gameLayer = new GameLayer();

    return gameLayer;
};
