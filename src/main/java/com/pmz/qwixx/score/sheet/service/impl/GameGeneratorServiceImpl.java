package com.pmz.qwixx.score.sheet.service.impl;

import org.springframework.stereotype.Service;

import com.pmz.qwixx.score.sheet.model.Game;
import com.pmz.qwixx.score.sheet.service.GameGeneratorService;

/**
 * @author pasko
 *
 */
@Service
public class GameGeneratorServiceImpl implements GameGeneratorService {

	private static final String SIMPLE_ONE_PLAYER_VIEW = "score-simple-one";
	private static final String SIMPLE_TWO_PLAYER_VIEW = "score-simple-two";
	private static final String SIMPLE_THREE_PLAYER_VIEW = "score-simple-three";
	private static final String SIMPLE_FOUR_PLAYER_VIEW = "score-simple-four";
	private static final String SIMPLE_FIVE_PLAYER_VIEW = "score-simple-five";
	
	private static final String character_ONE_PLAYER_VIEW = "score-character-one";
	private static final String character_TWO_PLAYER_VIEW = "score-character-two";
	private static final String character_THREE_PLAYER_VIEW = "score-character-three";
	private static final String character_FOUR_PLAYER_VIEW = "score-character-four";
	private static final String character_FIVE_PLAYER_VIEW = "score-character-five";

	@Override
	public String generateGameView(Game game) {
		if(game.isGameWithCharacters()) {
			return getViewBasedOnPlayersAndType(game, character_ONE_PLAYER_VIEW, character_TWO_PLAYER_VIEW, 
					character_THREE_PLAYER_VIEW, character_FOUR_PLAYER_VIEW, character_FIVE_PLAYER_VIEW);
		} else {
			return getViewBasedOnPlayersAndType(game, SIMPLE_ONE_PLAYER_VIEW, SIMPLE_TWO_PLAYER_VIEW,
					SIMPLE_THREE_PLAYER_VIEW, SIMPLE_FOUR_PLAYER_VIEW, SIMPLE_FIVE_PLAYER_VIEW);
		}
	}

	
	private String getViewBasedOnPlayersAndType(Game game, String onePlayerView, String twoPlayersView,
			String threePlayersView, String fourPlayersView, String fivePlayersView) {
		int players = game.getPlayers();
		switch(players) {
		case 1:
			return onePlayerView;
		case 2:
			return twoPlayersView;
		case 3:
			return threePlayersView;
		case 4:
			return fourPlayersView;
		case 5:
			return fivePlayersView;
			
		default:
			return twoPlayersView;
		}
		
		
	}

}
