<template>
  <div class="wrapper">
    <v-container mt-16 fluid>
      <v-row no no-gutters>
        <v-col sm="12" md="12" lg="12" class="red col" ></v-col>

        <v-col md="3" class="blue" >
          <div class="productState">

          </div>
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
                      <p>100000 <br><span style="font-size:10px">frCFA</span><br><span>unitaire</span></p>
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
                      <p>500 <br><span>aujourd'hui</span></p>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
          </div>
        </v-col>





        <v-col md="6" class="yellow col" >

          <v-card>
            <v-card-title>
              <v-text-field v-model="search" dense outlined append-icon="mdi-magnify" label="Recherche" hide-details ></v-text-field>
              <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
              <p class="splxtitle">Historique</p>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search" :items-per-page="7" :page.sync="page" hide-default-footer @page-count="pageCount = $event">
              <template v-slot: item.calories="{ item }">
                <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
              </template>
            </v-data-table>
            <div class="text-center pt-2">
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </div>
          </v-card>



        </v-col>





        <v-col md="3" class="green col" >
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
  </div>
</template>























<script>
// importation des components fils
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "productdetails",
  components: {
    // HelloWorld
  },
  data: () => ({
    search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
          {
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'QUANTITE', value: 'calories' },
          { text: 'ACHAT', value: 'fat' },
          { text: 'VENTE', value: 'carbs' },
          { text: 'FOURNISSEUR', value: 'protein' },
          { text: 'DATE', value: 'iron' },
        ],
        desserts: [
          {
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
  }),
};
</script>



















<style  scoped>
 .wrapper{
   width: 100vw;
   height: 100vh;
   background: rgb(204, 204, 241);
   position: fixed;
   top: 0;
   left: 0;
   z-index: 15;
 }

 .productState{
   height: 150px;
   border-radius: 10px;
   background: var(--splx-White);
 }


 .totalSellPrice{
   height: 100px;
   border-radius: 10px;
   background: yellow;
   display: flex;
   flex-direction: column;
   justify-content: center;
 }
 .totalSellPrice > p{
   font-weight: bold;
   color: var(--Title-color);
   text-align: center;
 }

 .totalSellPrice > p span{
   font-size: 12px;
 }



 .Quantity{
   height: 100px;
   border-radius: 10px;
   padding-left: 1px;
   background: yellow;
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
 }
 .Quantity > p:first-child{
   font-weight: bold;
   color: var(--Title-color);
   font-size: 20px;
 }
 .Quantity span{
   font-size: 10px;
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