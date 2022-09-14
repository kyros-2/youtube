const videoContziner = document.querySelector('div.video');

for (let i = 1; i <= 12; i++){
    const arr = [1,2,3,4,5]
    let randomNum = arr[Math.floor(Math.random() * 4)];
    let randomNum2 = Math.ceil(Math.random() * 400);
    console.log(randomNum);
    videoContziner.innerHTML += 
    `<div class="vid">
        <img src="https://picsum.photos/250/140?random=${i}" alt="vid" class="banner">
        <div class="chan1">
            <div class="chan">
                <img src="avatar${randomNum}.png" alt="" class="avatar">
                <h2>Title number ${i}</h2>
            </div>
            <i class="bi bi-three-dots-vertical"></i>
        </div>
        <div class="det">
            <h3>Chaine ${i}</h3>
            <h3>${randomNum2} k vues</h3>
        </div>
    </div>`;
}

window.onload = () => {
    const loader = document.querySelector('div.loaderContainer');

    loader.style.opacity = '0';
    setTimeout(() => {
        loader.remove();
    }, 500)
};