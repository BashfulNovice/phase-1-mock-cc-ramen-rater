// write your code here

let detailImage = document.getElementById('detail-image');
let detailName = document.getElementById('detail-name');
let detailRestaurant = document.getElementById('detail-restaurant');
let detailComment = document.getElementById('comment-display'); 
let detailRating = document.getElementById('rating-display');
let form = document.getElementById('new-ramen');

let localRamenData = [];
  fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(results => {
      results.forEach(element => {
          buildImg(element)
     })

  });
    //let placeHolder = []; old
  //console.log(RamenData); old

//-----------<old stuff that did not get used, saving for history>----------------------
// for (let i = 0; i < RamenData.length; i++) {
//     buildImg(RamenData[i]);
// };
//--------------------------------------------------------------------------------------

function buildImg(obj) {
    let tag = document.createElement('img');
    tag.src = obj['image'];
    document.getElementById('ramen-menu').appendChild(tag);
    //console.log(tag);
    localRamenData[localRamenData.length] = obj;
    console.log(localRamenData);
    
    tag.addEventListener('click', () => { 
    detailImage.src = obj['image']
    detailName.innerText = obj['name'];
    detailRestaurant.innerText = obj['restaurant'];
    detailComment.innerText = obj['comment'];
    detailRating.innerText = obj['rating'];;
    })
    tag.click();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let newObj = {}
    newObj['comment'] = document.getElementById('new-comment').value;
    newObj['id'] = localRamenData.length +1 //RamenData.length +1;
    newObj['image'] = document.getElementById('new-image').value;
    newObj['name'] = document.getElementById('new-name').value;
    newObj['rating'] = document.getElementById('new-rating').value;
    newObj['restaurant'] = document.getElementById('new-restaurant').value;
    //placeHolder[placeHolder.length] = newObj;
    //console.log(newObj);
    buildImg(newObj);
    form.reset();
});