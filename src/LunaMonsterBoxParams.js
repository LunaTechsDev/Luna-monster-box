/*:
@author LunaTechs - Kino
@plugindesc Allows you to randomly choose from a list of monsters 
within a common event <LunaMnsterBox>.
@target MZ MV
*
* @help
* Version 1.00
//=============================================================================
//  Introduction
//=============================================================================
*
* This plugin allows you to create boxes that spawn monsters, or just spawn
* monsters via common events. Instead of making branches for spawning monsters,
* do it in a single script call.
*
//=============================================================================
//  Script Calls
//=============================================================================
*
* $gameTemp.monsterBox(troopIDs, canEscape, canLose);
* This will setup a battle instantly on the game, where you can fight enemies.
*
* Example: $gameTemp.monsterBox([1, 2, 3, 4], true, true);
* This means that any troops from 1 - 4 will be chosen and the player team
* can escape and lose.
*/