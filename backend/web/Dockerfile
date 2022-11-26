FROM nginx:1.22.1-alpine

# nginxをインストールすると、/etc配下にnginx/nginx.confやnginx/conf.dというディレクトリが生成される
# conf.dディレクトリにバーチャルサーバ毎の設定ファイルを置くことにより、その設定ファイルが読み込まれます。
# インクルード用のディレクトリ内を削除(一旦デフォで作成されているconf.dディレクトリ以下のサンプルファイルを削除)
RUN rm -f /etc/nginx/conf.d/*

# ローカルのビルドコンテキスト内のNginxの設定ファイル:nginx.confをコンテナに新たにファイルを作成してコピー
# アプリごとの設定ファイルは「/etc/nginx/conf.d/」の下に新規で作成し、
# Nginx全体に関わる設定は「/etc/nginx/nginx.conf」を編集するようにします。
# 今回はアプリ単体の設定なので「/etc/nginx/conf.d/api-app.conf」を作成します。
ADD nginx.conf /etc/nginx/conf.d/api-app.conf

# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf

# dockerではコマンドをforegroundで動かさないとコンテナが停止してしまいます。 nginxはデフォルトはデーモン
# として動くので、['daemon off;']でforegroundで動くように設定。

# ./container/nginx/default.conf:/etc/nginx/conf.d/default.conf

