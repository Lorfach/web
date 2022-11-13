var elements = document.getElementsByClassName('tap');
var randoms = [];
var score = 0;
var gameStarted = false;
var time = 15;

function timeLeft(){
    let x = document.getElementById('timeleft');
    var inte = setInterval(function(){
        time = time - 1;
        x.textContent = time;
        if(time == 0){
            gameStop();
            clearInterval(inte);
        }

        if(!gameStarted){
            clearInterval(inte);
        }
        document.getElementById('ds').textContent = score;
    }, 1000)
    return inte;
}

document.getElementById('timeleft').textContent = time;

document.getElementById('Deaths').onclick = function(){
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
}

document.getElementById('retry').onclick = function(){
    retry()
}


function randomElement(){
    let x = 1 + Math.floor(Math.random() * 16);
    if(randoms.includes('b' + x)){
        randomElement()
    }else{
        return x;
    }
    
}

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

function retry(){
    document.getElementById('gamestop').style.display = 'none';
    document.getElementById('blurall').style.display = 'none';
    score = 0;
    document.getElementById('score').firstChild.textContent = score;
    document.getElementById('timeleft').textContent = time;
}

function gameStop(){
    document.getElementById('gamestop').style.display = 'block';
    document.getElementById('blurall').style.display = 'block';
    time = 16;
    gameStarted = false;
}

function addReady(){
    let x = choseElement();
    if(x == undefined){
        addReady()
    }else{
        if(x.classList.contains('ready')){
        addReady()
    }else{
        x.classList.add('ready');

        x.onmousedown = function(){
            addReady();
            x.classList.remove('ready');
            if(!gameStarted){
                gameStarted = true;
                var interval = timeLeft();
            }
            score = score + 15;
            document.getElementById('score').firstChild.textContent = score;
            console.log(score)
            document.getElementById('score').firstChild.classList.add('animate');
            setTimeout(function(){
                document.getElementById('score').firstChild.classList.remove('animate');
            },150)

            // console.log(randoms);
            x.onmousedown = function(){
                if(document.getElementById('Deaths').checked){
                    clearInterval(interval);
                    gameStop()
                }
            }

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

function grayLayer(){
    let normalmode = document.getElementById('normal');
    let hardermode = document.getElementById('harder');
    let satanicmode = document.getElementById('satanic');
    normalmode.onmousedown = function(){
        if(normalmode.style.filter == 'grayscale(80%)'){
            normalmode.style.filter = 'grayscale(0)';
        }else{
            normalmode.style.filter = 'grayscale(80%)';
        }
        hardermode.style.filter = 'grayscale(0)';
        satanicmode.style.filter = 'grayscale(0)';
    }
    
    hardermode.onmousedown = function(){
        if(hardermode.style.filter == 'grayscale(80%)'){
            hardermode.style.filter = 'grayscale(0)';
        }else{
            hardermode.style.filter = 'grayscale(80%)';
        }
        satanicmode.style.filter = 'grayscale(0)';
        normalmode.style.filter = 'grayscale(0)';
    }
    
    satanicmode.onmousedown = function(){
        if(satanicmode.style.filter == 'grayscale(80%)'){
            satanicmode.style.filter = 'grayscale(0)';
        }else{
            satanicmode.style.filter = 'grayscale(80%)';
        }
        normalmode.style.filter = 'grayscale(0)';
        hardermode.style.filter = 'grayscale(0)';
    }
}

grayLayer()

addReady();
addReady();
addReady();
addReady();

// console.log(randoms);