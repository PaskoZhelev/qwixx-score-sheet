package com.pmz.qwixx.score.sheet.model;

import org.springframework.stereotype.Component;

/**
 * @author pasko
 *
 */
@Component
public class Game {
	
	private int players;
	private boolean gameWithCharacters;
	
	public int getPlayers() {
		return players;
	}
	public void setPlayers(int players) {
		this.players = players;
	}
	public boolean isGameWithCharacters() {
		return gameWithCharacters;
	}
	public void setGameWithCharacters(boolean gameWithCharacters) {
		this.gameWithCharacters = gameWithCharacters;
	}
	
	
}
