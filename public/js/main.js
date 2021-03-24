import LoginComponent from './components/TheLoginComponent.js';
import AllUsers from './components/AllUsers.js';

const router = new VueRouter({
    routes:[
        { path: '/', name: 'root', component: LoginComponent},
        { path: '/users', name: 'users', component: AllUsers}
    ]
});

  (()=>{
      const vm = new Vue({
          data:{
              allMovies: [],
              allMusic: []
          },
          created: function(){
              console.log("inside Vue Js");
            //   fetch('/api/movies')
            //         .then(res=>res.json())
            //         .then(data=>{
            //             console.table(data);
            //             this.allMovies = data;
            //         })
            //   fetch('/api/music')
            //         .then(res=>res.json())
            //         .then(data=>{
            //             console.table(data);
            //             this.allMusic = data;
            //         })
            //   .catch(err=>console.error(err));
          },

          methods:{

          },

          components:{
              // moviethumb: TheMovieThumb
          },

          router
      }).$mount("#app");
  })();
