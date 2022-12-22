<html>
    <head>
        <meta charset="UTF-8">
        <title>SOU</title>
        <link rel="stylesheet" href="style.css">
        <meta name="viewport" content="user-scalable=no"/>
    </head>
    <body>
        <!-- Можно убрать -->
        <!-- <div id="flyingTime" class="flyingTime">1</div> -->
        <div id="gamestop">
            <div id="tov">Time is over!</div>
            <div id="donescore">Your score: <span id="ds">0</span></div>
            <div id="restButtons">
                <div id="retry"><div id="blocked"></div></div>
                <div id="mainmenu"></div>
            </div>
        </div>
        <div id="blurall"></div>

        <div id="gamename">SOU</div>
        <div id="gamemodes-wrapper">
            <div id="gm-title">Game modes</div>
            <div id="gamemodes">
                <div class="modebox" id="normal">Normal</div>
                <div class="modebox" id="harder">Harder</div>
                <div class="modebox" id="satanic">Satanic</div>
            </div>
        </div>
        <div id="times">
            <div id="score"><div>0</div></div>
            <div id="timeleft">0</div>
        </div>
        <div id="customs">
            <div id="customs-open">Additional <div id="OpenEmodzi">&#10095;</div></div>
            <br/>
            <br/>
            Deaths  <input type="checkbox" checked="true" id="Deaths"/>
            <br/>
            <br/>
            Time to kill  <input type="checkbox" checked="true" id="Ttk"/>
        </div>
        <div id="main">
            
            <div id="b1" class="tap"></div>
            <div id="b2" class="tap"></div>
            <div id="b3" class="tap"></div>
            <div id="b4" class="tap"></div>
            <div id="b5" class="tap"></div>
            <div id="b6" class="tap"></div>
            <div id="b7" class="tap"></div>
            <div id="b8" class="tap"></div>
            <div id="b9" class="tap"></div>
            <div id="b10" class="tap"></div>
            <div id="b11" class="tap"></div>
            <div id="b12" class="tap"></div>
            <div id="b13" class="tap"></div>
            <div id="b14" class="tap"></div>
            <div id="b15" class="tap"></div>
            <div id="b16" class="tap"></div>
        </div>

        <div id="bl-wrap">
            <div id="blueline"></div>
        </div>

        <script src="script.js"></script>
    </body>
</html>