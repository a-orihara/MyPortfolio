# テストスイート何のほぼ全てのファイルで[require 'rails_helper']が必要。
# ファイル内のテストを実行する為に、Railsアプリの読み込みが必要である事を伝えている。
require 'rails_helper'

# describe （RSpec.describe）メソッドはテストのグループ化を宣言します。
# type: :modelがUserのモデルをテスト
RSpec.describe User, type: :model do
  # 1
  it 'nameとemailがあれば有効である事' do
    # Userクラスのインスタンスを作成し、それをマッチャに渡している
    user = User.new(name: "test", email: "test.email")
    # 2
    expect(user.name).to be_valid
  end
end

=begin
=        ==        ==        ==        ==        ==        ==        ==        ==        =
1
it はテストを  example（it do ... end）という単位にまとめる役割をします。
it do ... end の中のエクスペクテーション（期待値と実際の値の比較）がすべてパスすれば、その example はパス
したことになります。


-        --        --        --        --        --        --        --        --        -
expect(X).to <マッチャ> で記述するのがエクスペクテーションです。
expect には「期待する」という意味があるので、 例えばexpect(X).to eq Y は「XがYに等しくなることを期待する」
と読めます。よって、 expect(1 + 1).to eq 2 は「1 + 1 が 2 になることを期待する」テストになります。
原則として「1つの example につき1つのエクスペクテーション」で書いた方がテストの保守性が良くなります。

=end