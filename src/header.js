document.documentElement.style.visibility = 'hidden';

window.onload = () => {
    let mypage = document.createElement('span');
    mypage.classList.add('mynavi-button-a');
    mypage.innerHTML = 'マイページ';

    let mynaviButtonHome = document.getElementsByClassName("mynavi-button-home")[0];
    mynaviButtonHome.setAttribute('onclick', "window.location.href = 'home';")
    mynaviButtonHome.innerHTML = '';
    mynaviButtonHome.appendChild(mypage);

    let course = document.createElement('span');
    course.classList.add('mynavi-button-a');
    course.innerHTML = 'コース';

    let mynaviButtonCourse = document.getElementsByClassName("mynavi-button-course")[0];
    mynaviButtonCourse.setAttribute('onclick', "window.location.href = 'home_course';")
    mynaviButtonCourse.innerHTML = '';
    mynaviButtonCourse.appendChild(course);

    let portfolio = document.createElement('span');
    portfolio.classList.add('mynavi-button-a');
    portfolio.innerHTML = 'ポートフォリオ';

    let mynaviButtonPortfolio = document.getElementsByClassName("mynavi-button-portfolio")[0];
    mynaviButtonPortfolio.setAttribute('onclick', "window.location.href = 'home_coursetable';")
    mynaviButtonPortfolio.innerHTML = '';
    mynaviButtonPortfolio.appendChild(portfolio);

    let unsubmitted = document.createElement('span');
    unsubmitted.classList.add('mynavi-button-a');
    unsubmitted.innerHTML = '未提出課題';

    let div1 = document.createElement('div');
    div1.classList.add('mynavi-button-home');
    div1.setAttribute('onclick', "window.location.href = 'home_library_query';")
    div1.appendChild(unsubmitted);

    let reminder = document.createElement('span');
    reminder.classList.add('mynavi-button-a');
    reminder.innerHTML = 'リマインダ';

    let div2 = document.createElement('div');
    div2.classList.add('mynavi-button-home');
    div2.setAttribute('onclick', "window.location.href = 'home_library_reminder';")
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

    if (document.getElementsByClassName("mylang-ja")[0]) {
        let mylangJa = document.getElementsByClassName("mylang-ja")[0];
        mylangJa.innerHTML = '';
        mylangJa.setAttribute('onclick', "window.location.href = 'home_lang_en';")
        mylangJa.appendChild(english);
    } else {
        let mylangEn = document.getElementsByClassName("mylang-en")[0];
        mylangEn.innerHTML = '';
        mylangEn.setAttribute('onclick', "window.location.href = 'home_lang_ja';")
        mylangEn.appendChild(japanese);
    }


    let memo = document.createElement('span');
    memo.classList.add('mynavi-button-a');
    memo.innerHTML = 'メモ一覧';

    let memoDiv = document.createElement('div');
    memoDiv.classList.add('memo-div');
    memoDiv.setAttribute('onclick', "window.location.href = 'home_usermemo';")
    memoDiv.appendChild(memo);

    let respon = document.createElement('img');
    respon.classList.add('mynavi-button-a');
    respon.setAttribute('src', '/respon8.png');
    respon.setAttribute('target', '_blank');

    let responDiv = document.createElement('div');
    responDiv.classList.add('respon-div');
    responDiv.setAttribute('onclick', "window.location.href = 'https://atmnb.tsukuba.ac.jp/attend/tsukuba?relogin=1';")
    responDiv.appendChild(respon);

    let mybuttonMenu = document.getElementById('mybutton-menu');
    mybuttonMenu.innerHTML = '';
    mybuttonMenu.appendChild(responDiv);
    mybuttonMenu.appendChild(memoDiv);

    document.getElementsByClassName("align")[0].remove();

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
            courseMenuQuerySpan.innerHTML = '小テスト';
            courseMenuQuerySpan.classList.add("course-menu-a");
            courseMenuQuery.setAttribute("onclick","window.location.href = '" + courseMenuQuery.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuQuery.innerHTML = '';
            courseMenuQuery.appendChild(courseMenuQuerySpan);

            // アンケート
            let courseMenuSurvey = document.getElementsByClassName("course-menu-survey")[0];
            let courseMenuSurveySpan = document.createElement("span");
            courseMenuSurveySpan.innerHTML = 'アンケート';
            courseMenuSurveySpan.classList.add("course-menu-a");
            courseMenuSurvey.setAttribute("onclick", "window.location.href = '" + courseMenuSurvey.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuSurvey.innerHTML = '';
            courseMenuSurvey.appendChild(courseMenuSurveySpan);

            //　レポート
            let courseMenuReport = document.getElementsByClassName("course-menu-report")[0];
            let courseMenuReportSpan = document.createElement("span");
            courseMenuReportSpan.innerHTML = 'レポート';
            courseMenuReportSpan.classList.add("course-menu-a");
            courseMenuReport.setAttribute("onclick", "window.location.href = '" + courseMenuReport.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuReport.innerHTML = '';
            courseMenuReport.appendChild(courseMenuReportSpan);

            // プロジェクト
            let courseMenuProject = document.getElementsByClassName("course-menu-project")[0];
            let courseMenuProjectSpan = document.createElement("span");
            courseMenuProjectSpan.innerHTML = 'プロジェクト';
            courseMenuProjectSpan.classList.add("course-menu-a");
            courseMenuProject.setAttribute("onclick", "window.location.href = '" + courseMenuProject.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuProject.innerHTML = '';
            courseMenuProject.appendChild(courseMenuProjectSpan);

            // 成績
            let courseMenuGrade = document.getElementsByClassName("course-menu-grade")[0];
            let courseMenuGradeSpan = document.createElement("span");
            courseMenuGradeSpan.innerHTML = '成績';
            courseMenuGradeSpan.classList.add("course-menu-a");
            courseMenuGrade.setAttribute("onclick", "window.location.href = '" + courseMenuGrade.getElementsByTagName("a")[0].getAttribute("href") + "';");
            courseMenuGrade.innerHTML = '';
            courseMenuGrade.appendChild(courseMenuGradeSpan);

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
    }

    document.getElementById("mylinks");
}
