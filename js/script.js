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


const themeBtn = $('.toggleClass');
const selectedTheme = localStorage.getItem('color');

if(selectedTheme === null){
    $('body').addClass('colorful');
}else{
    $('body').removeClass();
    $('body').addClass(selectedTheme);
}

themeBtn.click(changeTheme)
let i = 0;

function changeTheme(){    
    const theme = ['colorful', 'dark', 'light'];
    i++;
    if(i > theme.length - 1){
        i = 0;
    }
    $('body').removeClass();
    $('body').addClass(theme[i]);
    localStorage.setItem('color',theme[i])
}
