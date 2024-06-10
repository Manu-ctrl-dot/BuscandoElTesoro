class EscenaInicial extends Phaser.Scene {
    
    preload() {
        resize();
        window.addEventListener('resize', resize);
        this.load.image('imagenes', 'imagenes/granja.jpg');
    }
    
    create() {
        const OpcionGranja = this.add.zone(400, 150, 170, 80);
        OpcionGranja.setOrigin(0);
        OpcionGranja.setName('granja');
        OpcionGranja.setInteractive();
        OpcionGranja.once('pointerdown', () => this.opcioPulsada(OpcionGranja));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(OpcionGranja);
        
        const OpcionHTP = this.add.zone(400, 250, 170, 80);
        OpcionHTP.setOrigin(0);
        OpcionHTP.setName('htp');
        OpcionHTP.setInteractive();
        OpcionHTP.once('pointerdown', () => this.opcioPulsada(OpcionHTP));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(OpcionHTP);
        
        const OpcionSalir = this.add.zone(400, 350, 170, 80);
        OpcionSalir.setOrigin(0);
        OpcionSalir.setName('salir');
        OpcionSalir.setInteractive();
        OpcionSalir.once('pointerdown', () => this.opcioPulsada(OpcionSalir));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(OpcionSalir);
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'granja') {
            this.scene.start('EscenaGranja');
        }else if(opcio.name === 'htp'){
            this.scene.start('EscenaHTP');
        }else if(opcio.name === 'salir'){
            this.scene.start('EscenaSalir');
        }
    }
}

class EscenaGranja extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaGranja'});
    }

    preload() {
        this.load.image('granja', 'imagenes/granja.jpg');
    }

create() {
        
        const GranjaObjeto1 = this.add.zone(60, 10, 30, 30);
        GranjaObjeto1.setOrigin(0);
        GranjaObjeto1.setName('objeto1');
        GranjaObjeto1.setInteractive();
        GranjaObjeto1.once('pointerdown', () => this.opcioPulsada(GranjaObjeto1));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(GranjaObjeto1);
        
        const GranjaObjeto2 = this.add.zone(900, 500, 30, 30);
        GranjaObjeto2.setOrigin(0);
        GranjaObjeto2.setName('objeto2');
        GranjaObjeto2.setInteractive();
        GranjaObjeto2.once('pointerdown', () => this.opcioPulsada(GranjaObjeto2));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(GranjaObjeto2);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto1') {
            this.scene.start('EscenaGranja2Objeto1');
        } else if (opcio.name === 'objeto2') {
            this.scene.start('EscenaGranja2Objeto2');
        }
    }
    
}

class EscenaGranja2Objeto1 extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaGranja2Objeto1'});
    }

    preload() {
        this.load.image('granja', 'imagenes/granja.jpg');
    }

create() {
        
        const GranjaObjeto2 = this.add.zone(900, 500, 30, 30);
        GranjaObjeto2.setOrigin(0);
        GranjaObjeto2.setName('objeto2');
        GranjaObjeto2.setInteractive();
        GranjaObjeto2.once('pointerdown', () => this.opcioPulsada(GranjaObjeto2));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(GranjaObjeto2);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto2') {
            this.scene.start('EscenaCiudad');
        }
    }
    
}

class EscenaGranja2Objeto2 extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaGranja2Objeto2'});
    }

    preload() {
        this.load.image('granja', 'imagenes/granja.jpg');
    }

create() {
        
        const GranjaObjeto1 = this.add.zone(60, 10, 30, 30);
        GranjaObjeto1.setOrigin(0);
        GranjaObjeto1.setName('objeto1');
        GranjaObjeto1.setInteractive();
        GranjaObjeto1.once('pointerdown', () => this.opcioPulsada(GranjaObjeto1));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(GranjaObjeto1);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto1') {
            this.scene.start('EscenaCiudad');
        }
    }
    
}

    function resize() {
    const canvas = document.querySelector("canvas");
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    canvas.style.width = windowWidth + 'px';
    canvas.style.height = windowHeight + 'px';
}

    const config = {

    type: Phaser.AUTO,
    
    width: 960,
    height: 640,
    
    scene: [EscenaInicial, EscenaGranja, EscenaGranja2Objeto1, EscenaGranja2Objeto2],
};

    new Phaser.Game(config);