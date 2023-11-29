const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "25-06-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "15-05-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=35"
        },
        "likes": 56,
        "created": "03-04-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];

const output = document.querySelector('div#container')

posts.forEach((element, index) => {
    output.innerHTML += generateNewPost(element.content, element.media, element.author.name, element.author.image, element.likes, element.created, index);
})


const likeButton = document.querySelectorAll("span.like-button.js-like-button");
const likeCounterList = document.querySelectorAll('.js-likes-counter')


for(let i = 0; i < likeButton.length; i++){
    const currentLikeButton = likeButton[i]
    currentLikeButton.addEventListener('click', function(event){
        event.preventDefault();
       if (currentLikeButton.classList.contains('like-button--liked')){
        currentLikeButton.classList.remove('like-button--liked')
        likeCounterList[i].innerHTML = parseInt(likeCounterList[i].innerHTML) - 1;
       } else {
        currentLikeButton.classList.add('like-button--liked')
        likeCounterList[i].innerHTML = parseInt(likeCounterList[i].innerHTML) + 1;
       }
    })
}




// ====Function====
function generateNewPost( text, img, name, profile, like, date){
    return `
    <div class="post">
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${profile}"" alt="Phil Mangione">                    
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${name}</div>
            <div class="post-meta__time">${date}</div>
        </div>                    
    </div>
</div>
<div class="post__text">${text}</div>
<div class="post__image">
    <img src="${img}" alt="">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <span class="like-button  js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label"> Mi Piace</span>
            </span>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-${posts.id}" class="js-likes-counter"> ${like} </b> persone
        </div>
    </div> 
</div>
</div>
`
}