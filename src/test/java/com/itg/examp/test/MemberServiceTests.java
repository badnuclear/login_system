package com.itg.examp.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.itg.examp.MemberService;

@SpringBootTest
public class MemberServiceTests {
    String[] rightId;
    String[] wrongId;
    String[] rightPw;
    String[] wrongPw;

    
    MemberService ms=new MemberService();

    @BeforeEach
    public void setVariable() {
        rightId = new String[] {"abcde", "abcd", "a@E3ool", "bb#cc"};
        wrongId = new String[] {"aaa", "abc", "aa", "a#c", "123"};
        rightPw = new String[] {"123456", "abcdef", "password", "qwerty123"};
        wrongPw = new String[] {"214#a", "#11aa", "a@gd", "AA@EE"};
    }

    @Test
    public void testId() { // 아이디 테스트
        for (int i = 0; i < rightId.length; i++) {
            boolean res = ms.checkId(rightId[i]);
            assertEquals(true, res, "테스트 실패 - 올바른 아이디: " + rightId[i]);
        }
        for (int i = 0; i < wrongId.length; i++) {
            boolean res = ms.checkId(wrongId[i]);
            assertEquals(false, res, "테스트 실패 - 잘못된 아이디: " + wrongId[i]);
        }
    }

    @Test
    public void testPassword() { // 비밀번호 테스트
        for (String pw : rightPw) {
            boolean res = ms.checkPassword(pw);
            assertEquals(true, res, "테스트 실패 - 올바른 비밀번호: " + pw);
        }
        for (String pw : wrongPw) {
            boolean res = ms.checkPassword(pw);
            assertEquals(false, res, "테스트 실패 - 잘못된 비밀번호: " + pw);
        }
    }
}