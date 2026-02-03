// レシピデータ（増量版）
const recipes = [
  { name: "卵チャーハン", ingredients: ["卵", "ご飯", "ネギ"] },
  { name: "オムライス", ingredients: ["卵", "ご飯", "ケチャップ"] },
  { name: "目玉焼き", ingredients: ["卵"] },
  { name: "野菜炒め", ingredients: ["キャベツ", "にんじん", "ピーマン"] },
  { name: "カレーライス", ingredients: ["ご飯", "玉ねぎ", "にんじん", "じゃがいも", "カレールー"] },
  { name: "ハンバーグ", ingredients: ["合いびき肉", "玉ねぎ", "パン粉", "卵"] },
  { name: "味噌汁", ingredients: ["味噌", "豆腐", "わかめ", "ネギ"] },
  { name: "スパゲッティナポリタン", ingredients: ["パスタ", "ケチャップ", "玉ねぎ", "ピーマン", "ウインナー"] },
  { name: "サラダ", ingredients: ["レタス", "トマト", "きゅうり", "玉ねぎ"] },
  { name: "親子丼", ingredients: ["卵", "鶏肉", "玉ねぎ", "ご飯", "だし"] },
  { name: "肉じゃが", ingredients: ["じゃがいも", "にんじん", "玉ねぎ", "牛肉", "しょうゆ", "砂糖"] },
  { name: "照り焼きチキン", ingredients: ["鶏もも肉", "しょうゆ", "みりん", "砂糖"] },
  { name: "鮭の塩焼き", ingredients: ["鮭", "塩"] },
  { name: "春巻き", ingredients: ["春巻きの皮", "豚ひき肉", "もやし", "にんじん"] },
  { name: "焼きそば", ingredients: ["焼きそば麺", "キャベツ", "豚肉", "ウスターソース"] },
  { name: "餃子", ingredients: ["餃子の皮", "豚ひき肉", "キャベツ", "にら", "しょうが"] },
  { name: "お好み焼き", ingredients: ["小麦粉", "キャベツ", "卵", "豚肉", "お好みソース"] },
  { name: "カツ丼", ingredients: ["豚カツ", "卵", "玉ねぎ", "ご飯", "だし"] },
  { name: "チャーハン", ingredients: ["ご飯", "卵", "ネギ", "ハム"] },
  { name: "シチュー", ingredients: ["じゃがいも", "にんじん", "玉ねぎ", "鶏肉", "シチューのルー"] },
  { name: "コロッケ", ingredients: ["じゃがいも", "玉ねぎ", "合いびき肉", "パン粉", "卵"] },
  { name: "フライドチキン", ingredients: ["鶏肉", "小麦粉", "卵", "パン粉", "塩"] },
  { name: "たまごサンド", ingredients: ["卵", "パン", "マヨネーズ"] }
];

// ボタンにイベント
document.getElementById("searchButton").addEventListener("click", search);

function search() {
  const input = document.getElementById("ingredientsInput").value;

  const userIngredients = input
    .split(/,|、/)
    .map(i => i.trim())
    .filter(i => i !== "");

  const result = document.getElementById("result");
  result.innerHTML = "";

  if (userIngredients.length === 0) {
    result.textContent = "材料を入力してください";
    return;
  }

  let found = false;

  recipes.forEach(recipe => {
    const matched = recipe.ingredients.filter(ing => userIngredients.includes(ing));
    const missing = recipe.ingredients.filter(ing => !userIngredients.includes(ing));

    if (matched.length >= 1) { // 1つでもあれば表示
      found = true;

      const div = document.createElement("div");
      div.className = "recipe";
      div.innerHTML = `
        <h3>${recipe.name}</h3>
        <p class="all">必要な食材：${recipe.ingredients.join("、")}</p>
        <p class="ok">一致している食材：${matched.join("、")}</p>
        <p class="ng">足りない食材：${missing.join("、") || "なし 🎉"}</p>
      `;
      result.appendChild(div);
    }
  });

  if (!found) {
    result.textContent = "一致する材料がある料理がありません 😢";
  }
}
