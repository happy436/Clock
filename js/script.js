const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');



setInterval(() => {
    let day = new Date();
    let hh = day.getHours() *30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() *deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
})


function toggle(){
    if($('body').attr('class') === 'colorful'){
        $('body').removeClass('colorful');
        $('body').addClass('dark')
    } else if($('body').attr('class') === 'dark'){
        $('body').removeClass('dark');
        $('body').addClass('light')
    } else if($('body').attr('class') === 'light'){
        $('body').removeClass('light');
        $('body').addClass('colorful')
    }
}