package com.pmz.qwixx.score.sheet.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @author pasko
 *
 */
@Controller
public class SimpleScoreController {
	
	@GetMapping("/score-simple")
	public String getIndex() {
		return "score-simple";
	}
}
