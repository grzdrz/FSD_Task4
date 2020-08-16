/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-shadow */
import SliderPart from "./SliderPart";
import Vector from "../../../../Helpers/Vector";
import SliderView from "../SliderView";
import View from "../../View";
import EventArgs from "../../../../Events/EventArgs";
import IMouseData from "../../Data/IMouseData";

interface IMouseEventArgs {
    handlerMouseMove: (event: UIEvent) => void,
    handlerMouseUp: (event: UIEvent) => void,
    mousePositionInsideTargetSlider: Vector,
}

class Handle extends SliderPart {
    public countNumber: number;
    public backgroundElement: HTMLElement;

    constructor(view: SliderView, countNumber: number) {
        super(view);
        this.backgroundElement = document.createElement("div");
        this.countNumber = countNumber;
    }

    public build(): void {
        super.build();

        const { handleWidth, handleHeight } = this.view.viewManager.data;

        this.element.className = `range-slider__handle range-slider__handle_${this.countNumber}`;
        this.element.dataset.sliderCountNumber = this.countNumber.toString();
        this.element.style.width = `${handleWidth}px`;
        this.element.style.height = `${handleHeight}px`;
        this.view.containerElement.append(this.element);

        this.backgroundElement.innerHTML = "";
        this.backgroundElement.className = `range-slider__handle-background range-slider__handle-background_${this.countNumber}`;
        this.backgroundElement.dataset.sliderCountNumber = this.countNumber.toString();
        this.view.containerElement.append(this.backgroundElement);

        this.setDragAndDropHandlers();
    }

    public update(): void {
        const modelData = this.view.viewManager.getModelData();
        const { values } = modelData;
        const { handleWidth, angleInRad, isHandlesSeparated } = this.view.viewManager.data;

        const shiftCoefficient = (isHandlesSeparated ? this.countNumber : 0);
        const handlesCountShift = Vector.calculateVector(Math.abs(handleWidth * shiftCoefficient), angleInRad);
        const handlePosition = this.view.calculateProportionalPixelValue(values[this.countNumber]);

        const vectorizedHandlePosition = Vector.calculateVector(handlePosition, angleInRad).sum(handlesCountShift);

        this.setPosition(vectorizedHandlePosition);
        this.rotate();

        this.renderBackground(vectorizedHandlePosition);
    }

    private setDragAndDropHandlers(): void {
        this.element.ondragstart = () => false;
        this.element.addEventListener("mousedown", this.handlerMouseDown);
        this.element.addEventListener("touchstart", this.handlerMouseDown);
        // eslint-disable-next-line fsd/no-function-declaration-in-event-listener
        this.backgroundElement.addEventListener("mousedown", (event: UIEvent) => {
            this.handlerMouseDown(event);
        });
        // eslint-disable-next-line fsd/no-function-declaration-in-event-listener
        this.backgroundElement.addEventListener("touchstart", (event: UIEvent) => {
            this.handlerMouseDown(event);
        });
    }

    private rotate(): void {
        const { handleWidth, angle } = this.view.viewManager.data;

        const transformOriginX = handleWidth / 2;
        const transformOriginY = handleWidth / 2;
        this.element.style.transformOrigin = `${transformOriginX}px ${transformOriginY}px`;
        this.element.style.transform = `rotate(${-angle}deg)`;
    }

    private renderBackground(position: Vector): void {
        const {
            handleWidth,
            handleHeight,
            angle,
            borderThickness,
        } = this.view.viewManager.data;

        const vectorizedHandleSize = new Vector(handleWidth, handleHeight);

        const backgroundSize = new Vector(borderThickness, borderThickness).multiplyByNumber(2).sum(vectorizedHandleSize);
        const backgroundPosition = new Vector(position.x, position.y).sumNumber(-borderThickness);

        const transformOrigin = backgroundSize.multiplyByNumber(0.5);
        this.backgroundElement.style.transformOrigin = `${transformOrigin.x}px ${transformOrigin.y}px`;
        this.backgroundElement.style.transform = `rotate(${-angle}deg)`;

        View.renderPosition(this.backgroundElement, backgroundPosition);
        View.renderSize(this.backgroundElement, backgroundSize);
    }

