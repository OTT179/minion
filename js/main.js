var code = 
`/*Hello，今天用代码画一个banana*/
/*不对，应该是它的克星小黄人*/
/*首先小黄人的banana色*/
.minion-wrapper {
    background: #FFED43;
}
/*开始画眼睛*/
.eye {
  width: 140px;
  height: 140px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 48px;
  left: 50% 
}
.eye-left {
  margin-left:-150px
}
.eye-right {
  margin-left: 10px;
}
/*然后眼珠*/
.eyeball{
  width: 50px;
  height: 50px;
  background: #814E38;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -25px;
}
.eyeball-left {
  margin-left: 70px;
}
.eyeball-right {
  margin-left: 20px;
}
/*然后是瞳孔*/
.eyeball::before {
  content: '';
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 50px;
  background: #2C130E;
  position: absolute;
  top: 12px;
  left: 12px;
}
.eyeball::after {
  content: '';
  display: block;
  width: 10px;
  height: 11px;
  border-radius: 50px;
  background: white;
  position: absolute;
  top: 10px;
  left: 10px;
}
/*然后它的眼镜*/
.glasses {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 20px solid #848685;
  position: absolute;
  top: 28px;
  left: 50%;
}
.glasses-right {
  margin-left: -10px
}
.glasses-left {
  margin-left: -170px
}
.glasses-left::after {
  content: '';
  display: block;
  width: 20px;
  height: 94px;
  background: #848685;
  position: absolute;
  top: 23px;
  right: -20px;
}
/*来条皮带绑头上*/
.frame {
  width: 100%;
  height: 50px;
  border-top: solid 21px #504645; 
  border-bottom: solid 21px #504645; 
  background: #403D3C;
  margin-top: 90px;
  position: relative;
}
/*来两个夹子固定住*/
.frame::after,
.frame::before{
  content: '';
  display: block;
  width: 40px;
  height: 80px;
  background: #686C6A;
  border-radius: 10px/12px;
  position: absolute;
  top: -35px;
  left: 50%;
}
.frame::after {
  margin-left: -174px;
}
.frame::before {
  margin-left: 134px;
}
/*最后的就是嘴巴了*/
.mouth {
  width: 500px;
  height: 500px;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  top:-220px;
  left: 50%;
  margin-left: -250px;
}
.mouth::after {
  content: '';
  display: block;
  width: 500px;
  height: 500px;
  margin: 0px -2px;
  background: #FFED43;
}
/*好了，小黄人画完了
                    ——CC*/`

function writeCode(code,fn) {  //写代码
    let i = 0;
    let writing = setInterval(()=>{
        i++;
        cssCode.innerHTML = code.substring(0,i)
        codeContent.innerHTML =Prism.highlight(code.substring(0,i), Prism.languages.css,'css')//有色代码
        codeWrapper.scrollTop = codeWrapper.scrollHeight;
        if(i > code.length) {
            window.clearInterval(writing)
            fn && fn.call()
        }
    },80)
}
function blink() { //添加眨眼动画
    var eyelid = document.querySelectorAll('.eyelid')
    eyelid[0].classList.add('active')
    eyelid[1].classList.add('active')
}
function smile() {
    document.querySelector('.mouth').classList.add('smiling') //添加笑容动作
    setTimeout(() => {
        document.querySelector('.mouth').classList.add('active')//添加笑容样式 
    }, 4000);
}
writeCode(code,function() {
    blink()
    smile()
})
