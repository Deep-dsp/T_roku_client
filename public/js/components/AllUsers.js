export default{
    name: "TheAllUserComponent",
    template:`
        <section class="container">
            <div>
                <div class="col-sm-12">
                    <h1>This is all User Component</h1>
                </div>
            </div>
        </section>
    `,
    created: function(){
        console.log("All users are ready to bang!");
        // Fetch every user from DB -> tbl_usertable
    }
}