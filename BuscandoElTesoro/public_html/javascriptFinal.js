class EscenaInicial extends Phaser.Scene {
    
    preload() {
        resize();
        window.addEventListener('resize', resize);
        this.load.image('EscenaInicial', 'imagenes/EscenaInicial.jpg');
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
            this.scene.start('EscenaFinal');
        }
    }
}

class EscenaHTP extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaHTP'});
    }

    preload() {
        this.load.image('HTP', 'imagenes/HTP.jpg');
    }
    
}

class EscenaGranja extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaGranja'});
    }

    preload() {
        this.load.image('granja', 'imagenes/granja1.jpg');
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
        this.load.image('granja2', 'imagenes/granja2.jpg');
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
        this.load.image('granja3', 'imagenes/granja3.jpg');
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

class EscenaCiudad extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaCiudad'});
    }

    preload() {
        this.load.image('ciudad1', 'imagenes/ciudad1.jpg');
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
        this.load.image('ciudad2', 'imagenes/ciudad2.jpg');
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
        this.load.image('ciudad3', 'imagenes/ciudad3.jpg');
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

class EscenaGrecia extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaGrecia'});
    }

    preload() {
        this.load.image('grecia1', 'imagenes/grecia1.jpg');
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
        this.load.image('grecia2', 'imagenes/grecia2.jpg');
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
        this.load.image('grecia3', 'imagenes/grecia3.jpg');
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

class EscenaDesierto extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaDesierto'});
    }

    preload() {
        this.load.image('desierto1', 'imagenes/desierto1.jpg');
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
        this.load.image('desierto2', 'imagenes/desierto2.jpg');
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
        this.load.image('desierto3', 'imagenes/desierto3.jpg');
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

class EscenaFinal extends Phaser.Scene {

    constructor() {
        super({key: 'EscenaFinal'});
    }

    preload() {
        this.load.image('final', 'imagenes/final.jpg');
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
    
    scene: [EscenaInicial, EscenaHPT, EscenaGranja, EscenaGranja2Objeto1, EscenaGranja2Objeto2, EscenaCiudad, EscenaCiudad2Objeto1, 
        EscenaCiudad2Objeto2, EscenaGrecia, EscenaGrecia2Objeto1, EscenaGrecia2Objeto2, EscenaDesierto, EscenaDesierto2Objeto1, EscenaDesierto2Objeto2,
    EscenaFinal],
};

    new Phaser.Game(config);