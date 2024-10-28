const images = [
    "https://i.redd.it/6ajh1xg1laxd1.png", 
    "https://i.redd.it/1o0dd1ptnaxd1.png", 
    "https://i.redd.it/9adycgxf3bxd1.jpeg"  
];

let currentIndex = 0;
const imgElements = document.querySelectorAll('.image-container img');
const thumbnailElements = document.querySelectorAll('.thumbnail');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');


function updateImages() {
    imgElements.forEach((img, index) => {
        img.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
}


function updateThumbnails() {
    thumbnailElements.forEach((thumbnail, index) => {

        const slideAmount = (index - currentIndex) * 150; 
        thumbnail.style.transform = `translateX(${slideAmount}px)`; 
        thumbnail.style.transition = 'transform 0.6s ease'; 
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImages();
    updateThumbnails();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
    updateThumbnails();
});

thumbnailElements.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateImages();
        updateThumbnails();
    });
});

updateImages();
updateThumbnails();
