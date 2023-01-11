FactoryBot.define do
  # Userモデルのテストデータuserを定義
  # こうすると、テスト内で FactoryBot.create(:user) と書くだけで、簡単に新しいユーザーを作成できます。
  factory :user do
    name { "test" }
    # これが呼び出されるたびに、nの部分に数字が一つずつ増えて入るため、一意性が保たれる
    sequence(:email) { |n| "testuser_#{n}@example.com" }
    # has_secure_passwordを追加した事により、下2つの属性（カラム）が使える
    password { "foobar" }
    password_confirmation { "foobar" }
  end
end
