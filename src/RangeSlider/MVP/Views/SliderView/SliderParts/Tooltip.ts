import SliderPart from "./SliderPart";
import SliderView from "../SliderView";
import Vector from "../../../../Helpers/Vector";

class Tooltip extends SliderPart {
    public countNumber: number;

    constructor(view: SliderView, countNumber: number) {
        super(view);
        this.countNumber = countNumber;
    }

    public build(): void {
        super.build();

        const { values } = this.view.viewManager.getModelData();

        this.element.className = `range-slider__tooltip range-slider__tooltip_${this.countNumber}`;
        this.element.dataset.sliderCountNumber = this.countNumber.toString();
        this.element.textContent = `${values[this.countNumber]}`;
        this.view.containerElement.append(this.element);
    }

    public update(): void {
        const { values } = this.view.viewManager.getModelData();
        const {
            handleWidth,
            angleInRad,
            isHandlesSeparated,
            tooltipMargin,
            borderThickness,
        } = this.view.viewManager.data;

        this.element.textContent = `${values[this.countNumber]}`;

        const tooltipRect = this.element.getBoundingClientRect();
        const tooltipWidth = tooltipRect.width * Math.cos(angleInRad);
        const tooltipHeight = tooltipRect.height * Math.sin(angleInRad);
        const vectorizedTooltipLength = new Vector(tooltipWidth, tooltipHeight).length;

        const shiftCoefficient = (isHandlesSeparated ? this.countNumber : 0);
        const handlesCountShift = Vector.calculateVector(Math.abs(handleWidth * shiftCoefficient), angleInRad);
        let handlePosition = this.view.calculateProportionalPixelValue(values[this.countNumber]);
        handlePosition = handlePosition + handleWidth / 2 - vectorizedTooltipLength / 2;

        const vectorizedHandlePosition = Vector.calculateVector(handlePosition, angleInRad).sum(handlesCountShift);

        const reverseTooltipWidth = tooltipRect.width * Math.sin(angleInRad);
        const reverseTooltipHeight = tooltipRect.height * Math.cos(angleInRad);
        const reverseVectorizedTooltipLength = new Vector(reverseTooltipWidth, reverseTooltipHeight).length;
        const borderMargin = borderThickness * Math.sin(angleInRad);

        const vectorizedMargin = Vector.calculateVector(tooltipMargin + reverseVectorizedTooltipLength + borderMargin, angleInRad);
        const rotatedMargin = vectorizedMargin.rotateVector(Math.PI / 2);
        const position = vectorizedHandlePosition.sum(rotatedMargin);

        this.setPosition(position);
    }
}

export default Tooltip;
