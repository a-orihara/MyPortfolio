# Be sure to restart your server when you modify this file.
# [このファイルを変更した場合は、必ずサーバーを再起動してください。]

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin AJAX requests.
# [フロントエンドアプリからAPIを呼び出す際のCORS問題を回避する。
# クロスオリジンのAJAXリクエストを受け入れるために、クロスオリジンリソース共有（CORS）を処理します。]

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    # origins (文字列 or 正規表現): どのオリジンを許可するか（APIをうつ側のドメイン）
    # 本番:'http://localhost:80', 開発:'http://localhost:4000'
    # origins ['http://localhost:80', 'http://localhost:3002']
    origins "*"

    # resource (文字列 or 正規表現): 許可したいリソースファイル
    resource '*',
      # headers (文字列 or Array or :any): 許可したいHTTPヘッダー
      headers: :any,
      # methods (文字列 or Array or :any): 許可したいHTTPメソッド
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
