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
              <div class="statesTitle">
                <p>Meileur vente <br> <span>Donut</span></p>
                <p>600 <span>ventes</span></p>
              </div>
              <div>
                <apexchart type="area" height="100%" :options="chartOptions" :series="series"></apexchart>
              </div>
              <!-- <div id="chart">
              </div> -->
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

      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable class="splxoverlay">
        <v-card tile>
          <v-toolbar flat color="Importantcolor splxWhite--text">
            <v-btn icon dark @click="dialog = false">
              <v-icon class="Titlecolor--text">mdi-close</v-icon>
            </v-btn> 
            <v-toolbar-title>{{ editedItem.name }}</v-toolbar-title>
          </v-toolbar>
                        

          <v-card-text>
            <v-container mt-5 fluid class="modalcontainer">
          <v-row no no-gutters>
            <v-col sm="12" md="12" lg="12" class="col" ></v-col>

            <v-col md="3" class="modalleftbox" >
              <div class="productprice">
                  <p class="titleStyle2">Prix de vente<v-icon class="titleStyle2Icone">local_offer</v-icon></p>
                  <v-container>
                    <v-row no-gutters class="justify-space-around">
                      <v-col md="6">
                        <div class="totalSellPrice">
                          <p>1000000 <br><span style="font-size:10px">frCFA</span><br><span>stock</span></p>
                        </div>
                      </v-col>
                      <v-col md="5">
                        <div class="totalSellPrice">
                          <p>{{ editedItem.price }} <br><span style="font-size:10px">frCFA</span><br><span>unitaire</span></p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
              </div>
              <div class="productprice">
                  <p class="titleStyle2">Quantité<v-icon class="titleStyle2Icone">line_style</v-icon></p>
                  <v-container>
                    <v-row no-gutters class="justify-space-around">
                      <v-col md="6">
                        <div class="Quantity">
                          <p>1000 <br><span>debut du mois</span></p>
                        </div>
                      </v-col>
                      <v-col md="5">
                        <div class="Quantity">
                          <p>{{ editedItem.Quantity }} <br><span>aujourd'hui</span></p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
              </div>
            </v-col>





            <v-col md="6" class="col" >
              
              <div class="productState">
                <div class="statesTitle">
                  <p>Meileur vente <br> <span>Donut</span></p>
                  <p>600 <span>ventes</span></p>
                </div>
                <div>
                  <apexchart type="area" height="100%" :options="chartOptions" :series="editedItem.series"></apexchart>
                </div>
              </div>
              <v-form>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" md="12" lg="12">
                      <v-textarea label="One row" auto-grow outlined rows="8" row-height="12" v-model="Productdenomination" :rules="[() => !!Productdenomination || 'This field is required']" hint="We'll never share your email with anyone else" persistent-hint required></v-textarea>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field dense outlined v-model="productName" ref="productName" type="text" :rules="[() => !!productName || 'This field is required']"  label="Nouvelle denomination" hint="nouvelle denomination" required></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field dense outlined v-model="sellprice" ref="sellprice" type="number" :rules="[() => !!sellprice || 'This field is required']" label="Prix de vente" hint="Unitaire*" persistent-hint required></v-text-field>
                    </v-col >
                    <v-col cols="12" md="6" lg="6" align-self-center>
                    <v-btn large rounded depressed color="Importantcolor" class="splxWhite--text"><v-icon left color="splxlightYellow">add_shopping_cart</v-icon> Ajouter</v-btn>
                    </v-col >
                  </v-row>
                </v-container>
              </v-form>



            </v-col>





            <v-col md="3" class="col" >
              <div class="priceEvaluation">
                <p>Evaluation du prix du produit</p>
                <p>
                  Utiliser la methode CMUP pour evaluez le prix unitaire du produit en fonction de sa quantité en stock,
                  et de sa quantité dans le prochain stock.
                </p>

                <v-form>
                  <p class="priceEstimated">15000 <span>frCFA</span></p>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="12" lg="12">
                        <v-text-field dense outlined v-model="quantite" ref="quantite" type="number" :rules="[() => !!quantite || 'This field is required']"  label="Quantité" hint="Q du produit dan le nouveau stock" persistent-hint required></v-text-field>
                      </v-col>
                      <v-col cols="12" md="12" lg="12">
                        <v-text-field dense outlined v-model="prixUnitaire" ref="prixUnitaire" type="number" :rules="[() => !!prixUnitaire || 'This field is required']"  label="Prix unitaire" required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-container>
          </v-card-text>
        </v-card>
        
      </v-dialog>

    </template>






    <template v-slot:default="props">
      <v-row>

        <v-col v-for="item in props.items" :key="item.name" cols="12" md="3" lg="3">
          <div :class="getClass(item.Quantity)" @click="editItem(item)">
            <div>
              <v-icon>widgets</v-icon>
              <p>{{ item.Quantity }}</p>
              <p>{{ item.name }}</p>
            </div>
            <div class="price"><v-icon>local_offer</v-icon><p>{{item.price}} fr</p></div>
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


  <!-- <v-btn
    color="primary"
    class="ma-2"
    dark
    @click="dialog = true"
  >
    Open Dialog 1
  </v-btn> -->
      <!-- <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable>
        <v-card tile>
          <v-toolbar flat dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn> 
              {{ editedItem.name }}
          </v-toolbar>
          <v-card-text>
            la vie
          </v-card-text>
        </v-card>
      </v-dialog> -->
  <!-- <productdetails></productdetails> -->



