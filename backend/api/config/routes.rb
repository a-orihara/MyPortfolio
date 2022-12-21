Rails.application.routes.draw do

  # 1
  namespace 'api' do
    namespace 'v1' do
      get 'users/new', to: 'users#new'
    end
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

=begin
=          ==          ==          ==          ==          ==          ==          ==          ==
1
namespace: <任意の名前> で名前空間を付与することができます。これはコントローラーをグルーピングし、またURLにもその
情報を付与することを意味します。

APIのURLにはバージョンに関する情報を加えるケースが時折あります。例えば、/restaurants/:restaurant_id/foodsとい
うURLにv1/をつけて、v1/restaurants/:restaurant_id/foodsとします。なぜバージョンをつけるのでしょうか？主な理由
はAPIを更新する場合にスイッチングしやすくするためです。アプリケーションの開発途中でAPIの仕様を大きく変更する必要がで
る場合に備えてURL自体にバージョン番号を持たせます。これは「必要な場合にのみ」つけることを推奨されていますが、今回は慣
れるためにもURLに付与して進めます。

*デフォルトの「Yay! You’re on Rails!」の画面はライブラリで用意されている。
=end



