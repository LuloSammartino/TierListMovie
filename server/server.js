const axios = require('axios');
// Importamos el módulo Express
const express = require('express');
// Definimos el puerto en el que escuchará el servidor
const PORT = process.env.PORT || 3000;

// Creamos una instancia de la aplicación Express
const app = express();

const options=(movie) => {
    return {method: 'GET',
    url: 'https://imdb146.p.rapidapi.com/v1/find/',
    params: {query: `${movie}`},
    headers: {
        'X-RapidAPI-Key': '2e821e4e38msh089dca330606077p1557adjsnd3b8e3c13872',
        'X-RapidAPI-Host': 'imdb146.p.rapidapi.com'
    } }
};

app.get("/movie", async (req, res) =>{

        let resultados = []

        try {
        const response = await axios.request(options(req.query.name));

            response.data.titleResults.results.forEach(e => {
                resultados.push({
                    name: e.titleNameText,
                    year: e.titleReleaseText,
                    img: e.titlePosterImageModel.url
                })
            });

            res.send(resultados)

        } catch (error) {
            res.send(error)
    }
    
})

app.get("/ok",  (req, res) =>{
    res.send("Todo ok")
})

// Iniciamos el servidor y lo hacemos escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
