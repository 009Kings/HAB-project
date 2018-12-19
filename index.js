var express = require(`express`);
var app = express();

app.set(`view engine`, `ejs`)

app.get(`/`, function (req, res) {
    res.render(`home`, {name: `Sarah`, age: 27, favouriteAnimal: `Wolf`});
})

app.get(`/about`, function (req, res) {
    res.render(`about`, {favouriteThings: [`Buddhism`, `Games`, `Art`]});
})

app.get(`/blog`, function (req, res) {
    res.render(`blog-directory`);
})

app.listen(`8000`, function(){
    console.log(`You're listening to the smooth sounds of port 8000`);
});