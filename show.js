let count=0
var act=document.getElementById('acti')
var button=document.getElementById('main')

act.addEventListener('click', () => {

    if (count<=3){
        count++
    }

    // else{
    //     count--
    // }

    console.log(count)
})


// button.style.display="none";


// function showNav(){
//   if (count>=1){
//     button.style.display="inline-block";
//   }

//   else{
//     button.style.display="none";
//   }
// }
