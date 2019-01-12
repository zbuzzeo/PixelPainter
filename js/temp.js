function painter() {
  // all of the extra functions can go in here (do not need to be immediately invoked): erase, clear, fill, save, load, etc.
  let coords = [ ];
  let defaultColor = `rgb(200, 200, 200)`;
  let currentColor = defaultColor;
  let isMouseDown = false;

  const setColor = (color) => {
    currentColor = color;
  }

  const getColor = () => {
    return currentColor;
  }

  const storeAsCoords = (x, y) => {
    const pair = [ ];
    pair.push(x, y);
    coords.push(pair);
  }

  const getCoords = () => {
    return coords;
  }

  const erase = () => {
    currentColor = defaultColor;
  }

  const clearCanvas = () => {

  }

  return {
    isMouseDown: isMouseDown,
    setColor: setColor,
    getColor: getColor,
    coords: coords,
    storeAsCoords: storeAsCoords,
    getCoords: getCoords,
  }
}

(function() {
  const getPixelPainter = document.getElementById('pixelPainter');

  const makeElement = (type, id, parent, content) => {
    const newElement = document.createElement(type);
    newElement.id = id;
    if (content) {
      newElement.innerHTML = content;
    }
    parent.appendChild(newElement);
  }

  const makeGrid = (numDown, numRight, parent) => {
    for (let y = 0; y < numDown; y++) {
      for (let x = 0; x < numRight; x++) {
        makeElement('div', 'cell', parent, '');
        painter().storeAsCoords(x, y);
      }
    }
  }

  const populatePalette = () => {
    const swatches = document.querySelectorAll('#swatchGrid > div');
    console.log(swatches);
  }

  populatePalette();

  makeElement('div', 'sideMenu', getPixelPainter);
  makeElement('div', 'optClear', sideMenu, 'CLEAR');
  makeElement('div', 'optBrush', sideMenu, 'Brush');
  makeElement('div', 'optFill', sideMenu, 'Fill');
  makeElement('div', 'gridsContainer', getPixelPainter);
  makeElement('div', 'pixelGrid', gridsContainer);
  makeElement('div', 'swatchTitle', gridsContainer, 'Color Palette');
  makeElement('div', 'swatchGrid', gridsContainer);
  makeElement('div', 'eraseContainer', gridsContainer);
  makeGrid(30, 30, pixelGrid);
  makeGrid(4, 4, swatchGrid);

})();
