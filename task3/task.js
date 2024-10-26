let deadCount = 0; 
let lostCount = 0; 
let moleActive = false; 


function getHole(index) {
    return document.getElementById(`hole${index}`); 
}


function randomMole() {
    if (moleActive) return; 

    for (let i = 1; i <= 9; i++) {
        const hole = getHole(i);
        hole.classList.remove('hole_has-mole');
    }


    const randomIndex = Math.floor(Math.random() * 9) + 1; 
    const randomHole = getHole(randomIndex);
    randomHole.classList.add('hole_has-mole');

    moleActive = true; // Устанавливаем флаг на активный

    // Убираем крота через 1 секунду и сбрасываем флаг
    setTimeout(() => {
        randomHole.classList.remove('hole_has-mole');
        moleActive = false; // Сброс флага, крот больше не активен
    }, 1000);
}


for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            document.getElementById('dead').textContent = deadCount;
            alert('Вы убили крота!');
        } else {
            lostCount++;
            document.getElementById('lost').textContent = lostCount;
            alert('Промах!');
        }

        if (deadCount >= 10 || lostCount >= 5) {
            alert('Игра окончена!');
            deadCount = 0;
            lostCount = 0;
            document.getElementById('dead').textContent = deadCount;
            document.getElementById('lost').textContent = lostCount;
        }
    };
}


setInterval(randomMole, 1500);