//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets = [];
class DataSet {
  constructor(sub_title, menuNum) {
    this.sub_title = sub_title;
  }
  user_fill = "";
  sub_content = [];
  sub_img = [];
  set_content(content) {
    this.sub_content.push(content);
  }
  set_img(num, obj) {
    if (!this.sub_img[num]) {
      this.sub_img[num] = [];
    }
    this.sub_img[num].push(obj);
  }
  set_fill(ufill) {
    this.user_fill = ufill;
  }
}
//******************************* build describe ************************************************
// 포트폴리오제시항목의 1.
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다.
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"})
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축"); //메인 타이틀 //메뉴번호
d1.set_content(
  "사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다."
); //서브 타이틀
d1.set_img(0, {
  imgtitle: "요구사항 명세서",
  imgurl:
    "https://drive.google.com/file/d/1coI816jMUZlOEKUUAwjVs3IGe299Sbon/view?usp=drive_link",
  imglog: "요구사항 명세서",
  sourceurl:
    "https://docs.google.com/document/d/1qQB-a8vxE0IEFTQuqECyQfRu86l1odpVYwtVK2SbqHk/edit?usp=drive_link",
}); //이미지타이틀

d1.set_content(
  "목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다."
);
d1.set_img(1, {
  imgtitle: "개발언어선정",
  imgurl:
    "https://drive.google.com/file/d/1dB5BFVfNOwH7cH2PL9D2he5IRSaMLZCK/view?usp=drive_link",
  imglog: "개발언어 선정",
  sourceurl:
    "https://docs.google.com/document/d/1KDdTqMNlEEeuWGtog3AsUIQo_KFAznTm8MEg8h-0T3s/edit?usp=drive_link",
}); //이미지타이틀
d1.set_img(1, {
  imgtitle: "스프링프레임워크",
  imgurl:
    "https://drive.google.com/file/d/1847tANq4D2pjhsC7cao-sQ_5LDcj85KI/view?usp=drive_link",
  imglog: "오픈소스 스프링프레임워크 v4.27.0",
  sourceurl: "",
}); //이미지타이틀
d1.set_img(1, {
  imgtitle: "마리아DB",
  imgurl:
    "https://drive.google.com/file/d/1TuqlPd2n57yRQ47gKpxwUQVT-d1wgO8l/view?usp=drive_link",
  imglog: "오픈소스 마리아DB v11.62",
  sourceurl: "",
}); //이미지타이틀

d1.set_content(
  "코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다."
);
d1.set_img(2, {
  imgtitle: "개발환경 구축 명세",
  imgurl:
    "https://drive.google.com/file/d/1NvaArZwakXWLvKN4-e4phuuqrixlVv71/view?usp=drive_link",
  imglog:
    "운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",
  sourceurl:
    "https://docs.google.com/document/d/16_IOWZKq3GoWnhgjZ2bYBBvKN_WPr-lhsPxpS4Fdruw/edit?usp=drive_link",
}); //이미지타이틀
d1.set_img(2, {
  imgtitle: "개발도구 Spring Boot 4",
  imgurl:
    "https://drive.google.com/file/d/13p1tvBbCVEh8CKTzFK6fBw1S5MEns1as/view?usp=drive_link",
  imglog: "자바 스프링 서버단 개발을 위한 도구",
  sourceurl: "",
}); //이미지타이틀
d1.set_img(2, {
  imgtitle: "개발 도구 Visual Studio Code",
  imgurl:
    "https://drive.google.com/file/d/1NRtmIEa6ubxRSL3k0sLVuyP03S_O0nqd/view?usp=drive_link",
  imglog: "로그인 웹 페이지 디자인 및 프론트엔드 개발을 위한 도구",
  sourceurl: "",
}); //이미지타이틀
d1.set_img(2, {
  imgtitle: "테스트도구 Postmen",
  imgurl:
    "https://drive.google.com/file/d/1iZeMgcuT9qbOU-ROjvz8wmlH7Bg-k685/view?usp=drive_link",
  imglog:
    "웹 서버와 데이터 베이스간 데이터 연결 및 저장을 확인 하기 위한 테스트 도구",
  sourceurl: "",
}); //이미지타이틀

d1.set_fill(
  "서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장"
); //사용자 에필로그
data_sets.push(d1);

// menu2 =============================================================
//서브 타이틀
let d2 = new DataSet("공통모듈구현"); //메인타이틀
d2.set_content("공통모듈구현 분리 전 후");
d2.set_img(0, {
  imgtitle: "공통 모듈 구현 분리 전",
  imgurl:
    "https://drive.google.com/file/d/10_nOuyofiVcBM0RKQmXGtLGdPIstxXwz/view?usp=drive_link",
  imglog: "공통 모듈 분리 대상과 분리 전",
  sourceurl: "",
}); //이미지타이틀
d2.set_img(0, {
  imgtitle: "공통 모듈 구현 분리 JS",
  imgurl:
    "https://drive.google.com/file/d/1CSZHRETaFbJ4Q_zhn1N9xos7dEVOu1sd/view?usp=drive_link",
  imglog: "로그인과 로그아웃 모듈을 분리하여 공통 모듈을 제작 ",
  sourceurl: "",
}); //이미지타이틀
d2.set_img(0, {
  imgtitle: "공통 모듈 구현 분리 페이지",
  imgurl:
    "https://drive.google.com/file/d/1cZpXqSrkoA8o0KAcbxtPtn-gZaRVXldQ/view?usp=drive_link",
  imglog: "공통 모듈 분리 및 분리 페이지 ",
  sourceurl: "",
}); //이미지타이틀

