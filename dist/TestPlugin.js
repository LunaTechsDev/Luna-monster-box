//=============================================================================
// TestPlugin.js
//=============================================================================
//=============================================================================
// Build Date: 2020-08-22 22:04:13
//=============================================================================
//=============================================================================
// Made with LunaTea -- Haxe
//=============================================================================
/*
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
SOFTWARE.
*/
//=============================================================================
// TestPlugin.js
//=============================================================================
//=============================================================================
// Build Date: 2020-08-22 21:20:14
//=============================================================================
//=============================================================================
// Made with LunaTea -- Haxe
//=============================================================================
/*
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
SOFTWARE.
*/
//=============================================================================
// TestPlugin.js
//=============================================================================
//=============================================================================
// Build Date: 2020-08-22 20:49:14
//=============================================================================
//=============================================================================
// Made with LunaTea -- Haxe
//=============================================================================
/*
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
SOFTWARE.
*/
//=============================================================================
// TestPlugin.js
//=============================================================================
//=============================================================================
// Build Date: 2020-08-22 20:48:40
//=============================================================================
//=============================================================================
// Made with LunaTea -- Haxe
//=============================================================================
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
SOFTWARE.

//=============================================================================
// TestPlugin.js
//=============================================================================
//=============================================================================
// Build Date: 2020-08-17 22:31:56
//=============================================================================
//=============================================================================
// Made with LunaTea -- Haxe
//=============================================================================

//=============================================================================
//  Contact Information
//=============================================================================
/*
*
*
*/

// Generated by Haxe 4.1.3
/*:
@author Test
@plugindesc An extension to the core Message Window functionality
to support Visual Novels <TestPlugin>.

@param Text Speed 
@desc The speed at which characters will be rendered
@default 2

@help
Version: 1.00
Version Log:
Now you can change the text speed at will using escape characters
inside the window.
Example: \\TS[30] updates the text speed to super slow 30.
Note: The [30] will appear in the editor, but not in game.

Instructions:
You set your text speed in the plugin menu.
This is the speed that the characters will be drawn at.

Contact me via forums username: Kino.
Hope this plugin helps and enjoy!
*/
(function ($global) { "use strict"
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {};
Math.__name__ = true
class TestPlugin {
	static main() {
		console.log("src/TestPlugin.hx:16:",Sprite_Base)
		TestPlugin.textSpeed = PluginManager.parameters("TestPlugin")["Text Speed"]
		console.log("src/TestPlugin.hx:22:",TestPlugin.textSpeed)
		Window_Message = MessageWinNew
	}
}
TestPlugin.__name__ = true
class MessageWinNew extends Window_Message {
	constructor(x,y,width,height) {
		super(x,y,width,height)
		this.originalTextSpeed = TestPlugin.textSpeed
		this.activeTextSpeed = TestPlugin.textSpeed
	}
	updateTextSpeed(value) {
		this.activeTextSpeed = value
	}
	processEscapeCharacter(code,textState) {
		switch(code) {
		case "!":
			this.startPause()
			break
		case "$":
			this._goldWindow.open()
			break
		case ".":
			this.startWait(15)
			break
		case "<":
			this._lineShowFast = false
			break
		case ">":
			this._lineShowFast = true
			break
		case "TS":
			this.updateTextSpeed(this.obtainEscapeParam(textState) | 0)
			break
		case "^":
			this._pauseSkip = true
			break
		default:
			super.processEscapeCharacter(code,textState)
		}
	}
	processNormalCharacter(textState) {
		super.processNormalCharacter(textState)
		this.startWait(this.activeTextSpeed)
	}
	terminateMessage() {
		this.activeTextSpeed = this.originalTextSpeed
		super.terminateMessage()
	}
}
MessageWinNew.__name__ = true
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
haxe_iterators_ArrayIterator.__name__ = true
class js_Boot {
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		let t = typeof(o)
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object"
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(o.__enum__) {
				let e = $hxEnums[o.__enum__]
				let n = e.__constructs__[o._hx_index]
				let con = e[n]
				if(con.__params__) {
					s = s + "\t"
					return n + "(" + ((function($this) {
						var $r
						let _g = []
						{
							let _g1 = 0
							let _g2 = con.__params__
							while(true) {
								if(!(_g1 < _g2.length)) {
									break
								}
								let p = _g2[_g1]
								_g1 = _g1 + 1
								_g.push(js_Boot.__string_rec(o[p],s))
							}
						}
						$r = _g
						return $r;
					}(this))).join(",") + ")"
				} else {
					return n;
				}
			}
			if(((o) instanceof Array)) {
				let str = "["
				s += "\t";
				let _g = 0
				let _g1 = o.length
				while(_g < _g1) {
					let i = _g++
					str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
				}
				str += "]";
				return str;
			}
			let tostr
			try {
				tostr = o.toString
			} catch( _g ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				let s2 = o.toString()
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			let str = "{\n"
			s += "\t";
			let hasp = o.hasOwnProperty != null
			let k = null
			for( k in o ) {
			if(hasp && !o.hasOwnProperty(k)) {
				continue
			}
			if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
				continue
			}
			if(str.length != 2) {
				str += ", \n";
			}
			str += s + k + " : " + js_Boot.__string_rec(o[k],s);
			}
			s = s.substring(1)
			str += "\n" + s + "}";
			return str;
		case "string":
			return o;
		default:
			return String(o);
		}
	}
}
js_Boot.__name__ = true
class utils_Fn {
	static proto(obj) {
		return obj.prototype;
	}
}
utils_Fn.__name__ = true
String.__name__ = true
Array.__name__ = true
js_Boot.__toStr = ({ }).toString
TestPlugin.textSpeed = 2
TestPlugin.main()
})({})
