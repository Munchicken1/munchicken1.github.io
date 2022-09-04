import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import ButtonBase from "@mui/material/ButtonBase"
import Typography from "@mui/material/Typography"
import chelseaCover from "assets/chelsea_cover.jpeg"
import { connect as reduxConnect } from "react-redux"
import { bindActionCreators } from "redux"
import { openModalProject } from "store/modalProject/modalProject_actions"

interface IReduxProps {
  openModalProject: () => void
}

const projects = [
  {
    url: chelseaCover,
    title: "Chelsea Framing Products",
    width: "100%",
  },
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  marginTop: "20px",
  marginBottom: "40px",
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}))

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
})

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}))

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}))

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}))

const ButtonBases: React.FC<IReduxProps> = ({ openModalProject }) => {
  const handleClickProject = () => {
    openModalProject()
  }

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "80%" }}
    >
      {projects.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          onClick={handleClickProject}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  )
}

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ openModalProject }, dispatch)

export default reduxConnect(null, mapDispatchToProps)(ButtonBases)
