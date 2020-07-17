import Vector from "../../../../Helpers/Vector";
import SliderView from "../SliderView";
import View from "../../View";

abstract class SliderPart {
    public DOMElement: HTMLElement;

    public view: SliderView;

    constructor(view: SliderView) {
        this.view = view;
        this.DOMElement = document.createElement("div");
    }

    abstract initialize(): void;

    public buildDOMElement(): void{
        this.DOMElement.innerHTML = "";
    }

    abstract render(): void;

    protected setPosition(position: Vector): void {
        View.renderPosition(this.DOMElement, position);
    }

    protected setSize(size: Vector): void {
        View.renderSize(this.DOMElement, size);
    }
}

export default SliderPart;
