var vm=new Vue({ 
    el:"#app",
    data:{
        cryptoMenge:0, //현재 보유하고 있는 코인 수
        cryptoModifikator:1,

        // Aufgabe 1
        upgradeKosten:{ //업그레이드하는데 필요한 코인. checkCrytoMenge 함수에서 현재 보유한 코인수 crytoMenge와 비교
            botminer:10,
            rtx3090:50,
            botnetzwerk:100,
            serverraum:500
        },

        upgradeList:[
            {
                name:"Bot Miner",
                number:0
            },
            {
                name:"RTX3090",
                number:0
            },
            {
                name:"Bot Netzwerk",
                number:0
            },
            {
                name:"Serverraum",
                number:0
            },  
        ],
        
        // Aufgabe 3
        options:false,
        darkmodeActive:false //main.css에 정의되어 있는 .darkmode 스타일을 HTML 문서전체에 적용하기 위해서는 darkmodeActive 값이 필요함

    },
    methods:{
        addCrypto:function(){
            this.cryptoMenge+=1*this.cryptoModifikator;
        },

        increaseModifier:function(code){ // bot miner로 비트코인을 채굴하면 1개 더 추가로 얻을 수 있고 그래픽 카드 rtx3090으로 채굴하면 5개를 더 추가적으로 얻는다.
            switch(code){
                case "botminer":
                    if(this.cryptoMenge>=10){
                        this.cryptoModifikator+=1;
                        this.cryptoMenge-=10; // Die Kosten des Upgrades sollen von der Summe der Cryto Coins abgezogen werden. 업그레이드 비용으로 10 코인을 사용했으니 총 코인에서 10코인 공제 
                    }else{
            
                    }
                    
                    return; //break 대신에 return을 실행함으로서 increaseModifier 함수의 실행을 종료하고 이 함수를 호출한 곳으로 돌아간다.

                case "rtx3090":
                    this.cryptoModifikator+=5;
                    this.cryptoMenge-=50;
                    return;
                
                case "botnetzwerk":
                    this.cryptoModifikator+=10;
                    this.cryptoMenge-=100;
                    return;

                case "serverraum":
                    this.cryptoModifikator+=50;
                    this.cryptoMenge-=500;
                    return;
                
                default:
                    alert("Something went wrong"); //4개의 값 이외의 값이 입력되었을 경우 경고!
                    return;
            }
        },

        //Aufgabe 1 현재 채굴한 코인이 충분한지 확인하는 함수
        checkCrytoMenge:function(upgradeKosten){
            if(upgradeKosten<=this.cryptoMenge){
                return true; // 업그레이드 비용과 현재 보유하고 있는 코인 수 비교결과 보유하고 있는 코인 수가 충분하면 true
            }else{
                return false;
            }
        },

        //Aufgabe 3 Dark Mode
        toggleOptions:function(){ // HTML 문서 내 v-if 실행을 위한 data에 있는 options 속성값을 변경하는 함수
            if(this.options){ //만약 data에 있는 options 속성값이 true이면
                this.options=false; //options 속성값을 false로 변경
            }else{
                this.options=true;
            }
        },

        toggleMode:function(){
            if(this.darkmodeActive){
                this.darkmodeActive=false;
            }else{
                this.darkmodeActive=true;
            }
        }
    }

});