import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Description = ({ data, handleClose, ...props }) => {
  const [itemList, setItemList] = useState([]);
  const fetchItem = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products/${data}`);
      setItemList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "36ch" },
      }}
      component={"div"}
    >
      {itemList.description}
      <div style={{ textAlign: "right" }}>
        <Button
          style={{
            margin: "5px",
            color: "black",
            border: "1px solid",
            borderRadius: "5px",
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </Box>
  );
};

export default Description;
