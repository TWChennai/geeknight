module GeekHelper
  def start_date(item=nil)
    item ||= @item
    Time.parse item[:start]
  end

  def archives    
    @items.select do |event|
      !!event[:edition]
    end.sort_by do |event|
      -event[:edition]
    end
  end

  def groupYearMonths
    return @items.select {|event| !event[:start].nil?}.sort_by { |i| i[:edition]}.reverse.group_by {|i| [i[:start].to_date.year, i[:start].to_date.strftime("%b %d")]}
  end

  def getEvents
    events=[]
    groupYearMonths.each do |event|
      events.push({event[0].first=>event[0].last})
    end
    return Hash[events.group_by {|i| i.keys}.map{|k,v| [k, v.map{ |k1|  k1.map{|k2,v2| v2 }}.flatten] }]
  end

  def latest
    @@first ||= archives.first
  end

  def json_of_event(item)
    {'@context' => 'http://schema.org', '@type' => 'EducationEvent', 'name' => "Geek Night Chennai - #{Time.parse(item[:start]).strftime("%b %Y")}",
     'startDate' => Time.parse(item[:start]).iso8601, 'url' => "http://twchennai.github.io/geeknight#{item.path}",
     'location' => {'@type' => 'Place', 'name' => 'ThoughtWorks', 'address' => {
        '@type' => 'PostalAddress', 'addressLocality' => 'Chennai', 'addressRegion' => 'Tamil Nadu', 'postalCode' => '600113', 'streetAddress' => 'Ascendas'
    }}}.to_json
  end
end