//테스트 케이스
d2.set_content("테스트케이스를 작성");
d2.set_img(1, {
  imgtitle: "테스트케이스",
  imgurl:
    "https://drive.google.com/file/d/1cZpXqSrkoA8o0KAcbxtPtn-gZaRVXldQ/view?usp=drive_link",
  imglog: "테스트 케이스 작성전",
  sourceurl: "",
}); //이미지타이틀

//단위 테스트
d2.set_content("단위테스트를 작성");
d2.set_img(2, {
  imgtitle: "단위테스트",
  imgurl:
    "https://drive.google.com/file/d/1cZpXqSrkoA8o0KAcbxtPtn-gZaRVXldQ/view?usp=drive_link",
  imglog: "단위 테스트 작성전 ",
  sourceurl: "",
}); //이미지타이틀

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정"); //사용자 에필로그
data_sets.push(d2);

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현"); //메인타이틀
d3.set_content("회원가입구현"); //서브타이틀
d3.set_img(0, {
  imgtitle: "로그인 인덱스 HTML 소스 코드 구현",
  imgurl:
    "https://drive.google.com/file/d/1Mk3h_sA_0gMp5dmnGXc9pQIkujXhXUqs/view?usp=drive_link",
  imglog: "로그인과 회원가입을 위한 인덱스 HTML 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/resources/static/index.html",
}); //이미지타이틀
d3.set_img(0, {
  imgtitle: "멤버 XML 구현",
  imgurl:
    "https://drive.google.com/file/d/1wTEwOLWLCfMg5AqQtLIzRyS9rwDCXL7S/view?usp=drive_link",
  imglog: "회원가입을 위한 멤버 mapper XML를 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/java/com/itg/examp/config/memberMapper.xml",
}); //이미지타이틀
d3.set_img(0, {
  imgtitle: "회원가입 컨트롤러 구현",
  imgurl:
    "https://drive.google.com/file/d/1QV_xj5krTMvIjdOyMiFaP-Cnu2YhWWRG/view?usp=drive_link",
  imglog:
    "요구사항에 맞게 아이디는 4자리 비밀번호는 6자리 이상으로 하여 컨트롤러 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/java/com/itg/examp/MemberController.java",
}); //이미지타이틀
d3.set_img(0, {
  imgtitle: "로그인 페이지 회원가입 페이지",
  imgurl:
    "https://drive.google.com/file/d/1e16LKOUkyjhuoSO9FY1fbViA2smsszB8/view?usp=drive_link",
  imglog: "로그인페이지 에서 회원가입 페이지로 이동",
  sourceurl: "",
}); //이미지타이틀
d3.set_img(0, {
  imgtitle: "회원가입에서 임의값을 삽입 ",
  imgurl:
    "https://drive.google.com/file/d/1jqnsM4r85ToBvoBb47ySIr8QV7JxDL7W/view?usp=drive_link",
  imglog: "회원가입에서 임의값을 삽입하여 회원가입을 진행",
  sourceurl: "",
}); //이미지타이틀
d3.set_img(0, {
  imgtitle: "회원가입 성공",
  imgurl:
    "https://drive.google.com/file/d/1Qjp04i4nWRIvwH3HBiwHlTKsK_rYO6Om/view?usp=drive_link",
  imglog: "임의값을 삽입하여 회원가입에 성공",
  sourceurl: "",
}); //이미지타이틀
d3.set_img(0, {
  imgtitle: "회원가입에 성공하여 DB에 저장",
  imgurl:
    "https://drive.google.com/file/d/1NsgPVIvOz52XeEO-sxP0osR7oA7mYL1a/view?usp=drive_link",
  imglog: "회원가입에 임의값을 입력하여 회원가입에 성공후 DB에 저장된 모습",
  sourceurl: "",
}); //이미지타이틀

