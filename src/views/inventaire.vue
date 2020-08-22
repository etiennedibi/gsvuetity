<template>

<div class="splxbodyWrapper page">
  
  <!-- ******************* -->
  <!-- HEADER INFORMATION -->
  <!-- ******************* -->
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
                <apexchart type="area" height="100%" :options="bestProductchartOptions" :series="series"></apexchart>
              </div>
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
  <!-- ********************** -->
  <!-- END HEADER INFORMATION -->
  <!-- ********************** -->



  <!-- ******************* -->
  <!-- PRODUCT LISTE -->
  <!-- ******************* -->
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

      <!-- PRODUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
      <v-dialog v-model="dialog"  transition="dialog-bottom-transition"  class="splxoverlay">
        <v-card tile>

          <v-toolbar flat color="splxWhite Importantcolor--text">
            <v-btn icon dark @click="dialog = false">
              <v-icon class="Titlecolor--text">mdi-close</v-icon>
            </v-btn> 
            <v-toolbar-title>{{ editedItem.name }}</v-toolbar-title>
          </v-toolbar>            


          <v-card-text>
            <v-container>
              <v-row class="detailsTemplate">

                <v-col cols="12" md="8" lg="8" class="leftBox">
                    <p class="titleStyle2">Statistiques generales <v-icon class="titleStyle2Icone">insert_chart</v-icon></p>
                    <v-row class="justify-space-around">
                      <div class="simpleStat">
                        <div class="oneSimpleStat">
                          <div class="staticon"> <v-icon>local_offer</v-icon></div>
                          <p><span>15000 frCFA</span><br>nouveau prix untaire</p>
                        </div>
                        <div class="oneSimpleStat">
                          <div class="staticon"> <v-icon class="splxRed--text">remove_shopping_cart</v-icon></div>
                          <p><span>15000 frCFA</span><br> ancien prix untaire</p>
                        </div>
                        <div class="oneSimpleStat">
                          <div class="staticon"> <v-icon class="Importantcolor--text">shopping_cart</v-icon></div>
                          <p><span>200</span><br>quantité en stock</p>
                        </div>
                        <div class="oneSimpleStat">
                          <div class="staticon"> <v-icon class="splxlightYellow--text">calendar_today</v-icon></div>
                          <p><span>730</span><br>quantité du mois</p>
                        </div>
                        <div class="oneSimpleStat">
                          <div class="staticon"> <v-icon>money_off</v-icon></div>
                          <p><span>20</span><br>stock achetés</p>
                        </div>
                        <div class="oneSimpleStat">
                          <div class="staticon"> <v-icon class="splxlightBlue--text">dns</v-icon></div>
                          <p><span>3072</span><br>produit achetés</p>
                        </div>
                      </div>
                      <div class="chartStat">
                        <apexchart type="line" height="100%" :options="productchartOptions" :series="editedItem.series"></apexchart>
                      </div>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4" lg="4" class="rightBox">
                  <div class="priceEvaluation">
                    <p>Evaluation du prix du produit</p>
                    <v-form>
                      <p class="priceEstimated">15000 <span>frCFA</span></p>
                      <v-container>
                        <v-row>
                          <v-col cols="6" md="6" lg="6">
                            <v-text-field dense outlined v-model="quantite" ref="quantite" type="number" :rules="[() => !!quantite || 'This field is required']"  label="Quantité" required></v-text-field>
                          </v-col>
                          <v-col cols="6" md="6" lg="6">
                            <v-text-field dense outlined v-model="prixUnitaire" ref="prixUnitaire" type="number" :rules="[() => !!prixUnitaire || 'This field is required']"  label="Prix unitaire" required></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                  </div>
                  <div class="editProduct">
                    <v-form>
                      <v-container fluid>
                        <v-row>
                          <p class="titleStyle2">Statistiques generales</p>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field dense outlined v-model="productName" ref="productName" type="text" :rules="[() => !!productName || 'This field is required']"  label="Nouvelle denomination" hint="nouvelle denomination" required></v-text-field>
                          </v-col>
                          <v-col cols="12" md="6" lg="6">
                            <v-text-field dense outlined v-model="sellprice" ref="sellprice" type="number" :rules="[() => !!sellprice || 'This field is required']" label="Prix de vente" hint="Unitaire*"  required></v-text-field>
                          </v-col >
                          <v-col cols="12" md="6" lg="6" align-self-center>
                          <v-btn small rounded depressed color="Importantcolor" class="splxWhite--text"><v-icon left color="splxlightYellow">add_shopping_cart</v-icon> Ajouter</v-btn>
                          </v-col >
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
      <!-- END PRDUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->

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
  <!-- ********************** -->
  <!-- END PRODUCT LISTE -->
  <!-- ********************** -->

 



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

      bestProductchartOptions: {
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

      productchartOptions: {
        grid: {
    show: false,},
        chart: {
          type: 'area',
          toolbar: {
          show: false,
          },
          
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '15%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          // colors: ['transparent']
          curve: 'smooth'
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          
        },
        fill: {
          opacity: [0.1, 1]
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
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

















.theme--light .v-card{
  background: var(--Pricipal-background-light);
}
/* .detailsTemplate{
  height: 70vh;
} */

.leftBox{
  background: var(--splx-White);
  border-radius: 10px;
}
.simpleStat{
  height: 60vh;
  background: var(--splx-lightYellow);
  width: 192px;
  border-radius: 10px;
  padding:14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.oneSimpleStat{
  height: 60px;
  display: flex;
  align-items: center;
}
.staticon{
  height: 30px;
  width: 30px;
  border-radius: 100px;
  background: var(--splx-White);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.staticon .v-icon{
  font-size: 15px;
}
.oneSimpleStat p{
  font-size: 13px;
  line-height: 15px;
  color: var(--Default-Font-Color);
}
.oneSimpleStat span{
  color: var(--Title-color);
}

.chartStat{
  height: 50vh;
  width: 65%;
  border-radius: 10px;
}






.rightBox{
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.rightBox .v-text-field{
  margin-bottom: -25px;
}
.priceEvaluation{
  padding: 5px;
  background: var(--Title-color);
  border-radius: 10px;
}
.priceEvaluation > p:first-child{
 text-align: center;
 font-weight: bold;
 font-size: 15px;
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
 margin-bottom: -5px;
}



.editProduct{
  height: 30vh;
  background: var(--splx-White);
  border-radius: 10px;
}
.titleStyle2{
  margin-left: 15px;
}




</style>