import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from "vue";
import Vuetify from "vuetify/lib";


Vue.use(Vuetify);

export default new Vuetify({

    icons: {
      iconfont:'md',
    },

    theme: {
        themes: {
          light: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
            essaie:'#374b6b',

            /* Background-color */
            PricipalBackgroundLight: '#f1f3fb',
            otherFont:'#FFFDE7',
    
            /* Important-color */
            Importantcolor : '#613dea',
          
            /* Font color */
            Titlecolor: '#374b6b',
            DefaultFontColor:'#939eaf',
            
            /* Other Color */
            splxWhite: 'white',
            splxRed: '#f47e68',
            splxlightBlue: '#1bc5bd',
            splxlightYellow: '#f9d668',   
          },
        },
      },

});
