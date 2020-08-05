<template>

<div class="splxbodyWrapper">
  
  <v-container>

    <div class="mainHeader">
        <p class="Headertitle">Inventaire des stocks</p>
        <div><p class="date">Mardi 14 sept 2020</p> <div class="mainHeaderIcon"><v-icon>today</v-icon></div></div>
    </div>


    <v-row>
        <v-col md="8" lg="8">
            <div class="financialComptSate">

            </div>
        </v-col>
        <v-col md="4" lg="4">
            <div class="MakePreportLink" :style="{ backgroundImage: `url(${backgroundUrl})` }">
                <h2>Faire le raport <br> Journialier</h2>
                <v-btn small rounded depressed color="Importantcolor" class="splxWhite--text">Aller</v-btn>
            </div>
        </v-col>
    </v-row>

  </v-container>





  <v-container>
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page="page" :search="search" :sort-by="sortBy.toLowerCase()"
    :sort-desc="sortDesc"
    hide-default-footer
    >

    <template v-slot:header>
      <v-row>
        <v-col  cols="12" md="4" lg="4">
           <v-text-field v-model="search" dense outlined hide-details prepend-inner-icon="search" label="Rechercher"></v-text-field>
        </v-col>
        <v-col  cols="12" md="2" lg="2"></v-col>
      </v-row>
    </template>

    <template v-slot:default="props">
      <v-row>
        <v-col v-for="item in props.items" :key="item.name" cols="12" md="3" lg="3" >
          <div :class="getClass(item.Quantity)">
            <div>
              <v-icon>widgets</v-icon>
              <p>{{ item.Quantity }}</p>
              <p>{{ item.name }}</p>
            </div>
            <div class="price"><v-icon>local_offer</v-icon><p>2000 frCFA</p></div>
          </div>
        </v-col>
      </v-row>
    </template>

    <template v-slot:footer>
      <v-row class="mt-2" align="center" justify="center">
        <span class="grey--text">Items per page</span>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              text
              color="primary"
              class="ml-2"
              v-bind="attrs"
              v-on="on"
            >
              {{ itemsPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(number, index) in itemsPerPageArray"
              :key="index"
              @click="updateItemsPerPage(number)"
            >
              <v-list-item-title>{{ number }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <span
          class="mr-4
          grey--text"
        >
          Page {{ page }} of {{ numberOfPages }}
        </span>
        <v-btn
          fab
          dark
          color="blue darken-3"
          class="mr-1"
          @click="formerPage"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          color="blue darken-3"
          class="ml-1"
          @click="nextPage"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </template>

    </v-data-iterator>
  </v-container>


</div>
  
  
</template>











<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import backgroundUrl from '@/assets/img/cardFont.png'
export default {
  name: "Inventaire",
  data() {
    return {
      backgroundUrl,
       search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 8,
        sortBy: 'name',
        keys: [
          'Name',
          'Quantity',
        ],
        items: [
          {
            name: 'Frozen Yogurt',
            Quantity: 159,
          },
          {
            name: 'Ice cream sandwich',
            Quantity: 237,
          },
          {
            name: 'Eclair',
            Quantity: 262,
          },
          {
            name: 'Cupcake',
            Quantity: 305,
          },
          {
            name: 'Gingerbread',
            Quantity: 356,
          },
          {
            name: 'Jelly bean',
            Quantity: 375,
          },
          {
            name: 'Lollipop',
            Quantity: 392,
          },
          {
            name: 'Honeycomb',
            Quantity: 408,
          },
          {
            name: 'Donut',
            Quantity: 452,
          },
          {
            name: 'KitKat',
            Quantity: 518,
          },
        ],
    }
  },
  computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },


      getClass (quantity) {
        if (quantity > 350) return 'InvBox'
        else return 'InvBox2'
      },
    },
  components: {
    // HelloWorld
  }
};
</script>












<style scoped>

  .splxbodyWrapper{
    background: var(--Pricipal-background-light);
    margin-left: 18.5vw;
    height: 250vh;
  }

  .financialComptSate{
      height: 30vh;
      border-radius: 10px;
      background: var(--splx-White);
  }

  .MakePreportLink{
      height: 30vh;
      border-radius: 10px;
      background: var(--Title-color);
      background-size: 150px;
      background-repeat: no-repeat;
      background-position: bottom right;
      color: var(--Pricipal-background-light);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 10px;
  }


  
  .InvBox{
    height: 170px;
    border-radius: 10px;
    background: var(--splx-lightBlue);
    line-height: 10px;
    padding-left: 30px;
    color: var(--splx-White);
  }
  .InvBox .v-icon{
    margin-top: 20px;
    font-size: 35px;
    color: var(--Important-color);
  }
  .InvBox p:nth-child(2){
    font-size: 30px;
    font-weight: bold;
  }

  .InvBox2{
    height: 170px;
    border-radius: 10px;
    background: var(--splx-White);
    line-height: 10px;
    padding-left: 30px;
    color: var(--Default-Font-Color);
  }
  .InvBox2 .v-icon{
    margin-top: 20px;
    font-size: 35px;
    color: var(--splx-lightBlue);
  }
  .InvBox2 p:nth-child(2){
    font-size: 30px;
    font-weight: bold;
    color: var(--Important-color);
  }

  .price{
  }
  .price > p{
    font-size: 12px;
  }
  .price .v-icon{
    font-size: 15px;
  }



</style>