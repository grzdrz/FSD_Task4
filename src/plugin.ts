/* eslint-disable no-shadow */
import $ from 'jquery';

import IModelData from './RangeSlider/Data/IModelData';
import IViewData from './RangeSlider/Data/IViewData';
import ModelData from './RangeSlider/Data/ModelData';
import ViewData from './RangeSlider/Data/ViewData';
import createRangeSlider from './RangeSlider/createRangeSlider';

$.fn.rangeSlider = function rangeSlider(this: JQuery, modelData: IModelData = {}, viewData: IViewData = {}): JQuery {
  const presenter = createRangeSlider(this[0], modelData, viewData);

  $(this).data().setModelData = function setModelData(modelData: IModelData): void {
    presenter.model.updateData(modelData);
  };
  $(this).data().setViewDataWithRender = function setViewData(viewData: IViewData): void {
    presenter.viewManager.updateData(viewData);
    presenter.viewManager.updateViewsWithRender(presenter.model.data);
  };
  $(this).data().setViewDataWithoutRender = function setViewData(viewData: IViewData): void {
    presenter.viewManager.updateData(viewData);
    presenter.viewManager.updateViewsWithoutRender(presenter.model.data);
  };
  $(this).data().getModelData = function getModelData(): ModelData {
    return presenter.model.getData();
  };
  $(this).data().getViewData = function getViewData(): ViewData {
    return presenter.viewManager.getData();
  };

  $(this).data().subscribeOnSetModelData = presenter.model.onUpdated.subscribe;
  $(this).data().subscribeOnSetViewData = presenter.viewManager.onUpdated.subscribe;

  $(this).data().subscribeOnValuesUpdated = presenter.model.onValuesUpdated.subscribe;
  $(this).data().subscribeOnMouseDown = presenter.viewManager.onMouseDown.subscribe;
  $(this).data().subscribeOnMouseMove = presenter.viewManager.onMouseMove.subscribe;
  $(this).data().subscribeOnMouseUp = presenter.viewManager.onMouseUp.subscribe;
  $(this).data().subscribeOnHandleMove = presenter.viewManager.onHandleMove.subscribe;
  $(this).data().subscribeOnScaleClick = presenter.viewManager.onScaleClick.subscribe;
  $(this).data().subscribeOnInputsChange = presenter.viewManager.onInputsChange.subscribe;
  $(this).data().subscribeOnEmptyRailClick = presenter.viewManager.onEmptyRailClick.subscribe;
  $(this).data().subscribeOnFilledRailClick = presenter.viewManager.onFilledRailClick.subscribe;

  return this;
};
