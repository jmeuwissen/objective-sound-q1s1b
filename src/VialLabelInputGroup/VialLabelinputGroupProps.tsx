export class LabelInputGroupProps {
  vialLabelInputGroupNumber: number;
  vialLabelInputGroups: VialInputGroupState[];
  setVialLabelInputGroups: React.Dispatch<
    React.SetStateAction<VialInputGroupState[]>
  >;
  indexList: string[];
  constructor(
    vialLabelInputGroupNumber: number,
    vialInputGroupState: VialInputGroupState[],
    setVialLabelInputGroups: React.Dispatch<
      React.SetStateAction<VialInputGroupState[]>
    >,
    indexList: string[]
  ) {
    this.setVialLabelInputGroups = setVialLabelInputGroups;
    this.vialLabelInputGroups = vialInputGroupState;
    this.vialLabelInputGroupNumber = vialLabelInputGroupNumber;
    this.indexList = indexList;
  }
}
