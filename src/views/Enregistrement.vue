<template>
  <div class="splxbodyWrapper text-center">
    
    <v-container>

      <div class="mainHeader">
          <p class="Headertitle">Enregistrement de stock</p>
          <div>
            <v-dialog v-model="dialog" persistent max-width="400px">
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on" class="splx-Icon-Text-button Titlecolor--text"><v-icon>add_shopping_cart</v-icon><p>Ajouter un produit</p></div>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Nouveau Produit</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="12" lg="12">
                        <v-text-field dense outlined ref="Productdenomination" v-model="Productdenomination" :rules="[() => !!Productdenomination || 'This field is required']" label="Denomination" hint="We'll never share your email with anyone else" persistent-hint required></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn large rounded depressed color="Importantcolor" class="splxWhite--text" @click="dialog = false">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <div class="mainHeaderIcon"><v-icon>today</v-icon></div>
          </div>
      </div>

    


      <v-form>
        <v-container class="pincipalContainer">
          <v-row>

             <v-col cols="12" md="6" lg="6">

              <p class="titleStyle2">Stock <!--<v-icon class="titleStyle2Icone">shopping_cart</v-icon>--></p>
              <div class="splxAlerteInfo">
                <v-icon>info</v-icon>
                <p>Lor maxime odio blanditiis mollitia repellat, libero praes entium corrupti unde earum nihil. Vero.</p>        
              </div>

               <v-container fluid>
                <v-row>
                  <v-col cols="12" md="3" lg="3">
                    <v-text-field dense outlined v-model="prix" ref="prix" type="number" :rules="[() => !!prix || 'This field is required']"  label="Prix" hint="du Stock" persistent-hint required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-select :items="items" dense label="Produit" v-model="product" ref="product" :rules="[() => !!product || 'This field is required']" outlined ></v-select>
                  </v-col>
                  <v-col cols="12" md="3" lg="3">
                    <v-text-field dense outlined v-model="quantity" ref="quantity" type="number" :rules="[() => !!quantity || 'This field is required']"  label="Quantité" hint="Quantité" persistent-hint required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field dense outlined v-model="buyprice" ref="buyprice" type="number" :rules="[() => !!buyprice || 'This field is required']"  label="prix D'achat" hint="Unitaire*" persistent-hint required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field dense outlined v-model="sellprice" ref="sellprice" type="number" :rules="[() => !!sellprice || 'This field is required']" label="Prix de vente" hint="Unitaire*" persistent-hint required></v-text-field>
                  </v-col >
                </v-row>
              </v-container>

               <v-btn large rounded depressed color="Importantcolor" class="splxWhite--text"><v-icon left color="splxlightYellow">add_shopping_cart</v-icon> Ajouter</v-btn>

            </v-col>



            <v-col cols="12" md="6" lg="6" class="otherFont">
  
              <p class="titleStyle2">Fournisseur
                
                    <v-dialog v-model="dialogm1" persistent max-width="300px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon class="titleStyle2Icone" v-bind="attrs" v-on="on">local_shipping</v-icon>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="headline">Choisir un fournisseur</span>
                        </v-card-title>
                        <v-card-text>
                          <v-radio-group v-model="dialogm1" column>
                            <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                            <v-radio label="Bahrain" value="bahrain"></v-radio>
                            <v-radio label="Bolivia" value="bolivia"></v-radio>
                            <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                            <v-radio label="Botswana" value="botswana"></v-radio>
                            <v-radio label="Brazil" value="brazil"></v-radio>
                            <v-radio label="Brunei" value="brunei"></v-radio>
                            <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                            <v-radio label="Burkina Faso" value="burkina"></v-radio>
                            <v-radio label="Burma" value="burma"></v-radio>
                            <v-radio label="Burundi" value="burundi"></v-radio>
                          </v-radio-group>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="dialogm1 = false">Close</v-btn>
                          <v-btn large rounded depressed color="Importantcolor" class="splxWhite--text" @click="dialogm1 = false">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  
                
                
              </p>
              <div class="splxAlerteInfo">
                <v-icon>info</v-icon>
                <p>Lor maxime odio blanditiis mollitia repellat, libero praes entium corrupti unde earum nihil. Vero.</p>        
              </div>

              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="9" lg="9">
                    <v-text-field dense outlined ref="denomination" v-model="denomination" :rules="[() => !!name || 'This field is required']" label="Denomination" hint="We'll never share your email with anyone else" persistent-hint required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="3" lg="3">
                    <v-text-field dense outlined ref="matricule" v-model="matricule" :rules="[() => !!matricule || 'This field is required']" type="number" label="N°" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field dense outlined ref="adresse" v-model="adresse" :rules="[() => !!adresse || 'This field is required']"  label="Localisation" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field dense outlined ref="email" v-model="email" :rules="[() => !!email || 'This field is required']" label="e-mail" required></v-text-field>
                  </v-col>
                  <v-col cols="12" md="7" lg="7">
                    <v-text-field dense outlined  v-model="contactFullname" :rules="nameRules"  label="Nom du contact"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="5" lg="5">
                    <v-text-field dense outlined ref="contact" v-model="contact" :rules="[() => !!contact || 'This field is required']"  label="Contact" required></v-text-field>
                  </v-col>
                  <v-col md="12" lg="12">
                    <v-select dense outlined v-model="e7" ref="e7" :rules="[() => !!e7 || 'This field is required']" :items="states" label="Produit Livrés" multiple chips hint="choisir les produits linvrés par le fournisseur" persistent-hint required></v-select>
                  </v-col>
                </v-row>
              </v-container>

            </v-col>


          </v-row>
        </v-container>
      </v-form>





      <p class="splxtitle">Historique des enregistrements</p>
      <v-card>
        <v-card-title>
          <v-text-field v-model="search" dense outlined append-icon="mdi-magnify" label="Recherche" hide-details ></v-text-field>
          <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
          <v-spacer></v-spacer><v-spacer></v-spacer><v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search">
          <template v-slot:item.calories="{ item }">
            <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
          </template>
        </v-data-table>
      </v-card>

    </v-container>

  </div>
