import rm.scenes.Scene_Battle;
import rm.managers.BattleManager;
import rm.managers.SceneManager;
import rm.objects.Game_Temp;
import rm.Globals;
import rm.abstracts.managers.DataMgr;
import rm.types.RPG.BaseItem;
import core.Types.JsFn;
import rm.scenes.Scene_Item;
import macros.MacroTools;
import utils.Fn;
import utils.Comment;

using Std;
using StringTools;
using Lambda;

class LunaMonsterBox {
 public static function main() {
  // Plugin parameters can be include here as an internal call.
  // MacroTools.includeJsLib("./src/TestPluginParams.js");

  Comment.title("Scene_Item");
  var sceneItemUseItem: JsFn = Fn.getPrProp(Scene_Item, "useItem");
  Fn.setPrProp(Scene_Item, "useItem", () -> {
   sceneItemUseItem.call(Fn.self);
   var self: Dynamic = Fn.self;
   self.processMonsterBox(self.item());
  });

  Fn.setPrProp(Scene_Item, "processMonsterBox", (item: BaseItem) -> {
   var dynItem: Dynamic = item;
   if (DataMgr.isItem(item) && dynItem.consumable) {
    var re = ~/<\s*TroopList\s*:\s*([^<>]*)\s*>/ig;
    if (re.match(item.note)) {
     var troopIds = re.matched(1).trim().split(",").map((id) -> {
      var intId: Int = cast Fn.parseIntJs(id.trim(), 10);
      return intId;
     });
     if (!troopIds.exists((id) -> !(Fn.typeof(id) == 'number'))) {
      Fn.getField(Globals.GameTemp, "monsterBox")(troopIds);
     }
    }
   }
  });

  Comment.title("Game_Temp");
  Fn.setPrProp(Game_Temp, "monsterBox",
   (troopIds: Array<Int>, canEscape: Bool, canLose: Bool) -> {
    var id = troopIds[Math.floor(Math.random() * (troopIds.length - 1))];
    canEscape = canEscape == null ? false : canEscape;
    canLose = canLose == null ? false : canLose;
    BattleManager.setup(id, canEscape, canLose);
    Globals.GamePlayer.makeEncounterCount();
    SceneManager.push(Scene_Battle);
   });
 }
}
