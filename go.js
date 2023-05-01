var go = `
            
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>陈同学的个人网页</title>
        <style>
            body {
                background:url('其他资源/index_background-video.gif') no-repeat center top;
                background-size:cover;
                background-attachment:fixed;
            }
            audio {
                display: none;
            }
            .red {
                color: red;
                display: inline;
            }
    
            .orange {
                color: orange;
                display: inline;
            }
    
            .yellow {
                color: yellow;
                display: inline;
            }
    
            .green {
                color: green;
                display: inline;
            }
    
            .aqua {
                color: aqua;
                display: inline;
            }
    
            .blue {
                color: blue;
                display: inline;
            }
    
            .purple {
                color: purple;
                display: inline;
            }
    
            .pink {
                color: pink;
                display: inline;
            }
        </style>
    
        
    </head>
    <body>
    
    
    
        <table align="center" border="1" cellpadding="3" cellspacing="5" width="500">
            <tr><th>
                <h1 class="red">陈</h1><h1 class="orange">同</h1><h1 class="yellow">学</h1><h1 class="green">的</h1>
                <h1 class="aqua">个</h1><h1 class="blue">人</h1><h1 class="purple">网</h1><h1 class="pink">页</h1><br/>
            </th></tr>
        </table>
        
    
    
        <table align="center" border="1" cellpadding="3" cellspacing="5" width="500">
            <thead>
                <tr>
                    <th colspan="2"><h2 class="red">在线游戏</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center"><a href="在线游戏/踩雷游戏0.0.2.html"><h3 class="red">踩雷游戏0.0.2</h3></a></td>
                    <td align="center"><a href="在线游戏/踩雷游戏公测版.html"><h3 class="red">踩雷游戏公测版</h3></a></td>
                </tr>
            </tbody>
        </table>
    
        
    
        <table align="center" border="1" cellpadding="3" cellspacing="5" width="500">
            <thead>
                <tr>
                    <th><h2 class="orange">作品下载站点</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center"><a href="3DoneAI/3DoneAI站点.html"><h3 class="orange">3DoneAI站点</h3></a></td>
                </tr>
            </tbody>
        </table>
    
    
    
        <table align="center" border="1" cellpadding="3" cellspacing="5" width="500">
            <thead>
                <tr>
                    <th><h2 class="yellow">内链站点</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center"><h3 class="yellow">未完成</h3></td>
                </tr>
            </tbody>
        </table>
    
    
    
        <table align="center" border="1" cellpadding="3" cellspacing="5" width="500">
            <thead>
                <tr>
                    <th colspan="2"><h2 class="green">网页相关</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center"><a href="https://github.com/YourClassmateChen/YourClassmateChen.github.io">
                        <h3 class="green">github项目</h3></a></td>
                    <td align="center"><a href="https://github.com/YourClassmateChen/YourClassmateChen.github.io/blob/main/README.md">
                        <h3 class="green">github公告</h3></a></td>
                </tr>
            </tbody>
        </table>
    
    
    
        <table align="center" border="1" cellpadding="3" cellspacing="5" width="500">
            <thead>
                <tr>
                    <th><h2 class="aqua">联系作者</h2></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center"><a href="https://space.bilibili.com/1996208073"><h3 class="aqua">bilibili主页</h3></a></td>
                </tr>
            </tbody>
        </table>
        <audio id="music" src="其他资源/index_background-music.mp3" loop="loop" contindexrols="controls" autoplay hidden></audio>
    </body>
    </html>`
        function main() {
            document.write(go)
        }