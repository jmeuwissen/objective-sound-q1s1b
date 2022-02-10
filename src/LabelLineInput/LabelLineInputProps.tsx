
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