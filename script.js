function addContent(){
    let height = document.body.scrollHeight
    let windowHeight = window.innerHeight
    let scrolled =  document.documentElement.scrollTop

    let diff = height - (windowHeight+scrolled)
    if(diff<300){
        // code for append data
        document.querySelector(".main_content").innerHTML +=`
        <div class="posts_sect">
        <div class="posts_sect1">
          <div class="upper">
            <div class="upper_img">
              <img src="./assets/profile_pic3.jpg" alt="" />
            </div>
            <div class="post_text">
              <div class="page_name">
                <h4>
                  <a href="">
                    CoinDCX: India's Safest Crypto Platform
                    <img src="./assets/social-media.png" alt=""
                  /></a>
                </h4>
                <a href="" class="grey-text">@CoinDCX . 1h</a>
              </div>
              <p>Which token will you Buy, Sell, and HODL?</p>
            </div>
            <div class="more_icon">
              <a href=""><h3>...</h3></a>
            </div>
          </div>
          <div class="content_section">
            <p>
              Tell us below👇 <br />

              <a href=""> @PiCoreTeam</a>, <a href="">@Bitcoin</a> &
              <a href="">@DeFi</a> <br />

              <a href="">#PiNetwork</a> <a href="">#PI</a>
              <a href="">#Bitcoin</a> <a href="">#BTC</a>
              <a href="">#Defi</a> <a href="">#DEFI</a>
            </p>
            <div class="content_images">
              <img src="./assets/cdx.jpg" alt="" />
            </div>
          </div>
          <div class="end_section">
            <ul>
              <li>
                <a href="" class="comment"
                  ><img src="./assets/speech-bubble.png" alt="" /> 45</a
                >
              </li>
              <li>
                <a href="" class="retweet"
                  ><img src="./assets/retweet (1).png" alt="" /> 14</a
                >
              </li>
              <li>
                <a href="" class="like"
                  ><img src="./assets/love.png" alt="" /> 71</a
                >
              </li>
              <li>
                <a href="" class="poll"
                  ><img src="./assets/bar-graph.png" alt="" /> 2.9K</a
                >
              </li>
            </ul>
            <div class="last_icon">
              <a href=""
                ><img src="./assets/save-instagram.png" alt=""
              /></a>
              <a href=""><img src="./assets/upload.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      <!-- ------------------------------------------------------------------- -->

      <div class="posts_sect">
        <div class="posts_sect1">
          <div class="upper">
            <div class="upper_img">
              <img src="./posts/post2p.jpg" alt="" />
            </div>
            <div class="post_text">
              <div class="page_name">
                <h4>
                  <a href="">
                    Karma Shopping
                    <img src="./assets/verify.png" alt=""
                  /></a>
                </h4>
                <a href="" class="grey-text">@karma_shopping</a>
              </div>
              <p>
                This Amazon shopping hack is like Prime Day on steroids.
              </p>
            </div>
            <div class="more_icon">
              <a href=""><h3>...</h3></a>
            </div>
          </div>
          <div class="content_section">
            <div
              class="content_images"
              style="height: 500px; width: 510px"
            >
              <img src="./posts/post2.jpg" alt="" />
            </div>
          </div>
          <div class="end_section">
            <ul>
              <li>
                <a href="" class="comment"
                  ><img src="./assets/speech-bubble.png" alt="" /> 228</a
                >
              </li>
              <li>
                <a href="" class="retweet"
                  ><img src="./assets/retweet (1).png" alt="" /> 70</a
                >
              </li>
              <li>
                <a href="" class="like"
                  ><img src="./assets/love.png" alt="" /> 298</a
                >
              </li>
              <li>
                <a href="" class="poll"
                  ><img src="./assets/bar-graph.png" alt="" /> 614K</a
                >
              </li>
            </ul>
            <div class="last_icon">
              <a href=""
                ><img src="./assets/save-instagram.png" alt=""
              /></a>
              <a href=""><img src="./assets/upload.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      <!-- ------------------------------------------------------------------- -->

      <div class="posts_sect">
        <div class="posts_sect1">
          <div class="upper">
            <div class="upper_img">
              <img src="./assets/profile_pic3.jpg" alt="" />
            </div>
            <div class="post_text">
              <div class="page_name">
                <h4>
                  <a href="">
                    CoinDCX: India's Safest Crypto Platform
                    <img src="./assets/social-media.png" alt=""
                  /></a>
                </h4>
                <a href="" class="grey-text">@CoinDCX . 1h</a>
              </div>
              <p>
                Unlock the liquidity networks with
                <a href="" style="text-decoration: none; color: #1d9bf0"
                  >$CETUS</a
                >, the native token of <br />
                <a href="" style="text-decoration: none; color: #1d9bf0"
                  >@CetusProtocol</a
                >
                , now listed on CoinDCX🎊
              </p>
            </div>
            <div class="more_icon">
              <a href=""><h3>...</h3></a>
            </div>
          </div>
          <div class="content_section">
            <p>
              <br />

              <a href=""> #CoinDCXListing</a>
              <a href="">#CetusProtocol</a> <a href="">#CETUS</a> <br />
            </p>
            <div class="content_images">
              <img src="./posts/post4.jpg" alt="" />
            </div>
          </div>
          <div class="end_section">
            <ul>
              <li>
                <a href="" class="comment"
                  ><img src="./assets/speech-bubble.png" alt="" /> 45</a
                >
              </li>
              <li>
                <a href="" class="retweet"
                  ><img src="./assets/retweet (1).png" alt="" /> 14</a
                >
              </li>
              <li>
                <a href="" class="like"
                  ><img src="./assets/love.png" alt="" /> 71</a
                >
              </li>
              <li>
                <a href="" class="poll"
                  ><img src="./assets/bar-graph.png" alt="" /> 2.9K</a
                >
              </li>
            </ul>
            <div class="last_icon">
              <a href=""
                ><img src="./assets/save-instagram.png" alt=""
              /></a>
              <a href=""><img src="./assets/upload.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      <!-- ------------------------------------------------------------------- -->

      <div class="posts_sect">
        <div class="posts_sect1">
          <div class="upper">
            <div class="upper_img">
              <img src="./posts/post3p.jpg" alt="" />
            </div>
            <div class="post_text">
              <div class="page_name">
                <h4>
                  <a href="">
                    AirdropStar
                    <img src="./assets/verify.png" alt=""
                  /></a>
                </h4>
                <a href="" class="grey-text">@AirdropStario . 22h</a>
              </div>
              <p>💧 Baby Gecko Airdrop 💧</p>
            </div>
            <div class="more_icon">
              <a href=""><h3>...</h3></a>
            </div>
          </div>
          <div class="content_section">
            <p>
              🏆 Task: ➕ 10 Million BABYGECKO <br />

              👨‍👩‍👧 Referral: ➕ 15 Million BABYGECKO <br />

              <a href="" style="text-decoration: none; color: white">
                🔛 Airdrop Link & Information:
              </a>
              <a href="">https://t.me/AirdropStar/6721...</a><br />

              <a href="">#Cryptocurrency</a> <a href="">#Airdrop</a>
              <a href="">#Bitcoin</a> <a href="">#BABYGECKO</a>
              <a href="">#Airdropstario</a>
            </p>
            <div class="content_images">
              <img src="./posts/post3.jpg" alt="" />
            </div>
          </div>
          <div class="end_section">
            <ul>
              <li>
                <a href="" class="comment"
                  ><img src="./assets/speech-bubble.png" alt="" /> 46</a
                >
              </li>
              <li>
                <a href="" class="retweet"
                  ><img src="./assets/retweet (1).png" alt="" /> 201</a
                >
              </li>
              <li>
                <a href="" class="like"
                  ><img src="./assets/love.png" alt="" /> 225</a
                >
              </li>
              <li>
                <a href="" class="poll"
                  ><img src="./assets/bar-graph.png" alt="" /> 8.5K</a
                >
              </li>
            </ul>
            <div class="last_icon">
              <a href=""
                ><img src="./assets/save-instagram.png" alt=""
              /></a>
              <a href=""><img src="./assets/upload.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      <div class="posts_sect">
        <div class="posts_sect1">
          <div class="upper">
            <div class="upper_img">
              <img src="./assets/profile_pic3.jpg" alt="" />
            </div>
            <div class="post_text">
              <div class="page_name">
                <h4>
                  <a href="">
                    CoinDCX: India's Safest Crypto Platform
                    <img src="./assets/social-media.png" alt=""
                  /></a>
                </h4>
                <a href="" class="grey-text">@CoinDCX . Mar 8</a>
              </div>
              <p>Repost if you're also waiting...👀</p>
            </div>
            <div class="more_icon">
              <a href=""><h3>...</h3></a>
            </div>
          </div>
          <div class="content_section">
            <p>
              ┻┳| <br />
              ┳┻| _ <br />
              ┻┳| •.•) waiting for <a href="">$BTC</a> <br />
              ┳┻|⊂ﾉ to cross $70K again. <br />
              ┻┳|
            </p>
          </div>
          <div class="end_section">
            <ul>
              <li>
                <a href="" class="comment"
                  ><img src="./assets/speech-bubble.png" alt="" /> 14</a
                >
              </li>
              <li>
                <a href="" class="retweet"
                  ><img src="./assets/retweet (1).png" alt="" /> 17</a
                >
              </li>
              <li>
                <a href="" class="like"
                  ><img src="./assets/love.png" alt="" /> 18</a
                >
              </li>
              <li>
                <a href="" class="poll"
                  ><img src="./assets/bar-graph.png" alt="" /> 5.2K</a
                >
              </li>
            </ul>
            <div class="last_icon">
              <a href=""
                ><img src="./assets/save-instagram.png" alt=""
              /></a>
              <a href=""><img src="./assets/upload.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      `
    }
}