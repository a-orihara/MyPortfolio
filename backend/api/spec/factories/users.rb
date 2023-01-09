FactoryBot.define do
  # Userモデルのテストデータuserを定義
  # こうすると、テスト内で FactoryBot.create(:user) と書くだけで、簡単に新しいユーザーを作成できます。
  factory :user do
    name { "test" }
    email { "test.email" }
  end
end
