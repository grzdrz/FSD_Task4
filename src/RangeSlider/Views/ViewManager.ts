import IViewData from '../Data/IViewData';
import ViewData from '../Data/ViewData';
import ModelData from '../Data/ModelData';
import IMouseData from '../Data/IMouseData';
import IHandleData from '../Data/IHandleData';
import IInputData from '../Data/IInputData';
import Event from '../Events/Event';
import EventArgs from '../Events/EventArgs';
import SliderView from './SliderView/SliderView';
import InputsView from './InputsView/InputsView';
import ViewDataValidator from './ViewDataValidator';
import View from './View';

class ViewManager {
  public containerElement: HTMLElement;
  public data: ViewData;
  public views: View[] = new Array<View>();
  public validator: ViewDataValidator;

  public onMouseDown = new Event<IMouseData>();
  public onMouseMove = new Event<IMouseData>();
  public onMouseUp = new Event<IMouseData>();

  public onUpdated = new Event<IViewData>();

  public onHandleMove = new Event<IHandleData>();
  public onInputsChange = new Event<IInputData>();
  public onScaleClick = new Event<number>();
  public onEmptyRailClick = new Event<IHandleData>();
  public onFilledRailClick = new Event<IHandleData>();

  constructor(viewData: ViewData, containerElement: HTMLElement) {
    this.data = viewData;
    this.containerElement = containerElement;
    this.validator = new ViewDataValidator(this);
  }

  public initialize(modelData: ModelData): void {
    const pluginContainer: HTMLElement = document.createElement('div');
    pluginContainer.className = 'range-slider';

    const sliderContainer: HTMLElement = document.createElement('div');
    sliderContainer.className = 'range-slider__slider-container';
    this.views.push(new SliderView(sliderContainer, this));

    const inputsContainer: HTMLElement = document.createElement('div');
    inputsContainer.className = 'range-slider__additional-container';
    this.views.push(new InputsView(inputsContainer, this));

    pluginContainer.append(sliderContainer);

    this.containerElement.append(pluginContainer);
    this.containerElement.append(inputsContainer);

    this.views.forEach((view) => view.initialize(modelData));

    this.updateData();
  }

  public updateData(data: IViewData = this.data): void {
    this.data.update(data);
    if (data.maxSegmentsCount !== undefined) this.data.maxSegmentsCount = this.validator.validateMaxSegmentsCount(data.maxSegmentsCount);
    if (data.angle !== undefined) this.data.angle = this.validator.validateAngle(data.angle);

    this.onUpdated.invoke(new EventArgs(this.getData()));
  }

  public updateViewsWithoutRender = (modelData: ModelData): void => {
    this.views.forEach((view) => view.update(modelData, false));
  };

  public updateViewsWithRender = (modelData: ModelData): void => {
    this.views.forEach((view) => view.update(modelData, true));
  };

  public getData(): ViewData {
    return new ViewData(this.data);
  }
}

export default ViewManager;
