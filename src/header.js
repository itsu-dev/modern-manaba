document.documentElement.style.visibility = 'hidden';

let defaults = {darkmode: false};

window.onload = () => {

    // オプションページから設定を読み込む
    chrome.storage.sync.get(defaults, function(items) {
        document.body.setAttribute('theme', 'light');
        if(items.darkmode)  document.body.setAttribute('theme', 'dark');
    });

    let mypage = document.createElement('span');
    mypage.classList.add('mynavi-button-a');
    mypage.innerHTML = 'マイページ';

    let mynaviButtonHome = document.getElementsByClassName("mynavi-button-home")[0];
    mynaviButtonHome.setAttribute('onclick', "window.location.href = 'home';");
    mynaviButtonHome.innerHTML = '';
    mynaviButtonHome.appendChild(mypage);

    let course = document.createElement('span');
    course.classList.add('mynavi-button-a');
    course.innerHTML = 'コース';

    let mynaviButtonCourse = document.getElementsByClassName("mynavi-button-course")[0];
    mynaviButtonCourse.setAttribute('onclick', "window.location.href = 'home_course';");
    mynaviButtonCourse.innerHTML = '';
    mynaviButtonCourse.appendChild(course);

    let portfolio = document.createElement('span');
    portfolio.classList.add('mynavi-button-a');
    portfolio.innerHTML = 'ポートフォリオ';

    let mynaviButtonPortfolio = document.getElementsByClassName("mynavi-button-portfolio")[0];
    mynaviButtonPortfolio.setAttribute('onclick', "window.location.href = 'home_coursetable';");
    mynaviButtonPortfolio.innerHTML = '';
    mynaviButtonPortfolio.appendChild(portfolio);

    let unsubmitted = document.createElement('span');
    unsubmitted.classList.add('mynavi-button-a');
    unsubmitted.innerHTML = '未提出課題';

    let div1 = document.createElement('div');
    div1.classList.add('mynavi-button-home');
    div1.setAttribute('onclick', "window.location.href = 'home_library_query';");
    div1.appendChild(unsubmitted);

    let reminder = document.createElement('span');
    reminder.classList.add('mynavi-button-a');
    reminder.innerHTML = 'リマインダ';

    let div2 = document.createElement('div');
    div2.classList.add('mynavi-button-home');
    div2.setAttribute('onclick', "window.location.href = 'home_library_reminder';");
    div2.appendChild(reminder);

    let mynavi = document.getElementById("mynavi");
    mynavi.innerHTML += '';
    mynavi.appendChild(div1);
    mynavi.appendChild(div2);

    let english = document.createElement('span');
    english.classList.add('mynavi-button-a');
    english.innerHTML = 'English';

    let japanese = document.createElement('span');
    japanese.classList.add('mynavi-button-a');
    japanese.innerHTML = '日本語';

    let memo = document.createElement('span');
    memo.classList.add('mynavi-button-a');
    memo.innerHTML = 'メモ一覧';

    let memoDiv = document.createElement('div');
    memoDiv.classList.add('memo-div');
    memoDiv.setAttribute('onclick', "window.location.href = 'home_usermemo';");
    memoDiv.appendChild(memo);

    let respon = document.createElement('img');
    respon.classList.add('mynavi-button-a');
    respon.setAttribute('src', '/respon8.png');
    respon.setAttribute('target', '_blank');

    let responDiv = document.createElement('div');
    responDiv.classList.add('respon-div');
    responDiv.setAttribute('onclick', "window.location.href = 'https://atmnb.tsukuba.ac.jp/attend/tsukuba?relogin=1';");
    responDiv.appendChild(respon);

    let mybuttonMenu = document.getElementById('mybutton-menu');
    mybuttonMenu.innerHTML = '';
    mybuttonMenu.appendChild(responDiv);
    mybuttonMenu.appendChild(memoDiv);

    document.getElementsByClassName("align")[0].remove();

    // 言語によってどのボタンを割り当てるか決定
    if (document.getElementsByClassName("mylang-ja")[0]) {
        let mylangJa = document.getElementsByClassName("mylang-ja")[0];
        mylangJa.innerHTML = '';
        mylangJa.setAttribute('onclick', "window.location.href = 'home_lang_en';");
        mylangJa.appendChild(english);
    } else {
        let mylangEn = document.getElementsByClassName("mylang-en")[0];
        mylangEn.innerHTML = '';
        mylangEn.setAttribute('onclick', "window.location.href = 'home_lang_ja';");
        mylangEn.appendChild(japanese);
        // ヘッダの表記を英語に変える
        document.getElementsByClassName('mynavi-button-home')[0].childNodes[0].innerText = 'My page';
        document.getElementsByClassName('mynavi-button-course')[0].childNodes[0].innerText = 'Courses';
        document.getElementsByClassName('mynavi-button-portfolio')[0].childNodes[0].innerText = 'Portfolio';
        document.getElementsByClassName("memo-div")[0].childNodes[0].innerText = "Memos"
        unsubmitted.innerHTML = 'Assignments';
        reminder.innerHTML = 'Reminders';
    }



    document.documentElement.style.visibility = '';

    // homeならヘッダを消す
    const regex = new RegExp("/ct/home.*");
    if (regex.test(location.pathname)) {
        document.getElementsByClassName("pageheader-course")[0].remove();

    // メニューバー下のヘッダがあるなら
    } else if (document.getElementsByClassName("pageheader-course").length) {
        // movieボタンの再配置
        if (document.getElementsByClassName("pageheader-course-extlink").length) {
            document.getElementsByClassName("pageheader-course-courseteacher")[0].appendChild(document.getElementsByClassName("pageheader-course-extlink")[0]);
        }

        // 小テスト、アンケート...のメニューバーの再配置
        if (document.getElementsByClassName("course-menu").length) {
            // 小テスト
            let courseMenuQuery = document.getElementsByClassName("course-menu-query")[0];
            let courseMenuQuerySpan = document.createElement("span");
            const examCount = document.getElementById("examstatus");
            courseMenuQuerySpan.innerHTML = '小テスト';
            courseMenuQuerySpan.classList.add("course-menu-a");
            courseMenuQuery.setAttribute("onclick","window.location.href = '" + courseMenuQuery.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuQuery.innerHTML = '';
            courseMenuQuery.appendChild(courseMenuQuerySpan);
            if (examCount !== null) courseMenuQuery.appendChild(examCount);

            // アンケート
            let courseMenuSurvey = document.getElementsByClassName("course-menu-survey")[0];
            let courseMenuSurveySpan = document.createElement("span");
            const surveyCount = document.getElementById("surveystatus");
            courseMenuSurveySpan.innerHTML = 'アンケート';
            courseMenuSurveySpan.classList.add("course-menu-a");
            courseMenuSurvey.setAttribute("onclick", "window.location.href = '" + courseMenuSurvey.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuSurvey.innerHTML = '';
            courseMenuSurvey.appendChild(courseMenuSurveySpan);
            if (surveyCount !== null) courseMenuSurvey.appendChild(surveyCount);

            // レポート
            let courseMenuReport = document.getElementsByClassName("course-menu-report")[0];
            let courseMenuReportSpan = document.createElement("span");
            const reportCount = document.getElementById("reportstatus");
            courseMenuReportSpan.innerHTML = 'レポート';
            courseMenuReportSpan.classList.add("course-menu-a");
            courseMenuReport.setAttribute("onclick", "window.location.href = '" + courseMenuReport.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuReport.innerHTML = '';
            courseMenuReport.appendChild(courseMenuReportSpan);
            if (reportCount !== null) courseMenuReport.appendChild(reportCount);

            // プロジェクト
            let courseMenuProject = document.getElementsByClassName("course-menu-project")[0];
            let courseMenuProjectSpan = document.createElement("span");
            const projectCount = document.getElementById("projectstatus");
            courseMenuProjectSpan.innerHTML = 'プロジェクト';
            courseMenuProjectSpan.classList.add("course-menu-a");
            courseMenuProject.setAttribute("onclick", "window.location.href = '" + courseMenuProject.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuProject.innerHTML = '';
            courseMenuProject.appendChild(courseMenuProjectSpan);
            if (projectCount !== null) courseMenuProject.appendChild(projectCount);

            // 成績
            let courseMenuGrade = document.getElementsByClassName("course-menu-grade")[0];
            let courseMenuGradeSpan = document.createElement("span");
            const gradeCount = document.getElementById("gradestatus");
            courseMenuGradeSpan.innerHTML = '成績';
            courseMenuGradeSpan.classList.add("course-menu-a");
            courseMenuGrade.setAttribute("onclick", "window.location.href = '" + courseMenuGrade.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuGrade.innerHTML = '';
            courseMenuGrade.appendChild(courseMenuGradeSpan);
            if (gradeCount !== null) courseMenuGrade.appendChild(gradeCount);

            // 掲示板
            let courseMenuBbs = document.getElementsByClassName("course-menu-bbs")[0];
            let courseMenuBbsSpan = document.createElement("span");
            courseMenuBbsSpan.innerHTML = '掲示板';
            courseMenuBbsSpan.classList.add("course-menu-a");
            courseMenuBbs.setAttribute("onclick", "window.location.href = '" + courseMenuBbs.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuBbs.innerHTML = '';
            courseMenuBbs.appendChild(courseMenuBbsSpan);

            // コースコンテンツ
            let courseMenuCourseContents = document.getElementsByClassName("course-menu-coursecontents")[0];
            let courseMenuCourseContentsSpan = document.createElement("span");
            courseMenuCourseContentsSpan.innerHTML = 'コースコンテンツ';
            courseMenuCourseContentsSpan.classList.add("course-menu-a");
            courseMenuCourseContents.setAttribute("onclick", "window.location.href = '" + courseMenuCourseContents.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuCourseContents.innerHTML = '';
            courseMenuCourseContents.appendChild(courseMenuCourseContentsSpan);
        }
        // 言語が英語か確認
        if (document.getElementsByClassName("mylang-en")[0]) {
            // メニューの表記を英語に変える
            document.getElementsByClassName('course-menu-query')[0].childNodes[0].innerText = 'Tests';
            document.getElementsByClassName('course-menu-survey')[0].childNodes[0].innerText = 'Surveys';
            document.getElementsByClassName('course-menu-report')[0].childNodes[0].innerText = 'Assignments';
            document.getElementsByClassName('course-menu-project')[0].childNodes[0].innerText = 'Projects';
            document.getElementsByClassName('course-menu-grade')[0].childNodes[0].innerText = 'Grades';
            document.getElementsByClassName('course-menu-bbs')[0].childNodes[0].innerText = 'Forum';
            document.getElementsByClassName('course-menu-coursecontents')[0].childNodes[0].innerText = 'Resources';
        }
    }

    for (let td of document.querySelectorAll("td.gradebar")) {
        td.setAttribute('style', '');
    }

    document.getElementById("mylinks");
}