</div>
  
  
</template>


















<script>
// @ is an alias to /src
import backgroundUrl from '@/assets/img/cardFont.png'
// import productdetails from "@/components/products/productdetails.vue"


export default {
  name: "Inventaire",
  data() {
    return {
      /* FOR BACKGROUND */
      backgroundUrl,

      /* FOR BEST PRODUCT STATS */

      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
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
      ],
      items: this.$store.state.products,


      /* FOR DIFFERENCIATION BETWEEN PRODUCT */
      editedItem: {
        id: '',
        name: 0,
        Quantity: 0,
        price: 0,
      },
      defaultItem: {
        id: '',
        name: 0,
        Quantity: 0,
        price: 0,
      },
      editedIndex: -1,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,

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



/* FOR DIFFERENCIATION BETWEEN PRODUCT */
    getClass (quantity) {
      if (quantity > 350) return 'InvBox'
      else return 'InvBox2'
    },


/* FOR PRODUCT DETAIL MODAL */
    editItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

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
  }

  .financialComptSate{
      height: 30vh;
      border-radius: 5px;
      background: var(--splx-White);
  }
  .statesTitle{
    height: 8vh;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
    font-weight: bold;
  }
  .statesTitle p:first-child{
    font-size: 15px;
    color: var(--Default-Font-Color);
  }
  .statesTitle p:first-child span{
    font-size: 17px;
    color: var(--Title-color);
  }
  .statesTitle p:last-child {
    color: var(--Important-color);
    font-size: 25px;
  }
  .statesTitle p:last-child span{
    font-size: 13px;
  }
  .financialComptSate div:last-child{
    height: 22vh;
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
    display: flex;
    justify-content: space-around;
  }

  .price{
    padding-top: 25px;
    width: 40%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 15px;
  }
  .price > p{
    font-size: 12px;
  }
  .price .v-icon{
    font-size: 15px;
    color: var(--splx-lightYellow);
  }

  .InvBox div:first-child{
    width: 70%;
  }
 
  .InvBox div:first-child .v-icon{
    margin-top: 20px;
    font-size: 35px;
    color: var(--Important-color);
  }
  .InvBox div:first-child p:nth-child(2){
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
    display: flex;
    justify-content: space-around;
  }
  .InvBox2 div:first-child{
    width: 70%;
  }
  .InvBox2 div:first-child .v-icon{
    margin-top: 20px;
    font-size: 35px;
    color: var(--splx-lightBlue);
  }
  .InvBox2 div:first-child p:nth-child(2){
    font-size: 30px;
    font-weight: bold;
    color: var(--Important-color);
  }
  .InvBox2 div:first-child p:nth-child(3){
    line-height: 15px;
  }















.modalcontainer{
background: #613dea21;
}

.productState{
   height: 30vh;
   border-radius: 10px;
   margin: 10px !important;
   background: var(--splx-White);
 }

  /* .modalleftbox{
    display: flex;
    flex-direction: column;
    justify-content: center;
  } */

  .totalSellPrice{
   height: 100px;
   border-radius: 10px;
   background: var(--splx-lightBlue);
   display: flex;
   flex-direction: column;
   justify-content: center;
 }
 .totalSellPrice > p{
   font-weight: bold;
   color: var(--splx-White);
   text-align: center;
 }

 .totalSellPrice > p span{
   font-size: 12px;
   color: var(--Title-color);
 }



 .Quantity{
   height: 100px;
   border-radius: 10px;
   padding-left: 1px;
   background: var(--splx-lightBlue);
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
 }
 .Quantity > p:first-child{
   font-weight: bold;
   color: var(--splx-White);
   font-size: 20px;
 }
 .Quantity span{
   font-size: 10px;
   color: var(--Title-color);
 }



.priceEvaluation{
 padding: 25px;
 height: 100%;
 background: var(--Title-color);
 border-radius: 10px;
}
.priceEvaluation > p:first-child{
 font-weight: bold;
 font-size: 19px;
 color: var(--splx-White);
}
.priceEvaluation > p:nth-child(2){
 font-size: 14px;
 color: var(--Default-Font-Color);
}


.priceEstimated{
 text-align: center;
 font-size: 19px;
 font-weight: bold;
 color: var(--splx-White);
 text-decoration: dashed underline overline;
 text-decoration-color: var(--splx-Red);
}




</style>