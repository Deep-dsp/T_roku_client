const express = require('express');
const router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');


router.use('/api', createProxyMiddleware({
    target:'http://localhost:5050',
    headers:{
        accept:'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.use('/ums', createProxyMiddleware({
    target:'http://localhost:5050',
    headers:{
        accept:'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.get('/', (req,res)=>{
    // res.send("hit the main route");
    res.render('index', {message: "Hello from handlers"})
})

// Music
router.get('/music', (req,res)=>{
    // res.send("hit the main route");
    res.render('music', { musicMessage: "Nighty Nights -> Rock"})
})

//shows
router.get('/shows', (req,res)=>{
    // res.send("hit the main route");
    res.render('shows', {showMessage: "Watch Your Favoroutie Television show"})
})

//other routes
router.use((req, res)=>{
    res.status(404);
    res.render("error", { layout: "errorLayout.hbs", errormessage: `you've lost your way a wee bit! "${req.url}" doesn't exists!`})
})

module.exports = router;