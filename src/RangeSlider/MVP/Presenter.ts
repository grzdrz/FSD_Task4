import Model from "./Model/Model";

import ViewManager from "./Views/ViewManager";

import EventArgs from "../Events/EventArgs";
import OptionsEventArgs from "../Events/OptionsEventArgs";
import OptionsToUpdateEventArgs from "../Events/OptionsToUpdateEventArgs";
import ViewDataEventArgs from "../Events/ViewDataEventArgs";

class Presenter {
    private model: Model;

    private viewManager: ViewManager;

    constructor(model: Model, viewManager: ViewManager) {
        this.model = model;
        this.viewManager = viewManager;

        this.handlerGetModelData = this.handlerGetModelData.bind(this);
        this.handlerModelStateUpdate = this.handlerModelStateUpdate.bind(this);
        this.handlerHandleMove = this.handlerHandleMove.bind(this);
        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.handlerViewStateUpdate = this.handlerViewStateUpdate.bind(this);

        this.initialize();
    }

    initialize(): void {
        this.viewManager.initialize();

        (this.viewManager.optionsPanelView).onModelStateUpdate.subscribe(this.handlerModelStateUpdate);
        (this.viewManager.sliderView).onModelStateUpdate.subscribe(this.handlerModelStateUpdate);
        (this.viewManager.sliderView).onHandleMove.subscribe(this.handlerHandleMove);
        (this.viewManager.inputsView).onInputsChange.subscribe(this.handlerInputChange);

        [this.viewManager.sliderView, this.viewManager.inputsView, this.viewManager.optionsPanelView].forEach((view) => {
            view.onGetModelData.subscribe(this.handlerGetModelData);
            view.onViewStateUpdate.subscribe(this.handlerViewStateUpdate);
            view.initialize();
        });
    }

    public handlerGetModelData(args: EventArgs): void {
        this.model.getOptions(<OptionsEventArgs>args);
    }

    public handlerGetViewData(args: EventArgs): void {
        this.viewManager.getData(<ViewDataEventArgs>args);
    }

    public handlerHandleMove(args: EventArgs): void {
        this.model.updateOptions((<OptionsToUpdateEventArgs>args).data);
        this.viewManager.sliderView.update(false);
        this.viewManager.inputsView.update(false);
    }

    public handlerInputChange(args: EventArgs): void {
        this.model.updateOptions((<OptionsToUpdateEventArgs>args).data);
        this.viewManager.sliderView.update(false);
    }

    public handlerModelStateUpdate(args: EventArgs): void {
        this.model.updateOptions((<OptionsToUpdateEventArgs>args).data);
        this.viewManager.sliderView.update(true);
        this.viewManager.inputsView.update(true);
        this.viewManager.optionsPanelView.update(true);
    }

    public handlerViewStateUpdate(args: EventArgs): void {
        this.viewManager.viewData.update((<ViewDataEventArgs>args).data);
        this.viewManager.sliderView.update(true);
        this.viewManager.inputsView.update(false);
        this.viewManager.optionsPanelView.update(false);
    }
}

export default Presenter;
