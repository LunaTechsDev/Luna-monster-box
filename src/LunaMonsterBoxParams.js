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

MIT License

Copyright (c) 2020 LunaTechsDev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
*/