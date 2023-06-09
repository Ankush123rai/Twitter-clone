import React, { useState } from 'react'
import  style from './Home.module.css'
import CreateTweet from '../../component/createTweet/CreateTweet'
import UserFollowData from '../../component/UserFollowData';
import UserPost from '../../component/UserPost/UserPost';
import SectionOne from './leftSection/SectionOne';
import RightSide from '../../component/rightSide/RightSide';

const Home = () => {
  const [isTweet, setIsTweet] = useState(true);
  return (
    

    <div className={style.container_post}>
    <SectionOne/>
    <div className={style.post}>

    <div className={style.transparent}>
            <div className={style.home}>
              <span>Home </span>            
            </div>
            <div className={style.insideHome}>
              <div className={style.foryou} onClick={() => setIsTweet(true)}>
                <p >For you</p>
                {isTweet ? <hr className={style.hrline} /> : ""}
              </div>
              <div
                className={style.following}
                onClick={() => setIsTweet(false)}
              >
                <p >Follwoing</p>
                {isTweet ? "" : <hr className={style.hrline} />}
              </div>
            </div>
          </div>

    </div>
      <CreateTweet />    
      {isTweet ? <UserPost /> : <UserFollowData />}
    
    </div>
     
  )
}

export default Home