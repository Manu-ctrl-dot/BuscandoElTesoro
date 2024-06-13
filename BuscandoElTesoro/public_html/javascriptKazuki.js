class EscenaDesierto extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaDesierto'});
    }

    preload() {
        this.load.image('desierto', 'imagenes/desierto.jpg');
    }

create() {
        
        const DesiertoObjeto1 = this.add.zone(60, 10, 30, 30);
        DesiertoObjeto1.setOrigin(0);
        DesiertoObjeto1.setName('objeto1');
        DesiertoObjeto1.setInteractive();
        DesiertoObjeto1.once('pointerdown', () => this.opcioPulsada(DesiertoObjeto1));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(DesiertoObjeto1);
        
        const DesiertoObjeto2 = this.add.zone(900, 500, 30, 30);
        DesiertoObjeto2.setOrigin(0);
        DesiertoObjeto2.setName('objeto2');
        DesiertoObjeto2.setInteractive();
        DesiertoObjeto2.once('pointerdown', () => this.opcioPulsada(DesiertoObjeto2));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(DesiertoObjeto2);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto1') {
            this.scene.start('EscenaDesierto2Objeto1');
        } else if (opcio.name === 'objeto2') {
            this.scene.start('EscenaDesierto2Objeto2');
        }
    }
    
}

class EscenaDesierto2Objeto1 extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaDesierto2Objeto1'});
    }

    preload() {
        this.load.image('desierto', 'imagenes/desierto.jpg');
    }

create() {
        
        const DesiertoObjeto2 = this.add.zone(900, 500, 30, 30);
        DesiertoObjeto2.setOrigin(0);
        DesiertoObjeto2.setName('objeto2');
        DesiertoObjeto2.setInteractive();
        DesiertoObjeto2.once('pointerdown', () => this.opcioPulsada(DesiertoObjeto2));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(DesiertoObjeto2);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto2') {
            this.scene.start('EscenaFinal');
        }
    }
    
}

class EscenaDesierto2Objeto2 extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaDesierto2Objeto2'});
    }

    preload() {
        this.load.image('desierto', 'imagenes/desierto.jpg');
    }

create() {
        
        const DesiertoObjeto1 = this.add.zone(60, 10, 30, 30);
        DesiertoObjeto1.setOrigin(0);
        DesiertoObjeto1.setName('objeto1');
        DesiertoObjeto1.setInteractive();
        DesiertoObjeto1.once('pointerdown', () => this.opcioPulsada(DesiertoObjeto1));
        this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(DesiertoObjeto1);
        
    }
    
    opcioPulsada(opcio) {
        if (opcio.name === 'objeto1') {
            this.scene.start('EscenaFinal');
        }
    }
    
}