import { VialLabelInputGroupInfo } from "../VialLabelInputGroup/VialLabelInputGroupInfo";
import { VialLabelInputGroupProps } from "../VialLabelInputGroup/VialLabelInputGroupProps";
import { PositionSelectInfo } from "./PositionSelectInfo";

export class PositionSelectProps extends VialLabelInputGroupProps {
  positionSelectInfo: PositionSelectInfo;
  constructor(
    vialLabelInputGroupNumber: number,
    vialInputGroupState: VialLabelInputGroupInfo[],
    positionSelectInfo: PositionSelectInfo,
    setVialLabelInputGroups: React.Dispatch<
      React.SetStateAction<VialLabelInputGroupInfo[]>
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
