class EscenaGrecia extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaGrecia'});
    }

    preload() {
        this.load.image('grecia', 'imagenes/grecia.jpg');
    }

create() {
        
        const GreciaObjeto1 = this.add.zone(60, 10, 30, 30);
        GreciaObjeto1.setOrigin(0);
        GreciaObjeto1.setName('objeto1');
        GreciaObjeto1.setInteractive();
        GreciaObjeto1.once('pointerdown', () => this.opcioPulsada(GreciaObjeto1));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(GreciaObjeto1);
        
        const GreciaObjeto2 = this.add.zone(900, 500, 30, 30);
        GreciaObjeto2.setOrigin(0);
        GreciaObjeto2.setName('objeto2');
        GreciaObjeto2.setInteractive();
        GreciaObjeto2.once('pointerdown', () => this.opcioPulsada(GreciaObjeto2));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(GreciaObjeto2);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto1') {
            this.scene.start('EscenaGrecia2Objeto1');
        } else if (opcio.name === 'objeto2') {
            this.scene.start('EscenaGrecia2Objeto2');
        }
    }
    
}

class EscenaGrecia2Objeto1 extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaGrecia2Objeto1'});
    }

    preload() {
        this.load.image('grecia', 'imagenes/grecia.jpg');
    }

create() {
        
        const GreciaObjeto2 = this.add.zone(900, 500, 30, 30);
        GreciaObjeto2.setOrigin(0);
        GreciaObjeto2.setName('objeto2');
        GreciaObjeto2.setInteractive();
        GreciaObjeto2.once('pointerdown', () => this.opcioPulsada(GreciaObjeto2));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(GreciaObjeto2);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto2') {
            this.scene.start('EscenaDesierto');
        }
    }
    
}

class EscenaGrecia2Objeto2 extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaGrecia2Objeto2'});
    }

    preload() {
        this.load.image('grecia', 'imagenes/grecia.jpg');
    }

create() {
        
        const GreciaObjeto1 = this.add.zone(60, 10, 30, 30);
        GreciaObjeto1.setOrigin(0);
        GreciaObjeto1.setName('objeto1');
        GreciaObjeto1.setInteractive();
        GreciaObjeto1.once('pointerdown', () => this.opcioPulsada(GreciaObjeto1));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(GreciaObjeto1);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto1') {
            this.scene.start('EscenaDesierto');
        }
    }
    
}