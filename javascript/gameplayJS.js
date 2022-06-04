let arvi = document.getElementById("arvi");
let enemy = document.getElementById("enemy");


function attack() {
    let attackstart = setTimeout(attackEvent1, 0);
    let backMovement = setTimeout(attackEvent2, 2000);
}

function wrong() {
    let enemyAttackstart = setTimeout(wrongEvent1, 0);
    let enemyBackMovement = setTimeout(wrongEvent2, 2000);
}

function wrongEvent1() {
    arvi.src = "ARVI/avi 2.png";
    enemy.classList.add("enemyAttackAnimation");
    arvi.classList.add("arviIsAttackAnimation");
}

function wrongEvent2() {
    arvi.src = "ARVI/avi 1.png";
    enemy.classList.remove("enemyAttackAnimation");
    arvi.classList.remove("arviIsAttackAnimation");
}




function attackEvent1() {
    arvi.src = "ARVI/avi 3.png";
    arvi.classList.remove("movement");
    arvi.classList.add("attackAnimation");
    enemy.classList.add("enemyIsAttackAnimation");
}

function attackEvent2() {
    arvi.src = "ARVI/avi 1.png";
    arvi.classList.add("movement");
    arvi.classList.remove("attackAnimation");
    enemy.classList.remove("enemyIsAttackAnimation");
}


