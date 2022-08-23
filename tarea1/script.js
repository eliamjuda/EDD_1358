const $ = selector => document.querySelector(selector)

const $form = $('#form'),
    $csv = $('#csv'),
    $firstInput = $("#inputOne"),
    $inputTwo = $("#inputTwo"),
    $threeInput = $("#inputThree"),
    $fourInput = $("#inputFour"),
    $firstMonth = $("#firstMonth"),
    $secondMonth = $("#secondMonth"),
    $monthSubmit = $("#monthSubmit");

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
        $firstInput.value = parseInt(data[7].JUNIO) - parseInt(data[7].ENERO) + " seguidores";

        const threeInputValue = ( ( parseInt(data[1].JUNIO) -  parseInt(data[1].ENERO) ) / parseInt(data[1].ENERO) * 100 ).toFixed(2);
        const fourInputValue = ( ( parseInt(data[8].JUNIO) -  parseInt(data[8].ENERO) ) / parseInt(data[8].ENERO) * 100 ).toFixed(2);

        $threeInput.value = "facebook " + threeInputValue + "%";
        $fourInput.value = "twitter " + fourInputValue + "%";

        $firstMonth.addEventListener("change", (e) => {
            
            $inputTwo.value = parseInt(data[15][$secondMonth.value]) - parseInt(data[15][$firstMonth.value]);
        })

        $secondMonth.addEventListener("change", (e) => {
            
            $inputTwo.value =  parseInt(data[15][$secondMonth.value]) - parseInt(data[15][$firstMonth.value]);
        })

    };

    reader.readAsText(input);

});

