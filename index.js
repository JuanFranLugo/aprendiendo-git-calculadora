import View from './view.js'

document.addEventListener('DOMContentLoaded', () => {
    const view = new View();

    view.createButons();
});











// document.addEventListener('DOMContentLoaded', () => {
//     (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
//         const $notification = $delete.parentNode;

//         $delete.addEventListener('click', () => {
//         $notification.parentNode.removeChild($notification);
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {

//         const $operation = document.querySelector('.suma');

//         $operation.addEventListener('click', () => {
//             document.getElementById("input-now").innerText;
//             console.log("hola");
//         });
// });

/* <button class="button is-primary is-outlined" id="suma"> + </a> */