    private calculateMouseGlobalPosition = (event: UIEvent) => {
        let x;
        let y;
        if (event instanceof TouchEvent) {
            const touchEvent = /* <TouchEvent> */event;
            x = touchEvent.changedTouches[0].pageX;
            y = touchEvent.changedTouches[0].pageY;
        } else {
            const mouseEvent = <MouseEvent>event;
            x = mouseEvent.clientX;
            y = mouseEvent.clientY;
        }
        y = (document.documentElement.clientHeight + window.pageYOffset) - y;

        return new Vector(x, y);
    };

    private calculateCursorPositionInContainer(mouseGlobalPosition: Vector, mousePositionInsideTargetSlider: Vector): Vector {
        const containerBoundingRect = this.view.containerElement.getBoundingClientRect();
        const containerCoord = new Vector(
            containerBoundingRect.x,
            (document.documentElement.clientHeight + window.pageYOffset) - (containerBoundingRect.y + containerBoundingRect.height),
        );

        return mouseGlobalPosition.subtract(containerCoord).subtract(mousePositionInsideTargetSlider);
    }

    private calculateCursorPositionInsideTargetHandle(cursorMouseDownPosition: Vector): Vector {
        const { handleHeight } = this.view.viewManager.data;

        const targetSliderBoundingCoords = this.element.getBoundingClientRect();
        const mousePositionInsideTargetSliderX = cursorMouseDownPosition.x - targetSliderBoundingCoords.x;
        const mousePositionInsideTargetSliderY = cursorMouseDownPosition.y - (document.documentElement.clientHeight + window.pageYOffset - targetSliderBoundingCoords.y - handleHeight);
        return new Vector(mousePositionInsideTargetSliderX, mousePositionInsideTargetSliderY);
    }

    // d&d
    private handlerMouseDown = (event: UIEvent) => {
        event.preventDefault();

        const mousePosition = this.calculateMouseGlobalPosition(event);
        const mousePositionInsideTargetSlider = this.calculateCursorPositionInsideTargetHandle(mousePosition);

        const optionsForMouseEvents = {
            handlerMouseMove: (event: UIEvent): void => { },
            handlerMouseUp: (event: UIEvent): void => { },
            mousePositionInsideTargetSlider,
        };
        const handlerMouseMove = this.handlerMouseMove.bind(this, optionsForMouseEvents);
        optionsForMouseEvents.handlerMouseMove = handlerMouseMove;

        const handlerMouseUp = this.handlerMouseUp.bind(this, optionsForMouseEvents);
        optionsForMouseEvents.handlerMouseUp = handlerMouseUp;// чтобы обработчик mouseMove можно было отписать

        document.addEventListener("mousemove", handlerMouseMove);
        document.addEventListener("mouseup", handlerMouseUp);
        document.addEventListener("touchmove", handlerMouseMove);
        document.addEventListener("touchend", handlerMouseUp);

        this.view.viewManager.onMouseDown.invoke(new EventArgs<IMouseData>({ mousePosition }));
    };

    private handlerMouseMove(optionsFromMouseDown: IMouseEventArgs, event: UIEvent): void {
        const {
            mousePositionInsideTargetSlider,
        } = optionsFromMouseDown;

        const mousePosition = this.calculateMouseGlobalPosition(event);
        const cursorPositionInContainer = this.calculateCursorPositionInContainer(mousePosition, mousePositionInsideTargetSlider);

        this.view.calculateProportionalValue(cursorPositionInContainer, this.countNumber);

        this.view.viewManager.onMouseMove.invoke(new EventArgs<IMouseData>({ mousePosition }));
    }

    private handlerMouseUp(optionsFromMouseDown: IMouseEventArgs, event: UIEvent): void {
        document.removeEventListener("mousemove", optionsFromMouseDown.handlerMouseMove);
        document.removeEventListener("mouseup", optionsFromMouseDown.handlerMouseUp);
        document.removeEventListener("touchmove", optionsFromMouseDown.handlerMouseMove);
        document.removeEventListener("touchend", optionsFromMouseDown.handlerMouseUp);

        const mousePosition = this.calculateMouseGlobalPosition(event);
        this.view.viewManager.onMouseUp.invoke(new EventArgs<IMouseData>({ mousePosition }));
    }
}

export default Handle;