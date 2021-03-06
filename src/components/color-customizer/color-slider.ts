/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import $ from 'jquery';

import '../../plugin';
import IModelData from '../../RangeSlider/Data/IModelData';
import ModelData from '../../RangeSlider/Data/ModelData';
import ViewData from '../../RangeSlider/Data/ViewData';
import EventArgs from '../../RangeSlider/Events/EventArgs';
import EventHandler from '../../RangeSlider/Events/EventHandler';
import ColorCustomizer from './color-customizer';

const modelData = {
  minValue: 0,
  maxValue: 255,
  values: [50],
  stepSize: 1,
  filledStrips: [false, false],
};
const viewData = {
  sliderStripThickness: 10,
  handleWidth: 15,
  handleHeight: 15,
  borderThickness: 5,
  maxSegmentsCount: 1,
  scaleFontSize: 15,
  angle: 90,
  hasScale: false,
  hasTooltip: true,
  scaleMargin: 30,
};
class ColorSlider {
  public containerElement: HTMLElement;
  public jqueryElement: JQuery<HTMLElement>;

  public manager: ColorCustomizer;

  public getModelData: () => ModelData;
  public getViewData: () => ViewData;
  public subscribeOnValuesUpdated: (handler: EventHandler<IModelData>) => void;

  public color = 0;

  constructor(manager: ColorCustomizer, containerElement: HTMLElement) {
    this.manager = manager;
    this.containerElement = containerElement;

    this.jqueryElement = $(this.containerElement).rangeSlider(modelData, viewData);
    this.getModelData = this.jqueryElement.data('getModelData');
    this.getViewData = this.jqueryElement.data('getViewData');
    this.subscribeOnValuesUpdated = this.jqueryElement.data('subscribeOnValuesUpdated');

    this.initialize();
  }

  initialize(): void {
    this.subscribeOnValuesUpdated(this.handleChangeColor);

    const { values } = this.getModelData();
    this.color = values[0];
  }

  private handleChangeColor = (args?: EventArgs<IModelData>) => {
    let valuesCopy: number[];
    if (args?.data) valuesCopy = args?.data && args?.data.values as number[];
    else valuesCopy = this.getModelData().values;

    this.color = valuesCopy[0];
    this.manager.changeSquareColor();
  };
}

export default ColorSlider;
