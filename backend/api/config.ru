# This file is used by Rack-based servers to start the application.
# [このファイルは、Rackベースのサーバーがアプリケーションを起動する事によって使用されます。]

# このファイルはRack(Rubyで書かれたミドルウェア)のサーバ起動コマンドrackupの設定ファイルです。
# railsでは[rails s]の時に呼ばれます。
# config.ruはrackupの略。rackupはRackというライブラリ(gem)が提供するコマンド。
# Rackとは、WebサーバーとRubyやRuby製フレームワーク(RailsやSinatraなど)のインターフェース。
# これがないとWebサーバーからのリクエストがアプリに届かない。WebサーバーとRailsなどのフレームワークは、
# お互い異なる言語で会話しているので、Webサーバーからお願いされてもフレームワーク側は何を言われているの
# か分からない状態。Rackが間に挟まることによって、双方の言語を翻訳してリクエストとレスポンスのやりとりを
# できるようにしてくれるイメージ。

require_relative "config/environment"

# runにアプリのオブジェクトを渡すことによってRackが機能する。
# 開発環境でNginxを使用するため、下記コメントアウト
# run Rails.application
# 開発環境でNginxを使用するため、下記3行追加
map ActionController::Base.config.relative_url_root || "/" do
  run Rails.application
end
Rails.application.load_server
