import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     "& > * + *": {
//       marginTop: theme.spacing(1),
//     },
//   },
// }));

export default function HalfRating({ ind }) {
  // const classes = useStyles();
  const [count, setcount] = useState(2);
  return (
    // <div className={classes.root}>
    <Rating
      name="size-medium"
      // defaultValue={count}
      onChange={(e) => console.log(e.target.value, "my ind", ind)}
    />
    // </div>
  );
}
// import React from "react";
// import StarRating from "react-star-rating";
// export default function HalfRating() {
//   return (
//     <form action="/api" method="POST">
//       <StarRating
//         name="airbnb-rating"
//         caption="Rate your stay!"
//         ratingAmount={5}
//       />
//       <button type="submit" className="btn btn-submit">
//         Submit Rating
//       </button>
//     </form>
//   );
// }
