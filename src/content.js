document.documentElement.style.visibility = 'hidden';

window.onload = () => {
    let mynaviButtonHome = document.getElementsByClassName("mynavi-button-home")[0];
    mynaviButtonHome.innerHTML = '<a href="home" class="mynavi-button-a">マイページ</a>';

    let mynaviButtonCourse = document.getElementsByClassName("mynavi-button-course")[0];
    mynaviButtonCourse.innerHTML = '<a href="home_course" class="mynavi-button-a">コース</a>';

    let mynaviButtonPortfolio = document.getElementsByClassName("mynavi-button-portfolio")[0];
    mynaviButtonPortfolio.innerHTML = '<a href="home_coursetable" class="mynavi-button-a">ポートフォリオ</a>';

    let mynavi = document.getElementById("mynavi")
    mynavi.innerHTML += '' +
        '<div class="mynavi-button-home">' +
            '<a href="home_library_query" class="mynavi-button-a">未提出課題</a>' +
        '</div>' +
        '<div class="mynavi-button-home">' +
            '<a href="home_library_reminder" class="mynavi-button-a">リマインダ</a>' +
        '</div>';

    document.documentElement.style.visibility = '';

    let mylangJa = document.getElementsByClassName("mylang-ja")[0]
    mylangJa.innerHTML = '<a href="home_lang_en" class="mynavi-button-a">English</a>';

    document.getElementsByClassName("align")[0].remove();
    if (document.getElementsByClassName("pageheader-course").length) {
        document.getElementsByClassName("pageheader-course")[0].remove();
    }
}
