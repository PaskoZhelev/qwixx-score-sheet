package com.pmz.qwixx.score.sheet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
@ComponentScan("com.pmz.qwixx.score.sheet")
public class QwixxScoreSheetApplication {

	public static void main(String[] args) {
		SpringApplication.run(QwixxScoreSheetApplication.class, args);
	}
}
