import "./styles.css";

const onClickadd = () => {
  //テキストボックスの値を取得し、初期化する。
  const inputtext = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompletelist(inputtext);
};

//未完了リストから指定の要素を削除
const deletefromincompletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompletelist = (text) => {
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //buttonの完了生成
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    const completetarget = deletebutton.parentNode;
    document.getElementById("incomplete-list").removeChild(completetarget);

    //完了リストに追加する要素
    const addtarget = completebutton.parentNode;

    //TODO内容テキスト取得
    const text = addtarget.firstElementChild.innerText;

    //div以下を省略
    addtarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタンの親タグdivを完了リストから削除
      const deletetarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deletetarget);

      //テキスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompletelist(text);
    });

    //divタグの子要素に各要素を設定
    addtarget.appendChild(li);
    addtarget.appendChild(backbutton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addtarget);
  });

  //button削除タグ生成
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  //押された削除ボタンの親タグ(div)を未完了リストから削除
  deletebutton.addEventListener("click", () => {
    const deletetarget = deletebutton.parentNode;
    document.getElementById("incomplete-list").removeChild(deletetarget);
  });

  //divタグの子要素にliタグを設定
  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickadd());
