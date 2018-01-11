package com.pmz.qwixx.score.sheet.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.pmz.qwixx.score.sheet.model.Game;

/**
 * @author pasko
 *
 */
@Controller
public class SimpleScoreController {
	
	@Autowired
	private Game game;
	
	@GetMapping("/score-simple")
	public String getSimpleScoreGame(Model model) {
		model.addAttribute("game", game);
		return "score-simple";
	}
	
	@PostMapping("/score-simple")
	public String submitSimpleScoreGame(@ModelAttribute("game") Game game) {
		//TODO
		return "index";
	}
}
