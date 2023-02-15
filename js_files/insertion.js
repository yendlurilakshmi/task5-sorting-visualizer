async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".newBars");
    //write your code here
    for(let i=0;i<ele.length-1;i++){
        for(let j=0;j<i+1;j++){
            ele[i+1].style.background='red';
            ele[j].style.background='red';
            if(parseInt(ele[i+1].style.height)<parseInt(ele[j].style.height)){
                await waitforme(delay);
                swap(ele[i+1],ele[j]);
            }
            ele[i+1].style.background='cyan';
            ele[j].style.background='cyan';
        }
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});