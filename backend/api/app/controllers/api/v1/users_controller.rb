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
      end

    end
  end
end

# =        ==        ==        ==        ==        ==        ==        ==        ==        =
# 1
# module Apiとすることで、名前空間を指定しています。
# [users_controller]は、api/v1/ディレクトリにあるので、
# 「apiの下の、v1の下の、class RestaurantsController」となります。

# 2
# rubyでは継承を継承先 < 継承元で表します。
# rails apiモードの場合は、ApplicationControllerは、ActionController::APIを継承するようになります。
