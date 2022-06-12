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
    backgroundColor: "theme.palette.background.paper",
  },
  container: {
    height: "100%",
    width: "100%",
  },

  imageList: {
    width: "100%",
    height: 450,
    overflow: "auto",
    paddingRight: "20px",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function ReleasedMoviesList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <GridList rowHeight={350} cols={4}>

          {props.moviesData.map((item) => (


            <GridListTile key={item.title} className="leftListItem">

              <Link to={"/details"} state={{ movie: item }}>
                <img className="image" src={item.poster_url} alt={item.title} />
              </Link>
              <GridListTileBar
                title={item.title}
                subtitle={<span>Release Date: {new Date(item.release_date).toDateString()}</span>}
              />

            </GridListTile>

          ))}
        </GridList>
      </div>
    </div>
  );
}