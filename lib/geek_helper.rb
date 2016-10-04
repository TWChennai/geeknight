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

  def json_of_event(item)
    {'@context' => 'http://schema.org', '@type' => 'EducationEvent', 'name' => "Geek Night Chennai - #{Time.parse(item[:start]).strftime("%b %Y")}",
     'startDate' => Time.parse(item[:start]).iso8601, 'url' => "http://twchennai.github.io/geeknight#{item.path}",
     'location' => {'@type' => 'Place', 'name' => 'ThoughtWorks', 'address' => {
        '@type' => 'PostalAddress', 'addressLocality' => 'Chennai', 'addressRegion' => 'Tamil Nadu', 'postalCode' => '600113', 'streetAddress' => 'Ascendas'
    }}}.to_json
  end
end