d3.set_content("회원로그인구현");
d3.set_img(1, {
  imgtitle: "로그인을 위한 컨트롤러 구현",
  imgurl:
    "https://drive.google.com/file/d/1QhsLtLcHG9KEyhmJUFlvCGR2rv21EXdp/view?usp=drive_link",
  imglog: "DB접근후 로그인을 하기위해 컨트롤러 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/java/com/itg/examp/MemberController.java",
}); //이미지타이틀
d3.set_img(1, {
  imgtitle: "로그인을 위한 자바스크립트 구현",
  imgurl:
    "https://drive.google.com/file/d/1-44IBe8RKUgi-E797-75LUxAKDh_m-1y/view?usp=drive_link",
  imglog: "자바스크립트를 이용해 DB와 회원가입 웹을 비동기적 통신을 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/resources/static/common.js",
}); //이미지타이틀
d3.set_img(1, {
  imgtitle: "로그인을 위한 자바스크립트 구현",
  imgurl:
    "https://drive.google.com/file/d/1U4lLTFY464XGlbUHHWSgxULzvALXMvXf/view?usp=drive_link",
  imglog: "자바스크립트를 이용해 DB와 회원가입 웹을 비동기적 통신을 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/resources/static/index.html",
}); //이미지타이틀
d3.set_img(1, {
  imgtitle: "로그인 테스트",
  imgurl:
    "https://drive.google.com/file/d/1sdAKrM12KAO7yGfguwSp8k0B9LvUN7Gi/view?usp=drive_link",
  imglog: "임의값으로 회원가입한 정보로 로그인 진행 및 성공하는 모습  ",
  sourceurl: "",
}); //이미지타이틀
d3.set_content("회원 로그아웃 구현");
d3.set_img(2, {
  imgtitle: "회원 로그아웃 구현",
  imgurl:
    "https://drive.google.com/file/d/1dXO6xGqLGg0ZAhqPgke4r5P-ztAfCBSw/view?usp=drive_link",
  imglog:
    "회원 로그아웃을 할려면 세션을 끊어야 하기 때문에 세션을 끊는 컨트롤러 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/java/com/itg/examp/MemberController.java",
}); //이미지타이틀
d3.set_img(2, {
  imgtitle: "회원 로그아웃 구현",
  imgurl:
    "https://drive.google.com/file/d/177Xh-J2APiC8MYr8FkbTrJC1qXixrUIN/view?usp=drive_link",
  imglog: "회원 로그아웃을 위해 자비스크립트를 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/resources/static/common.js",
}); //이미지타이틀
d3.set_img(2, {
  imgtitle: "회원 로그아웃 구현",
  imgurl:
    "https://drive.google.com/file/d/1smi6M-tQ_K40VyusI35xB3E343pRZb1e/view?usp=drive_link",
  imglog:
    "임의값으로 로그인한 세션을 이용해 회원 로그아웃 진행하여 성공하는 모습",
  sourceurl: "",
}); //이미지타이틀

d3.set_content("회원리스트 출력 구현");
d3.set_img(3, {
  imgtitle: "회원리스트 출력 구현",
  imgurl:
    "https://drive.google.com/file/d/1FaXSV847kcrQ31dudl7NzFK8b4MY9Eus/view?usp=drive_link",
  imglog:
    "기존에 있던 회원DB를 이용해 리스트를 나오게 해야하기 때문에 리스트 컨트롤러 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/java/com/itg/examp/MemberController.java",
}); //이미지타이틀
d3.set_img(3, {
  imgtitle: "회원리스트 출력 구현",
  imgurl:
    "https://drive.google.com/file/d/1KLPIac8tt2uVoejqsH7Osl-cKaeLfTsK/view?usp=drive_link",
  imglog: "DB와 비동기적 통신으로 자바스크립트를 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/resources/static/index.html",
}); //이미지타이틀
d3.set_img(3, {
  imgtitle: "회원리스트 출력 구현",
  imgurl:
    "https://drive.google.com/file/d/1viZRg3wdfCn4knwMc0O9W2ZSzURNYq_s/view?usp=drive_link",
  imglog: "로그인하여 회원리스트를 출력하는 모습",
  sourceurl: "",
}); //이미지타이틀

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정"); //사용자 에필로그
data_sets.push(d3);

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현"); //메인타이틀

d4.set_content("배치스케줄구현"); //서브타이틀
d4.set_img(0, {
  imgtitle: "배치 스케줄 구현",
  imgurl:
    "https://drive.google.com/file/d/12z36RKs_QOhp7LFnPSM7j1ounfwLgYH7/view?usp=drive_link",
  imglog: "배치 프로그램을 사용하기 위한 빌드 셋팅",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/build.gradle",
}); //이미지타이틀
d4.set_img(0, {
  imgtitle: "배치 스케줄 구현",
  imgurl:
    "https://drive.google.com/file/d/1kUEyr7kkYWWv8V1hzrKeZxYR7fS5u5gC/view?usp=drive_link",
  imglog: "배치 스케줄 구현을 위한 JOB 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/java/com/itg/examp/job/BatchConfiguration.java",
}); //이미지타이틀
d4.set_img(0, {
  imgtitle: "배치 스케줄 구현",
  imgurl:
    "https://drive.google.com/file/d/1aw5j33hE3feXZlEBO8Da8eMqwLo-3MOG/view?usp=drive_link",
  imglog: "배치 스케줄 구현",
  sourceurl:
    "https://github.com/badnuclear/login_system/blob/main/src/main/java/com/itg/examp/job/BatchSchedule.java",
}); //이미지타이틀
d4.set_img(0, {
  imgtitle: "배치 스케줄 테스트",
  imgurl:
    "https://drive.google.com/file/d/1SoQO57QmdHBYFK5HKD3fpf-B508OaTSy/view?usp=drive_link",
  imglog: "배치 스케줄 테스트 하는 모습",
  sourceurl: "",
}); //이미지타이틀
data_sets.push(d4);
