const fs = require("fs");

fs.readFile("saludo.txt", { encoding: "utf8" }, (err, data) => {
    if (!err) {
        let content = data;
        content = content.replace("Miguel", "Jose");
        fs.writeFile("saludo.txt", content, (error) => {
            if (!error) {
                console.log("Se ha escrito en el archivo");
            }
        });
        console.log(content);
    } else {
        console.log(err);
    }
});
