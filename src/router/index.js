import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Enregistrement from "../views/Enregistrement.vue";
import Inventaire from "../views/inventaire.vue";
import fournisseur from "../views/fournisseur.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/enregistrement",
    name: "Enregistrement",
    component: Enregistrement
  },
  {
    path: "/inventaire",
    name: "Inventaire",
    component: Inventaire
  },
  {
    path: "/fournisseur",
    name: "fournisseur",
    component: fournisseur
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
