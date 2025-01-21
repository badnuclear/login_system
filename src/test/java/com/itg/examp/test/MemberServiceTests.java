package com.itg.examp.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.itg.examp.MemberService;

@SpringBootTest
public class MemberServiceTests {
	//경계값분석: boundry anailze
	String rightId[];
	String wrongId[];
	String rightPw[];
	String wrongPw[];
	@Autowired
	MemberService ms;
	
	@BeforeEach
	public void setVariable() {
		
		//동치분할(동등분할) 기법
		rightId = new String[] {"aaaa","abcd","abced","@abcy","bb#cc"};
		wrongId = new String[] {"abc","aaa","ccc","@#a","@as"};
		rightPw = new String[] {"12","123123","123asd","1a2s3d4q5w6e","zxcasd"};
		wrongPw = new String[] {"1122366","123","1234","asdq","zxg4"};
		
	}
	
	//단위테스트
	@Test
   public void testPassword() {
	   
	   boolean res = false;
	   for(int i =0; i<rightId.length; i++) {
		   res = ms.checkId(rightId[i]); //올바른 아이디를 기대해서 가정
		   assertEquals(true, res,": 올바른 아이디입니다.");
	   }
	   for(int i =0; i<wrongId.length; i++) {
		   res = ms.checkId(wrongId[i]);
		   assertEquals(false,res,": 잘못된 아이디 입니다.");
	   }
   }  
	
   @Test
   public void testId() {
		   
		   boolean res = false;
		   for(int i =0; i<rightPw.length; i++) {
			   res = ms.checkId(rightPw[i]); //올바른 아이디를 기대해서 가정
			   assertEquals(true, res,": 올바른 비밀번호입니다.");
		   }
		   for(int i =0; i<wrongPw.length; i++) {
			   res = ms.checkId(wrongPw[i]);
			   assertEquals(false,res,": 잘못된 비밀번호 입니다.");
		   }
		   
		   
	   }
	
	
}
