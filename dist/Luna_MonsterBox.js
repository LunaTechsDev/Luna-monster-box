//=============================================================================
// Luna_MonsterBox.js
//=============================================================================
//=============================================================================
// Build Date: 2020-08-22 22:09:02
//=============================================================================
//=============================================================================
// Made with LunaTea -- Haxe
//=============================================================================

// Generated by Haxe 4.1.3
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
* $gameTemp.monsterBox(troopIDs, canEscape, canLose)
* This will setup a battle instantly on the game, where you can fight enemies.
*
* Example: $gameTemp.monsterBox([1, 2, 3, 4], true, true)
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
(function ($global) { "use strict"
class EReg {
	constructor(r,opt) {
		this.r = new RegExp(r,opt.split("u").join(""))
	}
	match(s) {
		if(this.r.global) {
			this.r.lastIndex = 0
		}
		this.r.m = this.r.exec(s)
		this.r.s = s
		return this.r.m != null;
	}
	matched(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched")
		}
	}
}
class HxOverrides {
	static cca(s,index) {
		let x = s.charCodeAt(index)
		if(x != x) {
			return undefined;
		}
		return x;
	}
	static substr(s,pos,len) {
		if(len == null) {
			len = s.length
		} else if(len < 0) {
			if(pos == 0) {
				len = s.length + len
			} else {
				return "";
			}
		}
		return s.substr(pos,len);
	}
	static now() {
		return Date.now();
	}
}
class Lambda {
	static exists(it,f) {
		let x = $getIterator(it)
		while(x.hasNext()) if(f(x.next())) {
			return true;
		}
		return false;
	}
}
class LunaMonsterBox {
	static main() {
		
//=============================================================================
// Scene_Item
//=============================================================================
      
		let sceneItemUseItem = Scene_Item.prototype.useItem
		Scene_Item.prototype.useItem = function() {
			sceneItemUseItem.call(this)
			let self = this
			return self.processMonsterBox(self.item());
		}
		Scene_Item.prototype.processMonsterBox = function(item) {
			if(DataManager.isItem(item) && item.consumable) {
				let re = new EReg("<\\s*TroopList\\s*:\\s*([^<>]*)\\s*>","ig")
				if(re.match(item.note)) {
					let _this = StringTools.trim(re.matched(1)).split(",")
					let result = new Array(_this.length)
					let _g = 0
					let _g1 = _this.length
					while(_g < _g1) {
						let i = _g++
						let string = StringTools.trim(_this[i])
						result[i] = parseInt(string,10)
					}
					if(!Lambda.exists(result,function(id) {
						return typeof(id) != "number";
					})) {
						$gameTemp.monsterBox(result)
					}
				}
			}
		}
		
//=============================================================================
// Game_Temp
//=============================================================================
      
		Game_Temp.prototype.monsterBox = function(troopIds,canEscape,canLose) {
			let id = Math.random()
			if(canEscape == null) {
				canEscape = false
			}
			if(canLose == null) {
				canLose = false
			}
			BattleManager.setup(troopIds[Math.floor(id * (troopIds.length - 1))],canEscape,canLose)
			$gamePlayer.makeEncounterCount()
			SceneManager.push(Scene_Battle)
		}
	}
}
class StringTools {
	static isSpace(s,pos) {
		let c = HxOverrides.cca(s,pos)
		if(!(c > 8 && c < 14)) {
			return c == 32;
		} else {
			return true;
		}
	}
	static ltrim(s) {
		let l = s.length
		let r = 0
		while(r < l && StringTools.isSpace(s,r)) ++r
		if(r > 0) {
			return HxOverrides.substr(s,r,l - r);
		} else {
			return s;
		}
	}
	static rtrim(s) {
		let l = s.length
		let r = 0
		while(r < l && StringTools.isSpace(s,l - r - 1)) ++r
		if(r > 0) {
			return HxOverrides.substr(s,0,l - r);
		} else {
			return s;
		}
	}
	static trim(s) {
		return StringTools.ltrim(StringTools.rtrim(s));
	}
}
class haxe_Exception extends Error {
	constructor(message,previous,native) {
		super(message)
		this.message = message
		this.__previousException = previous
		this.__nativeException = native != null ? native : this
	}
	get_native() {
		return this.__nativeException;
	}
	static thrown(value) {
		if(((value) instanceof haxe_Exception)) {
			return value.get_native();
		} else if(((value) instanceof Error)) {
			return value;
		} else {
			let e = new haxe_ValueException(value)
			return e;
		}
	}
}
class haxe_ValueException extends haxe_Exception {
	constructor(value,previous,native) {
		super(String(value),previous,native)
		this.value = value
	}
}
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0
		this.array = array
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
class _$LTGlobals_$ {
}
class utils_Fn {
	static proto(obj) {
		return obj.prototype;
	}
}
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance)
}
LunaMonsterBox.main()
})({})
