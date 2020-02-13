const Express = require("express");
const chalk = require("chalk");
const App = Express();
const port = 80;
const getPokemons = require("json-pokemon/getPokemon");

App.use("/", Express.static("public"));

App.get("/id/:id", (req, res) => {
    let result = getPokemons.getPokemonById(parseInt(req.params.id));

    if (result === null) {
        res.send("<p style=\"color:red;\">Woop, Not Find!</p>");
        console.log(chalk.red(req.path));
    } else {
        
        console.log(chalk.green(req.path));
        res.send(result);
    }
});


App.get("/name/:name", (req, res) => {
    let result = getPokemons.getPokemonByName(req.params.name);

    if (result === null) {
        res.send("<p style=\"color:red;\">Woop, Not Find!</p>");
        console.log(chalk.red(req.path));

    } else {
        res.send(result);
        console.log(chalk.green(req.path));
        
    }

    res.json(result)
});


App.listen(port, () => {
    console.log("Server running!");
});


