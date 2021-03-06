import IViewData from './IViewData';

class ViewData implements IViewData {
  public sliderLength = 0;

  public sliderStripThickness = 10;

  public handleWidth = 15;

  public handleHeight = 15;

  public borderThickness = 5;

  public maxSegmentsCount = 10;

  public angle = 0;

  public isHandlesSeparated = false;

  public hasScale = true;

  public scaleMargin = 30;

  public hasTooltip = true;

  public tooltipMargin = 10;

  constructor(data: IViewData) {
    this.update(data);
  }

  public update(data: IViewData): void {
    if (data.sliderStripThickness !== undefined) this.sliderStripThickness = data.sliderStripThickness;
    if (data.handleWidth !== undefined) this.handleWidth = data.handleWidth;
    if (data.handleHeight !== undefined) this.handleHeight = data.handleHeight;
    if (data.borderThickness !== undefined) this.borderThickness = data.borderThickness;
    if (data.maxSegmentsCount !== undefined) this.maxSegmentsCount = data.maxSegmentsCount;
    if (data.angle !== undefined) this.angle = data.angle;
    if (data.isHandlesSeparated !== undefined) this.isHandlesSeparated = data.isHandlesSeparated;
    if (data.hasScale !== undefined) this.hasScale = data.hasScale;
    if (data.hasTooltip !== undefined) this.hasTooltip = data.hasTooltip;
    if (data.scaleMargin !== undefined) this.scaleMargin = data.scaleMargin;
    if (data.tooltipMargin !== undefined) this.tooltipMargin = data.tooltipMargin;
  }

  public get angleInRadians(): number {
    return this.angle * (Math.PI / 180);
  }
}

export default ViewData;
