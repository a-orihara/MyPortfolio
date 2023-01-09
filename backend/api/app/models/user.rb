# 1
class User < ApplicationRecord
  # 2 ↓validates(:name, presence: true)と同じ意味
  validates :name,  presence: true
  validates :email, presence: true
end

=begin
=        ==        ==        ==        ==        ==        ==        ==        ==        =
1
class User < ApplicationRecord という構文で、User クラスは ApplicationRecord を継承するので、User
モデルは自 動的に ActiveRecord::Base クラスのすべての機能を持つことになります。

-        --        --        --        --        --        --        --        --        -
2
以下のメソッドではバリデーションメソッドがトリガされ、オブジェクトが有効な場合にのみデータベースに保存されます。
create,create!
save,save!
update,update!
*!が末尾に付く破壊的メソッド（save!など）では、レコードが無効な場合に例外が発生します。 非破壊的なメソッドは、
無効な場合に例外を発生しません。saveとupdateは無効な場合にfalseを返し、createは無効な場合に単にそのオブジ
ェクトを返します。

以下のメソッドはバリデーションを行わずにスキップします。オブジェクトの保存は、有効無効にかかわらず行われます。
これらのメソッドの利用には注意が必要です。
decrement!,decrement_counter
increment!
increment_counter
insert,insert!
insert_all,insert_all!
toggle!
touch
touch_all
update_all
update_attribute
update_column
update_columns
update_counters
upsert
upsert_all

=end
