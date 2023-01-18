import React, { useEffect, useState } from "react";
import Image from "next/image";
import { setConfig } from "next/config";
import axios from "axios";
import { Button, Fade, Modal, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Description from "./Description";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const dashboard = () => {
  const [name, setName] = useState("");
  const [item, setItem] = useState([]);
  const [open, setOpen] = useState(false);

  const [id, setId] = useState();
  const handleOpen = (id) => {
    setId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const fetchItem = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      console.log(res);
      setItem(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItem();
    const data = sessionStorage.getItem("name");
    setName(data);
  }, []);

  console.log(item);
  return (
    <>
      <div>
        <header className="fixed w-full mb-10 shadow-lg">
          <div className="bg-slate-50 mx-auto flex flex-row justify-between items-center">
            <div className="py-2 px-10 md:px-40   w-8/12">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={70}
                height={70}
                priority
              />
            </div>
            <div>{name}</div>
            <Image
              src="/assets/header-splash.png"
              alt="header-splash"
              width={100}
              height={100}
              priority
            />
          </div>
        </header>
      </div>

      <div
        className="flex flex-row flex-wrap h-screen justify-center justify-items-center items-center gap-10 border bg-gray-100"
        style={{ paddingTop: "130px" }}
      >
        {item.map((data) => {
          return (
            <div className="card">
              <Image
                src="/assets/logo.png"
                alt="header-splash"
                width={100}
                height={100}
                priority
                className="w-full h-full object-cover"
              />
              <div className="p-5 flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="badge">{data.brand}</span>
                  <span className="badge">{data.category}</span>
                  <span className="badge flex">
                    <Image
                      src="./star.svg"
                      alt="header-splash"
                      width={16}
                      height={16}
                      priority
                    />
                    <div className="ml-1">5.0</div>
                  </span>
                </div>

                <h2 className="product-title">{data.title}</h2>

                <div>
                  <span className="text-xl font-bold">${data.price}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="discount">
                      Save {data.discountPercentage}%
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex gap-2">
                  <button className="button-primary">Add to Cart</button>
                  <button className="button-icon">
                    <Image
                      src="./love.svg"
                      alt="header-splash"
                      width={30}
                      height={30}
                      priority
                      className="opacity-50"
                    />
                  </button>
                  <button
                    className="button-icon"
                    onClick={() => handleOpen(data.id)}
                  >
                    <Image
                      src="./eye.svg"
                      alt="header-splash"
                      width={30}
                      height={30}
                      priority
                      className="opacity-50"
                    />
                  </button>

                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <Box sx={style} style={{ background: "white" }}>
                        <Toolbar style={{ marginLeft: "-1rem" }}>
                          <Typography component="div" sx={{ flexGrow: 2 }}>
                            <b>Description</b>
                          </Typography>
                          <i
                            className="icon fa fa-times"
                            aria-hidden="true"
                            onClick={handleClose}
                          ></i>
                        </Toolbar>
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                        >
                          <Description data={id} handleClose={handleClose} />
                        </Typography>
                      </Box>
                    </Fade>
                  </Modal>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default dashboard;
