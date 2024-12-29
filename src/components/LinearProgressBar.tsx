import {
  Grid2 as Grid,
  LinearProgress,
  LinearProgressProps,
  Typography,
  linearProgressClasses,
} from "@mui/material";

const LinearProgressBar = (
  props: LinearProgressProps & { value: number; label: string }
) => {
  if (props.value === 0) return null;

  return (
    <Grid container alignItems="center" justifyContent="center" size={12}>
      <Typography variant="caption" align="center">
        {props.label}
      </Typography>
      <Grid
        container
        width="90%"
        alignItems="center"
        justifyContent="center"
        wrap="nowrap"
        columnGap={2}
        size={12}
      >
        <Grid sx={{ width: "100%" }}>
          <LinearProgress
            variant="determinate"
            {...props}
            sx={(theme) => ({
              borderRadius: "5px",
              height: "5px",
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor:
                  theme.palette.grey[
                    theme.palette.mode === "light" ? 200 : 700
                  ],
              },
              [`& .${linearProgressClasses.bar}`]: {
                borderRadius: 5,
                backgroundColor: "#308fe8",
              },
            })}
          />
        </Grid>
        <Grid>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LinearProgressBar;
