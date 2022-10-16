const tabBtnClass = $('.tab-button');
const tabCttClass = $('.tab-content');

function 탭열기(탭번호) {
    tabBtnClass.removeClass('orange');
    tabBtnClass.eq(탭번호).addClass('orange');

    tabCttClass.removeClass('show');
    tabCttClass.eq(탭번호).addClass('show');
}

// for (let i = 0; i < tabBtnClass.length; i++) {
//     tabBtnClass.eq(i).on('click', function () {
//         탭열기(i);
//     });
// }

// 이벤트리스너 메소드는 줄이면 줄일 수록 좋음 -> 램을 많이 차지하기 때문
// 이벤트 버블링 현상을 활용하여, 상위 항목에 이벤트리스너를 하나만 사용하는 로직을 짜는 것이 좋음
// html tag 안에 data-{작명} 항목을 넣을 수 있음 ex. data-id

$('.list').click(function (e) {
    탭열기(e.target.dataset.id)
});


