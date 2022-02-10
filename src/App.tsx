import "./styles.css";
import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Container, FormGroup, Grid } from "@mui/material";

const { useState, Fragment } = React;

const getIndexlist = () => {
  const A_INDEX = 65;
  const H_INDEX = 72;
  const listItems = [];
  for (let i = A_INDEX; i <= H_INDEX; i++) {
    const first = String.fromCharCode(i);
    for (let j = 1; j <= 12; j++) {
      const position = first + j;
      listItems.push(position);
    }
  }
  return listItems;
};

export default function App() {
  const indexList: string[] = getIndexlist();
  const [vialLabelGroupCount, setCount] = useState(1);
  const [vialLabelInputGroups, setVialLabelInputGroups] = useState([
    new VialInputGroupState(0, indexList)
  ]);

  const addLabelInputGroupHandler = () => {
    const newArr = [...vialLabelInputGroups];
    newArr.push(new VialInputGroupState(vialLabelGroupCount, indexList));
    setVialLabelInputGroups(newArr);
    setCount(vialLabelGroupCount + 1);
    console.log(vialLabelGroupCount);
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {[...Array(vialLabelGroupCount)].map((_, i) => (
            <VialLabelInputGroup
              vialLabelInputGroupNumber={i}
              vialLabelInputGroups={vialLabelInputGroups}
              setVialLabelInputGroups={setVialLabelInputGroups}
              indexList={indexList}
              key={"vial-input-group-" + i}
            ></VialLabelInputGroup>
          ))}
        </Grid>
      </Box>
      <button onClick={addLabelInputGroupHandler}>+</button>
    </Container>
  );
}
