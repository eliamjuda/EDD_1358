
const $form = document.getElementById("form");
const $csv = document.getElementById("csv");
const $firstInput = document.getElementById("inputOne");
const $inputTwo = document.getElementById("inputTwo");
const $threeInput = document.getElementById("inputThree");
const $fourInput = document.getElementById("inputFour");
const $firstMonth = document.getElementById("firstMonth");
const $secondMonth = document.getElementById("secondMonth");
const $monthSubmit = document.getElementById("monthSubmit");

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
        $firstInput.value = parseInt(data[7].JUNIO.match(/(\d+)/g)) - parseInt(data[7].ENERO.match(/(\d+)/g)) + " seguidores";

        const threeInputValue = ( ( parseInt(data[1].JUNIO.match(/(\d+)/g)) -  parseInt(data[1].ENERO.match(/(\d+)/g)) ) / parseInt(data[1].ENERO.match(/(\d+)/g)) * 100 ).toFixed(2);
        const fourInputValue = ( ( parseInt(data[8].JUNIO.match(/(\d+)/g)) -  parseInt(data[8].ENERO.match(/(\d+)/g)) ) / parseInt(data[8].ENERO.match(/(\d+)/g)) * 100 ).toFixed(2);

        $threeInput.value = "facebook " + threeInputValue + "%";
        $fourInput.value = "twitter " + fourInputValue + "%";

        $firstMonth.addEventListener("change", (e) => {
            const arrMonth = [];

            arrMonth.push($firstMonth.value);
            arrMonth.push($secondMonth.value);

            $inputTwo.value = data[15].arrMonth[0];
        })

    };
    
    reader.readAsText(input);

});

