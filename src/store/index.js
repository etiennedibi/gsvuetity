import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products:[
      {
        id: 'd1',
        name: 'Frozen Yogurt',
        Quantity: 159,
        price: 2500,
        series:[
          {
            name: 'd1',
            type:'area',
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'd2',
            type:'bar',
            data: [22, 40, 18, 63, 50, 29, 110]
          }
        ]
      },
      {
        id: 'd2',
        name: 'Ice cream sandwich',
        Quantity: 237,
        price: 1500,
      },
      {
        id: 'd3',
        name: 'Eclair',
        Quantity: 262,
        price: 25000,
        archive:[
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
        ]
      },
      {
        id: 'd4',
        name: 'Cupcake',
        Quantity: 305,
        price: 18500,
      },
      {
        id: 'd5',
        name: 'Gingerbread',
        Quantity: 356,
        price: 9500,
      },
      {
        id: 'd6',
        name: 'Jelly bean',
        Quantity: 375,
        price: 10500,
      },
      {
        id: 'd7',
        name: 'Lollipop',
        Quantity: 392,
        price: 17500,
      },
      {
        id: 'd8',
        name: 'Honeycomb',
        Quantity: 408,
        price: 2500,
      },
      {
        id: 'd9',
        name: 'Donut',
        Quantity: 452,
        price: 3000,
      },
      {
        id: 'd10',
        name: 'KitKat',
        Quantity: 518,
        price: 5500,
      },
    ],
  },




  
  mutations: {},
  actions: {},
  modules: {}
});
