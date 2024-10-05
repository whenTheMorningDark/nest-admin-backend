"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMath = createMath;
exports.createText = createText;
const svgCaptcha = require("svg-captcha");
const options = {
    charPreset: '0123456789QWERTYUIOPSDFGHJKLAZXCVBNMzxcvbnmasdfghjklqwertyuiop',
    size: 4,
    fontSize: 60,
    width: 100,
    height: 40,
    noise: 2,
    background: '#ffffff',
    rotate: 15,
    letterSpacing: 0,
    noiseColor: '#000000',
    opacity: 0.1,
    pointSize: 1,
    pointStyle: 'circle',
    pointRadius: 2,
    pointPosition: 'random',
};
function createMath() {
    return svgCaptcha.createMathExpr({
        ...options,
        mathMin: 1,
        mathMax: 50,
        mathOperator: '+-',
    });
}
function createText() {
    return svgCaptcha.create(options);
}
//# sourceMappingURL=captcha.js.map