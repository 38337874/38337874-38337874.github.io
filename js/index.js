const nav = document.querySelector('.nav')//获取导航栏
window.addEventListener('scroll', fixNav)//监听滚动事件

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {//如果滚动距离大于一定值
        nav.classList.add('active')//添加active类
    } else {
        nav.classList.remove('active')//移除active类
    }
}