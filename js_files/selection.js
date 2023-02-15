/**
 * NOTE: SELECTION SORT SOLUTION IS GIVEN AS A REFERECE TO COMPLETE THE OTHER SORTING ALGORITHMS
 */

async function selection() {
    console.log('In selection()');
    const ele = document.querySelectorAll(".newBars");
    for (let i = 0; i < ele.length; i++) {
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        for (let j = i + 1; j < ele.length; j++) {
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';

            await waitforme(delay);
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                console.log('In if condition height comparision');
                if (min_index !== i) {
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            }
            else {
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'cyan';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

// let arr = [];
// for (let i = 0; i < 101; i++) {
//     arr.push(i);
// }
// let arr1 = [];
// for (let i = 0; i < 101; i++) {
//     let a = Math.floor(Math.random() * 100)
//     arr1.push(a);
// }
// function display(){
//     let parent = document.querySelector(".flex-container");
//     for (let i = 0; i < arr.length; i++) {
//         let ele = document.createElement('div');
//         ele.style.height = `${arr1[i] * 5}px`;
//         parent.appendChild(ele);
//         ele.classList.add("newBars");
//     }
// }