</template>














<script>
// importation des components fils
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import splxAddProduct from "@/components/addProduct.vue";
export default {
  name: "Enregistrement",
  components: {
    // splxAddProduct,
  },
  data: () => ({
      dialog: false,
      dialogm1: '',
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],
      search: '',
      headers: [
          {
            text: 'PRODUIT',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'QUANTITE', value: 'calories' },
          { text: 'PRIX ACHAT', value: 'fat' },
          { text: 'PRIX VENTE', value: 'carbs' },
          { text: 'FOURNISSEUR', value: 'protein' },
          { text: 'DATE', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
  }),

  methods: {
      getColor (calories) {
        if (calories > 400) return 'splxlightBlue'
        else if (calories > 200) return 'splxRed'
        else return 'splxlightYellow'
      },
    },


};
</script>















<style scoped>

  .splxbodyWrapper{
    background: var(--Pricipal-background-light);
    margin-left: 18.5vw;
  }


  .splx-Icon-Text-button{
    background: transparent;
    height: 30px;
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    font-size: 13px;
    color:  var(--Important-color);
    cursor: pointer;
  }
  .splx-Icon-Text-button .v-icon{
    font-size: 22px;
    color: var(--Important-color);
  }

  .splx-Icon-Text-button:hover{
    background: var(--splx-lightYellow);
    color: var(--splx-White) !important;
  }

  .splx-Icon-Text-button:hover .v-icon{
    color: var(--Default-Font-Color);
  }





.splxAlerteInfo{
  background: var(--Pricipal-background-light);
  margin:3vh 0px;
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  text-align: left;
}
.splxAlerteInfo p{
  width: 90%;
  font-size: 14px;
  color: var(--Title-color);
}
.splxAlerteInfo .v-icon{
  color: var(--Important-color);
}





.v-form{
  background: var(--splx-White);
  border-radius: 10px;
}
.pincipalContainer{
  padding-top:0px; padding-bottom:0px
}




</style>