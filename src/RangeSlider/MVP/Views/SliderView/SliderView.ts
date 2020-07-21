/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import View from "../View";

import SliderPart from "./SliderParts/SliderPart";
import Handle from "./SliderParts/Handle";
import FilledStrip from "./SliderParts/FilledStrip";
import EmptyStrip from "./SliderParts/EmptyStrip";

import Vector from "../../../Helpers/Vector";

import Event from "../../../Events/Event";
import ModelDataEventArgs from "../../../Events/ModelDataEventArgs";
import Scale from "./SliderParts/Scale";
import ViewManager from "../ViewManager";
import MathFunctions from "../../../Helpers/MathFunctions";

class SliderView extends View {
    public parts: SliderPart[] = [];

    public onHandleMove: Event = new Event();

    public onModelStateUpdate: Event = new Event();

    constructor(containerElement: HTMLElement, viewManager: ViewManager) {
        super(containerElement, viewManager);

        this.handlerViewportSizeChange = this.handlerViewportSizeChange.bind(this);
    }

    public initialize(): void {
        this.createParts();
        this.renderContainer();
        this.parts.forEach((part) => {
            part.initialize();
        });

        const ro = new ResizeObserver(this.handlerViewportSizeChange);
        const htmlElement = document.querySelector("html");
        if (!htmlElement) throw new Error();
        ro.observe(htmlElement);

        this.update(true);
    }

    public update(neededRerender: boolean): void {
        if (neededRerender) { // полный перерендер всех элементов слайдера
            this.containerElement.innerHTML = "";
            this.createParts();
            this.renderContainer();
            this.parts.forEach((part) => {
                part.buildDOMElement();
                part.update();
            });
        } else { // или просто обновление их состояний
            this.renderContainer();
            this.parts.forEach((part) => {
                part.update();
            });
        }

        this.renderContainer();
    }

    // значение в условных единицах пропорциональное пиксельным координатам курсора в контейнере
    public calculateProportionalValue(cursorPositionInContainer: Vector, handleCountNumber: number): void {
        const modelData = this.getModelData();
        const {
            sliderLength,
            handleWidth,
            angleInRad,
            isHandlesSeparated,
        } = this.viewManager.viewData;

        const shiftCoefficient = (isHandlesSeparated ? handleCountNumber : 0);
        const maxShiftCoefficient = (isHandlesSeparated ? modelData.values.length : 1);
        const vectorizedHandleWidth = Vector.calculateVector(handleWidth * shiftCoefficient, angleInRad);
        cursorPositionInContainer = cursorPositionInContainer.subtract(vectorizedHandleWidth);
        const containerCapacity = sliderLength - handleWidth * maxShiftCoefficient;

        const mainAxisVector = Vector.calculateVector(sliderLength, angleInRad);
        const cursorPositionProjectionOnSliderMainAxis = cursorPositionInContainer.calculateVectorProjectionOnTargetVector(mainAxisVector);

        const proportionalValue = (modelData.deltaMaxMin * cursorPositionProjectionOnSliderMainAxis) / (containerCapacity) + modelData.minValue;

        const valuesArray = modelData.values.map((e) => e);
        valuesArray[handleCountNumber] = proportionalValue;
        this.onHandleMove.invoke(new ModelDataEventArgs({ values: valuesArray }));
    }

    // пиксельное значение пропорциональное условному значению
    public calculateProportionalPixelValue(value: number): number {
        const modelData = this.getModelData();
        const { sliderLength, handleWidth, isHandlesSeparated } = this.viewManager.viewData;

        const maxShiftCoefficient = (isHandlesSeparated ? modelData.values.length : 1);
        const usedLength = sliderLength - handleWidth * maxShiftCoefficient;

        return ((value - modelData.minValue) * usedLength) / modelData.deltaMaxMin;
    }

    private createParts(): void {
        const modelData = this.getModelData();
        this.parts = [];

        this.parts.push(new EmptyStrip(this));
        modelData.values.forEach((value, index) => {
            this.parts.push(new Handle(this, index));
        });
        this.viewManager.viewData.filledStrips.forEach((value, index) => {
            if (value) this.parts.push(new FilledStrip(this, index));
        });

        if (this.viewManager.viewData.hasScale) this.parts.push(new Scale(this));
    }

    private renderContainer(): void {
        const { sliderLength, angleInRad } = this.viewManager.viewData;

        this.calculateSliderLength();

        const size = Vector.calculateVector(sliderLength, angleInRad);
        View.renderSize(this.containerElement, size);
    }

    private calculateSliderLength() {
        const { angleInRad, borderThickness } = this.viewManager.viewData;

        const rangleSlider = this.containerElement.closest(".range-slider");
        let boundingRect;
        if (rangleSlider) {
            boundingRect = rangleSlider.getBoundingClientRect();
        } else throw new Error("sdfsdf");

        // координаты точки поверхности эллипса
        const width = boundingRect.width - borderThickness * 2;
        const height = boundingRect.height - borderThickness * 2;
        const curLength = MathFunctions.calculateEllipseSurfacePointCoordinate(width, height, angleInRad).length;
        this.viewManager.viewData.sliderLength = curLength;
    }

    private handlerViewportSizeChange(/* entries: ReadonlyArray<ResizeObserverEntry>, observer: ResizeObserver */): void {
        this.update(true);
    }
}

export default SliderView;