package com.pmz.qwixx.score.sheet.service;

import com.pmz.qwixx.score.sheet.model.Game;

/**
 * @author pasko
 *
 */

public interface GameGeneratorService {
	
	/*
	 * Generate Game View based on the number of players
	 * and the type of game
	 */
	public String generateGameView(Game game);
	

}
