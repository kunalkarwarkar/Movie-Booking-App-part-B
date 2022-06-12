import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },

  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function UpcomingMoviesList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.imageList} rowHeight={250} cols={6}>
        {props.moviesData.map((item) => (

          <GridListTile key={item.poster_url}>
            <Link to={"/details"} state={{ movie: item }}>
              <img className="image" src={item.poster_url} alt={item.title} />
            </Link>
            <GridListTileBar
              title={item.title}
              classes={
                {
                  
                }
              }
            />
          </GridListTile>

        ))}
      </GridList>
    </div>
  );
}