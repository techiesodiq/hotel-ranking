/** @format */

import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import data from "../../data/login.json";

const DesktopScreenModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const formikInitialValues = {
    username: "",
    password: "",
  };

  const formikValidationSchema = Yup.object({
    username: Yup.string().min(2).required("Required"),
    password: Yup.string().min(6).required("Required"),
  });

  const formikHandleSubmit = async (values: any, formMethods: any) => {
    console.log(values);
    setLoading(true);
    if (
      values.username === data.username &&
      values.password === data.password
    ) {
      setOpen(false);
      setLoading(false);
    } else {
      setShowErrorAlert(true);
      setLoading(false);
    }
    formMethods.resetForm({ values: "" });
  };

  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <Dialog onClose={formikHandleSubmit} open={open}>
        <DialogTitle
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "26px",
            marginTop: "20px",
          }}
        >
          Login
        </DialogTitle>
        <div
          style={{
            margin: 0,
            padding: 0,
            height: "40vh",
            width: "35vw",
            position: "relative",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              margin: 0,
              padding: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            {showErrorAlert && (
              <Alert style={{ fontSize: "11px" }} severity="error">
                Invalid username and password
              </Alert>
            )}

            <p style={{ fontSize: "11px", lineHeight: "10px" }}>
              <i>Please enter your username and password to login.</i>
            </p>
            <Formik
              initialValues={formikInitialValues}
              validationSchema={formikValidationSchema}
              onSubmit={formikHandleSubmit}
            >
              {(props) => {
                return (
                  <form onSubmit={props.handleSubmit}>
                    <Grid
                      container
                      rowSpacing={3}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-basic"
                          label="Username*"
                          variant="outlined"
                          fullWidth
                          name="username"
                          onBlur={props.handleBlur}
                          onChange={props.handleChange}
                          value={props.values.username}
                        />
                        {props.touched.username && props.errors.username ? (
                          <p
                            style={{
                              color: "red",
                              fontSize: "11px",
                              marginTop: 0,
                            }}
                          >
                            {props.errors.username}
                          </p>
                        ) : null}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-basic"
                          label="Password*"
                          variant="outlined"
                          fullWidth
                          type="password"
                          name="password"
                          onBlur={props.handleBlur}
                          onChange={props.handleChange}
                          value={props.values.password}
                        />
                        {props.touched.password && props.errors.password ? (
                          <p
                            style={{
                              color: "red",
                              fontSize: "11px",
                              marginTop: 0,
                            }}
                          >
                            {props.errors.password}
                          </p>
                        ) : null}
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: "20px",
                          marginBottom: "30px",
                        }}
                      >
                        <Button fullWidth type="submit" variant="contained">
                          {loading ? "Logging in..." : "Login"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Dialog>
    </Box>
  );
};

const OtherScreensModal = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const formikInitialValues = {
    username: "",
    password: "",
  };

  const formikValidationSchema = Yup.object({
    username: Yup.string().min(2).required("Required"),
    password: Yup.string().min(6).required("Required"),
  });

  const formikHandleSubmit = async (values: any, formMethods: any) => {
    console.log(values);
    setLoading(true);
    if (
      values.username === data.username &&
      values.password === data.password
    ) {
      setOpen(false);
      setLoading(false);
    } else {
      setShowErrorAlert(true);
      setLoading(false);
    }
    formMethods.resetForm({ values: "" });
  };

  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <Dialog onClose={formikHandleSubmit} open={open}>
        <DialogTitle
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "26px",
            marginTop: "20px",
          }}
        >
          Login
        </DialogTitle>
        <div
          style={{
            margin: 0,
            padding: 0,
            height: "50vh",
            width: "80vw",
            position: "relative",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              margin: 0,
              padding: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            {showErrorAlert && (
              <Alert style={{ fontSize: "9px" }} severity="error">
                Invalid username and password
              </Alert>
            )}

            <p style={{ fontSize: "11px", lineHeight: "10px" }}>
              <i>Please enter your username and password to login.</i>
            </p>
            <Formik
              initialValues={formikInitialValues}
              validationSchema={formikValidationSchema}
              onSubmit={formikHandleSubmit}
            >
              {(props) => {
                return (
                  <form onSubmit={props.handleSubmit}>
                    <Grid
                      container
                      rowSpacing={3}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-basic"
                          label="Username*"
                          variant="outlined"
                          fullWidth
                          name="username"
                          onBlur={props.handleBlur}
                          onChange={props.handleChange}
                          value={props.values.username}
                        />
                        {props.touched.username && props.errors.username ? (
                          <p
                            style={{
                              color: "red",
                              fontSize: "11px",
                              marginTop: 0,
                            }}
                          >
                            {props.errors.username}
                          </p>
                        ) : null}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-basic"
                          label="Password*"
                          variant="outlined"
                          fullWidth
                          type="password"
                          name="password"
                          onBlur={props.handleBlur}
                          onChange={props.handleChange}
                          value={props.values.password}
                        />
                        {props.touched.password && props.errors.password ? (
                          <p
                            style={{
                              color: "red",
                              fontSize: "11px",
                              marginTop: 0,
                            }}
                          >
                            {props.errors.password}
                          </p>
                        ) : null}
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: "20px",
                        }}
                      >
                        <Button fullWidth type="submit" variant="contained">
                          {loading ? "Logging in..." : "Login"}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </Dialog>
    </Box>
  );
};

const LoginModal = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(true);
  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const formikHandleSubmit = async (values: any, formMethods: any) => {
    console.log(values);
    setLoading(true);
    if (
      values.username === data.username &&
      values.password === data.password
    ) {
      setOpen(false);
      setLoading(false);
    } else {
      setShowErrorAlert(true);
      setLoading(false);
    }
    formMethods.resetForm({ values: "" });
  };

  return (
    <div>
      {/* {isMatch ? (
        <OtherScreensModal onClose={formikHandleSubmit} />
      ) : (
        <DesktopScreenModal onClose={formikHandleSubmit} />
      )} */}
    </div>
  );
};

export default LoginModal;
