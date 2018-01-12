package com.pmz.qwixx.score.sheet.controller;





import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.pmz.qwixx.score.sheet.model.Game;
import com.pmz.qwixx.score.sheet.service.GameGeneratorService;

/**
 * @author pasko
 *
 */
@Controller
public class ScoreController {
	
	private static final Logger logger = LoggerFactory.getLogger(ScoreController.class);
	
	@Autowired
	private Game game;
	@Autowired
	private GameGeneratorService gameGeneratorService;
	
	@GetMapping("/score-simple")
	public String getSimpleScoreGame(Model model) {
		game.setGameWithCharacters(false);
		model.addAttribute("game", game);
		return "score-simple";
	}
	
	@PostMapping("/score-simple")
	public String submitSimpleScoreGame(@ModelAttribute("game") Game game) {	
		logger.info("{} ", game.getPlayers());
		return gameGeneratorService.generateGameView(game);
	}
	
	@GetMapping({"/score-character"})
	public String getScoreGameWithChars(Model model) {
		game.setGameWithCharacters(true);
		model.addAttribute("game", game);
		return "score-character";
	}
	
	@PostMapping({"/score-character"})
	public String submitScoreGameWithChars(@ModelAttribute("game") Game game) {
		return gameGeneratorService.generateGameView(game);
	}
}
