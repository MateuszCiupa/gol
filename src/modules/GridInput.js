export default class GridInput {
  static #DEFAULT_HEIGHT = 50;
  static #DEFAULT_WIDTH = 110;
  #heightInput;
  #widthInput;

  constructor(heightQuery, widthQuery) {
    this.#heightInput = document.querySelector(heightQuery);
    this.#widthInput = document.querySelector(widthQuery);

    this.#heightInput.value = GridInput.#DEFAULT_HEIGHT;
    this.#widthInput.value = GridInput.#DEFAULT_WIDTH;

    this.#heightInput.oninput = this.handleChange(this.#heightInput);
    this.#widthInput.oninput = this.handleChange(this.#widthInput);
  }

  handleChange() {
    return () => {
      const e = new Event("gridChange");
      window.dispatchEvent(e);
    };
  }

  get gridHeight() {
    return !this.#heightInput.value
      ? GridInput.#DEFAULT_HEIGHT
      : parseInt(this.#heightInput.value) < this.#heightInput.min
      ? parseInt(this.#heightInput.min)
      : parseInt(this.#heightInput.value);
  }

  get gridWidth() {
    return !this.#widthInput.value
      ? GridInput.#DEFAULT_WIDTH
      : parseInt(this.#widthInput.value) < this.#widthInput.min
      ? parseInt(this.#widthInput.min)
      : parseInt(this.#widthInput.value);
  }
}
