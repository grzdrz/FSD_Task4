import OptionsPanel from '../OptionsPanel';
import OptionPanelElement from './OptionPanelElement';

class ListOfFilledStrip extends OptionPanelElement {
  public inputsDOMElements: HTMLInputElement[] = new Array<HTMLInputElement>();
  public filledStripsContainer: HTMLElement;

  constructor(view: OptionsPanel) {
    super(view);
    this.DOMElement = document.createElement('div');
    this.filledStripsContainer = document.createElement('div');
  }

  public build(): void {
    super.build();

    this.DOMElement.innerHTML = '';
    this.inputsDOMElements = [];

    this.DOMElement.className = `${this.DOMElement.className} options__checkboxes-container`;

    const filledStripsTitle = document.createElement('p');
    filledStripsTitle.textContent = 'Filled strips';
    filledStripsTitle.className = 'options__title';
    this.filledStripsContainer.className = 'options__inputs';

    const { filledStrips } = this.view.getModelData();
    for (let i = 0; i < filledStrips.length; i += 1) {
      const valueInput = document.createElement('input');
      valueInput.type = 'checkbox';
      this.inputsDOMElements.push(valueInput);

      valueInput.dataset.countNumber = `${i}`;
      valueInput.className = 'options__checkbox-input js-options__input js-options__filled-strips-checkbox-input';
      valueInput.checked = filledStrips[i];

      this.filledStripsContainer.append(valueInput);

      valueInput.addEventListener('change', this.handleInputChange);
    }
    this.DOMElement.append(filledStripsTitle);
    this.DOMElement.append(this.filledStripsContainer);
    this.view.containerElement.append(this.DOMElement);
  }

  public update(): void {
    this.inputsDOMElements = [];
    this.filledStripsContainer.innerHTML = '';

    const { filledStrips } = this.view.getModelData();
    for (let i = 0; i < filledStrips.length; i += 1) {
      const valueInput = document.createElement('input');
      valueInput.type = 'checkbox';
      this.inputsDOMElements.push(valueInput);

      valueInput.dataset.countNumber = `${i}`;
      valueInput.className = 'options__checkbox-input js-options__input';
      valueInput.checked = filledStrips[i];

      this.filledStripsContainer.append(valueInput);

      valueInput.addEventListener('change', this.handleInputChange);
    }

    this.inputsDOMElements.forEach((input, i) => {
      input.checked = filledStrips[i];
    });
  }

  private handleInputChange = () => {
    const { filledStrips } = this.view.getModelData();
    this.inputsDOMElements.forEach((input, i) => {
      const value = input.checked;
      filledStrips[i] = value;
    });

    const dataToUpdate = {
      filledStrips,
    };

    this.view.setModelData(dataToUpdate);
  };
}

export default ListOfFilledStrip;
