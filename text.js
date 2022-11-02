var mytext = document.getElementById('mytext');
var result = document.getElementById('count');

mytext.addEventListener('keyup', function () {
result.innerHTML = '';
    var character = mytext.value.trim().split(' ').join('');
  console.log(character)
    for (let i = 0; i < character.length; i++) {

        let Count = 0;
        for (let j = 0; j < character.length; j++) {
            if (character[i] == character[j] && i > j) {
                break;
            }
            if (character[i] == character[j]) {
                Count++;
            }
        }
        if (Count > 0){
            // console.log(`${character[i]} occurs ${Count} times`);
if(result.innerHTML== ''){
    result.innerHTML=`<p> Total no of character ${character.length} </p>`+`<p> The text field includes ${Count} ${character[i]} character</p>`
}else{
result.innerHTML+=`<p> The text field includes ${Count} ${character[i]} character</p>`
}
        }
    }

   
    // let test_str = "gfghello";
    // count_occur(test_str);


    // console.log(Count)
})
