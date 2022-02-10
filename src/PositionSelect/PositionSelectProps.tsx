import { PositionSelectInfo } from "../PositionSelectInfo/PositionSelectInfo";
import { LabelInputGroupProps } from "./LabelinputGroupProps";

export class positionSelectProps extends LabelInputGroupProps {
  positionSelectInfo: PositionSelectInfo;
  constructor(
    vialLabelInputGroupNumber: number,
    vialInputGroupState: VialInputGroupState[],
    positionSelectInfo: PositionSelectInfo,
    setVialLabelInputGroups: React.Dispatch<
      React.SetStateAction<VialInputGroupState[]>
    >,
    indexList: string[]
  ) {
    super(
      vialLabelInputGroupNumber,
      vialInputGroupState,
      setVialLabelInputGroups,
      indexList
    );
    this.positionSelectInfo = positionSelectInfo;
  }
}
