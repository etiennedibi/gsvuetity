<template>

<div class="splxbodyWrapper">
  
  <v-container>

    <div class="mainHeader">
        <p class="Headertitle">Dashboard</p>
        <div><p class="date">Mardi 14 sept 2020</p> <div class="mainHeaderIcon"><v-icon>today</v-icon></div></div>
    </div>

    <div class="splxJumboltron">
        <div class="greeting">
            <p>Bienvenue sur votre dashboard Alain.</p>
            <p>Tout est prêt, vous pouvez commencer à travailler !</p>
        </div>
        <img src="@/assets/img/greetingImg.png" alt="">
    </div>



    <p class="splxtitle">Produits les plus vendus</p>
    <div class="splxgraph">
      <apexchart type="area" height="100%" :options="chartOptions" :series="series"></apexchart>
    </div>


    <p class="splxtitle">Top Inventaire</p>
        <div class="extraitIventaire">
            <div class="InvBox">
                <div class="InvBoxRed">t</div>
                <div><p>Tableaux</p><p>456</p></div>
                <v-icon>branding_watermark</v-icon>
            </div>
            <div class="InvBox">
                <div class="InvBoxBlue">P</div>
                <div><p>Pantalon</p><p>63</p></div>
                <v-icon>branding_watermark</v-icon>
            </div>
            <div class="InvBox">
                <div class="InvBoxYellow">c</div>
                <div><p>Casque</p><p>823</p></div>
                <v-icon>branding_watermark</v-icon>
            </div>
            <div class="InvBox">
                <div class="InvBoxYellow">c</div>
                <div><p>Casque</p><p>823</p></div>
                <v-icon>branding_watermark</v-icon>
            </div>
        </div>


  </v-container>

</div>
  
  
</template>











<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Dashboard",
  components: {
    // HelloWorld
  },

  data: () => ({
    /* FOR BEST PRODUCT STATS */
      series: [{
        name: 'series7',
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      },
      {
        name: 'series3',
        data: [20, 50, 10, 83, 56, 22, 38]
      }],

      chartOptions: {
        chart: {
          type: 'area',
          sparkline: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
      },
  }),
};


</script>











<style scoped>

  .splxbodyWrapper{
    background: var(--Pricipal-background-light);
    margin-left: 18.5vw;
  }



/*----GREETING-----*/
.splxJumboltron{
    background: var(--Important-color);
    height: 20vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--splx-White);
}
.greeting p:first-child{
    font-weight: bold;
}
.greeting p:last-child{
    font-size: 12px;
}
.splxJumboltron > img{
    margin-top: -25px;
    height: 160px;
}



/*----STATISTICS-----*/
.splxgraph{
    background: var(--splx-White);
    height: 40vh;
    border-radius: 10px;
}



/*----INVENTAIRE-----*/
.extraitIventaire{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
}
.InvBox{
    background: var(--splx-White);
    height: 80px;
    width: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
}

.InvBox div:nth-child(1){
    height: 40px;
    width: 40px;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 21px;display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    margin-right: -25px;
    color: var(--splx-White);
}

.InvBox div:nth-child(2){
    line-height: 7px;
    color: var(--Default-Font-Color);
}

.InvBox div:nth-child(2) p:first-child{
    font-size: 15px;
    font-weight: bold;
    color:var(--Title-color);
}
.InvBox  .v-icon{
    color: var(--Default-Font-Color);
    /* font-size: 5px; */
}
.InvBoxRed{background: var(--splx-Red);}.InvBoxBlue{background: var(--splx-lightBlue);}
.InvBoxYellow{background: var(--splx-lightYellow);}








</style>