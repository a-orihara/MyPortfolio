# 1

# Puma can serve each request in a thread from an internal thread pool.
# The `threads` method setting takes two numbers: a minimum and maximum.
# Any libraries that use thread pools should be configured to match
# the maximum value specified for Puma. Default is set to 5 threads for minimum
# and maximum; this matches the default thread size of Active Record.
# [threads` メソッドの設定には、最小値と最大値の2つの数値が必要です。]
# [Puma は内部スレッドプールから各リクエストをスレッドで処理することができます。]
# [スレッドプールを使用するライブラリは、Puma に指定された最大値と一致するように設定する必要があります。
# デフォルトでは、最小と最大で 5 スレッドに設定されています。これは Active Record のデフォルトのス
# レッドサイズと同じです。]
#
# 3
# 変数max_threads_countを定義。Defaultの設定。
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
# 変数min_threads_countを定義。Defaultの設定。
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
# スレッドの最小数, 最大数を定義。Defaultの設定。
threads min_threads_count, max_threads_count

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# Specifies the `worker_timeout` threshold that Puma will use to wait before
# terminating a worker in development environments.
# [開発環境において、Puma がワーカーを終了させる前に待つ `worker_timeout` の閾値を指定します。]
#
# pumaのworkerのタイムアウト時間を定義。Defaultの設定。
worker_timeout 3600 if ENV.fetch("RAILS_ENV", "development") == "development"

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# Specifies the `port` that Puma will listen on to receive requests; default is 3000.
# [Puma がリクエストを受け取るためにリッスンする `port` を指定します。デフォルトは 3000 です。]
#
# ↓pumaをどの環境で動作させるか指定。Defaultの設定。
# port ENV.fetch("PORT") { 3000 }

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# Specifies the `environment` that Puma will run in.
# [Puma が実行される `environment` を指定します。]
#
environment ENV.fetch("RAILS_ENV") { "development" }

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# Specifies the `pidfile` that Puma will use.
# [Puma が使用する `pidfile` を指定します。]
#
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# Specifies the number of `workers` to boot in clustered mode.
# Workers are forked web server processes. If using threads and workers together
# the concurrency of the application would be max `threads` * `workers`.
# Workers do not work on JRuby or Windows (both of which do not support
# processes).
#
# workers ENV.fetch("WEB_CONCURRENCY") { 2 }

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# Use the `preload_app!` method when specifying a `workers` number.
# This directive tells Puma to first boot the application and load code
# before forking the application. This takes advantage of Copy On Write
# process behavior so workers use less memory.
#
# preload_app!

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# Allow puma to be restarted by `rails restart` command.
# [puma を `rails restart` コマンドで再起動できるようにしました。]
#
# pumaを`rails restart`コマンドで再起動できるように設定。Defaultの設定。
plugin :tmp_restart

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# 2 下記がNginxを使用した時に追加で記載した内容
# app_rootの設定
app_root = File.expand_path("../..", __FILE__)
# 本番環境では、NginxをリバースプロキシとしてPumaの前段におき、UNIXドメインソケットを経由してNginxとPumaが通信を行う。
# bind "unix://#{Rails.root}/tmp/sockets/puma.sock"
bind "unix://#{app_root}/tmp/sockets/puma.sock"
# stdout_redirect: 標準出力/標準エラーを出力するファイル
stdout_redirect "#{app_root}/log/puma.stdout.log", "#{app_root}/log/puma.stderr.log", true
# PIDファイルの設置場所。Defaultの設定。
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

# =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =   =
# 1
# Railsで開発をする場合にrails serverをすることで、Pumaが起動している。
# Pumaのwebサーバーとしての機能はおまけ程度で、[Rack] という機能を提供するアプリケーションサーバーという位置づけ
# Pumaは、Railsの場合、config/puma.rb で詳細な設定をすることができる。
# もちろん、オプションコマンドで設定も可能であるが、毎回コマンドを打つのが面倒なので、設定ファイルに用いる。
# 開発時は、Defaultの設定で問題ない
# 本番環境では、Nginxをリバースプロキシ（webサーバーの前段に置くサーバー）としてPumaの前段におき、
# UNIXドメインソケットを経由してNginxとPumaが通信を行う。

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# 2
# __FILE__:現在実行しているファイル(＝このpuma.rb)
# きっちりした解説だと、「現在のソースファイル名が格納された疑似変数」。
# File.expand_path:相対パスを絶対パスに変換した文字列を返す
# 絶対パスが返ってくるわけではないので、絶対パスを取りたいときはFile.expand_pathを使う。
# "../..:二階層上のディレクトリ"。このpuma.rbの二階層上は/api
# 現在実行しているファイル(＝このpuma.rb)の"../.."を絶対パスに変換した文字列を返す

# -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
# 3
# ENVはrubyのオブジェクト、ENV["環境変数名"]で環境変数を呼び出す。
# ENV["環境変数名"]は環境変数が存在しないと、nilが返ってくる
# ENV['hoge'] || 'default'// 存在しない場合のデフォルト値を設定できる
# ENV.fetch("キー名"){"デフォルト値"}
# 指定したキー名が存在しなかった場合に、返却するデフォルト値を設定する
# ex:ENV.fetch("SAMPLE"){"SAMPLEは存在しませんでした。"}
# ex:environment ENV.fetch("RAILS_ENV") { ENV['RACK_ENV'] || "production" }
# Pumaを実行する環境をRAILS_ENVの環境にしており、存在しない場合は、ENV['RACK_ENV']または、productionにするという設定。