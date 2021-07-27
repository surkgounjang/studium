var vm=new Vue({
    el:'#app',
    data:{
        cryptoMenge:0,
        cryptoModifikator:1,
        upgradeKosten:{
            botminer:10,
            rtx3090:50,
            bornetzwerk:100,
            serverraum:500
        },
        informationText:"",
        upgradeListe:[
            {
                name:"Bot Miner",
                anzahlVonUpgrades:0 // Bot Miner를 사용하여 업그레이드한 횟수
            },
            {
                name:"RTX 3090",
                anzahlVonUpgrades:0
            },
            {
                name:"Bot Netzwerk",
                anzahlVonUpgrades:0
            },
            {
                name:"Serverraum",
                anzahlVonUpgrades:0
            }
        ],
        option:false, // for darkmode button active or deactivate
        darkmodeActive:false
    },

    methods:{
        addCrypto:function(){
            this.cryptoMenge+=this.cryptoModifikator;
        },

        increaseModidifier:function(equipment){
            switch(equipment){
                case "botminer":
                    if(this.checkCoin(this.upgradeKosten.botminer)){
                        this.cryptoMenge-=this.upgradeKosten.botminer; // current cryptoMenge reduce
                        this.cryptoModifikator+=1; // cryptoModifikator increase
                        this.upgradeListe[0].anzahlVonUpgrades+=1; // anzahlVonUpgrades increase
                        this.informationText="Bot Miner gekauft";// informationText
                        break;
                    }else{
                        this.informationText="Zu wenig Cryto Coins für Bot Miner,um Method zu upgrade. Sie müssen mindestens 10 Crypto Coins haben.";
                        break;
                    }

                case "rtx3090":
                    if(this.checkCoin(this.upgradeListe.rtx3090)){
                        this.cryptoMenge-=this.upgradeKosten.rtx3090; // current cryptoMenge reduce
                        this.cryptoModifikator+=5; // cryptoModifikator increase
                        this.upgradeListe[1].anzahlVonUpgrades; // anzahlVonUpgrades increase
                        this.informationText="RTX 3090 gekauft."; // informationText
                        break;
                    }else{
                        this.informationText="Zu wenig Cryto Coins für RTX 3090,um Method zu upgrade. Sie müssen mindestens 50 Crypto Coins haben.";
                        break;
                    }
                    
                case "botnetzwerk":
                    if(this.checkCoin(this.upgradeKosten.bornetzwerk)){
                        this.cryptoMenge-=this.upgradeKosten.bornetzwerk; // current cryptoMenge reduce
                        this.cryptoModifikator+=5; // cryptoModifikator increase
                        this.upgradeListe[2].anzahlVonUpgrades; // anzahlVonUpgrades increase
                        this.informationText="Bot Netzwerk gekauft."; // informationText
                        break;
                    }else{
                        this.informationText="Zu wenig Cryto Coins für Bot Netzwerk,um Method zu upgrade. Sie müssen mindestens 100 Crypto Coins haben.";
                        break;
                    }
                case "serverraum":
                    if(this.checkCoin(this.upgradeKosten.serverraum)){
                        this.cryptoMenge-=this.upgradeKosten.serverraum; // current cryptoMenge reduce
                        this.cryptoModifikator+=5; // cryptoModifikator increase
                        this.upgradeListe[3].anzahlVonUpgrades; // anzahlVonUpgrades increase
                        this.informationText="Serverraum gekauft."; // informationText
                        break;
                    }else{
                        this.informationText="Zu wenig Cryto Coins für Serverraum,um Method zu upgrade. Sie müssen mindestens 500 Crypto Coins haben.";
                        break;
                    }
                default:
                    alert('Something went wrong');
                    break;
            }
        },

        checkCoin:function(upgradeKosten){ // check upgrade cost
            if(upgradeKosten<=this.cryptoMenge){
                return true;
            }else{
                return false;
            }
        },

        toggleOption:function(){ // change options value: from false to true or from true to false
            if(this.option){
                this.option=false;
            }else{
                this.option=true;
            }
        },

        toggleDarkmodeActive:function(){
            if(this.darkmodeActive){
                this.darkmodeActive=false;
            }else{
                this.darkmodeActive=true;
            }
        }
    }
});