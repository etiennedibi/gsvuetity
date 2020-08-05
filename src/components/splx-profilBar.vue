<template>
  <div class="wrapper">

    <v-tooltip bottom color="splxlightYellow">
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="splxProfilShowBtn" @click.stop="drawer = !drawer" v-bind="attrs"
          v-on="on">
          settings
        </v-icon>
      </template>
      <span>Parametre</span>
    </v-tooltip>
    
    <v-navigation-drawer v-model="drawer" right floating app class="splxWhite">
        
        <div class="profilSpace">
            <div class="userImg"><img src="@/assets/img/profilImg.jpg" alt=""></div>
            <p>Alain Koua</p>
            <p>staff</p>
            <div class="splxbutton">Deconnexion</div>
        </div>


         <div class="role">
            <div>t</div>
            <div><p>Gestionnaire</p><p>chargé de la gestion des stocks</p></div>
            <i class="fas fa-window-restore"></i>
        </div>


        <div class="notification">
            <p class="titleStyle2">Notification <v-icon class="titleStyle2Icone">notifications_none</v-icon></p>

            <div class="mail mailUrgent">
                <div><v-icon>error</v-icon></div>
                <div><p>Gerant - rapport</p><p>Mardi 14 juin 2020</p></div>
            </div>
            <div class="mail">
                <div><v-icon>mail</v-icon></div>
                <div><p>Gerant - information</p><p>Jeudi 03 juin 2020</p></div>
            </div>
            <div class="mail">
                <div><v-icon>mail</v-icon></div>
                <div><p>Gerant - ordornance</p><p>Jeudi 03 juin 2020</p></div>
            </div>
        </div>


    </v-navigation-drawer>

 </div>
</template>




<script>
  export default {
    name: "splxProfilBar",
    data () {
      return {
        drawer: null,
      }
    },
  }
</script>




<style scoped>

  .wrapper{
    position: absolute;
  }

  .splxProfilShowBtn{
    position: fixed;
    top: 5.9vh;
    left: 96vw;
    z-index: 7;
    opacity: 1;
  }

  /*----PROFIL-----*/
.profilSpace{
    height: 35vh;
    margin-top: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.profilSpace p:nth-child(2){
    font-weight: bold;
    line-height: 5px;
}
.profilSpace p:nth-child(3){
    font-size: 14px;
    color: var(--Default-Font-Color);
    line-height: 0px;
    margin-top: 2px;
    margin-bottom: 20px;
}

.userImg{
    height: 80px;
    width: 80px;
    border-radius: 100px;
    border-right: solid 5px;
    border: 3px solid;
    border-color: var(--Default-Font-Color) var(--Default-Font-Color)  var(--Important-color)  var(--Important-color);
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
}
.userImg img{
    height: 70px;
    width: 70px;
    border-radius: 100px;
    transform: rotate(-45deg);
}


/*----JOB-----*/
.role{
    background: var(--splx-White);
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.role div:nth-child(1){
    height: 40px;
    width: 40px;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 21px;display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    margin-right: -20px;
    margin-left: 10px;
    color: var(--splx-White);
    background: var(--Default-Font-Color);
}

.role div:nth-child(2){
    line-height: 7px;
    color: var(--Default-Font-Color);
    font-size: 10px;
}

.role div:nth-child(2) p:first-child{
    font-size: 14px;
    font-weight: bold;
    color:var(--Title-color);
}
.role  i{
    color:  var(--Important-color);
}


/*----NOTIFICATION-----*/
.mail{
    background: var(--splx-White);
    height: 70px;
    display: flex;
    align-items: center;
}

.mail div:nth-child(1){
    height: 40px;
    width: 40px;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    color: var(--splx-White);
    background: #603dea86;
    margin-left: 18px;
    margin-right: 5px;
   
}

.mail div:nth-child(2){
    line-height: 7px;
    color: var(--Default-Font-Color);
    font-size: 10px;
}

.mail div:nth-child(2) p:first-child{
    font-size: 13px;
    font-weight: bold;
    color:var(--Title-color);
}
.mail .v-icon{
    font-size: 17px;
    color:  var(--Important-color);
}

.mailUrgent  .v-icon{
    color: #f47e68;
}
.mailUrgent div:nth-child(1){
    background: #f47d6865;
}



</style>