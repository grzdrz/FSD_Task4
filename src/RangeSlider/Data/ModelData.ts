import IModelData from './IModelData';

class ModelData implements IModelData {
  public values = [0, 0];

  public minValue = -100;

  public maxValue = 100;

  public stepSize = 10;

  public canPush = true;
  public filledStrips = [true, false];

  constructor(data: IModelData) {
    this.initialize(data);
  }

  public get deltaMaxMin(): number {
    return this.maxValue - this.minValue;
  }

  private initialize(data: IModelData): void {
    if (data.minValue !== undefined) this.minValue = data.minValue;
    if (data.maxValue !== undefined) this.maxValue = data.maxValue;
    if (data.stepSize !== undefined) this.stepSize = data.stepSize;
    if (data.canPush !== undefined) this.canPush = data.canPush;
    if (data.values !== undefined) this.values = data.values.map((e) => e).sort((a, b) => a - b);
    if (data.filledStrips !== undefined) this.filledStrips = [...data.filledStrips];
  }
}

export default ModelData;
