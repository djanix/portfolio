module.exports = {
    all: {
        cssFormat: 'css_retina',
        dest: '<%= imgPath %>/design/sprite.png',
        destCss: '<%= cssSrc %>/sprite.scss',
        imgPath: '<%= imgPath %>/design/sprite.png',
        retinaImgPath: '/assets/img/design/sprite@2x.png',
        retinaDest: '/assets/img/design/sprite@2x.png',
        retinaSrcFilter: ['<%= imgPath %>/design/sprite/*@2x.png'],
        src: '<%= imgPath %>/design/sprite/*.png'
    }
};