import React, { useEffect } from "react";
import { Container, Typography, Grid, Grid2 } from "@mui/material";
import Wrapper from "../components/Wrapper/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../redux/slice/employeeSlice";
import { toast } from "react-toastify";
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";

const Home = () => {
  const { isLoading, employeeList } = useSelector((s) => s.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployees())
      .unwrap()
      .then((data) => {
        if (data?.isSuccess) {
          toast.success(`${data?.message} fetched successfully!!`);
        }
      });
  }, [dispatch]);

  return (
    <Wrapper>
      <Container fixed>
        {isLoading ? (
          <Typography variant="h3">Loading...</Typography>
        ) : (
          <Grid2 container spacing={{ md: 3, xs: 2 }}>
            {!!employeeList &&
              employeeList?.length &&
              employeeList?.map((employee) => (
                <Grid2 size={{ md: 4, xs: 12 }} key={employee?._id}>
                  <EmployeeCard {...employee} />
                </Grid2>
              ))}
          </Grid2>
        )}
      </Container>
    </Wrapper>
  );
};

export default Home;
