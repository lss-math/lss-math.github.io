function lmm_initializeLanguage()
{
    const params = new URL(window.location.href);
    const currentLang = params.searchParams.get("lang");
    
    if (!currentLang)
    {
        lmm_setLanguage("en");
    }
    
    else
    {
        lmm_translate();
    }
}

function lmm_setLanguage(destination)
{
    let currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("lang", destination);
    window.history.pushState({}, '', currentUrl.href);
    lmm_translate();
}

function lmm_translate()
{
    const params = new URL(window.location);
    const destination = params.searchParams.get("lang");
    const loc = window.location.pathname.split('/').pop();
    
    if (destination === "zh")
    {
        document.getElementById("tr_nav_main").innerHTML = "主頁";
        document.getElementById("tr_nav_who").innerHTML = "站長是誰？";
        document.getElementById("tr_nav_serious").innerHTML = "樽酒論文";
        // document.getElementById("tr_nav_formulae").innerHTML = "到底公式";
        // document.getElementById("tr_nav_symbols").innerHTML = "數學符號";
        // document.getElementById("tr_nav_number").innerHTML = "整數數論";
        // document.getElementById("tr_nav_algebra").innerHTML = "眾代數學";
        // document.getElementById("tr_nav_logic").innerHTML = "邏輯、集合";
        // document.getElementById("tr_nav_analysis").innerHTML = "微積分析";
        // document.getElementById("tr_nav_other").innerHTML = "其他方面";
        document.getElementById("tr_nav_lang").innerHTML = "返歸英語";
        if (loc.includes("index.html"))
        {
            document.getElementById("tr_main_title").innerHTML = "算學隨想<br><span style='font-size: 2rem;'>（原作「Lusus Menstruus Mathematicus」）</span>";
            document.getElementById("tr_subtitle").innerHTML = "些許個人隨筆耳，不足掛齒";
            document.getElementById("tr_author").innerHTML = "筆者兼站長Jason Cai呈堂筆獻，冀不吝斧正";
            document.getElementById("tr_humor").innerHTML = "諸位亦可呼此站「LMM」。";
            document.getElementById("tr_claim").innerHTML = "（不光僅僅數學！）";
            document.getElementById("tr_latest").innerHTML = "最新隨筆";
            document.getElementById("tr_article_lang").innerHTML = "懇請諸位原恕筆者嘗僅用英語寫作。";
            // document.getElementById("tr_archaic").innerHTML = "夫眾述式、爾等當覽以瞭然！";
        }
        // document.getElementById("tr_dogma").innerHTML = "吾等數學教條";
        // document.getElementById("tr_those_symbols").innerHTML = "那些\\( \\LaTeX \\)符號";
        // document.getElementById("tr_those_properties").innerHTML = "那些整數的二三事";
        // document.getElementById("tr_those_algebra").innerHTML = "那些抽象（和不抽象）的代數";
        // document.getElementById("tr_those_building").innerHTML = "那些數學的根源";
        // document.getElementById("tr_those_continue").innerHTML = "那些連續的搗蛋鬼";
        document.getElementById("tr_foot_articles").innerHTML = "文章列表";
        
        if (loc.includes("about.html"))
        {
            document.getElementById("tr_1").innerHTML = "大家好！我是一名數學愛好者Jason Cai。假如各位想向別處望望，也許大家可以跳過這網頁簡介；但這簡介確實是百分之百真實的。";
            document.getElementById("tr_2").innerHTML = "我是誰、這網站又為何物？";
            document.getElementById("tr_3").innerHTML = "先把醜話說前頭：我<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">並不</span>是一位數學專業生，遑論教授或者數學相關行業的從業員。實際上，我甚至連一個數學系的文憑都沒撈著（見下文）。因此，文章及網頁內容或有錯漏，在所難免，敬請諒解。";
            document.getElementById("tr_4").innerHTML = "現在讓大家轉移視角：假設我們想去做一次街頭訪問，而訪問對象包括小朋友、青少年甚至成年人。我們的問題便是：「對您，『數學』到底是什麼東西？它有何意義？」";
            document.getElementById("tr_5").innerHTML = "誠然，筆者時間寶貴，諶無時間走下去進行採訪了。但從筆者的經驗和觀察來看，小朋友們的答案類似於：";
            document.getElementById("tr_6").innerHTML = "「數——學嗎？<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">呀——叔叔</span>，告訴你，我呀，剛剛從老師那兒學來的呢！你說的是，例如：一加二等於三嗎？那我倒還知道更多：三減一等於二呢！」";
            document.getElementById("tr_7").innerHTML = "採訪結束後，我們互相發現對方的酒窩是逼出來的，僅是對天真無邪的尊重，而非來自心底裡深處的感嘆。遲些，旁有一青年徐徐路過，或有人上前截住，問了同樣的問題。我腦裡的印象預判了以下回答：";
            document.getElementById("tr_8").innerHTML = "「唉，別提了。數學、數學，數你學個頭呀，測驗又砸了。你再提，方程可把我腦子給撐壞啦。」";
            document.getElementById("tr_9").innerHTML = "大家同他安慰道別後，便又迎來一位新的受訪者，是一位大人。不用說，回答無非大概是：";
            document.getElementById("tr_10").innerHTML = "「哎，數學？呃，這我得想想，真的，畢業後<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">十幾二十年</span>都沒碰過那些書了。數學，依我看來，應該不外乎就是那些微積分、代數、求值那些東東吧？」";
            document.getElementById("tr_11").innerHTML = "現在大家齊來反思。注意到這些對白裡角色所描繪的「數學」有一個共通點：重複或大量機械的<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">計算</span>——譬如說，得答案的主流途徑便是粗暴地重複代入、求值、檢驗的動作；或者說得客觀一點：看清題目，然後從大家學過的有限「工具」裡找出最適合的、已操練至熟的方法（一般不戴混著來的那種），通常便已足夠。";
            document.getElementById("tr_12").innerHTML = "先不著急蓋棺定論。退一步講，君不見現代教育體系仍完好無損，甚至訓練有素的大夥兒還能適應這日新月異的世界？這證明了教育體系並不是一無是處；相反，它利用了重複性計算非常簡單、容易掌握和傳授的特點，令原先用在其他領域（如眾科學科目）的方法能為推廣至數學教育。";
            document.getElementById("tr_13").innerHTML = "其次，這以計算為導向的理念適用於眾非數學領域的科目、層次足矣。咱從小接觸的數學知識點，如四則運算、百分比率、單位長度、時間金錢等，安不足以應付絕大多數日常事物哉？結賬查賬、精算會計、廚藝眾藝、一日之計……又，假如咱懂點兒次方冪級、基礎代數、幾何三角、眾妙武藝，則大可不被迷惑所誆，甚或能聽懂科普節目呢。假如再來點兒三角恆等、微分積分、常數轉換、融會貫通，則大可能與科學家們切磋了。但縱觀這條道路，其實全是從小學到高中咱每一個人都翻滾帶爬過來的過程——人人皆經歷過。用以上的理論，其實這些大抵都是以插值為基，用式為上的——特點都一樣的。用英語的話作精闢點評，這是一套highly versatile的plug-and-chug maths。利用一列列公式時，大可不必有不懂證明的心理負擔。";
            document.getElementById("tr_14").innerHTML = "有個現實一點的考量：這樣學，適合現代標準化的測驗不過了。老實說，與其搞得像數學專業一樣無時無刻都在思考證明的過程（況且還不一定所有人都想讀），出題者們於是如是想：不如把「有意思」這層捨棄，搞點兒現實一點兒、符合大眾的模式罷，既滿足了需求，又便於批改（問位大學教授便知對比了）。";
            document.getElementById("tr_15").innerHTML = "這套系統便由古至今一直運行著，既精又妙，在大眾的眼光所看便已覺無敵了。的確，這柄雙刃刀的良刃太鋒利了，瑕不掩瑜，它的惡刃便顯得既無力又無輕重。反之，它能使一個像筆者般的數學愛好者感到「可憐」。我也是在上述這種環境下披著早已設計好的大衣，舉著最普遍的棋子，走在明明最寬廣無礙的康莊大道上卻連滾帶爬，直到高中（或者，直到執筆時，筆者仍是名高中生罷了）。不平凡的某一天，我的大腦仿佛爬過了無數的訊息，在字裡行間感受到<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">超越之上</span>的高等數學帶來的震撼：像看破了一切的導師一樣，只論嚴謹證明的教科書而不看機械性的重複操作、像是掙脫了名叫日常思維的桎梏，叫「代數」而實是積極尋求各結構中的箇中奧秘、……像是一陣雷電打到了臉上，啪地打開了一道大門……";
            document.getElementById("tr_16").innerHTML = "也許是出於興趣，我開始如飢如渴地翻閱卷卷圖書、信手拈來般親自寫下一些微不足道的證明、順從地跟隨大師的腳步求實、甚至有幾次實體地參加高等數學的論壇、工作坊。然而，最近，我感覺我也許能為大家做得更多、更大、更好。";
            document.getElementById("tr_17").innerHTML = "藉此機會，讓我對互聯網上一眾同我懷有同樣志向的數學類科普內容創作者（其實應該稱呼為「同行」）表達由衷感謝；不同的點在於他們的汗水辛勞往往能產出比我的作品更為多姿多采、五顏六色。我在這裡貢獻自己那不足掛齒的筆耕的理由寥寥：只因卻堅信這類內容多多益善、愈沛愈佳、永不過時、提高關注。";
            document.getElementById("tr_18").innerHTML = "在這帖可能既狂妄又短小的自傳體陣站碑文裡，筆者完全沒有強迫各位接受的意思。甚至大家斟詞酌句的時間也大可省了罷。這篇唯一的要點便是：數學這座塔，它的高度可比我們自詡完成高中學制後所被老師催促的連滾帶爬的高度高多了。";
            document.getElementById("tr_19").innerHTML = "寫得蠻好，卻與本站何幹？";
            document.getElementById("tr_20").innerHTML = "在此我得承認我這個網站並不追求絕對的嚴謹和僅供學術用途；這網站反倒是一處我平時小文章的聚集地。群群之中，出現最多的當是我的興趣，包括：";
            document.getElementById("tr_20_1").innerHTML = "代數（線代、抽象等）、";
            document.getElementById("tr_20_2").innerHTML = "集合論、"
            document.getElementById("tr_20_3").innerHTML = "一些分析、";
            document.getElementById("tr_20_4").innerHTML = "邏輯、等等";
            document.getElementById("tr_21").innerHTML = "本站不為題為「摘記」、「筆記」等，乃因個人喜好等原因：仿有陳腔濫調之味，亦氾太個人之濫。";
            document.getElementById("tr_22").innerHTML = "反之，我儘量會把一些細微的摘記公之於眾，便於互相交流學習，共同增長。";
            document.getElementById("tr_23").innerHTML = "這網站有一獨特之處便是嚢括了眾多公式，以便大家速查。當然，為了能有「知其然」、又「知其所以然」的功效，我也會把相應的證明（有些是筆者原創的）放出來給大家閱覽。";
            document.getElementById("tr_24").innerHTML = "本站些微寒磣，大家欣賞並有所得著就是筆者本人最大的支持和鼓勵！";
            document.getElementById("tr_25").innerHTML = "書評、個人、心路歷程";
            document.getElementById("tr_26").innerHTML = "以下為筆者這麼些日子來讀過的數學相關的大師作品，以供大家參考之用。筆者茲是聲明，與下列作者及出版社無任何形式的關係和利害，僅是用以對一條可能的自學道路的探索耳。亦即是說，下列著作並從來不是任何硬性規定；僅是對筆者個人的歷程一段深刻的反映。";
            document.getElementById("tr_27").innerHTML = "同時，下列非時間排序。";
            document.getElementById("tr_28").innerHTML = "集合論";
            document.getElementById("tr_29").innerHTML = "這本由俄國人寫的書算是經典之作：";
            document.getElementById("tr_30").innerHTML = "後來，這本也不錯；不過作者把很多抽象的概念濃縮成一節兩頁兒了：";
            document.getElementById("tr_31").innerHTML = "數論";
            document.getElementById("tr_32").innerHTML = "這本算是目前來講由淺入深的典範吧：";
            document.getElementById("tr_33").innerHTML = "不過以下這本也可賞，推其化繁為簡之乎有奇效：";
            document.getElementById("tr_34").innerHTML = "高等代數";
            document.getElementById("tr_35").innerHTML = "平素臭名昭著的<a href='https://link.springer.com/series/136'>Springer GTM系列</a>這次出奇地做了回人；雖然古老，仍頗貼切，淺顯易懂：";
            document.getElementById("tr_36").innerHTML = "有些許日語功底（筆者親測大約JLPT的N2上下）的夥伴們可以嘗試一下佐武老師寫的《線形代數學》；值得一推：";
            document.getElementById("tr_37").innerHTML = "分析";
            document.getElementById("tr_38").innerHTML = "需嚴謹的實分析學的話，以下這本（因其首章對於「數學成熟度、Mathematical Maturity」的訓練）也可以當作一本入門教材吧：";
            document.getElementById("tr_39").innerHTML = "不過，若是給僅有中學代數基礎的學生當成興趣愛好讀的微積分讀本，咱國人剛好有一本：";
            document.getElementById("tr_40").innerHTML = "茫茫學海、數海無邊，當筆者讀完一本非常厲害的作品時，將順時增添改補以上內容。";
        }
        
        if (loc.includes("articles.html"))
        {
            document.getElementById("tr_a_title").innerHTML = "Jason Cai個人隨筆集";
            document.getElementById("tr_a_desc").innerHTML = "如<a href='about.html'>簡介</a>所言，此頁涵括了站長所撰之各樣隨筆，而主題往往源於其對數學眾奧妙的些許探究和發現。如同文章正文，主要內容仍限僅有英語。";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_download"))
        {
            k.innerHTML = "點我下載";
        }

        for (let k of document.getElementsByClassName("tr_bulk_date"))
        {
            let rst = "";
            
            switch (k.dataset.date.split(' ')[0])
            {
            case "February":
                rst = "二月";
                break;
            case "March":
                rst = "三月";
                break;
            case "April":
                rst = "四月";
                break;
            case "May":
                rst = "五月";
                break;
            case "June":
                rst = "六月";
                break;
            case "July":
                rst = "七月";
                break;
            case "August":
                rst = "八月";
                break;
            case "September":
                rst = "九月";
                break;
            case "October":
                rst = "十月";
                break;
            case "November":
                rst = "十一月";
                break;
            case "December":
                rst = "十二月";
                break;
            default:
                rst = "一月";
            }
            
            let year = k.dataset.date.split(' ')[1].replaceAll('0', '〇').replaceAll('1', '一').replaceAll('2', '二')
                .replaceAll('3', '三').replaceAll('4', '四').replaceAll('5', '五').replaceAll('6', '六').replaceAll('7', '七')
                .replaceAll('8', '八').replaceAll('9', '九');
            
            k.innerHTML = year + '年' + rst;
        }
        
        if (loc.includes("index.html"))
            document.getElementById("tr_article_lang").style.display = "inline";
        document.documentElement.lang = "zh-Hant";
    }
    
    else if (destination === "cn")
    {
        document.getElementById("tr_nav_main").innerHTML = "主页";
        document.getElementById("tr_nav_who").innerHTML = "站长是谁？";
        document.getElementById("tr_nav_serious").innerHTML = "樽酒论文";
        // document.getElementById("tr_nav_formulae").innerHTML = "到底公式";
        // document.getElementById("tr_nav_symbols").innerHTML = "数学符号";
        // document.getElementById("tr_nav_number").innerHTML = "整数数论";
        // document.getElementById("tr_nav_algebra").innerHTML = "众代数学";
        // document.getElementById("tr_nav_logic").innerHTML = "逻辑与集合";
        // document.getElementById("tr_nav_analysis").innerHTML = "微积分析";
        // document.getElementById("tr_nav_other").innerHTML = "其他众面";
        document.getElementById("tr_nav_lang").innerHTML = "回归英语版";
        if (loc.includes("index.html"))
        {
            document.getElementById("tr_main_title").innerHTML = "算学随想<br><span style='font-size: 2rem;'>（原为‘Lusus Menstruus Mathematicus’）</span>";
            document.getElementById("tr_subtitle").innerHTML = "些许个人随笔耳，不足挂齿";
            document.getElementById("tr_author").innerHTML = "作者暨站长Jason Cai呈堂笔献，冀不吝斧正";
            document.getElementById("tr_humor").innerHTML = "诸君亦可呼此站为‘LMM’。";
            document.getElementById("tr_claim").innerHTML = "（搁这儿不光仅仅有数学！）";
            document.getElementById("tr_latest").innerHTML = "最新随笔";
            document.getElementById("tr_article_lang").innerHTML = "恳请诸君原谅作者仅用英语写作。";
            // document.getElementById("tr_archaic").innerHTML = "夫众述式、尔等当览以了然！";
        }
        // document.getElementById("tr_dogma").innerHTML = "吾等数学教条";
        // document.getElementById("tr_those_symbols").innerHTML = "那些\\( \\LaTeX \\)符号";
        // document.getElementById("tr_those_properties").innerHTML = "那些整数的二三事";
        // document.getElementById("tr_those_algebra").innerHTML = "那些抽象（和不抽象）的代数";
        // document.getElementById("tr_those_building").innerHTML = "那些数学的根源";
        // document.getElementById("tr_those_continue").innerHTML = "那些连续的捣蛋鬼";
        document.getElementById("tr_foot_articles").innerHTML = "文章列表";
        
        if (loc.includes("about.html"))
        {
            document.getElementById("tr_1").innerHTML = "大家好！我是一名数学爱好者Jason Cai。假如各位想向别处望望，也许大家可以跳过这网页简介；但这简介确实是百分之百真实的。";
            document.getElementById("tr_2").innerHTML = "我是谁、这网站又为何物？";
            document.getElementById("tr_3").innerHTML = "先把丑话说前头：我<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">并不</span>是一位数学专业生，遑论教授或者数学相关行业的从业员。实际上，我甚至连一个数学系的文凭都没捞着（见下文）。因此，文章及网页内容或有错漏，在所难免，敬请谅解。";
            document.getElementById("tr_4").innerHTML = "现在让大家转移视角：假设我们想去做一次街头访问，而访问对象包括小朋友、青少年甚至成年人。我们的问题便是：「对您，『数学』到底是什么东西？它有何意义？」";
            document.getElementById("tr_5").innerHTML = "诚然，笔者时间宝贵，谌无时间走下去进行采访了。但从笔者的经验和观察来看，小朋友们的答案类似于：";
            document.getElementById("tr_6").innerHTML = "「数——学吗？<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">呀——叔叔</span>，告诉你，我呀，刚刚从老师那儿学来的呢！你说的是，例如：一加二等于三吗？那我倒还知道更多：三减一等于二呢！」";
            document.getElementById("tr_7").innerHTML = "采访结束后，我们互相发现对方的酒窝是逼出来的，仅是对天真无邪的尊重，而非来自心底里深处的感叹。迟些，旁有一青年徐徐路过，或有人上前截住，问了同样的问题。我脑里的印象预判了以下回答：";
            document.getElementById("tr_8").innerHTML = "「唉，别提了。数学、数学，数你学个头呀，测验又砸了。你再提，方程可把我脑子给撑坏啦。」";
            document.getElementById("tr_9").innerHTML = "大家同他安慰道别后，便又迎来一位新的受访者，是一位大人。不用说，回答无非大概是：";
            document.getElementById("tr_10").innerHTML = "「哎，数学？呃，这我得想想，真的，毕业后<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">十几二十年</span>都没碰过那些书了。数学，依我看来，应该不外乎就是那些微积分、代数、求值那些东东吧？」";
            document.getElementById("tr_11").innerHTML = "现在大家齐来反思。注意到这些对白里角色所描绘的「数学」有一个共通点：重复或大量机械的<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">计算</span>——譬如说，得答案的主流途径便是粗暴地重复代入、求值、检验的动作；或者说得客观一点：看清题目，然后从大家学过的有限「工具」里找出最适合的、已操练至熟的方法（一般不戴混着来的那种），通常便已足够。";
            document.getElementById("tr_12").innerHTML = "先不着急盖棺定论。退一步讲，君不见现代教育体系仍完好无损，甚至训练有素的大伙儿还能适应这日新月异的世界？这证明了教育体系并不是一无是处；相反，它利用了重复性计算非常简单、容易掌握和传授的特点，令原先用在其他领域（如众科学科目）的方法能为推广至数学教育。";
            document.getElementById("tr_13").innerHTML = "其次，这以计算为导向的理念适用于众非数学领域的科目、层次足矣。咱从小接触的数学知识点，如四则运算、百分比率、单位长度、时间金钱等，安不足以应付绝大多数日常事物哉？结账查账、精算会计、厨艺众艺、一日之计……又，假如咱懂点儿次方幂级、基础代数、几何三角、众妙武艺，则大可不被迷惑所诓，甚或能听懂科普节目呢。假如再来点儿三角恒等、微分积分、常数转换、融会贯通，则大可能与科学家们切磋了。但纵观这条道路，其实全是从小学到高中咱每一个人都翻滚带爬过来的过程——人人皆经历过。用以上的理论，其实这些大抵都是以插值为基，用式为上的——特点都一样的。用英语的话作精辟点评，这是一套highly versatile的plug-and-chug maths。利用一列列公式时，大可不必有不懂证明的心理负担。";
            document.getElementById("tr_14").innerHTML = "有个现实一点的考量：这样学，适合现代标准化的测验不过了。老实说，与其搞得像数学专业一样无时无刻都在思考证明的过程（况且还不一定所有人都想读），出题者们于是如是想：不如把「有意思」这层舍弃，搞点儿现实一点儿、符合大众的模式罢，既满足了需求，又便于批改（问位大学教授便知对比了）。";
            document.getElementById("tr_15").innerHTML = "这套系统便由古至今一直运行着，既精又妙，在大众的眼光所看便已觉无敌了。的确，这柄双刃刀的良刃太锋利了，瑕不掩瑜，它的恶刃便显得既无力又无轻重。反之，它能使一个像笔者般的数学爱好者感到「可怜」。我也是在上述这种环境下披着早已设计好的大衣，举着最普遍的棋子，走在明明最宽广无碍的康庄大道上却连滚带爬，直到高中（或者，直到执笔时，笔者仍是名高中生罢了）。不平凡的某一天，我的大脑仿佛爬过了无数的讯息，在字里行间感受到<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">超越之上</span>的高等数学带来的震撼：像看破了一切的导师一样，只论严谨证明的教科书而不看机械性的重复操作、像是挣脱了名叫日常思维的桎梏，叫「代数」而实是积极寻求各结构中的个中奥秘、……像是一阵雷电打到了脸上，啪地打开了一道大门……";
            document.getElementById("tr_16").innerHTML = "也许是出于兴趣，我开始如饥如渴地翻阅卷卷图书、信手拈来般亲自写下一些微不足道的证明、顺从地跟随大师的脚步求实、甚至有几次实体地参加高等数学的论坛、工作坊。然而，最近，我感觉我也许能为大家做得更多、更大、更好。";
            document.getElementById("tr_17").innerHTML = "藉此机会，让我对互联网上一众同我怀有同样志向的数学类科普内容创作者（其实应该称呼为「同行」）表达由衷感谢；不同的点在于他们的汗水辛劳往往能产出比我的作品更为多姿多采、五颜六色。我在这里贡献自己那不足挂齿的笔耕的理由寥寥：只因却坚信这类内容多多益善、愈沛愈佳、永不过时、提高关注。";
            document.getElementById("tr_18").innerHTML = "在这帖可能既狂妄又短小的自传体阵站碑文里，笔者完全没有强迫各位接受的意思。甚至大家斟词酌句的时间也大可省了罢。这篇唯一的要点便是：数学这座塔，它的高度可比我们自诩完成高中学制后所被老师催促的连滚带爬的高度高多了。";
            document.getElementById("tr_19").innerHTML = "写得蛮好，却与本站何干？";
            document.getElementById("tr_20").innerHTML = "在此我得承认我这个网站并不追求绝对的严谨和仅供学术用途；这网站反倒是一处我平时小文章的聚集地。群群之中，出现最多的当是我的兴趣，包括：";
            document.getElementById("tr_20_1").innerHTML = "代数（线代、抽象等）、";
            document.getElementById("tr_20_2").innerHTML = "集合论、"
            document.getElementById("tr_20_3").innerHTML = "一些分析、";
            document.getElementById("tr_20_4").innerHTML = "逻辑、等等";
            document.getElementById("tr_21").innerHTML = "本站不为题为「摘记」、「笔记」等，乃因个人喜好等原因：仿有陈腔滥调之味，亦泛太个人之滥。";
            document.getElementById("tr_22").innerHTML = "反之，我尽量会把一些细微的摘记公之于众，便于互相交流学习，共同增长。";
            document.getElementById("tr_23").innerHTML = "这网站有一独特之处便是嚢括了众多公式，以便大家速查。当然，为了能有「知其然」、又「知其所以然」的功效，我也会把相应的证明（有些是笔者原创的）放出来给大家阅览。";
            document.getElementById("tr_24").innerHTML = "本站些微寒碜，大家欣赏并有所得着就是笔者本人最大的支持和鼓励！";
            document.getElementById("tr_25").innerHTML = "书评、个人、心路历程";
            document.getElementById("tr_26").innerHTML = "以下为笔者这么些日子来读过的数学相关的大师作品，以供大家参考之用。笔者兹是声明，与下列作者及出版社无任何形式的关系和利害，仅是用以对一条可能的自学道路的探索耳。亦即是说，下列著作并从来不是任何硬性规定；仅是对笔者个人的历程一段深刻的反映。";
            document.getElementById("tr_27").innerHTML = "同时，下列非时间排序。";
            document.getElementById("tr_28").innerHTML = "集合论";
            document.getElementById("tr_29").innerHTML = "这本由俄国人写的书算是经典之作：";
            document.getElementById("tr_30").innerHTML = "后来，这本也不错；不过作者把很多抽象的概念浓缩成一节两页儿了：";
            document.getElementById("tr_31").innerHTML = "数论";
            document.getElementById("tr_32").innerHTML = "这本算是目前来讲由浅入深的典范吧：";
            document.getElementById("tr_33").innerHTML = "不过以下这本也可赏，推其化繁为简之乎有奇效：";
            document.getElementById("tr_34").innerHTML = "高等代数";
            document.getElementById("tr_35").innerHTML = "平素臭名昭著的<a href='https://link.springer.com/series/136'>Springer GTM系列</a>这次出奇地做了回人；虽然古老，仍颇贴切，浅显易懂：";
            document.getElementById("tr_36").innerHTML = "有些许日语功底（笔者亲测大约JLPT的N2上下）的伙伴们可以尝试一下佐武老师写的《线形代数学》；值得一推：";
            document.getElementById("tr_37").innerHTML = "分析";
            document.getElementById("tr_38").innerHTML = "需严谨的实分析学的话，以下这本（因其首章对于「数学成熟度、Mathematical Maturity」的训练）也可以当作一本入门教材吧：";
            document.getElementById("tr_39").innerHTML = "不过，若是给仅有中学代数基础的学生当成兴趣爱好读的微积分读本，咱国人刚好有一本：";
            document.getElementById("tr_40").innerHTML = "茫茫学海、数海无边，当笔者读完一本非常厉害的作品时，将顺时增添改补以上内容。";
        }

        
        if (loc.includes("articles.html"))
        {
            document.getElementById("tr_a_title").innerHTML = "Jason Cai个人随笔集";
            document.getElementById("tr_a_desc").innerHTML = "如<a href='about.html'>简介</a>所说，本页包含了站長所撰写之各样随笔，而主题往往源于其对数学众奥秘的些许探究与发现。如同其文章的正文，简介的主要內容仍仅限英文。";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_download"))
        {
            k.innerHTML = "点我下载";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_date"))
        {
            let rst = "";
            
            switch (k.dataset.date.split(' ')[0])
            {
            case "February":
                rst = "二月";
                break;
            case "March":
                rst = "三月";
                break;
            case "April":
                rst = "四月";
                break;
            case "May":
                rst = "五月";
                break;
            case "June":
                rst = "六月";
                break;
            case "July":
                rst = "七月";
                break;
            case "August":
                rst = "八月";
                break;
            case "September":
                rst = "九月";
                break;
            case "October":
                rst = "十月";
                break;
            case "November":
                rst = "十一月";
                break;
            case "December":
                rst = "十二月";
                break;
            default:
                rst = "一月";
            }
            
            let year = k.dataset.date.split(' ')[1].replaceAll('0', '〇').replaceAll('1', '一').replaceAll('2', '二')
                .replaceAll('3', '三').replaceAll('4', '四').replaceAll('5', '五').replaceAll('6', '六').replaceAll('7', '七')
                .replaceAll('8', '八').replaceAll('9', '九');
            
            k.innerHTML = year + '年' + rst;
        }
        
        if (loc.includes("index.html"))
            document.getElementById("tr_article_lang").style.display = "inline";
        document.documentElement.lang = "zh-Hans";
    }
    
    else if (destination === "ja")
    {
        document.getElementById("tr_nav_main").innerHTML = "ホームページ";
        document.getElementById("tr_nav_who").innerHTML = "作者の紹介";
        document.getElementById("tr_nav_serious").innerHTML = "論文";
        // document.getElementById("tr_nav_formulae").innerHTML = "数式の一覧表";
        // document.getElementById("tr_nav_symbols").innerHTML = "数学記号";
        // document.getElementById("tr_nav_algebra").innerHTML = "代数学の理論など";
        // document.getElementById("tr_nav_number").innerHTML = "整数論";
        // document.getElementById("tr_nav_logic").innerHTML = "論理学と集合論";
        // document.getElementById("tr_nav_analysis").innerHTML = "解析学と微積分";
        // document.getElementById("tr_nav_other").innerHTML = "他の数学";
        document.getElementById("tr_nav_lang").innerHTML = "英語ページに戻る";
        if (loc.includes("index.html"))
        {
            document.getElementById("tr_main_title").innerHTML = "『毎月の数学』<br><span style='font-size: 1.7rem;'>（元は「Lusus Menstruus Mathematicus」です。）</span>";
            document.getElementById("tr_subtitle").innerHTML = "個人的な数学見解";
            document.getElementById("tr_author").innerHTML = "サイトオーナーのJason Cai著した文章です。";
            document.getElementById("tr_humor").innerHTML = "このサイトでは、「LMM」と書いてもいいですよ。";
            document.getElementById("tr_claim").innerHTML = "（…とはいうものの、数学について内容だけではありません！）";
            document.getElementById("tr_latest").innerHTML = "最新文章やニュース";
            document.getElementById("tr_article_lang").innerHTML = "申し訳ないが、著者が英語のみで執筆していることをお許しください。";
            // document.getElementById("tr_archaic").innerHTML = "あゝ見よ見よ、上品な数式";
        }
        // document.getElementById("tr_dogma").innerHTML = "我々の数学教旨";
        // document.getElementById("tr_those_symbols").innerHTML = "あの\\( \\LaTeX \\)記号によって";
        // document.getElementById("tr_those_properties").innerHTML = "あの数えによって";
        // document.getElementById("tr_those_algebra").innerHTML = "あの昔から現代までの古今代数学";
        // document.getElementById("tr_those_building").innerHTML = "ある数学と呼ぶビルの基礎によって";
        // document.getElementById("tr_those_continue").innerHTML = "あの連続的なトロールによって";
        document.getElementById("tr_foot_articles").innerHTML = "分類された文章の一覧表";
        
        if (loc.includes("about.html"))
        {
            document.getElementById("tr_1").innerHTML = "皆さん、こんにちは！私は数学愛好家のJason Caiです。もし他のページをご覧になりたいなら、この紹介文は飛ばしても構いませんが、この紹介は100％本当の話です。";
            document.getElementById("tr_2").innerHTML = "私は誰か、そしてこのサイトは何か？";
            document.getElementById("tr_3").innerHTML = "最初に断っておきますが、私は<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">決して</span>数学の専門家ではありません。ましてや教授や数学関連の職業に就いたこともありません。実際、数学の学位すら持っていません（後述）。そのため、記事やページ内容には誤りや漏れがあるかもしれませんが、ご容赦ください。";
            document.getElementById("tr_4").innerHTML = "さて、視点を変えてみましょう。通りで子供、十代、大人などにインタビューをする想像をしてみてください。質問は「あなたにとって『数学』とは何ですか？どんな意味がありますか？」";
            document.getElementById("tr_5").innerHTML = "もちろん、私は忙しくて実際にインタビューに行く時間はありません。しかし、私の経験と観察から、子供たちの答えはおそらく次のようなものでしょう。";
            document.getElementById("tr_6").innerHTML = "「数学？<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">あ、おじさん</span>、先生に習ったばかりだよ！例えば、１＋２＝３でしょ？それだけじゃないよ、３−１＝２も知ってる！」";
            document.getElementById("tr_7").innerHTML = "インタビューが終わり、私たちはお互いに、ただ純真さへの敬意から無理に笑顔を作っていることに気づきます。その後、若者が通りかかり、同じ質問をすると、私の頭の中では次のような答えが予想されました。";
            document.getElementById("tr_8").innerHTML = "「ああ、もうやめてよ。数学なんて、テストでまたやらかしたばかりだ。方程式なんて頭が爆発しそうだよ。」";
            document.getElementById("tr_9").innerHTML = "彼を慰めて別れた後、今度は大人の受访者が現れます。言うまでもなく、答えはおおよそ次のようなものです。";
            document.getElementById("tr_10").innerHTML = "「えっと、数学？うーん、考えてみると、卒業してから<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">十数年</span>、ああいう本は全然触ってないなあ。数学って、微積分とか代数とか、値を求めるようなものじゃないのかな？」";
            document.getElementById("tr_11").innerHTML = "さて、ここで皆さんも考えてみてください。これらの会話に共通するのは、彼らが描く「数学」が<span style=\"font-family: 'Computer Modern Sans CJK', sans-serif\">計算</span>中心であることです。つまり、答えを得るためには機械的に代入や計算を繰り返す、あるいは問題文を読み、学んだ「ツール」から最適なものを選んで適用する、というものです。";
            document.getElementById("tr_12").innerHTML = "急いで結論を出すのはやめましょう。一歩引いて見れば、現代の教育システムはまだ機能しており、訓練された人々は変化する世界に対応できています。これは教育システムが無駄ではないことを示しています。むしろ、繰り返し計算が簡単で教えやすいという特性を活かして、他の分野（科学など）の方法を数学教育に応用しているのです。";
            document.getElementById("tr_13").innerHTML = "第二に、この計算指向の考え方は、非数学分野の多くの科目にも十分に適用できます。私たちは幼い頃から四則演算、割合、単位などを学び、日常のほとんどのことに使えます。さらに、指数や基礎代数、幾何、三角法を学べば、だまされにくくなり、科学番組も理解できるでしょう。微積分や変換なども加えれば、科学者とも議論できるかもしれません。しかし、この道は小学校から高校まで誰もが通る道です。つまり、これらは代入と公式が基本であり、証明の細部まで知らなくても問題ないのです。英語で言えば、これは非常に汎用性の高い 'plug-and-chug' 数学です。";
            document.getElementById("tr_14").innerHTML = "現実的な考慮として、この学び方は現代の標準テストに最適です。正直なところ、数学専攻のように常に証明を考えさせるよりも、出題者は「面白さ」を捨て、現実的で大衆向けのパターンを採用する方が、需要を満たし、採点も容易です（大学教授に聞けばわかります）。";
            document.getElementById("tr_15").innerHTML = "このシステムは古くから機能しており、一般の目には完璧に見えます。確かに、この諸刃の剣の良い刃は非常に鋭く、悪い刃は軽視されます。しかし、それは数学愛好家にとっては「哀れ」に感じられます。私も高校まで（今も高校生ですが）このシステムに従ってきました。ある日、私は「超越」した高等数学の衝撃を感じました。厳密な証明を扱う教科書、機械的な操作から解放された「代数」の真の姿、まるで雷が顔に当たって新たな扉が開かれたかのようでした。";
            document.getElementById("tr_16").innerHTML = "おそらく興味から、私は貪欲に本を読み、自ら些細な証明を書き、巨匠の足跡を追い、実際に高等数学のワークショップに参加することもありました。そして最近、もっと多くのことを皆に提供できるかもしれないと感じています。";
            document.getElementById("tr_17").innerHTML = "この機会に、同じ志を持つオンラインの数学系コンテンツクリエイター（同業者）に感謝を表します。彼らの作品は私のものよりはるかに美しいものもあります。私がこのサイトで微力を尽くす理由はただ一つ：この種のコンテンツは多ければ多いほど良く、時代遅れにならず、関心を高めることができると信じているからです。";
            document.getElementById("tr_18").innerHTML = "この短くて傲慢かもしれない自己紹介の中で、私は皆さんに私の見解を強制するつもりはありません。深く考える時間も無駄にする必要はありません。唯一の重要なポイントは、数学という塔は、高校を卒業した後に教師が急かすようなものよりもはるかに高いということです。";
            document.getElementById("tr_19").innerHTML = "素晴らしい、そしてこのサイトとは何の関係があるのか？";
            document.getElementById("tr_20").innerHTML = "ここで認めなければなりませんが、このサイトは絶対的な厳密性や学術用途を追求しているわけではありません。むしろ、私の個人的なメモの集積所です。その中で最も多いのは私の興味分野、すなわち：";
            document.getElementById("tr_20_1").innerHTML = "代数（線形、抽象など）、";
            document.getElementById("tr_20_2").innerHTML = "集合論、";
            document.getElementById("tr_20_3").innerHTML = "解析の一部、";
            document.getElementById("tr_20_4").innerHTML = "論理など。";
            document.getElementById("tr_21").innerHTML = "このサイトを「ノート」や「メモ」と題しないのは、個人的な好みからです。それらは陳腐で、個人的すぎると感じるからです。";
            document.getElementById("tr_22").innerHTML = "その代わり、細かいメモを公開し、相互の学習交流に役立てたいと思います。";
            document.getElementById("tr_23").innerHTML = "このサイトのユニークな点は、多くの公式を集めて迅速に参照できることです。もちろん、「なぜそうなるか」を理解するために、証明（一部は私のオリジナル）も掲載します。";
            document.getElementById("tr_24").innerHTML = "このささやかなサイトが皆さんの楽しみや学びに役立てば、それが私にとって最大の励みです！";
            document.getElementById("tr_25").innerHTML = "書評、個人的な遍歴";
            document.getElementById("tr_26").innerHTML = "以下は、私がこれまでに読んだ数学関連の名著のリストです。参考までに。これらの著者や出版社とは一切関係ありません。これはあくまで私自身の自学の道筋を反映したものであり、必須のリストではありません。";
            document.getElementById("tr_27").innerHTML = "また、以下の順序は時系列ではありません。";
            document.getElementById("tr_28").innerHTML = "集合論";
            document.getElementById("tr_29").innerHTML = "ロシア人によるこの本は古典的名作です：";
            document.getElementById("tr_30").innerHTML = "その後、これも良いですが、抽象的な概念を1〜2ページに凝縮しています：";
            document.getElementById("tr_31").innerHTML = "数論";
            document.getElementById("tr_32").innerHTML = "私にとって、これは入門から深掘りまでの模範的な一冊です：";
            document.getElementById("tr_33").innerHTML = "一方、次の本は簡潔でわかりやすい説明が特徴です：";
            document.getElementById("tr_34").innerHTML = "高等代数";
            document.getElementById("tr_35").innerHTML = "悪名高い<a href='https://link.springer.com/series/136'>Springer GTMシリーズ</a>ですが、今回は親切に書かれています。古いですが、わかりやすいです：";
            document.getElementById("tr_36").innerHTML = "日本語が読める方（私の経験ではJLPT N2程度）には、佐武一郎先生の『線形代数学』をお勧めします：";
            document.getElementById("tr_37").innerHTML = "解析学";
            document.getElementById("tr_38").innerHTML = "厳密な実解析を学ぶなら、次の本は（数学的成熟度を高める章があるので）入門書として適しています：";
            document.getElementById("tr_39").innerHTML = "しかし、中学代数の基礎がある学生が趣味で微積分を学び、かつ標準テストや本格的な解析への橋渡しを考えるなら、ちょうど良い一冊があります（残念ながら英語訳は見つかりませんでしたが、原書中国語版を読みました）：";
            document.getElementById("tr_40").innerHTML = "学びは終わりがなく、素晴らしい作品を読み終えたら、随時このリストを更新します。";
        }
        
        if (loc.includes("articles.html"))
        {
            document.getElementById("tr_a_title").innerHTML = "Jason Caiの論文テーブル";
            document.getElementById("tr_a_desc").innerHTML = "<a href='about.html'>紹介ページ</a>における紹介によって、このぺーじにはサイトオーナーのJason Caiを著した様々な随筆の集めです。興味のように数学をめぐって色々な発現や推論のテーマをする文章では、英語のみで執筆しています。";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_download"))
        {
            k.innerHTML = "ダウンロードするためのボタン";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_date"))
        {
            let rst = "";
            
            switch (k.dataset.date.split(' ')[0])
            {
            case "February":
                rst = "２月";
                break;
            case "March":
                rst = "３月";
                break;
            case "April":
                rst = "４月";
                break;
            case "May":
                rst = "５月";
                break;
            case "June":
                rst = "６月";
                break;
            case "July":
                rst = "７月";
                break;
            case "August":
                rst = "８月";
                break;
            case "September":
                rst = "９月";
                break;
            case "October":
                rst = "１０月";
                break;
            case "November":
                rst = "１１月";
                break;
            case "December":
                rst = "１２月";
                break;
            default:
                rst = "１月";
            }
            
            let year = k.dataset.date.split(' ')[1].replaceAll('0', '０').replaceAll('1', '１').replaceAll('2', '２')
                .replaceAll('3', '３').replaceAll('4', '４').replaceAll('5', '５').replaceAll('6', '６').replaceAll('7', '７')
                .replaceAll('8', '８').replaceAll('9', '９');  // for some reason, bro hear me up, dont trust js half to full, please, dont
            
            k.innerHTML = year + '年' + rst;
        }
        
        if (loc.includes("index.html"))
            document.getElementById("tr_article_lang").style.display = "inline";
        document.documentElement.lang = "ja";
    }
    
    else if (destination === "fr")
    {
        document.getElementById("tr_nav_main").innerHTML = "La page d'accueil";
        document.getElementById("tr_nav_who").innerHTML = "Qui est l'auteur?";
        // document.getElementById("tr_nav_serious").innerHTML = "Les articles";
        // document.getElementById("tr_nav_formulae").innerHTML = "Le tableau des formules";
        // document.getElementById("tr_nav_symbols").innerHTML = "Les symboles mathématiques";
        // document.getElementById("tr_nav_number").innerHTML = "La théorie des nombres";
        // document.getElementById("tr_nav_algebra").innerHTML = "L'algèbre";
        // document.getElementById("tr_nav_logic").innerHTML = "La théorie logique et des ensembles";
        // document.getElementById("tr_nav_analysis").innerHTML = "Le calcul et l'analyse";
        // document.getElementById("tr_nav_other").innerHTML = "L'autre domaine";
        document.getElementById("tr_nav_lang").innerHTML = "Retour à l'anglais";
        if (loc.includes("index.html"))
        {
            document.getElementById("tr_main_title").innerHTML = "Lusus Menstruus Mathematicus";
            document.getElementById("tr_subtitle").innerHTML = "Des morceaux mathématiques personnelles";
            document.getElementById("tr_author").innerHTML = "Par Jason Cai";
            document.getElementById("tr_humor").innerHTML = "Ou LMM en abrégé.";
            document.getElementById("tr_claim").innerHTML = "(Malgré cela, il y a bien plus que les mathématiques!)";
            document.getElementById("tr_latest").innerHTML = "Les derniers articles";
            document.getElementById("tr_article_lang").innerHTML = "Vous veuillez noter que les articles suivants sont disponsibles seulement en anglais.";
            // document.getElementById("tr_archaic").innerHTML = "INSPICE SEQVENTES FORMVLAS!";
        }
        // document.getElementById("tr_dogma").innerHTML = "Notre dogme mathématique";
        // document.getElementById("tr_those_symbols").innerHTML = "Des sujets des symboles de \\( \\LaTeX \\)";
        // document.getElementById("tr_those_properties").innerHTML = "Des sujets des affaires des nombres";
        // document.getElementById("tr_those_algebra").innerHTML = "Des sujets des études d'algèbres";
        // document.getElementById("tr_those_building").innerHTML = "Des sujets des éléments de base des mathématiques";
        // document.getElementById("tr_those_continue").innerHTML = "Des sujets des énigmes continues";
        document.getElementById("tr_foot_articles").innerHTML = "La liste de quelques articles";
        
        if (loc.includes("about.html"))
        {
            document.getElementById("tr_1").innerHTML = "Bonjour à tous ! Je suis Jason Cai, un passionné de mathématiques. Si vous voulez passer à autre chose, vous pouvez sauter cette introduction, mais elle est 100 % vraie.";
            document.getElementById("tr_2").innerHTML = "Qui suis-je et pourquoi ce site ?";
            document.getElementById("tr_3").innerHTML = "Je tiens à préciser d'emblée : je <span style=\"font-style: italic;\">ne suis pas</span> un professionnel des mathématiques, encore moins professeur ou praticien dans ce domaine. En fait, je n'ai même pas de diplôme en mathématiques (voir ci-dessous). Par conséquent, des erreurs ou omissions sont possibles, mais je fais de mon mieux pour les éviter.";
            document.getElementById("tr_4").innerHTML = "Changeons de perspective : imaginez que nous faisions un micro-trottoir auprès d'enfants, d'adolescents et d'adultes. La question : « Pour vous, que sont les mathématiques ? Quel sens ont-elles ? »";
            document.getElementById("tr_5").innerHTML = "Bien sûr, je n'ai pas le temps de faire ce genre d'interview, mais d'après mon expérience, les réponses des enfants ressembleraient à ceci :";
            document.getElementById("tr_6").innerHTML = "« Les maths ? <span style=\"font-style: italic;\">Hé, monsieur</span>, je viens d'apprendre ça à l'école ! Par exemple, un plus deux égale trois ? Et même trois moins un égale deux ! »";
            document.getElementById("tr_7").innerHTML = "Après l'interview, nous réalisons que nos sourires sont forcés, par respect pour leur innocence. Puis un jeune passe, on lui pose la même question, et ma tête imagine sa réponse :";
            document.getElementById("tr_8").innerHTML = "« Ah, n'en parlez pas. Les maths, j'ai encore raté mon contrôle. Les équations, ça me fait exploser le crâne. »";
            document.getElementById("tr_9").innerHTML = "Après l'avoir réconforté, nous tombons sur un adulte. Sa réponse sera sans doute :";
            document.getElementById("tr_10").innerHTML = "« Les maths ? Euh, laissez-moi réfléchir... Je n'ai pas touché à ces livres depuis <span style=\"font-style: italic;\">des années</span>. Pour moi, c'est surtout du calcul, des dérivées, de l'algèbre, des résolutions d'équations, non ? »";
            document.getElementById("tr_11").innerHTML = "Réfléchissons ensemble. Toutes ces réponses ont un point commun : elles voient les maths comme un ensemble de <span style=\"font-style: italic;\">calculs</span> mécaniques – substituer, évaluer, vérifier. Ou, plus objectivement, identifier le problème, choisir la méthode appropriée parmi les outils connus, et l'appliquer.";
            document.getElementById("tr_12").innerHTML = "Ne tirons pas de conclusions hâtives. Le système éducatif actuel fonctionne et forme des gens capables de s'adapter au monde. Il n'est pas inutile ; au contraire, il exploite la simplicité du calcul répétitif pour enseigner, comme dans d'autres sciences.";
            document.getElementById("tr_13").innerHTML = "Ensuite, cette approche calculatoire est suffisante pour la plupart des domaines non mathématiques. Les notions de base (opérations, pourcentages, unités) suffisent pour la vie courante. Si on ajoute exposants, algèbre, géométrie, on évite les pièges et on comprend les émissions scientifiques. Avec plus de trigonométrie, calcul différentiel et intégral, on peut discuter avec des scientifiques. Mais ce chemin est celui que nous suivons tous de l'école primaire au lycée. En gros, c'est une maths « plug-and-chug » très polyvalente, où la compréhension des preuves n'est pas nécessaire.";
            document.getElementById("tr_14").innerHTML = "Un aspect réaliste : cette méthode est parfaite pour les examens standardisés. Honnêtement, plutôt que de demander des preuves constantes (ce qui ne convient pas à tout le monde), les examinateurs privilégient des exercices concrets et faciles à corriger.";
            document.getElementById("tr_15").innerHTML = "Ce système a fonctionné de tout temps, et aux yeux du public, il est parfait. Mais son revers est que pour un passionné comme moi, il est « pitoyable ». J'ai suivi ce chemin jusqu'au lycée (et j'y suis encore). Un jour, j'ai ressenti le choc des mathématiques supérieures, au-delà des calculs : des livres de preuves rigoureuses, une algèbre qui explore les structures profondes, comme un éclair qui ouvre une porte.";
            document.getElementById("tr_16").innerHTML = "Peut-être par intérêt, je me suis mis à lire avidement, à écrire de petites preuves, à suivre les maîtres, et même à participer à des ateliers. Récemment, j'ai senti que je pourrais faire plus pour les autres.";
            document.getElementById("tr_17").innerHTML = "J'en profite pour remercier les créateurs de contenu mathématique en ligne qui partagent mes objectifs. Leurs travaux sont souvent plus beaux que les miens. Ma motivation est simple : ce type de contenu est toujours utile, jamais démodé, et il attire l'attention.";
            document.getElementById("tr_18").innerHTML = "Dans cette courte autobiographie, je ne force personne à adopter mes vues. Vous pouvez même passer du temps à réfléchir si vous voulez. L'essentiel est que la tour des mathématiques est bien plus haute que ce que l'on nous fait grimper après le lycée.";
            document.getElementById("tr_19").innerHTML = "C'est bien beau, mais quel rapport avec ce site ?";
            document.getElementById("tr_20").innerHTML = "Je dois admettre que ce site n'est pas un lieu de rigueur académique, mais plutôt un recueil de mes notes personnelles. Mes centres d'intérêt y figurent, notamment :";
            document.getElementById("tr_20_1").innerHTML = "Algèbre (linéaire, abstraite, etc.),";
            document.getElementById("tr_20_2").innerHTML = "Théorie des ensembles,";
            document.getElementById("tr_20_3").innerHTML = "Un peu d'analyse,";
            document.getElementById("tr_20_4").innerHTML = "Logique, etc.";
            document.getElementById("tr_21").innerHTML = "Je n'ai pas intitulé le site « Notes » ou « Observations » par goût personnel : cela me semble trop banal et personnel.";
            document.getElementById("tr_22").innerHTML = "Je préfère partager mes petites découvertes pour favoriser les échanges et l'apprentissage mutuel.";
            document.getElementById("tr_23").innerHTML = "Une particularité de ce site : il rassemble de nombreuses formules pour une consultation rapide. Bien sûr, pour comprendre « pourquoi », je fournis aussi les preuves (certaines de moi-même).";
            document.getElementById("tr_24").innerHTML = "Ce site est modeste, mais si vous y trouvez de l'intérêt, ce sera ma plus grande récompense !";
            document.getElementById("tr_25").innerHTML = "Critiques de livres, parcours personnel";
            document.getElementById("tr_26").innerHTML = "Voici une liste des ouvrages mathématiques que j'ai lus, pour vous donner une idée. Je ne suis affilié ni aux auteurs ni aux éditeurs. C'est simplement le reflet de mon parcours d'autodidacte, non une liste obligatoire.";
            document.getElementById("tr_27").innerHTML = "L'ordre ci-dessous n'est pas chronologique.";
            document.getElementById("tr_28").innerHTML = "Théorie des ensembles";
            document.getElementById("tr_29").innerHTML = "Ce livre écrit par un Russe est un classique :";
            document.getElementById("tr_30").innerHTML = "Ensuite, celui-ci est aussi bon, mais il condense beaucoup de concepts en une ou deux pages :";
            document.getElementById("tr_31").innerHTML = "Théorie des nombres";
            document.getElementById("tr_32").innerHTML = "Celui-ci est pour moi un modèle de progression :";
            document.getElementById("tr_33").innerHTML = "Mais le suivant est remarquable par sa clarté :";
            document.getElementById("tr_34").innerHTML = "Algèbre supérieure";
            document.getElementById("tr_35").innerHTML = "La célèbre <a href='https://link.springer.com/series/136'>série GTM de Springer</a> s'avère cette fois abordable, bien que ancienne :";
            document.getElementById("tr_36").innerHTML = "Pour ceux qui lisent le japonais (environ N2), je recommande le classique d'Ichiro Satake, « Algèbre linéaire » :";
            document.getElementById("tr_37").innerHTML = "Analyse";
            document.getElementById("tr_38").innerHTML = "Pour une analyse réelle rigoureuse, ce livre (avec son chapitre sur la maturité mathématique) peut servir d'introduction :";
            document.getElementById("tr_39").innerHTML = "Mais si vous cherchez un livre de calcul différentiel pour débutants, avec juste de l'algèbre de collège, et qui prépare à l'analyse réelle, il y en a un parfait (malheureusement, je n'ai trouvé que la version chinoise) :";
            document.getElementById("tr_40").innerHTML = "La mer de connaissances est infinie ; quand j'aurai lu d'autres œuvres majeures, je mettrai à jour cette liste.";
        }
        
        if (loc.includes("articles.html"))
        {
            document.getElementById("tr_a_title").innerHTML = "Recueil d'essais personnels par Jason Cai";
            document.getElementById("tr_a_desc").innerHTML = "Comme mentionné dans la page d'<a href='about.html'>introduction</a>, voici un recueil de notes et d'idées mathématiques élaborées par l'auteur Jason Cai, qui est aussi le créateur et le responsable de ce site.";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_download"))
        {
            k.innerHTML = "Télécharger ici";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_date"))
        {
            let rst = "";
            
            switch (k.dataset.date.split(' ')[0])
            {
            case "February":
                rst = "Février";
                break;
            case "March":
                rst = "Mars";
                break;
            case "April":
                rst = "Avril";
                break;
            case "May":
                rst = "Mai";
                break;
            case "June":
                rst = "Juin";
                break;
            case "July":
                rst = "Juillet";
                break;
            case "August":
                rst = "Août";
                break;
            case "September":
                rst = "Septembre";
                break;
            case "October":
                rst = "Octobre";
                break;
            case "November":
                rst = "Novembre";
                break;
            case "December":
                rst = "Décembre";
                break;
            default:
                rst = "Janvier";
            }
            
            k.innerHTML = rst + ' ' + k.dataset.date.split(' ')[1];
        }
        
        if (loc.includes("index.html"))
            document.getElementById("tr_article_lang").style.display = "inline";
        document.documentElement.lang = "fr";
    }
    
    else if (destination === "es")
    {
        document.getElementById("tr_nav_main").innerHTML = "Página principal";
        document.getElementById("tr_nav_who").innerHTML = "#iquest; Quién soy yo?";
        document.getElementById("tr_nav_serious").innerHTML = "Articulos";
        // document.getElementById("tr_nav_formulae").innerHTML = "Tabla de fórmulas";
        // document.getElementById("tr_nav_symbols").innerHTML = "Símbolos matemáticos";
        // document.getElementById("tr_nav_number").innerHTML = "De la teoría de números";
        // document.getElementById("tr_nav_algebra").innerHTML = "De la algebra";
        // document.getElementById("tr_nav_logic").innerHTML = "De la lógica y la teoría de conjuntos";
        // document.getElementById("tr_nav_analysis").innerHTML = "Del cálculo y análisis";
        // document.getElementById("tr_nav_other").innerHTML = "Las otras disciplinas";
        document.getElementById("tr_nav_lang").innerHTML = "Volver al inglés";
        if (loc.includes("index.html"))
        {
            document.getElementById("tr_main_title").innerHTML = "Lusus Menstruus Mathematicus";
            document.getElementById("tr_subtitle").innerHTML = "Algunos caprichos personales";
            document.getElementById("tr_author").innerHTML = "De Jason Cai";
            document.getElementById("tr_humor").innerHTML = "O LMM para abreviar.";
            document.getElementById("tr_claim").innerHTML = "(A pesar de esto, #iexcl; hay algo más que matemáticas!)";
            document.getElementById("tr_latest").innerHTML = "Últimos artículos";
            document.getElementById("tr_article_lang").innerHTML = "El autor pide disculpas por haber escrito los siguientes artículos solemente en inglés.";
            // document.getElementById("tr_archaic").innerHTML = "INSPICE SEQVENTES FORMVLAS!";
        }
        // document.getElementById("tr_dogma").innerHTML = "Nuestro dogma matemático";
        // document.getElementById("tr_those_symbols").innerHTML = "Sobre los símbolos de \\( \\LaTeX \\)";
        // document.getElementById("tr_those_properties").innerHTML = "Sobre los intrigantes números enteros";
        // document.getElementById("tr_those_algebra").innerHTML = "Sobre el estudio de la algebra";
        // document.getElementById("tr_those_building").innerHTML = "Sobre los fundamentos de las matemáticas";
        // document.getElementById("tr_those_continue").innerHTML = "Sobre las cosas continuas enigmáticas";
        document.getElementById("tr_foot_articles").innerHTML = "Lista de artículos";
        
        if (loc.includes("about.html"))
        {
            document.getElementById("tr_1").innerHTML = "¡Hola a todos! Soy Jason Cai, un aficionado a las matemáticas. Si quieren ir a otra parte, pueden saltarse esta introducción, pero es 100% real.";
            document.getElementById("tr_2").innerHTML = "¿Quién soy y qué es este sitio?";
            document.getElementById("tr_3").innerHTML = "Primero, aclaro: <span style=\"font-style: italic;\">no soy</span> un profesional de las matemáticas, ni profesor ni trabajador del sector. De hecho, ni siquiera tengo un título en matemáticas (ver más abajo). Por lo tanto, pueden haber errores u omisiones, pero pido disculpas de antemano.";
            document.getElementById("tr_4").innerHTML = "Cambiemos de perspectiva: imaginemos que hacemos una encuesta callejera a niños, adolescentes y adultos. La pregunta: «Para usted, ¿qué son las matemáticas? ¿Qué significado tienen?»";
            document.getElementById("tr_5").innerHTML = "Claro, no tengo tiempo para hacer encuestas, pero por mi experiencia, las respuestas de los niños serían algo así:";
            document.getElementById("tr_6").innerHTML = "«¿Matemáticas? <span style=\"font-style: italic;\">Ay, señor</span>, ¡acabo de aprenderlas en la escuela! Por ejemplo, uno más dos es tres, ¿verdad? ¡Y también sé que tres menos uno es dos!»";
            document.getElementById("tr_7").innerHTML = "Terminada la entrevista, nos damos cuenta de que sonreímos forzadamente, por respeto a su inocencia. Luego pasa un joven, le preguntamos lo mismo, y en mi mente imagino su respuesta:";
            document.getElementById("tr_8").innerHTML = "«Ay, no me lo recuerde. Las matemáticas, otra vez suspendí el examen. Las ecuaciones me explotan la cabeza.»";
            document.getElementById("tr_9").innerHTML = "Después de consolarlo, nos encontramos con un adulto. Su respuesta será más o menos:";
            document.getElementById("tr_10").innerHTML = "«¿Matemáticas? Uh, déjeme pensar... No he tocado esos libros en <span style=\"font-style: italic;\">años</span>. Para mí, son cálculo, álgebra, resolver ecuaciones, ¿no?»";
            document.getElementById("tr_11").innerHTML = "Reflexionemos. Todas estas respuestas tienen en común que ven las matemáticas como <span style=\"font-style: italic;\">cálculos</span> mecánicos: sustituir, evaluar, comprobar. O, más objetivamente, identificar el problema, elegir la herramienta adecuada y aplicarla.";
            document.getElementById("tr_12").innerHTML = "No nos apresuremos a juzgar. El sistema educativo actual funciona y prepara a la gente para el mundo cambiante. No es inútil; al contrario, aprovecha la simplicidad del cálculo repetitivo para enseñar, como en otras ciencias.";
            document.getElementById("tr_13").innerHTML = "Además, este enfoque calculista es suficiente para la mayoría de las áreas no matemáticas. Lo básico (operaciones, porcentajes, unidades) basta para la vida diaria. Con exponentes, álgebra, geometría, trigonometría, podemos evitar engaños y entender divulgación. Con cálculo y análisis, podemos dialogar con científicos. Pero este camino es el que todos seguimos desde la primaria hasta el bachillerato. Básicamente, es una matemática «plug-and-chug» muy versátil, donde no necesitas entender las demostraciones.";
            document.getElementById("tr_14").innerHTML = "Un aspecto realista: así se aprende mejor para los exámenes estandarizados. Honestamente, en lugar de exigir demostraciones constantes (que no a todos interesan), los examinadores prefieren ejercicios prácticos y fáciles de corregir.";
            document.getElementById("tr_15").innerHTML = "Este sistema ha funcionado siempre, y a los ojos del público es perfecto. Pero su lado negativo es que para un entusiasta como yo, resulta «lastimoso». He seguido este camino hasta el bachillerato (y aún estoy en él). Un día, sentí el impacto de las matemáticas superiores, más allá de los cálculos: libros con demostraciones rigurosas, un álgebra que explora estructuras profundas, como un rayo que abre una puerta.";
            document.getElementById("tr_16").innerHTML = "Quizás por interés, empecé a leer ávidamente, a escribir pequeñas pruebas, a seguir a los maestros, e incluso a asistir a talleres. Recientemente, sentí que podría hacer más por los demás.";
            document.getElementById("tr_17").innerHTML = "Aprovecho para agradecer a los creadores de contenido matemático en línea que comparten mis objetivos. Sus trabajos suelen ser más bellos que los míos. Mi motivación es simple: este contenido siempre es beneficioso, nunca pasa de moda, y atrae atención.";
            document.getElementById("tr_18").innerHTML = "En esta breve autobiografía, no obligo a nadie a adoptar mis puntos de vista. Ni siquiera tienen que reflexionar mucho. Lo importante es que la torre de las matemáticas es mucho más alta de lo que nos hacen escalar después del bachillerato.";
            document.getElementById("tr_19").innerHTML = "Muy bien, pero ¿qué tiene que ver con este sitio?";
            document.getElementById("tr_20").innerHTML = "Debo admitir que este sitio no busca el rigor académico absoluto, sino que es un repositorio de mis notas personales. Mis intereses incluyen:";
            document.getElementById("tr_20_1").innerHTML = "Álgebra (lineal, abstracta, etc.),";
            document.getElementById("tr_20_2").innerHTML = "Teoría de conjuntos,";
            document.getElementById("tr_20_3").innerHTML = "Algo de análisis,";
            document.getElementById("tr_20_4").innerHTML = "Lógica, etc.";
            document.getElementById("tr_21").innerHTML = "No he titulado el sitio «Notas» o «Apuntes» por gusto personal: me parecen tópicos y demasiado personales.";
            document.getElementById("tr_22").innerHTML = "Prefiero compartir mis pequeños descubrimientos para fomentar el intercambio y el aprendizaje mutuo.";
            document.getElementById("tr_23").innerHTML = "Una peculiaridad de este sitio: reúne muchas fórmulas para consulta rápida. Por supuesto, para entender el «por qué», también incluyo las demostraciones (algunas originales mías).";
            document.getElementById("tr_24").innerHTML = "Este sitio es modesto, pero si lo disfrutan y aprenden algo, será mi mayor recompensa.";
            document.getElementById("tr_25").innerHTML = "Reseñas de libros, trayectoria personal";
            document.getElementById("tr_26").innerHTML = "Aquí una lista de obras matemáticas que he leído, como referencia. No estoy afiliado a los autores ni editoriales. Es solo un reflejo de mi camino autodidacta, no una lista obligatoria.";
            document.getElementById("tr_27").innerHTML = "El orden no es cronológico.";
            document.getElementById("tr_28").innerHTML = "Teoría de conjuntos";
            document.getElementById("tr_29").innerHTML = "Este libro escrito por un ruso es un clásico:";
            document.getElementById("tr_30").innerHTML = "Después, este también es bueno, pero condensa muchos conceptos en una o dos páginas:";
            document.getElementById("tr_31").innerHTML = "Teoría de números";
            document.getElementById("tr_32").innerHTML = "Este es para mí un ejemplo de progresión:";
            document.getElementById("tr_33").innerHTML = "Pero el siguiente destaca por su claridad:";
            document.getElementById("tr_34").innerHTML = "Álgebra superior";
            document.getElementById("tr_35").innerHTML = "La famosa <a href='https://link.springer.com/series/136'>serie GTM de Springer</a> esta vez resulta accesible, aunque antigua:";
            document.getElementById("tr_36").innerHTML = "Para quienes lean japonés (sobre N2), recomiendo el clásico de Ichiro Satake, «Álgebra lineal»:";
            document.getElementById("tr_37").innerHTML = "Análisis";
            document.getElementById("tr_38").innerHTML = "Para un análisis real riguroso, este libro (con su capítulo sobre madurez matemática) puede servir como introducción:";
            document.getElementById("tr_39").innerHTML = "Pero si buscan un libro de cálculo para principiantes, con solo álgebra de secundaria, y que prepare para el análisis real, hay uno perfecto (lamentablemente, solo encontré la versión china):";
            document.getElementById("tr_40").innerHTML = "El mar del conocimiento es infinito; cuando lea otras grandes obras, actualizaré esta lista.";
        }
        
        if (loc.includes("articles.html"))
        {
            document.getElementById("tr_a_title").innerHTML = "Colección de ensayos personales de Jason Cai";
            document.getElementById("tr_a_desc").innerHTML = "Como se menciona en la página de <a href='about.html'>introducción</a>, Aquí se presenta una recopilcación de notas y reflexiones matemáticas elaboradas por el autor Jason Cai, quien también es el creador y responsable del mantenimiento de este sitio web.";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_download"))
        {
            k.innerHTML = "Télécharger ici";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_date"))
        {
            let rst = "";
            
            switch (k.dataset.date.split(' ')[0])
            {
            case "February":
                rst = "Febrero";
                break;
            case "March":
                rst = "Marzo";
                break;
            case "April":
                rst = "Abril";
                break;
            case "May":
                rst = "Mayo";
                break;
            case "June":
                rst = "Junio";
                break;
            case "July":
                rst = "Julio";
                break;
            case "August":
                rst = "Agosto";
                break;
            case "September":
                rst = "Septiembre";
                break;
            case "October":
                rst = "Octubre";
                break;
            case "November":
                rst = "Noviembre";
                break;
            case "December":
                rst = "Diciembre";
                break;
            default:
                rst = "Enero";
            }
            
            k.innerHTML = rst + ' de ' + k.dataset.date.split(' ')[1];
        }
        
        if (loc.includes("index.html"))
            document.getElementById("tr_article_lang").style.display = "inline";
        document.documentElement.lang = "es";
    }
    
    else if (destination === "ru")
    {
        document.getElementById("tr_nav_main").innerHTML = "Главно";
        document.getElementById("tr_nav_who").innerHTML = "Кто я?";
        document.getElementById("tr_nav_serious").innerHTML = "Статьи";
        // document.getElementById("tr_nav_formulae").innerHTML = "Таблица формул";
        // document.getElementById("tr_nav_symbols").innerHTML = "О символах математических";
        // document.getElementById("tr_nav_number").innerHTML = "О теории целых чисел";
        // document.getElementById("tr_nav_algebra").innerHTML = "Об алгебре";
        // document.getElementById("tr_nav_logic").innerHTML = "О логике и теории множеств";
        // document.getElementById("tr_nav_analysis").innerHTML = "О исчисление и анализе";
        // document.getElementById("tr_nav_other").innerHTML = "О других дисциплинах";
        document.getElementById("tr_nav_lang").innerHTML = "Английский";
        if (loc.includes("index.html"))
        {
            document.getElementById("tr_main_title").innerHTML = "Lusus Menstruus Mathematicus<br>(Читается как #171; Лусьус Мынструъус Матымаатикус #187;)";
            document.getElementById("tr_subtitle").innerHTML = "Несколько личных мыслей";
            document.getElementById("tr_author").innerHTML = "Представлено Jason Cai'ем (Джейсон Цай)";
            document.getElementById("tr_humor").innerHTML = "Или LMM сокращенно.";
            document.getElementById("tr_claim").innerHTML = "(Тем не менее, на этом сайте гораздо больше, чем просто математика!)";
            document.getElementById("tr_latest").innerHTML = "Новейшие статьи";
            document.getElementById("tr_article_lang").innerHTML = "Статьи доступны только на английском языке.";
            // document.getElementById("tr_archaic").innerHTML = "Посмотрите-вы на следующие формулы!";
        }
        // document.getElementById("tr_dogma").innerHTML = "Догма математическая наша";
        // document.getElementById("tr_those_symbols").innerHTML = "Здесь чём-то о символах \\( \\LaTeX \\)";
        // document.getElementById("tr_those_properties").innerHTML = "Здесь чём-то о числах целых";
        // document.getElementById("tr_those_algebra").innerHTML = "Здесь чём-то о изучении алгебры";
        // document.getElementById("tr_those_building").innerHTML = "Здесь чём-то о фундаментальных структурах математики";
        // document.getElementById("tr_those_continue").innerHTML = "Здесь чём-то о других темах";
        document.getElementById("tr_foot_articles").innerHTML = "Список статей";
        
        if (loc.includes("about.html"))
        {
            document.getElementById("tr_1").innerHTML = "Всем привет! Я Джейсон Цай, любитель математики. Если хотите перейти к другим страницам, можете пропустить это введение, но оно на 100% правдиво.";
            document.getElementById("tr_2").innerHTML = "Кто я и зачем этот сайт?";
            document.getElementById("tr_3").innerHTML = "Сразу оговорюсь: я <span style=\"font-style: italic;\">не</span> профессиональный математик, не профессор и не работник в этой сфере. У меня даже нет диплома по математике (см. ниже). Поэтому возможны ошибки или пропуски, но я стараюсь их избегать.";
            document.getElementById("tr_4").innerHTML = "Сменим перспективу: представьте, что мы проводим уличный опрос среди детей, подростков и взрослых. Вопрос: «Что для вас математика? В чём её смысл?»";
            document.getElementById("tr_5").innerHTML = "Конечно, у меня нет времени на такие опросы, но по моему опыту ответы детей были бы примерно такими:";
            document.getElementById("tr_6").innerHTML = "«Математика? <span style=\"font-style: italic;\">Дяденька</span>, я только что узнал её в школе! Например, один плюс два равно трём? А ещё три минус один равно двум!»";
            document.getElementById("tr_7").innerHTML = "После опроса мы замечаем, что наши улыбки были натянутыми, из уважения к их невинности. Затем проходит юноша, мы задаём тот же вопрос, и в моей голове возникает его ответ:";
            document.getElementById("tr_8").innerHTML = "«Ой, не напоминайте. Математика, опять завалил контрольную. Уравнения взрывают мне мозг.»";
            document.getElementById("tr_9").innerHTML = "Утешив его, мы встречаем взрослого. Его ответ, скорее всего, будет таким:";
            document.getElementById("tr_10").innerHTML = "«Математика? Хм, дайте подумать... Я не трогал эти книги <span style=\"font-style: italic;\">годами</span>. Для меня это вычисления, производные, алгебра, решение уравнений, не так ли?»";
            document.getElementById("tr_11").innerHTML = "Давайте поразмышляем. Все эти ответы объединяет то, что они видят математику как <span style=\"font-style: italic;\">вычисления</span> – подстановку, оценку, проверку. Или, объективнее, определить проблему, выбрать подходящий инструмент и применить.";
            document.getElementById("tr_12").innerHTML = "Не будем спешить с выводами. Современная система образования работает и готовит людей к изменяющемуся миру. Она не бесполезна; наоборот, она использует простоту повторяющихся вычислений для обучения, как и в других науках.";
            document.getElementById("tr_13").innerHTML = "Кроме того, этот вычислительный подход достаточен для большинства нематематических областей. Основы (операции, проценты, единицы) хватает для повседневной жизни. Если добавить степени, алгебру, геометрию, тригонометрию, мы можем избежать обмана и понимать научно-популярные передачи. С дифференциальным и интегральным исчислением мы можем обсуждать с учёными. Но этот путь мы все проходим с начальной школы до старших классов. В общем, это очень универсальная математика «plug-and-chug», где не нужно понимать доказательства.";
            document.getElementById("tr_14").innerHTML = "Реалистичный аспект: такой способ обучения идеален для стандартизированных экзаменов. Честно говоря, вместо постоянных доказательств (что не всем интересно), экзаменаторы предпочитают практические задачи, которые легко проверять.";
            document.getElementById("tr_15").innerHTML = "Эта система работала всегда, и в глазах общественности она совершенна. Но её обратная сторона в том, что для энтузиаста, как я, она «жалка». Я следовал этому пути до старших классов (и до сих пор учусь). Однажды я ощутил удар высшей математики, выходящей за рамки вычислений: книги со строгими доказательствами, алгебра, исследующая глубокие структуры, как удар молнии, открывающий дверь.";
            document.getElementById("tr_16").innerHTML = "Возможно, из интереса я начал жадно читать, писать маленькие доказательства, следовать за мастерами и даже посещать семинары. Недавно я почувствовал, что могу сделать больше для других.";
            document.getElementById("tr_17").innerHTML = "Пользуясь случаем, благодарю создателей математического контента в интернете, разделяющих мои цели. Их работы часто красивее моих. Моя мотивация проста: такой контент всегда полезен, никогда не устаревает и привлекает внимание.";
            document.getElementById("tr_18").innerHTML = "В этой короткой автобиографии я не заставляю никого принимать мои взгляды. Вы даже можете не тратить время на размышления. Главное – башня математики гораздо выше, чем то, что нам дают после школы.";
            document.getElementById("tr_19").innerHTML = "Прекрасно, но какое отношение это имеет к сайту?";
            document.getElementById("tr_20").innerHTML = "Признаюсь, этот сайт не претендует на академическую строгость, а является скорее сборником моих личных заметок. Мои интересы включают:";
            document.getElementById("tr_20_1").innerHTML = "Алгебра (линейная, абстрактная и т.д.),";
            document.getElementById("tr_20_2").innerHTML = "Теория множеств,";
            document.getElementById("tr_20_3").innerHTML = "Немного анализа,";
            document.getElementById("tr_20_4").innerHTML = "Логика и прочее.";
            document.getElementById("tr_21").innerHTML = "Я не назвал сайт «Заметки» или «Наблюдения» по личным предпочтениям: это кажется слишком банальным и личным.";
            document.getElementById("tr_22").innerHTML = "Вместо этого я делюсь своими маленькими открытиями, чтобы способствовать обмену и взаимному обучению.";
            document.getElementById("tr_23").innerHTML = "Особенность этого сайта – собрание множества формул для быстрого доступа. Чтобы понять «почему», я также привожу доказательства (некоторые мои собственные).";
            document.getElementById("tr_24").innerHTML = "Сайт скромен, но если вы найдёте в нём пользу, это будет моей лучшей наградой.";
            document.getElementById("tr_25").innerHTML = "Рецензии на книги, личный путь";
            document.getElementById("tr_26").innerHTML = "Ниже приведён список математических трудов, которые я прочитал, для справки. Я не связан с авторами или издательствами. Это лишь отражение моего самообразования, а не обязательный перечень.";
            document.getElementById("tr_27").innerHTML = "Порядок не хронологический.";
            document.getElementById("tr_28").innerHTML = "Теория множеств";
            document.getElementById("tr_29").innerHTML = "Эта книга, написанная русским, является классикой:";
            document.getElementById("tr_30").innerHTML = "Затем эта тоже хороша, но сжимает много концепций в одну-две страницы:";
            document.getElementById("tr_31").innerHTML = "Теория чисел";
            document.getElementById("tr_32").innerHTML = "Эта для меня образец постепенного углубления:";
            document.getElementById("tr_33").innerHTML = "Но следующая выделяется своей ясностью:";
            document.getElementById("tr_34").innerHTML = "Высшая алгебра";
            document.getElementById("tr_35").innerHTML = "Знаменитая <a href='https://link.springer.com/series/136'>серия GTM от Springer</a> на этот раз доступна, хотя и старая:";
            document.getElementById("tr_36").innerHTML = "Для тех, кто читает по-японски (примерно N2), рекомендую классический труд Итиро Сатакэ «Линейная алгебра»:";
            document.getElementById("tr_37").innerHTML = "Анализ";
            document.getElementById("tr_38").innerHTML = "Для строгого вещественного анализа эта книга (с главой о математической зрелости) может служить введением:";
            document.getElementById("tr_39").innerHTML = "Но если вы ищете книгу по исчислению для начинающих, имея только школьную алгебру, и которая готовит к анализу, есть одна идеальная (к сожалению, я нашёл только китайскую версию):";
            document.getElementById("tr_40").innerHTML = "Море знаний бесконечно; когда я прочитаю другие выдающиеся работы, я обновлю этот список.";
        }
        
        if (loc.includes("articles.html"))
        {
            document.getElementById("tr_a_title").innerHTML = "Сборник личных эссе Jason Cai";
            document.getElementById("tr_a_desc").innerHTML = "Как указано во <a href='about.html'>вводной части</a>, это включает в себя всевозможные эссе, написанные создателем и администратором Jason Cai, охватывающие математические разработки и идеи. Помимо текстов, контент представлен только на английском языке.";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_download"))
        {
            k.innerHTML = "Здесь скачать";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_date"))
        {
            let rst = "";
            
            switch (k.dataset.date.split(' ')[0])
            {
            case "February":
                rst = "Февраль";
                break;
            case "March":
                rst = "Март";
                break;
            case "April":
                rst = "Апрель";
                break;
            case "May":
                rst = "Май";
                break;
            case "June":
                rst = "Июнь";
                break;
            case "July":
                rst = "Июль";
                break;
            case "August":
                rst = "Август";
                break;
            case "September":
                rst = "Сентябрь";
                break;
            case "October":
                rst = "Октябрь";
                break;
            case "November":
                rst = "Ноябрь";
                break;
            case "December":
                rst = "Декабрь";
                break;
            default:
                rst = "Январь";
            }
            
            k.innerHTML = rst + ' ' + k.dataset.date.split(' ')[1] + " г.";
        }
        
        if (loc.includes("index.html"))
            document.getElementById("tr_article_lang").style.display = "inline";
        document.documentElement.lang = "ru";
    }
    
    else
    {
        document.getElementById("tr_nav_main").innerHTML = "Main";
        document.getElementById("tr_nav_who").innerHTML = "Who Am I?";
        document.getElementById("tr_nav_serious").innerHTML = "Serious Stuff";
        // document.getElementById("tr_nav_formulae").innerHTML = "The Formulae";
        // document.getElementById("tr_nav_symbols").innerHTML = "Symbols";
        // document.getElementById("tr_nav_number").innerHTML = "Number Theory";
        // document.getElementById("tr_nav_algebra").innerHTML = "Algebra";
        // document.getElementById("tr_nav_logic").innerHTML = "Logic &amp; Set Theory";
        // document.getElementById("tr_nav_analysis").innerHTML = "Analysis &amp; Calculus";
        // document.getElementById("tr_nav_other").innerHTML = "Other Disciplines";
        document.getElementById("tr_nav_lang").innerHTML = "Other Languages";
        if (loc.includes("index.html"))
        {
            document.getElementById("tr_main_title").innerHTML = "Lusus Menstruus Mathematicus";
            document.getElementById("tr_subtitle").innerHTML = "Some random, personal caprices";
            document.getElementById("tr_author").innerHTML = "Proudly by Jason Cai";
            document.getElementById("tr_humor").innerHTML = "LMM for short.";
            document.getElementById("tr_claim").innerHTML = "(More than just maths.)";
            document.getElementById("tr_latest").innerHTML = "Latest articles";
            document.getElementById("tr_article_lang").innerHTML = "The articles are available in English only.";
            // document.getElementById("tr_archaic").innerHTML = "Beholdst thou these formulae";
        }
        // document.getElementById("tr_dogma").innerHTML = "The Mathematical Dogma";
        // document.getElementById("tr_those_symbols").innerHTML = "Those \\( \\LaTeX \\) symbols";
        // document.getElementById("tr_those_properties").innerHTML = "Those properties of numbers";
        // document.getElementById("tr_those_algebra").innerHTML = "Those algebraic studies";
        // document.getElementById("tr_those_building").innerHTML = "Those building blocks";
        // document.getElementById("tr_those_continue").innerHTML = "Those continuous-ness";
        document.getElementById("tr_foot_articles").innerHTML = "The Articles";
        
        if (loc.includes("about.html"))
        {
            document.getElementById("tr_1").innerHTML = "Hello everyone! I am Jason Cai, a maths hobbyist. You can most positively skip this piece of raconté if you wish to and jump straight to the pages you would like to visit, yet it's a true story behind this little website.";
            document.getElementById("tr_2").innerHTML = "Who Am I, and Why Did I Create This Site?";
            document.getElementById("tr_3").innerHTML = "I feel obligated to reiterate a disclaimer: I am <span style=\"font-style: italic;\">not</span> a mathematical professional nor have I ever engaged in any kind of occupation pertaining to mathematics per se. In fact, I do not even currently hold a full, valid degree in mathematical major. As such, subtle errors are somewhat likely to occur; nonetheless I always keep trying my best to maintain the accuracy of the content while I am writing or designing.";
            document.getElementById("tr_4").innerHTML = "First, imagine you want to conduct a street interview. You go to a random yet boisterous street, and you ask any passerby who happens to bump into you. They may be a toddler, an adult, a teenager. It doesn't matter. Out of your curiosity, you ask them, ‘To you, what does it mean by maths?’";
            document.getElementById("tr_5").innerHTML = "Obviously, I am quite occupied and therefore am rather unavailable to conduct such a leisurely interview. However, based on my observation and my personal experience, I am of high certainty to assure that their answers may look something like:";
            document.getElementById("tr_6").innerHTML = "‘Maths &ndash;? <span style=\"font-style: italic;\">Yippee!</span> I've just learnt 'em from my teachers! Like, doing one-plus-two-is-three? I know more! Three-minus-one-is-two!’";
            document.getElementById("tr_7").innerHTML = "You nod, not because of total affirmation, but due to respect. Then here comes a teenager boy. You approach him to start your interview, and eventually you jot down:";
            document.getElementById("tr_8").innerHTML = "‘Cr[_]p. Don't f[___]'ing mention maths. Actually I just got <span style=\"font-style: italic;\">cooked</span> by those SATs, whatever <span style=\"font-style: italic;\">Problem-solving, rate, advanced maths</span> they call.’";
            document.getElementById("tr_9").innerHTML = "After consoling him verbally and saying thank you, you come across an adult. Now if you decide to continue, be sure to anticipate:";
            document.getElementById("tr_10").innerHTML = "‘Maths? Why, don't scare me. I fear I haven't touched those books for <span style=\"font-style: italic;\">years</span>, like, literally. If I'm to say, it's like, those calculus thingies? Algebra, finding value, problem solving?’";
            document.getElementById("tr_11").innerHTML = "Now it's your turn. Reflect based on these dialogues. One thing one would observe in common is the so-called mathematics all the above fictional interviewees mention, is (I mean almost, well, surely I cannot be that absolute) purely <span style=\"font-style: italic;\">computational</span>. By this I mean, more abruptly, you merely substitute a certain value given or derived by previous substitutions to derive the final answer; or, less aggressively, you just analyse the conditions given in a standard, predictable prompt which only requires a subset of all the knowledge you have acquired (analogously, the ‘toolkit’ on your hand), then apply suitable, prescribed sequence to derive the required value.";
            document.getElementById("tr_12").innerHTML = "I might have just been a bit too aggressive (and also the following; apologies in advance). Don't get me wrong. In fact, the above pedagogy fluorishing till now proves that such methadologies resist time and the ever-changing world. It <span style=\"font-style: italic;\">works</span>; it works by the fact that the basic, computational way of thoughts is, first, very easy to grasp, and one even might not be able to tell the rudimentary mathematical learning of the ‘theorems’ apart from learning other subjects, like the proven phenomena in the sciences. Then, studying per se becomes easier.";
            document.getElementById("tr_13").innerHTML = "Second, the computational way is just so versatile that in almost every aspect of life you require mathematics up to this particular level. Now, pause and think and list the mathematical knowledge you have acquired up to high school. <span style=\"font-style: bold;\">Arithmetic, rates and ratios, percentages and units</span> so that you can keep track of almost every plain and non-scientific number: bills, charges, changes, taxes, cuisine, planning&hellip; <span style=\"font-style: bold;\">Exponents, Basic algebra, geometry and trigonometry</span> so that you could live a savvy life and occasionally the ability to digest high-tech or scientific contents. <span style=\"font-style: bold;\">More trigonometry, differential calculus and integral calculus</span> so that you can do serious science, economics or programming. Most of them require substitution after understanding a certain portion of the whole picture, then treat the values obtained as mere numbers while utilising them in their expertise. Admittedly, knowing every single detail beneath the bonnet is largely not required in most aspects one would encounter in daily life, considering even some sciences do the same thing of grapping the values from somewhere established by other people and input it in yet another machine of this type.";
            document.getElementById("tr_14").innerHTML = "Third, it's just good for standardised testing. Let me be candid: undergraduate and graduate mathematics is basically proofs, speaking in a highly generalised manner, for the sake of other closely-related, theoretical science subjects or (more often than not) mathematics itself. On the other hand, most people do not opt to take (especially pure) mathematics, and thus it makes assessments comprising purely testing the candidate's ability to construct rigorous proofs rather unnecessary and may not reflect the overwhelming portion of mathematical prerequisite in quotidian operations (see above). (Plus, proofs are hard to score and mark. Ask any maths professor for confirmation.) Then, it's almost perfect a choice to have the students follow the above universal sequence, and it works really well.";
            document.getElementById("tr_15").innerHTML = "Since it works so well, the downside that any concept or item is bound to have (all alongside its benefits) is never too severe. Rather, it makes a math-lover feel <span style=\"font-style: italic;\">pity</span>. To be candid, I have been one of them all the way until high school (additional information for somebody who may find it helpful: I'm still a high school student now). And I've come till now very well. The realisation intercepted me during high school was that there is something <span style=\"font-style: italic;\">beyond</span> that. There are mathematical books (the monographs) that resemble none of my current textbooks or any ‘science-promoting series’ I had come across: exercises are almost completely proofs, with few command terms like ‘find’ something. There are fields that are called <span style=\"font-style: italic;\">algebra</span>, but are not the algebra I perceived (instead, foreign terms to me like groups, rings, fields that are dedicated to the innermost, deepest mathematical structures sprouted everywhere). Those realisations come as hastily as a mother wanting to wake her son up. It, borrowing a cliché metaphor, opens a new door, arrantly novel to me.";
            document.getElementById("tr_16").innerHTML = "Soon after the realisation did I start reading the literatures (cf. below), jotting down some basic proof, following the masterpieces' authors' steps nicely and obediantly, even attending physical workshops in-person for a very limited frequency. But I eventually decide that I can do even more.";
            document.getElementById("tr_17").innerHTML = "I would like to use this opportunity to shout out to all the online content creators sharing the same goal with me. They promote mathematics to the same, general audience of mine with the same vision, mainly in multimedia forms, yet some of them produce content significantly more beautiful than me. The only motivation that drives me creating the content is that letting people realise that there's way more stuff beyond the rudimentary, computational mathematics is so important that worths being reiterated once again on top of all promotions, including mine.";
            document.getElementById("tr_18").innerHTML = "Throughout this short (and potentially dismissive) autobiography, I do not force you to accept and align my views. I do not even require you ponder over and over about it. The only key important takeaway I would like to convey here is to hope all you guys acknowledge, accept and appreciate that the whole tower we call Mathematics contains way more than those found in different schools' curricula, and that's all to be aware of before drawing a perfect fullstop.";
            document.getElementById("tr_19").innerHTML = "Great and Profound. Then How About This Website?";
            document.getElementById("tr_20").innerHTML = "Now I must admit that rather than being a very rigorous, if not pedantic, platform for academic discussion, this website serves rather as a aggregation of notes I've jotted down from my personal studies across my areas of interest within mathematics, including:";
            document.getElementById("tr_20_1").innerHTML = "Algebra (Linear, Abstract, etc.),";
            document.getElementById("tr_20_2").innerHTML = "Set theory,"
            document.getElementById("tr_20_3").innerHTML = "Some analysis,";
            document.getElementById("tr_20_4").innerHTML = "Logic and et cetera.";
            document.getElementById("tr_21").innerHTML = "Not titling the site as 'Notes' or 'Observations' of whom from whom is only due to my personal preferences and opinion: I think that doing so will make this website too casual, personal, or if even worse, not accurate and arbitrary. Rest assured, although this website falls into the former two, I'll make it that it will never fall into the latter two.";
            document.getElementById("tr_22").innerHTML = "I'll try to put my casual, everyday finding here, constituting one of the major function of this site &ndash; to try my personal best to help contribute to the whole Internet community as well as the mathematical one.";
            document.getElementById("tr_23").innerHTML = "The other one is the formulae. I mean, it's important to see the proof (since it's the centre of advanced mathematics), or at least the rationale explaining how a formula is derived ('how it works'), but it's equally important to remember and absorb some common and handy consequences. On the other hand, the other way round is also important. So, I'll try to present the important formulae (of which the form of consequences constitutes the majority) as well as their proof (some are proposed by myself), up to the depth and breadth of the content I've learnt and internalised, mostly from my areas of interest.";
            document.getElementById("tr_24").innerHTML = "I hope every viewer of my humble website finds appreciation and enjoyment, even passion, towards mathematics (possibly the same kind of enthusiasm of reading my long passage here), from my articles and other contents. This will make me very happy and will be great motivations.";
            document.getElementById("tr_25").innerHTML = "Personal and Informal Book Reviews";
            document.getElementById("tr_26").innerHTML = "Here's a <span style=\"font-weight: bold;\">curated</span> list of the mathematical literature I have come across solely by myself. Bear in mind that I am independent from the following authors or publishers, and am thus not affiliated whatsoever. The following list is but a genuine reflection and exposition of the pathway I have tried in-person. Most positively, alternative pathways (and literature materials) certainly exist and thus the enumeration below serves reference purposes more than as guidance of strict adhesion.";
            document.getElementById("tr_27").innerHTML = "Also, note that the following order is not sequential.";
            document.getElementById("tr_28").innerHTML = "Set theory";
            document.getElementById("tr_29").innerHTML = "For set theory, I recall that I started the journey by reading the book";
            document.getElementById("tr_30").innerHTML = "Then, I savoured in";
            document.getElementById("tr_31").innerHTML = "Number Theory";
            document.getElementById("tr_32").innerHTML = "I personally perceive the following to be the ultimate G.O.A.T.:";
            document.getElementById("tr_33").innerHTML = "The following one, on the other hand, features simple and succinct explanations:";
            document.getElementById("tr_34").innerHTML = "Algebra";
            document.getElementById("tr_35").innerHTML = "Surprisingly, the infamous <a href=\"https://link.springer.com/series/136\">GTM series</a> by Springer is humane this time (or is it actually a survivor-bias?), given that they write literature with (potentially) accessible introductions in:";
            document.getElementById("tr_36").innerHTML = "For topics focusing on Linear Algebra per se though, I suggest everyone reading this, albeit the English version is hardly available. In fact, I read the original Japanese version of this classic, by the well-known Japanese algebraist Ichiroh Satake (佐武一郎先生). Sharing the same problem with the above book, the following is also quite old and may not ‘catch up’, but I personally guess it would be fine:";
            document.getElementById("tr_37").innerHTML = "Analysis";
            document.getElementById("tr_38").innerHTML = "For real analysis that requires the mathematical rigour, I surmise that the following is even accessible to advanced high school students who get fairly well in computational (<span style=\"font-style: italic;\">memorising</span> do I call; cf. above) calculus. A bit terse as it might be, it still expounds the mathematical maturity required to excel.";
            document.getElementById("tr_39").innerHTML = "If I were to recommend a book which is designed for complete beginners in computational Calculus but with adequate acquaintances in typical middle-school Algebra, <span style=\"font-style: italic;\">and</span> that it preps not only for standardised tests, computational Calculus itself, but also bridges the authentic Real Analysis, then surprisingly there is one perfect match. Unfortunately, I cannot find an English translation, let alone being translated by the original author. I have read the original Chinese monograph instead:";
            document.getElementById("tr_40").innerHTML = "When I finish more, I will update the above pieces of information correspondingly.";
        }

        
        if (loc.includes("articles.html"))
        {
            document.getElementById("tr_a_title").innerHTML = "Collection of Jason Cai's Articles";
            document.getElementById("tr_a_desc").innerHTML = "The following articles are all written by Jason Cai. As mentioned in the <a href='about.html'>introduction of this site</a>, it mainly consists of notes and mathematical insights drawn and developed by him, who is also the creator and the maintainer of this site.";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_download"))
        {
            k.innerHTML = "Download Immediately";
        }
        
        for (let k of document.getElementsByClassName("tr_bulk_date"))
        {
            let rst = "";
            
            switch (k.dataset.date.split(' ')[0])
            {
            case "February":
                rst = "February";
                break;
            case "March":
                rst = "March";
                break;
            case "April":
                rst = "April";
                break;
            case "May":
                rst = "May";
                break;
            case "June":
                rst = "June";
                break;
            case "July":
                rst = "July";
                break;
            case "August":
                rst = "August";
                break;
            case "September":
                rst = "September";
                break;
            case "October":
                rst = "October";
                break;
            case "November":
                rst = "November";
                break;
            case "December":
                rst = "December";
                break;
            default:
                rst = "January";
            }
            
            k.innerHTML = rst + ' ' + k.dataset.date.split(' ')[1];
        }
        
        if (loc.includes("index.html"))
            document.getElementById("tr_article_lang").style.display = "none";
        document.documentElement.lang = "en";
    }
    
    MathJax.typesetPromise([document.getElementById("tr_those_symbols")]).then(() => {}).catch((error) => console.log("MathJax failed: " + err.message));
}

// Triggers the glow animation on any target h2 element
function lmm_highlightTargetTitle()
{
    const hash = window.location.hash;
    if (!hash) return;

    // Locate the element matching the URL hash (e.g. #article1)
    const targetEl = document.querySelector(hash);
    
    // Verify element exists and is an <h2> tag
    if (targetEl && targetEl.tagName.toLowerCase() === 'h2')
    {
        // Remove existing class instance to allow re-triggering
        targetEl.classList.remove('target-highlight');
        
        // Force DOM reflow to restart animation sequence
        void targetEl.offsetWidth;
        
        targetEl.classList.add('target-highlight');
    }
}

window.addEventListener("hashchange", (event) => {
    const newHash = window.location.hash.substring(1);
    
    if (newHash.startsWith("tr_"))
    {
        const element = document.getElementById(newHash);
        if (element)
        {
            const originalId = element.id;
            element.id = '';
            setTimeout(() => {element.id = originalIdl}, 0);
        }
    }
});

// Global initialization for initial page load and in-page anchor navigations
document.addEventListener('DOMContentLoaded', lmm_highlightTargetTitle);
window.addEventListener('hashchange', lmm_highlightTargetTitle);
