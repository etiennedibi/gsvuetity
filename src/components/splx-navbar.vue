<template>
  <div class="splxNavbar">
        
        <div class="splxlogo">
            <div class="logo"> <img src="@/assets/img/logo.png" alt="logo"> </div> <p>Simplex</p>
        </div>

        <div class="splxmenu">
            <div class="othersTabs">
                <router-link :to="{name: 'Dashboard'}"><div class="tab"><v-icon class="TabI">format_align_left</v-icon><p>Dashboard</p></div></router-link>
                <router-link :to="{name: 'Inventaire'}"><div class="tab"><v-icon class="TabI">assignment</v-icon> <p>Inventaire</p></div></router-link>
                <a href=""><div class="tab"><v-icon class="TabI">store</v-icon> <p>Stocks</p></div></a>
                <a href=""><div class="tab"><v-icon class="TabI">local_offer</v-icon> <p>Evaluation</p></div></a>
                <router-link :to="{name: 'Enregistrement'}"><div class="tab"><v-icon class="TabI">add_shopping_cart</v-icon> <p>Enregistrement</p></div></router-link>
            </div>
            <div class="mailTabs">
                <v-icon class="TabI">email</v-icon>
                <p>Accédez à votre boîte de <br>  reception</p>
                <div class="splxbutton">M-Box</div>
            </div>
        </div>

    </div>
</template>












<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "splxNavbar",
  components: {
    // HelloWorld
  }
};
</script>










<style scoped>

.splxNavbar{
  height: 100vh;
  width: 18.5vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}


.splxlogo{
    height: 15vh;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 21px;
    color: var(--Title-color);
}

.splxlogo > div{
    margin-left: 30px;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    border-radius: 100px;
}
.splxlogo > div > img{
    height: 40px;
    width: 40px;
    border-radius: 100px;
}

.splxmenu{
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.othersTabs a{
    text-decoration: none;
    color: inherit;
}
.tab{
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--Default-Font-Color);
    cursor: pointer;
}

.router-link-exact-active p{
    border-right: solid  var(--Important-color) 5px;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color:  var(--Important-color);
}

.tab > .TabI{
    margin-right: 20px;
    margin-left: 40px;
    font-size: 20px;
    color: var(--Default-Font-Color);
}
.router-link-exact-active .TabI{
    color:  var(--Important-color);
}

.tab > p{
    height: 25px;
    width: 100%;
}

.mailTabs{
    background: var(--Pricipal-background-light);
    height: 200px;
    width: 225px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    border-radius: 10px;
}
.mailTabs > .TabI{
    margin-top: 15px;
    font-size: 60px;
    color:  var(--Important-color);
}
.mailTabs>p{
    text-align: center;
    margin-bottom: 5px;
    color: #3a475c;
}

/*-------END------------*/









/*---------------------------------
    ---RESPOSIVE DESIGN--- 
-----------------------------------*/

/*---- FOR MEDIUM VIEWPORT SIZE-----*/
/*--------960px > < 1264px----------*/

@media (min-width: 960px) and (max-width: 1264px){

    /*LOGO*/
    .splxlogo > div{
    margin-left: 2vw;
    margin-right: 10px;
}
   
   /*MENU*/
.tab{
    font-size: 15px;
}

.activeTab{
    font-size: 15px;
}

.tab > .TabI{
    margin-right: 18px;
    margin-left: 2.5vw;
    font-size: 19px;
}
    
   /*MAIL*/ 
.mailTabs{
    height: 200px;
    width: 15vw;
    font-size: 15px;
}
}
/*-------END------------*/
</style>