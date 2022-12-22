var elements = document.getElementsByClassName('tap');
var randoms = [];
var score = 0;
var gameStarted = false;
var time = 15;
var mode = 'normal';
var timekill = 800;
var killout;
var iskilledtrue = true;

document.getElementById('normal').style.filter = 'grayscale(80%)';

document.getElementById('customs-open').onclick = function(){
    if(document.getElementById('customs').style.height != '285px'){
        document.getElementById('customs').style.height = '285px';
        document.getElementById('OpenEmodzi').style.transform = 'rotate(90deg)';
        document.getElementById('customs-open').style.borderBottom = '1px solid grey';
    }else{
        document.getElementById('customs').style.height = '15px';
        document.getElementById('OpenEmodzi').style.transform = 'rotate(0deg)';
        document.getElementById('customs-open').style.borderBottom = '0px';
    }
}

// Функция включения\выключения таймера
function timeLeft(){
    let x = document.getElementById('timeleft');
    var inte = setInterval(function(){
        time = time - 1;
        x.textContent = time;

        if(time <= 4 || time > -1){
            if(time <= 3){
                x.style.color = '#FF3F49';
                x.classList.add('timeleftanim');
                document.getElementById('flyingTime').textContent = time;
                // можно убрать
                document.getElementById('flyingTime').classList.add('flyingTime');
                // можно убрать
                setTimeout(function(){
                    document.getElementById('flyingTime').classList.remove('flyingTime');
                },390)
                setTimeout(function(){
                    x.classList.remove('timeleftanim');
                },200)

                // Добавление анимации
            }
        }else{
            x.textContent.style.color = 'white';
        }

        if(time == 0){
            gameStop('aboltus');
            clearInterval(inte);
            clearTimeout(killout);
            document.getElementById('tov').textContent = 'Time is out!';
        }
        if(!gameStarted){
            clearInterval(inte);
        }
        document.getElementById('ds').textContent = score;
    }, 1000)
    return inte;
}
// Приписывание изначального времени в таймер (работает только до старта игры)
document.getElementById('timeleft').textContent = time;
// Добавление инпуту функции для включения\выключения смертей
document.getElementById('Deaths').onclick = function(){
    if(this.checked){
        for(let i = 1; i <= 16; i++){
            if(!document.getElementById('b' + i).classList.contains('ready')){
                document.getElementById('b' + i).onmousedown = gameStop
                
            }
        }
        document.getElementById('tov').textContent = 'Died!';
    }else{
        for(let i = 1; i <= 16; i++){
            if(document.getElementById('b' + i).onmousedown == gameStop){
                document.getElementById('b' + i).onmousedown = null;
            }
        }
    }
}

document.getElementById('Ttk').onclick = function(){
    if(this.checked){
        iskilledtrue = true;
    }else{
        iskilledtrue = false;
    }
}
// хз че это но оно должно быть
if(document.getElementById('Deaths').checked){
    for(let i = 1; i <= 16; i++){
        if(!document.getElementById('b' + i).classList.contains('ready')){
            document.getElementById('b' + i).onmousedown = gameStop
        }
    }
    document.getElementById('tov').textContent = 'Died!';
    
}else{
    for(let i = 1; i <= 16; i++){
        if(document.getElementById('b' + i).onmousedown == gameStop){
            document.getElementById('b' + i).onmousedown = null;
        }
    }
}

// Функция создающая случайное число, которого нету в массиве игровых элементов
function randomElement(){
    let x = 1 + Math.floor(Math.random() * 16);
    if(randoms.includes('b' + x)){
        randomElement()
    }else{
        return x;
    }
    
}

function timeline(){
    let x = 0;
    let inter = setInterval(function(){
        if(x < 4){
            x++;
            console.log(x)
        }else{
            clearInterval(inter);
        }
    },100)
}

