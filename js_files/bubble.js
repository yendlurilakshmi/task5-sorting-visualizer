async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".newBars");
    //write your code here
    for(let i=0;i<ele.length-1;i++){
        for(let j=0;j<ele.length-i-1;j++){
            ele[j].style.background = "red";
            ele[j+1].style.background='red';
            if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height)){
                await waitforme(delay)
                swap(ele[j],ele[j+1]);
            }
            ele[j].style.background='cyan';
            ele[j+1].style.background='cyan';

        }
        ele[(ele.length)-i-1].style.background='green';
    }
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});