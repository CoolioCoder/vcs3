var inputs_array=[];
function getParagraph1() {
    for (i=1;i<=6;i++)
    inputs_array.push(document.getElementById("para1_input_box_"+i).value);
    console.log(inputs_array);
    inputs_array.join(". ")
    document.getElementById("getParagraph1").innerHTML=inputs_array.join(". ")
}