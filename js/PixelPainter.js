// note: PixelPainter.js/ cannot access constructGrid.js/ because it is linked after constructGrid.js/ in the HTML.

const pixelPainter = ( function ( ) {
    const sayHello = ( ) => {
        return 'bonjour';

    }

    return {
        sayHello: sayHello,
    }

} ) ( );