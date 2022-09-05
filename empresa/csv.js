import { NominaADT } from "../NominaADT.js";

const $form = document.getElementById("form");
const $csv = document.getElementById("csv");

function csvArray(csvContent, csvDelimiter = "," ){
    const headers = csvContent.slice(0, csvContent.indexOf("\n")).split(csvDelimiter);

    const rows = csvContent.slice(csvContent.indexOf("\n") + 1).split("\n");
    
    const arr = rows.map( (row) => {
        const values = row.split(csvDelimiter);
        const el = headers.reduce(function (object, header, index){
            object[header] = values[index];
            return object;
        }, {})
        return el;
    });

    return arr;
}

$form.addEventListener("submit", function(e){
    e.preventDefault();
    const input = $csv.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        const data = csvArray(text);
        console.log(data);

        const nomina = new NominaADT(data);
        console.log(nomina)
        

    };

    reader.readAsText(input);

});

