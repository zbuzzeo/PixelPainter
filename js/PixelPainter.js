// note: PixelPainter.js/ cannot access constructGrid.js/ because it is linked after constructGrid.js/ in the HTML.
const pixelPainter = ( function ( ) {
    const getPixelPainter = grid.getPixelPainter;
    const getPixelGrid = grid.getPixelGrid;
    const getEraseOptions = grid.getEraseOptions( );
    const getOptionErase = grid.getOptionErase( );
    const getOptionClear = grid.getOptionClear( );
    const getExtraOptions = grid.getExtraOptions( );
    const getClear = grid.getClear;
    const defaultCellColor = 'rgb( 220, 220, 220 )';
    let currentSwatch = defaultCellColor;
    let isMouseDown = false;
    
    const getPixels = ( ) => { return getPixelGrid.querySelectorAll( '.cell' ) };
    const getSwatches = ( ) => { return grid.getSwatchCells( ) };

    const setMouseState = ( ) => {
        document.body.onmousedown = ( ) => isMouseDown = true;
        document.body.onmouseup = ( ) => isMouseDown = false;
    }

    const getMouseState = ( ) => {
        return isMouseDown;
    }

    const addPixelEvents = ( ) => {
        getPixels( ).forEach( function( item ) {
            item.addEventListener( 'mousedown', function( ) {
                colorPixels( item );
            } );
            item.addEventListener( 'mouseenter', function( ) {
                if ( isMouseDown ) {
                    colorPixels( item );
                }
            } );
        } );
    }

    const colorPixels = ( item ) => {
        item.style.backgroundColor = currentSwatch;
    }

    // if this doesn't work then treat eraser like a white swatch
    const erasePixels = ( ) => {
        // overwrite the value of currentSwatch when the eraser is clicked. apply currentSwatch to the backgroundColor of each item.
    }

    const addSwatchEvents = ( ) => {
        getSwatches( ).forEach( function( item ) {
            item.addEventListener( 'click', function( ) {
                currentSwatch = item.style.backgroundColor;
            } );
        } );
        getOptionErase.addEventListener( 'click', function ( ) {
            currentSwatch = defaultCellColor;
        } );
        getOptionClear.addEventListener( 'click', function ( ) { 
            getPixels( ).forEach( function( item ) {
                item.style.backgroundColor = defaultCellColor;
            } );
        } );
    }

    // initialization:
    setMouseState( );
    addSwatchEvents( );
    addPixelEvents( );

    return {
        getMouseState: getMouseState,
        currentSwatch: currentSwatch,
        getPixels: getPixels,
        addSwatchEvents: addSwatchEvents,
        addPixelEvents: addPixelEvents,
    }

} ) ( );