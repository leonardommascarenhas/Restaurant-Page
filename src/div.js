export default createGrid = (size) => {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  grid.classList.add("grid-" + size);
  return grid;
};
