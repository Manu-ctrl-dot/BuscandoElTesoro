class EscenaCiudad extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaCiudad'});
    }

    preload() {
        this.load.image('ciudad', 'imagenes/ciudad.jpg');
    }

create() {
        
        const CiudadObjeto1 = this.add.zone(60, 10, 30, 30);
        CiudadObjeto1.setOrigin(0);
        CiudadObjeto1.setName('objeto1');
        CiudadObjeto1.setInteractive();
        CiudadObjeto1.once('pointerdown', () => this.opcioPulsada(CiudadObjeto1));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(CiudadObjeto1);
        
        const CiudadObjeto2 = this.add.zone(900, 500, 30, 30);
        CiudadObjeto2.setOrigin(0);
        CiudadObjeto2.setName('objeto2');
        CiudadObjeto2.setInteractive();
        CiudadObjeto2.once('pointerdown', () => this.opcioPulsada(CiudadObjeto2));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(CiudadObjeto2);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto1') {
            this.scene.start('EscenaCiudad2Objeto1');
        } else if (opcio.name === 'objeto2') {
            this.scene.start('EscenaCiudad2Objeto2');
        }
    }
    
}

class EscenaCiudad2Objeto1 extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaCiudad2Objeto1'});
    }

    preload() {
        this.load.image('ciudad', 'imagenes/ciudad.jpg');
    }

create() {
        
        const CiudadObjeto2 = this.add.zone(900, 500, 30, 30);
        CiudadObjeto2.setOrigin(0);
        CiudadObjeto2.setName('objeto2');
        CiudadObjeto2.setInteractive();
        CiudadObjeto2.once('pointerdown', () => this.opcioPulsada(CiudadObjeto2));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(CiudadObjeto2);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto2') {
            this.scene.start('EscenaGrecia');
        }
    }
    
}

class EscenaCiudad2Objeto2 extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaCiudad2Objeto2'});
    }

    preload() {
        this.load.image('ciudad', 'imagenes/ciudad.jpg');
    }

create() {
        
        const CiudadObjeto1 = this.add.zone(60, 10, 30, 30);
        CiudadObjeto1.setOrigin(0);
        CiudadObjeto1.setName('objeto1');
        CiudadObjeto1.setInteractive();
        CiudadObjeto1.once('pointerdown', () => this.opcioPulsada(CiudadObjeto1));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(CiudadObjeto1);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto1') {
            this.scene.start('EscenaGrecia');
        }
    }
    
}