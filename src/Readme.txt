.main_div {
  position: fixed;
  top: 8rem;
  left: 25%;
  z-index: -999;
  width: 100%;
  overflow-y: scroll;
}

.create_first {
  display: flex;
  padding: 0.7rem 1rem;
  gap: 2rem;
}
.create_img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
.create_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.create_input {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.div2 {
  width: 45%;
  border: 1px solid #eee;
  border-bottom: none;
}
.div3 {
  /* border: red 2px solid; */
  width: 30%;
}
.home {
  /* border: red 2px solid; */
  height: 2rem;
  margin: 1rem 0;
  /* z-index: 999;
     background: transparent; */
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 500;
}
.insideHome {
  /* border: red 2px solid; */
  display: flex;
}
.transparent {
  backdrop-filter: blur(90px);
  position: sticky;
  top: 0;
  z-index: 99;
}

.following {
  width: 50%;
  text-align: center;
  padding: 10px 0;
  font-weight: 500;
  height: 2rem;
  cursor: pointer;
}
.following:hover {
  background-color: gainsboro;
}

.textHeader {
  display: flex;
  /* border: red 2px solid; */
  height: 8rem;
  padding: 0 10px;
  border: 1px solid #eee;
  /* margin-top: 5rem; */
}
.textarea {
  width: 95%;
  height: 3rem;
  padding: 0;
  border: none;
  resize: none;
  outline: none;
  font-size: 1.2rem;
  font-family: inherit;
}
.profileSec {
  /* border: red 2px solid; */
  width: 10%;
}
.tweetSection{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.profile_div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    /* border: red 2px solid; */
}

.icons {
display: flex;
}
.Twittebtn {
  margin-top: 0.5rem;
}


.scroll {
  overflow-y: scroll;
}
.scroll::-webkit-scrollbar {
  display: none;
}

.foryou {
  width: 50%;
  text-align: center;
  padding: 10px 0;
  font-weight: 500;
  font-family: inherit;
  height: 2rem;

  cursor: pointer;
}

@media screen and (max-width:1000) {

    
}