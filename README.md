## アプリ概要
- FAQを蓄積していくSPA(Single Page Application)アプリ。2021年、新年初アプリをお遊びで作成。
- CRUD処理はすべて非同期通信。
- 編集内容も、完了ボタンを押したりすることなく、リアルタイムで裏側に反映される。

## 使用技術

### フロントエンド
- React.js
- axios

### バックエンド
- Django REST Framework

## 起動方法
### React
```
cd react_faq
yarn start (もしくは npm start)

↓

localhost:3000 で立ち上がる。
node が古い場合や yarn が入っていない場合はインストールが必要。
```

### Django
```
python manage.py runserver

↓

localhost:8000 で立ち上がる。
localhost:8000/api/faqs/ へアクセスすると、デバッグできる。
```
