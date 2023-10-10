import React from "react";
import { Container, Grid, Paper, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FaArrowLeft } from "react-icons/fa";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm, Controller, useFormState } from "react-hook-form";
import { CVValidation, dateValidation, numberValidation } from "./validation";

import style from "./payment.module.css";

export const Payment = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });
  const { errors } = useFormState({
    control,
  });
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/order");
  };
  const onSubmit = (data) => console.log(data);

  const paymentVariant = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <div className={style.payment}>
      <div className={style.arrowBox} onClick={handleBack}>
        <FaArrowLeft className={style.arrow} />
        <span className={style.back}>Назад</span>
      </div>
      <motion.div
        variants={paymentVariant}
        initial="hidden"
        animate="visible"
        className={style.center}
      >
        <Container maxWidth="md">
          <Paper
            elevation={3}
            style={{ padding: "20px" }}
            className={style.paymentBlock}
          >
            <Typography
              variant="h4"
              gutterBottom={true}
              className={style.title}
            >
              Оплата
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    control={control}
                    defaultValue=""
                    rules={numberValidation}
                    name="cardValue"
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Номер карти"
                        variant="outlined"
                        margin="normal"
                        error={!!errors.cardValue?.message}
                        helperText={errors.cardValue?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="cardDate"
                    rules={dateValidation}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="Термін дії"
                        variant="outlined"
                        error={!!errors.cardDate?.message}
                        helperText={errors.cardDate?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    control={control}
                    name="cardCV"
                    rules={CVValidation}
                    render={({ field }) => (
                      <TextField
                        fullWidth
                        label="CVC код"
                        variant="outlined"
                        error={!!errors.cardCV?.message}
                        helperText={errors.cardCV?.message}
                        {...field}
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth={true}
                disabledlevation={true}
                sx={{ marginTop: 2 }}
              >
                Оплатити
              </Button>
            </form>
          </Paper>
        </Container>
      </motion.div>
    </div>
  );
};
