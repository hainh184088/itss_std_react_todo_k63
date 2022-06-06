/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/

function TodoItem({ item }) {
  var name = {item.text};
  return (
    <label className="panel-block">
      <input
        type="checkbox"
        onClick={document.querySelector(`.${item.text}`) ? 'has-text-grey-light' : ''}
      />
      <span className={{name}}
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;