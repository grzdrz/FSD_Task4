import $ from "jquery";
import RangeSlider from "./RangeSlider/RangeSlider";
import IModelData from "./RangeSlider/MVP/Model/Data/IModelData";
import IViewData from "./RangeSlider/MVP/Views/Data/IViewData";

$.fn.rangeSlider = function createRangeSlider(this: JQuery, options: IModelData, viewData: IViewData): JQuery {
    RangeSlider.createRangeSlider(this[0], options, viewData);
    return this;
};
