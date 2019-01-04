const grid = ( function ( ) {
    const getPixelPainter = document.getElementById( 'pixelPainter' );
    const coordinatePairs = [  ];
    // this is its own function in the case that i want to form canvases or make grids on other HTML elements without rewriting the functions.
    const appendToFrom = ( parent, child ) => parent.appendChild( child );

    const formatCanvas = ( ) => {
        const gridContainer = document.createElement( 'div' );
        gridContainer.id = 'pixelGrid';
        appendToFrom( getPixelPainter, gridContainer );
    }

    const storeAsCoords = ( x, y ) => {
        const pair = [  ];
        pair.push( x, y );
        coordinatePairs.push( pair );
    }

    const getCoordinates = ( ) => {
        return coordinatePairs;
    }

    const random = ( cap ) => {
        const newNum = Math.floor ( ( Math.random( ) * cap ) );    // not adding one because of the first position in the grid is 0.
        return newNum;
    }
    
    const makeCells = ( n ) => {
        for ( let i = 0; i < n; i++ ) {
            const newCell = document.createElement( 'button' );
            newCell.className = 'cell';
            appendToFrom( document.getElementById( 'pixelGrid' ), newCell );
        }
    }

    // creates the matrix that holds cells. each cell should have a numbered position in the grid.
    const makeGrid = ( numDown, numRight ) => {
        for ( let i = 0; i < numDown; i++ ) {
            for ( let j = 0; j < numRight; j++ ) {
                console.log( `%ci is: ${ i } and j is: ${ j }` , `color: cornflowerblue; font-size: 1.4em;` );
                makeCells( 1 );
                storeAsCoords( j, i );
            }
        }
    }

    const getCells = ( ) => {
        return document.getElementsByClassName( 'cell' );
    }

    const resizeCells = ( x, y ) => {
        for ( let i = 0; i < getCells.length; i++ ) {
            getCells.style.width = x;
            getCells.style.height = y;
            return ( getCells.style.width );
        }
    }

    const updateCellText = ( ) => {
        for ( let i = 0; i < getCells( ).length; i++ ) {
            const currentCell = getCells( )[i];
            const joinedCoords = getCoordinates( )[i].join( ', ' );
            currentCell.innerHTML = joinedCoords;
        }
    }

    // initialization:
    console.log( getCells( ) );
    formatCanvas( );
    makeGrid( 5, 5 );
    updateCellText( );
    // resizeCells( '3em', '3em' );
    const getPixelGrid = document.getElementById( 'pixelGrid' );
    console.log( `%cNumber of cells in #pixelGrid: ${ getPixelGrid.childElementCount }`, `color: orange; font-size: 1.6em;`)
    console.table( getCoordinates( ) );

    return {
        appendToFrom: appendToFrom,
        formatCanvas: formatCanvas,
        storeAsCoords: storeAsCoords,
        getCoordinates: getCoordinates,
        random: random,
        makeCells: makeCells,
        makeGrid: makeGrid,
        getCells: getCells,
        resizeCells: resizeCells,
        updateCellText: updateCellText,
    }

} ) ( );
