const grid = ( function ( ) {
    const getPixelPainter = document.getElementById( 'pixelPainter' );
    const getGrid = document.getElementById( 'pixelGrid' );
    let coordinatePairs = [  ];
    let extraOptions = [  ];
    // this is its own function in the case that i want to form canvases or make grids on other HTML elements without rewriting the functions.
    const appendToFrom = ( parent, child ) => parent.appendChild( child );

    const appendToFromGroup = ( parent, arrayChildren ) => {
        arrayChildren.forEach( function( item )  {
            parent.appendChild( item );
        } );
        return arrayChildren;
    }

    const formatCanvas = ( ) => {
        const gridContainer = document.createElement( 'div' );
        const swatchContainer = document.createElement( 'div' );
        const swatchTitle = document.createElement( 'div' );
        const eraseContainer = document.createElement( 'div' );
        const eraseTitle = document.createElement( 'div' );
        const clearTitle = document.createElement( 'div' );
        gridContainer.id = 'pixelGrid';
        swatchContainer.id = 'swatchGrid';
        swatchTitle.id = 'swatchTitle';
        swatchTitle.innerHTML = 'Color Palette:';
        eraseContainer.id = 'eraseOptions';
        eraseTitle.id = 'optionErase';
        eraseTitle.innerHTML = 'ERASER';
        clearTitle.id = 'optionClear';
        clearTitle.innerHTML = 'CLEAR-CANVAS';
        appendToFromGroup( getPixelPainter, [ 
            gridContainer,
            swatchTitle,
            swatchContainer,
            eraseContainer,
        ] );
        appendToFromGroup( eraseContainer, [ 
            eraseTitle,
            clearTitle,
        ] );
    }

    const flair = ( element ) => {
        const newFlair = document.createElement( 'div' );
        newFlair.className = 'flair';
        newFlair.id = `${ element.innerHTML }-flair`;
        appendToFrom( element, newFlair );
    }

    const getEraseOptions = ( ) => {
        return document.getElementById( 'eraseOptions' );
    }

    const getOptionErase = ( ) => {
        return document.getElementById( 'optionErase' );
    }

    const getOptionClear = ( ) => {
        return document.getElementById( 'optionClear' );
    }

    const getExtraOptions = ( ) => {
        extraOptions.push( getOptionErase( ), getOptionClear( ) );
        return extraOptions;
    }

    const storeAsCoords = ( x, y ) => {
        const pair = [  ];
        pair.push( x, y );
        coordinatePairs.push( pair );
    }
    
    // work in progress
    // getGrid === null at the beginning of the file for some reason. it is only recognized when pixelGrid is console logged at the bottom.
    const distributeCoords = ( cellArray ) => {
        const currentCells = cellArray;
    }

    const getCoordinates = ( ) => {
        return coordinatePairs;
    }

    const clearCoordinates = ( ) => {
        coordinatePairs = [  ];
        return coordinatePairs;
    }

    const random = ( min, max ) => {
        const newNum = Math.floor( Math.random( ) * ( max - min ) ) + min;
        return newNum;
    }

    const rgb = ( ) => {
        const format = `rgb( ${ random( 80, 255 ) }, ${ random( 80, 255 ) }, ${ random( 80, 255 ) } )`;
        return format;
    }

    const populatePalette = ( ) => {
        // use getSwatchCells( ) and apply a random color to each cell with .forEach and randomRGB( );
        const swatches = getSwatchCells( );
        swatches.forEach( item => {
            item.style.backgroundColor = rgb( );
        } );
    }

    const getSwatchCells = ( ) => {
        const getSwatchGrid = document.getElementById( 'swatchGrid' );
        return getSwatchGrid.querySelectorAll( '.cell' );
    }
    
    const makeCells = ( n, parentId ) => {
        for ( let i = 0; i < n; i++ ) {
            const newCell = document.createElement( 'button' );
            newCell.className = 'cell';
            appendToFrom( document.getElementById( parentId ), newCell );
        }
    }

    // creates the matrix that holds cells. each cell should have a numbered position in the grid.
    // refactor: make this function reusable for the swatch grid.
    const makeGrid = ( numDown, numRight ) => {
        for ( let i = 0; i < numDown; i++ ) {
            for ( let j = 0; j < numRight; j++ ) {
                makeCells( 1, 'pixelGrid' );
                storeAsCoords( j, i );
            }
        }
    }

    const makeSwatch = ( numDown, numRight ) => {
        for ( let i = 0; i < numDown; i++ ) {
            for ( let j = 0; j < numRight; j++ ) {
                makeCells( 1, 'swatchGrid' );
                storeAsCoords( j, i );
            }
        }
    }

    const getCells = ( ) => {
        return document.getElementsByClassName( 'cell' );
    }

    const idCells = ( ) => {
        for ( let i = 0; i < getCells( ).length; i++ ) {
            const currentCell = getCells( )[i];
            distributeCoords( currentCell );
        }
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
    formatCanvas( );
    flair( getOptionErase( ) );
    flair( getOptionClear( ) );
    makeGrid( 30, 30 );
    distributeCoords( getGrid );
    clearCoordinates( );

    makeSwatch( 4, 4 );
    populatePalette( );
    getSwatchCells( );
    getCoordinates( );
    // updateCellText( );   // labels each cell
    const getPixelGrid = document.getElementById( 'pixelGrid' );

    return {
        getPixelGrid: getPixelGrid,
        appendToFrom: appendToFrom,
        appendToFromGroup: appendToFromGroup,
        formatCanvas: formatCanvas,
        flair: flair,
        getEraseOptions: getEraseOptions,
        getOptionErase: getOptionErase,
        getOptionClear: getOptionClear,
        getExtraOptions: getExtraOptions,
        storeAsCoords: storeAsCoords,
        distributeCoords: distributeCoords,
        getCoordinates: getCoordinates,
        random: random,
        rgb: rgb,
        populatePalette: populatePalette,
        getSwatchCells: getSwatchCells,
        makeCells: makeCells,
        makeGrid: makeGrid,
        makeSwatch: makeSwatch,
        getCells: getCells,
        idCells: idCells,
        resizeCells: resizeCells,
        updateCellText: updateCellText,
    }

} ) ( );
