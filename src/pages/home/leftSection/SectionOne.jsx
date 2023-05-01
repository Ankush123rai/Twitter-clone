import React, { useState } from "react";
import style from "./SectionOne.module.css";
import Avatar from "@mui/material/Avatar";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaRegEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaMehBlank,
  FaSearch,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";
import Popover from "@mui/material/Popover";
import PopupState from "material-ui-popup-state";
import { bindTrigger, bindPopover } from "material-ui-popup-state";
import Typography from "@mui/material/Typography";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";



const SectionOne = () => {
  const [mobileView,setMobileView]=useState(false)
  const [dialog, setDialog] = useState(false);

  const navigate = useNavigate()
  const userDetails = JSON.parse(localStorage.getItem("userData")) || [];
  const userName = userDetails.find((name) => name.active.isActive === true);
  
  function handleLogout(){
    if(userName){
      userName.active.isActive = false
      localStorage.setItem('userData', JSON.stringify(userDetails))
      navigate('/login')
       }
    }

  

  return (
    <div className={style.sectionOne}>
      <div className={mobileView ? style.responsive: style.sidebar}>
        <div className={style.logo}>
          <Link to="/">
            <FaTwitter className={style.logo} />
          </Link>
        </div>
        <div className={style.list}>
          <Link to="/">
            <FaHome className={style.icons} />
           <span>home</span>
          </Link>
        </div>

        <div className={style.list} style={{ display: mobileView ? "none" : "" }}>
          <Link >
            <FaHashtag className={style.icons} />
           <span> Explore</span>
          </Link>
        </div>

        <div className={style.list} style={{ display: mobileView ? "" : "none" }}>
          <Link >
            <FaSearch className={style.icons} />
           <span>Search</span>
          </Link>
        </div>

        <div className={style.list}>
          <Link >
            <FaRegBell className={style.icons} />
           <span> Notification</span>
          </Link>
        </div>
        <div className={style.list}>
          <Link>
            <FaRegEnvelope className={style.icons} />
           <span> Message</span>
          </Link>
        </div>
        <div className={style.list}>
          <Link>
            <FaRegBookmark className={style.icons} />
           <span> Bookmarks</span>
          </Link>
        </div>
        <div className={style.list}>
          <Link>
            <FaClipboardList className={style.icons} />
           <span>tweeter Blue</span>
          </Link>
        </div>
        <div className={style.list}>
          <Link>
            <FaUserAlt className={style.icons} />
           <span> Profile</span>
          </Link>
        </div>
        <div className={style.list}>
          <Link>
            <FaMehBlank className={style.icons} />
            <span>More</span>
          </Link>
        </div>

        <div className={style.tweetBtn}>
          <Link>
            <button onClick={()=>setDialog(true)}>Tweet</button>
            <Dialog open={dialog} onClose={()=>setDialog(false)}>
              <DialogTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rerum 
              </DialogTitle>
              <DialogContent> culpa dolorum eligendi esse minima quasi natus aut?</DialogContent>
              <DialogActions>
                <button>Tweet</button>
              </DialogActions>
            </Dialog>
          </Link>
        </div>
       
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
      <div className={style.userData} {...bindTrigger(popupState)}>
              <div className={style.pimage}>
                <Avatar
                  sx={{ width: 45, height: 45 }}
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </div>
              <div className={style.username}>
                <div>
                  <span className={style.name}>{userName? userName.name : ''} </span>
                </div>
                <div>
                  <span className={style.email}>{userName? userName.email : ''}</span>
                </div>
              </div>
              <div className={style.More}>
                <MoreHorizSharpIcon />
              </div>
            </div>

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography
                sx={{
                  p: 1.5,
                  cursor: "pointer",
                  ":hover": { background: "#f5f4f2" },
                }}
              >
                <span className={style.popoverName} onClick={() => navigate('/login')}>
                  {" "}
                  Add an existing account
                </span>
              </Typography>
              <Typography
               
              >
                <span className={style.popoverName} onClick={handleLogout}>
                  {" "}
                  Log out {userName? userName.email : ''}
                </span>
              </Typography>
            </Popover>
          </div>
        )}
      </PopupState>

      <div className={style.mobile_sidebar} onClick={()=>setMobileView(!mobileView)}>
              <Avatar
                  sx={{ width: 45, height: 45 }}
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
      </div>
      </div>
     
                 
                

    </div>
  );
};

export default SectionOne;
