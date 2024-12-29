import { usePlayersNames } from "@/hooks/usePlayerNames";
import { Grid2 as Grid, Typography } from "@mui/material";
import { gameAtom, gameEvalAtom } from "../../../states";
import { MoveClassification } from "@/types/enums";
import ClassificationRow from "./classificationRow";
import { useAtomValue } from "jotai";

export default function MovesClassificationsRecap() {
  const { whiteName, blackName } = usePlayersNames(gameAtom);
  const gameEval = useAtomValue(gameEvalAtom);

  if (!gameEval?.positions.length) return null;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      rowGap={1}
      sx={{ scrollbarWidth: "thin", overflowY: "auto" }}
      maxHeight="100%"
      size={6}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        wrap="nowrap"
        size={12}
      >
        <Typography width="12rem" align="center" noWrap fontSize="0.9rem">
          {whiteName}
        </Typography>

        <Typography width="7rem" />

        <Typography width="12rem" align="center" noWrap fontSize="0.9rem">
          {blackName}
        </Typography>
      </Grid>

      {sortedMoveClassfications.map((classification) => (
        <ClassificationRow
          key={classification}
          classification={classification}
        />
      ))}
    </Grid>
  );
}

export const sortedMoveClassfications = [
  MoveClassification.Brilliant,
  MoveClassification.Great,
  MoveClassification.Best,
  MoveClassification.Excellent,
  MoveClassification.Good,
  MoveClassification.Book,
  MoveClassification.Inaccuracy,
  MoveClassification.Mistake,
  MoveClassification.Blunder,
];
