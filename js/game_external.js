const prize = [
    { text: "10% off for booking 10 days trip", image: "../image/Queenstown.JPG" },
    { text: "5% off for booking 5 days trip", image: "../image/Tongariro.png" },
    { text: "8% off for booking 8 days trip", image: "../image/Doubtful Sound.JPG"},
	{ text: "5% off for booking 5 days trip", image: "../image/Hooker Valley.png"},
	{ text: "Half price for 2nd attendant", image: "../image/DSCF6756.JPG"},
	{ text: "100 euro off for selected tour", image: "../image/Westcoast1.JPG"},
	{ text: "500 euro off for selected tour", image: "../image/skydiving.jpg"},];
    

function play() {
    const randomIndex = Math.floor(Math.random() * prize.length);
    const result = prize[randomIndex];
    showModal(result);
}

function showModal(prize) {
    const modal = document.getElementById('modal');
    const prizeText = document.getElementById('prizeText');
    const prizeImage = document.getElementById('prizeImage');

    prizeText.textContent = "You win a prize of: " + prize.text +"!!!";
    prizeImage.src = prize.image;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}