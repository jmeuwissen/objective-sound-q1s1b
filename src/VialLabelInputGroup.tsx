import { Grid } from "@mui/material";
import React from "react";
import { PositionSelect } from "./PositionSelect/PositionSelect";
import { LabelInputGroupProps } from "./PropsTypes/LabelinputGroupProps";

function VialLabelInputGroup(props: LabelInputGroupProps) {
  const startPositionInputSelect =
    props.vialLabelInputGroups[props.vialLabelInputGroupNumber]
      .startPositionSelectInfo;
  const endPositionInputSelect =
    props.vialLabelInputGroups[props.vialLabelInputGroupNumber]
      .endPositionSelectInfo;
  const containerGridKey =
    "label-group" + props.vialLabelInputGroupNumber.toString() + "-grid";
  return (
    <Grid container item spacing={1} key={containerGridKey}>
      <Grid item xs={4}>
        <PositionSelect
          vialLabelInputGroups={props.vialLabelInputGroups}
          vialLabelInputGroupNumber={props.vialLabelInputGroupNumber}
          positionSelectInfo={startPositionInputSelect}
          setVialLabelInputGroups={props.setVialLabelInputGroups}
          indexList={props.indexList}
        />
      </Grid>
      <Grid item xs={4}>
        <PositionSelect
          vialLabelInputGroups={props.vialLabelInputGroups}
          vialLabelInputGroupNumber={props.vialLabelInputGroupNumber}
          positionSelectInfo={endPositionInputSelect}
          setVialLabelInputGroups={props.setVialLabelInputGroups}
          indexList={props.indexList}
        />
      </Grid>
    </Grid>
  );
}
