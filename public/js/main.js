import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/AllUsers.js';
import HomeComponent from './components/TheHomeComponent.js';

const router = new VueRouter({
    routes:[
        { path: '/', name: 'root', component: LoginComponent},
        { path: '/users', name: 'users', component: AllUsers},
        { path: '/home', name: 'home', component: HomeComponent, props: true}
    ]
});

  (()=>{
      const vm = new Vue({
          data:{
              authenticated: false,
              isAdmin: false
          },
          created: function(){
              console.log("inside Vue Js");
            
          },

          methods:{
            logout(){
                if(localStorage.getItem('cacheuser')){
                    window.localStorage.removeItem('cacheuser');
                }
                this.$router.push({name: "root"});
            }
          },

          components:{
              // moviethumb: TheMovieThumb
          },

          router
      }).$mount("#app");
  })();
