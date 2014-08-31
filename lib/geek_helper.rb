module GeekHelper
  def start_date(item=nil)
    item ||= @item
    Time.parse item[:start]
  end

  def events
    @items.select do |event|
      !!event[:edition]
    end.sort_by do |event|
      -event[:edition]
    end
  end

  def latest
    @@first ||= events.first
  end
end
