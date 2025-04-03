document.querySelectorAll('.container img').forEach(Image =>{
    Image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = Image.getAttribute('src'); 
        document.querySelector('.popup-image .popup-text').textContent = Image.getAttribute('data-text');

    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

document.querySelector('#color-selector').oninput = (event) => {
    document.querySelector('.popup-image .popup-text').style.color = event.target.value;
}


document.querySelector('.font-style select').onchange = (event) => {
    document.querySelector('.popup-image .popup-text').style.fontFamily = event.target.value;
}

