import { SliderPart } from "./SliderPart.js";

export class EmptyStrip extends SliderPart {
    constructor(view, DOMElement) {
        super(view, DOMElement);

        this.calculatePosition = this.calculatePosition.bind(this);
    }

    initialize() {
        this.calculatePosition();
    }

    calculatePosition() {
        let modelData = this.view.getModelData();

        let handle = this.view.firstSliderInstance;
        let handleSize = handle.size;

        this.setSize({
            height: modelData.sliderStripThickness,
            width: modelData.sliderStripLength,
        });
        this.setPosition({
            x: 0,
            y: handleSize.height / 2 - (modelData.sliderStripThickness) / 2,
        });

        let transformOrigin = {//точка вращения - отступ на половину размера ползунка от основания полосы и отступ до центра полосы в ее толщине
            x: handle.size.width / 2,
            y: (modelData.sliderStripThickness) / 2,
        };
        this.DOMElement.style.transformOrigin = `${transformOrigin.x}px ${transformOrigin.y}px`;
        this.DOMElement.style.transform = `rotate(${-modelData.angle}deg)`;
    }
}