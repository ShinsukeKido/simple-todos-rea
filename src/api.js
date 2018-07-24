// URLを定義しておく
const ENDPOINT = 'http://localhost:3000';

// `GET /todos` をリクエストする関数を用意する
export const index = () =>
  fetch(`${ENDPOINT}/todos`) // テンプレートリテラルで BASE_URL を展開
    .then(response => response.json()) // レスポンスを JSON として読み込む

// `POST /todos` をリクエストする関数を用意する
export const create = (
  title,
  text, // タイトル、テキストを引数で受け取る
) =>
  // fetch の第二引数で HTTP リクエストの設定を持つオブジェクトを渡す
  fetch(`${ENDPOINT}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // ボディのコンテンツタイプを HTTP ヘッダで指定
    },
    body: JSON.stringify({ text, title }), // HTTP ボディに JSON を文字列化したものを指定
  }).then(response => response.json()); // レスポンスを JSON として読み込む

  // `DELETE /todos/:id` をリクエストする関数を用意する
export const destroy = (
  todoId, // 削除する todo の id を引数で受け取る
) =>
  fetch(`${ENDPOINT}/todos/${todoId}`, {
    method: 'DELETE',
  }).then(response => response.json());
