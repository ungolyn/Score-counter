    score = 0
    goal = 0
    document.getElementById("score").textContent= 0
    document.getElementById("goal").textContent= 0
    scoreEl = document.getElementById("score")
    scoreEs = document.getElementById("goal")


function one() {
    score +=1
    scoreEl.textContent = score 
}

function two() {
    score +=2
    scoreEl.textContent = score 
}

function three() {
    score +=3
    scoreEl.textContent = score 
}

function oner() {
    goal +=1
    scoreEs.textContent = goal
}

function twor() {
    goal +=2
    scoreEs.textContent = goal 
}

function threer() {
    goal +=3
    scoreEs.textContent = goal
}

