# 1
module Api
  module V1
    # 2
    class UsersController < ApplicationController
      def new
      end

      # GET:/users
      def index
        # @usersでなくてもいい
        users = User.all
        # 3
        render json: {users: users}, status: :ok
      end

    end
  end
end

=begin
=        ==        ==        ==        ==        ==        ==        ==        ==        =
1
module Apiとすることで、名前空間を指定しています。
[users_controller]は、api/v1/ディレクトリにあるので、
「apiの下の、v1の下の、class RestaurantsController」となります。
-        --        --        --        --        --        --        --        --        -
2
rubyでは継承を継承先 < 継承元で表します。
rails apiモードの場合は、ApplicationControllerは、ActionController::APIを継承するようになります。

-        --        --        --        --        --        --        --        --        -
3
Railsでは、renderメソッドを使って簡単にJSON形式のデータを返却することができます。

renderメソッドは、呼び出すテンプレート（ビュー）ファイルを指定するメソッドですが、オプションにjsonをつける事で、
指定したオブジェクトをJSON形式のデータでレスポンスを返すことができます。
render :json => <オブジェクト>
*render(:json)こういう感じ。
*renderメソッドとは、呼び出すテンプレート（ビュー）ファイルを指定するメソッドです。コントローラー・ビューどちら
でも使うことができます。
*render ファイル名、アクション名など
*レンダリングとはビューファイルから最終的にhtmlにコンパイルされたモノをブラウザで読み込んで表示させることを言い
ます。

=end