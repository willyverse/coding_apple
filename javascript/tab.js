const tabBtnClass = $('.tab-button');
const tabCttClass = $('.tab-content');

for (let i = 0; i < tabBtnClass.length; i++) {
    tabBtnClass.eq(i).on('click', function () {

        tabBtnClass.removeClass('orange');
        tabCttClass.removeClass('show');

        tabBtnClass.eq(i).addClass('orange');
        tabCttClass.eq(i).addClass('show');
    });
}