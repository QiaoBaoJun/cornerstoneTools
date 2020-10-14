let defaultColor = 'yellow',
  activeColor = 'red',
  fillColor = 'transparent',
  selectedColor = '#ff00e2';

function setFillColor(color) {
  fillColor = color;
}

function getFillColor() {
  return fillColor;
}

function setToolColor(color) {
  defaultColor = color;
}

function getToolColor() {
  return defaultColor;
}

function setActiveColor(color) {
  activeColor = color;
}

function getActiveColor() {
  return activeColor;
}

function getColorIfActive(data) {
  // if (data.color) {
  //   return data.color;
  // }

  return data.active ? activeColor : data.color || defaultColor;
}

function getColorIfSelected(data) {
  return data.selected ? selectedColor : data.color || defaultColor;
}

const toolColors = {
  setFillColor,
  getFillColor,
  setToolColor,
  getToolColor,
  setActiveColor,
  getActiveColor,
  getColorIfActive,
  getColorIfSelected,
  defaultColor,
  activeColor,
  selectedColor,
};

export default toolColors;
