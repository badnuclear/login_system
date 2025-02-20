package com.itg.examp;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class LoginSystemApplication {

	public static void main(String[] args) {
		
		System.out.println("서버 실행 확인");
		SpringApplication.run(LoginSystemApplication.class, args);
	}

}
