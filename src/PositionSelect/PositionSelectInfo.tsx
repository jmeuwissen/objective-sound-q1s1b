export class PositionSelectInfo {
  inputGroupIndex: number;
  positionValue: number;
  positionOptions: string[];
  startOrEnd: string;
  constructor(index: number, indexList: string[]) {
    if (new.target === PositionSelectInfo) {
      throw new Error("Can't instantiate abstract class");
    }
    this.inputGroupIndex = index;
    this.positionValue = 0;
    this.positionOptions = indexList;
    this.startOrEnd = "";
  }
  getInputLabelText(): string {
    return this.startOrEnd + "ing position";
  }
  getLabelId(): string {
    return this.startOrEnd + "-position-select-label-" + this.inputGroupIndex;
  }
  getSelectId(): string {
    return this.startOrEnd + "-position-select-element-" + this.inputGroupIndex;
  }
  getSelectLabel(): string {
    return this.startOrEnd;
  }
}
export class StartPositionSelectInfo extends PositionSelectInfo {
  constructor(index: number, indexList: string[]) {
    super(index, indexList);
    this.startOrEnd = "start";
  }
}
export class EndPositionSelectInfo extends PositionSelectInfo {
  constructor(index: number, indexList: string[]) {
    super(index, indexList);
    this.startOrEnd = "end";
  }
}
