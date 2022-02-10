import {
  EndPositionSelectInfo,
  StartPositionSelectInfo
} from "../PositionSelect/PositionSelectInfo";

export class VialLabelInputGroupInfo {
  index: number;
  startPositionSelectInfo: StartPositionSelectInfo;
  endPositionSelectInfo: EndPositionSelectInfo;
  constructor(index: number, indexList: string[]) {
    this.index = index;
    this.startPositionSelectInfo = new StartPositionSelectInfo(
      index,
      indexList
    );
    this.endPositionSelectInfo = new EndPositionSelectInfo(index, indexList);
  }
}
