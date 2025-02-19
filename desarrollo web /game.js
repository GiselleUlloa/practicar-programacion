// Crear la escena del juego con Phaser.js
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let enemy;

const game = new Phaser.Game(config);

function preload() {
    this.load.image('player', 'https://examples.phaser.io/assets/sprites/phaser-dude.png');
    this.load.image('enemy', 'https://examples.phaser.io/assets/sprites/baddie.png');
}

function create() {
    player = this.add.sprite(100, 300, 'player');
    enemy = this.add.sprite(700, 300, 'enemy');

    this.add.text(20, 20, "¡Escribe el código para derrotar al enemigo!", {
        font: "18px Arial",
        fill: "#fff"
    });
}

function update() {
    // Aquí podemos agregar animaciones o lógica adicional más tarde
}

// Función para verificar el código del jugador
function checkCode() {
    const userCode = document.getElementById('code').value;

    // Aquí verificamos si el código está correcto
    // Este ejemplo simula que el código correcto es sumar dos números
    const correctCode = "console.log(5 + 5);";

    if (userCode.trim() === correctCode) {
        document.getElementById('result').innerText = "¡Código Correcto! ¡Derrotaste al enemigo!";
        enemy.destroy(); // Elimina el enemigo
    } else {
        document.getElementById('result').innerText = "Código Incorrecto. ¡Intenta de nuevo!";
    }
}
