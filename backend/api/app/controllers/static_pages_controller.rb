# apiモードでは、[ActionController::Base]を継承しないと動かない。
# [class StaticPagesController < ApplicationController]ではダメ。
class StaticPagesController < ActionController::Base
  def home
  end
end
