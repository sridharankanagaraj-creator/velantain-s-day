document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('entry').style.display = 'none';
    document.getElementById('coupleTeddyPopup').style.display = 'block';
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('Wrong answer! Try again.');
});

document.getElementById('nextPopupBtn').addEventListener('click', function() {
    document.getElementById('coupleTeddyPopup').style.display = 'none';
    document.getElementById('huggingTeddiesPopup').style.display = 'block';
});

document.getElementById('enterNameBtn').addEventListener('click', function() {
    document.getElementById('huggingTeddiesPopup').style.display = 'none';
    document.getElementById('nameEntry').style.display = 'block';
});

document.getElementById('submitNameBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    if (name === 'sridharanabarna') {
        window.location.href = 'album.html';
    } else {
        alert('Wrong name! Try again.');
    }
});
