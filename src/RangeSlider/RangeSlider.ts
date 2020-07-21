import Model from "./MVP/Model/Model";
import Presenter from "./MVP/Presenter";

import IModelData from "./MVP/Model/Data/IModelData";
import ModelData from "./MVP/Model/Data/ModelData";

import IViewData from "./MVP/Views/Data/IViewData";

import ViewData from "./MVP/Views/Data/ViewData";
import ViewManager from "./MVP/Views/ViewManager";

import "./RangeSlider.scss";

class RangeSlider {
    public static sliderInstanceCount = 0;

    public static createRangeSlider(containerElement: HTMLElement, options: IModelData, viewData: IViewData): Presenter {
        const defaultOptions = new ModelData(options);
        const defaultViewData = new ViewData(viewData);

        defaultOptions.id = this.sliderInstanceCount;
        this.sliderInstanceCount += 1;

        const model = new Model(defaultOptions);
        const viewManager = new ViewManager(defaultViewData, containerElement);

        return new Presenter(model, viewManager);
    }
}

export default RangeSlider;
