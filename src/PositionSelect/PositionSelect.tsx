import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import React from "react";
import { VialLabelInputGroupInfo } from "../VialLabelInputGroup/VialLabelInputGroupInfo";
import { PositionSelectInfo } from "./PositionSelectInfo";
import { PositionSelectProps } from "./PositionSelectProps";

function selectChangeHandlerFactory(
  vialLabelInputGroupNumber: number,
  positionSelectInfo: PositionSelectInfo,
  vialInputGroupStates: VialLabelInputGroupInfo[],
  setVialLabelGroupInputs: React.Dispatch<
    React.SetStateAction<VialLabelInputGroupInfo[]>
  >
) {
  return function executeOnEvent(event: SelectChangeEvent<number>) {
    const newArr = [...vialInputGroupStates];
    const setVal: number = parseInt(event.target.value.toString());
    switch (positionSelectInfo.startOrEnd) {
      case "start":
        newArr[
          vialLabelInputGroupNumber
        ].startPositionSelectInfo.positionValue = setVal;
        break;
      case "end":
        newArr[
          vialLabelInputGroupNumber
        ].endPositionSelectInfo.positionValue = setVal;
        break;
    }

    setVialLabelGroupInputs(newArr);
  };
}

export function PositionSelect(props: PositionSelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id={props.positionSelectInfo.getLabelId()}>
        {props.positionSelectInfo.getInputLabelText()}
      </InputLabel>
      <Select
        key={props.positionSelectInfo.getSelectId()}
        labelId={props.positionSelectInfo.getLabelId()}
        id={props.positionSelectInfo.getSelectId()}
        value={props.positionSelectInfo.positionValue}
        label={props.positionSelectInfo.getInputLabelText()}
        onChange={selectChangeHandlerFactory(
          props.vialLabelInputGroupNumber,
          props.positionSelectInfo,
          props.vialLabelInputGroups,
          props.setVialLabelInputGroups
        )}
      >
        {props.indexList.map((value, index) => {
          const menuItemKey =
            props.positionSelectInfo.getSelectId() + "-menuitem-" + index;
          return (
            <MenuItem value={index} key={menuItemKey}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
