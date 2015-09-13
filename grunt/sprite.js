module.exports = {
    all: {
        cssFormat: 'css_retina',
        dest: '<%= imgPath %>/design/sprite.png',
        destCss: '<%= cssSrc %>/sprite.scss',
        imgPath: '/assets/img/design/sprite.png',
        retinaImgPath: '/assets/img/design/sprite@2x.png',
        retinaDest: '<%= imgPath %>/design/sprite@2x.png',
        retinaSrcFilter: ['<%= imgPath %>/design/sprite/*@2x.png'],
        src: '<%= imgPath %>/design/sprite/*.png'
    }
};