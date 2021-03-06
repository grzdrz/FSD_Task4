import OptionPanelElement from './OptionPanelElement';

class HandlesCount extends OptionPanelElement {
  public build(): void {
    super.build();

    const modelData = this.view.getModelData();

    const input = document.createElement('input');
    const text = document.createElement('p');

    input.type = 'number';
    input.step = '1';
    input.value = modelData.values.length.toString();
    input.min = '1';
    input.className = 'options__input js-options__input js-options__handles-count-input';

    text.className = 'options__text';
    text.textContent = 'handles count';

    this.DOMElement.append(input);
    this.DOMElement.append(text);

    this.DOMElement.addEventListener('change', this.handleInputChange);

    this.view.containerElement.append(this.DOMElement);
  }

  public update(): void {
    const { values } = this.view.getModelData();
    const input = <HTMLInputElement>(this.DOMElement.querySelector('.js-options__input'));
    input.value = `${values.length}`;
  }

  private handleInputChange = (event: globalThis.Event) => {
    event.preventDefault();

    const currentInput = <HTMLInputElement>(this.DOMElement.querySelector('.js-options__input'));
    const handlesCount = Number.parseInt(currentInput.value, 10);

    const modelData = this.view.getModelData();
    const values = [];

    for (let i = 0; i < handlesCount; i += 1) {
      if (i < modelData.values.length) values.push(modelData.values[i]);
      else values.push(modelData.maxValue);
    }
    const dataToUpdate = { values };

    this.view.setModelData(dataToUpdate);
  };
}

export default HandlesCount;
