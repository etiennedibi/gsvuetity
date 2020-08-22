<template>

<div class="splxbodyWrapper">
  
  <!-- ******************* -->
  <!-- HEADER INFORMATION -->
  <!-- ******************* -->
  <v-container>

    <div class="mainHeader">
        <p class="Headertitle">Fournisseurs</p>
        <v-text-field v-model="search" dense outlined append-icon="mdi-magnify" label="Recherche" hide-details style="widht:100px"></v-text-field>
        <div><p class="date">Mardi 14 sept 2020</p> <div class="mainHeaderIcon"><v-icon>today</v-icon></div></div>
    </div>


  </v-container>
  <!-- ********************** -->
  <!-- END HEADER INFORMATION -->
  <!-- ********************** -->





  <v-container>
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page="page" :search="search" :sort-by="sortBy.toLowerCase()"
    :sort-desc="sortDesc"
    hide-default-footer
    >


      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name" cols="12" md="4" lg="4">
            <div :class="getClass (item)">
              <div class="iconBox">
                <v-icon color="Importantcolor">domain</v-icon>
              </div>
              <div class="infoBox">
                <h3 class="Titlecolor--text">{{ item.denomination }}</h3>
                <p>
                  <v-icon>fingerprint</v-icon>{{ item.matricule }}  -  <v-icon>place</v-icon>{{ item.adresse }}  -  
                  <v-icon>alternate_email</v-icon>{{ item.mail }}  -  <v-icon>contacts</v-icon>{{ item.PersonneContact }}  -  <v-icon>contact_phone</v-icon>{{ item.numero }}
                </p>
                <v-btn color="Importantcolor" icon @click="openExpandDiv()"> <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon></v-btn>
              </div>
               <v-expand-transition>
                  <v-list rounded  v-show="show">
                    <v-subheader>PRODUITS FOURNIT</v-subheader>
                    <v-list-item-group v-model="element" color="primary">
                      <v-list-item v-for="(element, i) in item.save" :key="i" >
                        <v-list-item-content>
                          <!-- <v-list-item-icon> {{element.quantity}}  </v-list-item-icon> -->
                          <v-list-item-title> <span>{{element.quantity}}</span> <span>{{element.product}}</span> <span>{{element.price}}</span></v-list-item-title>
                          <!-- <v-list-item-icon> {{element.price}} </v-list-item-icon> -->
                          <!-- <v-list-item-title v-text="item.save.quantity"></v-list-item-title>
                          <v-list-item-title v-text="item.save.price"></v-list-item-title> -->
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
              </v-expand-transition>
            </div>
          </v-col>
        </v-row>
      </template>


      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Produits par page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" @click="updateItemsPerPage(number)">
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text">
            Page {{ page }} sur {{ numberOfPages }}
          </span>
          <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
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
// import backgroundUrl from '@/assets/img/cardFont.png'
// import productdetails from "@/components/products/productdetails.vue"


export default {
  name: "fournisseur",
  data() {
    return {

      /* FOR DATA ITERATOR */
      itemsPerPageArray: [4, 8, 12],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 8,
      sortBy: 'name',
      keys: [
        'id',
        'Name',
        'Quantity',
        'price',
        'save.product'
      ],
      items: [
        {
          denomination: 'PizzaIvoire',
          matricule: '4526FTP35-D85',
          adresse: 'Bonoua Lapapaleterie',
          mail: 'LeBonyahourt@gmail.com',
          PersonneContact:'Bosson Daniel',
          numero: '11229652',
          save:[
            { product: 'Poivre', quantity:40, price:30000 },
            { product: 'Yahourt Vigor', quantity:150, price:750000 }
          ]
        },
        {
          denomination: 'LaBanane Corporate',
          matricule: '4526FTP35-D85',
          adresse: 'Bonoua Lapapaleterie',
          mail: 'LeBonyahourt@gmail.com',
          PersonneContact:'Bosson Daniel',
          numero: '11229652',
          save:[
            { product: 'Poivre', quantity:40, price:30000 },
            { product: 'Yahourt Vigor', quantity:150, price:750000 }
          ]
        },
        {
          denomination: 'AliCorporate',
          matricule: '2365YU568K3P',
          adresse: 'Abidjan boulvard latrille',
          mail: 'policop@gmail.com',
          PersonneContact:'Paulo Dimbaba',
          numero: '48659632',
          save:[
            { product: 'donus', quantity:40, price:30000 },
            { product: 'Yahourt Vigor', quantity:150, price:15750000 },
            { product: 'Mandarine', quantity:70, price:10000 },
            { product: 'Anannas', quantity:23, price:47000 }
          ]
        },
        {
          denomination: 'LeBon yahourt',
          matricule: '4526FTP35-D85',
          adresse: 'Bonoua Lapapaleterie',
          mail: 'LeBonyahourt@gmail.com',
          PersonneContact:'Bosson Daniel',
          numero: '11229652',
          save:[
            { product: 'Poivre', quantity:40, price:30000 },
            { product: 'Yahourt Vigor', quantity:150, price:750000 }
          ]
        },
        {
          denomination: 'Leporco',
          matricule: '2HUJ58-KI568K3P',
          adresse: 'Abidjan Cocody Gestocy',
          mail: 'Leporco@gmail.com',
          PersonneContact:'Lavri Poulet',
          numero: '15659632',
          save:[
            { product: 'donus', quantity:40, price:30000 },
            { product: 'Yahourt Vigor', quantity:150, price:750000 },
            { product: 'Garba', quantity:60, price:70000 },
          ]
        },
      ],


      /* EXPANDINGCARD */
      show: false,
      element: 1,

    }
  },

 

  methods:{
    /* FOR DIFFERENCIATION BETWEEN PRODUCT */
    getClass (item) {
      if (item.save.length <= 2) return 'InvBox'
      else if (item.save.length > 3 && item.save.length < 6) return 'InvBox2'
      else return 'InvBox3'
    },

    openExpandDiv(){
      this.show = !this.show
    }


  },

  components: {
    // productdetails
  }
};
</script>












<style scoped>

  .splxbodyWrapper{
    background: var(--Pricipal-background-light);
    margin-left: 18.5vw;
    min-height: 100vh;
  }

  .v-input {
    max-width: 50%;
  }





  .InvBox{
    border-radius: 10px;
    background: var(--splx-White);
    color: var(--Default-Font-Color);
  }
  .InvBox2{
    border-radius: 10px;
    background: #1bc5bd40;
    color: var(--Default-Font-Color);
  }
  .InvBox3{
    border-radius: 10px;
    background: #f9d66896;
    color: var(--Default-Font-Color);
  }

  .iconBox{
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iconBox .v-icon{
    font-size: 50px;
  }
  .infoBox{
    height: 55%;
    text-align: center;
    padding: 0 15px;
  }
  .infoBox .v-icon{
    font-size: 21px;
  }
  .infoBox p:nth-child(2){
    font-size: 13px;
  }
  .v-sheet.v-list:not(.v-sheet--outlined){
    border-top: dashed 0.1px #613dea40;
  }
  











  .productListe{
    /* height: 200px; */
    /* background: green; */
  }

  .v-list-item__title {
    font-size: 13px;
    display: flex;
    justify-content: space-around;
  }

  .v-list-item-title span{
    display: block;
  }
  .v-list-item-title span:nth-child(2){
    border-radius: 100px;
    /* background: yellow; */
  }


</style>