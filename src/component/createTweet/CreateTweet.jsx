
import React, { useEffect, useRef, useState } from "react";
import style from "./CreateTweet.module.css";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Input from "@mui/material/Input";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import GifBoxIcon from "@mui/icons-material/GifBox";
import BallotIcon from "@mui/icons-material/Ballot";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Button from "@mui/material/Button";
// import Profiles from "../../component/profiles/Profiles";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import UserFollowData from "../../component/UserFollowData";
import { TextareaAutosize } from "@mui/material";

export default function CreateTweet() {
  const [isTweet, setIsTweet] = useState(true);
 
  const navigate = useNavigate();
  const inputref = useRef(null);

  const userDetails = JSON.parse(localStorage.getItem("userData")) || [];
  const userName = userDetails.find((name) => name.active.isActive === true);

  useEffect(() => {
    if (!userName) {
      navigate("/login");
    }
  }, []);
  return (
    
          <div className={style.createTweet}>
            <div className={style.create_first}>
                
            <div>
              {userName ? (
                <div className={style.create_img}>
                    <img src="https://cdn2.f-cdn.com/files/download/40990929/88eaef.jpg" alt="profile" />
                </div>
              ) : (
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              )}
            </div>
            <div className={style.create_input}>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="What's happening?"
                className={style.textarea}
            />
              
              <input type="file" ref={inputref} hidden />

              <div className={style.tweetSection}>
                <div className={style.icons}>
                  <Tooltip title="Media">
                    <PhotoSizeSelectActualIcon
                      onClick={() => inputref.current.click()}
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="GIF">
                    <GifBoxIcon
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Poll">
                    <BallotIcon
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Emoji">
                    <SentimentSatisfiedAltIcon
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px"
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Schedule">
                    <WorkHistoryIcon
                      color="primary"
                      sx={{
                        cursor: "pointer",
                        margin: "0 15px",
                      }}
                    />
                  </Tooltip>
                </div>
                <div className={style.Twittebtn}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "35px",
                      marginTop: "5px",
                      textTransform: "capitalize",
                      backgroundColor: 'rgb(29, 155, 240)'
                    }}
                  >
                    Tweet
                  </Button>
                  </div>
                  </div>
                </div>
        </div>  
      </div> 
  );
}


