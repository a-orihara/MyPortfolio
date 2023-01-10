# テストスイート何のほぼ全てのファイルで[require 'rails_helper']が必要。
# ファイル内のテストを実行する為に、Railsアプリの読み込みが必要である事を伝えている。
require 'rails_helper'

# 3
RSpec.describe User, type: :model do
  # # before(:each)フックは各exampleの前に実行されます。
  # before do
  #   # beforeブロックとitブロックの中では変数のスコープが異なるため、インスタンス変数を使用。
  #   # @user = build(:user)
  #   # letで定義されたメソッドを使うと、初期化処理が実行されるのはそのメソッドが呼ばれたときだけ 
  #   let(:user) { build(:user) }
  # end
  let(:user) { build(:user) }
  # ファクトリの有効性を検証
  it '有効なファクトリを持つ事' do
    # buildはメモリに保存されるが、テストDBに保存されない。createはテストDBに保存される
    expect(build(:user)).to be_valid
  end

  # 1
  # モデルの有効性を検証するテスト
  it 'nameとemailがあれば有効である' do
    # Userクラスのインスタンスを作成し、それをマッチャに渡している
    # 2
    expect(user).to be_valid
  end

  # モデルの存在性を検証するテスト
  it 'nameがなければ無効である' do
    # Userクラスのインスタンスを作成し、それをマッチャに渡している
    # nameをnilにしてインスタンス作成
    user = build(:user, name: nil)
    # 「～ではないこと」を期待する場合は not_to
    expect(user).not_to be_valid
    # expect(user.name).to eq "test"
  end

  it 'emailがなければ無効である' do
    user = build(:user, email: nil)
    expect(user).not_to be_valid
  end

  # 重複を検証するテスト
  it 'emailが重複している場合は無効である' do
    create(:user, email: "testuser_1@example.com")
    user = build(:user, email: "testuser_1@example.com")
    expect(user).not_to be_valid
  end

  # 長さを検証するテスト
  it 'nameが50文字以上であれば無効である' do
    user.name = "a" * 31
    expect(user).not_to be_valid
  end

  it 'emaiが244文字以上であれば無効である' do
    user.email = "a" * 256
    expect(user).not_to be_valid
  end

  # メールフォーマットのテスト
  it '有効なメールフォーマットは有効である' do
    # 4
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
      first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
      user.email = valid_address
      expect(user).to be_valid
    end
  end

  it '無効なメールフォーマットは無効である' do
    user.email = "user@example,com"
    expect(user).not_to be_valid
  end
end

=begin
=        ==        ==        ==        ==        ==        ==        ==        ==        =
1
itはテストをexample（it do ... end）という単位にまとめる役割をします。
it do ... end の中のエクスペクテーション（期待値と実際の値の比較）がすべてパスすれば、そのexampleはパス
したことになります。


-        --        --        --        --        --        --        --        --        -
2
expect(X).to <マッチャ> で記述するのがエクスペクテーションです。
expect には「期待する」という意味があるので、 例えばexpect(X).to eq Y は「XがYに等しくなることを期待する」
と読めます。よって、 expect(1 + 1).to eq 2 は「1 + 1 が 2 になることを期待する」テストになります。
原則として「1つの example につき1つのエクスペクテーション」で書いた方がテストの保守性が良くなります。

be_xxx (predicateマッチャ)
RSpecで特徴的なのが、 valid? のようにメソッド名が「?」で終わり、戻り値が true / false になるメソッドを
be_valid のような形式で検証できることです。
e.g
# user.valid? が true になればパスする
expect(user).to be_valid

be_valid:あることを期待してその通りの結果になるのかをテストする

-        --        --        --        --        --        --        --        --        -
3
# describe （RSpec.describe）メソッドはテストのグループ化を宣言します。
e.g.
RSpec.describe '四則演算'
ここでは「四則演算に関するテストを書くよー」と宣言しています。

# type: :modelがUserのモデルをテスト
# この中ではモデルで定義したメソッドを使える

-        --        --        --        --        --        --        --        --        -
4
%w記法とは、文字列からなる配列を作成したいときに「[ ]」(ブラケット)や「" "」(ダブルクォーテーション)を省略
して記述するためのRubyの構文です。


=end
