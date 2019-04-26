// pages/demo/demo.js
Page({
  data: {
    html: `<style>
  body {
    margin-left:3%;
    margin-right:3%;
    margin-top:30rpx;
    margin-bottom:30rpx;
  }
</style>
<body>
  <section data-id="93972" style="border: 0px none;">
    <section style="padding: 10px;">
      <section style="box-shadow:0px 0px 5px #e5e5e5 ;height:65px;">
        <section style="display: flex;justify-content: flex-start;align-items: center;">
          <section style="width:60px;height: 65px;">
            <section data-brushtype="text" style="background: #6f8691;border-top-left-radius:5px;border-bottom-left-radius: 5px;border-top-right-radius: 100%;border-bottom-right-radius: 100%;color:#fff;font-weight:bold; font-size:18px;letter-spacing:1.5px;width:60px;height: 65px;font-weight: bold;font-size: 18px; line-height:63px;text-align: center;">
              <span class="autonum" data-original-title="" title="">1</span>
            </section>
          </section>
          <section style="padding:0px 0.4em 0px 0.5em;font-size: 16px;letter-spacing: 1.5px;color: #71868f;">
            <p>
              <strong>表格渲染</strong>
            </p>
          </section>
        </section>
      </section>
    </section>
  </section>
  <p style="border: 0px none;">
    <br />
    <table style="border:none;border-radius:8px;width:100%;" data-width="100%">
      <tbody>
        <tr class="firstRow" style="border-bottom:1px solid #ccc;background-color:#f5f5f4; background-image: -webkit-linear-gradient(top,#f5f5f4,rgb(245,245,244));">
          <th style="border-radius:6px 0 0 0;padding: 10px; text-align: left;text-shadow:0 1px 0 rgba(255,255,255,0.5);">
            <span style="font-size: 14px;" data-brushtype="text">#</span>
          </th>
          <th style="padding: 10px; text-align: left;text-shadow:0 1px 0 rgba(255,255,255,0.5);">
            <span style="font-size: 14px;" data-brushtype="text">Top 8 Movies</span>
          </th>
          <th style="border-radius:0 6px 0 0;padding: 10px; text-align: left;text-shadow:0 1px 0 rgba(255,255,255,0.5);">
            <span style="font-size: 14px;" data-brushtype="text">Year</span>
          </th>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">1</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">The Shawshank Redemption</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">1994</span>
          </td>
        </tr>
        <tr style="background-color:#f5f5f4;box-shadow:0 1px 0 rgba(255,255,255,0.8) inset;border-bottom:1px solid #f2f2f2">
          <td style="padding: 10px; text-align: left;">
            <span style="font-size: 14px;">2</span>
          </td>
          <td style="padding: 10px; text-align: left;">
            <span style="font-size: 14px;">The Godfather</span>
          </td>
          <td style="padding: 10px; text-align: left;">
            <span style="font-size: 14px;">1972</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; text-align: left; word-break: break-all;">
            <span style="font-size: 14px;">3</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">The Godfather: Part II</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">1974</span>
          </td>
        </tr>
        <tr style="background-color:#f5f5f4;box-shadow:0 1px 0 rgba(255,255,255,0.8) inset;border-bottom:1px solid #f2f2f2">
          <td style="padding: 10px; text-align: left;">
            <span style="font-size: 14px;">4</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">The Good, the Bad and the Ugly</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">1966</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; text-align: left; word-break: break-all;">
            <span style="font-size: 14px;">5</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">Pulp Fiction</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">1994</span>
          </td>
        </tr>
        <tr style="background-color:#f5f5f4;box-shadow:0 1px 0 rgba(255,255,255,0.8) inset;border-bottom:1px solid #f2f2f2">
          <td style="padding:10px; text-align:left;">
            <span style="font-size: 14px;">6</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">12 Angry Men</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">1957</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px; text-align: left; word-break: break-all;">
            <span style="font-size: 14px;">7</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">Schindler&#39;s List</span>
          </td>
          <td style="padding: 10px; text-align: left; word-break: break-all;">
            <span style="font-size: 14px;">1993</span>
          </td>
        </tr>
        <tr style="background-color:#f5f5f4;box-shadow:0 1px 0 rgba(255,255,255,0.8) inset;">
          <td style="padding: 10px; text-align: left;border-radius:0 0 0 6px;">
            <span style="font-size: 14px;">8</span>
          </td>
          <td style="padding:10px;text-align:left;">
            <span style="font-size: 14px;">One Flew Over the Cuckoo&#39;s Nest</span>
          </td>
          <td style="padding: 10px; text-align: left;border-radius:0 0 6px 0;">
            <span style="font-size: 14px;">1975</span>
          </td>
        </tr>
      </tbody>
    </table>
  </p>
  <p>
    <br />
  </p>
  <p>
    <br />
  </p>
  <section data-id="93972" style="border: 0px none;">
    <section style="padding: 10px;">
      <section style="box-shadow:0px 0px 5px #e5e5e5 ;height:65px;">
        <section style="display: flex;justify-content: flex-start;align-items: center;">
          <section style="width:60px;height: 65px;">
            <section data-brushtype="text" style="background: #6f8691;border-top-left-radius:5px;border-bottom-left-radius: 5px;border-top-right-radius: 100%;border-bottom-right-radius: 100%;color:#fff;font-weight:bold; font-size:18px;letter-spacing:1.5px;width:60px;height: 65px;font-weight: bold;font-size: 18px; line-height:63px;text-align: center;">
              <span class="autonum" data-original-title="" title="" data-num="2">2</span>
            </section>
          </section>
          <section style="padding:0px 0.4em 0px 0.5em;font-size: 16px;letter-spacing: 1.5px;color: #71868f;">
            <p>
              <strong>文字渲染</strong>
            </p>
          </section>
        </section>
      </section>
    </section>
  </section>
  <section data-id="94534" style="border: 0px none;">
    <section style="width:95%;margin:20px auto;" data-width="95%">
      <section style="box-shadow: 0px 2px 10px #a9cfd5;">
        <section style="display: flex;justify-content: space-between;align-items: center;padding: 10px 5px;">
          <section style="display: inline-block;width: 25px;">
            <section style="width:0.8em;height:0.8em;background: #85b5bc;border-radius:100% ;opacity: 0.6;margin: 0px auto -8px auto;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);"></section>
            <section style="width:5px;height:1.4em;background:#a9cfd5;border-radius:6px ;margin: 0px auto;"></section>
          </section>
          <section style="display: inline-block;width: 25px;">
            <section style="width:0.8em;height:0.8em;background: #85b5bc;border-radius:100% ;opacity: 0.6;margin: 0px auto -8px auto;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);"></section>
            <section style="width:5px;height:1.4em;background:#a9cfd5;border-radius:6px ;margin: 0px auto;"></section>
          </section>
        </section>
        <section style="padding:0.2em 1em;">
          <section data-autoskip="1" style="font-size: 14px;text-align: justify;letter-spacing: 1.5px;line-height: 1.75em;color:#4d909a;padding:0em 1em;">
            <p>
              <em>标题</em></hr>
              <p>上下标展示：水的化学式是H<sub>2</sub>O，2<sup>3</sup>=8</p>
              <p>插入和删除文本：<del>我想出去玩</del>，不你不想，<ins>你想学习</ins></p>
              <p>引用：<q>这是一句引用的文字</q>，这是<code>code</code>标签</p>
              <p><strong>粗体</strong>与<i>斜体</i></p>
            </p>
          </section>
        </section>
        <section style="display: flex;justify-content: space-between;align-items: center;padding: 10px 5px;">
          <section style="display: inline-block;width: 25px;">
            <section style="width:5px;height:1.4em;background:#a9cfd5;border-radius:6px ;margin: 0px auto;"></section>
            <section style="width:0.8em;height:0.8em;background: #85b5bc;border-radius:100% ;opacity: 0.6;margin: -8px auto 0px auto;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);"></section>
          </section>
          <section style="display: inline-block;width: 25px;">
            <section style="width:5px;height:1.4em;background:#a9cfd5;border-radius:6px ;margin: 0px auto;"></section>
            <section style="width:0.8em;height:0.8em;background: #85b5bc;border-radius:100% ;opacity: 0.6;margin:-8px  auto 0px auto;transform: rotate(0deg);-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-o-transform: rotate(0deg);"></section>
          </section>
        </section>
      </section>
    </section>
  </section>
  <blockquote>段落引用：一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。</blockquote>
  <br />
  <pre>function test{\n  console.log("Hello World!");\n}</pre>
  <div style="color:gray;text-align:center;font-size:12px;margin-top:-3px;">pre标签</div>
  <br />
  <h1>h1标题</h1>
  <h2>h2标题</h2>
  <h3>h3标题</h3>
  <h4>h4标题</h4>
  <h5>h5标题</h5>
  <h6>h6标题</h6>
  <br />
  <section data-id="93972" style="border: 0px none;">
    <section style="padding: 10px;">
      <section style="box-shadow:0px 0px 5px #e5e5e5 ;height:65px;">
        <section style="display: flex;justify-content: flex-start;align-items: center;">
          <section style="width:60px;height: 65px;">
            <section data-brushtype="text" style="background: #6f8691;border-top-left-radius:5px;border-bottom-left-radius: 5px;border-top-right-radius: 100%;border-bottom-right-radius: 100%;color:#fff;font-weight:bold; font-size:18px;letter-spacing:1.5px;width:60px;height: 65px;font-weight: bold;font-size: 18px; line-height:63px;text-align: center;">
              <span class="autonum" data-original-title="" title="" data-num="3">3</span>
            </section>
          </section>
          <section style="padding:0px 0.4em 0px 0.5em;font-size: 16px;letter-spacing: 1.5px;color: #71868f;">
            <p>
              <strong>多媒体渲染</strong>
            </p>
          </section>
        </section>
      </section>
    </section>
  </section>
  <section data-id="92944" style="border: 0px none;">
    <section style="border: 0px none;">
      <section style="width: 100%; padding: 10px 0px; box-sizing: border-box;" data-width="100%">
        <section style="width: 100%;margin-bottom:5px;" data-width="100%">
          <span data-role="width" style="display:inline-block;width:100%">
            <img style="display: block; margin: 0px; width: 100%;" src="http://bmob-cdn-17111.b0.upaiyun.com/2019/04/13/b5f2a4b340b855488029635bb8649309.jpg" data-width="100%" data-op="change" data-ratio="0.46881720430107526" width="100%" height="" border="0" mapurl="" title="" alt="" />
          </span>
        </section>
        <section style="margin-top:5px; display: flex;justify-content: center;-webkit-justify-content: center;display: -webkit-flex;">
          <section style="width: 100%;margin-right: 5px;" data-width="100%">
            <span data-role="width" style="display:inline-block;width:100%">
              <img style="display: block; margin: 0px; width: 100%;" src="http://bmob-cdn-17111.b0.upaiyun.com/2019/04/13/e10edebd40730ad880c508ecd8212a41.jpg" data-width="100%" data-op="change" data-ratio="0.6826086956521739" width="100%" height="" border="0" mapurl="" title="" alt="" />
            </span>
          </section>
          <section style="width: 100%;" data-width="100%">
            <span data-role="width" style="display:inline-block;width:100%">
              <img style="display: block; margin: 0px; width: 100%;" src="http://bmob-cdn-17111.b0.upaiyun.com/2019/04/13/e10edebd40730ad880c508ecd8212a41.jpg" data-width="100%" data-op="change" data-ratio="0.6869565217391305" width="100%" height="" border="0" mapurl="" title="" alt="" />
            </span>
          </section>
        </section>
      </section>
    </section>
  </section>
  <section data-id="94676" style="border: 0px none;">
    <section style="width: 60%;margin: 0px auto;">
      <img style="width: 100%;display: block;" ignore src="http://bmob-cdn-17111.b0.upaiyun.com/2019/04/14/190f5994407ecad1805d8a3478e64821.gif" data-width="100%" />
    </section>
  </section>
  <p style="text-align: center;">
    <span style="font-size: 12px; color: #A5A5A5;">装饰图片，设置ignore属性后将不可预览</span>
    <br />
  </p>
  <br />
  <div style="text-align:center;">
    <audio src="http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46" poster= "http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000" name="此时此刻" author="许巍" controls></audio>
    <br />
    <video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" controls></video>
  </div>
  <br />
  <section data-id="93972" style="border: 0px none;">
    <section style="padding: 10px;">
      <section style="box-shadow:0px 0px 5px #e5e5e5 ;height:65px;">
        <section style="display: flex;justify-content: flex-start;align-items: center;">
          <section style="width:60px;height: 65px;">
            <section data-brushtype="text" style="background: #6f8691;border-top-left-radius:5px;border-bottom-left-radius: 5px;border-top-right-radius: 100%;border-bottom-right-radius: 100%;color:#fff;font-weight:bold; font-size:18px;letter-spacing:1.5px;width:60px;height: 65px;font-weight: bold;font-size: 18px; line-height:63px;text-align: center;">
              <span class="autonum" data-original-title="" title="" data-num="4">4</span>
            </section>
          </section>
          <section style="padding:0px 0.4em 0px 0.5em;font-size: 16px;letter-spacing: 1.5px;color: #71868f;">
            <p>
              <strong>链接渲染</strong>
            </p>
          </section>
        </section>
      </section>
    </section>
  </section>
  <section data-role="paragraph" style="border: 0px none;">
    <div style="text-align: center;">
      <a href="/pages/introduction/introduction">
        <img src="http://bmob-cdn-17111.b0.upaiyun.com/2019/04/13/b5f2a4b340b855488029635bb8649309.jpg"/>
      </a>
      <p style="font-size:12px;color:gray">图片链接，点击可以跳转</p>
      <br />
      <a href="https://github.com/jin-yufeng/Parser">https://github.com/jin-yufeng/Parser</a>
      <p style="font-size:12px;color:gray">外部链接，长按可以复制</p>
      <br />
      <a href="https://6874-html-foe72-1259071903.tcb.qcloud.la/%E9%99%84%E4%BB%B6%E7%A4%BA%E4%BE%8B.docx?sign=558e8df1107441b038ecbb5aaafefa11&t=1556120797">附件示例.docx</a>
      <p style="font-size:12px;color:gray">附件链接，点击将下载和打开</p>
    </div>
    <br />
  </section>
  <section data-id="93972" style="border: 0px none;">
    <section style="padding: 10px;">
      <section style="box-shadow:0px 0px 5px #e5e5e5 ;height:65px;">
        <section style="display: flex;justify-content: flex-start;align-items: center;">
          <section style="width:60px;height: 65px;">
            <section data-brushtype="text" style="background: #6f8691;border-top-left-radius:5px;border-bottom-left-radius: 5px;border-top-right-radius: 100%;border-bottom-right-radius: 100%;color:#fff;font-weight:bold; font-size:18px;letter-spacing:1.5px;width:60px;height: 65px;font-weight: bold;font-size: 18px; line-height:63px;text-align: center;">
              <span class="autonum" data-original-title="" title="" data-num="5">5</span>
            </section>
          </section>
          <section style="padding:0px 0.4em 0px 0.5em;font-size: 16px;letter-spacing: 1.5px;color: #71868f;">
            <p>
              <strong>列表渲染</strong>
            </p>
          </section>
        </section>
      </section>
    </section>
  </section>
  <section>
    <section style="color:#262626">
        <p style="margin-left:5%;">有序列表
          <ol>
            <li>
              <p>多级列表</p>
              <ol>
                <li>子标题1</li>
                <li>子标题2</li>
                <li>子标题3</li>
              </ol>
            </li>
            <li>段落
              <p>一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。</p>
            </li>
          </ol>
        </p>
        <br />
        <p style="margin-left:5%;">无序列表
          <ul>
            <li>标题1
              <ul>
                <li>子标题1</li>
                <li>子标题2</li>
                <li>子标题3</li>
              </ul>
            </li>
            <li>标题2</li>
            <li>标题3</li>
          </ul>
        </p>
    </section>
  </section>
  <p>
    <br />
  </p>
  <section data-id="93972" style="border: 0px none;">
    <section style="padding: 10px;">
      <section style="box-shadow:0px 0px 5px #e5e5e5 ;height:65px;">
        <section style="display: flex;justify-content: flex-start;align-items: center;">
          <section style="width:60px;height: 65px;">
            <section data-brushtype="text" style="background: #6f8691;border-top-left-radius:5px;border-bottom-left-radius: 5px;border-top-right-radius: 100%;border-bottom-right-radius: 100%;color:#fff;font-weight:bold; font-size:18px;letter-spacing:1.5px;width:60px;height: 65px;font-weight: bold;font-size: 18px; line-height:63px;text-align: center;">
              <span class="autonum" data-original-title="" title="" data-num="6">6</span>
            </section>
          </section>
          <section style="padding:0px 0.4em 0px 0.5em;font-size: 16px;letter-spacing: 1.5px;color: #71868f;">
            <p>
              <strong>小表情渲染</strong>
            </p>
          </section>
        </section>
      </section>
    </section>
  </section>
  <table style="text-align:center;width:100%;">
    <tr>
      <td>😠</td><td>😩</td><td>😲</td>
      <td>😞</td><td>😵</td><td>😰</td>
      <td>😒</td><td>😍</td><td>😤</td><td>😜</td>
    </tr>
    <tr>
      <td>😝</td><td>😋</td><td>😘</td>
      <td>😚</td><td>😷</td><td>😳</td>
      <td>😃</td><td>😅</td><td>😆</td><td>😁</td>
    </tr>
    <tr>
      <td>😂</td><td>😊</td><td>😄</td>
      <td>😢</td><td>😭</td><td>😨</td>
      <td>😣</td><td>😌</td><td>😖</td><td>😱</td>
    </tr>
    <tr>
      <td>😪</td><td>😏</td><td>😓</td>
      <td>😥</td><td>😫</td><td>😉</td>
      <td>🙅</td><td>🙆</td><td>👫</td><td>👪</td>
    </tr>
  </table>
</body>`
  },
  downloadfile(e) {
    if (e.detail.indexOf('docx') != -1) {
      wx.showLoading({
        title: '附件下载中',
      })
      wx.downloadFile({
        url: e.detail,
        success(res) {
          wx.hideLoading();
          const filePath = res.tempFilePath
          wx.openDocument({
            filePath,
            success(res) {
              console.log('打开文档成功')
            }
          })
        }
      })
    }
  }
})