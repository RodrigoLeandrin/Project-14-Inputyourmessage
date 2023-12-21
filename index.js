const field = document.querySelector('textarea');
const submit = document.querySelector('#submit');
const comments_arr = [];
const comments = document.getElementById('comment-box');



const display_comments =() => {
    let list = '<ul>';
       comments_arr.forEach(comments => {
        list += `<li>{comments}</li>`;
      })
      list += '</ul>';
      comments.innerHTML = list;}

submit.onclick = function () {
    const content = field.value;
    comments_arr.push(content);
    console.log(comments_arr);
    display_comments ();
}

