/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Wrapper from "../components/Wrapper/Wrapper";
import {
  Button,
  CircularProgress,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { CustomFormWrapper } from "../styles/CustomFormWrapper";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "../yup/yup";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../redux/slice/employeeSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useImageUpload from "../hooks/useImageUpload";

const AddEmployee = () => {

    const {imageUrl, handelImageUpload , imageLoading} = useImageUpload();

  const { control, handleSubmit ,reset} = useForm({
    resolver: yupResolver(employeeSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      image: null,
      age: "",
      salary: null,
    },
  });
  const navigate = useNavigate();

  const { createEmployeeLoading } = useSelector((s) => s.employee);

  const dispatch = useDispatch();


  const formSubmit = (data) => {
    const payload = { ...data, image: imageUrl };

    dispatch(createEmployee(payload))
      .unwrap()
      .then((response) => {
        if (response?.isSuccess) {
          toast.success("Employee added successfully");
          reset();
          navigate("/");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(err?.message);
        }
      });
  };


  

  return (
    <Wrapper>
      <Container fixed>
        <CustomFormWrapper onSubmit={handleSubmit(formSubmit)}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12 }}>
              <Controller
                name="fullName"
                control={control}
                render={({
                  field: { ...props },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    placeholder="Enter Your Name"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onChange={props?.onChange}
                    value={props?.value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Controller
                name="email"
                control={control}
                render={({
                  field: { ...props },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    placeholder="Enter Your Email"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onChange={props?.onChange}
                    value={props?.value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Controller
                name="phone"
                control={control}
                render={({
                  field: { ...props },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    placeholder="Enter Your Phone Number"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onChange={props?.onChange}
                    value={props?.value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Controller
                name="age"
                control={control}
                render={({
                  field: { ...props },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    placeholder="Enter Your Age"
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onChange={props?.onChange}
                    value={props?.value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Controller
                name="salary"
                control={control}
                render={({
                  field: { ...props },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    placeholder="Enter Your Salary"
                    fullWidth
                    type="number"
                    variant="outlined"
                    color="primary"
                    onChange={props?.onChange}
                    value={props?.value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Controller
                name="image"
                control={control}
                render={({
                  field: { ...props },
                  fieldState: { invalid, error },
                }) => (
                  <>
                    <input
                      type="file"
                      accept="*/image"
                      onChange={(e) => {
                        handelImageUpload(e.target.files[0]);
                        props.onChange(e.target.files[0]);
                      }}
                    />
                    {invalid && (
                      <Typography
                        sx={{
                          color: (theme) => theme.palette.error.main,
                          fontSize: "0.75rem",
                          margin: "3px 14px 0px 14px",
                        }}
                      >
                        {error?.message}
                      </Typography>
                    )}
                    {imageLoading && <Typography>Uploading...</Typography>}
                    {imageUrl && (
                      <figure
                        style={{
                          marginTop: "15px",
                        }}
                      >
                        <img
                          src={imageUrl}
                          alt="uploaded image"
                          width={150}
                          height={150}
                        />
                      </figure>
                    )}
                  </>
                )}
              />
            </Grid2>
            <Grid2 size={{ xs: 12 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  minWidth: "200px",
                }}
                type="submit"
                disabled={createEmployeeLoading || imageLoading}
              >
                {createEmployeeLoading ? <CircularProgress /> : "Submit"}
              </Button>
            </Grid2>
          </Grid2>
        </CustomFormWrapper>
      </Container>
    </Wrapper>
  );
};

export default AddEmployee;
