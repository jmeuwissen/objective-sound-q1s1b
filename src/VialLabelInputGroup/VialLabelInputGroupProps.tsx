import { VialLabelInputGroupInfo } from "./VialLabelInputGroupInfo";

export class VialLabelInputGroupProps {
  vialLabelInputGroupNumber: number;
  vialLabelInputGroups: VialLabelInputGroupInfo[];
  setVialLabelInputGroups: React.Dispatch<
    React.SetStateAction<VialLabelInputGroupInfo[]>
  >;
  indexList: string[];
  constructor(
    vialLabelInputGroupNumber: number,
    vialInputGroupState: VialLabelInputGroupInfo[],
    setVialLabelInputGroups: React.Dispatch<
      React.SetStateAction<VialLabelInputGroupInfo[]>
    >,
    indexList: string[]
  ) {
    this.setVialLabelInputGroups = setVialLabelInputGroups;
    this.vialLabelInputGroups = vialInputGroupState;
    this.vialLabelInputGroupNumber = vialLabelInputGroupNumber;
    this.indexList = indexList;
  }
}