// Функция выбора случайного элемента (из пустых)
function choseElement(){
    let b = 'b' + randomElement();
    randoms.push(b);
    let x = document.getElementById(b);
    for (let i = 0; i <= randoms.length; i++) {
        if (randoms[i] == 'bundefined') {
          randoms.splice(i, 1);
        }
    }
    return x;
}
// Функция для старта игры с начала
function retry(){
    document.getElementById('gamestop').style.display = 'none';
    document.getElementById('blurall').style.display = 'none';
    document.getElementById('score').firstChild.textContent = 0;
    document.getElementById('timeleft').textContent = time;
    score = 0;
    for(let i = 0; i <= 2; i++){
        if(document.getElementsByClassName('modebox')[i].style.filter == 'blur(0.4px) grayscale(80%)'){
            document.getElementsByClassName('modebox')[i].style.filter = 'grayscale(80%)';
        }
        document.getElementsByClassName('modebox')[i].style.backgroundColor = 'rgba(211, 191, 155, 1)';
    }

}
// Функция остановки игры
function gameStop(agr = false){
    document.getElementById('retry').onclick = null;
    document.getElementById('blocked').classList.add('blockedanimation');
    setTimeout(function(){
        document.getElementById('retry').onclick = function(){
            retry();
        }
        document.getElementById('blocked').classList.remove('blockedanimation');
    }, 970)

    document.getElementById('gamestop').style.display = 'block';
    document.getElementById('blurall').style.display = 'block';
    time = 15;
    gameStarted = false;
    document.getElementById('score').firstChild.textContent = score;
    let kam1 = document.getElementById('gamestop').style.border;
    let kam2 = document.getElementById('gamestop').style.backgroundColor
    let kam3 =  document.getElementById('tov').style;
    if(agr == 'aboltus'){
        document.getElementById('gamestop').style.border = '2px solid rgba(37, 220, 20, 0.8)';
        kam2.backgroundColor = 'rgba(25, 29, 26, 0.97)';
        kam3.border = '2px solid rgba(167, 220, 20, 0.8)';
        kam3.borderTop = '0px';
        console.log(document.getElementById('tov').textContent)
        document.getElementById('tov').textContent = 'Time is out!';
    }else{
        document.getElementById('gamestop').style.border = '2px solid rgba(220, 20, 60, 0.8)';
        kam2.backgroundColor = 'rgba(25, 25, 25, 0.97)';
        kam3.border = '2px solid rgba(220, 20, 60, 0.8)';
        kam3.borderTop = '0px';
        console.log(document.getElementById('tov').textContent)
        document.getElementById('tov').textContent = 'Died!';
    }
    let x = document.getElementById('blueline').classList;
    if(x.contains('normal')){
        document.getElementById('blueline').classList.remove('normal');
    }
    if(x.contains('harder')){
        document.getElementById('blueline').classList.remove('harder');
    }
    if(x.contains('satanic')){
        document.getElementById('blueline').classList.remove('satanic');
    }
    document.getElementById('timeleft').style.color = 'white';
}
// Функция создания новой игровой кнопки и добавления ей всех игровых свойств
function addReady(){
    // Выбираем элемент для игры
    let x = choseElement();
    // Проверяем доступен ли элемент
    if(x == undefined){
        addReady()
    }else{
        // Проверяем не имеет ли он уже функции элемента в игре
        if(x.classList.contains('ready')){
        addReady()
    }else{
        // Если не имеет то добавление игровых функций элементу
        x.classList.add('ready');
        // При нажатии на игровую кнопку - создается новая
        x.onmousedown = function(){
            addReady();
            x.classList.remove('ready');
            // Если игра не началась, то это ее начинает
            if(!gameStarted){
                gameStarted = true;
                var interval = timeLeft();
                for(let i = 0; i <= 2; i++){
                    if(document.getElementsByClassName('modebox')[i].style.filter == 'grayscale(80%)'){
                        document.getElementsByClassName('modebox')[i].style.filter = 'blur(0.4px) grayscale(80%)';
                    }else{
                        document.getElementsByClassName('modebox')[i].style.filter = 'blur(0.4px)';
                    }
                    document.getElementsByClassName('modebox')[i].style.backgroundColor = 'rgba(211, 191, 155, 0.5)';
                }
            }
            // Добавление опыта и его анимации
            score = score + 15;
            document.getElementById('score').firstChild.textContent = score;
            document.getElementById('score').firstChild.classList.add('animate');
            setTimeout(function(){
                document.getElementById('score').firstChild.classList.remove('animate');
            },150)
            // Работа анимации временной линии
            if(iskilledtrue){
                if(mode == 'normal'){
                    if(document.getElementById('blueline').classList.contains('normal')){
                        document.getElementById('blueline').classList.remove('normal');  
                    }
                    setTimeout(function(){
                        document.getElementById('blueline').classList.add('normal');
                    },10)
                }
                
                if(mode == 'harder'){
                    if(document.getElementById('blueline').classList.contains('harder')){
                        document.getElementById('blueline').classList.remove('harder');  
                    }
                    setTimeout(function(){
                        document.getElementById('blueline').classList.add('harder');
                    },10)
                }
                
                if(mode == 'satanic'){
                    if(document.getElementById('blueline').classList.contains('satanic')){
                        document.getElementById('blueline').classList.remove('satanic');  
                    }
                    setTimeout(function(){
                        document.getElementById('blueline').classList.add('satanic');
                    },10)
                }
            }
            // 12321312
            // !!!!!!!!!!!!!!!!!!!

            if(iskilledtrue){
                if(killout){
                    clearTimeout(killout)
                    killout = setTimeout(function(){
                        gameStop();
                    },timekill)
                }else{
                    killout = setTimeout(function(){
                        gameStop();
                    },timekill)
                }   
            }

            // Выключение игры и таймера при смерти
            x.onmousedown = function(){
                if(document.getElementById('Deaths').checked){
                    clearInterval(interval);
                    gameStop();
                }
            }
            // Удаление не нужных элементов массива randoms
            for (let i = 0; i <= randoms.length; i++) {
                if (randoms[i] == 'bundefined') {
                  randoms.splice(i, 1);
                }
            }

            for (let i = 0; i <= randoms.length; i++) {
                if (randoms[i] == x.id) {
                  randoms.splice(i, 1);
                }
            }
            
        }
    }
    }
    
}
// Функция для выбора режима игры
function grayLayer(){
    let normalmode = document.getElementById('normal');
    let hardermode = document.getElementById('harder');
    let satanicmode = document.getElementById('satanic');
    // Выбор нормального режима
    normalmode.onmousedown = function(){
        if(!gameStarted){
            if(this.style.filter == 'grayscale(80%)'){
                this.style.filter = 'grayscale(0)';
            }else{
                this.style.filter = 'grayscale(80%)';
            }
            mode = 'normal';
            timekill = 800;
            if(document.getElementById('blueline').classList.contains('harder')){
                document.getElementById('blueline').classList.remove('harder');
            }
            if(document.getElementById('blueline').classList.contains('satanic')){
                document.getElementById('blueline').classList.remove('satanic');
            }
            hardermode.style.filter = 'grayscale(0)';
            satanicmode.style.filter = 'grayscale(0)';
        }
    }
    // Выбор сложного режима
    hardermode.onmousedown = function(){
        if(!gameStarted){
            if(this.style.filter == 'grayscale(80%)'){
                this.style.filter = 'grayscale(0)';
            }else{
                this.style.filter = 'grayscale(80%)';
            }
            mode = 'harder';
            timekill = 400;
            if(document.getElementById('blueline').classList.contains('normal')){
                document.getElementById('blueline').classList.remove('normal');
            }
            if(document.getElementById('blueline').classList.contains('satanic')){
                document.getElementById('blueline').classList.remove('satanic');
            }
            satanicmode.style.filter = 'grayscale(0)';
            normalmode.style.filter = 'grayscale(0)';
        }
    }
    // Выбор сатанического режима
    satanicmode.onmousedown = function(){
        if(!gameStarted){
            if(this.style.filter == 'grayscale(80%)'){
                this.style.filter = 'grayscale(0)';
            }else{
                this.style.filter = 'grayscale(80%)';
            }
            mode = 'satanic';
            timekill = 250;
            if(document.getElementById('blueline').classList.contains('normal')){
                document.getElementById('blueline').classList.remove('normal');
            }
            if(document.getElementById('blueline').classList.contains('harder')){
                document.getElementById('blueline').classList.remove('harder');
            }
            normalmode.style.filter = 'grayscale(0)';
            hardermode.style.filter = 'grayscale(0)';   
        }
    }
}

grayLayer()

addReady();
addReady();
addReady();
addReady();

// setInterval(function(){
//     console.log(mode);
// },20)

console.log(window.innerHeight);